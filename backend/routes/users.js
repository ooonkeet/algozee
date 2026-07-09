// routes/users.js
const express = require('express');
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  updateUserPreferences,
  getUserStats,
  getUserStreak,
  deleteUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const {
  validate,
  validateUpdateProfile,
  validateUpdatePreferences,
} = require('../middleware/validation');

// All user routes are protected
router.use(protect);

// Profile routes
router.get('/:id', getUserProfile);
router.put('/:id', validateUpdateProfile, validate, updateUserProfile);
router.delete('/:id', deleteUser);

// Stats and streak routes
router.get('/:id/stats', getUserStats);
router.get('/:id/streak', getUserStreak);

// Preferences routes
router.put('/:id/preferences', validateUpdatePreferences, validate, updateUserPreferences);

module.exports = router;
