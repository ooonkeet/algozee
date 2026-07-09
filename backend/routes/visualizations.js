// routes/visualizations.js
const express = require('express');
const router = express.Router();
const {
  getSupportedAlgorithms,
  runVisualization,
  getVisualizationHistory,
  getVisualizationById,
  deleteVisualization,
} = require('../controllers/visualizationController');
const { protect } = require('../middleware/auth');

// Public — list algorithms
router.get('/', getSupportedAlgorithms);

// Protected
router.post('/run', protect, runVisualization);
router.get('/history/:userId', protect, getVisualizationHistory);
router.get('/:id', protect, getVisualizationById);
router.delete('/:id', protect, deleteVisualization);

module.exports = router;
