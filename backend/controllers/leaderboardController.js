// controllers/leaderboardController.js
const User = require('../models/User');
const UserProblem = require('../models/UserProblem');
const Streak = require('../models/Streak');
const Badge = require('../models/Badge');
const { getUserBadges } = require('../services/badgeService');

// @desc    Global leaderboard — top 50 by points
// @route   GET /api/leaderboard
// @access  Public
exports.getLeaderboard = async (req, res) => {
  try {
    const { limit = 50 } = req.query;
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));

    const users = await User.find({ isActive: true })
      .select('username avatar stats.points stats.solvedProblems stats.rank createdAt')
      .sort({ 'stats.points': -1, 'stats.solvedProblems': -1 })
      .limit(limitNum)
      .lean();

    const leaderboard = users.map((u, idx) => ({
      rank: idx + 1,
      userId: u._id,
      username: u.username,
      avatar: u.avatar,
      points: u.stats?.points || 0,
      solvedProblems: u.stats?.solvedProblems || 0,
      rankTitle: u.stats?.rank || 'Coding Padawan',
      joinedAt: u.createdAt,
    }));

    res.status(200).json({ success: true, count: leaderboard.length, leaderboard });
  } catch (error) {
    console.error('❌ Get Leaderboard Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching leaderboard',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Streak leaderboard — top users by current streak
// @route   GET /api/leaderboard/streak
// @access  Public
exports.getStreakLeaderboard = async (req, res) => {
  try {
    const { limit = 50 } = req.query;
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));

    const streaks = await Streak.find({ currentStreak: { $gt: 0 } })
      .sort({ currentStreak: -1, longestStreak: -1 })
      .limit(limitNum)
      .populate('userId', 'username avatar stats.rank')
      .lean();

    const leaderboard = streaks.map((s, idx) => ({
      rank: idx + 1,
      userId: s.userId?._id,
      username: s.userId?.username,
      avatar: s.userId?.avatar,
      rankTitle: s.userId?.stats?.rank || 'Coding Padawan',
      currentStreak: s.currentStreak,
      longestStreak: s.longestStreak,
      lastActiveDate: s.lastActiveDate,
      totalDaysActive: s.totalDaysActive,
    }));

    res.status(200).json({ success: true, count: leaderboard.length, leaderboard });
  } catch (error) {
    console.error('❌ Get Streak Leaderboard Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching streak leaderboard',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Topic leaderboard — most problems solved in a specific topic
// @route   GET /api/leaderboard/topic/:topic
// @access  Public
exports.getTopicLeaderboard = async (req, res) => {
  try {
    const { topic } = req.params;
    const { limit = 20 } = req.query;
    const limitNum = Math.min(50, Math.max(1, parseInt(limit)));

    const topUsers = await UserProblem.aggregate([
      {
        $match: {
          topic: { $regex: topic, $options: 'i' },
          status: 'solved',
        },
      },
      { $group: { _id: '$userId', solved: { $sum: 1 } } },
      { $sort: { solved: -1 } },
      { $limit: limitNum },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$user' },
      {
        $project: {
          userId: '$_id',
          username: '$user.username',
          avatar: '$user.avatar',
          rankTitle: '$user.stats.rank',
          solved: 1,
        },
      },
    ]);

    const leaderboard = topUsers.map((u, idx) => ({ rank: idx + 1, ...u }));

    res.status(200).json({ success: true, topic, count: leaderboard.length, leaderboard });
  } catch (error) {
    console.error('❌ Get Topic Leaderboard Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching topic leaderboard',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get a user's rank and nearby competitors
// @route   GET /api/leaderboard/rank/:userId
// @access  Private
exports.getUserRank = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select('username avatar stats').lean();
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const userPoints = user.stats?.points || 0;

    // Count how many users have more points (1-indexed rank)
    const rank = (await User.countDocuments({ isActive: true, 'stats.points': { $gt: userPoints } })) + 1;
    const total = await User.countDocuments({ isActive: true });

    // Grab neighbours: 3 above and 3 below by points
    const [above, below] = await Promise.all([
      User.find({ isActive: true, 'stats.points': { $gt: userPoints } })
        .select('username avatar stats.points stats.solvedProblems stats.rank')
        .sort({ 'stats.points': 1 })
        .limit(3)
        .lean(),
      User.find({ isActive: true, 'stats.points': { $lt: userPoints } })
        .select('username avatar stats.points stats.solvedProblems stats.rank')
        .sort({ 'stats.points': -1 })
        .limit(3)
        .lean(),
    ]);

    // Badges for the user
    const badges = await getUserBadges(userId);

    res.status(200).json({
      success: true,
      rank: {
        position: rank,
        total,
        percentile: Math.round(((total - rank) / total) * 100),
        user: {
          userId: user._id,
          username: user.username,
          avatar: user.avatar,
          points: userPoints,
          solvedProblems: user.stats?.solvedProblems || 0,
          rankTitle: user.stats?.rank || 'Coding Padawan',
        },
        nearby: {
          above: above.reverse().map((u, i) => ({ ...u, position: rank - (above.length - i) })),
          below: below.map((u, i) => ({ ...u, position: rank + i + 1 })),
        },
        badges,
      },
    });
  } catch (error) {
    console.error('❌ Get User Rank Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user rank',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get badges for a user
// @route   GET /api/leaderboard/badges/:userId
// @access  Public
exports.getUserBadgesHandler = async (req, res) => {
  try {
    const badges = await getUserBadges(req.params.userId);
    res.status(200).json({ success: true, count: badges.length, badges });
  } catch (error) {
    console.error('❌ Get User Badges Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching badges',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};
