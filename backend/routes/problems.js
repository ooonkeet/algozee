// routes/problems.js
const express = require('express');
const router = express.Router();
const {
  getAllProblems,
  getProblemById,
  getProblemsByTopic,
  getUserProblems,
  createProblem,
  updateProblem,
  deleteProblem,
} = require('../controllers/problemController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/', getAllProblems);
router.get('/topics', getProblemsByTopic);  // must be before /:id
router.get('/:id', getProblemById);

// Protected routes
router.use(protect);
router.get('/user/:userId', getUserProblems);
router.post('/', createProblem);
router.put('/:id', updateProblem);
router.delete('/:id', deleteProblem);

module.exports = router;
