// models/Submission.js
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    problemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problem',
      required: true,
    },
    code: {
      type: String,
      required: [true, 'Please provide code'],
    },
    language: {
      type: String,
      enum: ['javascript', 'python', 'java', 'cpp', 'csharp', 'go', 'rust'],
      default: 'javascript',
    },
    status: {
      type: String,
      enum: ['accepted', 'wrong_answer', 'time_limit_exceeded', 'runtime_error', 'compilation_error', 'pending'],
      default: 'pending',
    },
    runtime: { type: Number, default: null }, // in ms
    memory: { type: Number, default: null }, // in MB
    output: { type: String, default: '' },
    error: { type: String, default: '' },
    testsPassed: { type: Number, default: 0 },
    testsFailed: { type: Number, default: 0 },
    submittedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Index for faster queries
submissionSchema.index({ userId: 1, problemId: 1 });
submissionSchema.index({ userId: 1, submittedAt: -1 });
submissionSchema.index({ status: 1 });

module.exports = mongoose.model('Submission', submissionSchema);
