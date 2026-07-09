// models/Problem.js
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema(
  {
    leetcodeId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Please provide a problem name'],
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      required: [true, 'Please specify difficulty level'],
    },
    topic: {
      type: String,
      required: [true, 'Please specify a topic'],
    },
    subcategory: {
      type: String,
    },
    acceptance: {
      type: String, // e.g., "34.1%"
    },
    url: {
      type: String,
    },
    description: {
      type: String,
    },
    constraints: {
      type: String,
    },
    examples: [
      {
        input: String,
        output: String,
        explanation: String,
      },
    ],
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Index for faster queries
problemSchema.index({ difficulty: 1, topic: 1 });
problemSchema.index({ name: 'text' });

module.exports = mongoose.model('Problem', problemSchema);
