// models/Badge.js
const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    badgeKey: {
      type: String,
      required: true,
    },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    icon: { type: String, default: '🏆' },
    tier: {
      type: String,
      enum: ['bronze', 'silver', 'gold', 'platinum'],
      default: 'bronze',
    },
    earnedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// A user earns each badge key only once
badgeSchema.index({ userId: 1, badgeKey: 1 }, { unique: true });
badgeSchema.index({ userId: 1, earnedAt: -1 });

module.exports = mongoose.model('Badge', badgeSchema);
