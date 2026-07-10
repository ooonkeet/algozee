// seeds/seedProblems.js
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Problem = require('../models/Problem');

const sampleProblems = [
  {
    leetcodeId: 1,
    name: 'Two Sum',
    difficulty: 'easy',
    topic: 'Arrays & Hashing',
    subcategory: 'Hashing / Frequency Maps',
    acceptance: '49.6%',
    url: 'https://leetcode.com/problems/two-sum/',
    description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.',
  },
  {
    leetcodeId: 3,
    name: 'Longest Substring Without Repeating Characters',
    difficulty: 'medium',
    topic: 'Arrays & Hashing',
    subcategory: 'Sliding Window',
    acceptance: '34.1%',
    url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
  },
  {
    leetcodeId: 11,
    name: 'Container With Most Water',
    difficulty: 'medium',
    topic: 'Arrays & Hashing',
    subcategory: 'Two Pointers',
    acceptance: '54.1%',
    url: 'https://leetcode.com/problems/container-with-most-water/',
    description: 'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).',
  },
  {
    leetcodeId: 15,
    name: '3Sum',
    difficulty: 'medium',
    topic: 'Arrays & Hashing',
    subcategory: 'Two Pointers',
    acceptance: '32.8%',
    url: 'https://leetcode.com/problems/3sum/',
    description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.',
  },
  {
    leetcodeId: 42,
    name: 'Trapping Rain Water',
    difficulty: 'hard',
    topic: 'Arrays & Hashing',
    subcategory: 'Two Pointers',
    acceptance: '59.0%',
    url: 'https://leetcode.com/problems/trapping-rain-water/',
    description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
  },
  {
    leetcodeId: 49,
    name: 'Group Anagrams',
    difficulty: 'medium',
    topic: 'Arrays & Hashing',
    subcategory: 'Hashing / Frequency Maps',
    acceptance: '66.8%',
    url: 'https://leetcode.com/problems/group-anagrams/',
    description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
  },
  {
    leetcodeId: 125,
    name: 'Valid Palindrome',
    difficulty: 'easy',
    topic: 'Arrays & Hashing',
    subcategory: 'Two Pointers',
    acceptance: '45.7%',
    url: 'https://leetcode.com/problems/valid-palindrome/',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
  },
  {
    leetcodeId: 217,
    name: 'Contains Duplicate',
    difficulty: 'easy',
    topic: 'Arrays & Hashing',
    subcategory: 'Hashing / Frequency Maps',
    acceptance: '61.3%',
    url: 'https://leetcode.com/problems/contains-duplicate/',
    description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
  },
];

const seedProblems = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Clear existing problems
    await Problem.deleteMany({});
    console.log('🗑️  Cleared existing problems');

    // Insert sample problems
    await Problem.insertMany(sampleProblems);
    console.log(`✅ Successfully seeded ${sampleProblems.length} problems`);

    // Show sample
    const count = await Problem.countDocuments();
    console.log(`📊 Total problems in database: ${count}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

// Run seed if executed directly
if (require.main === module) {
  seedProblems();
}

module.exports = seedProblems;
