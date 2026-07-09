// routes/auth.js
const express = require('express');
const router = express.Router();
const {
  register,
  login,
  logout,
  refreshToken,
  getCurrentUser,
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const {
  validate,
  validateRegister,
  validateLogin,
} = require('../middleware/validation');

// Public routes
router.post('/register', validateRegister, validate, register);
router.post('/login', validateLogin, validate, login);
router.post('/refresh-token', refreshToken);

// Protected routes
router.post('/logout', protect, logout);
router.get('/me', protect, getCurrentUser);

module.exports = router;
