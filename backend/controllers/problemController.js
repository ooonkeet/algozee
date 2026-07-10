// controllers/problemController.js
const Problem = require('../models/Problem');
const UserProblem = require('../models/UserProblem');

// @desc    Get all problems
// @route   GET /api/problems
// @access  Public
exports.getAllProblems = async (req, res) => {
  try {
    const { difficulty, category, search } = req.query;

    // Build filter
    const filter = {};
    if (difficulty) filter.difficulty = difficulty;
    if (category) filter.category = category;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const problems = await Problem.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: problems.length,
      problems,
    });
  } catch (error) {
    console.error('❌ Get All Problems Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching problems',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get single problem
// @route   GET /api/problems/:id
// @access  Public
exports.getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
    }

    res.status(200).json({
      success: true,
      problem,
    });
  } catch (error) {
    console.error('❌ Get Problem Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching problem',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get user's problems with progress
// @route   GET /api/problems/user/:userId
// @access  Private
exports.getUserProblems = async (req, res) => {
  try {
    const userProblems = await UserProblem.find({
      userId: req.params.userId,
    }).populate('problemId');

    const enrichedProblems = userProblems.map(up => ({
      ...up.problemId.toObject(),
      userProgress: {
        status: up.status,
        attempts: up.attempts,
        lastAttempted: up.lastAttempted,
        submittedAt: up.submittedAt,
      },
    }));

    res.status(200).json({
      success: true,
      count: enrichedProblems.length,
      problems: enrichedProblems,
    });
  } catch (error) {
    console.error('❌ Get User Problems Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user problems',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Create new problem (admin only)
// @route   POST /api/problems
// @access  Private (Admin)
exports.createProblem = async (req, res) => {
  try {
    const { title, description, difficulty, category, examples, constraints, hints } = req.body;

    const problem = await Problem.create({
      title,
      description,
      difficulty,
      category,
      examples,
      constraints,
      hints,
    });

    res.status(201).json({
      success: true,
      message: 'Problem created successfully',
      problem,
    });
  } catch (error) {
    console.error('❌ Create Problem Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating problem',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Update problem (admin only)
// @route   PUT /api/problems/:id
// @access  Private (Admin)
exports.updateProblem = async (req, res) => {
  try {
    let problem = await Problem.findById(req.params.id);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
    }

    problem = await Problem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'Problem updated successfully',
      problem,
    });
  } catch (error) {
    console.error('❌ Update Problem Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating problem',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Delete problem (admin only)
// @route   DELETE /api/problems/:id
// @access  Private (Admin)
exports.deleteProblem = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndDelete(req.params.id);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found',
      });
    }

    // Delete all user progress for this problem
    await UserProblem.deleteMany({ problemId: req.params.id });

    res.status(200).json({
      success: true,
      message: 'Problem deleted successfully',
    });
  } catch (error) {
    console.error('❌ Delete Problem Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting problem',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};
