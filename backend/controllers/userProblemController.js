// controllers/userProblemController.js
const UserProblem = require('../models/UserProblem');
const Problem = require('../models/Problem');
const Streak = require('../models/Streak');
const User = require('../models/User');
const { awardPoints, checkAndAwardBadges } = require('../services/badgeService');
const { emitToUser } = require('../services/socketService');

// Helper: update streak after solving a problem
const updateStreak = async (userId) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let streak = await Streak.findOne({ userId });
    if (!streak) {
      streak = await Streak.create({ userId });
    }

    const lastActive = streak.lastActiveDate ? new Date(streak.lastActiveDate) : null;
    if (lastActive) lastActive.setHours(0, 0, 0, 0);

    const alreadyActiveToday = lastActive && lastActive.getTime() === today.getTime();

    if (!alreadyActiveToday) {
      const isConsecutive = lastActive && lastActive.getTime() === yesterday.getTime();

      streak.currentStreak = isConsecutive ? streak.currentStreak + 1 : 1;
      streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak);
      streak.lastActiveDate = today;
      streak.streakStartDate = isConsecutive ? streak.streakStartDate : today;
      streak.totalDaysActive += 1;

      // Append to history
      streak.streakHistory.push({ date: today, problemsSolved: 1 });
      await streak.save();

      // Sync streak to user stats
      await User.findByIdAndUpdate(userId, {
        'stats.streak': streak.currentStreak,
      });
    } else {
      // Already active today — just bump the history count
      const todayEntry = streak.streakHistory.find(
        h => new Date(h.date).setHours(0, 0, 0, 0) === today.getTime()
      );
      if (todayEntry) {
        todayEntry.problemsSolved += 1;
        await streak.save();
      }
    }

    return streak;
  } catch (err) {
    console.error('❌ updateStreak error:', err);
  }
};

