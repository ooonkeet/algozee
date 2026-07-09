// controllers/userController.js
const User = require('../models/User');
const UserProblem = require('../models/UserProblem');
const Streak = require('../models/Streak');

// @desc    Get user profile by ID
// @route   GET /api/users/:id
// @access  Private
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        stats: user.stats,
        preferences: user.preferences,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    console.error('❌ Get User Profile Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user profile',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private
exports.updateUserProfile = async (req, res) => {
  try {
    // Check if user is updating their own profile
    if (req.user.id !== req.params.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this user',
      });
    }

    const { username, avatar } = req.body;

    // Find and update user
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username, avatar },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'User profile updated successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error('❌ Update User Profile Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating user profile',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Update user preferences
// @route   PUT /api/users/:id/preferences
// @access  Private
exports.updateUserPreferences = async (req, res) => {
  try {
    // Check if user is updating their own preferences
    if (req.user.id !== req.params.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this user',
      });
    }

    const { theme, notifications } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { preferences: { theme, notifications } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Preferences updated successfully',
      preferences: user.preferences,
    });
  } catch (error) {
    console.error('❌ Update Preferences Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating preferences',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get user statistics
// @route   GET /api/users/:id/stats
// @access  Private
exports.getUserStats = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // Get streak info
    const streak = await Streak.findOne({ userId: req.params.id });

    // Get problem stats
    const solvedCount = await UserProblem.countDocuments({
      userId: req.params.id,
      status: 'solved',
    });

    const attemptedCount = await UserProblem.countDocuments({
      userId: req.params.id,
      status: { $in: ['attempted', 'solved'] },
    });

    res.status(200).json({
      success: true,
      stats: {
        ...user.stats,
        currentStreak: streak?.currentStreak || 0,
        longestStreak: streak?.longestStreak || 0,
        actualSolvedCount: solvedCount,
        actualAttemptedCount: attemptedCount,
      },
    });
  } catch (error) {
    console.error('❌ Get User Stats Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user statistics',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get user streak
// @route   GET /api/users/:id/streak
// @access  Private
exports.getUserStreak = async (req, res) => {
  try {
    const streak = await Streak.findOne({ userId: req.params.id });

    if (!streak) {
      return res.status(404).json({
        success: false,
        message: 'Streak record not found',
      });
    }

    res.status(200).json({
      success: true,
      streak: {
        currentStreak: streak.currentStreak,
        longestStreak: streak.longestStreak,
        lastActiveDate: streak.lastActiveDate,
        streakStartDate: streak.streakStartDate,
        totalDaysActive: streak.totalDaysActive,
        streakHistory: streak.streakHistory,
      },
    });
  } catch (error) {
    console.error('❌ Get User Streak Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user streak',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Delete user account
// @route   DELETE /api/users/:id
// @access  Private
exports.deleteUser = async (req, res) => {
  try {
    // Check if user is deleting their own account
    if (req.user.id !== req.params.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this user',
      });
    }

    // Delete user and all related data
    await User.findByIdAndDelete(req.params.id);
    await UserProblem.deleteMany({ userId: req.params.id });
    await Streak.deleteMany({ userId: req.params.id });

    res.status(200).json({
      success: true,
      message: 'User account deleted successfully',
    });
  } catch (error) {
    console.error('❌ Delete User Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting user account',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};
