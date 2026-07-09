// services/socketService.js
// Full Socket.io service — rooms, live updates, online tracking, real-time streaks
const jwt = require('jsonwebtoken');
const Streak = require('../models/Streak');
const UserProblem = require('../models/UserProblem');

// ─── In-memory state ──────────────────────────────────────────────────────────
// Map<userId, Set<socketId>>  — one user may have multiple tabs open
const onlineUsers = new Map();

// Map<roomName, Set<socketId>>
const rooms = new Map();

// ─── Helpers ──────────────────────────────────────────────────────────────────
const addOnlineUser = (userId, socketId) => {
  if (!onlineUsers.has(userId)) onlineUsers.set(userId, new Set());
  onlineUsers.get(userId).add(socketId);
};

const removeOnlineUser = (userId, socketId) => {
  if (!onlineUsers.has(userId)) return;
  onlineUsers.get(userId).delete(socketId);
  if (onlineUsers.get(userId).size === 0) onlineUsers.delete(userId);
};

const getOnlineCount = () => onlineUsers.size;

const getOnlineUserIds = () => [...onlineUsers.keys()];

const broadcastOnlineCount = (io) => {
  io.emit('online-count', { count: getOnlineCount(), users: getOnlineUserIds() });
};

// Authenticate socket via JWT passed in handshake auth
const authenticateSocket = (socket) => {
  try {
    const token = socket.handshake.auth?.token || socket.handshake.query?.token;
    if (!token) return null;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch {
    return null;
  }
};

// ─── Main initializer ─────────────────────────────────────────────────────────
const initSocketService = (io) => {

  // ── Auth middleware ─────────────────────────────────────────────────────────
  io.use((socket, next) => {
    // Allow unauthenticated connections — user id will be null for guests
    socket.userId = authenticateSocket(socket);
    next();
  });

  // ── Connection handler ──────────────────────────────────────────────────────
  io.on('connection', (socket) => {
    const userId = socket.userId;
    console.log(`✅ Socket connected: ${socket.id}  userId: ${userId || 'guest'}`);

    // Track online user
    if (userId) {
      addOnlineUser(userId, socket.id);
      broadcastOnlineCount(io);

      // Join a personal room so server can push targeted events
      socket.join(`user:${userId}`);
    }

    // ── Welcome ──────────────────────────────────────────────────────────────
    socket.emit('welcome', {
      message: 'Connected to Algozee server',
      socketId: socket.id,
      userId: userId || null,
      onlineCount: getOnlineCount(),
    });

    // ── Join topic / problem rooms ────────────────────────────────────────────
    socket.on('join-room', ({ room }) => {
      if (!room || typeof room !== 'string') return;
      const roomName = room.substring(0, 64); // cap length
      socket.join(roomName);
      if (!rooms.has(roomName)) rooms.set(roomName, new Set());
      rooms.get(roomName).add(socket.id);

      socket.emit('room-joined', { room: roomName, members: rooms.get(roomName).size });
      socket.to(roomName).emit('room-member-joined', { room: roomName, socketId: socket.id });
      console.log(`📦 ${socket.id} joined room: ${roomName}`);
    });

    socket.on('leave-room', ({ room }) => {
      socket.leave(room);
      if (rooms.has(room)) {
        rooms.get(room).delete(socket.id);
        if (rooms.get(room).size === 0) rooms.delete(room);
      }
      socket.to(room).emit('room-member-left', { room, socketId: socket.id });
    });

    // ── Problem status update (live progress sync) ────────────────────────────
    socket.on('update-problem-status', async (data) => {
      try {
        const { problemId, status, topic } = data;
        if (!userId || !problemId || !status) return;

        // Broadcast to user's other tabs
        socket.to(`user:${userId}`).emit('problem-status-updated', {
          problemId,
          status,
          topic,
          updatedAt: new Date().toISOString(),
        });

        // If solved, fetch and broadcast updated streak
        if (status === 'solved') {
          const streak = await Streak.findOne({ userId }).lean();
          if (streak) {
            // Emit to the user's personal room
            io.to(`user:${userId}`).emit('streak-updated', {
              currentStreak: streak.currentStreak,
              longestStreak: streak.longestStreak,
              lastActiveDate: streak.lastActiveDate,
            });

            // Broadcast a public "someone solved a problem!" event (anonymised)
            io.emit('problem-solved-global', {
              topic: topic || 'unknown',
              difficulty: data.difficulty || 'unknown',
              timestamp: new Date().toISOString(),
            });
          }
        }

        // Broadcast live activity to anyone watching the topic room
        if (topic) {
          socket.to(`topic:${topic}`).emit('topic-activity', {
            problemId,
            status,
            timestamp: new Date().toISOString(),
          });
        }
      } catch (err) {
        console.error('❌ update-problem-status error:', err.message);
        socket.emit('error', { message: 'Failed to process problem update' });
      }
    });

    // ── Streak ping (client asks for current streak) ──────────────────────────
    socket.on('get-streak', async () => {
      if (!userId) return socket.emit('error', { message: 'Not authenticated' });
      try {
        const streak = await Streak.findOne({ userId }).lean();
        socket.emit('streak-data', {
          currentStreak: streak?.currentStreak || 0,
          longestStreak: streak?.longestStreak || 0,
          lastActiveDate: streak?.lastActiveDate || null,
          totalDaysActive: streak?.totalDaysActive || 0,
        });
      } catch (err) {
        socket.emit('error', { message: 'Failed to fetch streak' });
      }
    });

    // ── Dashboard refresh request ─────────────────────────────────────────────
    socket.on('request-dashboard-refresh', async () => {
      if (!userId) return;
      try {
        const [solved, attempted] = await Promise.all([
          UserProblem.countDocuments({ userId, status: 'solved' }),
          UserProblem.countDocuments({ userId, status: { $in: ['attempted', 'in_progress'] } }),
        ]);
        socket.emit('dashboard-stats-update', { solved, attempted });
      } catch (err) {
        socket.emit('error', { message: 'Failed to refresh dashboard' });
      }
    });

    // ── Typing indicator (for future collaborative features) ──────────────────
    socket.on('typing', ({ room, username }) => {
      if (room && username) {
        socket.to(room).emit('user-typing', { username, socketId: socket.id });
      }
    });

    socket.on('stop-typing', ({ room }) => {
      if (room) socket.to(room).emit('user-stopped-typing', { socketId: socket.id });
    });

    // ── Ping / pong latency check ─────────────────────────────────────────────
    socket.on('ping-check', (cb) => {
      if (typeof cb === 'function') cb({ pong: true, timestamp: Date.now() });
    });

    // ── Disconnect ────────────────────────────────────────────────────────────
    socket.on('disconnect', (reason) => {
      console.log(`❌ Socket disconnected: ${socket.id}  reason: ${reason}`);

      if (userId) {
        removeOnlineUser(userId, socket.id);
        broadcastOnlineCount(io);
      }

      // Clean up room memberships
      rooms.forEach((members, roomName) => {
        if (members.has(socket.id)) {
          members.delete(socket.id);
          socket.to(roomName).emit('room-member-left', { room: roomName, socketId: socket.id });
          if (members.size === 0) rooms.delete(roomName);
        }
      });
    });
  });

  console.log('✅ Socket.io service initialised');
};

// ─── Utility: emit to a specific user from a controller ──────────────────────
// Usage: emitToUser(req.app.get('io'), userId, 'event-name', payload)
const emitToUser = (io, userId, event, data) => {
  io.to(`user:${userId}`).emit(event, data);
};

// Emit a global broadcast from a controller
const emitGlobal = (io, event, data) => {
  io.emit(event, data);
};

module.exports = { initSocketService, emitToUser, emitGlobal };
