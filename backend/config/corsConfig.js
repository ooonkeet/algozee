// config/corsConfig.js
// Centralised CORS configuration used by both Express and Socket.io

const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ||
  'http://localhost:3000,http://localhost:5000,http://localhost:5500,http://127.0.0.1:5500,http://127.0.0.1:5000,http://127.0.0.1:3000'
)
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (curl, Postman, mobile apps, file://)
    if (!origin) return callback(null, true);

    // Allow any localhost / 127.0.0.1 origin in development
    if (
      process.env.NODE_ENV !== 'production' &&
      (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:'))
    ) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: origin '${origin}' is not allowed`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['X-Total-Count', 'X-Page', 'X-Pages'],
  maxAge: 86400,
};

// Subset for Socket.io
const socketCorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (
      process.env.NODE_ENV !== 'production' &&
      (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:'))
    ) {
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: origin '${origin}' is not allowed`));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true,
};

module.exports = { corsOptions, socketCorsOptions };
