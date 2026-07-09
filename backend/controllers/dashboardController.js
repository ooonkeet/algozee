// controllers/dashboardController.js
const User = require('../models/User');
const Problem = require('../models/Problem');
const UserProblem = require('../models/UserProblem');
const Submission = require('../models/Submission');
const Streak = require('../models/Streak');

// @desc    Get full dashboard stats for a user
// @route   GET /api/dashboard/:userId
// @access  Private
exports.getDashboardStats = async (req, res) => {
  try {
    const { userId } = req.params;

    // Run all queries in parallel
    const [
      user,
      streak,
      totalProblems,
      difficultyBreakdown,
      topicBreakdown,
      recentActivity,
      recentSubmissions,
      heatmapData,
    ] = await Promise.all([
      User.findById(userId).lean(),

      Streak.findOne({ userId }).lean(),

      Problem.countDocuments({ isActive: true }),

      // Solved problems by difficulty
      UserProblem.aggregate([
        { $match: { userId: require('mongoose').Types.ObjectId.createFromHexString(userId), status: 'solved' } },
        { $group: { _id: '$difficulty', count: { $sum: 1 } } },
      ]),

      // Solved problems by topic
      UserProblem.aggregate([
        { $match: { userId: require('mongoose').Types.ObjectId.createFromHexString(userId), status: 'solved' } },
        { $group: { _id: '$topic', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
      ]),

      // Recent activity (last 10 updates)
      UserProblem.find({ userId })
        .sort({ updatedAt: -1 })
        .limit(10)
        .populate('problemId', 'name difficulty topic')
        .lean(),

      // Recent submissions
      Submission.find({ userId })
        .sort({ submittedAt: -1 })
        .limit(5)
        .populate('problemId', 'name difficulty')
        .lean(),

      // Heatmap: solved problems per day (last 365 days)
      UserProblem.aggregate([
        {
          $match: {
            userId: require('mongoose').Types.ObjectId.createFromHexString(userId),
            status: 'solved',
            solvedDate: {
              $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
            },
          },
        },
        {
          $group: {
            _id: {
              $dateToString: { format: '%Y-%m-%d', date: '$solvedDate' },
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ]),
    ]);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Aggregate solved/attempted/in-progress counts
    const statusCounts = await UserProblem.aggregate([
      { $match: { userId: require('mongoose').Types.ObjectId.createFromHexString(userId) } },
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);

    const statusMap = { todo: 0, in_progress: 0, attempted: 0, solved: 0 };
    statusCounts.forEach(s => { statusMap[s._id] = s.count; });

    // Normalize difficulty breakdown
    const diffMap = { easy: 0, medium: 0, hard: 0 };
    difficultyBreakdown.forEach(d => { diffMap[d._id] = d.count; });

    // Total available problems by difficulty
    const [easyTotal, mediumTotal, hardTotal] = await Promise.all([
      Problem.countDocuments({ difficulty: 'easy', isActive: true }),
      Problem.countDocuments({ difficulty: 'medium', isActive: true }),
      Problem.countDocuments({ difficulty: 'hard', isActive: true }),
    ]);

    // Completion percentage
    const totalSolved = statusMap.solved;
    const completionRate = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

    res.status(200).json({
      success: true,
      dashboard: {
        user: {
          id: user._id,
          username: user.username,
          avatar: user.avatar,
          rank: user.stats?.rank || 'Coding Padawan',
          points: user.stats?.points || 0,
          joinedAt: user.createdAt,
        },
        overview: {
          totalProblems,
          totalSolved,
          completionRate,
          statusBreakdown: statusMap,
        },
        difficulty: {
          easy: { solved: diffMap.easy, total: easyTotal },
          medium: { solved: diffMap.medium, total: mediumTotal },
          hard: { solved: diffMap.hard, total: hardTotal },
        },
        streak: {
          currentStreak: streak?.currentStreak || 0,
          longestStreak: streak?.longestStreak || 0,
          lastActiveDate: streak?.lastActiveDate || null,
          totalDaysActive: streak?.totalDaysActive || 0,
        },
        topTopics: topicBreakdown.map(t => ({ topic: t._id, solved: t.count })),
        recentActivity: recentActivity.map(up => ({
          problemId: up.problemId?._id,
          name: up.problemId?.name,
          difficulty: up.problemId?.difficulty,
          topic: up.problemId?.topic,
          status: up.status,
          updatedAt: up.updatedAt,
        })),
        recentSubmissions: recentSubmissions.map(s => ({
          submissionId: s._id,
          problemName: s.problemId?.name,
          difficulty: s.problemId?.difficulty,
          status: s.status,
          language: s.language,
          runtime: s.runtime,
          memory: s.memory,
          submittedAt: s.submittedAt,
        })),
        heatmap: heatmapData,
      },
    });
  } catch (error) {
    console.error('❌ Get Dashboard Stats Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard stats',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get global platform stats (public)
// @route   GET /api/dashboard/global
// @access  Public
exports.getGlobalStats = async (req, res) => {
  try {
    const [
      totalUsers,
      totalProblems,
      totalSubmissions,
      totalSolved,
      difficultyDist,
    ] = await Promise.all([
      User.countDocuments({ isActive: true }),
      Problem.countDocuments({ isActive: true }),
      Submission.countDocuments(),
      Submission.countDocuments({ status: 'accepted' }),
      Problem.aggregate([
        { $match: { isActive: true } },
        { $group: { _id: '$difficulty', count: { $sum: 1 } } },
      ]),
    ]);

    const diffMap = { easy: 0, medium: 0, hard: 0 };
    difficultyDist.forEach(d => { diffMap[d._id] = d.count; });

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalProblems,
        totalSubmissions,
        totalSolved,
        acceptanceRate: totalSubmissions > 0
          ? Math.round((totalSolved / totalSubmissions) * 100)
          : 0,
        problemsByDifficulty: diffMap,
      },
    });
  } catch (error) {
    console.error('❌ Get Global Stats Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching global stats',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};
