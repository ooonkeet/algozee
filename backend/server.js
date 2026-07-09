// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const { createServer } = require('http');
const { Server: SocketIO } = require('socket.io');

// Import database connection
const connectDB = require('./config/db');

// Import models (to ensure schemas are registered)
const User = require('./models/User');
const Problem = require('./models/Problem');
const UserProblem = require('./models/UserProblem');
const Streak = require('./models/Streak');
const Submission = require('./models/Submission');
const Visualization = require('./models/Visualization');

// Initialize express app
const app = express();
const httpServer = createServer(app);

// Socket.io setup
const io = new SocketIO(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(helmet()); // Security headers
app.use(compression()); // Compress responses
app.use(morgan('dev')); // Logging
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Connect to MongoDB
connectDB();

// ========================
// ROUTES (To be implemented)
// ========================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: '✅ Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Welcome endpoint
app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Algozee Backend API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      problems: '/api/problems',
      'user-problems': '/api/user-problems',
      submissions: '/api/submissions',
      dashboard: '/api/dashboard',
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '❌ Route not found',
    path: req.path,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

// ========================
// SOCKET.IO EVENTS
// ========================

io.on('connection', (socket) => {
  console.log(`✅ User connected: ${socket.id}`);

  // Emit welcome message
  socket.emit('welcome', {
    message: 'Connected to Algozee server',
    socketId: socket.id,
  });

  // Broadcast user joined
  socket.broadcast.emit('user-joined', {
    message: 'A new user joined',
    userId: socket.id,
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
    socket.broadcast.emit('user-left', {
      message: 'A user left',
      userId: socket.id,
    });
  });

  // Listen for events (to be implemented)
  socket.on('update-problem-status', (data) => {
    console.log('📝 Problem status updated:', data);
    // Will implement in Phase 4
  });
});

// ========================
// START SERVER
// ========================

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║         🚀 Algozee Backend Server Started                 ║
╚════════════════════════════════════════════════════════════╝

✅ Server running on port ${PORT}
✅ Environment: ${process.env.NODE_ENV || 'development'}
✅ MongoDB: Connecting to database...
✅ WebSocket (Socket.io): Ready for real-time updates

📍 API Base URL: http://localhost:${PORT}/api
📍 WebSocket URL: ws://localhost:${PORT}

Endpoints:
  GET  http://localhost:${PORT}/api           - API Info
  GET  http://localhost:${PORT}/api/health    - Health Check

Press Ctrl+C to stop the server
  `);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err);
  process.exit(1);
});

module.exports = { app, httpServer, io };
