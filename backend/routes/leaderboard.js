// routes/leaderboard.js
const express = require('express');
const router = express.Router();
const {
  getLeaderboard,
  getStreakLeaderboard,
  getTopicLeaderboard,
  getUserRank,
  getUserBadgesHandler,
} = require('../controllers/leaderboardController');
const { protect } = require('../middleware/auth');

// Public
router.get('/', getLeaderboard);
router.get('/streak', getStreakLeaderboard);
router.get('/topic/:topic', getTopicLeaderboard);
router.get('/badges/:userId', getUserBadgesHandler);

// Protected (own rank data)
router.get('/rank/:userId', protect, getUserRank);

module.exports = router;
