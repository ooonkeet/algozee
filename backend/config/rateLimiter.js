// config/rateLimiter.js
// Reusable rate-limiter presets — imported by server.js
const rateLimit = require('express-rate-limit');

const createLimiter = (windowMinutes, max, message) =>
  rateLimit({
    windowMs: windowMinutes * 60 * 1000,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message },
  });

// 200 req / 15 min per IP — applied globally to /api
const globalLimiter = createLimiter(
  15, 200,
  'Too many requests, please try again later.'
);

// 20 req / 15 min — applied to /api/auth (brute-force protection)
const authLimiter = createLimiter(
  15, 20,
  'Too many authentication attempts, please try again later.'
);

// 10 submissions / min — applied to /api/submissions
const submissionLimiter = createLimiter(
  1, 10,
  'Submission rate limit exceeded. Please wait before submitting again.'
);

// 30 req / min — applied to /api/visualizations
const visualizationLimiter = createLimiter(
  1, 30,
  'Visualization rate limit exceeded.'
);

module.exports = { globalLimiter, authLimiter, submissionLimiter, visualizationLimiter };
