// controllers/problemController.js
const Problem = require('../models/Problem');
const UserProblem = require('../models/UserProblem');

// @desc    Get all problems with filtering, search & pagination
// @route   GET /api/problems
// @access  Public
exports.getAllProblems = async (req, res) => {
  try {
    const {
      difficulty,
      topic,
      search,
      page = 1,
      limit = 20,
      sort = '-createdAt',
      isActive,
    } = req.query;

    // Build filter
    const filter = {};
    if (difficulty) filter.difficulty = difficulty;
    if (topic) filter.topic = { $regex: topic, $options: 'i' };
    if (isActive !== undefined) filter.isActive = isActive === 'true';
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { topic: { $regex: search, $options: 'i' } },
      ];
    }

    // Pagination
    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const [problems, total] = await Promise.all([
      Problem.find(filter).sort(sort).skip(skip).limit(limitNum).lean(),
      Problem.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      count: problems.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
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
    const problem = await Problem.findById(req.params.id).lean();

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

// @desc    Get user's problems with progress (merged)
// @route   GET /api/problems/user/:userId
// @access  Private
exports.getUserProblems = async (req, res) => {
  try {
    const { status, difficulty, topic, page = 1, limit = 20 } = req.query;

    // Build user-problem filter
    const upFilter = { userId: req.params.userId };
    if (status) upFilter.status = status;
    if (difficulty) upFilter.difficulty = difficulty;
    if (topic) upFilter.topic = { $regex: topic, $options: 'i' };

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const [userProblems, total] = await Promise.all([
      UserProblem.find(upFilter)
        .populate('problemId')
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean(),
      UserProblem.countDocuments(upFilter),
    ]);

    const enrichedProblems = userProblems
      .filter(up => up.problemId) // guard against orphaned refs
      .map(up => ({
        ...up.problemId,
        userProgress: {
          userProblemId: up._id,
          status: up.status,
          attempts: up.attempts,
          notes: up.notes,
          solutionCode: up.solutionCode,
          solutionLanguage: up.solutionLanguage,
          timeSpent: up.timeSpent,
          lastAttemptDate: up.lastAttemptDate,
          solvedDate: up.solvedDate,
        },
      }));

    res.status(200).json({
      success: true,
      count: enrichedProblems.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
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

// @desc    Get problems grouped by topic (for dashboard)
// @route   GET /api/problems/topics
// @access  Public
exports.getProblemsByTopic = async (req, res) => {
  try {
    const topics = await Problem.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$topic',
          total: { $sum: 1 },
          easy: { $sum: { $cond: [{ $eq: ['$difficulty', 'easy'] }, 1, 0] } },
          medium: { $sum: { $cond: [{ $eq: ['$difficulty', 'medium'] }, 1, 0] } },
          hard: { $sum: { $cond: [{ $eq: ['$difficulty', 'hard'] }, 1, 0] } },
        },
      },
      { $sort: { total: -1 } },
    ]);

    res.status(200).json({
      success: true,
      count: topics.length,
      topics,
    });
  } catch (error) {
    console.error('❌ Get Problems By Topic Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching topics',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Create new problem (admin only)
// @route   POST /api/problems
// @access  Private (Admin)
exports.createProblem = async (req, res) => {
  try {
    const { leetcodeId, name, difficulty, topic, subcategory, acceptance, url, description, constraints, examples } = req.body;

    // Check for duplicate
    const existing = await Problem.findOne({ leetcodeId });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: `Problem with leetcodeId ${leetcodeId} already exists`,
      });
    }

    const problem = await Problem.create({
      leetcodeId,
      name,
      difficulty,
      topic,
      subcategory,
      acceptance,
      url,
      description,
      constraints,
      examples,
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

    // Clean up all user progress for this problem
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
