// services/badgeService.js
// Centralised badge-award logic. Call checkAndAwardBadges() after any stat change.
const Badge = require('../models/Badge');
const User = require('../models/User');
const Streak = require('../models/Streak');
const UserProblem = require('../models/UserProblem');

// ─── Badge catalogue ──────────────────────────────────────────────────────────
// Each entry describes the badge and the async condition that must be true.
// condition(userId) => boolean
const BADGE_CATALOGUE = [
  // ── First steps
  {
    key: 'first_solve',
    name: 'First Blood',
    description: 'Solve your very first problem',
    icon: '🩸',
    tier: 'bronze',
    condition: async (userId) => {
      const count = await UserProblem.countDocuments({ userId, status: 'solved' });
      return count >= 1;
    },
  },
  // ── Volume badges
  {
    key: 'solve_10',
    name: 'Getting Started',
    description: 'Solve 10 problems',
    icon: '🌱',
    tier: 'bronze',
    condition: async (userId) => {
      const count = await UserProblem.countDocuments({ userId, status: 'solved' });
      return count >= 10;
    },
  },
  {
    key: 'solve_50',
    name: 'Problem Crusher',
    description: 'Solve 50 problems',
    icon: '💪',
    tier: 'silver',
    condition: async (userId) => {
      const count = await UserProblem.countDocuments({ userId, status: 'solved' });
      return count >= 50;
    },
  },
  {
    key: 'solve_100',
    name: 'Century Club',
    description: 'Solve 100 problems',
    icon: '💯',
    tier: 'gold',
    condition: async (userId) => {
      const count = await UserProblem.countDocuments({ userId, status: 'solved' });
      return count >= 100;
    },
  },
  {
    key: 'solve_250',
    name: 'Algorithm Master',
    description: 'Solve 250 problems',
    icon: '🧠',
    tier: 'platinum',
    condition: async (userId) => {
      const count = await UserProblem.countDocuments({ userId, status: 'solved' });
      return count >= 250;
    },
  },
  // ── Difficulty badges
  {
    key: 'hard_first',
    name: 'Hard Mode',
    description: 'Solve your first Hard problem',
    icon: '🔥',
    tier: 'silver',
    condition: async (userId) => {
      const count = await UserProblem.countDocuments({ userId, status: 'solved', difficulty: 'hard' });
      return count >= 1;
    },
  },
  {
    key: 'hard_10',
    name: 'Hard Boiled',
    description: 'Solve 10 Hard problems',
    icon: '🌋',
    tier: 'gold',
    condition: async (userId) => {
      const count = await UserProblem.countDocuments({ userId, status: 'solved', difficulty: 'hard' });
      return count >= 10;
    },
  },
  // ── Streak badges
  {
    key: 'streak_7',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '📅',
    tier: 'bronze',
    condition: async (userId) => {
      const streak = await Streak.findOne({ userId }).lean();
      return (streak?.currentStreak || 0) >= 7;
    },
  },
  {
    key: 'streak_30',
    name: 'Monthly Grinder',
    description: 'Maintain a 30-day streak',
    icon: '🗓️',
    tier: 'silver',
    condition: async (userId) => {
      const streak = await Streak.findOne({ userId }).lean();
      return (streak?.currentStreak || 0) >= 30;
    },
  },
  {
    key: 'streak_100',
    name: 'Centurion',
    description: 'Maintain a 100-day streak',
    icon: '⚡',
    tier: 'gold',
    condition: async (userId) => {
      const streak = await Streak.findOne({ userId }).lean();
      return (streak?.currentStreak || 0) >= 100;
    },
  },
  // ── Topic badges
  {
    key: 'topic_master',
    name: 'Topic Master',
    description: 'Solve 20 problems in a single topic',
    icon: '📚',
    tier: 'silver',
    condition: async (userId) => {
      const topicAgg = await UserProblem.aggregate([
        { $match: { userId: require('mongoose').Types.ObjectId.createFromHexString(userId.toString()), status: 'solved' } },
        { $group: { _id: '$topic', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 },
      ]);
      return topicAgg.length > 0 && topicAgg[0].count >= 20;
    },
  },
  // ── Points badges
  {
    key: 'points_500',
    name: 'Point Collector',
    description: 'Earn 500 points',
    icon: '🌟',
    tier: 'bronze',
    condition: async (userId) => {
      const user = await User.findById(userId).lean();
      return (user?.stats?.points || 0) >= 500;
    },
  },
  {
    key: 'points_2000',
    name: 'High Scorer',
    description: 'Earn 2000 points',
    icon: '🏅',
    tier: 'silver',
    condition: async (userId) => {
      const user = await User.findById(userId).lean();
      return (user?.stats?.points || 0) >= 2000;
    },
  },
];

// ─── Points per difficulty ─────────────────────────────────────────────────────
const POINTS = {
  easy:   parseInt(process.env.POINTS_EASY   || '10',  10),
  medium: parseInt(process.env.POINTS_MEDIUM || '25',  10),
  hard:   parseInt(process.env.POINTS_HARD   || '50',  10),
};

// ─── Rank thresholds ──────────────────────────────────────────────────────────
const getRankFromPoints = (points) => {
  if (points >= 5000) return 'Algorithm Legend';
  if (points >= 2000) return 'Senior Engineer';
  if (points >= 1000) return 'Mid Engineer';
  if (points >= 500)  return 'Junior Engineer';
  if (points >= 100)  return 'Coding Apprentice';
  return 'Coding Padawan';
};

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * Award points for solving a problem and update user rank.
 * Call this once per *new* solve (not re-solves).
 */
const awardPoints = async (userId, difficulty) => {
  const pts = POINTS[difficulty] || 10;
  const user = await User.findByIdAndUpdate(
    userId,
    { $inc: { 'stats.points': pts } },
    { new: true }
  );
  const newRank = getRankFromPoints(user.stats.points);
  if (user.stats.rank !== newRank) {
    await User.findByIdAndUpdate(userId, { 'stats.rank': newRank });
  }
  return { pts, newPoints: user.stats.points, newRank };
};

/**
 * Check all badge conditions and award any newly earned badges.
 * Returns an array of newly awarded badge documents.
 */
const checkAndAwardBadges = async (userId) => {
  const newBadges = [];

  // Fetch already-earned badge keys for this user
  const existing = await Badge.find({ userId }).select('badgeKey').lean();
  const earned = new Set(existing.map(b => b.badgeKey));

  for (const def of BADGE_CATALOGUE) {
    if (earned.has(def.key)) continue; // already earned

    try {
      const qualifies = await def.condition(userId);
      if (!qualifies) continue;

      const badge = await Badge.create({
        userId,
        badgeKey: def.key,
        name: def.name,
        description: def.description,
        icon: def.icon,
        tier: def.tier,
      });
      newBadges.push(badge);
    } catch (err) {
      // Duplicate key = already awarded by a concurrent request — safe to ignore
      if (err.code !== 11000) console.error(`❌ Badge check error (${def.key}):`, err.message);
    }
  }

  return newBadges;
};

/**
 * Get all badges earned by a user.
 */
const getUserBadges = async (userId) => Badge.find({ userId }).sort({ earnedAt: -1 }).lean();

module.exports = { awardPoints, checkAndAwardBadges, getUserBadges, getRankFromPoints, POINTS };