// @desc    Get or create a user's progress record for a problem
// @route   GET /api/user-problems/:userId/:problemId
// @access  Private
exports.getUserProblemProgress = async (req, res) => {
  try {
    const { userId, problemId } = req.params;

    let userProblem = await UserProblem.findOne({ userId, problemId })
      .populate('problemId')
      .lean();

    if (!userProblem) {
      // Return a default (un-saved) record so the frontend can display defaults
      const problem = await Problem.findById(problemId).lean();
      if (!problem) {
        return res.status(404).json({ success: false, message: 'Problem not found' });
      }
      return res.status(200).json({
        success: true,
        userProblem: {
          userId,
          problemId,
          problem,
          status: 'todo',
          attempts: 0,
          notes: '',
          solutionCode: '',
          solutionLanguage: 'javascript',
          timeSpent: 0,
          lastAttemptDate: null,
          solvedDate: null,
        },
      });
    }

    res.status(200).json({ success: true, userProblem });
  } catch (error) {
    console.error('❌ Get User Problem Progress Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching progress',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Upsert user's progress for a problem
// @route   POST /api/user-problems
// @access  Private
exports.upsertUserProblem = async (req, res) => {
  try {
    const {
      userId,
      problemId,
      status,
      notes,
      solutionCode,
      solutionLanguage,
      timeSpent,
    } = req.body;

    // Verify the problem exists and grab its metadata
    const problem = await Problem.findById(problemId).lean();
    if (!problem) {
      return res.status(404).json({ success: false, message: 'Problem not found' });
    }

    const now = new Date();
    const isNowSolved = status === 'solved';

    // Find existing record
    const existing = await UserProblem.findOne({ userId, problemId });
    const wasPreviouslySolved = existing?.status === 'solved';

    // Build update payload
    const update = {
      userId,
      problemId,
      status,
      difficulty: problem.difficulty,
      topic: problem.topic,
      lastAttemptDate: now,
      updatedAt: now,
      $inc: { attempts: existing ? 1 : 0 },
    };

    if (notes !== undefined) update.notes = notes;
    if (solutionCode !== undefined) update.solutionCode = solutionCode;
    if (solutionLanguage !== undefined) update.solutionLanguage = solutionLanguage;
    if (timeSpent !== undefined) update.timeSpent = timeSpent;
    if (isNowSolved && !wasPreviouslySolved) update.solvedDate = now;

    const userProblem = await UserProblem.findOneAndUpdate(
      { userId, problemId },
      update,
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }
    );

    // Update user stats
    const [solvedCount, attemptedCount] = await Promise.all([
      UserProblem.countDocuments({ userId, status: 'solved' }),
      UserProblem.countDocuments({ userId, status: { $in: ['attempted', 'solved', 'in_progress'] } }),
    ]);

    await User.findByIdAndUpdate(userId, {
      'stats.solvedProblems': solvedCount,
      'stats.attemptedProblems': attemptedCount,
    });

    // Update streak, points & badges if problem was just solved
    let streakData = null;
    let pointsData = null;
    let newBadges = [];

    if (isNowSolved && !wasPreviouslySolved) {
      [streakData, pointsData, newBadges] = await Promise.all([
        updateStreak(userId),
        awardPoints(userId, problem.difficulty),
        checkAndAwardBadges(userId),
      ]);

      // Push real-time notifications via Socket.io
      const io = req.app?.get('io');
      if (io) {
        if (streakData) {
          emitToUser(io, userId, 'streak-updated', {
            currentStreak: streakData.currentStreak,
            longestStreak: streakData.longestStreak,
          });
        }
        if (newBadges.length > 0) {
          emitToUser(io, userId, 'badges-earned', { badges: newBadges });
        }
        if (pointsData) {
          emitToUser(io, userId, 'points-updated', {
            pts: pointsData.pts,
            totalPoints: pointsData.newPoints,
            rank: pointsData.newRank,
          });
        }
      }
    }

    res.status(200).json({
      success: true,
      message: 'Progress updated successfully',
      userProblem,
      streak: streakData
        ? { currentStreak: streakData.currentStreak, longestStreak: streakData.longestStreak }
        : undefined,
      points: pointsData ?? undefined,
      newBadges: newBadges.length > 0 ? newBadges : undefined,
    });
  } catch (error) {
    console.error('❌ Upsert User Problem Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating progress',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Update notes or solution code only (lightweight patch)
// @route   PATCH /api/user-problems/:id
// @access  Private
exports.patchUserProblem = async (req, res) => {
  try {
    const allowed = ['notes', 'solutionCode', 'solutionLanguage', 'timeSpent', 'status'];
    const patch = {};
    allowed.forEach(field => {
      if (req.body[field] !== undefined) patch[field] = req.body[field];
    });
    patch.updatedAt = new Date();

    const userProblem = await UserProblem.findByIdAndUpdate(req.params.id, patch, { new: true });

    if (!userProblem) {
      return res.status(404).json({ success: false, message: 'Record not found' });
    }

    res.status(200).json({ success: true, userProblem });
  } catch (error) {
    console.error('❌ Patch User Problem Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error patching record',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Delete a user problem progress record
// @route   DELETE /api/user-problems/:id
// @access  Private
exports.deleteUserProblem = async (req, res) => {
  try {
    const userProblem = await UserProblem.findById(req.params.id);
    if (!userProblem) {
      return res.status(404).json({ success: false, message: 'Record not found' });
    }

    // Only owner can delete
    if (userProblem.userId.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    await userProblem.deleteOne();

    res.status(200).json({ success: true, message: 'Progress record deleted' });
  } catch (error) {
    console.error('❌ Delete User Problem Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting record',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Bulk reset all progress for a user
// @route   DELETE /api/user-problems/user/:userId/reset
// @access  Private
exports.resetUserProgress = async (req, res) => {
  try {
    if (req.user.id !== req.params.userId) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    await UserProblem.deleteMany({ userId: req.params.userId });
    await User.findByIdAndUpdate(req.params.userId, {
      'stats.solvedProblems': 0,
      'stats.attemptedProblems': 0,
      'stats.streak': 0,
    });
    await Streak.findOneAndUpdate(
      { userId: req.params.userId },
      { currentStreak: 0, longestStreak: 0, totalDaysActive: 0, streakHistory: [] }
    );

    res.status(200).json({ success: true, message: 'All progress reset successfully' });
  } catch (error) {
    console.error('❌ Reset User Progress Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error resetting progress',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};
