// models/Visualization.js
const mongoose = require('mongoose');

const visualizationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    algorithmName: {
      type: String,
      required: [true, 'Please provide algorithm name'],
    },
    input: {
      type: String,
      required: true,
    },
    output: {
      type: String,
      required: true,
    },
    steps: [
      {
        stepNumber: Number,
        description: String,
        array: [mongoose.Schema.Types.Mixed],
        currentIndex: Number,
        comparedIndices: [Number],
      },
    ],
    executionTime: { type: Number, default: 0 }, // in ms
    complexity: {
      time: { type: String, default: '' },
      space: { type: String, default: '' },
    },
    notes: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Index for faster queries
visualizationSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Visualization', visualizationSchema);
