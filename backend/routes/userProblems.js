// routes/userProblems.js
const express = require('express');
const router = express.Router();
const {
  getUserProblemProgress,
  upsertUserProblem,
  patchUserProblem,
  deleteUserProblem,
  resetUserProgress,
} = require('../controllers/userProblemController');
const { protect } = require('../middleware/auth');

// All routes require auth
router.use(protect);

// Upsert (create or update) progress
router.post('/', upsertUserProblem);

// Patch a specific record
router.patch('/:id', patchUserProblem);

// Delete a specific record
router.delete('/:id', deleteUserProblem);

// Reset all progress for a user
router.delete('/user/:userId/reset', resetUserProgress);

// Get progress for a specific user + problem
router.get('/:userId/:problemId', getUserProblemProgress);

module.exports = router;
