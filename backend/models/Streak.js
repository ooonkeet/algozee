// models/Streak.js
const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    lastActiveDate: { type: Date, default: null },
    streakStartDate: { type: Date, default: null },
    streakHistory: [
      {
        date: { type: Date, default: Date.now },
        problemsSolved: { type: Number, default: 0 },
      },
    ],
    totalDaysActive: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Streak', streakSchema);
