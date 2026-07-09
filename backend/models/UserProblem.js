// models/UserProblem.js
const mongoose = require('mongoose');

const userProblemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    problemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problem',
      required: true,
    },
    status: {
      type: String,
      enum: ['todo', 'in_progress', 'solved', 'attempted'],
      default: 'todo',
    },
    attempts: { type: Number, default: 0 },
    notes: { type: String, default: '' },
    solutionCode: { type: String, default: '' },
    solutionLanguage: { type: String, default: 'javascript' },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
    },
    topic: { type: String },
    lastAttemptDate: { type: Date, default: null },
    solvedDate: { type: Date, default: null },
    timeSpent: { type: Number, default: 0 }, // in minutes
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Index for faster queries
userProblemSchema.index({ userId: 1, problemId: 1 }, { unique: true });
userProblemSchema.index({ userId: 1, status: 1 });
userProblemSchema.index({ userId: 1, solvedDate: 1 });

module.exports = mongoose.model('UserProblem', userProblemSchema);
