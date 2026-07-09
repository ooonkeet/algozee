// routes/submissions.js
const express = require('express');
const router = express.Router();
const {
  createSubmission,
  getUserSubmissions,
  getProblemSubmissions,
  getSubmissionById,
  getSubmissionStats,
} = require('../controllers/submissionController');
const { protect } = require('../middleware/auth');

// All routes require auth
router.use(protect);

// Submit code
router.post('/', createSubmission);

// Get a specific submission
router.get('/:id', getSubmissionById);

// User-scoped routes
router.get('/user/:userId', getUserSubmissions);
router.get('/user/:userId/stats', getSubmissionStats);
router.get('/user/:userId/problem/:problemId', getProblemSubmissions);

module.exports = router;
