// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const { createServer } = require('http');
const { Server: SocketIO } = require('socket.io');

// Config
const connectDB = require('./config/db');
const { corsOptions, socketCorsOptions } = require('./config/corsConfig');
const {
  globalLimiter,
  authLimiter,
  submissionLimiter,
  visualizationLimiter,
} = require('./config/rateLimiter');

// Models (register schemas)
require('./models/User');
require('./models/Problem');
require('./models/UserProblem');
require('./models/Streak');
require('./models/Submission');
require('./models/Visualization');
require('./models/Badge');

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const problemRoutes = require('./routes/problems');
const dashboardRoutes = require('./routes/dashboard');
const userProblemRoutes = require('./routes/userProblems');
const submissionRoutes = require('./routes/submissions');
const leaderboardRoutes = require('./routes/leaderboard');
const visualizationRoutes = require('./routes/visualizations');

// Socket service
const { initSocketService } = require('./services/socketService');

// ─── App & HTTP server ────────────────────────────────────────────────────────
const app = express();
const httpServer = createServer(app);

// ─── Socket.IO ────────────────────────────────────────────────────────────────
const io = new SocketIO(httpServer, { cors: socketCorsOptions });
app.set('io', io); // make io available in controllers via req.app.get('io')

// ─── Core middleware ──────────────────────────────────────────────────────────
app.use(helmet());
app.use(compression());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// ─── Rate limiting ────────────────────────────────────────────────────────────
app.use('/api', globalLimiter);
app.use('/api/auth', authLimiter);
app.use('/api/submissions', submissionLimiter);
app.use('/api/visualizations', visualizationLimiter);

// ─── Database ─────────────────────────────────────────────────────────────────
connectDB();

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/user-problems', userProblemRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/visualizations', visualizationRoutes);

// ─── Utility endpoints ────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: '✅ Server is running',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    env: process.env.NODE_ENV || 'development',
  });
});

app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Algozee Backend API',
    version: '2.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      problems: '/api/problems',
      dashboard: '/api/dashboard',
      'user-problems': '/api/user-problems',
      submissions: '/api/submissions',
      leaderboard: '/api/leaderboard',
      visualizations: '/api/visualizations',
    },
  });
});

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: '❌ Route not found', path: req.path });
});

// ─── Global error handler ─────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('❌ Unhandled Error:', err);

  // Handle CORS error explicitly
  if (err.message?.startsWith('CORS:')) {
    return res.status(403).json({ success: false, message: err.message });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

// ─── Socket.IO service ────────────────────────────────────────────────────────
initSocketService(io);

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║         🚀 Algozee Backend Server Started                 ║
╚════════════════════════════════════════════════════════════╝

  Environment : ${process.env.NODE_ENV || 'development'}
  Port        : ${PORT}
  API         : http://localhost:${PORT}/api
  WebSocket   : ws://localhost:${PORT}
  `);
});

process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err);
  process.exit(1);
});

module.exports = { app, httpServer, io };
