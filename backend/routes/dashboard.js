// routes/dashboard.js
const express = require('express');
const router = express.Router();
const { getDashboardStats, getGlobalStats } = require('../controllers/dashboardController');
const { protect } = require('../middleware/auth');

// Public
router.get('/global', getGlobalStats);

// Protected
router.get('/:userId', protect, getDashboardStats);

module.exports = router;
