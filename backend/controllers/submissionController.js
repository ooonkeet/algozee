// controllers/submissionController.js
const Submission = require('../models/Submission');
const Problem = require('../models/Problem');
const UserProblem = require('../models/UserProblem');
const User = require('../models/User');

// ---------------------------------------------------------------------------
// Lightweight in-process "judge" — runs user JS in a sandboxed VM context.
// For production you'd swap this out for an isolated container / Judge0 API.
// ---------------------------------------------------------------------------
const vm = require('vm');

const runJavaScriptSandbox = (code, testCases, timeoutMs = 3000) => {
  const results = [];

  for (const tc of testCases) {
    const start = Date.now();
    try {
      const sandbox = { console: { log: () => {} }, input: tc.input };
      const script = new vm.Script(`
        ${code}
        __result__ = typeof solution === 'function'
          ? solution(...(Array.isArray(input) ? input : [input]))
          : undefined;
      `);
      const ctx = vm.createContext(sandbox);
      script.runInContext(ctx, { timeout: timeoutMs });

      const elapsed = Date.now() - start;
      const pass = JSON.stringify(ctx.__result__) === JSON.stringify(tc.expected);
      results.push({
        passed: pass,
        input: tc.input,
        expected: tc.expected,
        got: ctx.__result__,
        runtime: elapsed,
      });
    } catch (err) {
      results.push({
        passed: false,
        input: tc.input,
        expected: tc.expected,
        got: null,
        error: err.message,
        runtime: Date.now() - start,
      });
    }
  }

  return results;
};

// @desc    Submit code for a problem
// @route   POST /api/submissions
// @access  Private
exports.createSubmission = async (req, res) => {
  try {
    const { userId, problemId, code, language } = req.body;

    if (!userId || !problemId || !code || !language) {
      return res.status(400).json({
        success: false,
        message: 'userId, problemId, code, and language are required',
      });
    }

    const problem = await Problem.findById(problemId).lean();
    if (!problem) {
      return res.status(404).json({ success: false, message: 'Problem not found' });
    }

    // Create submission record as pending
    const submission = await Submission.create({
      userId,
      problemId,
      code,
      language,
      status: 'pending',
    });

    // Only execute JavaScript in the sandbox; other languages return pending
    let finalStatus = 'pending';
    let testsPassed = 0;
    let testsFailed = 0;
    let runtime = null;
    let outputText = '';
    let errorText = '';

    if (language === 'javascript' && problem.examples?.length) {
      const testCases = problem.examples.map(ex => ({
        input: ex.input,
        expected: ex.output,
      }));

      const results = runJavaScriptSandbox(code, testCases);
      testsPassed = results.filter(r => r.passed).length;
      testsFailed = results.filter(r => !r.passed).length;
      runtime = Math.max(...results.map(r => r.runtime));
      outputText = JSON.stringify(results, null, 2);

      const hasError = results.some(r => r.error);
      if (hasError) {
        finalStatus = 'runtime_error';
        errorText = results.find(r => r.error)?.error || '';
      } else {
        finalStatus = testsFailed === 0 ? 'accepted' : 'wrong_answer';
      }
    }

    // Update submission record
    submission.status = finalStatus;
    submission.testsPassed = testsPassed;
    submission.testsFailed = testsFailed;
    submission.runtime = runtime;
    submission.output = outputText;
    submission.error = errorText;
    await submission.save();

    // If accepted, mark user problem as solved
    if (finalStatus === 'accepted') {
      await UserProblem.findOneAndUpdate(
        { userId, problemId },
        {
          status: 'solved',
          solvedDate: new Date(),
          solutionCode: code,
          solutionLanguage: language,
          $inc: { attempts: 1 },
          lastAttemptDate: new Date(),
        },
        { upsert: true, setDefaultsOnInsert: true }
      );

      // Bump user solved count
      const solvedCount = await UserProblem.countDocuments({ userId, status: 'solved' });
      await User.findByIdAndUpdate(userId, { 'stats.solvedProblems': solvedCount });
    } else {
      // Mark as attempted
      await UserProblem.findOneAndUpdate(
        { userId, problemId, status: { $ne: 'solved' } },
        { status: 'attempted', $inc: { attempts: 1 }, lastAttemptDate: new Date() },
        { upsert: true, setDefaultsOnInsert: true }
      );
    }

    res.status(201).json({
      success: true,
      submission: {
        id: submission._id,
        status: submission.status,
        testsPassed,
        testsFailed,
        totalTests: testsPassed + testsFailed,
        runtime,
        language,
        submittedAt: submission.submittedAt,
        output: finalStatus !== 'accepted' ? outputText : undefined,
        error: errorText || undefined,
      },
    });
  } catch (error) {
    console.error('❌ Create Submission Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing submission',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get all submissions for a user
// @route   GET /api/submissions/user/:userId
// @access  Private
exports.getUserSubmissions = async (req, res) => {
  try {
    const { problemId, status, language, page = 1, limit = 20 } = req.query;

    const filter = { userId: req.params.userId };
    if (problemId) filter.problemId = problemId;
    if (status) filter.status = status;
    if (language) filter.language = language;

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const [submissions, total] = await Promise.all([
      Submission.find(filter)
        .populate('problemId', 'name difficulty topic')
        .sort({ submittedAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean(),
      Submission.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      count: submissions.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      submissions,
    });
  } catch (error) {
    console.error('❌ Get User Submissions Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching submissions',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get submission history for a specific problem
// @route   GET /api/submissions/user/:userId/problem/:problemId
// @access  Private
exports.getProblemSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({
      userId: req.params.userId,
      problemId: req.params.problemId,
    })
      .sort({ submittedAt: -1 })
      .limit(20)
      .lean();

    res.status(200).json({ success: true, submissions });
  } catch (error) {
    console.error('❌ Get Problem Submissions Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching submission history',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get a single submission by ID
// @route   GET /api/submissions/:id
// @access  Private
exports.getSubmissionById = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id)
      .populate('problemId', 'name difficulty topic')
      .lean();

    if (!submission) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }

    // Only the owner can view their full submission
    if (submission.userId.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    res.status(200).json({ success: true, submission });
  } catch (error) {
    console.error('❌ Get Submission By ID Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching submission',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get submission stats for a user
// @route   GET /api/submissions/user/:userId/stats
// @access  Private
exports.getSubmissionStats = async (req, res) => {
  try {
    const [statusBreakdown, languageBreakdown, totalAccepted, totalSubmissions] = await Promise.all([
      Submission.aggregate([
        { $match: { userId: require('mongoose').Types.ObjectId.createFromHexString(req.params.userId) } },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
      Submission.aggregate([
        { $match: { userId: require('mongoose').Types.ObjectId.createFromHexString(req.params.userId) } },
        { $group: { _id: '$language', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
      Submission.countDocuments({ userId: req.params.userId, status: 'accepted' }),
      Submission.countDocuments({ userId: req.params.userId }),
    ]);

    const statusMap = {};
    statusBreakdown.forEach(s => { statusMap[s._id] = s.count; });

    res.status(200).json({
      success: true,
      stats: {
        totalSubmissions,
        totalAccepted,
        acceptanceRate: totalSubmissions > 0
          ? Math.round((totalAccepted / totalSubmissions) * 100)
          : 0,
        byStatus: statusMap,
        byLanguage: languageBreakdown.map(l => ({ language: l._id, count: l.count })),
      },
    });
  } catch (error) {
    console.error('❌ Get Submission Stats Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching submission stats',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};
