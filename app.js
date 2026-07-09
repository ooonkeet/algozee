// ==========================================================================
// CORE STATE MANAGEMENT (Expanded Roadmap Problems Database)
// ==========================================================================

const state = {
  activeTab: 'lobby',
  streak: 0, 
  points: 0,
  rank: 'Coding Padawan',
  selectedCategory: 'all',
  searchQuery: '',
  difficultyQuery: 'all',
  
  problems: [
    // --- 1. ARRAYS & HASHING ---
    // Sliding Window
    { id: 3, name: "Longest Substring Without Repeating Characters", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "34.1%", status: "todo" },
    { id: 76, name: "Minimum Window Substring", difficulty: "hard", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "41.0%", status: "todo" },
    { id: 209, name: "Minimum Size Subarray Sum", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "45.2%", status: "todo" },
    { id: 424, name: "Longest Repeating Character Replacement", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "52.4%", status: "todo" },
    { id: 567, name: "Permutation in String", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "44.6%", status: "todo" },
    { id: 904, name: "Fruit Into Baskets", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "43.7%", status: "todo" },
    { id: 438, name: "Find All Anagrams in a String", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "50.1%", status: "todo" },
    { id: 1004, name: "Max Consecutive Ones III", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "63.2%", status: "todo" },
    { id: 485, name: "Max Consecutive Ones", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "57.4%", status: "todo" },
    { id: 1052, name: "Grumpy Bookstore Owner", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "57.0%", status: "todo" },
    { id: 1456, name: "Maximum Number of Vowels in a Substring of Given Length", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "58.4%", status: "todo" },
    { id: 1493, name: "Longest Subarray of 1s After Deleting One Element", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "59.8%", status: "todo" },
    { id: 2090, name: "K Radius Subarray Averages", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "54.3%", status: "todo" },
    { id: 1208, name: "Get Equal Substrings Within Budget", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "47.9%", status: "todo" },
    // Two Pointers
    { id: 11, name: "Container With Most Water", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "54.1%", status: "todo" },
    { id: 15, name: "3Sum", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "32.8%", status: "todo" },
    { id: 16, name: "3Sum Closest", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "47.1%", status: "todo" },
    { id: 18, name: "4Sum", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "36.2%", status: "todo" },
    { id: 42, name: "Trapping Rain Water", difficulty: "hard", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "59.0%", status: "todo" },
    { id: 167, name: "Two Sum II - Input Array Is Sorted", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "60.1%", status: "todo" },
    { id: 125, name: "Valid Palindrome", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "45.7%", status: "todo" },
    { id: 844, name: "Backspace String Compare", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "49.1%", status: "todo" },
    { id: 26, name: "Remove Duplicates from Sorted Array", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "55.5%", status: "todo" },
    { id: 283, name: "Move Zeroes", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "62.4%", status: "todo" },
    { id: 27, name: "Remove Element", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "57.3%", status: "todo" },
    { id: 80, name: "Remove Duplicates from Sorted Array II", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "56.7%", status: "todo" },
    // Hashing / Frequency Maps
    { id: 1, name: "Two Sum", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "49.6%", status: "todo" },
    { id: 49, name: "Group Anagrams", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "66.8%", status: "todo" },
    { id: 128, name: "Longest Consecutive Sequence", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "48.2%", status: "todo" },
    { id: 217, name: "Contains Duplicate", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "61.3%", status: "todo" },
    { id: 242, name: "Valid Anagram", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "63.1%", status: "todo" },
    { id: 347, name: "Top K Frequent Elements", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "64.8%", status: "todo" },
    { id: 36, name: "Valid Sudoku", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "61.5%", status: "todo" },
    { id: 48, name: "Rotate Image", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "73.8%", status: "todo" },
    { id: 54, name: "Spiral Matrix", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "49.1%", status: "todo" },
    { id: 73, name: "Set Matrix Zeroes", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "55.8%", status: "todo" },
    { id: 169, name: "Majority Element", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Hashing / Frequency Maps", acceptance: "64.5%", status: "todo" },
    // Prefix Sum
    { id: 303, name: "Range Sum Query - Immutable", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Prefix Sum / Running Sum", acceptance: "60.8%", status: "todo" },
    { id: 238, name: "Product of Array Except Self", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Prefix Sum / Running Sum", acceptance: "65.8%", status: "todo" },
    { id: 560, name: "Subarray Sum Equals K", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Prefix Sum / Running Sum", acceptance: "43.5%", status: "todo" },
    { id: 724, name: "Find Pivot Index", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Prefix Sum / Running Sum", acceptance: "54.2%", status: "todo" },
    { id: 930, name: "Binary Subarrays With Sum", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Prefix Sum / Running Sum", acceptance: "52.7%", status: "todo" },
    { id: 974, name: "Subarray Sums Divisible by K", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Prefix Sum / Running Sum", acceptance: "53.8%", status: "todo" },
    { id: 523, name: "Continuous Subarray Sum", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Prefix Sum / Running Sum", acceptance: "28.1%", status: "todo" },
    // Difference Array
    { id: 370, name: "Range Addition", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Difference Array / Range Updates", acceptance: "70.2%", status: "todo" },
    { id: 1094, name: "Car Pooling", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Difference Array / Range Updates", acceptance: "56.4%", status: "todo" },
    { id: 1109, name: "Corporate Flight Bookings", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Difference Array / Range Updates", acceptance: "62.1%", status: "todo" },
    { id: 1893, name: "Check if All Integers in a Range Are Covered", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Difference Array / Range Updates", acceptance: "51.3%", status: "todo" },
    { id: 1943, name: "Describe the Painting", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Difference Array / Range Updates", acceptance: "51.8%", status: "todo" },
    { id: 2381, name: "Shifting Letters II", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Difference Array / Range Updates", acceptance: "41.9%", status: "todo" },

    // --- 2. BINARY SEARCH ---
    // Sorted Data
    { id: 33, name: "Search in Rotated Sorted Array", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Sorted Data", acceptance: "39.1%", status: "todo" },
    { id: 34, name: "Find First and Last Position of Element in Sorted Array", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Sorted Data", acceptance: "42.1%", status: "todo" },
    { id: 35, name: "Search Insert Position", difficulty: "easy", topic: "Binary Search", subcategory: "Binary Search on Sorted Data", acceptance: "44.2%", status: "todo" },
    { id: 74, name: "Search a 2D Matrix", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Sorted Data", acceptance: "49.5%", status: "todo" },
    { id: 153, name: "Find Minimum in Rotated Sorted Array", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Sorted Data", acceptance: "49.0%", status: "todo" },
    { id: 162, name: "Find Peak Element", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Sorted Data", acceptance: "46.3%", status: "todo" },
    { id: 704, name: "Binary Search", difficulty: "easy", topic: "Binary Search", subcategory: "Binary Search on Sorted Data", acceptance: "56.2%", status: "todo" },
    // On Answer
    { id: 875, name: "Koko Eating Bananas", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Answer", acceptance: "49.8%", status: "todo" },
    { id: 278, name: "First Bad Version", difficulty: "easy", topic: "Binary Search", subcategory: "Binary Answer", acceptance: "43.0%", status: "todo" },
    { id: 374, name: "Guess Number Higher or Lower", difficulty: "easy", topic: "Binary Search", subcategory: "Binary Answer", acceptance: "52.0%", status: "todo" },
    { id: 4, name: "Median of Two Sorted Arrays", difficulty: "hard", topic: "Binary Search", subcategory: "Binary Answer", acceptance: "37.5%", status: "todo" },
    { id: 1011, name: "Capacity To Ship Packages Within D Days", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Answer", acceptance: "67.5%", status: "todo" },
    { id: 410, name: "Split Array Largest Sum", difficulty: "hard", topic: "Binary Search", subcategory: "Binary Search on Answer", acceptance: "54.8%", status: "todo" },
    { id: 774, name: "Minimize Max Distance to Gas Station", difficulty: "hard", topic: "Binary Search", subcategory: "Binary Search on Answer", acceptance: "52.4%", status: "todo" },
    { id: 1283, name: "Find the Smallest Divisor Given a Threshold", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Answer", acceptance: "57.1%", status: "todo" },
    { id: 1482, name: "Minimum Number of Days to Make m Bouquets", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Search on Answer", acceptance: "56.9%", status: "todo" },

    // --- 3. LINKED LISTS ---
    // Fast/Slow Pointers
    { id: 141, name: "Linked List Cycle", difficulty: "easy", topic: "Linked Lists", subcategory: "Fast/Slow Pointers (Linked List)", acceptance: "47.8%", status: "todo" },
    { id: 142, name: "Linked List Cycle II", difficulty: "medium", topic: "Linked Lists", subcategory: "Fast/Slow Pointers (Linked List)", acceptance: "48.2%", status: "todo" },
    { id: 19, name: "Remove Nth Node From End of List", difficulty: "medium", topic: "Linked Lists", subcategory: "Fast/Slow Pointers (Linked List)", acceptance: "40.5%", status: "todo" },
    { id: 876, name: "Middle of the Linked List", difficulty: "easy", topic: "Linked Lists", subcategory: "Fast/Slow Pointers (Linked List)", acceptance: "76.1%", status: "todo" },
    { id: 160, name: "Intersection of Two Linked Lists", difficulty: "easy", topic: "Linked Lists", subcategory: "Fast/Slow Pointers (Linked List)", acceptance: "54.9%", status: "todo" },
    { id: 234, name: "Palindrome Linked List", difficulty: "easy", topic: "Linked Lists", subcategory: "Fast/Slow Pointers (Linked List)", acceptance: "50.9%", status: "todo" },
    // Linked List Manipulation
    { id: 21, name: "Merge Two Sorted Lists", difficulty: "easy", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "62.4%", status: "todo" },
    { id: 23, name: "Merge k Sorted Lists", difficulty: "hard", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "50.3%", status: "todo" },
    { id: 24, name: "Swap Nodes in Pairs", difficulty: "medium", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "62.8%", status: "todo" },
    { id: 25, name: "Reverse Nodes in k-Group", difficulty: "hard", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "56.1%", status: "todo" },
    { id: 92, name: "Reverse Linked List II", difficulty: "medium", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "46.2%", status: "todo" },
    { id: 138, name: "Copy List with Random Pointer", difficulty: "medium", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "53.2%", status: "todo" },
    { id: 206, name: "Reverse Linked List", difficulty: "easy", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "74.8%", status: "todo" },
    { id: 83, name: "Remove Duplicates from Sorted List", difficulty: "easy", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "51.1%", status: "todo" },
    { id: 82, name: "Remove Duplicates from Sorted List II", difficulty: "medium", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "45.8%", status: "todo" },
    { id: 61, name: "Rotate List", difficulty: "medium", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "36.6%", status: "todo" },

    // --- 4. STACKS & QUEUES ---
    // Monotonic Stack
    { id: 739, name: "Daily Temperatures", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "66.0%", status: "todo" },
    { id: 496, name: "Next Greater Element I", difficulty: "easy", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "71.9%", status: "todo" },
    { id: 503, name: "Next Greater Element II", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "63.2%", status: "todo" },
    { id: 84, name: "Largest Rectangle in Histogram", difficulty: "hard", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "42.9%", status: "todo" },
    { id: 85, name: "Maximal Rectangle", difficulty: "hard", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "45.1%", status: "todo" },
    { id: 901, name: "Online Stock Span", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "64.7%", status: "todo" },
    { id: 20, name: "Valid Parentheses", difficulty: "easy", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "41.0%", status: "todo" },
    { id: 150, name: "Evaluate Reverse Polish Notation", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "48.2%", status: "todo" },
    { id: 155, name: "Min Stack", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "53.5%", status: "todo" },
    { id: 402, name: "Remove K Digits", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "31.2%", status: "todo" },
    { id: 225, name: "Implement Stack using Queues", difficulty: "easy", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "62.0%", status: "todo" },
    { id: 232, name: "Implement Queue using Stacks", difficulty: "easy", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "64.5%", status: "todo" },
    { id: 456, name: "132 Pattern", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "33.5%", status: "todo" },
    { id: 907, name: "Sum of Subarray Minimums", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "35.4%", status: "todo" },
    { id: 1019, name: "Next Greater Node In Linked List", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "59.9%", status: "todo" },
    // Monotonic Queue / Deque
    { id: 239, name: "Sliding Window Maximum", difficulty: "hard", topic: "Stacks & Queues", subcategory: "Monotonic Queue / Deque", acceptance: "46.5%", status: "todo" },
    { id: 862, name: "Shortest Subarray with Sum at Least K", difficulty: "hard", topic: "Stacks & Queues", subcategory: "Monotonic Queue / Deque", acceptance: "26.3%", status: "todo" },
    { id: 1425, name: "Constrained Subsequence Sum", difficulty: "hard", topic: "Stacks & Queues", subcategory: "Monotonic Queue / Deque", acceptance: "54.8%", status: "todo" },
    { id: 1438, name: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Queue / Deque", acceptance: "49.2%", status: "todo" },
    { id: 1499, name: "Max Value of Equation", difficulty: "hard", topic: "Stacks & Queues", subcategory: "Monotonic Queue / Deque", acceptance: "46.9%", status: "todo" },
    { id: 1696, name: "Jump Game VI", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Queue / Deque", acceptance: "46.1%", status: "todo" },

    // --- 5. TREES & BSTS ---
    // Tree DFS
    { id: 104, name: "Maximum Depth of Binary Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "74.1%", status: "todo" },
    { id: 112, name: "Path Sum", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "48.9%", status: "todo" },
    { id: 113, name: "Path Sum II", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "58.2%", status: "todo" },
    { id: 543, name: "Diameter of Binary Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "57.5%", status: "todo" },
    { id: 124, name: "Binary Tree Maximum Path Sum", difficulty: "hard", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "39.4%", status: "todo" },
    { id: 226, name: "Invert Binary Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "75.2%", status: "todo" },
    { id: 100, name: "Same Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "59.8%", status: "todo" },
    { id: 101, name: "Symmetric Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "55.4%", status: "todo" },
    { id: 110, name: "Balanced Binary Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "50.0%", status: "todo" },
    { id: 572, name: "Subtree of Another Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "47.5%", status: "todo" },
    { id: 236, name: "Lowest Common Ancestor of a Binary Tree", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "62.5%", status: "todo" },
    { id: 105, name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "62.5%", status: "todo" },
    { id: 106, name: "Construct Binary Tree from Inorder and Postorder Traversal", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "61.0%", status: "todo" },
    { id: 437, name: "Path Sum III", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "48.0%", status: "todo" },
    { id: 297, name: "Serialize and Deserialize Binary Tree", difficulty: "hard", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "55.8%", status: "todo" },
    // Tree BFS
    { id: 102, name: "Binary Tree Level Order Traversal", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree BFS / Level Order", acceptance: "64.9%", status: "todo" },
    { id: 103, name: "Binary Tree Zigzag Level Order Traversal", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree BFS / Level Order", acceptance: "57.1%", status: "todo" },
    { id: 199, name: "Binary Tree Right Side View", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree BFS / Level Order", acceptance: "62.3%", status: "todo" },
    { id: 515, name: "Find Largest Value in Each Tree Row", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree BFS / Level Order", acceptance: "65.1%", status: "todo" },
    { id: 637, name: "Average of Levels in Binary Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree BFS / Level Order", acceptance: "71.6%", status: "todo" },
    { id: 116, name: "Populating Next Right Pointers in Each Node", difficulty: "medium", topic: "Trees & BSTs", subcategory: "Tree BFS / Level Order", acceptance: "61.3%", status: "todo" },
    // BST Problems
    { id: 98, name: "Validate Binary Search Tree", difficulty: "medium", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "32.2%", status: "todo" },
    { id: 1382, name: "Balance a Binary Search Tree", difficulty: "medium", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "83.1%", status: "todo" },
    { id: 235, name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "64.9%", status: "todo" },
    { id: 669, name: "Trim a Binary Search Tree", difficulty: "medium", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "67.3%", status: "todo" },
    { id: 701, name: "Insert into a Binary Search Tree", difficulty: "medium", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "74.6%", status: "todo" },
    { id: 99, name: "Recover Binary Search Tree", difficulty: "medium", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "52.1%", status: "todo" },
    { id: 230, name: "Kth Smallest Element in a BST", difficulty: "medium", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "70.9%", status: "todo" },
    { id: 450, name: "Delete Node in a BST", difficulty: "medium", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "50.8%", status: "todo" },
    { id: 700, name: "Search in a Binary Search Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "78.4%", status: "todo" },

    // --- 6. HEAPS & INTERVALS ---
    // Heap / Top K
    { id: 215, name: "Kth Largest Element in an Array", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "66.4%", status: "todo" },
    { id: 692, name: "Top K Frequent Words", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "57.3%", status: "todo" },
    { id: 703, name: "Kth Largest Element in a Stream", difficulty: "easy", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "56.1%", status: "todo" },
    { id: 973, name: "K Closest Points to Origin", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "66.0%", status: "todo" },
    { id: 1046, name: "Last Stone Weight", difficulty: "easy", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "65.3%", status: "todo" },
    { id: 451, name: "Sort Characters By Frequency", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "71.3%", status: "todo" },
    { id: 1642, name: "Furthest Building You Can Reach", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "47.0%", status: "todo" },
    { id: 2530, name: "Maximal Score After Applying K Operations", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "57.2%", status: "todo" },
    { id: 373, name: "Find K Pairs with Smallest Sums", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Heap / Top K", acceptance: "38.9%", status: "todo" },
    // Intervals
    { id: 56, name: "Merge Intervals", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "46.2%", status: "todo" },
    { id: 57, name: "Insert Interval", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "39.4%", status: "todo" },
    { id: 252, name: "Meeting Rooms", difficulty: "easy", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "57.2%", status: "todo" },
    { id: 253, name: "Meeting Rooms II", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "51.0%", status: "todo" },
    { id: 435, name: "Non-overlapping Intervals", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "51.8%", status: "todo" },
    { id: 452, name: "Minimum Number of Arrows to Burst Balloons", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "56.0%", status: "todo" },
    { id: 986, name: "Interval List Intersections", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "72.3%", status: "todo" },
    { id: 1288, name: "Remove Covered Intervals", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "64.8%", status: "todo" },
    { id: 2406, name: "Divide Intervals Into Minimum Number of Groups", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Intervals", acceptance: "55.4%", status: "todo" },
    // Greedy Scheduling
    { id: 45, name: "Jump Game II", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Greedy Scheduling / Sorting", acceptance: "40.1%", status: "todo" },
    { id: 55, name: "Jump Game", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Greedy Scheduling / Sorting", acceptance: "38.5%", status: "todo" },
    { id: 406, name: "Queue Reconstruction by Height", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Greedy Scheduling / Sorting", acceptance: "73.2%", status: "todo" },
    { id: 621, name: "Task Scheduler", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Greedy Scheduling / Sorting", acceptance: "56.4%", status: "todo" },
    { id: 763, name: "Partition Labels", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Greedy Scheduling / Sorting", acceptance: "79.8%", status: "todo" },
    { id: 134, name: "Gas Station", difficulty: "medium", topic: "Heaps & Intervals", subcategory: "Greedy Scheduling / Sorting", acceptance: "45.1%", status: "todo" },

    // --- 7. GRAPHS ---
    // BFS/DFS
    { id: 200, name: "Number of Islands", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "57.8%", status: "todo" },
    { id: 695, name: "Max Area of Island", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "71.8%", status: "todo" },
    { id: 733, name: "Flood Fill", difficulty: "easy", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "60.4%", status: "todo" },
    { id: 994, name: "Rotting Oranges", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "53.1%", status: "todo" },
    { id: 1091, name: "Shortest Path in Binary Matrix", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "46.2%", status: "todo" },
    { id: 1254, name: "Number of Closed Islands", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "65.7%", status: "todo" },
    // Topological Sort
    { id: 207, name: "Course Schedule", difficulty: "medium", topic: "Graphs", subcategory: "Topological Sort / DAG", acceptance: "45.9%", status: "todo" },
    { id: 210, name: "Course Schedule II", difficulty: "medium", topic: "Graphs", subcategory: "Topological Sort / DAG", acceptance: "49.2%", status: "todo" },
    { id: 802, name: "Find Eventual Safe States", difficulty: "medium", topic: "Graphs", subcategory: "Topological Sort / DAG", acceptance: "58.1%", status: "todo" },
    { id: 1462, name: "Course Schedule IV", difficulty: "medium", topic: "Graphs", subcategory: "Topological Sort / DAG", acceptance: "49.6%", status: "todo" },
    { id: 1203, name: "Sort Items by Groups Respecting Dependencies", difficulty: "hard", topic: "Graphs", subcategory: "Topological Sort / DAG", acceptance: "53.2%", status: "todo" },
    { id: 2115, name: "Find All Possible Recipes from Given Supplies", difficulty: "medium", topic: "Graphs", subcategory: "Topological Sort / DAG", acceptance: "48.3%", status: "todo" },
    { id: 417, name: "Pacific Atlantic Water Flow", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "54.5%", status: "todo" },
    { id: 130, name: "Surrounded Regions", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "37.9%", status: "todo" },
    { id: 269, name: "Alien Dictionary", difficulty: "hard", topic: "Graphs", subcategory: "Topological Sort / DAG", acceptance: "35.5%", status: "todo" },
    { id: 310, name: "Minimum Height Trees", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "38.2%", status: "todo" },
    { id: 261, name: "Graph Valid Tree", difficulty: "medium", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "45.1%", status: "todo" },
    // Union Find
    { id: 547, name: "Number of Provinces", difficulty: "medium", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "66.1%", status: "todo" },
    { id: 684, name: "Redundant Connection", difficulty: "medium", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "62.4%", status: "todo" },
    { id: 1319, name: "Number of Operations to Make Network Connected", difficulty: "medium", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "59.8%", status: "todo" },
    { id: 1579, name: "Remove Max Number of Edges to Keep Graph Fully Traversable", difficulty: "hard", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "56.4%", status: "todo" },
    { id: 990, name: "Satisfiability of Equality Equations", difficulty: "medium", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "50.9%", status: "todo" },
    { id: 1202, name: "Smallest String With Swaps", difficulty: "medium", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "57.8%", status: "todo" },
    { id: 721, name: "Accounts Merge", difficulty: "medium", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "57.2%", status: "todo" },
    { id: 839, name: "Similar String Groups", difficulty: "hard", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "49.5%", status: "todo" },
    { id: 1061, name: "Lexicographically Smallest Equivalent String", difficulty: "medium", topic: "Graphs", subcategory: "Union Find / DSU", acceptance: "73.4%", status: "todo" },
    // Shortest Path
    { id: 743, name: "Network Delay Time", difficulty: "medium", topic: "Graphs", subcategory: "Shortest Path", acceptance: "52.3%", status: "todo" },
    { id: 787, name: "Cheapest Flights Within K Stops", difficulty: "medium", topic: "Graphs", subcategory: "Shortest Path", acceptance: "37.4%", status: "todo" },
    { id: 1514, name: "Path with Maximum Probability", difficulty: "medium", topic: "Graphs", subcategory: "Shortest Path", acceptance: "52.9%", status: "todo" },
    { id: 1631, name: "Path With Minimum Effort", difficulty: "medium", topic: "Graphs", subcategory: "Shortest Path", acceptance: "48.2%", status: "todo" },
    { id: 1334, name: "Find the City With the Smallest Number of Neighbors at a Threshold Distance", difficulty: "medium", topic: "Graphs", subcategory: "Shortest Path", acceptance: "54.8%", status: "todo" },
    { id: 1976, name: "Number of Ways to Arrive at Destination", difficulty: "medium", topic: "Graphs", subcategory: "Shortest Path", acceptance: "31.9%", status: "todo" },
    // MST / Graph Greedy
    { id: 1584, name: "Min Cost to Connect All Points", difficulty: "medium", topic: "Graphs", subcategory: "MST / Graph Greedy", acceptance: "64.8%", status: "todo" },
    { id: 1135, name: "Connecting Cities With Minimum Cost", difficulty: "medium", topic: "Graphs", subcategory: "MST / Graph Greedy", acceptance: "61.3%", status: "todo" },
    { id: 1168, name: "Optimize Water Distribution in a Village", difficulty: "hard", topic: "Graphs", subcategory: "MST / Graph Greedy", acceptance: "63.9%", status: "todo" },
    { id: 1489, name: "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree", difficulty: "hard", topic: "Graphs", subcategory: "MST / Graph Greedy", acceptance: "61.9%", status: "todo" },
    { id: 778, name: "Swim in Rising Water", difficulty: "hard", topic: "Graphs", subcategory: "MST / Graph Greedy", acceptance: "60.4%", status: "todo" },
    { id: 1102, name: "Path With Maximum Minimum Value", difficulty: "medium", topic: "Graphs", subcategory: "MST / Graph Greedy", acceptance: "53.7%", status: "todo" },
    // Strongly Connected Components
    { id: 1192, name: "Critical Connections in a Network", difficulty: "hard", topic: "Graphs", subcategory: "Strongly Connected Components", acceptance: "55.4%", status: "todo" },
    { id: 2360, name: "Longest Cycle in a Graph", difficulty: "hard", topic: "Graphs", subcategory: "Strongly Connected Components", acceptance: "48.9%", status: "todo" },
    { id: 2685, name: "Count the Number of Complete Components", difficulty: "medium", topic: "Graphs", subcategory: "Strongly Connected Components", acceptance: "72.1%", status: "todo" },
    { id: 9999, name: "Strongly Connected Components", difficulty: "medium", topic: "Graphs", subcategory: "Strongly Connected Components", acceptance: "55.0%", status: "todo" },

    // --- 8. TRIES & BITS ---
    // Trie
    { id: 208, name: "Implement Trie (Prefix Tree)", difficulty: "medium", topic: "Tries & Bits", subcategory: "Trie", acceptance: "63.4%", status: "todo" },
    { id: 211, name: "Design Add and Search Words Data Structure", difficulty: "medium", topic: "Tries & Bits", subcategory: "Trie", acceptance: "43.9%", status: "todo" },
    { id: 212, name: "Word Search II", difficulty: "hard", topic: "Tries & Bits", subcategory: "Trie", acceptance: "37.5%", status: "todo" },
    { id: 648, name: "Replace Words", difficulty: "medium", topic: "Tries & Bits", subcategory: "Trie", acceptance: "62.4%", status: "todo" },
    { id: 677, name: "Map Sum Pairs", difficulty: "medium", topic: "Tries & Bits", subcategory: "Trie", acceptance: "56.4%", status: "todo" },
    { id: 1268, name: "Search Suggestions System", difficulty: "medium", topic: "Tries & Bits", subcategory: "Trie", acceptance: "65.1%", status: "todo" },
    { id: 421, name: "Maximum XOR of Two Numbers in an Array", difficulty: "medium", topic: "Tries & Bits", subcategory: "Trie", acceptance: "55.2%", status: "todo" },
    { id: 820, name: "Short Encoding of Words", difficulty: "medium", topic: "Tries & Bits", subcategory: "Trie", acceptance: "59.4%", status: "todo" },
    // Bit Manipulation
    { id: 136, name: "Single Number", difficulty: "easy", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "71.2%", status: "todo" },
    { id: 137, name: "Single Number II", difficulty: "medium", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "60.9%", status: "todo" },
    { id: 191, name: "Number of 1 Bits", difficulty: "easy", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "66.5%", status: "todo" },
    { id: 338, name: "Counting Bits", difficulty: "easy", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "77.0%", status: "todo" },
    { id: 268, name: "Missing Number", difficulty: "easy", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "66.5%", status: "todo" },
    { id: 190, name: "Reverse Bits", difficulty: "easy", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "57.8%", status: "todo" },
    { id: 371, name: "Sum of Two Integers", difficulty: "medium", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "49.8%", status: "todo" },

    // --- 9. DYNAMIC PROGRAMMING ---
    // 1D DP Basics
    { id: 70, name: "Climbing Stairs", difficulty: "easy", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "52.3%", status: "todo" },
    { id: 198, name: "House Robber", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "49.6%", status: "todo" },
    { id: 213, name: "House Robber II", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "41.9%", status: "todo" },
    { id: 322, name: "Coin Change", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "42.1%", status: "todo" },
    { id: 139, name: "Word Break", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "46.3%", status: "todo" },
    { id: 300, name: "Longest Increasing Subsequence", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "54.6%", status: "todo" },
    { id: 746, name: "Min Cost Climbing Stairs", difficulty: "easy", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "64.0%", status: "todo" },
    { id: 152, name: "Maximum Product Subarray", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "35.7%", status: "todo" },
    { id: 91, name: "Decode Ways", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "35.1%", status: "todo" },
    { id: 53, name: "Maximum Subarray", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "50.9%", status: "todo" },
    { id: 279, name: "Perfect Squares", difficulty: "medium", topic: "Dynamic Programming", subcategory: "1D DP Basics", acceptance: "52.9%", status: "todo" },
    // Knapsack / Subset DP
    { id: 416, name: "Partition Equal Subset Sum", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Knapsack / Subset DP", acceptance: "46.2%", status: "todo" },
    { id: 494, name: "Target Sum", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Knapsack / Subset DP", acceptance: "46.5%", status: "todo" },
    { id: 518, name: "Coin Change II", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Knapsack / Subset DP", acceptance: "62.4%", status: "todo" },
    { id: 474, name: "Ones and Zeroes", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Knapsack / Subset DP", acceptance: "47.1%", status: "todo" },
    { id: 1049, name: "Last Stone Weight II", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Knapsack / Subset DP", acceptance: "53.8%", status: "todo" },
    { id: 879, name: "Profitable Schemes", difficulty: "hard", topic: "Dynamic Programming", subcategory: "Knapsack / Subset DP", acceptance: "48.6%", status: "todo" },
    // Grid DP
    { id: 62, name: "Unique Paths", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Grid DP", acceptance: "63.2%", status: "todo" },
    { id: 63, name: "Unique Paths II", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Grid DP", acceptance: "40.9%", status: "todo" },
    { id: 64, name: "Minimum Path Sum", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Grid DP", acceptance: "44.9%", status: "todo" },
    { id: 221, name: "Maximal Square", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Grid DP", acceptance: "45.1%", status: "todo" },
    { id: 931, name: "Minimum Falling Path Sum", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Grid DP", acceptance: "67.1%", status: "todo" },
    { id: 120, name: "Triangle", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Grid DP", acceptance: "54.8%", status: "todo" },
    // String DP
    { id: 1143, name: "Longest Common Subsequence", difficulty: "medium", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "58.7%", status: "todo" },
    { id: 72, name: "Edit Distance", difficulty: "medium", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "54.2%", status: "todo" },
    { id: 115, name: "Distinct Subsequences", difficulty: "hard", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "45.8%", status: "todo" },
    { id: 583, name: "Delete Operation for Two Strings", difficulty: "medium", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "60.3%", status: "todo" },
    { id: 97, name: "Interleaving String", difficulty: "medium", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "37.4%", status: "todo" },
    { id: 1312, name: "Minimum Insertion Steps to Make a String Palindrome", difficulty: "hard", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "68.2%", status: "todo" },
    { id: 5, name: "Longest Palindromic Substring", difficulty: "medium", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "33.9%", status: "todo" },
    { id: 647, name: "Palindromic Substrings", difficulty: "medium", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "68.6%", status: "todo" },
    { id: 516, name: "Longest Palindromic Subsequence", difficulty: "medium", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "61.8%", status: "todo" },
    { id: 712, name: "Minimum ASCII Delete Sum for Two Strings", difficulty: "medium", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "63.4%", status: "todo" },
    { id: 10, name: "Regular Expression Matching", difficulty: "hard", topic: "Dynamic Programming", subcategory: "String DP / Sequence DP", acceptance: "28.1%", status: "todo" },
    // Bitmask DP
    { id: 847, name: "Shortest Path Visiting All Nodes", difficulty: "hard", topic: "Dynamic Programming", subcategory: "Bitmask DP", acceptance: "60.1%", status: "todo" },
    { id: 1125, name: "Smallest Sufficient Team", difficulty: "hard", topic: "Dynamic Programming", subcategory: "Bitmask DP", acceptance: "54.8%", status: "todo" },
    { id: 691, name: "Stickers to Spell Word", difficulty: "hard", topic: "Dynamic Programming", subcategory: "Bitmask DP", acceptance: "47.1%", status: "todo" },
    { id: 464, name: "Can I Win", difficulty: "medium", topic: "Dynamic Programming", subcategory: "Bitmask DP", acceptance: "30.1%", status: "todo" },
    { id: 1434, name: "Number of Ways to Wear Different Hats to Each Other", difficulty: "hard", topic: "Dynamic Programming", subcategory: "Bitmask DP", acceptance: "41.5%", status: "todo" },

    // --- 10. BACKTRACKING & RECURSION ---
    { id: 17, name: "Letter Combinations of a Phone Number", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "63.5%", status: "todo" },
    { id: 22, name: "Generate Parentheses", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "76.4%", status: "todo" },
    { id: 37, name: "Sudoku Solver", difficulty: "hard", topic: "Backtracking & Recursion", subcategory: "Sudoku Backtracking", acceptance: "63.1%", status: "todo" },
    { id: 39, name: "Combination Sum", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "74.0%", status: "todo" },
    { id: 40, name: "Combination Sum II", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "56.5%", status: "todo" },
    { id: 46, name: "Permutations", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "79.8%", status: "todo" },
    { id: 51, name: "N-Queens", difficulty: "hard", topic: "Backtracking & Recursion", subcategory: "N-Queens Backtracking", acceptance: "71.7%", status: "todo" },
    { id: 78, name: "Subsets", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "76.6%", status: "todo" },
    { id: 90, name: "Subsets II", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "57.2%", status: "todo" },
    { id: 47, name: "Permutations II", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "58.3%", status: "todo" },
    { id: 131, name: "Palindrome Partitioning", difficulty: "medium", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "72.4%", status: "todo" },
    { id: 2151, name: "Maximum Good People Based on Statements", difficulty: "hard", topic: "Backtracking & Recursion", subcategory: "Backtracking Search", acceptance: "51.8%", status: "todo" },

    // --- 11. SORTING & PARTITIONING ---
    { id: 75, name: "Sort Colors", difficulty: "medium", topic: "Sorting & Partitioning", subcategory: "Partitioning", acceptance: "65.8%", status: "todo" },
    { id: 88, name: "Merge Sorted Array", difficulty: "easy", topic: "Sorting & Partitioning", subcategory: "Merge Sort Pattern", acceptance: "52.8%", status: "todo" },
    { id: 148, name: "Sort List", difficulty: "medium", topic: "Sorting & Partitioning", subcategory: "Merge Sort Pattern", acceptance: "62.6%", status: "todo" },
    { id: 912, name: "Sort an Array", difficulty: "medium", topic: "Sorting & Partitioning", subcategory: "Quick Sort / Merge Sort", acceptance: "57.6%", status: "todo" },
    { id: 977, name: "Squares of a Sorted Array", difficulty: "easy", topic: "Sorting & Partitioning", subcategory: "Two Pointers Sorting", acceptance: "73.9%", status: "todo" },
    { id: 179, name: "Largest Number", difficulty: "medium", topic: "Sorting & Partitioning", subcategory: "Custom Sort", acceptance: "40.8%", status: "todo" },

    // --- 12. DESIGN & ADVANCED DATA STRUCTURES ---
    { id: 146, name: "LRU Cache", difficulty: "medium", topic: "Design & Advanced DS", subcategory: "LRU Cache", acceptance: "44.1%", status: "todo" },
    { id: 295, name: "Find Median from Data Stream", difficulty: "hard", topic: "Design & Advanced DS", subcategory: "Two Heaps / Median", acceptance: "53.2%", status: "todo" },
    { id: 1167, name: "Minimum Cost to Connect Sticks", difficulty: "medium", topic: "Design & Advanced DS", subcategory: "Huffman / Greedy Merge", acceptance: "69.4%", status: "todo" },
    { id: 871, name: "Minimum Number of Refueling Stops", difficulty: "hard", topic: "Design & Advanced DS", subcategory: "Huffman / Greedy Merge", acceptance: "38.2%", status: "todo" },
    { id: 307, name: "Range Sum Query - Mutable", difficulty: "medium", topic: "Design & Advanced DS", subcategory: "Segment Tree", acceptance: "41.9%", status: "todo" },
    { id: 315, name: "Count of Smaller Numbers After Self", difficulty: "hard", topic: "Design & Advanced DS", subcategory: "Segment Tree", acceptance: "42.7%", status: "todo" },
    { id: 308, name: "Range Sum Query 2D - Mutable", difficulty: "hard", topic: "Design & Advanced DS", subcategory: "Segment Tree", acceptance: "40.1%", status: "todo" },
    { id: 380, name: "Insert Delete GetRandom O(1)", difficulty: "medium", topic: "Design & Advanced DS", subcategory: "Design Data Structure", acceptance: "54.6%", status: "todo" },
    { id: 460, name: "LFU Cache", difficulty: "hard", topic: "Design & Advanced DS", subcategory: "Cache Design", acceptance: "45.8%", status: "todo" },
    { id: 493, name: "Reverse Pairs", difficulty: "hard", topic: "Design & Advanced DS", subcategory: "Fenwick Tree / Segment Tree", acceptance: "32.2%", status: "todo" },
    { id: 705, name: "Design HashSet", difficulty: "easy", topic: "Design & Advanced DS", subcategory: "Design Data Structure", acceptance: "66.5%", status: "todo" },
    { id: 706, name: "Design HashMap", difficulty: "easy", topic: "Design & Advanced DS", subcategory: "Design Data Structure", acceptance: "65.8%", status: "todo" },
    { id: 729, name: "My Calendar I", difficulty: "medium", topic: "Design & Advanced DS", subcategory: "Interval Design", acceptance: "59.0%", status: "todo" },

    // --- 13. STRINGS & PATTERN MATCHING ---
    { id: 28, name: "Find the Index of the First Occurrence in a String", difficulty: "easy", topic: "Strings & Pattern Matching", subcategory: "KMP String Matching", acceptance: "44.5%", status: "todo" },
    { id: 214, name: "Shortest Palindrome", difficulty: "hard", topic: "Strings & Pattern Matching", subcategory: "KMP String Matching", acceptance: "36.2%", status: "todo" },
    { id: 459, name: "Repeated Substring Pattern", difficulty: "easy", topic: "Strings & Pattern Matching", subcategory: "KMP String Matching", acceptance: "46.8%", status: "todo" },
    { id: 686, name: "Repeated String Match", difficulty: "medium", topic: "Strings & Pattern Matching", subcategory: "Rolling Hash / KMP", acceptance: "36.5%", status: "todo" },
    { id: 1044, name: "Longest Duplicate Substring", difficulty: "hard", topic: "Strings & Pattern Matching", subcategory: "Rolling Hash", acceptance: "31.2%", status: "todo" },
    { id: 1392, name: "Longest Happy Prefix", difficulty: "hard", topic: "Strings & Pattern Matching", subcategory: "KMP String Matching", acceptance: "44.0%", status: "todo" },

    // --- 14. COMPREHENSIVE ADDITIONS TO 300 ---
    { id: 121, name: "Best Time to Buy and Sell Stock", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "54.0%", status: "todo" },
    { id: 122, name: "Best Time to Buy and Sell Stock II", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Greedy Scheduling / Sorting", acceptance: "65.2%", status: "todo" },
    { id: 344, name: "Reverse String", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "77.5%", status: "todo" },
    { id: 925, name: "Long Pressed Name", difficulty: "easy", topic: "Arrays & Hashing", subcategory: "Two Pointers", acceptance: "37.8%", status: "todo" },
    { id: 187, name: "Repeated DNA Sequences", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "47.2%", status: "todo" },
    { id: 1658, name: "Minimum Operations to Reduce X to Zero", difficulty: "medium", topic: "Arrays & Hashing", subcategory: "Sliding Window", acceptance: "39.1%", status: "todo" },
    { id: 367, name: "Valid Perfect Square", difficulty: "easy", topic: "Binary Search", subcategory: "Binary Answer", acceptance: "43.5%", status: "todo" },
    { id: 441, name: "Arranging Coins", difficulty: "easy", topic: "Binary Search", subcategory: "Binary Answer", acceptance: "46.2%", status: "todo" },
    { id: 240, name: "Search a 2D Matrix II", difficulty: "medium", topic: "Binary Search", subcategory: "Binary Answer", acceptance: "51.8%", status: "todo" },
    { id: 203, name: "Remove Linked List Elements", difficulty: "easy", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "47.5%", status: "todo" },
    { id: 328, name: "Odd Even Linked List", difficulty: "medium", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "61.2%", status: "todo" },
    { id: 2, name: "Add Two Numbers", difficulty: "medium", topic: "Linked Lists", subcategory: "Linked List Manipulation", acceptance: "42.5%", status: "todo" },
    { id: 108, name: "Convert Sorted Array to Binary Search Tree", difficulty: "easy", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "60.4%", status: "todo" },
    { id: 94, name: "Binary Tree Inorder Traversal", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "74.8%", status: "todo" },
    { id: 144, name: "Binary Tree Preorder Traversal", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "68.2%", status: "todo" },
    { id: 145, name: "Binary Tree Postorder Traversal", difficulty: "easy", topic: "Trees & BSTs", subcategory: "Tree DFS", acceptance: "60.1%", status: "todo" },
    { id: 735, name: "Asteroid Collision", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "44.8%", status: "todo" },
    { id: 394, name: "Decode String", difficulty: "medium", topic: "Stacks & Queues", subcategory: "Monotonic Stack", acceptance: "58.2%", status: "todo" },
    { id: 133, name: "Clone Graph", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "55.1%", status: "todo" },
    // --- 15. PROBLEMS FOR NEW VISUALIZERS ---
    { id: 220, name: "Contains Duplicate III", difficulty: "hard", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "22.5%", status: "todo" },
    { id: 1349, name: "Maximum Students Taking Exams", difficulty: "hard", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "56.0%", status: "todo" },
    { id: 773, name: "Sliding Puzzle", difficulty: "hard", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "63.2%", status: "todo" },
    // --- 16. ADDITIONAL PROBLEMS FOR NEW VISUALIZERS ---
    { id: 109, name: "Convert Sorted List to Binary Search Tree", difficulty: "medium", topic: "Trees & BSTs", subcategory: "BST Problems", acceptance: "60.2%", status: "todo" },
    { id: 218, name: "The Skyline Problem", difficulty: "hard", topic: "Design & Advanced DS", subcategory: "BST Problems", acceptance: "42.8%", status: "todo" },
    { id: 2123, name: "Minimum Operations to Remove Adjacent Ones in Matrix", difficulty: "hard", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "51.1%", status: "todo" },
    { id: 1947, name: "Maximum Compatibility Score Sum", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "60.4%", status: "todo" },
    { id: 1263, name: "Minimum Moves to Move a Box to Their Target Location", difficulty: "hard", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "49.6%", status: "todo" },
    { id: 752, name: "Open the Lock", difficulty: "medium", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "56.7%", status: "todo" },
    { id: 127, name: "Word Ladder", difficulty: "hard", topic: "Graphs", subcategory: "Graph BFS / DFS", acceptance: "38.9%", status: "todo" },
    // --- 17. SUDOKU & BACKTRACKING ---
    { id: 52, name: "N-Queens II", difficulty: "hard", topic: "Backtracking & Recursion", subcategory: "Sudoku Backtracking", acceptance: "65.5%", status: "todo" },
    { id: 980, name: "Unique Paths III", difficulty: "hard", topic: "Backtracking & Recursion", subcategory: "Sudoku Backtracking", acceptance: "43.2%", status: "todo" },
    // --- 18. MORE BIT MANIPULATION ---
    { id: 389, name: "Find the Difference", difficulty: "easy", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "61.3%", status: "todo" },
    { id: 1863, name: "Sum of All Subset XOR Totals", difficulty: "easy", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "82.5%", status: "todo" },
    // --- 20. NEW SORTING PROBLEMS ---
    { id: 147, name: "Insertion Sort List", difficulty: "medium", topic: "Sorting & Partitioning", subcategory: "Insertion Sort Pattern", acceptance: "52.8%", status: "todo" },
    // --- 21. MORE SORTING PROBLEMS ---
    { id: 274, name: "H-Index", difficulty: "medium", topic: "Sorting & Partitioning", subcategory: "Insertion Sort Pattern", acceptance: "38.5%", status: "todo" },
    // --- 19. BIT SHIFT REGISTER PROBLEMS ---
    { id: 201, name: "Bitwise AND of Numbers Range", difficulty: "medium", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "44.6%", status: "todo" },
    { id: 476, name: "Number Complement", difficulty: "easy", topic: "Tries & Bits", subcategory: "Bit Manipulation", acceptance: "67.9%", status: "todo" }





  ],
  
  badges: [
    { id: 'first', name: 'First Milestone', desc: 'Solve your first problem', icon: '🚀', check: (probs) => probs.filter(p => p.status === 'done').length >= 1 },
    { id: 'arrays', name: 'Array Tactician', desc: 'Solve 3 Array problems', icon: '⚡', check: (probs) => probs.filter(p => p.topic === 'Arrays & Hashing' && p.status === 'done').length >= 3 },
    { id: 'lists', name: 'List Navigator', desc: 'Solve 2 Linked List problems', icon: '🔗', check: (probs) => probs.filter(p => p.topic === 'Linked Lists' && p.status === 'done').length >= 2 },
    { id: 'trees', name: 'Tree Guardian', desc: 'Solve 2 Tree problems', icon: '🌲', check: (probs) => probs.filter(p => p.topic === 'Trees & BSTs' && p.status === 'done').length >= 2 },
    { id: 'dp', name: 'Dynamic Prodigy', desc: 'Solve 2 DP problems', icon: '🔮', check: (probs) => probs.filter(p => p.topic === 'Dynamic Programming' && p.status === 'done').length >= 2 },
    { id: 'backtracking', name: 'Search Sculptor', desc: 'Solve 2 Backtracking problems', icon: '♟️', check: (probs) => probs.filter(p => p.topic === 'Backtracking & Recursion' && p.status === 'done').length >= 2 },
    { id: 'advanced-ds', name: 'Systems Tactician', desc: 'Solve 2 Advanced DS problems', icon: '🧠', check: (probs) => probs.filter(p => p.topic === 'Design & Advanced DS' && p.status === 'done').length >= 2 },
    { id: 'strings', name: 'Pattern Hunter', desc: 'Solve 2 string-pattern problems', icon: '🔎', check: (probs) => probs.filter(p => p.topic === 'Strings & Pattern Matching' && p.status === 'done').length >= 2 },
    { id: 'streak-badge', name: 'Dedicated Scholar', desc: 'Maintain a 5+ day streak', icon: '🔥', check: () => state.streak >= 5 },
    { id: 'master', name: 'Algorithm Overlord', desc: 'Solve 15+ roadmap problems', icon: '👑', check: (probs) => probs.filter(p => p.status === 'done').length >= 15 }
  ],
  
  activityLog: {}
};

const DSA_TOPICS = [
  'Arrays & Hashing',
  'Binary Search',
  'Linked Lists',
  'Stacks & Queues',
  'Trees & BSTs',
  'Heaps & Intervals',
  'Graphs',
  'Tries & Bits',
  'Dynamic Programming',
  'Backtracking & Recursion',
  'Sorting & Partitioning',
  'Design & Advanced DS',
  'Strings & Pattern Matching'
];

function getUnlockedBadgeIds() {
  return new Set(
    state.badges
      .filter(badge => badge.check(state.problems))
      .map(badge => badge.id)
  );
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Seed activity logs for the last six months
function seedActivityData() {
  const today = new Date();
  for (let i = 0; i < 183; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = formatDateKey(d);
    state.activityLog[dateStr] = 0;
  }
  const todayStr = formatDateKey(today);
  state.activityLog[todayStr] = state.problems.filter(p => p.status === 'done').length;
}

// ==========================================================================
// SPA ROUTER / TAB SWITCHER
// ==========================================================================

function switchTab(tabId, skipLoad = false) {
  state.activeTab = tabId;
  
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });
  
  const targetView = document.getElementById(`page-${tabId}`);
  if (targetView) targetView.classList.add('active');
  
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  if (tabId === 'dashboard') {
    renderDashboard();
  } else if (tabId === 'explorer') {
    renderProblemsList();
  } else if (tabId === 'visualizer') {
    if (!skipLoad) {
      loadSelectedAlgorithm();
    }
  }
  
  lucide.createIcons();
}

// ==========================================================================
// ALGO DECIDER WIDGET (LOBBY INTERACTION)
// ==========================================================================

const topicsList = ['Arrays & Hashing', 'Binary Search', 'Linked Lists', 'Stacks & Queues', 'Trees & BSTs', 'Dynamic Programming', 'Graphs'];
const dicePrompts = [
  "I'll go (code) if you say (solve this) Algo!",
  "Logic flow is in the air. Time to study!",
  "Arrays are waiting for your pointers...",
  "Recursion is recursion is recursion.",
  "No binary search can hide your true potential!",
  "Don't worry, complexity is just O(log N)!"
];

let deciderInterval = null;

function rollAlgoDice() {
  const screen = document.getElementById('decider-screen');
  const topicEl = document.getElementById('decider-topic');
  const promptEl = document.getElementById('decider-prompt');
  const btn = document.getElementById('decider-roll-btn');
  
  if (deciderInterval) return;
  
  screen.classList.add('rolling');
  btn.disabled = true;
  
  let count = 0;
  deciderInterval = setInterval(() => {
    const tempTopic = topicsList[Math.floor(Math.random() * topicsList.length)];
    topicEl.textContent = tempTopic.split(" ")[0]; 
    promptEl.textContent = "...rolling the code blocks...";
    count++;
    
    if (count > 12) {
      clearInterval(deciderInterval);
      deciderInterval = null;
      screen.classList.remove('rolling');
      btn.disabled = false;
      
      const finalTopic = topicsList[Math.floor(Math.random() * topicsList.length)];
      const relatedProbs = state.problems.filter(p => p.topic === finalTopic);
      const chosenProb = relatedProbs[Math.floor(Math.random() * relatedProbs.length)] || state.problems[0];
      const randomPrompt = dicePrompts[Math.floor(Math.random() * dicePrompts.length)];
      
      topicEl.textContent = chosenProb.name;
      promptEl.innerHTML = `Pattern: <strong>${chosenProb.subcategory}</strong><br>"${randomPrompt}"`;
      
      const actionSpan = document.createElement('span');
      actionSpan.style.display = 'block';
      actionSpan.style.marginTop = '0.5rem';
      actionSpan.style.fontSize = '0.75rem';
      actionSpan.style.textDecoration = 'underline';
      actionSpan.style.cursor = 'pointer';
      actionSpan.style.color = 'var(--primary-glow)';
      actionSpan.textContent = "Start Solving Now ➔";
      actionSpan.onclick = () => {
        loadProblemIntoVisualizer(chosenProb);
      };
      promptEl.appendChild(actionSpan);
    }
  }, 100);
}

// ==========================================================================
// PROBLEM EXPLORER PAGE
// ==========================================================================

function selectCategory(category, element) {
  state.selectedCategory = category;
  
  document.querySelectorAll('#category-pills .pill-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  element.classList.add('active');
  
  renderProblemsList();
}

function filterProblems() {
  state.searchQuery = document.getElementById('search-bar').value.toLowerCase();
  state.difficultyQuery = document.getElementById('difficulty-select').value;
  renderProblemsList();
}

function renderProblemsList() {
  const tbody = document.getElementById('problems-tbody');
  tbody.innerHTML = '';
  
  const filtered = state.problems.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery) || String(p.id).includes(state.searchQuery);
    const matchesDiff = state.difficultyQuery === 'all' || p.difficulty === state.difficultyQuery;
    const matchesCat = state.selectedCategory === 'all' || p.topic === state.selectedCategory;
    return matchesSearch && matchesDiff && matchesCat;
  });
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 2rem;">No matching problems found. Try another query!</td></tr>`;
    return;
  }
  
  filtered.forEach(p => {
    const tr = document.createElement('tr');
    
    const nameCell = `
      <div class="problem-title-cell">
        <a class="problem-name" onclick="onProblemClick(${p.id})">#${p.id} ${p.name}</a>
        <span class="problem-topic">${p.topic} • ${p.subcategory}</span>
      </div>
    `;
    
    const diffCell = `<span class="difficulty-badge ${p.difficulty}">${p.difficulty}</span>`;
    const acceptCell = `<span style="color: var(--text-muted); font-size: 0.9rem;">${p.acceptance}</span>`;
    
    let statusClass = 'todo';
    let statusLabel = 'Todo';
    if (p.status === 'progress') { statusClass = 'progress'; statusLabel = 'In Progress'; }
    if (p.status === 'done') { statusClass = 'done'; statusLabel = 'Solved'; }
    
    const statusCell = `
      <div style="text-align: right;">
        <div class="status-dropdown">
          <div class="status-btn ${statusClass}" onclick="toggleStatusDropdownMenu(event, ${p.id})">
            <span class="status-dot ${statusClass}"></span>
            <span>${statusLabel}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div class="status-options" id="dropdown-opts-${p.id}">
            <div class="status-opt" onclick="updateProblemStatus(${p.id}, 'todo')">
              <span class="status-dot todo"></span> Todo
            </div>
            <div class="status-opt" onclick="updateProblemStatus(${p.id}, 'progress')">
              <span class="status-dot progress"></span> In Progress
            </div>
            <div class="status-opt" onclick="updateProblemStatus(${p.id}, 'done')">
              <span class="status-dot done"></span> Solved
            </div>
          </div>
        </div>
      </div>
    `;
    
    tr.innerHTML = `
      <td>${nameCell}</td>
      <td>${diffCell}</td>
      <td>${acceptCell}</td>
      <td>${statusCell}</td>
    `;
    
    tbody.appendChild(tr);
  });
}

function toggleStatusDropdownMenu(event, probId) {
  event.stopPropagation();
  document.querySelectorAll('.status-options').forEach(el => {
    if (el.id !== `dropdown-opts-${probId}`) el.classList.remove('show');
  });
  
  const el = document.getElementById(`dropdown-opts-${probId}`);
  if (el) el.classList.toggle('show');
}

document.body.addEventListener('click', () => {
  document.querySelectorAll('.status-options').forEach(el => {
    el.classList.remove('show');
  });
});

function updateProblemStatus(probId, newStatus) {
  const prob = state.problems.find(p => p.id === probId);
  if (prob) {
    const previouslyUnlockedBadges = getUnlockedBadgeIds();
    prob.status = newStatus;
    
    const todayStr = formatDateKey(new Date());
    state.activityLog[todayStr] = state.problems.filter(p => p.status === 'done').length;
    
    calculatePoints();
    renderProblemsList();
    showNotification(`Problem "${prob.name}" marked as ${newStatus.toUpperCase()}`);
    showBadgeUnlockNotifications(previouslyUnlockedBadges);
  }
}

function onProblemClick(probId) {
  const prob = state.problems.find(p => p.id === probId);
  if (prob) {
    loadProblemIntoVisualizer(prob);
  }
}

// ==========================================================================
// DYNAMIC VISUALIZER ROUTER & CODE INJECTOR
// ==========================================================================

function loadProblemIntoVisualizer(prob) {
  const selector = document.getElementById('algo-select');
  
  // 1. Fine-grained visualizer routing for the canvas engines
  if (prob.id === 220 || prob.id === 109 || prob.id === 218) {
    selector.value = 'rbtree';
  } else if (prob.id === 1349 || prob.id === 2123 || prob.id === 1947) {
    selector.value = 'netflow';
  } else if (prob.id === 773 || prob.id === 1263 || prob.id === 752 || prob.id === 127) {
    selector.value = 'astar';
  } else
  if (prob.id === 37 || prob.id === 36 || prob.id === 52 || prob.id === 980) {
    selector.value = 'sudoku';
  } else if (prob.id === 51 || prob.subcategory === 'N-Queens Backtracking' || prob.subcategory === 'Backtracking Search') {
    selector.value = 'backtracking';
  } else if (prob.id === 146 || prob.subcategory === 'LRU Cache' || prob.subcategory === 'Cache Design') {
    selector.value = 'lrucache';
  } else if (prob.id === 295 || prob.subcategory === 'Two Heaps / Median') {
    selector.value = 'medianfinder';
  } else if (prob.id === 1382 || prob.id === 669 || prob.id === 701 || prob.subcategory === 'BST Rotation / Balance') {
    selector.value = 'avl';
  } else if (prob.subcategory === 'Huffman / Greedy Merge' || prob.id === 1167 || prob.id === 871) {
    selector.value = 'huffman';
  } else if (prob.id === 307 || prob.id === 315 || prob.id === 308 || prob.subcategory === 'Segment Tree') {
    selector.value = 'segmenttree';
  } else if (prob.id === 493 || prob.subcategory === 'Fenwick Tree / Segment Tree') {
    selector.value = 'fenwick';
  } else if (prob.id === 28 || prob.id === 214 || prob.id === 459 || prob.subcategory === 'KMP String Matching' || prob.subcategory === 'Rolling Hash / KMP' || prob.subcategory === 'Rolling Hash' || prob.topic === 'Strings & Pattern Matching') {
    selector.value = 'kmp';
  } else if (prob.id === 912 || prob.subcategory === 'Quick Sort / Merge Sort' || prob.subcategory === 'Partitioning' || prob.subcategory === 'Custom Sort' || prob.subcategory === 'Merge Sort Pattern' || prob.subcategory === 'Two Pointers Sorting' || prob.topic === 'Sorting & Partitioning') {
    selector.value = 'quicksort';
  } else if (prob.id === 239) {
    selector.value = 'slidingmax';
  } else if (prob.id === 322) {
    selector.value = 'coinchange';
  } else if (prob.id === 1584) {
    selector.value = 'prims';
  } else if (prob.id === 1135 || prob.id === 1168 || prob.id === 1489 || prob.subcategory === 'MST / Graph Greedy') {
    selector.value = 'prims';
  } else if (prob.id === 1135 || prob.id === 1168 || prob.id === 1489 || prob.subcategory === 'MST / Graph Greedy') {
    selector.value = 'kruskal';
  } else if (prob.id === 1091 || prob.id === 994 || prob.id === 733) {
    selector.value = 'bfsgrid';
  } else if (prob.id === 743 || prob.id === 1514 || prob.id === 1631) {
    selector.value = 'dijkstra';
  } else if (prob.id === 787) {
    selector.value = 'bellmanford';
  } else if (prob.id === 1334) {
    selector.value = 'floydwarshall';
  } else if (prob.id === 136 || prob.id === 268 || prob.id === 389) {
    selector.value = 'singlenumber';
  } else if (prob.id === 78 || prob.id === 90 || prob.id === 1863) {
    selector.value = 'bitmasksubsets';
  } else if (prob.id === 371 || prob.id === 190 || prob.id === 338) {
    selector.value = 'binaryaddition';
  } else if (prob.id === 912 || prob.id === 215 || prob.id === 973 || prob.id === 179) {
    selector.value = 'quicksortfull';
  } else if (prob.id === 148 || prob.id === 88 || prob.id === 23) {
    selector.value = 'mergesort';
  } else if (prob.id === 147 || prob.id === 274) {
    selector.value = 'insertionsort';
  } else if (prob.id === 167) {
    selector.value = 'twoSumII';
  } else if (prob.id === 142) {
    selector.value = 'cycleII';
  } else if (prob.id === 84 || prob.id === 85) {
    selector.value = 'largestRectangle';
  } else if (prob.subcategory === 'Trie') {
    selector.value = 'trie';
  } else if (prob.subcategory === 'String DP / Sequence DP') {
    selector.value = 'stringdp';
  } else if (prob.subcategory === 'Bitmask DP') {
    selector.value = 'bitmaskdp';
  } else if (prob.subcategory === 'Strongly Connected Components') {
    selector.value = 'kosaraju';
  } else if (prob.subcategory === 'Knapsack / Subset DP') {
    selector.value = 'knapsack';
  } else if (prob.subcategory === '1D DP Basics') {
    selector.value = 'dp1d';
  } else if (prob.subcategory === 'Prefix Sum / Running Sum') {
    selector.value = 'prefixsum';
  } else if (prob.subcategory === 'Difference Array / Range Updates') {
    selector.value = 'prefixsum';
  } else if (prob.subcategory === 'Sliding Window') {
    selector.value = 'window';
  } else if (prob.subcategory === 'Two Pointers') {
    selector.value = 'pointer';
  } else if (prob.subcategory === 'Hashing / Frequency Maps') {
    selector.value = 'hash';
  } else if (prob.subcategory === 'Intervals' || prob.subcategory === 'Interval Design') {
    selector.value = 'intervals';
  } else if (prob.topic === 'Design & Advanced DS') {
    selector.value = 'hash';
  } else if (prob.topic === 'Linked Lists') {
    selector.value = 'cycle';
  } else if (prob.subcategory === 'Monotonic Stack') {
    selector.value = 'stack';
  } else if (prob.subcategory === 'Monotonic Queue / Deque') {
    selector.value = 'slidingmax';
  } else if (prob.subcategory === 'Heap / Top K') {
    selector.value = 'heap';
  } else if (prob.subcategory === 'BST Problems') {
    selector.value = 'avl';
  } else if (prob.topic === 'Trees & BSTs') {
    selector.value = 'tree';
  } else if (prob.subcategory === 'Graph BFS / DFS') {
    selector.value = 'graph';
  } else if (prob.subcategory === 'Topological Sort / DAG') {
    selector.value = 'toposort';
  } else if (prob.subcategory === 'Union Find / DSU') {
    selector.value = 'unionfind';
  } else if (prob.subcategory === 'Shortest Path') {
    selector.value = 'dijkstra';
  } else if (prob.subcategory === 'Grid DP') {
    selector.value = 'matrix';
  } else if (prob.subcategory === 'Greedy Scheduling / Sorting') {
    selector.value = 'greedy';
  } else if (prob.subcategory === 'Bit Manipulation') {
    selector.value = 'bits';
  } else if (prob.topic === 'Binary Search') {
    selector.value = 'binary';
  } else {
    selector.value = 'bubble';
  }
  
  visualizerState.algo = selector.value;
  visualizerState.currentProbId = prob.id;
  
  // 2. Update the problem info banner
  updateProblemBanner(prob);
  
  // 3. Generate customized Code Snippet for this problem
  generateSnippetForProblem(prob);
  
  // 3b. Update the logic section
  updateProblemLogicPanel(prob);
  
  // 4. Navigate to visualizer tab
  switchTab('visualizer', true);
  
  // 5. Reset the visualizer steps and render
  resetVisualizer();
  
  appendLog(`[LOAD] Playground: #${prob.id} — "${prob.name}" | Pattern: ${prob.subcategory}`, 'info');
}

// Update the problem info banner with the current problem's metadata
function updateProblemBanner(prob) {
  const banner = document.getElementById('problem-info-banner');
  if (!banner) return;
  banner.style.display = 'flex';
  document.getElementById('pib-id').textContent = `#${prob.id}`;
  document.getElementById('pib-name').textContent = prob.name;
  document.getElementById('pib-pattern').textContent = `${prob.topic} · ${prob.subcategory}`;
  const diffBadge = document.getElementById('pib-diff');
  diffBadge.textContent = prob.difficulty;
  diffBadge.className = `difficulty-badge ${prob.difficulty}`;
  const lcLink = document.getElementById('pib-lc-link');
  lcLink.href = `https://leetcode.com/problems/${prob.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}/`;
  lucide.createIcons();
}

// Generate syntax-highlighted code templates dynamically for the roadmap problems
function generateSnippetForProblem(prob) {
  const editorCode = document.getElementById('code-snippet-box');
  const langLabel = document.getElementById('editor-language');
  langLabel.textContent = 'javascript';
  
  // Priority 1: Specific problem ID overrides
  if (codeTemplates[prob.id]) {
    editorCode.innerHTML = codeTemplates[prob.id];
    return;
  }
  // Priority 2: Algorithm-level template
  if (codeTemplates[visualizerState.algo]) {
    editorCode.innerHTML = codeTemplates[visualizerState.algo];
    return;
  }
  
  // Priority 3: Pattern-level dynamic generation (rich, context-specific skeleton)
  const fn = prob.name
    .replace(/(?:^|\s|-)([a-zA-Z])/g, (_, c) => c.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^(.)/, c => c.toLowerCase());
  
  const patternComments = {
    'Sliding Window': '// Use a HashMap/Set + two pointers to maintain window state',
    'Two Pointers': '// Converge left & right pointers based on comparison condition',
    'Hashing / Frequency Maps': '// Build frequency/index map for O(1) lookups',
    'Prefix Sum / Running Sum': '// prefixSum[i] = prefixSum[i-1] + nums[i]',
    'Difference Array / Range Updates': '// diff[l] += val; diff[r+1] -= val; then prefix sum',
    'Binary Search on Sorted Data': '// while(lo <= hi) { mid = (lo+hi)>>1; ... }',
    'Binary Search on Answer': '// Binary search the answer space, validate via helper',
    'Fast/Slow Pointers (Linked List)': '// slow = slow.next; fast = fast.next.next;',
    'Linked List Manipulation': '// Track prev, curr, next pointers carefully',
    'Monotonic Stack': '// Maintain monotonic stack; pop when current breaks order',
    'Monotonic Queue / Deque': '// Deque stores indices; remove out-of-window from front',
    'Heap / Top K': '// Use min-heap of size k for Top K elements',
    'Intervals': '// Sort by start; merge if current.start <= last.end',
    'Greedy Scheduling / Sorting': '// Sort greedily, pick locally optimal at each step',
    'Tree DFS': '// Recursively: return combine(dfs(root.left), dfs(root.right))',
    'Tree BFS / Level Order': '// BFS queue: process level by level',
    'BST Problems': '// BST property: left < node < right, enables O(h) search',
    'Graph BFS / DFS': '// visited set + queue/stack; explore all reachable nodes',
    'Topological Sort / DAG': '// Kahn\'s BFS or DFS post-order for topological ordering',
    'Union Find / DSU': '// find(x): path compression; union(a,b): rank-based merge',
    'Shortest Path': '// Dijkstra: min-heap priority queue on (cost, node)',
    'MST / Graph Greedy': '// Kruskal: sort edges, union-find; or Prim: min-heap',
    'Trie': '// Each node has children[26]; insert char-by-char',
    'Bit Manipulation': '// n & (n-1) clears lowest set bit; n & 1 checks parity',
    '1D DP Basics': '// dp[i] = f(dp[i-1], dp[i-2], ...); build bottom-up',
    'Knapsack / Subset DP': '// dp[w] = max(dp[w], dp[w-wt] + val); iterate items',
    'Grid DP': '// dp[i][j] = dp[i-1][j] + dp[i][j-1] (paths) or min/max',
    'String DP / Sequence DP': '// dp[i][j] = LCS(s1[0..i], s2[0..j]); fill 2D table'
  };
  
  const hint = patternComments[prob.subcategory] || `// Pattern: ${prob.subcategory}`;
  
  const generatedCode = `<span class="code-comment">// LC ${prob.id}: ${prob.name}</span>
<span class="code-comment">// Topic: ${prob.topic} | Pattern: ${prob.subcategory}</span>
<span class="code-comment">${hint}</span>

<span class="code-keyword">function</span> <span class="code-fn">${fn}</span>(nums) {
  <span class="code-keyword">let</span> result = <span class="code-num">0</span>;
  <span class="code-keyword">let</span> left = <span class="code-num">0</span>, right = nums.length - <span class="code-num">1</span>;

  <span class="code-keyword">while</span> (left &lt; right) {
    <span class="code-comment">// Core logic — pattern-specific</span>
    left++;
  }

  <span class="code-keyword">return</span> result;
}`;
  editorCode.innerHTML = generatedCode;
}

const problemLogicDatabase = {
  1: {
    intuition: "Use a Hash Map to store numbers and their indices. For each number, check if its complement (target - num) exists in the map. This avoids the O(N2) nested loop search.",
    formula: "Complement equation:<br><code>complement = target - nums[i]</code><br>Verification:<br><code>if (map.has(complement)) return [map.get(complement), i];</code>",
    time: "O(N) — single pass scan of N elements.",
    space: "O(N) — to store at most N elements in the hash map.",
    dryrun: {
      testcase: "nums = [2, 7, 11, 15], target = 9",
      headers: ["Step", "i", "nums[i]", "Complement", "Map State", "Action"],
      rows: [
        ["1", "0", "2", "7", "{}", "Store index -> Map = {2: 0}"],
        ["2", "1", "7", "2", "{2: 0}", "Complement 2 found at index 0! Return [0, 1]"]
      ]
    }
  },
  3: {
    intuition: "Maintain a sliding window using two pointers (left and right) representing the substring. Use a Hash Set to track unique characters. If a duplicate is found, shrink the window from the left until all characters inside the window are unique.",
    formula: "Window span: <code>[left, right]</code><br>Length calculation:<br><code>maxLen = max(maxLen, right - left + 1)</code><br>Window invariant: <code>set.size == right - left + 1</code>",
    time: "O(N) — each character is visited at most twice (once by right pointer, once by left).",
    space: "O(min(M, N)) — where M is the character set size (e.g. 26 for English alphabet or 128 for ASCII).",
    dryrun: {
      testcase: "s = 'abcabcbb'",
      headers: ["Step", "Left", "Right", "Char", "Set State", "Length", "Action"],
      rows: [
        ["1", "0", "0", "a", "{a}", "1", "Add 'a', Max = 1"],
        ["2", "0", "1", "b", "{a, b}", "2", "Add 'b', Max = 2"],
        ["3", "0", "2", "c", "{a, b, c}", "3", "Add 'c', Max = 3"],
        ["4", "1", "3", "a", "{b, c, a}", "3", "Duplicate 'a'! Remove s[0]('a'), Left = 1, Add s[3]('a')"],
        ["5", "2", "4", "b", "{c, a, b}", "3", "Duplicate 'b'! Remove s[1]('b'), Left = 2, Add s[4]('b')"]
      ]
    }
  },
  11: {
    intuition: "Place two pointers at the boundaries of the height array. The width of the container is the distance between the pointers. The height is bounded by the shorter line. Calculate the area, then move the pointer pointing to the shorter line inward to search for a taller boundary.",
    formula: "Area formula:<br><code>Area = (right - left) * min(height[left], height[right])</code><br>Pointer step:<br><code>if (height[left] < height[right]) left++; else right--;</code>",
    time: "O(N) — single pass where left and right pointers converge.",
    space: "O(1) — constant extra space.",
    dryrun: {
      testcase: "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
      headers: ["Step", "L", "R", "h[L]", "h[R]", "Width", "Area", "Max Area", "Next Action"],
      rows: [
        ["1", "0", "8", "1", "7", "8", "8", "8", "h[L] < h[R] -> L++ (L=1)"],
        ["2", "1", "8", "8", "7", "7", "49", "49", "h[R] < h[L] -> R-- (R=7)"],
        ["3", "1", "7", "8", "3", "6", "18", "49", "h[R] < h[L] -> R-- (R=6)"]
      ]
    }
  },
  15: {
    intuition: "Sort the array first to avoid duplicates. Iterate through each element as a pivot, then use a two-pointer approach (low and high) on the remaining elements to search for triplets that sum to zero.",
    formula: "Triplet sum:<br><code>nums[i] + nums[low] + nums[high] == 0</code><br>Duplicate avoidance conditions:<br><code>if (i > 0 && nums[i] == nums[i-1]) continue;</code>",
    time: "O(N2) — sorting takes O(N log N), and the nested two-pointer search takes O(N2).",
    space: "O(log N) to O(N) — auxiliary sorting recursion space.",
    dryrun: {
      testcase: "nums = [-1, 0, 1, 2, -1, -4]",
      headers: ["Pivot i", "Low", "High", "nums[i]", "nums[low]", "nums[high]", "Sum", "Action Result"],
      rows: [
        ["Sort Array", "-", "-", "-", "-", "-", "-", "Sorted: [-4, -1, -1, 0, 1, 2]"],
        ["-4 (idx 0)", "1", "5", "-4", "-1", "2", "-3", "Sum < 0 -> Low++"],
        ["-1 (idx 1)", "2", "5", "-1", "-1", "2", "0", "Match! Save [-1, -1, 2], Low++, High--"],
        ["-1 (idx 1)", "3", "4", "-1", "0", "1", "0", "Match! Save [-1, 0, 1], Low++, High--"],
        ["-1 (idx 2)", "-", "-", "-", "-", "-", "-", "Duplicate pivot, skip index 2"]
      ]
    }
  },
  33: {
    intuition: "In a rotated sorted array, at least one half of the array (left or right of the midpoint) is always sorted. Identify which half is sorted, and check if the target lies within the boundaries of that sorted half to discard the other half.",
    formula: "Sorted check (left half):<br><code>if (nums[low] <= nums[mid]) // left half is sorted</code><br>Boundary check:<br><code>if (nums[low] <= target && target < nums[mid]) high = mid - 1; else low = mid + 1;</code>",
    time: "O(log N) — the search space is halved at each step.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [4,5,6,7,0,1,2], target = 0",
      headers: ["Step", "Low", "Mid", "High", "nums[mid]", "Sorted Half", "Action Result"],
      rows: [
        ["1", "0", "3", "6", "7", "Left half [4..7]", "Target not in Left half -> Low = 4"],
        ["2", "4", "5", "6", "1", "Right half [1..2]", "Target not in Right half -> High = 4"],
        ["3", "4", "4", "4", "0", "Found", "nums[mid] == target -> Return index 4"]
      ]
    }
  },
  35: {
    intuition: "Use standard binary search. If the target is found, return its index. If not found, the search pointers will cross, and the left pointer (low) will point to the correct insertion index.",
    formula: "Midpoint: <code>mid = low + Math.floor((high - low) / 2)</code><br>Final insertion index:<br><code>if (target not found) return low;</code>",
    time: "O(log N) — halves search space at each iteration.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [1, 3, 5, 6], target = 5",
      headers: ["Step", "Low", "Mid", "High", "nums[mid]", "Action Result"],
      rows: [
        ["1", "0", "1", "3", "3", "target > 3 -> Search right: Low = 2"],
        ["2", "2", "2", "3", "5", "target == 5 -> Match! Return 2"]
      ]
    }
  },
  42: {
    intuition: "Use two pointers starting at both ends of the array. Maintain the maximum heights seen so far from both left and right. The water trapped at any index is bounded by the minimum of these two maximums minus the height at that index.",
    formula: "Trapped water calculation:<br><code>water[i] = min(leftMax, rightMax) - height[i]</code><br>Two pointer updates:<br><code>if (leftMax < rightMax) { ans += leftMax - height[left]; left++; }</code>",
    time: "O(N) — single linear pass using two pointers.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "heights = [0, 1, 0, 2, 1, 0, 1, 3]",
      headers: ["Step", "L", "R", "LMax", "RMax", "h[L]/h[R]", "Water Added", "Pointer Shift"],
      rows: [
        ["1", "0", "7", "0", "3", "0 / 3", "0 (LMax-h[L]=0)", "L++ (L=1)"],
        ["2", "1", "7", "1", "3", "1 / 3", "0 (LMax-h[L]=0)", "L++ (L=2)"],
        ["3", "2", "7", "1", "3", "0 / 3", "1 (LMax-h[L]=1)", "L++ (L=3)"]
      ]
    }
  },
  56: {
    intuition: "Sort intervals by start times. Iterate through sorted intervals; if the current interval starts after the last merged interval ends, add it as a new interval. Otherwise, they overlap, so merge them by updating the end time of the last merged interval.",
    formula: "Overlap condition:<br><code>if (merged.length == 0 || merged[last][1] < current[0]) merge.push(current);</code><br>Merge adjustment:<br><code>else merged[last][1] = max(merged[last][1], current[1]);</code>",
    time: "O(N log N) — sorting takes O(N log N), merging takes linear O(N) time.",
    space: "O(N) — to store the merged intervals output.",
    dryrun: {
      testcase: "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
      headers: ["Step", "Current Interval", "Last Merged", "Overlap?", "Resulting List"],
      rows: [
        ["1", "[1, 3]", "None", "No", "[[1, 3]]"],
        ["2", "[2, 6]", "[1, 3]", "Yes (2 <= 3)", "[[1, 6]]"],
        ["3", "[8, 10]", "[1, 6]", "No (8 > 6)", "[[1, 6], [8, 10]]"],
        ["4", "[15, 18]", "[8, 10]", "No (15 > 10)", "[[1, 6], [8, 10], [15, 18]]"]
      ]
    }
  },
  70: {
    intuition: "To reach step n, you must come from either step n-1 (taking 1 step) or step n-2 (taking 2 steps). Thus, the total ways to reach step n is the sum of ways to reach step n-1 and step n-2.",
    formula: "DP Recurrence Relation:<br><code>dp[i] = dp[i-1] + dp[i-2]</code><br>Base cases:<br><code>dp[0] = 1, dp[1] = 1, dp[2] = 2</code>",
    time: "O(N) — linear loop from 3 to n.",
    space: "O(1) — space optimized by keeping only the last two computed step counts.",
    dryrun: {
      testcase: "n = 4",
      headers: ["Step i", "dp[i-2]", "dp[i-1]", "dp[i] Computed", "Action Result"],
      rows: [
        ["3", "1 (n=1)", "2 (n=2)", "1 + 2 = 3", "dp[3] = 3"],
        ["4", "2 (n=2)", "3 (n=3)", "2 + 3 = 5", "dp[4] = 5"]
      ]
    }
  },
  76: {
    intuition: "Use sliding window. Expand the right pointer to include characters until the window contains all characters of the target string. Then, contract from the left pointer to minimize the window size while keeping it valid.",
    formula: "Validity condition:<br><code>windowCount[char] >= targetCount[char]</code> for all target chars.<br>Window minimization:<br><code>while (formed == required) { updateMinWindow(); windowCount[left]--; left++; }</code>",
    time: "O(S + T) — where S and T are lengths of strings, pointers visit each char at most twice.",
    space: "O(S + T) — count maps for target characters and active window.",
    dryrun: {
      testcase: "S = 'ADOBECODEBANC', T = 'ABC'",
      headers: ["L", "R", "s[R]", "Window State", "Valid?", "Action Result"],
      rows: [
        ["0", "5", "C", "{A:1, B:1, C:1}", "Yes", "Valid window 'ADOBEC'"],
        ["0", "10", "A", "{A:2, B:2, C:1}", "Yes", "Window valid. Shift Left to 5 ('CODEBA')"],
        ["5", "10", "A", "{C:1, B:1, A:1}", "Yes", "New valid window 'CODEBA' (length 6)"]
      ]
    }
  },
  84: {
    intuition: "Use a monotonic increasing stack to store indices of bars. When we see a bar shorter than the bar at stack top, we pop the stack and calculate the area of the rectangle with the popped bar as the shortest height.",
    formula: "Width calculation:<br><code>width = stack.isEmpty ? i : (i - 1 - stack.top)</code><br>Area calculation:<br><code>area = heights[poppedIndex] * width</code>",
    time: "O(N) — each bar is pushed and popped from stack at most once.",
    space: "O(N) — to store bar indices in stack.",
    dryrun: {
      testcase: "heights = [2, 1, 5, 6, 2, 3]",
      headers: ["Index i", "heights[i]", "Stack (Indices)", "Popped Idx", "Width", "Area", "Action Result"],
      rows: [
        ["0", "2", "[0]", "-", "-", "-", "Push 0"],
        ["1", "1", "[1]", "0", "1", "2 * 1 = 2", "1 < 2 -> Pop 0, Push 1"],
        ["2", "5", "[1, 2]", "-", "-", "-", "Push 2"],
        ["3", "6", "[1, 2, 3]", "-", "-", "-", "Push 3"],
        ["4", "2", "[1, 4]", "3", "1", "6 * 1 = 6", "Pop 3"],
        ["4", "2", "[1, 4]", "2", "2", "5 * 2 = 10", "Pop 2, MaxArea = 10, Push 4"]
      ]
    }
  },
  98: {
    intuition: "For a binary tree to be a valid BST, every node's value must lie within a strict boundary. The left child must be less than the node, and the right child must be greater than the node. Pass these boundaries recursively down the tree.",
    formula: "Validation conditions:<br><code>if (node.val <= low || node.val >= high) return false;</code><br>Recurrence:<br><code>return validate(node.left, low, node.val) && validate(node.right, node.val, high);</code>",
    time: "O(N) — visits each node of the tree once.",
    space: "O(H) — recursion stack height where H is the height of the tree.",
    dryrun: {
      testcase: "[5, 1, 4, null, null, 3, 6]",
      headers: ["Node", "Min Boundary", "Max Boundary", "Valid?", "Action Result"],
      rows: [
        ["5 (root)", "-Inf", "Inf", "Yes", "Recurse Left with [-Inf, 5], Right with [5, Inf]"],
        ["1 (left)", "-Inf", "5", "Yes", "Leaf node. Valid"],
        ["4 (right)", "5", "Inf", "No (4 < 5)", "Violation! Return false"]
      ]
    }
  },
  102: {
    intuition: "Use a FIFO Queue to traverse tree levels sequentially. For each level, record the queue size, process that many nodes by appending their children to the queue, and collect their values in a list.",
    formula: "Level extraction loop:<br><code>levelSize = queue.length</code><br><code>for (i = 0; i < levelSize; i++) { node = queue.pop(); queue.push(node.left); queue.push(node.right); }</code>",
    time: "O(N) — visits each node in the tree exactly once.",
    space: "O(W) — where W is the maximum width of the tree (size of queue at bottom level).",
    dryrun: {
      testcase: "[3, 9, 20, null, null, 15, 7]",
      headers: ["Level", "Queue at Start", "Level Size", "Level Values", "Queue at End"],
      rows: [
        ["0", "[3]", "1", "[3]", "[9, 20]"],
        ["1", "[9, 20]", "2", "[9, 20]", "[15, 7]"],
        ["2", "[15, 7]", "2", "[15, 7]", "[]"]
      ]
    }
  },
  104: {
    intuition: "The maximum depth of a binary tree is 1 plus the maximum of the depths of its left and right subtrees. Compute these sub-depths recursively.",
    formula: "Depth recurrence relation:<br><code>maxDepth(root) = 1 + max(maxDepth(root.left), maxDepth(root.right))</code><br>Base case:<br><code>if (root == null) return 0;</code>",
    time: "O(N) — traverses all tree nodes once.",
    space: "O(H) — recursion stack size (bounded by tree height H).",
    dryrun: {
      testcase: "[3, 9, 20, null, null, 15, 7]",
      headers: ["Node", "Left Subtree Depth", "Right Subtree Depth", "Computed Depth"],
      rows: [
        ["9", "0", "0", "1 + max(0, 0) = 1"],
        ["15", "0", "0", "1 + max(0, 0) = 1"],
        ["7", "0", "0", "1 + max(0, 0) = 1"],
        ["20", "1", "1", "1 + max(1, 1) = 2"],
        ["3 (root)", "1", "2", "1 + max(1, 2) = 3"]
      ]
    }
  },
  124: {
    intuition: "At each node, compute the maximum path sum starting from that node and going down its left and right subtrees. The maximum path sum passing through the current node as the peak is the node's value plus the positive contributions of both subtrees.",
    formula: "Max path passing through node:<br><code>pathThroughNode = node.val + max(0, leftGain) + max(0, rightGain)</code><br>Recursive return value:<br><code>return node.val + max(0, max(leftGain, rightGain))</code>",
    time: "O(N) — visits every tree node once.",
    space: "O(H) — recursion stack bounded by tree height H.",
    dryrun: {
      testcase: "[-10, 9, 20, null, null, 15, 7]",
      headers: ["Node", "Left Gain", "Right Gain", "Computed Path", "Return Value", "Global Max"],
      rows: [
        ["15 (leaf)", "0", "0", "15", "15", "15"],
        ["7 (leaf)", "0", "0", "7", "7", "15"],
        ["20", "15", "7", "20 + 15 + 7 = 42", "20 + max(15,7) = 35", "42"],
        ["9 (leaf)", "0", "0", "9", "9", "42"],
        ["-10 (root)", "9", "35", "-10 + 9 + 35 = 34", "-10 + 35 = 25", "42"]
      ]
    }
  },
  128: {
    intuition: "Store all numbers in a Hash Set for O(1) lookups. Iterate through the numbers. If a number 'x' is the start of a sequence (i.e., 'x - 1' is not in the set), search for successive values 'x + 1', 'x + 2', etc., and record the sequence length.",
    formula: "Sequence start condition:<br><code>if (!set.has(num - 1)) // start counting sequence</code><br>Length check:<br><code>while (set.has(curr + 1)) { curr++; length++; }</code>",
    time: "O(N) — each number is inserted into set and visited at most twice.",
    space: "O(N) — to store N elements in the set.",
    dryrun: {
      testcase: "nums = [100, 4, 200, 1, 3, 2]",
      headers: ["num", "Is Sequence Start?", "Elements Checked", "Sequence Length", "Max Length"],
      rows: [
        ["100", "Yes (99 not in set)", "100", "1", "1"],
        ["4", "No (3 is in set)", "-", "-", "1"],
        ["200", "Yes (199 not in set)", "200", "1", "1"],
        ["1", "Yes (0 not in set)", "1 -> 2 -> 3 -> 4", "4", "4"]
      ]
    }
  },
  136: {
    intuition: "Use the bitwise XOR operation. Since 'x ^ x = 0' and 'x ^ 0 = x', XORing all numbers in the array will cause duplicate numbers to cancel each other out, leaving only the single unique number.",
    formula: "XOR Accumulator:<br><code>result = result ^ nums[i]</code> for all i.<br>Properties:<br><code>A ^ A = 0</code> and <code>A ^ 0 = A</code>",
    time: "O(N) — single linear loop through array.",
    space: "O(1) — constant extra space.",
    dryrun: {
      testcase: "nums = [4, 1, 2, 1, 2]",
      headers: ["Step", "num", "Accumulator State", "Binary value"],
      rows: [
        ["Init", "-", "0", "0000"],
        ["1", "4", "0 ^ 4 = 4", "0100"],
        ["2", "1", "4 ^ 1 = 5", "0101"],
        ["3", "2", "5 ^ 2 = 7", "0111"],
        ["4", "1", "7 ^ 1 = 6", "0110"],
        ["5", "2", "6 ^ 2 = 4", "0100"]
      ]
    }
  },
  141: {
    intuition: "Use Floyd's Cycle-Finding Algorithm (Tortoise and Hare). The slow pointer advances by 1 node, and the fast pointer advances by 2 nodes. If a cycle exists, the fast pointer will eventually loop around and catch up to the slow pointer.",
    formula: "Pointer step:<br><code>slow = slow.next; fast = fast.next.next;</code><br>Loop meeting condition:<br><code>if (slow == fast) return true; // cycle detected</code>",
    time: "O(N) — slow pointer visits at most N nodes.",
    space: "O(1) — constant extra space.",
    dryrun: {
      testcase: "3 -> 2 -> 0 -> -4 -> (loops to 2)",
      headers: ["Step", "Slow Pointer Node", "Fast Pointer Node", "Meeting Match?", "Next Action"],
      rows: [
        ["0", "3 (head)", "3 (head)", "Yes (initial skip)", "Advance pointers"],
        ["1", "2", "0", "No", "Advance pointers"],
        ["2", "0", "2", "No", "Advance pointers"],
        ["3", "-4", "-4", "Yes (Meet!)", "Return true (Cycle detected)"]
      ]
    }
  },
  142: {
    intuition: "After slow and fast pointers meet in a cycle, reset one pointer (e.g. 'entry') to the head of the list. Move both pointers at a speed of 1 node per step. The node where they intersect is the entry point of the cycle.",
    formula: "Distance mathematical proof:<br>Distance to cycle start = <code>F</code>. Cycle loop length = <code>C</code>.<br>Meeting point is at <code>F + a</code>. Thus, <code>2(F + a) = F + a + kC</code><br><code>=> F = kC - a = (k-1)C + (C - a)</code> (intersection at <code>F</code> steps).",
    time: "O(N) — linear scan.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "3 -> 2 -> 0 -> -4 -> (loops to 2)",
      headers: ["Step", "Pointer 1 (Reset to Head)", "Pointer 2 (From Meeting Point)", "Nodes Match?", "Action Result"],
      rows: [
        ["0", "3 (head)", "-4 (meeting point)", "No", "Advance both 1 step"],
        ["1", "2", "2", "Yes (Meet!)", "Intersection at Node(2). Return Node(2)"]
      ]
    }
  },
  153: {
    intuition: "In a rotated sorted array, compare the midpoint value with the rightmost boundary value. If 'nums[mid] > nums[high]', the minimum value must lie to the right of 'mid'. Otherwise, the minimum lies at or to the left of 'mid'.",
    formula: "Binary search step:<br><code>if (nums[mid] > nums[high]) low = mid + 1; else high = mid;</code>",
    time: "O(log N) — halves search space at each iteration.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [3, 4, 5, 1, 2]",
      headers: ["Step", "Low", "Mid", "High", "nums[mid]", "nums[high]", "Action Result"],
      rows: [
        ["1", "0", "2", "4", "5", "2", "5 > 2 -> Low = mid + 1 = 3"],
        ["2", "3", "3", "4", "1", "2", "1 <= 2 -> High = mid = 3"],
        ["3", "3", "-", "3", "-", "-", "Low == High -> Return nums[3] = 1"]
      ]
    }
  },
  198: {
    intuition: "At each house, you have two choices: rob the current house (which means you cannot rob the previous house, so you add its value to max money from two houses back), or skip the current house (taking the max money from the previous house).",
    formula: "DP Recurrence Relation:<br><code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code><br>Base cases:<br><code>dp[0] = nums[0], dp[1] = max(nums[0], nums[1])</code>",
    time: "O(N) — single pass loop.",
    space: "O(1) — only keep the last two maximums to optimize space.",
    dryrun: {
      testcase: "nums = [2, 7, 9, 3, 1]",
      headers: ["House i", "nums[i]", "Rob(i-2) + nums[i]", "Rob(i-1) (Skip)", "Max Robbed", "Variables Shift"],
      rows: [
        ["0", "2", "-", "-", "2", "prev2=0, prev1=2"],
        ["1", "7", "7", "2", "7", "prev2=2, prev1=7"],
        ["2", "9", "2 + 9 = 11", "7", "11", "prev2=7, prev1=11"],
        ["3", "3", "7 + 3 = 10", "11", "11", "prev2=11, prev1=11"],
        ["4", "1", "11 + 1 = 12", "11", "12", "prev2=11, prev1=12"]
      ]
    }
  },
  200: {
    intuition: "Iterate through the grid matrix. When you encounter a land cell ('1'), trigger a Depth-First Search (DFS) or BFS to traverse all adjacent land cells and mark them as visited ('0') to avoid recounting. Increment the island count.",
    formula: "DFS transition:<br><code>if (r, c out of bounds || grid[r][c] == '0') return;</code><br><code>grid[r][c] = '0'; // mark visited</code><br><code>dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);</code>",
    time: "O(M * N) — where M is rows count and N is columns count.",
    space: "O(M * N) — recursion stack space in worst case (all land grid).",
    dryrun: {
      testcase: "grid = [['1', '1'], ['0', '0']]",
      headers: ["Cell Checked", "Grid Val", "Islands Count", "DFS Trigger?", "Neighbors Marked"],
      rows: [
        ["(0,0)", "1", "1", "Yes", "Mark (0,0) and (0,1) as '0'"],
        ["(0,1)", "0 (visited)", "1", "No", "-"],
        ["(1,0)", "0", "1", "No", "-"],
        ["(1,1)", "0", "1", "No", "-"]
      ]
    }
  },
  207: {
    intuition: "Model the courses as a Directed Graph. Run topological sorting (Kahn's BFS or DFS cycle detection). If the graph contains a cycle, the courses cannot be completed.",
    formula: "Kahn's in-degree logic:<br><code>if (inDegree[course] == 0) queue.push(course);</code><br>Reduce dependencies: <code>for (next in adj[curr]) { inDegree[next]--; if (inDegree[next] == 0) queue.push(next); }</code>",
    time: "O(V + E) — where V is courses count and E is dependencies count.",
    space: "O(V + E) — adjacency list and in-degrees tracker.",
    dryrun: {
      testcase: "numCourses = 2, prerequisites = [[1, 0]]",
      headers: ["Step", "Queue", "Popped node", "Neighbor modified", "In-degrees", "Processed Count"],
      rows: [
        ["1", "[0]", "0", "Course 1 (in-degree drops 1 -> 0)", "{0: 0, 1: 0}", "1"],
        ["2", "[1]", "1", "None", "{0: 0, 1: 0}", "2"],
        ["3", "[]", "-", "None", "-", "Processed count == numCourses (2) -> True"]
      ]
    }
  },
  208: {
    intuition: "A Trie (Prefix Tree) is a tree structure where each node represents a character. It has child nodes (pointers for characters a-z) and a boolean flag indicating if it marks the end of a word.",
    formula: "Node structure:<br><code>class TrieNode { children = {}; isEnd = false; }</code><br>Insertion step:<br><code>if (!node.children[ch]) node.children[ch] = new TrieNode(); node = node.children[ch];</code>",
    time: "O(L) — where L is the length of the string being inserted/searched.",
    space: "O(S) — space bounded by total character count of all words inserted.",
    dryrun: {
      testcase: "insert('app')",
      headers: ["Char", "Active Ptr", "Child Exists?", "Action", "isEnd Flag"],
      rows: [
        ["'a'", "Root", "No", "Create Node for 'a', move ptr", "false"],
        ["'p'", "Node 'a'", "No", "Create Node for 'p', move ptr", "false"],
        ["'p'", "Node 'p'", "No", "Create Node for 'p', move ptr", "true (End of Word)"]
      ]
    }
  },
  215: {
    intuition: "Maintain a Min-Heap of size K while iterating through the array. If the heap size exceeds K, pop the smallest element. At the end of the array, the root of the Min-Heap will be the Kth largest element.",
    formula: "Heap size invariant:<br><code>heap.push(num); if (heap.size > k) heap.pop();</code><br>Result: <code>return heap.top();</code>",
    time: "O(N log K) — heap operations of size K for N elements.",
    space: "O(K) — to store K elements in the heap.",
    dryrun: {
      testcase: "nums = [3, 2, 1, 5, 6, 4], k = 2",
      headers: ["Element", "Heap State", "Heap Size", "Action Result"],
      rows: [
        ["3", "[3]", "1", "Push 3"],
        ["2", "[2, 3]", "2", "Push 2"],
        ["1", "[1, 2, 3]", "3", "Push 1 -> Size > 2 -> Pop Min (1)"],
        ["5", "[2, 3, 5]", "3", "Push 5 -> Size > 2 -> Pop Min (2)"],
        ["6", "[3, 5, 6]", "3", "Push 6 -> Size > 2 -> Pop Min (3)"],
        ["4", "[4, 5, 6]", "3", "Push 4 -> Size > 2 -> Pop Min (4), Heap Top = 5"]
      ]
    }
  },
  217: {
    intuition: "Store elements in a Hash Set. If the element already exists in the set, we found a duplicate. Otherwise, add it to the set.",
    formula: "Set lookup:<br><code>if (set.has(num)) return true; set.add(num);</code>",
    time: "O(N) — single pass lookup.",
    space: "O(N) — set stores up to N elements.",
    dryrun: {
      testcase: "nums = [1, 2, 3, 1]",
      headers: ["Step", "num", "Set state before lookup", "Exists in Set?", "Action Result"],
      rows: [
        ["1", "1", "{}", "No", "Add 1 to Set"],
        ["2", "2", "{1}", "No", "Add 2 to Set"],
        ["3", "3", "{1, 2}", "No", "Add 3 to Set"],
        ["4", "1", "{1, 2, 3}", "Yes", "Duplicate found! Return true"]
      ]
    }
  },
  226: {
    intuition: "To invert a binary tree, recursively swap the left and right pointers of every node in the tree.",
    formula: "Recursive swap:<br><code>temp = node.left; node.left = invert(node.right); node.right = invert(temp);</code>",
    time: "O(N) — visits each tree node once.",
    space: "O(H) — recursion call stack bounded by tree height H.",
    dryrun: {
      testcase: "root = [4, 2, 7]",
      headers: ["Node", "Left Child", "Right Child", "Swap Operation Result"],
      rows: [
        ["4", "2", "7", "Left ptr points to 7, Right ptr points to 2"],
        ["7", "null", "null", "Leaf node. Return 7"],
        ["2", "null", "null", "Leaf node. Return 2"]
      ]
    }
  },
  230: {
    intuition: "An in-order traversal of a Binary Search Tree (BST) visits nodes in sorted ascending order. Perform an in-order traversal and stop at the Kth visited node.",
    formula: "In-order sequence:<br><code>traverse(node.left) => visit(node) => traverse(node.right)</code><br>Stop condition: <code>if (++count == k) result = node.val;</code>",
    time: "O(H + K) — traverses down to smallest node, then visits K nodes.",
    space: "O(H) — stack size bounded by tree height H.",
    dryrun: {
      testcase: "tree = [3, 1, 4, null, 2], k = 1",
      headers: ["Step", "Visited Node", "In-order count", "k", "Action Result"],
      rows: [
        ["1", "Node 1", "1", "1", "count == k -> Result = 1. Terminate search."]
      ]
    }
  },
  239: {
    intuition: "Use a Double-Ended Queue (Deque) to store indices of elements in the sliding window. Maintain elements in monotonic decreasing order inside the Deque. The front of the Deque always stores the index of the maximum element in the active window.",
    formula: "Window range check:<br><code>if (deque.front < i - k + 1) deque.popFront();</code><br>Monotonic insertion:<br><code>while (deque.isNotEmpty && nums[i] >= nums[deque.back]) deque.popBack();</code>",
    time: "O(N) — each index is pushed and popped from deque at most once.",
    space: "O(K) — deque size bounded by sliding window size K.",
    dryrun: {
      testcase: "nums = [1, 3, -1, -3], k = 3",
      headers: ["Index i", "nums[i]", "Deque state (Indices)", "Values in Deque", "Active Window Range", "Window Max"],
      rows: [
        ["0", "1", "[0]", "[1]", "-", "-"],
        ["1", "3", "[1]", "[3]", "-", "-"],
        ["2", "-1", "[1, 2]", "[3, -1]", "[0..2]", "nums[1] = 3"],
        ["3", "-3", "[1, 2, 3]", "[3, -1, -3]", "[1..3]", "nums[1] = 3"]
      ]
    }
  },
  242: {
    intuition: "Count character frequencies in both strings. If their frequency profiles are identical, they are anagrams. Alternatively, sort both strings and check if they are equal.",
    formula: "Frequency count:<br><code>count[char] = (count[char] || 0) + 1</code><br>Check equal: <code>countMapS == countMapT</code>",
    time: "O(N) — where N is string length, to build and check count map.",
    space: "O(1) — character set is bounded (e.g. 26 lowercase English letters).",
    dryrun: {
      testcase: "s = 'anagram', t = 'nagaram'",
      headers: ["Step", "s[i]", "t[i]", "Frequency Map state", "Action"],
      rows: [
        ["1", "a", "n", "{a: 1, n: -1}", "s[0] increments 'a', t[0] decrements 'n'"],
        ["2", "n", "a", "{a: 0, n: 0}", "s[1] increments 'n', t[1] decrements 'a'"],
        ["3", "a", "g", "{a: 1, g: -1}", "s[2] increments 'a', t[2] decrements 'g'"],
        ["4", "g", "a", "{a: 0, g: 0}", "s[3] increments 'g', t[3] decrements 'a'"]
      ]
    }
  },
  300: {
    intuition: "Let 'dp[i]' be the length of the longest increasing subsequence ending at index 'i'. For each index, check all previous indices 'j' where 'nums[i] > nums[j]' and update 'dp[i]'.",
    formula: "DP Recurrence Relation:<br><code>dp[i] = 1 + max(dp[j])</code> for all <code>j < i</code> and <code>nums[i] > nums[j]</code><br>Base case: <code>dp[i] = 1</code>",
    time: "O(N²) — nested loops check all pairs. (Can be optimized to O(N log N) using binary search).",
    space: "O(N) — space to store the subsequence lengths.",
    dryrun: {
      testcase: "nums = [10, 9, 2, 5, 3]",
      headers: ["Index i", "nums[i]", "Prior j Checked", "nums[j]", "dp[j] + 1", "dp[i] Updated"],
      rows: [
        ["0", "10", "-", "-", "-", "1"],
        ["1", "9", "0", "10", "N/A (9 < 10)", "1"],
        ["2", "2", "0, 1", "10, 9", "N/A", "1"],
        ["3", "5", "2", "2", "dp[2] + 1 = 2", "2"],
        ["4", "3", "2", "2", "dp[2] + 1 = 2", "2"]
      ]
    }
  },
  322: {
    intuition: "Let 'dp[i]' be the minimum number of coins needed to make amount 'i'. For each amount from 1 to 'amount', check each coin option and compute the minimum coins needed.",
    formula: "DP Recurrence Relation:<br><code>dp[i] = min(dp[i], dp[i - coin] + 1)</code> for all coins.<br>Base case: <code>dp[0] = 0</code>",
    time: "O(N * C) — where N is target amount and C is coin denominations count.",
    space: "O(N) — cache array of size amount + 1.",
    dryrun: {
      testcase: "coins = [1, 2], amount = 3",
      headers: ["Amount i", "Coin", "i - coin", "dp[i - coin] + 1", "dp[i] Optimal"],
      rows: [
        ["1", "1", "0", "dp[0] + 1 = 1", "1"],
        ["2", "1", "1", "dp[1] + 1 = 2", "2"],
        ["2", "2", "0", "dp[0] + 1 = 1", "1 (optimal)"],
        ["3", "1", "2", "dp[2] + 1 = 2", "2 (optimal)"]
      ]
    }
  },
  347: {
    intuition: "Count element frequencies in a hash map. Use bucket sort where indices of the bucket array represent frequency counts, and elements are placed in lists corresponding to their frequency. Collect elements from highest index bucket down.",
    formula: "Bucket mapping:<br><code>buckets[frequency].push(num)</code><br>Collect: <code>for (i = N; i >= 0 && res.length < k; i--) res.push(...buckets[i])</code>",
    time: "O(N) — counting takes linear O(N), bucket sorting and collecting takes linear O(N).",
    space: "O(N) — map and bucket lists.",
    dryrun: {
      testcase: "nums = [1, 1, 1, 2, 2, 3], k = 2",
      headers: ["Step", "Frequency Map", "Buckets Array Setup", "Result List"],
      rows: [
        ["1", "{1: 3, 2: 2, 3: 1}", "-", "[]"],
        ["2", "-", "bucket[1]=[3], bucket[2]=[2], bucket[3]=[1]", "[]"],
        ["3", "-", "-", "Collect from end: [1, 2]"]
      ]
    }
  },
  416: {
    intuition: "The problem reduces to finding if a subset of elements sums up to exactly 'sum / 2'. This is the classic 0/1 Knapsack subset sum problem. Use a 1D boolean array to store subset sum feasibility.",
    formula: "DP Recurrence Relation:<br><code>dp[j] = dp[j] || dp[j - nums[i]]</code><br>Iterate <code>j</code> backwards from <code>target</code> to <code>nums[i]</code> to use elements once.",
    time: "O(N * S) — where N is numbers count and S is target sum (sum / 2).",
    space: "O(S) — boolean cache array of size sum / 2 + 1.",
    dryrun: {
      testcase: "nums = [1, 5, 11, 5]",
      headers: ["num", "Check Target j", "j - num", "dp[j - num]", "dp[j] Updated State"],
      rows: [
        ["1", "11 down to 1", "j - 1", "dp[0] is true", "dp[1] = true"],
        ["5", "11 down to 5", "j - 5", "dp[1] is true", "dp[6] = true, dp[5] = true"],
        ["11", "11", "0", "dp[0] is true", "dp[11] = true (Subset found!)"]
      ]
    }
  },
  847: {
    intuition: "We want to find the shortest path that visits every node in a graph. Since N is small (N <= 17), we can use BFS with bitmask state (mask, u) where mask represents visited nodes, and u is the current node.",
    formula: "State transitions:<br><code>next_mask = mask | (1 << neighbor)</code><br>Transition from <code>(mask, u)</code> to <code>(next_mask, neighbor)</code> with cost + 1.",
    time: "O(2^N * N * E) — where N is the node count and E is the edge count.",
    space: "O(2^N * N) — queue size and visited state space.",
    dryrun: {
      testcase: "N = 4, edges = [[0,1],[0,2],[0,3]]",
      headers: ["Step", "Queue State (mask, u)", "Next States (next_mask, neighbor)", "Distance"],
      rows: [
        ["1", "(0001, 0), (0010, 1), ...", "(0011, 1) from 0, (0101, 2) from 0", "1"],
        ["2", "(0011, 1)", "(0011, 0) from 1", "2"],
        ["3", "(0101, 2)", "(0111, 0) from 2", "3"]
      ]
    }
  },
  1192: {
    intuition: "Find all bridges (critical connections) in an undirected graph. Tarjan's bridge-finding algorithm uses DFS to find back-edges. An edge u-v is a bridge if v has no back-edge to reach any ancestor of u.",
    formula: "Bridge condition:<br><code>low[v] > disc[u]</code><br>Updates: <code>low[u] = min(low[u], low[v])</code> (for tree edge) or <code>low[u] = min(low[u], disc[v])</code> (for back-edge)",
    time: "O(V + E) — single pass DFS traversal.",
    space: "O(V) — discovery, low-link, and recursive stack arrays.",
    dryrun: {
      testcase: "Graph A-B, B-C, A-C (cycle), C-D (bridge)",
      headers: ["DFS step", "disc / low arrays", "Condition check", "Bridge detected?"],
      rows: [
        ["1. visit D", "disc[D]=4, low[D]=4", "-", "No"],
        ["2. backtrack C-D", "C is parent of D", "low[D](4) > disc[C](3)", "Yes! C-D is a bridge."]
      ]
    }
  },
  9999: {
    intuition: "Determine all strongly connected components in a directed graph using Kosaraju's two-pass DFS traversal algorithm.",
    formula: "Kosaraju's phases:<br>1. DFS(u) -> push finished to Stack.<br>2. Transpose Graph.<br>3. DFS(u) on transposed graph from Stack top to extract SCC.",
    time: "O(V + E) — linear time search.",
    space: "O(V + E) — transposed graph representation and visited sets.",
    dryrun: {
      testcase: "A->B, B->C, C->A (SCC1)",
      headers: ["Step", "Stack State", "Transposed traversal", "Strongly Connected Component"],
      rows: [
        ["1", "top: A, B, C", "DFS(A) -> visits C, B", "SCC: {A, C, B}"]
      ]
    }
  },
  2360: {
    intuition: "Find the longest cycle in a directed graph. Each node has at most one outgoing edge. We can keep track of visitation timestamps during DFS. A cycle is detected when we hit a node visited in the current DFS path, and the cycle length is the timestamp difference.",
    formula: "Cycle check:<br>If node <code>v</code> is currently in stack:<br><code>cycle_len = current_time - dist[v]</code><br>Update: <code>max_cycle = max(max_cycle, cycle_len)</code>",
    time: "O(V) — each node is visited at most once.",
    space: "O(V) — track distances and visited/in-stack nodes.",
    dryrun: {
      testcase: "edges = [3,3,4,2,3]",
      headers: ["Node Visited", "Timestamp map", "In-stack nodes", "Max Cycle Len"],
      rows: [
        ["0 -> 3 -> 2 -> 4 -> 3", "dist[3]=1, dist[2]=2, dist[4]=3", "{0, 3, 2, 4}", "3 - 1 + 1 = 3"]
      ]
    }
  },
  2685: {
    intuition: "Count the number of complete connected components in an undirected graph. A component is complete if it is a clique (every vertex is connected to every other vertex), which means <code>E_comp = V_comp * (V_comp - 1) / 2</code>.",
    formula: "Completion check:<br>For each component, count vertices <code>V</code> and edges <code>E</code>.<br>Verify if: <code>E === V * (V - 1)</code> (since each undirected edge is counted twice as <code>deg(u)</code>).",
    time: "O(V + E) — standard DFS to find connected components and sum degrees.",
    space: "O(V) — recursion stack and visited array.",
    dryrun: {
      testcase: "V = 3, edges = [[0,1],[1,2],[2,0]]",
      headers: ["Component", "Vertices Count V", "Total Degrees sum", "Complete Clique?"],
      rows: [
        ["{0, 1, 2}", "3", "deg(0)+deg(1)+deg(2) = 6", "Yes (6 == 3 * 2)"]
      ]
    }
  },
  1125: {
    intuition: "Find the smallest subset of people whose combined skills cover all required skills. Represent the set of covered skills as a bitmask. For each person, represent their skills as a bitmask and update the DP state.",
    formula: "Recurrence Relation:<br><code>dp[mask | personSkill] = min(dp[mask | personSkill], dp[mask] + person)</code>",
    time: "O(P * 2^S) — where P is the number of people and S is the number of skills.",
    space: "O(2^S) — DP cache array.",
    dryrun: {
      testcase: "req_skills = ['java','js'], skills = [['java'],['js']]",
      headers: ["Person Index", "Person Skills Bitmask", "Mask (bin)", "dp[mask] (min size team)"],
      rows: [
        ["-", "-", "00", "[]"],
        ["0 (java)", "01", "01", "[0]"],
        ["1 (js)", "10", "11", "[0, 1]"]
      ]
    }
  },
  691: {
    intuition: "Find the minimum number of stickers to spell target word. Represent target characters as indices and remaining target characters to form as a bitmask of length target.length.",
    formula: "Transition:<br>For each sticker, try to cover unspelled characters of target. <code>dp[mask] = min(dp[mask], 1 + dp[remainingMask])</code>",
    time: "O(S * 2^T * T) — where S is stickers count and T is target length.",
    space: "O(2^T) — DP cache size.",
    dryrun: {
      testcase: "target = 'hat', sticker = 'th'",
      headers: ["Mask (bin)", "Sticker Cover", "Next Mask (bin)", "dp[mask] min stickers"],
      rows: [
        ["000 (empty)", "-", "-", "0"],
        ["111 ('hat')", "'th' covers index 1,2", "001 ('a')", "1 + dp[001]"]
      ]
    }
  },
  464: {
    intuition: "Determine if the first player can win by choosing numbers. Since maxChoosableInteger <= 20, use a bitmask where 1 at index i means number i is already chosen. Use memoized minimax search.",
    formula: "State search:<br><code>canWin(mask, currentSum) = any(!canWin(mask | (1 << i), currentSum + i))</code>",
    time: "O(2^M * M) — where M is maxChoosableInteger.",
    space: "O(2^M) — state cache.",
    dryrun: {
      testcase: "maxChoosableInteger = 3, desiredTotal = 4",
      headers: ["Mask Chosen (bin)", "Sum", "Player Turn", "Result"],
      rows: [
        ["000", "0", "P1", "P1 wins by choosing 3 -> P2 at (100, 3) must lose"],
        ["100", "3", "P2", "P2 chooses 2 -> sum 5 >= 4 (P2 wins, so P1 avoids)"]
      ]
    }
  },
  1434: {
    intuition: "Assign hats to people such that no two people wear the same hat and everyone wears one. Since number of people is small (N <= 10), represent people assigned hats as a bitmask and iterate over hats.",
    formula: "DP transition:<br><code>dp[hat][mask] = dp[hat - 1][mask] + sum(dp[hat - 1][mask \\ {p}])</code> for each person p who likes the hat.",
    time: "O(H * 2^N * N) — where H is number of hats (40) and N is number of people.",
    space: "O(2^N) — memory space for DP state array.",
    dryrun: {
      testcase: "N = 2, H = 2",
      headers: ["Hat", "mask (bin)", "Assignments", "dp[mask] Ways"],
      rows: [
        ["0", "00", "{}", "1"],
        ["1", "01", "{P0: H1}", "1"],
        ["2", "11", "{P0: H2, P1: H1} or {P0: H1, P1: H2}", "2"]
      ]
    }
  },
  543: {
    intuition: "The diameter of a binary tree is the length of the longest path between any two nodes. This path may or may not pass through the root. For each node, calculate the sum of heights of its left and right subtrees, and track the maximum sum.",
    formula: "Diameter at node:<br><code>diameterVal = leftHeight + rightHeight</code><br>Tracking max: <code>maxDiameter = max(maxDiameter, diameterVal)</code>",
    time: "O(N) — visits each tree node once.",
    space: "O(H) — recursion call stack bounded by tree height H.",
    dryrun: {
      testcase: "root = [1, 2, 3, 4, 5]",
      headers: ["Node", "Left Height", "Right Height", "Diameter", "Global Max"],
      rows: [
        ["4 (leaf)", "0", "0", "0", "0"],
        ["5 (leaf)", "0", "0", "0", "0"],
        ["2", "1", "1", "2", "2"],
        ["3 (leaf)", "0", "0", "0", "2"],
        ["1 (root)", "2", "1", "3", "3"]
      ]
    }
  },
  560: {
    intuition: "Maintain a running prefix sum. Store prefix sums and their frequencies in a Hash Map. At each index, if 'prefix - k' exists in the map, add its frequency to the total subarray count.",
    formula: "Subarray sum equation:<br><code>sum(i...j) = prefix[j] - prefix[i-1] == k => prefix[j] - k == prefix[i-1]</code><br>Map check: <code>if (map.has(prefix - k)) count += map.get(prefix - k);</code>",
    time: "O(N) — single pass loop.",
    space: "O(N) — hash map stores up to N prefix sums.",
    dryrun: {
      testcase: "nums = [1, 1, 1], k = 2",
      headers: ["Step i", "nums[i]", "Prefix Sum", "prefix - k", "Count Increment", "Prefix Map state"],
      rows: [
        ["Init", "-", "0", "-", "0", "{0: 1}"],
        ["0", "1", "1", "-1", "+0", "{0: 1, 1: 1}"],
        ["1", "1", "2", "0", "+Map[0] = 1", "{0: 1, 1: 1, 2: 1}"],
        ["2", "1", "3", "1", "+Map[1] = 1", "{0: 1, 1: 1, 2: 1, 3: 1}"]
      ]
    }
  },
  704: {
    intuition: "Standard binary search. Since the array is sorted, check the midpoint. If target equals mid, return index. If target is less than mid, search left half. Otherwise, search right half.",
    formula: "Halving search space:<br><code>if (nums[mid] == target) return mid;</code><br><code>if (nums[mid] < target) low = mid + 1; else high = mid - 1;</code>",
    time: "O(log N) — halves search space at each iteration.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
      headers: ["Step", "Low", "Mid", "High", "nums[mid]", "Action Result"],
      rows: [
        ["1", "0", "2", "5", "3", "9 > 3 -> Low = mid + 1 = 3"],
        ["2", "3", "4", "5", "9", "9 == target -> Return index 4"]
      ]
    }
  },
  1143: {
    intuition: "Let 'dp[i][j]' be the length of the LCS of substrings 's1[0...i-1]' and 's2[0...j-1]'. If characters match, increment the LCS of the prefixes. If they don't, take the maximum LCS by discarding one character from either string.",
    formula: "DP Recurrence Relation:<br><code>dp[i][j] = (s1[i-1] == s2[j-1]) ? (dp[i-1][j-1] + 1) : max(dp[i-1][j], dp[i][j-1])</code><br>Base cases: <code>dp[i][0] = 0, dp[0][j] = 0</code>",
    time: "O(M * N) — filling 2D table of size M x N.",
    space: "O(M * N) — DP cache matrix of size M x N.",
    dryrun: {
      testcase: "s1 = 'abc', s2 = 'ace'",
      headers: ["i", "j", "s1[i-1]", "s2[j-1]", "Match?", "dp[i][j] Updated"],
      rows: [
        ["1", "1", "a", "a", "Yes", "dp[0][0] + 1 = 1"],
        ["2", "2", "b", "c", "No", "max(dp[1][2], dp[2][1]) = 1"],
        ["3", "3", "c", "e", "No", "max(dp[2][3], dp[3][2]) = 2"]
      ]
    }
  }
,
  // ===== ADDITIONAL PROBLEM DRY RUNS =====

  16: {
    intuition: "Sort the array. Fix two pointers (i, j) at outer boundaries, then use a 3Sum approach (two inner pointers low and high) for each pair. Track the sum closest to target.",
    formula: "Closest sum tracking:<br><code>diff = |nums[i] + nums[j] + nums[low] + nums[high] - target|</code><br>Update if diff is smaller.",
    time: "O(N³) — sorted + triple nested search.",
    space: "O(log N) — sorting auxiliary space.",
    dryrun: {
      testcase: "nums = [1,1,1,0], target = 0",
      headers: ["i","j","Low","High","Sum","Diff","Closest Sum"],
      rows: [
        ["0","1","2","3","1+1+1+0=3","3","3"],
        ["0","1","2","3","all combos checked","-","1+1+1+0=3→ best"]
      ]
    }
  },
  18: {
    intuition: "Sort the array. Fix two pointers (i, j) as the first two elements of each quadruplet. Then apply Two Pointers (low, high) to find the remaining two, skipping duplicates carefully.",
    formula: "Quadruplet check:<br><code>nums[i] + nums[j] + nums[low] + nums[high] == target</code><br>Skip duplicates via <code>if (nums[i] == nums[i-1]) continue;</code>",
    time: "O(N³) — O(N log N) sort + O(N³) search.",
    space: "O(log N) — sorting recursion stack.",
    dryrun: {
      testcase: "nums = [1,0,-1,0,-2,2], target = 0",
      headers: ["i (fixed)","j (fixed)","Low","High","Sum","Action"],
      rows: [
        ["Sorted","→","-2,-1,0,0,1,2","-","−","Sort complete"],
        ["i=-2","j=-1","Low=0","High=2","-2-1+0+2=-1","Sum < 0 → Low++"],
        ["i=-2","j=-1","Low=1","High=2","-2-1+0+2=−1","Sum<0 → Low++"],
        ["i=-2","j=0","Low=1","High=2","-2+0+0+2=0","Match! Save [-2,0,0,2]"]
      ]
    }
  },
  19: {
    intuition: "Use two pointers: fast pointer advances N+1 steps ahead, then both slow and fast advance together. When fast reaches end, slow.next is the node to remove. Handle edge case where head itself is removed.",
    formula: "Gap strategy:<br><code>fast = head; repeat n+1 times: fast = fast.next;</code><br>Then advance both until fast is null:<br><code>slow.next = slow.next.next;</code>",
    time: "O(L) — single pass of list length L.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "1→2→3→4→5, n = 2",
      headers: ["Step","Fast Pointer","Slow Pointer","Action"],
      rows: [
        ["Fast advance n+1","Moves to node 3","dummy (before 1)","Fast 3 ahead"],
        ["Advance both","Fast=4","Slow=1","Both move"],
        ["Advance both","Fast=5","Slow=2","Both move"],
        ["Fast.next=null","null","Slow=3","Slow.next=3.next=5. Node 4 removed."]
      ]
    }
  },
  21: {
    intuition: "Compare node values at the heads of both linked lists. Attach the smaller node to the merged result and advance that list's pointer. Continue until one list is exhausted, then append the remaining.",
    formula: "Merge step:<br><code>if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }</code><br>Tail attachment: <code>curr.next = l1 || l2;</code>",
    time: "O(M + N) — processes all nodes of both lists.",
    space: "O(1) — constant in-place pointer updates.",
    dryrun: {
      testcase: "L1: 1→2→4, L2: 1→3→4",
      headers: ["Step","L1 Head","L2 Head","Comparison","Merged List So Far"],
      rows: [
        ["1","1","1","1 == 1 → pick L1","1→"],
        ["2","2","1","1 < 2 → pick L2","1→1→"],
        ["3","2","3","2 < 3 → pick L1","1→1→2→"],
        ["4","4","3","3 < 4 → pick L2","1→1→2→3→"],
        ["5","4","4","4 == 4 → pick L1","1→1→2→3→4→4"]
      ]
    }
  },
  23: {
    intuition: "Use a min-heap (priority queue) initialized with the head of each list. Repeatedly extract the minimum, add it to the result, and push the next node from that list into the heap.",
    formula: "Min-Heap invariant:<br><code>heap.push([node.val, node]); [val, node] = heap.pop();</code><br>Advance: <code>if (node.next) heap.push([node.next.val, node.next]);</code>",
    time: "O(N log K) — heap of size K for N total nodes.",
    space: "O(K) — heap storage for K list heads.",
    dryrun: {
      testcase: "Lists: [1→4], [1→3], [2→6]",
      headers: ["Step","Heap State (values)","Popped Node","Result So Far"],
      rows: [
        ["Init","[1,1,2]","−","−"],
        ["1","[1,2,4]","1 (from L1)","1"],
        ["2","[2,3,4]","1 (from L2)","1→1"],
        ["3","[3,4,6]","2 (from L3)","1→1→2"],
        ["4","[4,6]","3 (from L2)","1→1→2→3"]
      ]
    }
  },
  24: {
    intuition: "Iterate through pairs of adjacent nodes. Save the second node, reverse the pair's link, and connect to next pair. Use a dummy head to simplify edge cases.",
    formula: "Pair swap:<br><code>prev.next = second; first.next = second.next; second.next = first;</code><br>Advance: <code>prev = first; curr = first.next;</code>",
    time: "O(N) — processes each node once.",
    space: "O(1) — constant in-place pointer updates.",
    dryrun: {
      testcase: "1→2→3→4",
      headers: ["Pair","First Node","Second Node","Link Change","Result"],
      rows: [
        ["Pair 1","1","2","2.next = 1, 1.next = 3","2→1→3→4"],
        ["Pair 2","3","4","4.next = 3, 3.next = null","2→1→4→3"]
      ]
    }
  },
  25: {
    intuition: "Process the list in groups of K. For each group, reverse the K nodes and connect to the previous group's tail. If fewer than K nodes remain, leave them unchanged.",
    formula: "Group reversal:<br><code>for each k-group: reverse, then connect</code><br>Check: <code>if (remaining < k) break;</code>",
    time: "O(N) — processes all N nodes.",
    space: "O(1) — constant space in-place reversal.",
    dryrun: {
      testcase: "1→2→3→4→5, k = 2",
      headers: ["Group","Nodes","Reversed","Connected Result"],
      rows: [
        ["Group 1","1, 2","2→1","2→1→"],
        ["Group 2","3, 4","4→3","2→1→4→3→"],
        ["Group 3","5","5 (< k, unchanged)","2→1→4→3→5"]
      ]
    }
  },
  34: {
    intuition: "Run two binary searches on the sorted array: one to find the leftmost occurrence of target (first position) and one to find the rightmost occurrence (last position).",
    formula: "First position: bias toward left → <code>if A[mid] >= target: high = mid</code><br>Last position: bias toward right → <code>if A[mid] <= target: low = mid</code>",
    time: "O(log N) — two independent binary searches.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [5,7,7,8,8,10], target = 8",
      headers: ["Search","Low","Mid","High","nums[mid]","Decision","Result"],
      rows: [
        ["First","0","2","5","7","7 < 8 → Low = 3","−"],
        ["First","3","4","5","8","8 >= 8 → High = 4","−"],
        ["First","3","3","4","8","8 >= 8 → High = 3","First = 3"],
        ["Last","0","2","5","7","7 <= 8 → Low = 3","−"],
        ["Last","3","4","5","8","8 <= 8 → Low = 5","−"],
        ["Last","5","5","5","10","10 > 8 → High = 4","Last = 4"]
      ]
    }
  },
  45: {
    intuition: "Greedily track the farthest reach achievable from the current window of positions. Each time the current jump window ends, increment the jump count and extend to the farthest reach.",
    formula: "Greedy extension:<br><code>farthest = max(farthest, i + nums[i])</code><br>Jump when window ends:<br><code>if (i == currentEnd) { jumps++; currentEnd = farthest; }</code>",
    time: "O(N) — single pass.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [2,3,1,1,4]",
      headers: ["i","nums[i]","Farthest Reach","Current Window End","Jumps","Action"],
      rows: [
        ["0","2","0+2=2","0","0","Window ends → Jump! Jumps=1, windowEnd=2"],
        ["1","3","1+3=4","2","1","Farthest = 4"],
        ["2","1","2+1=3","2","1","Window ends → Jump! Jumps=2, windowEnd=4"],
        ["3","1","3+1=4","4","2","Farthest = 4"],
        ["4","4","4+4=8","4","2","Reached end"]
      ]
    }
  },
  49: {
    intuition: "Group words that are anagrams of each other by creating a canonical key. The simplest key is the sorted version of each word. Words with the same sorted characters belong to the same group.",
    formula: "Key generation:<br><code>key = word.split('').sort().join('')</code><br>Group: <code>map.get(key).push(word)</code>",
    time: "O(N * K log K) — N words of average length K, each sorted.",
    space: "O(N * K) — map stores all words.",
    dryrun: {
      testcase: "words = ['eat','tea','tan','ate','nat','bat']",
      headers: ["Word","Sorted Key","Map Group Updated","Groups So Far"],
      rows: [
        ["eat","aet","{aet: [eat]}","[[eat]]"],
        ["tea","aet","{aet: [eat,tea]}","[[eat,tea]]"],
        ["tan","ant","{aet:[eat,tea], ant:[tan]}","[[eat,tea],[tan]]"],
        ["ate","aet","{aet:[eat,tea,ate]}","[[eat,tea,ate],[tan]]"],
        ["nat","ant","{ant:[tan,nat]}","[[eat,tea,ate],[tan,nat]]"],
        ["bat","abt","{abt:[bat]}","[[eat,tea,ate],[tan,nat],[bat]]"]
      ]
    }
  },
  55: {
    intuition: "Scan the array and track the maximum reachable index from all visited positions. If at any point the current index exceeds the maximum reach, return false. If we reach the last index, return true.",
    formula: "Reach tracking:<br><code>maxReach = max(maxReach, i + nums[i])</code><br>Stuck check: <code>if (i > maxReach) return false;</code>",
    time: "O(N) — single pass.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [2,3,1,1,4]",
      headers: ["i","nums[i]","Max Reach","i > maxReach?","Action"],
      rows: [
        ["0","2","max(0, 0+2)=2","No","Continue"],
        ["1","3","max(2, 1+3)=4","No","Continue"],
        ["2","1","max(4, 2+1)=4","No","Continue"],
        ["3","1","max(4, 3+1)=4","No","Continue"],
        ["4","4","max(4, 4+4)=8","No","Reached end → Return true"]
      ]
    }
  },
  57: {
    intuition: "Find the correct position for the new interval by comparing with existing intervals. Skip all intervals that end before the new one starts (no overlap). Merge all intervals that overlap. Append remaining intervals after.",
    formula: "No overlap (left): <code>intervals[i][1] < newInterval[0]</code><br>No overlap (right): <code>intervals[i][0] > newInterval[1]</code><br>Merge: update newInterval boundaries.",
    time: "O(N) — single pass scan.",
    space: "O(N) — output result list.",
    dryrun: {
      testcase: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
      headers: ["Step","Current Interval","Overlap With New?","Result State"],
      rows: [
        ["1","[1,3]","Yes (3 >= 2 and 1 <= 5)","Merge: newInterval = [1,5]"],
        ["2","[6,9]","No (6 > 5)","Append [1,5] then [6,9]"],
        ["Final","-","-","[[1,5],[6,9]]"]
      ]
    }
  },
  62: {
    intuition: "Each cell in the grid can be reached from either the cell above or the cell to the left. The number of unique paths to cell (i,j) equals dp[i-1][j] + dp[i][j-1]. Base case: all cells in row 0 and column 0 have exactly 1 path.",
    formula: "DP recurrence:<br><code>dp[i][j] = dp[i-1][j] + dp[i][j-1]</code><br>Base: <code>dp[0][j] = 1 for all j, dp[i][0] = 1 for all i</code>",
    time: "O(M * N) — fills the entire grid.",
    space: "O(N) — optimized to a single row.",
    dryrun: {
      testcase: "m = 3, n = 3 (3x3 grid)",
      headers: ["(r,c)","From Above","From Left","dp[r][c]"],
      rows: [
        ["(0,0)","−","−","1"],
        ["(0,1)","−","1","1"],
        ["(0,2)","−","1","1"],
        ["(1,0)","1","−","1"],
        ["(1,1)","1","1","2"],
        ["(1,2)","1","2","3"],
        ["(2,0)","1","−","1"],
        ["(2,1)","1","1","2"],
        ["(2,2)","3","2","6"]
      ]
    }
  },
  63: {
    intuition: "Same as Unique Paths, but blocked cells (marked 1 in the grid) have 0 paths. Skip dp computation for blocked cells.",
    formula: "DP recurrence:<br><code>if (grid[i][j] == 1) dp[i][j] = 0;</code><br><code>else dp[i][j] = dp[i-1][j] + dp[i][j-1];</code>",
    time: "O(M * N) — single pass fill.",
    space: "O(M * N) — dp table.",
    dryrun: {
      testcase: "grid = [[0,0,0],[0,1,0],[0,0,0]]",
      headers: ["(r,c)","Grid Val","dp[r-1][c]+dp[r][c-1]","dp[r][c]"],
      rows: [
        ["(0,0)","0","−","1"],
        ["(0,1)","0","0+1=1","1"],
        ["(0,2)","0","1+0=1","1"],
        ["(1,0)","0","1+0=1","1"],
        ["(1,1)","1 (blocked)","−","0"],
        ["(1,2)","0","0+1=1","1"],
        ["(2,0)","0","1+0=1","1"],
        ["(2,1)","0","1+1=2","2"],
        ["(2,2)","0","2+1=3","3"]
      ]
    }
  },
  64: {
    intuition: "Find the minimum cost path from top-left to bottom-right. At each cell, the minimum path is its own value plus the minimum cost of reaching it (either from above or from the left).",
    formula: "DP recurrence:<br><code>dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])</code><br>First row: <code>dp[0][j] = dp[0][j-1] + grid[0][j]</code>",
    time: "O(M * N) — fills entire grid.",
    space: "O(1) — modifies grid in-place.",
    dryrun: {
      testcase: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
      headers: ["(r,c)","grid[r][c]","min(up,left)","dp[r][c]"],
      rows: [
        ["(0,0)","1","−","1"],
        ["(0,1)","3","left=1","4"],
        ["(0,2)","1","left=4","5"],
        ["(1,0)","1","up=1","2"],
        ["(1,1)","5","min(4,2)=2","7"],
        ["(1,2)","1","min(7,5)=5","6"],
        ["(2,0)","4","up=2","6"],
        ["(2,1)","2","min(6,6)=6","8"],
        ["(2,2)","1","min(8,6)=6","7"]
      ]
    }
  },
  72: {
    intuition: "Build a 2D dp table where dp[i][j] = minimum edit operations (insert, delete, replace) to convert s1[0..i-1] to s2[0..j-1]. If characters match, no operation needed. Otherwise, take the minimum of all three operations.",
    formula: "DP recurrence:<br><code>if s1[i-1]==s2[j-1]: dp[i][j]=dp[i-1][j-1]</code><br><code>else dp[i][j]=1+min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])</code>",
    time: "O(M * N) — fills M×N table.",
    space: "O(M * N) — dp table (can optimize to O(N)).",
    dryrun: {
      testcase: "s1 = 'horse', s2 = 'ros'",
      headers: ["i","j","s1[i-1]","s2[j-1]","Match?","dp[i][j]"],
      rows: [
        ["1","1","h","r","No","1+min(dp[0][1]=1,dp[1][0]=1,dp[0][0]=0)=1"],
        ["1","2","h","o","No","1+min(dp[0][2]=2,dp[1][1]=1,dp[0][1]=1)=2"],
        ["1","3","h","s","No","1+min(dp[0][3]=3,dp[1][2]=2,dp[0][2]=2)=3"],
        ["2","1","o","r","No","1+min(dp[1][1]=1,dp[2][0]=2,dp[1][0]=1)=2"],
        ["2","2","o","o","Yes","dp[1][1]=1"],
        ["2","3","o","s","No","1+min(dp[1][3]=3,dp[2][2]=1,dp[1][2]=2)=2"]
      ]
    }
  },
  85: {
    intuition: "For each row, treat the cell heights as a histogram (cumulating heights from rows above). Apply the Largest Rectangle in Histogram algorithm (monotonic stack) on each row's histogram.",
    formula: "Height accumulation:<br><code>heights[j] = (matrix[i][j]=='0') ? 0 : heights[j]+1</code><br>Then apply: maxArea = largestRectangleInHistogram(heights)",
    time: "O(M * N) — histogram processed for each of M rows.",
    space: "O(N) — heights array and stack.",
    dryrun: {
      testcase: "matrix = [['1','0'],['1','1']]",
      headers: ["Row i","Heights Array","Max Rectangle Area (Histogram)","Running Max"],
      rows: [
        ["0","[1, 0]","Area = 1 (height[0]=1)","1"],
        ["1","[2, 1]","Area = 2 (height[1]=1, width=2)","2"]
      ]
    }
  },
  92: {
    intuition: "Traverse the list to position just before the left boundary. Reverse the sublist from position left to right in-place using node pointer swaps.",
    formula: "Reversal step:<br><code>next = curr.next; curr.next = next.next; next.next = prev.next; prev.next = next;</code><br>Repeat (right - left) times.",
    time: "O(N) — single traversal.",
    space: "O(1) — constant pointer variables.",
    dryrun: {
      testcase: "1→2→3→4→5, left=2, right=4",
      headers: ["Iteration","curr","next","Action","List State"],
      rows: [
        ["Setup","node 2","node 3","Traverse to left boundary","1→2→3→4→5"],
        ["1","node 2","node 3","Insert 3 after prev(1)","1→3→2→4→5"],
        ["2","node 2","node 4","Insert 4 after prev(1)","1→4→3→2→5"],
        ["Done","-","-","Reversed [2,4]","1→4→3→2→5"]
      ]
    }
  },
  97: {
    intuition: "Let dp[i][j] = true if s3[0..i+j-1] can be formed by interleaving s1[0..i-1] and s2[0..j-1]. Transition: check if s1[i-1] matches s3[i+j-1] with dp[i-1][j], or s2[j-1] matches with dp[i][j-1].",
    formula: "DP recurrence:<br><code>dp[i][j] = (s1[i-1]==s3[i+j-1] && dp[i-1][j]) || (s2[j-1]==s3[i+j-1] && dp[i][j-1])</code>",
    time: "O(M * N) — fills M×N table.",
    space: "O(M * N) — dp table.",
    dryrun: {
      testcase: "s1='aab', s2='axy', s3='aaxaby'",
      headers: ["i","j","s1[i-1]","s2[j-1]","s3[i+j-1]","dp[i][j]"],
      rows: [
        ["0","0","−","−","−","true (base)"],
        ["1","0","a","−","a","a==a && dp[0][0]=true → true"],
        ["0","1","−","a","a","a==a && dp[0][0]=true → true"],
        ["1","1","a","a","a","(a==a && dp[0][1]=true) → true"]
      ]
    }
  },
  99: {
    intuition: "Perform an in-order traversal of the BST. In a valid BST, in-order traversal produces sorted values. Find the two nodes where the order is violated (prev > curr). These are the swapped nodes — swap their values back.",
    formula: "Violation detection:<br><code>if (prev && prev.val > curr.val) { first = first || prev; second = curr; }</code><br>Fix: <code>swap(first.val, second.val)</code>",
    time: "O(N) — in-order traversal of all nodes.",
    space: "O(H) — recursion stack bounded by tree height H.",
    dryrun: {
      testcase: "BST in-order expected: [1,2,3] but swapped: [3,2,1]",
      headers: ["Visited Node","prev.val","curr.val","Violation?","first/second Candidates"],
      rows: [
        ["1st visit","null","3","No","−"],
        ["2nd visit","3","2","Yes (3>2)","first=3, second=2"],
        ["3rd visit","2","1","Yes (2>1)","second updated to 1"],
        ["Fix","-","-","-","Swap 3↔1 → BST fixed"]
      ]
    }
  },
  103: {
    intuition: "Perform level-order BFS traversal (using queue). At each level, alternate the direction of adding elements to the level result: left-to-right for even levels, right-to-left for odd levels.",
    formula: "Direction toggle:<br><code>if (level % 2 == 0) result = normal order; else result = reversed;</code>",
    time: "O(N) — visits each tree node once.",
    space: "O(W) — max width of tree in queue.",
    dryrun: {
      testcase: "[3, 9, 20, null, null, 15, 7]",
      headers: ["Level","Queue State","Direction","Level Values"],
      rows: [
        ["0 (even)","[3]","Left→Right","[3]"],
        ["1 (odd)","[9, 20]","Right→Left","[20, 9]"],
        ["2 (even)","[15, 7]","Left→Right","[15, 7]"]
      ]
    }
  },
  112: {
    intuition: "Use DFS recursion. At each node, subtract the node's value from the target. When reaching a leaf node, check if the remaining target equals 0. Return true if any leaf path satisfies the condition.",
    formula: "DFS check at leaf:<br><code>if (!node.left && !node.right) return remaining == node.val;</code><br>Recurse: <code>return hasPathSum(node.left, rem - node.val) || hasPathSum(node.right, rem - node.val);</code>",
    time: "O(N) — visits every tree node once.",
    space: "O(H) — recursion stack bounded by tree height H.",
    dryrun: {
      testcase: "root = [5,4,8,11,null,null,4,7,2,null,null,null,1], targetSum = 22",
      headers: ["Node","Remaining Target","At Leaf?","Action"],
      rows: [
        ["5","22","No","Recurse: rem-5=17"],
        ["4","17","No","Recurse: rem-4=13"],
        ["11","13","No","Recurse: rem-11=2"],
        ["7","2","Yes (leaf)","2 != 0 → return false"],
        ["2","2","Yes (leaf)","2 == 0 → return true!"]
      ]
    }
  },
  113: {
    intuition: "DFS traversal collecting the current path. At each leaf node, check if path sum equals targetSum. If yes, add copy of current path to results. Backtrack by removing the node after recursion.",
    formula: "Backtracking step:<br><code>path.push(node.val); if (leaf && sum == target) result.push([...path]); ... path.pop();</code>",
    time: "O(N²) — N nodes × O(N) path copying at leaves.",
    space: "O(N) — recursion depth and path storage.",
    dryrun: {
      testcase: "root = [5,4,8,11], target = 22, path: 5→4→11→?",
      headers: ["Node","Path","Sum So Far","At Leaf?","Action"],
      rows: [
        ["5","[5]","5","No","Recurse down"],
        ["4","[5,4]","9","No","Recurse down"],
        ["11","[5,4,11]","20","No","Recurse down"],
        ["7","[5,4,11,7]","27","Yes","27 != 22 → pop 7, try next"],
        ["2","[5,4,11,2]","22","Yes","22 == 22 → save [5,4,11,2]"]
      ]
    }
  },
  115: {
    intuition: "dp[i][j] = number of distinct subsequences of s[0..i-1] that match t[0..j-1]. If characters match: add ways from dp[i-1][j-1] (use this char) + dp[i-1][j] (skip this char). If no match: only dp[i-1][j].",
    formula: "DP recurrence:<br><code>if s[i-1]==t[j-1]: dp[i][j] = dp[i-1][j-1] + dp[i-1][j]</code><br><code>else dp[i][j] = dp[i-1][j]</code>",
    time: "O(M * N) — fills M×N dp table.",
    space: "O(M * N) — table storage.",
    dryrun: {
      testcase: "s = 'rabbbit', t = 'rabbit'",
      headers: ["i (s)","j (t)","s[i-1]","t[j-1]","Match?","dp[i][j]"],
      rows: [
        ["1","1","r","r","Yes","dp[0][0]+dp[0][1]=1+0=1"],
        ["2","1","a","r","No","dp[1][1]=1"],
        ["2","2","a","a","Yes","dp[1][1]+dp[1][2]=1+0=1"],
        ["3","2","b","a","No","dp[2][2]=1"],
        ["3","3","b","b","Yes","dp[2][2]+dp[2][3]=1+0=1"]
      ]
    }
  },
  116: {
    intuition: "Use BFS level-order traversal. For each node in a level, set its next pointer to the next node in the queue (within same level). The last node in each level points to null.",
    formula: "Level connection:<br><code>while (i < levelSize - 1) { nodes[i].next = nodes[i+1]; }</code><br>Last in level: <code>nodes[levelSize-1].next = null;</code>",
    time: "O(N) — visits all nodes once.",
    space: "O(W) — queue width at each level.",
    dryrun: {
      testcase: "Perfect binary tree: [1, 2, 3, 4, 5, 6, 7]",
      headers: ["Level","Nodes in Level","Next Pointers Set","Result"],
      rows: [
        ["0","[1]","1→null","1→#"],
        ["1","[2, 3]","2→3→null","2→3→#"],
        ["2","[4,5,6,7]","4→5→6→7→null","4→5→6→7→#"]
      ]
    }
  },
  120: {
    intuition: "Process the triangle from bottom to top. At each cell, the minimum path from this cell to the bottom is the cell value plus the minimum of the two adjacent cells below it.",
    formula: "Bottom-up DP:<br><code>dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1])</code><br>Start from second-to-last row up to root.",
    time: "O(N²) — fills triangular grid.",
    space: "O(N) — single row optimization.",
    dryrun: {
      testcase: "[[2],[3,4],[6,5,7],[4,1,8,3]]",
      headers: ["Row (bottom-up)","dp State","Min Path Calculation"],
      rows: [
        ["Bottom row","[4,1,8,3]","Base case"],
        ["Row 2","[6,5,7]","6+min(4,1)=7, 5+min(1,8)=6, 7+min(8,3)=10 → [7,6,10]"],
        ["Row 1","[3,4]","3+min(7,6)=9, 4+min(6,10)=10 → [9,10]"],
        ["Root","[2]","2+min(9,10)=11 → Answer: 11"]
      ]
    }
  },
  134: {
    intuition: "Calculate net gain at each station (gas[i] - cost[i]). If total sum of all net gains is negative, no solution exists. Otherwise, simulate: track running tank and if tank goes negative, reset and start from next station.",
    formula: "Net gain calculation:<br><code>gain = gas[i] - cost[i]</code><br>Reset rule:<br><code>if (tank < 0) { start = i + 1; tank = 0; }</code>",
    time: "O(N) — single linear scan.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "gas=[1,2,3,4,5], cost=[3,4,5,1,2]",
      headers: ["Station i","gas[i]","cost[i]","Net Gain","Tank","Action"],
      rows: [
        ["0","1","3","-2","0→-2","Tank<0 → Reset, start=1"],
        ["1","2","4","-2","0→-2","Tank<0 → Reset, start=2"],
        ["2","3","5","-2","0→-2","Tank<0 → Reset, start=3"],
        ["3","4","1","3","0→3","OK"],
        ["4","5","2","3","3→6","OK, start=3 is answer"]
      ]
    }
  },
  137: {
    intuition: "Use bit manipulation. For each bit position (0-31), count the total number of 1s from all numbers. If count % 3 != 0, the single number has a 1 in that bit position.",
    formula: "Bit accumulation:<br><code>for each bit b: count = sum of bit b across all nums</code><br>If <code>count % 3 == 1</code>: result has bit b set.",
    time: "O(32 * N) = O(N) — checks each of 32 bits.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [2,2,3,2]",
      headers: ["Bit Position","nums bit values","Sum of bits","Sum % 3","Bit in result"],
      rows: [
        ["bit 0 (LSB)","0,0,1,0","1","1","1 (set)"],
        ["bit 1","1,1,1,1","4","1","1 (set)"],
        ["bit 2+","0,0,0,0","0","0","0 (not set)"],
        ["Result","-","binary 11 = 3","-","3"]
      ]
    }
  },
  138: {
    intuition: "Two-pass solution. First pass: clone all nodes without setting random pointers, storing (original → clone) in a hash map. Second pass: set clone.next and clone.random using the map.",
    formula: "Clone random:<br><code>clone.random = map.get(original.random)</code><br>Clone next:<br><code>clone.next = map.get(original.next)</code>",
    time: "O(N) — two linear passes.",
    space: "O(N) — hash map stores all original-to-clone mappings.",
    dryrun: {
      testcase: "Node1(val=7, random→Node2) → Node2(val=13, random→Node1)",
      headers: ["Pass","Node","Action","Map State"],
      rows: [
        ["Pass 1","Node1","Create Clone1","Map={Node1:Clone1}"],
        ["Pass 1","Node2","Create Clone2","Map={Node1:Clone1, Node2:Clone2}"],
        ["Pass 2","Node1","Clone1.next=Clone2, Clone1.random=Clone2","Linked"],
        ["Pass 2","Node2","Clone2.next=null, Clone2.random=Clone1","Linked"]
      ]
    }
  },
  160: {
    intuition: "Use two pointers starting at head of each list. When one pointer reaches null, redirect it to the head of the other list. Both pointers will meet at the intersection after traversing combined distances.",
    formula: "Redirect logic:<br><code>pA = pA == null ? headB : pA.next;</code><br><code>pB = pB == null ? headA : pB.next;</code><br>Meet when pA == pB.",
    time: "O(M + N) — both pointers traverse both lists.",
    space: "O(1) — constant pointer usage.",
    dryrun: {
      testcase: "List A: 4→1→8→4→5, List B: 5→6→1→8→4→5 (merge at node 8)",
      headers: ["Step","Pointer A","Pointer B","Action"],
      rows: [
        ["1-3","4,1,8","5,6,1","Advance normally"],
        ["4-6","4,5,null→5","8,4,5","A redirected to headB"],
        ["7-9","6,1,8","null→4","B redirected to headA"],
        ["Meet","8","8","pA == pB → Intersection at node 8"]
      ]
    }
  },
  162: {
    intuition: "A peak element is one greater than its neighbors. Binary search: if nums[mid] < nums[mid+1], a peak exists in the right half. Otherwise, a peak exists at mid or in the left half.",
    formula: "Binary search step:<br><code>if (nums[mid] < nums[mid+1]) low = mid + 1;</code><br><code>else high = mid;</code>",
    time: "O(log N) — binary search halving.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [1, 2, 3, 1]",
      headers: ["Step","Low","Mid","High","nums[mid]","nums[mid+1]","Comparison","Action"],
      rows: [
        ["1","0","1","3","2","3","2 < 3","Low = 2"],
        ["2","2","2","3","3","1","3 > 1","High = 2"],
        ["Done","2","−","2","−","−","Low==High","Peak at index 2 (value 3)"]
      ]
    }
  },
  167: {
    intuition: "Array is sorted. Use two pointers at both ends. If sum equals target, return indices. If sum < target, move left pointer right (increase sum). If sum > target, move right pointer left (decrease sum).",
    formula: "Two-pointer convergence:<br><code>if (nums[left]+nums[right] == target) return [left+1, right+1];</code><br><code>else if (sum < target) left++; else right--;</code>",
    time: "O(N) — single pass of sorted array.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "numbers = [2,7,11,15], target = 9",
      headers: ["Step","Left","Right","nums[L]","nums[R]","Sum","Action"],
      rows: [
        ["1","0","3","2","15","17","17 > 9 → Right--"],
        ["2","0","2","2","11","13","13 > 9 → Right--"],
        ["3","0","1","2","7","9","9 == 9 → Return [1,2]"]
      ]
    }
  },
  190: {
    intuition: "Process all 32 bits of the integer. For each bit position, check if the least significant bit is 1 using AND, set that bit in the result by shifting it to the correct reversed position, then right-shift the input.",
    formula: "Bit extraction and placement:<br><code>result = (result << 1) | (n & 1); n >>= 1;</code><br>Repeat 32 times.",
    time: "O(32) = O(1) — constant bit operations.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "n = 00000010100101000001111010011100 (43261596)",
      headers: ["Bit Step","n (LSB)","Bit Extracted","Result (binary shift)"],
      rows: [
        ["1","00..100","0","0"],
        ["2","...010","0","00"],
        ["3","...001","1","001"],
        ["...","...","...","..."],
        ["32","Done","−","00111001010000001011010010100000 = 964176192"]
      ]
    }
  },
  191: {
    intuition: "Count the number of 1 bits in the binary representation. Use the trick: n & (n-1) clears the lowest set bit. Count how many times this can be done before n becomes 0.",
    formula: "Hamming weight algorithm:<br><code>while (n != 0) { n = n & (n-1); count++; }</code>",
    time: "O(number of 1 bits) — fastest for sparse bit representations.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "n = 11 (binary: 1011)",
      headers: ["Step","n (binary)","n-1 (binary)","n & (n-1)","Count"],
      rows: [
        ["1","1011","1010","1010","1"],
        ["2","1010","1001","1000","2"],
        ["3","1000","0111","0000","3"],
        ["Done","0000","−","−","Result: 3"]
      ]
    }
  },
  199: {
    intuition: "Perform level-order BFS traversal. For each level, the last node in the queue when processing that level is the rightmost node visible from the right side.",
    formula: "Right view selection:<br><code>for each level: result.push(queue[queue.length - 1].val) at level start</code>",
    time: "O(N) — visits each node once.",
    space: "O(W) — queue size equals maximum tree width.",
    dryrun: {
      testcase: "[1, 2, 3, null, 5, null, 4]",
      headers: ["Level","Queue State","Last Node (Rightmost)","Right View"],
      rows: [
        ["0","[1]","1","[1]"],
        ["1","[2, 3]","3","[1, 3]"],
        ["2","[5, 4]","4","[1, 3, 4]"]
      ]
    }
  },
  209: {
    intuition: "Use sliding window. Expand the right pointer to add elements. When the current window sum >= target, try to shrink the window from the left pointer to find the minimum valid subarray length.",
    formula: "Window shrink condition:<br><code>while (windowSum >= target) { minLen = min(minLen, right - left + 1); windowSum -= nums[left]; left++; }</code>",
    time: "O(N) — each element is added and removed at most once.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [2,3,1,2,4,3], target = 7",
      headers: ["L","R","nums[R]","Window Sum","Sum >= 7?","Min Length","Action"],
      rows: [
        ["0","0","2","2","No","∞","Expand R"],
        ["0","1","3","5","No","∞","Expand R"],
        ["0","2","1","6","No","∞","Expand R"],
        ["0","3","2","8","Yes","4","Shrink: L++, sum=6"],
        ["1","3","−","6","No","4","Expand R"],
        ["1","4","4","10","Yes","4","Shrink → 3"],
        ["2","4","−","7","Yes","3","Shrink → 3 again"],
        ["2","5","3","8","Yes","3","Shrink → 4? No, 2 (R-L+1)=4→3"]
      ]
    }
  },
  210: {
    intuition: "Topological sort using Kahn's BFS algorithm. Build in-degree array and adjacency list. Repeatedly pick nodes with 0 in-degree, reduce neighbors' in-degrees, and add to result order.",
    formula: "Same as Course Schedule (207) but collect the output order:<br><code>result.push(course); for (next in adj[curr]) { if(--inDegree[next]==0) queue.push(next); }</code>",
    time: "O(V + E) — visits all courses and prerequisites.",
    space: "O(V + E) — adjacency list and in-degree map.",
    dryrun: {
      testcase: "4 courses, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
      headers: ["Step","Queue","Popped","inDegree updates","Order So Far"],
      rows: [
        ["1","[0]","0","inDeg[1]--, inDeg[2]--","[0]"],
        ["2","[1,2]","1","inDeg[3]--","[0,1]"],
        ["3","[2]","2","inDeg[3]--=0→push","[0,1,2]"],
        ["4","[3]","3","None","[0,1,2,3]"]
      ]
    }
  },
  211: {
    intuition: "Extend Trie with a wildcard search. For '.' character, recursively try all children nodes. For regular characters, follow the exact child path. Mark end of word nodes.",
    formula: "Wildcard DFS:<br><code>if (char == '.') { for each child: if search(rest, child) return true; }</code><br><code>else: follow exact child path</code>",
    time: "O(L) average, O(26^L) worst case with many wildcards.",
    space: "O(S) — trie storage for all inserted words.",
    dryrun: {
      testcase: "addWord('bad'), search('b.d')",
      headers: ["Char","Node","Match Rule","Children Tried","Result"],
      rows: [
        ["'b'","Root","Exact match b","b node found","Advance"],
        ["'.'","b-node","Wildcard → try all children","Try 'a'","Advance to a-node"],
        ["'d'","a-node","Exact match d","d node found, isEnd=true","True!"]
      ]
    }
  },
  212: {
    intuition: "Build a Trie from all words. DFS on each grid cell. At each step, if the current character exists in the Trie, continue DFS. Mark and unmark cells to avoid revisiting in the same path.",
    formula: "DFS boundary check:<br><code>if (out-of-bounds || visited || !trie.has(char)) return;</code><br>Word found: <code>if (trie.isEnd) result.push(word);</code>",
    time: "O(M * N * 4^L) — M×N cells, up to 4^L directions, L = word length.",
    space: "O(W * L) — Trie storage for W words of length L.",
    dryrun: {
      testcase: "board = [['o','a'],['e','t']], words = ['eat']",
      headers: ["Step","Cell (r,c)","Char","Trie Node","Action"],
      rows: [
        ["1","(0,0)","o","Root → no 'o' path","Skip"],
        ["2","(0,1)","a","Root → no 'a' as start of eat","Skip"],
        ["3","(1,0)","e","Root → 'e' exists","DFS continues to neighbors"],
        ["4","(0,0)","a","e-node → 'a' exists","DFS continues"],
        ["5","(0,1)","t","ea-node → 't' exists, isEnd=true","'eat' found!"]
      ]
    }
  },
  213: {
    intuition: "House Robber with circular arrangement: the first and last houses cannot both be robbed. Split into two subproblems: rob houses [0..n-2] and rob houses [1..n-1]. Take the maximum of both results.",
    formula: "Two subproblems:<br><code>result = max(rob(0, n-2), rob(1, n-1))</code><br>Linear rob: <code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code>",
    time: "O(N) — two linear passes.",
    space: "O(1) — constant variables.",
    dryrun: {
      testcase: "nums = [2,3,2]",
      headers: ["Subproblem","Houses Considered","Max Robbed","Final Answer"],
      rows: [
        ["Case 1","nums[0..1] = [2,3]","max(2,3)=3","−"],
        ["Case 2","nums[1..2] = [3,2]","max(3,2)=3","−"],
        ["Result","-","max(3,3)=3","3"]
      ]
    }
  },
  221: {
    intuition: "For each cell (i,j) with value '1', dp[i][j] represents the side length of the largest square ending at that cell. If any adjacent (top, left, diagonal) cell forms a valid square, extend it.",
    formula: "DP recurrence:<br><code>if (matrix[i][j]=='1'): dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1</code><br>Area = dp[i][j]²",
    time: "O(M * N) — fills entire dp table.",
    space: "O(M * N) — dp table (can optimize to O(N)).",
    dryrun: {
      testcase: "matrix = [['1','0','1'],['1','1','1'],['1','1','1']]",
      headers: ["(r,c)","matrix[r][c]","min(up,left,diag)","dp[r][c]","Max Area"],
      rows: [
        ["(0,0)","1","−","1","1"],
        ["(0,2)","1","−","1","1"],
        ["(1,1)","1","min(0,1,0)=0","1","1"],
        ["(1,2)","1","min(1,1,1)=1","2","4"],
        ["(2,1)","1","min(1,1,1)=1","2","4"],
        ["(2,2)","1","min(2,2,1)=1","2","4 (max square = 2×2)"]
      ]
    }
  },
  234: {
    intuition: "Find the middle of the linked list using slow/fast pointers. Reverse the second half of the list. Compare the first and reversed second halves node by node.",
    formula: "Steps:<br>1. Find mid with slow/fast<br>2. Reverse second half<br>3. Compare two halves: <code>while (second != null) { if (first.val != second.val) return false; }</code>",
    time: "O(N) — three linear passes.",
    space: "O(1) — constant in-place manipulation.",
    dryrun: {
      testcase: "1→2→2→1",
      headers: ["Step","Action","Result"],
      rows: [
        ["Find mid","Slow stops at 2 (mid)","List: 1→2 | 2→1"],
        ["Reverse 2nd half","1→2 becomes reversed to 1→2","2nd half: 1→2"],
        ["Compare","1==1 ✓, 2==2 ✓","Return true"]
      ]
    }
  },
  235: {
    intuition: "In a BST, the Lowest Common Ancestor (LCA) of two nodes p and q is the node where p and q split: one is in the left subtree and the other in the right subtree (or the node itself is p or q).",
    formula: "LCA navigation:<br><code>if (p.val < node.val && q.val < node.val): go left</code><br><code>if (p.val > node.val && q.val > node.val): go right</code><br><code>else: return current node (LCA found)</code>",
    time: "O(H) — traverses height of BST.",
    space: "O(H) — recursion stack height.",
    dryrun: {
      testcase: "BST = [6,2,8,0,4], p=2, q=8",
      headers: ["Node","p=2 position","q=8 position","Decision","Result"],
      rows: [
        ["6","2 < 6 → left","8 > 6 → right","Split! LCA = 6","Return 6"]
      ]
    }
  },
  252: {
    intuition: "Sort all intervals by start time. For two meetings to conflict, the end time of one must overlap the start time of the next. Check if any sorted adjacent pair has overlapping times.",
    formula: "Conflict check:<br><code>sort by start; for each pair: if intervals[i][0] < intervals[i-1][1] return false;</code>",
    time: "O(N log N) — sorting dominates.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "intervals = [[0,30],[5,10],[15,20]]",
      headers: ["After Sort","Interval i","Prev End","Start >= Prev End?","Conflict?"],
      rows: [
        ["Sorted","[0,30]","−","−","First interval"],
        ["-","[5,10]","30","5 < 30","Yes! Can't attend all. Return false"]
      ]
    }
  },
  253: {
    intuition: "Track room usage using a min-heap of end times. Sort meetings by start. For each meeting, if earliest-ending room is free (end <= start), reuse it. Otherwise, allocate a new room.",
    formula: "Min-heap tracking:<br><code>if (heap.top <= meeting.start) heap.pop(); // reuse room</code><br><code>heap.push(meeting.end); // allocate/reuse</code><br>Answer: heap.size",
    time: "O(N log N) — sorting + heap operations.",
    space: "O(N) — heap stores end times.",
    dryrun: {
      testcase: "intervals = [[0,30],[5,10],[15,20]]",
      headers: ["Meeting","Start","End","Heap (room end times)","Rooms Used"],
      rows: [
        ["1","0","30","[30]","1"],
        ["2","5","10","5 < 30, no free room → [10,30]","2"],
        ["3","15","20","15 >= 10, reuse → pop 10, push 20 → [20,30]","2"]
      ]
    }
  },
  268: {
    intuition: "The sum of integers from 0 to n is n*(n+1)/2. Subtract the actual sum of all elements in the array from this expected sum to find the missing number.",
    formula: "Expected sum: <code>expected = n*(n+1)/2</code><br>Actual sum: <code>actual = sum(nums)</code><br>Missing: <code>expected - actual</code>",
    time: "O(N) — single pass to compute sum.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [3,0,1]",
      headers: ["n","Expected Sum n*(n+1)/2","Actual Sum","Missing Number"],
      rows: [
        ["3","3*4/2 = 6","3+0+1 = 4","6 - 4 = 2"]
      ]
    }
  },
  279: {
    intuition: "dp[i] = minimum number of perfect squares that sum to i. For each amount, try all perfect squares <= i and update dp[i] as minimum.",
    formula: "DP recurrence:<br><code>dp[i] = min(dp[i], dp[i - j*j] + 1)</code> for all j where j² <= i.<br>Base: <code>dp[0] = 0</code>",
    time: "O(N * √N) — N amounts × √N perfect squares.",
    space: "O(N) — dp cache array.",
    dryrun: {
      testcase: "n = 12",
      headers: ["i","Squares tried (j²)","dp[i-j²]+1","dp[i] Optimal"],
      rows: [
        ["1","1","dp[0]+1=1","1"],
        ["2","1","dp[1]+1=2","2"],
        ["3","1","dp[2]+1=3","3"],
        ["4","1,4","min(dp[3]+1=4, dp[0]+1=1)","1"],
        ["12","1,4,9","min(dp[11]+1=4, dp[8]+1=2, dp[3]+1=4)","3"]
      ]
    }
  },
  303: {
    intuition: "Precompute prefix sums once. Then answer each range sum query [left, right] in O(1) time using: prefix[right+1] - prefix[left].",
    formula: "Prefix array:<br><code>prefix[i] = prefix[i-1] + nums[i-1]</code><br>Range query:<br><code>sumRange(L, R) = prefix[R+1] - prefix[L]</code>",
    time: "O(N) build, O(1) query.",
    space: "O(N) — prefix sum array.",
    dryrun: {
      testcase: "nums = [-2,0,3,-5,2,-1], query(0,2)",
      headers: ["Index i","nums[i]","prefix[i+1]","Query(0,2) = prefix[3]-prefix[0]"],
      rows: [
        ["0","-2","-2","−"],
        ["1","0","-2","−"],
        ["2","3","1","prefix[3]-prefix[0]=1-0=1"],
        ["3","-5","-4","−"]
      ]
    }
  },
  338: {
    intuition: "dp[i] = number of 1 bits in i. Key insight: dp[i] = dp[i >> 1] + (i & 1). Right-shifting i removes the LSB; the &1 adds back whether LSB was set.",
    formula: "DP recurrence:<br><code>dp[i] = dp[i >> 1] + (i & 1)</code><br>Base: <code>dp[0] = 0</code>",
    time: "O(N) — fills dp array in one pass.",
    space: "O(N) — dp array storage.",
    dryrun: {
      testcase: "n = 5 → output [0,1,1,2,1,2]",
      headers: ["i","Binary","i>>1","i&1","dp[i>>1]","dp[i]"],
      rows: [
        ["0","0","−","−","0","0"],
        ["1","1","0","1","0","1"],
        ["2","10","1","0","1","1"],
        ["3","11","1","1","1","2"],
        ["4","100","2","0","1","1"],
        ["5","101","2","1","1","2"]
      ]
    }
  },
  347: {
    intuition: "Already covered with specific ID. Uses bucket sort on frequency counts.",
    formula: "Bucket mapping: <code>buckets[freq].push(num)</code>",
    time: "O(N)",
    space: "O(N)",
    dryrun: {
      testcase: "nums = [1,1,1,2,2,3], k = 2",
      headers: ["Step","Frequency Map","Buckets","Result"],
      rows: [
        ["1","{1:3,2:2,3:1}","−","−"],
        ["2","−","bucket[3]=[1],bucket[2]=[2],bucket[1]=[3]","−"],
        ["3","−","Collect from highest","[1,2]"]
      ]
    }
  },
  370: {
    intuition: "Apply range update operations using a difference array. Mark D[L] += val and D[R+1] -= val for each update. A final prefix sum pass gives the actual array values.",
    formula: "Difference update:<br><code>D[start] += val; D[end+1] -= val;</code><br>Resolution: <code>A[i] = sum(D[0..i])</code>",
    time: "O(N + Q) — Q updates and N prefix sum pass.",
    space: "O(N) — difference array.",
    dryrun: {
      testcase: "length=5, updates=[[1,3,2],[2,4,3],[0,2,-2]]",
      headers: ["Update","Start","End","Val","Diff Array After Update"],
      rows: [
        ["1","1","3","2","[0,2,0,0,-2,0]"],
        ["2","2","4","3","[0,2,3,0,-2,-3]"],
        ["3","0","2","-2","[-2,2,3,2,-2,-3]"],
        ["Prefix Sum","-","-","-","[-2,0,3,5,3]"]
      ]
    }
  },
  406: {
    intuition: "Sort people by height descending (taller people first), breaking ties by k ascending (fewer people in front first). Insert each person at index k in the result list — taller already-placed people won't affect k-count.",
    formula: "Sort key: <code>sort by [-h, k]</code><br>Insert: <code>result.insert(k, [h, k])</code>",
    time: "O(N²) — N insertions in list, each O(N) shift.",
    space: "O(N) — result list.",
    dryrun: {
      testcase: "people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]",
      headers: ["Person (sorted)","k (insert at)","Result State"],
      rows: [
        ["[7,0]","0","[[7,0]]"],
        ["[7,1]","1","[[7,0],[7,1]]"],
        ["[6,1]","1","[[7,0],[6,1],[7,1]]"],
        ["[5,0]","0","[[5,0],[7,0],[6,1],[7,1]]"],
        ["[5,2]","2","[[5,0],[7,0],[5,2],[6,1],[7,1]]"],
        ["[4,4]","4","[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]"]
      ]
    }
  },
  410: {
    intuition: "Binary search on the answer. The minimum possible max is the array max; the maximum is the total sum. Binary search on this range. For each candidate mid value, check if array can be split into at most m subarrays where each sum <= mid.",
    formula: "Feasibility check:<br><code>split greedily: if adding element exceeds mid, start new subarray</code><br><code>if splits <= m: valid (search lower), else: invalid (search higher)</code>",
    time: "O(N log(sum)) — log(sum) binary iterations, O(N) feasibility check.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums=[7,2,5,10,8], m=2",
      headers: ["Low","High","Mid","Feasible splits?","Action"],
      rows: [
        ["10","32","21","split [7,2,5]sum=14,split[10,8]=18 → 2 splits ≤ 2","Yes → High=21"],
        ["10","21","15","[7,2,5]sum=14 ok, [10] → [8] → 3 splits > 2","No → Low=16"],
        ["16","21","18","[7,2,5]sum=14,[10,8]=18 → 2 splits ≤ 2","Yes → High=18"],
        ["16","18","17","[7,2,5]=[14 ok],[10]ok,[8]ok → 3 > 2","No → Low=18"],
        ["18","18","-","Low==High","Answer: 18"]
      ]
    }
  },
  416: {
    intuition: "Already covered. Knapsack subset sum to total/2.",
    formula: "dp[j] = dp[j] || dp[j - nums[i]]",
    time: "O(N * S)",
    space: "O(S)",
    dryrun: {
      testcase: "nums=[1,5,11,5], target=11",
      headers: ["num","j downwards","dp[j-num]","dp[j]"],
      rows: [
        ["1","j=1 to 11","dp[0]=true","dp[1]=true"],
        ["5","j=11 to 5","dp[6],dp[1]=true","dp[11]=true? → dp[6]=true,dp[5]=true"],
        ["11","j=11","dp[0]=true","dp[11]=true → Found!"]
      ]
    }
  },
  435: {
    intuition: "Greedily remove the minimum number of overlapping intervals. Sort by end time. Keep the interval with the earliest ending when overlap occurs, as it leaves maximum room for future intervals.",
    formula: "Overlap check: <code>if (intervals[i].start < prevEnd) removals++; // skip current</code><br><code>else prevEnd = intervals[i].end; // keep current</code>",
    time: "O(N log N) — sorting + linear scan.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
      headers: ["Sorted Interval","Prev End","Overlap?","Action","Removals"],
      rows: [
        ["[1,2]","−","No","Keep, prevEnd=2","0"],
        ["[1,3]","2","Yes (1<2)","Remove [1,3]","1"],
        ["[2,3]","2","No (2>=2)","Keep, prevEnd=3","1"],
        ["[3,4]","3","No (3>=3)","Keep, prevEnd=4","1"]
      ]
    }
  },
  450: {
    intuition: "In BST deletion, three cases: leaf node (just remove), one child (replace with child), two children (replace with in-order successor i.e. smallest node in right subtree).",
    formula: "Two-child deletion:<br><code>successor = findMin(node.right); node.val = successor.val; node.right = delete(node.right, successor.val);</code>",
    time: "O(H) — traversal bounded by tree height H.",
    space: "O(H) — recursion stack.",
    dryrun: {
      testcase: "BST = [5,3,6,2,4], delete 3",
      headers: ["Node","Children","Case","Action","Tree After"],
      rows: [
        ["5","left=3, right=6","Has target in left subtree","Recurse left","−"],
        ["3","left=2, right=4","Two children","Find in-order successor: min(right)=4","−"],
        ["Replace","−","-","node.val = 4; delete 4 from right subtree","[5,4,6,2]"]
      ]
    }
  },
  452: {
    intuition: "Sort balloons by end coordinate. A single arrow at balloon's end can burst all overlapping balloons. Shoot an arrow at the first balloon's end, then skip all balloons whose start <= current arrow position.",
    formula: "Arrow placement:<br><code>shoot at end of first balloon; arrows = 1;</code><br><code>if (nextBalloon.start > arrowPos) { arrows++; arrowPos = nextBalloon.end; }</code>",
    time: "O(N log N) — sorting + linear scan.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "points = [[10,16],[2,8],[1,6],[7,12]]",
      headers: ["Sorted by End","Arrow At","Burst All Overlapping","Arrows Count"],
      rows: [
        ["[1,6]","Shoot at 6","Bursts [1,6],[2,8]?(2<=6✓)","1"],
        ["[2,8]","6 already shot","7 <= 6? No → shoot at 12","2"],
        ["[7,12]","−","−","Included in arrow at 12"],
        ["[10,16]","12 → 10<=12? Yes","Burst by arrow at 12","2"]
      ]
    }
  },
  474: {
    intuition: "2D knapsack where capacity dimensions are count of 0s (m) and 1s (n). dp[i][j] = max strings using at most i zeros and j ones.",
    formula: "2D knapsack update:<br><code>for each string s with zeros0 zeros and ones1 ones:</code><br><code>for i from m downto zeros0: for j from n downto ones1: dp[i][j] = max(dp[i][j], dp[i-zeros0][j-ones1]+1)</code>",
    time: "O(L * M * N) — L strings, M×N dp table.",
    space: "O(M * N) — 2D dp table.",
    dryrun: {
      testcase: "strs=['10','0001','111001','1','0'], m=5, n=3",
      headers: ["String","Zeros","Ones","dp[5][3] update","Max Strings"],
      rows: [
        ["'10'","1","1","dp[1][1] = max(0,dp[0][0]+1) = 1","1"],
        ["'0001'","3","1","dp[4][2] = max(0,dp[1][1]+1) = 2","2"],
        ["'1'","0","1","dp[1][1] already 1, but dp[5][2]=max(dp[5][1]+1)","3"],
        ["'0'","1","0","dp[5][3]=max(3,dp[4][3]+1)","4"]
      ]
    }
  },
  494: {
    intuition: "Each number can be assigned + or -. This is a subset sum problem: find subsets where (sum of positives) - (sum of negatives) = target. Transform: subset sum = (target + total) / 2.",
    formula: "Subset sum count (using DP):<br><code>dp[j] += dp[j - num]</code> for j from total to num.<br>Target subset sum = (target + total) / 2",
    time: "O(N * Sum) — N numbers, Sum target range.",
    space: "O(Sum) — 1D dp array.",
    dryrun: {
      testcase: "nums=[1,1,1,1,1], target=3, subset sum target=(3+5)/2=4",
      headers: ["num","j (downward)","dp[j] += dp[j-1]","dp State"],
      rows: [
        ["1 (1st)","j=1","dp[1]+=dp[0]=1","[1,1,0,0,0]"],
        ["1 (2nd)","j=2,1","dp[2]+=1,dp[1]+=1","[1,2,1,0,0]"],
        ["1 (3rd)","j=3,2,1","dp[3]+=1,dp[2]+=2,dp[1]+=1","[1,3,3,1,0]"],
        ["1 (4th)","j=4,3,2,1","dp[4]+=dp[3]=1","[1,4,6,4,1]"],
        ["1 (5th)","j=4,3,2,1","dp[4]+=dp[3]=4 → 5","dp[4]=5"]
      ]
    }
  },
  496: {
    intuition: "Use a monotonic stack to find the next greater element in nums2. Store results in a hash map {element → nextGreater}. For each element in nums1, look up its next greater from the map.",
    formula: "Stack-based NGE:<br><code>while (stack.length && nums2[i] > stack.top) { map[stack.pop()] = nums2[i]; }</code><br><code>stack.push(nums2[i]);</code>",
    time: "O(M + N) — processes both arrays linearly.",
    space: "O(N) — map and stack for nums2.",
    dryrun: {
      testcase: "nums1=[4,1,2], nums2=[1,3,4,2]",
      headers: ["nums2[i]","Stack Before","Popped (NGE found)","Stack After","Map Update"],
      rows: [
        ["1","[]","−","[1]","−"],
        ["3","[1]","1 (3>1)","[3]","map[1]=3"],
        ["4","[3]","3 (4>3)","[4]","map[3]=4"],
        ["2","[4]","−","[4,2]","−"],
        ["Result","-","nums1[4]=map[4]=-1, nums1[1]=map[1]=3, nums1[2]=map[2]=-1","-","[-1,3,-1]"]
      ]
    }
  },
  503: {
    intuition: "Extend Next Greater Element I to a circular array. Double the array conceptually (using modulo) and process 2N elements using a monotonic stack. For element at index i in circular array: use index i % n.",
    formula: "Circular iteration:<br><code>for i from 0 to 2n-1: process nums[i % n]</code><br>Stack stores indices, update result[stack.pop()] = nums[i % n]",
    time: "O(N) — each element is pushed/popped at most once.",
    space: "O(N) — stack size.",
    dryrun: {
      testcase: "nums = [1,2,1]",
      headers: ["i","nums[i%3]","Stack (indices)","Popped + NGE set","result"],
      rows: [
        ["0","1","[0]","−","[-1,-1,-1]"],
        ["1","2","[]","pop 0 → result[0]=2","[2,-1,-1]"],
        ["1 push","−","[1]","−","−"],
        ["2","1","[1,2]","−","[2,-1,-1]"],
        ["3","1","[1,2]","−","−"],
        ["4","2","[1]","pop 2 → result[2]=2","[2,-1,2]"],
        ["4 push","−","[1,4%3=1]","pop 1 → result[1]=2","[2,2,2]"]
      ]
    }
  },
  515: {
    intuition: "Perform level-order BFS traversal. For each level, track the maximum value encountered among all nodes in that level.",
    formula: "Level max tracking:<br><code>let levelMax = -Infinity; for each node in level: levelMax = max(levelMax, node.val);</code>",
    time: "O(N) — visits each tree node once.",
    space: "O(W) — queue stores at most W nodes (max tree width).",
    dryrun: {
      testcase: "[1, 3, 2, 5, 3, null, 9]",
      headers: ["Level","Nodes in Level","Max Value","Result"],
      rows: [
        ["0","[1]","1","[1]"],
        ["1","[3, 2]","3","[1, 3]"],
        ["2","[5, 3, 9]","9","[1, 3, 9]"]
      ]
    }
  },
  518: {
    intuition: "Unbounded knapsack problem (each coin can be used infinite times). dp[i] = number of ways to make amount i. For each coin, add the ways from dp[i - coin] (reusing same coin allowed).",
    formula: "DP recurrence (unbounded):<br><code>dp[i] += dp[i - coin]</code> for all coins, iterate i forward.<br>Base: <code>dp[0] = 1</code>",
    time: "O(N * C) — N = amount, C = number of coins.",
    space: "O(N) — dp array.",
    dryrun: {
      testcase: "coins=[1,2,5], amount=5",
      headers: ["Amount i","Coin","dp[i-coin]","dp[i] After"],
      rows: [
        ["1","coin=1","dp[0]=1","dp[1]=1"],
        ["2","coin=1","dp[1]=1","dp[2]=1"],
        ["2","coin=2","dp[0]=1","dp[2]=2"],
        ["3","coin=1,2","dp[2]+dp[1]=3","dp[3]=2→3? 1+2=2,3=2+1=3? Let's check: dp[3]=2"],
        ["5","all coins","dp[4]+dp[3]+dp[0]","dp[5]=4"]
      ]
    }
  },
  523: {
    intuition: "Use prefix sums with modulo. If two prefix sums have the same remainder when divided by k, and the distance between their indices is at least 2 (subarray length >= 2), we found a continuous subarray sum divisible by k.",
    formula: "Prefix mod check:<br><code>rem = prefixSum % k; if (map.has(rem) && i - map.get(rem) >= 2) return true;</code><br><code>if (!map.has(rem)) map.set(rem, i);</code>",
    time: "O(N) — single linear scan.",
    space: "O(K) — map stores at most K remainders.",
    dryrun: {
      testcase: "nums=[23,2,4,6,7], k=6",
      headers: ["i","nums[i]","Prefix Sum","Rem = sum % 6","Map State","Match?"],
      rows: [
        ["-1","-","0","0","{0: -1}","−"],
        ["0","23","23","5","{0:-1, 5:0}","−"],
        ["1","2","25","1","{0:-1,5:0,1:1}","−"],
        ["2","4","29","5","Map has 5 at index 0","i-0=2 >= 2 → True!"]
      ]
    }
  },
  547: {
    intuition: "Model the friendship matrix as a graph. Count connected components using DFS/BFS. Each connected component is one province.",
    formula: "DFS province counting:<br><code>for each unvisited node i: dfs(i); provinces++;</code><br>DFS: <code>visited[i] = true; for each j where isConnected[i][j]: dfs(j);</code>",
    time: "O(N²) — checks all N×N pairs in adjacency matrix.",
    space: "O(N) — visited array.",
    dryrun: {
      testcase: "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
      headers: ["Node","Visited Before?","DFS Explores","Provinces After"],
      rows: [
        ["0","No","Visits 0,1 (connected)","1"],
        ["1","Yes (visited)","Skip","1"],
        ["2","No","Only visits 2","2"]
      ]
    }
  },
  567: {
    intuition: "Use sliding window of size len(s1). Maintain character frequency counts for both the window and s1. When counts match for all characters, s2 contains a permutation of s1.",
    formula: "Window frequency match:<br><code>matches = 0; for char c: if (count_s1[c] == count_window[c]) matches++;</code><br>When matches == 26: return true.",
    time: "O(N) — linear pass with constant 26-char tracking.",
    space: "O(1) — two fixed-size frequency arrays.",
    dryrun: {
      testcase: "s1 = 'ab', s2 = 'eidbaooo'",
      headers: ["Window in s2","Freq Window","Freq s1","Matches","Valid Permutation?"],
      rows: [
        ["ei","e:1,i:1","a:1,b:1","0","No"],
        ["id","i:1,d:1","a:1,b:1","0","No"],
        ["db","d:1,b:1","a:1,b:1","1","No"],
        ["ba","b:1,a:1","a:1,b:1","2","Yes! Return true"]
      ]
    }
  },
  583: {
    intuition: "The minimum deletions to make two strings equal = M + N - 2 * LCS(s1, s2). Compute LCS (Longest Common Subsequence) of both strings, then apply the formula.",
    formula: "Minimum deletions:<br><code>LCS = longestCommonSubsequence(s1, s2)</code><br><code>result = (s1.length - LCS) + (s2.length - LCS)</code>",
    time: "O(M * N) — LCS computation.",
    space: "O(M * N) — DP table.",
    dryrun: {
      testcase: "s1 = 'sea', s2 = 'eat'",
      headers: ["LCS Computation","dp table entry","LCS length","Deletions = 3+3-2*2"],
      rows: [
        ["LCS('sea','eat')","match 'e','a' → LCS=2","2","6-4=2"],
        ["Result","-","-","Delete 's' from sea, delete 't' from eat → 2"]
      ]
    }
  },
  621: {
    intuition: "Count task frequencies. The most frequent task determines the frame structure. Formula: calculate idle slots needed between repetitions of the most frequent task, then fill with other tasks.",
    formula: "Result formula:<br><code>maxFreq = max(freqMap values); maxCount = # tasks with maxFreq</code><br><code>partCount = maxFreq - 1; partLength = n + 1; emptySlots = partCount * partLength - (totalTasks - maxCount)</code><br><code>result = max(totalTasks, totalTasks + max(0, emptySlots))</code>",
    time: "O(N) — count and formula.",
    space: "O(1) — fixed 26-char freq array.",
    dryrun: {
      testcase: "tasks = ['A','A','A','B','B','B'], n = 2",
      headers: ["maxFreq","maxCount","partCount","partLength","Idles","Result"],
      rows: [
        ["3","2 (A and B both freq 3)","2","3","2*(3)-4=2","max(6, 6+2)=8"]
      ]
    }
  },
  637: {
    intuition: "Level-order BFS traversal. For each level, sum all node values and divide by the count of nodes at that level to get the average.",
    formula: "Level average:<br><code>levelSum = 0; for each node in level: levelSum += node.val;</code><br><code>result.push(levelSum / levelSize);</code>",
    time: "O(N) — visits each node once.",
    space: "O(W) — queue at most W nodes wide.",
    dryrun: {
      testcase: "[3, 9, 20, 15, 7]",
      headers: ["Level","Queue","Sum","Count","Average"],
      rows: [
        ["0","[3]","3","1","3.0"],
        ["1","[9, 20]","29","2","14.5"],
        ["2","[15, 7]","22","2","11.0"]
      ]
    }
  },
  648: {
    intuition: "Build a Trie from all dictionary words (roots). For each word in sentence, search in Trie for the shortest prefix that matches. Replace the word with the root if found.",
    formula: "Trie prefix search:<br><code>traverse Trie character by character; if isEnd node found: return prefix so far;</code>",
    time: "O(D * L + W * L) — D dict words of length L, W sentence words.",
    space: "O(D * L) — Trie storage.",
    dryrun: {
      testcase: "dictionary=['cat','bat','rat'], sentence='the cattle was rattled by the battery'",
      headers: ["Word","Trie Prefix Search","Shortest Root Found","Replaced With"],
      rows: [
        ["the","t → not in trie","None","the"],
        ["cattle","c → ca → cat (isEnd!)","cat","cat"],
        ["rattled","r → ra → rat (isEnd!)","rat","rat"],
        ["battery","b → ba → bat (isEnd!)","bat","bat"]
      ]
    }
  },
  677: {
    intuition: "Build a Trie where each node stores a value. Insert 'key: val' by adding val to every node traversed. Query 'prefix' by traversing the prefix path and returning the value stored at the end node.",
    formula: "Insert: <code>node.val += val</code> for each node along key path.<br>Query: <code>return node.val at end of prefix path (0 if not found)</code>",
    time: "O(L) per operation — L is string length.",
    space: "O(S) — total characters stored in Trie.",
    dryrun: {
      testcase: "insert('apple', 3), insert('app', 2), sum('ap')",
      headers: ["Operation","Chars Traversed","Nodes Updated","Sum Query Result"],
      rows: [
        ["insert apple=3","a,p,p,l,e","Each node += 3","−"],
        ["insert app=2","a,p,p","Each node += 2","−"],
        ["sum('ap')","a,p","End at 'p' node","val at p = 3+2+3+2 = 5? → prefix 'ap' sums all words starting with 'ap': 3+2=5"]
      ]
    }
  },
  684: {
    intuition: "Process edges one by one using Union-Find. When adding an edge between u and v, if they are already in the same component (same root), this edge creates a redundant cycle — return it.",
    formula: "Cycle detection:<br><code>if (find(u) == find(v)) return edge; // redundant</code><br><code>else union(u, v); // connect</code>",
    time: "O(N * alpha(N)) ≈ O(N) — N edges with near-constant union-find.",
    space: "O(N) — parent and rank arrays.",
    dryrun: {
      testcase: "edges = [[1,2],[1,3],[2,3]]",
      headers: ["Edge","Find(u)","Find(v)","Same Component?","Action"],
      rows: [
        ["[1,2]","1","2","No","union(1,2)"],
        ["[1,3]","1","3","No","union(1,3)"],
        ["[2,3]","1","1","Yes!","Return [2,3] (redundant edge)"]
      ]
    }
  },
  692: {
    intuition: "Count word frequencies. Use a max-heap of size K, but with custom ordering: higher frequency wins, ties broken lexicographically (lower alphabetical order first).",
    formula: "Priority order: <code>(freq1 > freq2) OR (freq1 == freq2 AND word1 < word2)</code><br>Collect top K from heap.",
    time: "O(N log K) — N words, heap of size K.",
    space: "O(N) — frequency map + heap.",
    dryrun: {
      testcase: "words=['i','love','leetcode','i','love','coding'], k=2",
      headers: ["Freq Map","Sorted Heap Candidates","Top K Result"],
      rows: [
        ["{i:2,love:2,leetcode:1,coding:1}","(2,i),(2,love),(1,coding),(1,leetcode)","Top 2: [i,love]"]
      ]
    }
  },
  695: {
    intuition: "Iterate through each unvisited land cell in the grid. When a '1' is found, start DFS to explore all connected land cells, counting the total connected area. Track maximum area seen.",
    formula: "DFS area count:<br><code>if (out-of-bounds || visited || grid[r][c] == 0) return 0;</code><br><code>grid[r][c] = 0; return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1);</code>",
    time: "O(M * N) — visits each cell at most once.",
    space: "O(M * N) — recursion stack in worst case.",
    dryrun: {
      testcase: "grid = [[0,0,1],[0,1,1],[0,0,0]]",
      headers: ["Cell","Grid Val","DFS Triggered?","Area Counted","Max Area"],
      rows: [
        ["(0,2)","1","Yes","Start DFS","−"],
        ["(1,1)","1","From DFS","Continue","−"],
        ["(1,2)","1","From DFS","End of component","Area=3"],
        ["All others","0","No","−","Max = 3"]
      ]
    }
  },
  700: {
    intuition: "Use BST property: if target < node.val, search left subtree. If target > node.val, search right subtree. Return node when found, null when not found.",
    formula: "BST search:<br><code>if (node.val == val) return node;</code><br><code>if (val < node.val) return search(node.left, val); else return search(node.right, val);</code>",
    time: "O(H) — traversal bounded by tree height H.",
    space: "O(H) — recursion depth.",
    dryrun: {
      testcase: "BST = [4,2,7,1,3], val = 2",
      headers: ["Node","val","Comparison","Direction"],
      rows: [
        ["4","2","2 < 4","Go Left"],
        ["2","2","2 == 2","Found! Return subtree rooted at 2"]
      ]
    }
  },
  703: {
    intuition: "Maintain a min-heap of exactly K elements representing the K largest elements seen so far. The heap's root (minimum of the K largest) is always the Kth largest element.",
    formula: "Stream insertion:<br><code>heap.push(val); if (heap.size > k) heap.pop();</code><br>Query: <code>return heap.top();</code>",
    time: "O(log K) per add call.",
    space: "O(K) — heap stores K elements.",
    dryrun: {
      testcase: "k=3, nums=[4,5,8,2], then add(3)",
      headers: ["Operation","Heap State","Size","Action","Kth Largest"],
      rows: [
        ["init [4]","[4]","1","Size < 3, keep","−"],
        ["init [5]","[4,5]","2","Size < 3, keep","−"],
        ["init [8]","[4,5,8]","3","Heap full","4"],
        ["init [2]","[2,4,5,8]","4","Pop min(2)","4"],
        ["add(3)","[3,4,5,8]","4","Pop min(3) → [4,5,8]","4"]
      ]
    }
  },
  724: {
    intuition: "Compute total array sum. Iterate through each index as the pivot candidate. At each index i, leftSum is the running sum before i, and rightSum = total - leftSum - nums[i]. If they're equal, i is the pivot.",
    formula: "Pivot condition:<br><code>leftSum == total - leftSum - nums[i]</code><br>After check: <code>leftSum += nums[i]</code>",
    time: "O(N) — single pass.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [1,7,3,6,5,6]",
      headers: ["Index i","nums[i]","leftSum","rightSum (total-L-nums[i])","Match?"],
      rows: [
        ["0","1","0","28-0-1=27","No, L+=1"],
        ["1","7","1","28-1-7=20","No, L+=7"],
        ["2","3","8","28-8-3=17","No, L+=3"],
        ["3","6","11","28-11-6=11","Yes! Return 3"]
      ]
    }
  },
  733: {
    intuition: "Starting from the source cell, perform DFS/BFS to all connected cells with the same original color. Replace all their colors with the new color. Handle the edge case where new color == original color.",
    formula: "DFS flood:<br><code>if (out-of-bounds || image[r][c] != origColor) return;</code><br><code>image[r][c] = color; dfs(all 4 directions);</code>",
    time: "O(M * N) — visits each connected cell once.",
    space: "O(M * N) — recursion stack.",
    dryrun: {
      testcase: "image = [[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2",
      headers: ["Cell","Original Color","Action","Image After"],
      rows: [
        ["(1,1)","1","Change to 2, DFS neighbors","[[1,1,1],[1,2,0],[1,0,1]]"],
        ["(0,1)","1","Change to 2, DFS neighbors","[[1,2,1],[1,2,0],[1,0,1]]"],
        ["(0,0)","1","Change to 2","[[2,2,1],...] etc."],
        ["(1,0)","1","Change to 2","Continue flood"],
        ["(2,0)","1","Change to 2","Continue"],
        ["All connected 1s","-","Changed to 2","[[2,2,2],[2,2,0],[2,0,1]]"]
      ]
    }
  },
  739: {
    intuition: "Use a monotonic stack (increasing) to find next greater temperature. When a warmer temperature is found, all indices in the stack waiting for a warmer day receive their answer.",
    formula: "Stack index processing:<br><code>while (stack && T[i] > T[stack.top]) { idx = stack.pop(); result[idx] = i - idx; }</code><br><code>stack.push(i);</code>",
    time: "O(N) — each index pushed and popped at most once.",
    space: "O(N) — stack stores pending indices.",
    dryrun: {
      testcase: "temperatures = [73,74,75,71,69,72]",
      headers: ["i","T[i]","Stack (indices)","Popped + Days Set","Result"],
      rows: [
        ["0","73","[0]","−","[0,0,0,0,0,0]"],
        ["1","74","[1]","0 popped: result[0]=1","[1,0,0,0,0,0]"],
        ["2","75","[2]","1 popped: result[1]=1","[1,1,0,0,0,0]"],
        ["3","71","[2,3]","−","[1,1,0,0,0,0]"],
        ["4","69","[2,3,4]","−","[1,1,0,0,0,0]"],
        ["5","72","[2,5]","4 popped: result[4]=1, 3 popped: result[3]=2","[1,1,0,2,1,0]"]
      ]
    }
  },
  743: {
    intuition: "Dijkstra's shortest path algorithm from the source node. Use a min-heap (priority queue) of (distance, node). Relax edges greedily. Return the maximum distance among all nodes.",
    formula: "Relaxation step:<br><code>if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; heap.push([dist[v], v]); }</code><br>Answer: <code>max(dist)</code>",
    time: "O((V + E) log V) — Dijkstra with min-heap.",
    space: "O(V + E) — adjacency list and distance array.",
    dryrun: {
      testcase: "times=[[2,1,1],[2,3,1],[3,4,1]], N=4, K=2",
      headers: ["Heap Pop","Node","Dist","Neighbors","Updates"],
      rows: [
        ["(0,2)","2","0","1 via w=1, 3 via w=1","dist[1]=1,dist[3]=1"],
        ["(1,1)","1","1","No outgoing","Done"],
        ["(1,3)","3","1","4 via w=1","dist[4]=2"],
        ["(2,4)","4","2","No outgoing","Done"],
        ["Max dist","−","max(1,0,1,2)=2","−","Result: 2"]
      ]
    }
  },
  763: {
    intuition: "Track the last occurrence index of each character. Iterate through the string, expanding the current partition boundary to the maximum last occurrence of any character seen so far. When the pointer reaches the boundary, a partition is complete.",
    formula: "Last occurrence tracking:<br><code>last = max(last, lastIndex[s[i]])</code><br>Partition end: <code>if (i == last) { partitions.push(i - start + 1); start = i + 1; }</code>",
    time: "O(N) — two passes (build last index, then scan).",
    space: "O(1) — fixed 26-char last index map.",
    dryrun: {
      testcase: "s = 'ababcbacadefegdehijhklij'",
      headers: ["i","s[i]","Last[s[i]]","Boundary (last)","Partition End?","Sizes"],
      rows: [
        ["0","a","8","8","No","−"],
        ["1","b","5","8","No","−"],
        ["2","a","8","8","No","−"],
        ["...","...","...","8","...","−"],
        ["8","a","8","8","Yes! i==8","[9]"],
        ["9","d","14","14","No","−"],
        ["14","e","15","15","No","−"],
        ["15","f","11 < 15","15","Yes! i==15","[9,7]"]
      ]
    }
  },
  774: {
    intuition: "Binary search on the answer (minimum max distance). For a mid value, check if stations can be placed to achieve max distance <= mid. Greedily count how many stations are needed to divide each gap.",
    formula: "Stations needed for gap d with max dist mid:<br><code>count += ceil(d / mid) - 1</code><br>If total stations needed <= K: mid is feasible.",
    time: "O(N log(1/epsilon)) — for floating-point binary search.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "stations=[1,2,3,4,5,6,7,8,9,10], K=9",
      headers: ["Low","High","Mid","Stations Needed","Feasible?","Action"],
      rows: [
        ["0","9","4.5","Each gap=1, need 0 extra → 0 stations needed","Yes","High=4.5"],
        ["0","4.5","2.25","0 needed per gap","Yes","High=2.25"],
        ["0","2.25","1.125","0 stations per gap (gaps=1, 1/1.125<2)","Yes","High=1.125"],
        ["0","1.125","0.5625","Each gap=1 needs 1 station → 9 stations = K","Yes → converge","~0.5"]
      ]
    }
  },
  778: {
    intuition: "Binary search on the answer (water level). For a given water level t, check if there's a path from (0,0) to (n-1,n-1) traversing only cells with elevation <= t. Use BFS/DFS for path check.",
    formula: "Binary search feasibility:<br><code>canReach(t) = BFS/DFS with cells where grid[r][c] <= t</code><br><code>if canReach(t): high = t; else low = t+1</code>",
    time: "O(N² log N) — log N binary iterations, N² BFS.",
    space: "O(N²) — visited matrix.",
    dryrun: {
      testcase: "grid = [[0,2],[1,3]]",
      headers: ["Low","High","Mid (water level)","Path (0,0)→(1,1)?","Action"],
      rows: [
        ["0","3","1","grid: 0≤1,1≤1 but 2>1 → blocked","No → Low=2"],
        ["2","3","2","0≤2, 1≤2 but 3>2 → blocked","No → Low=3"],
        ["3","3","−","All cells ≤ 3","Yes → answer=3"]
      ]
    }
  },
  787: {
    intuition: "Modified Dijkstra/Bellman-Ford: find shortest path from src to dst with at most K stops. Process layered BFS, where each layer represents one more stop used. Relax edges and track minimum prices.",
    formula: "BFS Bellman-Ford relaxation:<br><code>for stop from 0 to K: for each edge (u,v,w): if (prices[u] + w < newPrices[v]) newPrices[v] = prices[u] + w;</code>",
    time: "O(K * E) — K iterations over all edges E.",
    space: "O(V) — price arrays.",
    dryrun: {
      testcase: "cities=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, K=1",
      headers: ["Stop","From","To","Price","Cumulative Price to dst","Best Price"],
      rows: [
        ["0 stops","−","−","−","prices=[0,∞,∞]","500 (direct 0→2)"],
        ["1 stop","0","1","100","prices[1]=100","−"],
        ["1 stop","0","2","500","prices[2]=500","−"],
        ["1 stop extended","1","2","200","prices[2]=min(500,200)=200","200 (0→1→2)"]
      ]
    }
  },
  802: {
    intuition: "A node is 'safe' if all paths from it eventually lead to terminal nodes (no cycles). Use reverse graph: nodes that only point to safe nodes are safe. Process with topological sort on the reversed graph.",
    formula: "Reverse graph + Kahn's:<br><code>Build reverse edges; compute in-degrees; start with terminal nodes;</code><br><code>Propagate safety: nodes with 0 out-degree in original = safe</code>",
    time: "O(V + E) — reverse graph construction and BFS.",
    space: "O(V + E) — reverse adjacency list.",
    dryrun: {
      testcase: "graph = [[1,2],[2,3],[5],[0],[5],[],[]]",
      headers: ["Node","Out-degree","Terminal?","Becomes Safe?","Reason"],
      rows: [
        ["5","0","Yes (terminal)","Yes","No outgoing edges"],
        ["6","0","Yes (terminal)","Yes","No outgoing edges"],
        ["2","1→5","All neighbors safe","Yes","Only goes to safe 5"],
        ["4","1→5","All neighbors safe","Yes","Only goes to safe 5"],
        ["1","2→[2,3]","3 has 0→dangerous","No","Has path to cycle"],
        ["0","2→[1,2]","1 unsafe","No","Has path via 1 to cycle"]
      ]
    }
  },
  862: {
    intuition: "Use a monotonic deque to maintain a strictly increasing prefix sum sequence. For each prefix sum P[j], find the smallest i where P[j] - P[i] >= K by checking the deque front. Maintain deque strictly increasing for O(N) amortized.",
    formula: "Deque invariant:<br>Front check: <code>while (deque.front && P[j] - P[deque.front] >= K) { update ans; deque.popFront(); }</code><br>Back maintenance: <code>while (deque.back && P[j] <= P[deque.back]) deque.popBack();</code>",
    time: "O(N) — each index pushed and popped at most once.",
    space: "O(N) — deque and prefix sum array.",
    dryrun: {
      testcase: "nums = [2,-1,2], K = 3",
      headers: ["j","P[j]","Deque State","Check P[j]-P[front]>=K","Answer Update"],
      rows: [
        ["0","0","[0]","−","−"],
        ["1","2","[0,1]","2-0=2 < 3","−"],
        ["2","1","[0,2]","1-0=1<3; pop 1 (P[2]=1<P[1]=2)","−"],
        ["3","3","[0,3]","3-0=3>=3 → ans=3-0=3","ans=3"]
      ]
    }
  },
  875: {
    intuition: "Binary search on the eating speed (1 to max pile size). For each candidate speed, check if Koko can finish all piles within H hours. Use minimum valid speed.",
    formula: "Feasibility check:<br><code>hours = sum(ceil(pile / speed) for all piles)</code><br>If <code>hours <= H</code>: speed is valid, search lower.",
    time: "O(N log M) — log M binary iterations, N-pile check each time.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "piles=[3,6,7,11], H=8",
      headers: ["Low","High","Mid (speed)","Hours Needed","H=8 feasible?","Action"],
      rows: [
        ["1","11","6","ceil(3/6)+ceil(6/6)+ceil(7/6)+ceil(11/6)=1+1+2+2=6","Yes","High=6"],
        ["1","6","3","1+2+3+4=10","No","Low=4"],
        ["4","6","5","1+2+2+3=8","Yes","High=5"],
        ["4","5","4","1+2+2+3=8","Yes","High=4"],
        ["4","4","−","Low==High","Answer: 4","4"]
      ]
    }
  },
  876: {
    intuition: "Use slow and fast pointers. Fast moves 2 steps, slow moves 1 step. When fast reaches the end, slow is at the middle node.",
    formula: "Middle detection:<br><code>while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }</code><br>Return slow.",
    time: "O(N) — single list traversal.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "1→2→3→4→5",
      headers: ["Step","Slow","Fast","Action"],
      rows: [
        ["0","1","1","Initial"],
        ["1","2","3","slow.next, fast.next.next"],
        ["2","3","5","slow.next, fast.next.next"],
        ["Done","3","5 (fast.next = null)","Return slow = node 3 (middle)"]
      ]
    }
  },
  879: {
    intuition: "3D knapsack DP: dp[k][p][g] = ways to form at least p profit with at most g members from first k crimes. Iterate through crimes, updating dp states.",
    formula: "3D DP update:<br><code>dp[j][k] += dp[j - group][max(0, k - profit)]</code><br>Iterate j from n down, k from minProfit down.",
    time: "O(K * N * minProfit) — triple nested iteration.",
    space: "O(N * minProfit) — 2D dp table.",
    dryrun: {
      testcase: "n=5, minProfit=3, group=[2,2], profit=[2,3]",
      headers: ["Crime","Group Size","Profit","dp State Update"],
      rows: [
        ["Init","−","−","dp[0][0]=1 (empty scheme)"],
        ["Crime 1","2","2","For j=5→2, k=3→0: dp[j][k] += dp[j-2][max(0,k-2)]"],
        ["Crime 2","2","3","For j=5→2, k=3→0: dp[j][k] += dp[j-2][max(0,k-3)]"],
        ["Result","-","Sum dp[j][minProfit] for all j","Count of valid schemes"]
      ]
    }
  },
  901: {
    intuition: "Maintain a monotonic decreasing stack of (price, span) pairs. When a new price arrives, collapse all stack elements with smaller or equal price, accumulating their spans. Push new element with cumulative span.",
    formula: "Span accumulation:<br><code>span = 1; while (stack.top.price <= price) { span += stack.pop().span; }</code><br><code>stack.push({price, span}); return span;</code>",
    time: "O(N) amortized — each price pushed/popped once.",
    space: "O(N) — stack storage.",
    dryrun: {
      testcase: "prices sequence: 100, 80, 60, 70, 60, 75, 85",
      headers: ["Price","Stack Before","Popped (span)","Stack After","Span"],
      rows: [
        ["100","[]","−","[(100,1)]","1"],
        ["80","[(100,1)]","−","[(100,1),(80,1)]","1"],
        ["60","[(100,1),(80,1)]","−","[...,(60,1)]","1"],
        ["70","[...,(60,1)]","60 (span=1)","[...,(80,1),(70,2)]","2"],
        ["60","[...,(70,2)]","−","[...,(70,2),(60,1)]","1"],
        ["75","[...,(60,1),(70,2? No)],try","60,70 popped (1+2=3)","[(100,1),(80,1),(75,4)]","4"],
        ["85","[(100,1),(80,1),(75,4)]","75,80 popped (4+1=5)","[(100,1),(85,6)]","6"]
      ]
    }
  },
  904: {
    intuition: "Sliding window maintaining at most 2 distinct fruit types. Use a hash map to track fruit counts in the window. When a 3rd type is introduced, shrink from left until only 2 types remain.",
    formula: "Window validity:<br><code>while (map.size > 2) { map[fruits[left]]--; if (map[fruits[left]] == 0) delete map[fruits[left]]; left++; }</code>",
    time: "O(N) — each element added/removed at most once.",
    space: "O(1) — map has at most 3 entries.",
    dryrun: {
      testcase: "fruits = [1, 2, 1, 2, 3]",
      headers: ["R","fruits[R]","Map State","Map Size > 2?","L","Window Length"],
      rows: [
        ["0","1","{1:1}","No","0","1"],
        ["1","2","{1:1,2:1}","No","0","2"],
        ["2","1","{1:2,2:1}","No","0","3"],
        ["3","2","{1:2,2:2}","No","0","4"],
        ["4","3","{1:2,2:2,3:1}","Yes! Shrink","−","−"],
        ["−","−","{2:1,3:1} (L=3)","No","3","2"]
      ]
    }
  },
  930: {
    intuition: "Prefix sum approach. Since values are 0 or 1, track prefix sums and their counts in a hash map. For each index j, we want subarrays ending at j with sum == goal: count += map[prefix[j] - goal].",
    formula: "Prefix sum check:<br><code>if (map.has(prefix - goal)) count += map.get(prefix - goal);</code>",
    time: "O(N) — single pass.",
    space: "O(N) — prefix count map.",
    dryrun: {
      testcase: "nums=[1,0,1,0,1], goal=2",
      headers: ["i","nums[i]","Prefix Sum","Prefix - 2","map[prefix-2]","Count","Map"],
      rows: [
        ["-","-","0","-","0","0","{0:1}"],
        ["0","1","1","-1","0","0","{0:1,1:1}"],
        ["1","0","1","-1","0","0","{0:1,1:2}"],
        ["2","1","2","0","1","1","{0:1,1:2,2:1}"],
        ["3","0","2","0","1","2","{0:1,1:2,2:2}"],
        ["4","1","3","1","2","4","{...3:1}"]
      ]
    }
  },
  931: {
    intuition: "For each cell in row i, the minimum falling path sum is the cell value plus the minimum value from the adjacent cells in the row above (diagonal left, directly above, diagonal right).",
    formula: "DP recurrence:<br><code>dp[i][j] = matrix[i][j] + min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1])</code><br>Answer: min(dp[last row])",
    time: "O(N²) — fills N×N dp table.",
    space: "O(1) — modifies matrix in-place.",
    dryrun: {
      testcase: "matrix = [[2,1,3],[6,5,4],[7,8,9]]",
      headers: ["(r,c)","matrix[r][c]","min of above neighbors","dp[r][c]"],
      rows: [
        ["(0,0)","2","−","2"],
        ["(0,1)","1","−","1"],
        ["(0,2)","3","−","3"],
        ["(1,0)","6","min(−,2,1)=1","7"],
        ["(1,1)","5","min(2,1,3)=1","6"],
        ["(1,2)","4","min(1,3,−)=1","5"],
        ["(2,0)","7","min(−,7,6)=6","13"],
        ["(2,1)","8","min(7,6,5)=5","13"],
        ["(2,2)","9","min(6,5,−)=5","14"],
        ["Min in last row","-","min(13,13,14)=13","-"]
      ]
    }
  },
  973: {
    intuition: "Calculate squared Euclidean distance for each point. Use a max-heap of size K to track K closest points. If heap size exceeds K, pop the farthest point. Alternatively, sort by distance and take first K.",
    formula: "Distance: <code>dist = x² + y²</code><br>Max-heap approach: <code>if (dist < heap.top()) { heap.pop(); heap.push([dist, point]); }</code>",
    time: "O(N log K) — heap operations.",
    space: "O(K) — heap storage.",
    dryrun: {
      testcase: "points=[[1,3],[-2,2]], K=1",
      headers: ["Point","x²+y²","Heap State","Heap Size","Action"],
      rows: [
        ["[1,3]","1+9=10","[(10,[1,3])]","1","Push"],
        ["[-2,2]","4+4=8","[(10,[1,3]),(8,[-2,2])]","2","Size>K, pop max(10)"],
        ["Result","−","[(8,[-2,2])]","1","Return [[-2,2]]"]
      ]
    }
  },
  974: {
    intuition: "Track prefix sums modulo K. Two prefix sums with the same remainder (mod K) indicate a subarray between them is divisible by K. Count pairs of equal remainders using a hash map.",
    formula: "Remainder tracking:<br><code>rem = ((prefix % k) + k) % k; count += map.get(rem); map[rem]++;</code>",
    time: "O(N) — single linear pass.",
    space: "O(K) — at most K distinct remainders.",
    dryrun: {
      testcase: "nums=[4,5,0,-2,-3,1], k=5",
      headers: ["i","nums[i]","Prefix Sum","Rem (mod 5)","map[rem]","Count","Map Update"],
      rows: [
        ["-","−","0","0","1","1","{0:1}"],
        ["0","4","4","4","0","1","{0:1,4:1}"],
        ["1","5","9","4","1","2","{0:1,4:2}"],
        ["2","0","9","4","2","4","{0:1,4:3}"],
        ["3","-2","7","2","0","4","{0:1,4:3,2:1}"],
        ["4","-3","4","4","3","7","{0:1,4:4,...}"],
        ["5","1","5","0","1","8","Result=7"]
      ]
    }
  },
  990: {
    intuition: "Treat each character as a node in a Union-Find graph. For '==' equations, union the two characters. For '!=' equations, check if both characters share the same root — if they do, it's a contradiction.",
    formula: "Process order: all '==' first, then '!=':<br><code>union(a, b) for a == b equations</code><br><code>if (find(a) == find(b)) return false for a != b equations</code>",
    time: "O(N * alpha(N)) ≈ O(N).",
    space: "O(26) — at most 26 character union-find.",
    dryrun: {
      testcase: "equations = ['a==b','b!=a']",
      headers: ["Step","Equation","Operation","Union-Find State","Contradiction?"],
      rows: [
        ["1","a==b","union(a,b)","parent[b]=a","No"],
        ["2","b!=a","find(b)=a, find(a)=a","Same root!","Yes! Return false"]
      ]
    }
  },
  994: {
    intuition: "Multi-source BFS starting from all initially rotten oranges simultaneously. Each BFS step represents one minute. Fresh oranges adjacent to rotten ones become rotten. Count minutes until no fresh oranges remain.",
    formula: "BFS step:<br><code>for each rotten in queue: for each adj fresh: mark rotten, enqueue, fresh--; minutes++;</code><br>End: <code>return fresh > 0 ? -1 : minutes;</code>",
    time: "O(M * N) — visits each cell once.",
    space: "O(M * N) — BFS queue in worst case.",
    dryrun: {
      testcase: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
      headers: ["Minute","Rotten Queue","New Rotten Cells","Fresh Left"],
      rows: [
        ["0","[(0,0)]","−","7"],
        ["1","[(0,1),(1,0)]","(0,1),(1,0) rot","5"],
        ["2","[(0,2),(1,1)]","(0,2),(1,1) rot","3"],
        ["3","[(2,1)]","(2,1) rot","2"],
        ["4","[(2,2)]","(2,2) rot","1"],
        ["5","[]","(1,2)? No path → fresh remains","1 → return -1? No: all reachable → 4"]
      ]
    }
  },
  1011: {
    intuition: "Binary search on the load capacity. The minimum possible is max element, the maximum is total sum. Check if a given capacity can ship all packages within D days by greedily loading as many packages as possible per day.",
    formula: "Feasibility: greedily pack:<br><code>for each package: if (currentLoad + weight > capacity) { days++; currentLoad = 0; } currentLoad += weight;</code><br>Check: days <= D",
    time: "O(N log sum) — binary search with linear feasibility check.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "weights=[1,2,3,4,5,6,7,8,9,10], D=5",
      headers: ["Low","High","Mid","Days Needed","Feasible?","Action"],
      rows: [
        ["10","55","32","5 days: [1-10 all fit?] → yes 1 day","1 ≤ 5","Yes → High=32"],
        ["10","32","21","2 days: [1-10 sum=55, each day < 21 splits]","2 ≤ 5","Yes → High=21"],
        ["10","21","15","5 days needed","5 ≤ 5","Yes → High=15"],
        ["10","15","12","6 days: 12 too small","6 > 5","No → Low=13"],
        ["13","15","14","5 days","5 ≤ 5","Yes → High=14"],
        ["13","14","13","6 days","6 > 5","No → Low=14"],
        ["14","14","-","Low==High","Answer: 15","15"]
      ]
    }
  },
  1046: {
    intuition: "Use a max-heap. Repeatedly extract the two heaviest stones. If they're different, put the difference back. Continue until 0 or 1 stone remains.",
    formula: "Stone smash:<br><code>while (heap.size > 1): x = heap.pop(); y = heap.pop();</code><br><code>if (x != y) heap.push(x - y);</code><br>Result: heap empty → 0, else heap.top()",
    time: "O(N log N) — N heap operations.",
    space: "O(N) — heap storage.",
    dryrun: {
      testcase: "stones = [2,7,4,1,8,1]",
      headers: ["Heap State","Smash (x,y)","Result","New Heap"],
      rows: [
        ["[8,7,4,2,1,1]","8,7","8-7=1","[4,2,1,1,1]"],
        ["[4,2,1,1,1]","4,2","4-2=2","[2,1,1,1]"],
        ["[2,1,1,1]","2,1","2-1=1","[1,1,1]"],
        ["[1,1,1]","1,1","0 (equal)","[1]"],
        ["[1]","Only 1 stone","−","Return 1"]
      ]
    }
  },
  1049: {
    intuition: "The answer is the smallest possible last remaining stone weight after optimal smashing. This is equivalent to splitting stones into two groups and minimizing the difference: answer = totalSum - 2 * (sum of smaller group). Use knapsack subset sum to find the largest sum <= totalSum/2.",
    formula: "Knapsack approach:<br><code>dp[j] = largest achievable sum <= j using available stones</code><br>Answer: <code>totalSum - 2 * dp[totalSum/2]</code>",
    time: "O(N * sum) — N stones × sum target.",
    space: "O(sum) — 1D dp array.",
    dryrun: {
      testcase: "stones=[2,7,4,1,8,1], sum=23, target=11",
      headers: ["Stone","j (downward)","dp[j-stone]+stone","dp[j]","Best subset ≤ 11"],
      rows: [
        ["2","j=11 to 2","dp[j-2]+2","dp[2]=2,dp[11]=2","−"],
        ["7","j=11 to 7","dp[j-7]+7","dp[9]=9,dp[11]=9","−"],
        ["4","j=11 to 4","dp[7]+4=11","dp[11]=11","Subset=11!"],
        ["Result","-","totalSum - 2*11 = 23-22=1","-","Answer: 1"]
      ]
    }
  },
  1091: {
    intuition: "BFS from top-left (0,0), expanding in all 8 directions. First time we reach bottom-right (n-1,n-1), the distance is the shortest path length. Return -1 if start or end is blocked.",
    formula: "BFS distance:<br><code>queue.enqueue([r,c,dist]); for 8 directions: if valid and unvisited: enqueue([nr,nc,dist+1]);</code><br>Return dist when (n-1,n-1) reached.",
    time: "O(N²) — visits each cell at most once.",
    space: "O(N²) — queue and visited set.",
    dryrun: {
      testcase: "grid = [[0,0],[0,0]] (2x2)",
      headers: ["Step","Queue","Popped Cell","New Cells Added","Path Length"],
      rows: [
        ["0","[(0,0,1)]","(0,0,1)","(0,1,2),(1,0,2),(1,1,2)","−"],
        ["1","[(0,1,2),(1,0,2),(1,1,2)]","(0,1,2)","Explore","−"],
        ["2","[...,(1,1,2)]","(1,1,2)","Goal reached!","2"]
      ]
    }
  },
  1094: {
    intuition: "Model pickup/dropoff locations as a difference array. Increment at pickup location, decrement after dropoff location. A prefix sum scan reveals simultaneous passengers at each location. If any exceeds capacity, return false.",
    formula: "Difference array update:<br><code>diff[from] += numPassengers; diff[to] -= numPassengers;</code><br>Prefix sum scan: <code>if (running_sum > capacity) return false;</code>",
    time: "O(N + locations) — N trips plus location scan.",
    space: "O(locations) — difference array.",
    dryrun: {
      testcase: "trips=[[2,1,5],[3,3,7]], capacity=4",
      headers: ["Trip","Passengers","From","To","Diff Array After"],
      rows: [
        ["[2,1,5]","2","1","5","diff[1]+=2, diff[5]-=2"],
        ["[3,3,7]","3","3","7","diff[3]+=3, diff[7]-=3"],
        ["Prefix Sum","-","-","-","pos 1: 2, pos 3: 5 > capacity 4 → False"]
      ]
    }
  },
  1102: {
    intuition: "Binary search on the answer (minimum possible maximum value on the path). For a given mid, check if there's a path from (0,0) to (n-1,n-1) using only cells with value >= mid. Use BFS/DFS.",
    formula: "Binary search range: [0, max(grid)]<br>Feasibility: <code>canReach = BFS/DFS with cells where grid[r][c] >= mid</code>",
    time: "O(N² log M) — log M binary steps, N² BFS per step.",
    space: "O(N²) — visited array.",
    dryrun: {
      testcase: "grid = [[5,4,5],[1,2,6],[7,4,6]]",
      headers: ["Low","High","Mid","Path from (0,0)→(2,2)?","Action"],
      rows: [
        ["0","7","3","Can reach using ≥3 cells","Yes → Low=4"],
        ["4","7","5","5→5→6 (right+down) exists?","Yes → Low=6"],
        ["6","7","6","6→6 path? only (2,0)=7→(0,2)=5<6","No → High=5"],
        ["6","5","−","Low > High (Termination)","Answer = 5"]
      ]
    }
  },
  1109: {
    intuition: "Difference array approach. For each booking [first, last, seats], increment seats at index first-1 and decrement at index last. A prefix sum pass reconstructs the actual seat count per flight.",
    formula: "Range update:<br><code>diff[first-1] += seats; diff[last] -= seats;</code><br>Prefix scan: <code>result[i] = result[i-1] + diff[i];</code>",
    time: "O(N + Q) — Q bookings, N flights scan.",
    space: "O(N) — difference array.",
    dryrun: {
      testcase: "bookings=[[1,2,10],[2,3,20],[2,5,25]], n=5",
      headers: ["Booking","First","Last","Seats","Diff Array State"],
      rows: [
        ["[1,2,10]","1","2","10","[10,0,-10,0,0,0]"],
        ["[2,3,20]","2","3","20","[10,20,-10,-20,0,0]"],
        ["[2,5,25]","2","5","25","[10,45,-10,-20,0,-25]"],
        ["Prefix Sum","-","-","-","[10,55,45,25,25]"]
      ]
    }
  },
  1135: {
    intuition: "Minimum Spanning Tree using Kruskal's algorithm. Sort all edges by weight. Use Union-Find to greedily add the cheapest edge that doesn't form a cycle. Sum all added edge costs.",
    formula: "Kruskal's step:<br><code>sort edges by weight; for each edge (u,v,w): if (find(u) != find(v)) { union(u,v); cost += w; }</code>",
    time: "O(E log E) — sorting edges.",
    space: "O(V) — union-find arrays.",
    dryrun: {
      testcase: "edges sorted by cost: (1-2,1),(2-3,2),(1-3,5)",
      headers: ["Edge","Cost","find(u)","find(v)","Same?","Action","Total Cost"],
      rows: [
        ["1-2","1","1","2","No","Union 1-2","1"],
        ["2-3","2","1","3","No","Union 2-3","3"],
        ["1-3","5","1","1","Yes","Skip (cycle)","3"]
      ]
    }
  },
  1143: {
    intuition: "Already covered. LCS of two sequences using 2D DP.",
    formula: "dp[i][j] = match ? dp[i-1][j-1]+1 : max(dp[i-1][j], dp[i][j-1])",
    time: "O(M * N)",
    space: "O(M * N)",
    dryrun: {
      testcase: "s1='abc', s2='ace'",
      headers: ["i","j","s1[i-1]","s2[j-1]","Match?","dp[i][j]"],
      rows: [
        ["1","1","a","a","Yes","1"],
        ["2","2","b","c","No","1"],
        ["3","3","c","e","No","2"]
      ]
    }
  },
  1168: {
    intuition: "Model water distribution as MST problem. Add a virtual node 0 connected to each house i with the cost of well[i]. Run Kruskal's MST including the well edges.",
    formula: "Virtual node approach:<br><code>add edge (0, i, wells[i]) for each house i; then sort all edges and run Kruskal's MST</code>",
    time: "O((N+P) log(N+P)) — sort N wells + P pipes.",
    space: "O(N) — union-find.",
    dryrun: {
      testcase: "wells=[1,2,2], pipes=[[1,2,1],[2,3,1]]",
      headers: ["All Edges (sorted)","u","v","Cost","Action","Total"],
      rows: [
        ["well house 1","0","1","1","Union 0,1","1"],
        ["pipe 1-2","1","2","1","Union 1,2","2"],
        ["pipe 2-3","2","3","1","Union 2,3","3"],
        ["well house 2","0","2","2","1-2 already connected (skip)","3"],
        ["well house 3","0","3","2","1-3 already connected (skip)","3"]
      ]
    }
  },
  1202: {
    intuition: "Use Union-Find to group indices connected by edges. Within each group (connected component), the characters can be freely rearranged. Sort characters in each group and assign them in sorted order back to their original indices.",
    formula: "Group and sort:<br><code>for each edge (i,j): union(i,j);</code><br><code>for each group: sorted_chars; assign to indices in sorted order</code>",
    time: "O((N + E) * alpha(N) + N log N) — union-find + sorting.",
    space: "O(N) — parent and char group maps.",
    dryrun: {
      testcase: "s='dcab', pairs=[[0,3],[1,2]]",
      headers: ["Edge","Union","Groups","Sorted Chars","Result"],
      rows: [
        ["[0,3]","union(0,3)","group: {0,3}→chars d,b","−","−"],
        ["[1,2]","union(1,2)","group: {1,2}→chars c,a","−","−"],
        ["Sort groups","-","group {0,3}→sorted: b,d; group {1,2}→sorted: a,c","−","−"],
        ["Assign","-","idx 0=b, idx 3=d; idx 1=a, idx 2=c","−","bacd"]
      ]
    }
  },
  1203: {
    intuition: "Two-level topological sort: sort groups respecting group dependencies (from item dependencies), then sort items within each group. Use Kahn's BFS on both levels.",
    formula: "Group dependency graph + item dependency graph → dual topological sort. If any cycle exists at either level, return [].",
    time: "O(G + N + E) — groups G, items N, edges E.",
    space: "O(G + N + E) — adjacency lists.",
    dryrun: {
      testcase: "n=6, m=2, groups=[-1,-1,1,0,0,1], beforeItems=[[],[],[3],[],[3,4],[]]",
      headers: ["Phase","Source","Process Order","Cycle?","Result"],
      rows: [
        ["Item sort within groups","3,4 first (no deps)","Items: 3→4→0,1","No","−"],
        ["Group sort","Group 0 after group 1? No dependency","Groups: any order","No","−"],
        ["Output","−","−","No","[3,4,0,1,5,2] or similar valid order"]
      ]
    }
  },
  1254: {
    intuition: "First, mark all land cells connected to the border as non-closed (DFS from all border '1' cells). Then count remaining '0' cells that are completely surrounded by '1's (interior closed islands).",
    formula: "Two-pass DFS:<br>1. From all border land cells: DFS and mark as visited.<br>2. For each unvisited '0' interior cell: DFS and count islands.",
    time: "O(M * N) — two full grid scans.",
    space: "O(M * N) — visited array.",
    dryrun: {
      testcase: "grid = [[1,1,1],[1,0,1],[1,1,1]]",
      headers: ["Pass","Cell","Action","Closed Islands"],
      rows: [
        ["Pass 1","All border 1s","Marked as visited","−"],
        ["Pass 2","(1,1)=0","Interior 0 cell, surrounded by 1s","Count=1"],
        ["Result","−","1 closed island","1"]
      ]
    }
  },
  1268: {
    intuition: "Build a Trie from all product names. For each character in searchWord typed so far, traverse the Trie. At each prefix node, collect up to 3 lexicographically smallest products using DFS.",
    formula: "Prefix DFS collection:<br><code>currentNode = trie.traverse(prefix); DFS from currentNode, collect words marked isEnd, limit 3;</code>",
    time: "O(W * L) — W words of length L to build Trie, O(L * N) for queries.",
    space: "O(W * L) — Trie storage.",
    dryrun: {
      testcase: "products=['mobile','mouse','moneypot','monitor','mousepad'], searchWord='mouse'",
      headers: ["Typed Prefix","Trie Node","Suggestions (up to 3)"],
      rows: [
        ["m","m-node","mobile, moneypot, monitor"],
        ["mo","mo-node","mobile, moneypot, monitor"],
        ["mou","mou-node","mouse, mousepad"],
        ["mous","mous-node","mouse, mousepad"],
        ["mouse","mouse-node","mouse, mousepad"]
      ]
    }
  },
  1283: {
    intuition: "Binary search on the divisor (1 to max(nums)). For a given divisor d, compute ceil(nums[i]/d) for all elements and sum. If sum <= threshold, divisor d is valid — search for smaller.",
    formula: "Feasibility: <code>sum(ceil(num / d)) <= threshold</code><br>Binary search: if valid → High = mid, else → Low = mid + 1",
    time: "O(N log M) — log M binary steps, N sum check each.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums=[1,2,5,9], threshold=6",
      headers: ["Low","High","Mid","Sum(ceil)","<=6?","Action"],
      rows: [
        ["1","9","5","1+1+1+2=5","Yes","High=5"],
        ["1","5","3","1+1+2+3=7","No","Low=4"],
        ["4","5","4","1+1+2+3=7? No: 1+1+2+3=7","No","Low=5"],
        ["5","5","−","1+1+1+2=5","Yes","Answer=5"]
      ]
    }
  },
  1312: {
    intuition: "dp[i][j] = minimum insertions to make s[i..j] a palindrome. If s[i]==s[j], no extra insertion needed for the outer pair. Otherwise, 1 insertion + minimum of solving sub-problems s[i+1..j] or s[i..j-1].",
    formula: "DP recurrence:<br><code>if s[i]==s[j]: dp[i][j] = dp[i+1][j-1]</code><br><code>else dp[i][j] = 1 + min(dp[i+1][j], dp[i][j-1])</code>",
    time: "O(N²) — fills N×N dp table.",
    space: "O(N²) — dp table.",
    dryrun: {
      testcase: "s = 'mbadm'",
      headers: ["i","j","s[i]","s[j]","Match?","dp[i][j]"],
      rows: [
        ["0","4","m","m","Yes","dp[1][3] = ?"],
        ["1","3","b","d","No","1 + min(dp[2][3], dp[1][2])"],
        ["1","2","b","a","No","1 + min(dp[2][2]=0, dp[1][1]=0) = 1"],
        ["2","3","a","d","No","1 + min(dp[3][3]=0, dp[2][2]=0) = 1"],
        ["1","3","-","-","−","1+min(1,1)=2"],
        ["0","4","-","-","m==m","dp[1][3]=2"]
      ]
    }
  },
  1319: {
    intuition: "Count connected components in a graph. Redundant edges (edges within an already-connected component) can be removed and reused to connect disconnected components. If we need to connect k components, we need k-1 edges.",
    formula: "Algorithm:<br>1. Count components C via Union-Find<br>2. Count extra edges E (edges that don't reduce C)<br>3. If extra >= C-1: return C-1, else return -1",
    time: "O(N + E) — N nodes, E edges.",
    space: "O(N) — union-find arrays.",
    dryrun: {
      testcase: "n=4, connections=[[0,1],[0,2],[1,2]]",
      headers: ["Edge","find(u)","find(v)","Union?","Extra Edges","Components"],
      rows: [
        ["[0,1]","0","1","Yes","0","3 (0-1 connected)"],
        ["[0,2]","0","2","Yes","0","2 (0-1-2 connected)"],
        ["[1,2]","0","0","No (same)","1","2"],
        ["Final","−","−","−","extra=1 >= C-1=1","Yes → return 1"]
      ]
    }
  },
  1334: {
    intuition: "For each city as potential center, run shortest path algorithm (Floyd-Warshall or Dijkstra) to find all cities reachable within distanceThreshold. The city with fewest reachable neighbors wins. Tie-break: prefer highest city index.",
    formula: "Floyd-Warshall:<br><code>dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</code><br>Count: for each city i, count neighbors j where dist[i][j] <= threshold",
    time: "O(V³) — Floyd-Warshall for all-pairs shortest paths.",
    space: "O(V²) — distance matrix.",
    dryrun: {
      testcase: "n=4, edges=[[0,1,3],[1,2,1],[1,3,4],[2,3,1]], threshold=4",
      headers: ["City","Reachable within 4","Count","Best City?"],
      rows: [
        ["0","1(d=3),2(d=4)","2","−"],
        ["1","0(d=3),2(d=1),3(d=2)","3","No"],
        ["2","1(d=1),3(d=1)","2","−"],
        ["3","2(d=1),1(d=2)","2","Yes (highest idx among ties)"]
      ]
    }
  },
  1425: {
    intuition: "Use a monotonic decreasing deque of dp values. dp[i] = nums[i] + max(dp[max(0, i-k-1) .. i-1]). The deque maintains the maximum of the recent k dp values.",
    formula: "DP with Deque window:<br><code>dp[i] = nums[i] + (deque.front valid ? dp[deque.front] : 0)</code><br>Deque maintains decreasing dp values within window size k.",
    time: "O(N) — each element pushed/popped once.",
    space: "O(N) — dp array + deque.",
    dryrun: {
      testcase: "nums=[10,2,-10,5,20], k=2",
      headers: ["i","nums[i]","Deque State","Max in window","dp[i]"],
      rows: [
        ["0","10","[0]","−","10"],
        ["1","2","[0,1]","dp[0]=10","12"],
        ["2","-10","[0,1,2]","dp[0]=10","0"],
        ["3","5","[1,3]","dp[1]=12","17"],
        ["4","20","[3,4]","dp[3]=17","37"]
      ]
    }
  },
  1438: {
    intuition: "Use two monotonic deques: one max-deque (for running max) and one min-deque (for running min). If at any window max - min > limit, shrink from the left pointer.",
    formula: "Window validity:<br><code>while (maxDeque.front - minDeque.front > limit) left++;</code><br>Track max length: <code>maxLen = max(maxLen, right - left + 1);</code>",
    time: "O(N) — each element pushed/popped from each deque once.",
    space: "O(N) — two deques.",
    dryrun: {
      testcase: "nums=[8,2,4,7], limit=4",
      headers: ["R","nums[R]","MaxDeq","MinDeq","MaxInW","MinInW","Max-Min","L","Length"],
      rows: [
        ["0","8","[8]","[8]","8","8","0","0","1"],
        ["1","2","[8]","[2]","8","2","6 > 4 → L++","1","1"],
        ["2","4","[4]","[2]","4","2","2 ≤ 4","1","2"],
        ["3","7","[7]","[2]","7","2","5 > 4 → L++","2","2"]
      ]
    }
  },
  1462: {
    intuition: "Build the course prerequisite graph. For each query [u, v], check if u is an ancestor of v (i.e., there's a directed path from u to v). Use topological sort + reachability propagation.",
    formula: "Reachability matrix:<br><code>reachable[u][v] = true if there's a path u → v</code><br>Update: <code>for each v reachable from u's neighbor: reachable[u].add(v)</code>",
    time: "O(V² + E) — reachability propagation.",
    space: "O(V²) — reachability matrix.",
    dryrun: {
      testcase: "numCourses=2, prerequisites=[[1,0]], queries=[[0,1],[1,0]]",
      headers: ["Query","Reachable(u,v)?","Answer"],
      rows: [
        ["[0,1]","Can reach 1 from 0? No direct edge 0→1","false"],
        ["[1,0]","Can reach 0 from 1? Edge 1→0 exists","true"]
      ]
    }
  },
  1482: {
    intuition: "Binary search on the number of days. For a given day count, check if m bouquets can be made: greedily scan bloomed flowers (bloom[i] <= day) and count consecutive k-length groups.",
    formula: "Feasibility check:<br><code>consecutive = 0; bouquets = 0;</code><br><code>for each flower: if bloom[i] <= day: consecutive++; else consecutive = 0;</code><br><code>if (consecutive == k): bouquets++; consecutive = 0;</code>",
    time: "O(N log(max day)) — binary search with linear check.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "bloomDay=[1,10,3,10,2], m=3, k=1",
      headers: ["Low","High","Mid","Bouquets (k=1)","≥ m=3?","Action"],
      rows: [
        ["1","10","5","Bloom day ≤ 5: [1,3,2] → 3 flowers → 3 bouquets","Yes","High=5"],
        ["1","5","3","Bloom day ≤ 3: [1,3,2] → 3 bouquets","Yes","High=3"],
        ["1","3","2","Bloom day ≤ 2: [1,2] → 2 bouquets","No","Low=3"],
        ["3","3","−","Low==High","Answer: 3","3"]
      ]
    }
  },
  1489: {
    intuition: "Find critical edges (MST breaks if removed) and pseudo-critical edges (can appear in some MST but not all). For each edge: 1) Remove it and check if MST weight increases (critical). 2) Force include it and check if MST weight stays same (pseudo-critical).",
    formula: "For each edge e:<br>Critical: <code>MST_without(e) > MST_weight</code><br>Pseudo-critical: <code>MST_with(e) == MST_weight</code>",
    time: "O(E² * alpha(V)) — E edges × E iterations.",
    space: "O(V + E) — union-find + edge storage.",
    dryrun: {
      testcase: "edges=[[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,2,5],[1,3,5],[0,1,5]]",
      headers: ["Edge","Without-MST Weight","With-MST Weight","Normal MST Weight","Critical?","Pseudo-Critical?"],
      rows: [
        ["(0,1,1)","6 (MST breaks)","5","5","Yes","Yes"],
        ["(1,2,1)","6","5","5","Yes","Yes"],
        ["(2,3,2)","7 > 5","5","5","Yes","Yes"],
        ["(0,3,2)","5","5","5","No","Yes (can appear but not always)"]
      ]
    }
  },
  1499: {
    intuition: "Maximize yi + yj + xi - xj = (yj + xj) + (yi - xi). Use a monotonic deque sorted by yi + xi in decreasing order. For each j, remove expired elements and find max (yi - xi) + (yj + xj).",
    formula: "Value to maximize: <code>(yi - xi) + (yj + xj)</code><br>Use deque of (yi+xi) indices, maintain decreasing order.",
    time: "O(N) — each index pushed/popped from deque once.",
    space: "O(N) — deque storage.",
    dryrun: {
      testcase: "points=[[1,3],[2,0],[5,10],[6,-10]], k=1",
      headers: ["j","yj+xj","Max(yi-xi in window)","Current Max","Deque"],
      rows: [
        ["0","4","yi-xi=-2","−","[0]"],
        ["1","2","yi-xi=-2 (from j=0,within k=1)","−","[0,1]"],
        ["2","15","j=1: yi-xi=-2, val = 15+(-2)=13","13","[2]"],
        ["3","-4","j=2: yi-xi=5, val=-4+5=1","13","[2,3]"]
      ]
    }
  },
  1514: {
    intuition: "Modified Dijkstra's algorithm for maximum probability path. Instead of minimizing cost, maximize the product of probabilities. Use a max-heap. Relax edge: new probability = dist[u] * prob(u,v).",
    formula: "Relaxation: <code>if (dist[u] * p > dist[v]) { dist[v] = dist[u] * p; heap.push([-dist[v], v]); }</code>",
    time: "O((V + E) log V) — Dijkstra with max-heap.",
    space: "O(V + E) — adjacency list and distances.",
    dryrun: {
      testcase: "n=3, edges=[[0,1],[1,2],[0,2]], probs=[0.5,0.5,0.2], start=0, end=2",
      headers: ["Heap Pop","Node","Prob","Edges Explored","Updates","Max Prob to 2"],
      rows: [
        ["(-1.0,0)","0","1.0","0→1(0.5),0→2(0.2)","dist[1]=0.5,dist[2]=0.2","0.2"],
        ["(-0.5,1)","1","0.5","1→2(0.5)","0.5*0.5=0.25>0.2","0.25"],
        ["(-0.25,2)","2","0.25","Goal reached","−","0.25"]
      ]
    }
  },
  1579: {
    intuition: "Use Union-Find with two separate DSUs (one for Alice, one for Bob). Add type-3 (shared) edges first using both DSUs. Then add type-1 (Alice only) and type-2 (Bob only) edges. Count redundant edges (ones that don't reduce component count). Check connectivity at end.",
    formula: "Redundant edge count: edges added that don't union two different components.<br>Valid if: both Alice and Bob DSUs are fully connected (1 component).",
    time: "O(E * alpha(V)) — E edges with union-find.",
    space: "O(V) — two DSU arrays.",
    dryrun: {
      testcase: "n=4, edges=[[3,1,2],[3,2,3],[1,1,3],[1,2,4],[2,3,4]]",
      headers: ["Edge Type","u","v","Alice Union?","Bob Union?","Redundant Count"],
      rows: [
        ["Type 3","1","2","Yes (new)","Yes (new)","0"],
        ["Type 3","2","3","Yes (new)","Yes (new)","0"],
        ["Type 1","1","3","1-2-3 connected → No","−","1"],
        ["Type 1","2","4","Yes","−","1"],
        ["Type 2","3","4","−","Yes","1"],
        ["Final","−","−","Connected","Connected","1"]
      ]
    }
  },
  1584: {
    intuition: "Minimum Spanning Tree using Prim's algorithm or Kruskal's. Build a complete graph where edge weight between points is Manhattan distance. Find the MST to connect all N points with minimum total distance.",
    formula: "Manhattan distance: <code>dist = |x1-x2| + |y1-y2|</code><br>Prim's: maintain min-dist to MST, greedily add closest point.",
    time: "O(N²) — Prim's with dense graph.",
    space: "O(N) — distances array.",
    dryrun: {
      testcase: "points=[[0,0],[2,2],[3,10],[5,2],[7,0]]",
      headers: ["Added Point","Min Distance to MST","Total Cost","In MST"],
      rows: [
        ["[0,0]","0 (start)","0","{[0,0]}"],
        ["[2,2]","4 (from [0,0])","4","{[0,0],[2,2]}"],
        ["[5,2]","3 (from [2,2])","7","{...,[5,2]}"],
        ["[7,0]","4 (from [5,2])","11","{...,[7,0]}"],
        ["[3,10]","10 (from [2,2])","21","{...,[3,10]}"]
      ]
    }
  },
  1631: {
    intuition: "Modified Dijkstra's algorithm where the cost is the maximum effort (absolute height difference) along the path. Use a min-heap of (effort, row, col). Relax by updating cell's minimum effort if a lower effort path is found.",
    formula: "Effort relaxation:<br><code>effort = max(currentEffort, abs(heights[nr][nc] - heights[r][c]))</code><br><code>if effort < dist[nr][nc]: push to heap</code>",
    time: "O(M * N * log(M*N)) — Dijkstra on grid.",
    space: "O(M * N) — effort array and heap.",
    dryrun: {
      testcase: "heights=[[1,2,2],[3,8,2],[5,3,5]]",
      headers: ["Heap Pop","Cell","Effort","Neighbors","Updates"],
      rows: [
        ["(0,0,0)","(0,0)","0","Right(0,1): eff=1; Down(1,0): eff=2","dist[0][1]=1,dist[1][0]=2"],
        ["(1,0,1)","(0,1)","1","Right(0,2): eff=max(1,0)=1; Down(1,1): eff=max(1,6)=6","dist[0][2]=1"],
        ["(1,0,2)","(0,2)","1","Down(1,2): eff=max(1,0)=1","dist[1][2]=1"],
        ["(1,1,2)","(1,2)","1","Down(2,2): eff=max(1,3)=3","dist[2][2]=3"],
        ["(2,1,0)","(1,0)","2","Down(2,0): eff=max(2,2)=2","dist[2][0]=2"],
        ["(2,2,0)","(2,0)","2","Right(2,1): eff=max(2,2)=2","dist[2][1]=2"],
        ["(2,2,1)","(2,1)","2","Right(2,2): eff=max(2,2)=2","dist[2][2]=min(3,2)=2"],
        ["(2,2,2)","(2,2)","2 (Goal!)","−","Answer: 2"]
      ]
    }
  },
  1696: {
    intuition: "dp[i] = maximum score of a jump sequence ending at index i. dp[i] = nums[i] + max(dp[max(0,i-k) .. dp[i-1]]). Use a monotonic decreasing deque to efficiently track maximum dp in the sliding window.",
    formula: "Deque-based DP:<br><code>dp[i] = nums[i] + dp[deque.front] (if deque non-empty)</code><br>Maintain decreasing deque, pop front if out of window (i - deque.front > k).",
    time: "O(N) — single pass with deque.",
    space: "O(N) — dp array + deque.",
    dryrun: {
      testcase: "nums=[1,-1,-2,4,-7,3], k=2",
      headers: ["i","nums[i]","Deque (indices)","Max dp in window","dp[i]"],
      rows: [
        ["0","1","[0]","−","1"],
        ["1","-1","[0,1]","dp[0]=1","0"],
        ["2","-2","[0,2]","dp[0]=1","−1 (prune: deque becomes [2])"],
        ["3","4","[3]","dp[2]=-1","3"],
        ["4","-7","[3,4]","dp[3]=3","-4"],
        ["5","3","[3,5]","dp[3]=3","6"]
      ]
    }
  },
  1893: {
    intuition: "Use difference array to mark which integers are covered by the given ranges. Build coverage array and check if all integers from left to right (query range) are covered.",
    formula: "Coverage array update:<br><code>diff[range.start]++; diff[range.end+1]--;</code><br>Prefix sum to get coverage count. All query integers must have coverage > 0.",
    time: "O(N + max_range) — N ranges + scan.",
    space: "O(max_range) — coverage array.",
    dryrun: {
      testcase: "ranges=[[1,2],[3,4],[5,6]], left=2, right=5",
      headers: ["Range","Update Diff Array","Coverage After Prefix Sum","Query [2,5] All ≥ 1?"],
      rows: [
        ["[1,2]","diff[1]++,diff[3]--","1 covered: 1,2","−"],
        ["[3,4]","diff[3]++,diff[5]--","2,3,4 covered","−"],
        ["[5,6]","diff[5]++,diff[7]--","5,6 covered","−"],
        ["Check [2,5]","−","All of 2,3,4,5 have coverage=1","true"]
      ]
    }
  },
  1943: {
    intuition: "Process painting segments using a difference array on the color dimension. Each (start, end, color) update adds color to range. After processing all updates, merge adjacent cells with same color sum using prefix accumulation.",
    formula: "Difference array by coordinate compression:<br>Add segment colors at start/end breakpoints, compute running color set at each breakpoint, emit colored segments.",
    time: "O(N log N) — event sorting and processing.",
    space: "O(N) — breakpoint arrays.",
    dryrun: {
      testcase: "segments = [[1,4,5],[4,7,7],[1,7,9]]",
      headers: ["Segment","Start","End","Color","Breakpoints Added"],
      rows: [
        ["[1,4,5]","1","4","5","[1: +5], [4: -5]"],
        ["[4,7,7]","4","7","7","[4: +7], [7: -7]"],
        ["[1,7,9]","1","7","9","[1: +9], [7: -9]"],
        ["Sorted events","−","−","−","[1,4,7] boundaries"],
        ["Result","[1,4): color sum=5+9=14","[4,7): color sum=7+9=16","−","[[1,4,14],[4,7,16]]"]
      ]
    }
  },
  1976: {
    intuition: "Modified Dijkstra's to count shortest paths. Track both minimum distance and number of ways to achieve it. When equal distance found, add the count; when shorter found, reset count to source's count.",
    formula: "Path counting:<br><code>if (dist[u] + w < dist[v]): dist[v] = dist[u]+w; ways[v] = ways[u];</code><br><code>elif (dist[u] + w == dist[v]): ways[v] += ways[u];</code>",
    time: "O((V + E) log V) — Dijkstra with counting.",
    space: "O(V + E) — adjacency list, distances, ways.",
    dryrun: {
      testcase: "n=7, roads=[[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]], dst=6",
      headers: ["Step","Node","Distance","Ways","Key Update"],
      rows: [
        ["Start","0","0","1","−"],
        ["Pop (0,0)", "0", "0", "1", "Relax 1 (dist 2), 4 (dist 5), 6 (dist 7)"],
        ["Pop (2,1)","1","2","1","dist[2]=5,dist[3]=5"],
        ["...","converge","dist[6]=7","4 ways","Multiple equal shortest paths"]
      ]
    }
  },
  2115: {
    intuition: "Model as directed graph: ingredients are prerequisites, recipes are nodes. Apply topological sort (Kahn's BFS). A recipe becomes available when all its ingredient prerequisites are available (either as supplies or already-made recipes).",
    formula: "Modified Kahn's:<br><code>available = set(supplies); for each recipe: if all ingredients in available: add recipe to queue and result</code>",
    time: "O(V + E) — topological traversal.",
    space: "O(V + E) — adjacency list.",
    dryrun: {
      testcase: "recipes=['bread'], ingredients=[['yeast','flour']], supplies=['yeast','flour','corn']",
      headers: ["Step","Available Set","Recipe Checked","All Ingredients Available?","Result"],
      rows: [
        ["Init","{'yeast','flour','corn'}","−","−","−"],
        ["Check bread","{'yeast','flour','corn'}","bread needs [yeast, flour]","Yes!","['bread']"]
      ]
    }
  },
  209: {
    intuition: "Use sliding window. Expand right to add elements. When window sum >= target, shrink from left to find minimum valid subarray length.",
    formula: "Window shrink condition:<br><code>while (windowSum >= target) { minLen = min(minLen, right - left + 1); windowSum -= nums[left]; left++; }</code>",
    time: "O(N) — each element added/removed at most once.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [2,3,1,2,4,3], target = 7",
      headers: ["L","R","nums[R]","Window Sum","Sum >= 7?","Min Length","Action"],
      rows: [
        ["0","0","2","2","No","∞","Expand R"],
        ["0","1","3","5","No","∞","Expand R"],
        ["0","2","1","6","No","∞","Expand R"],
        ["0","3","2","8","Yes","4","Shrink: L++, sum=6"],
        ["1","3","—","6","No","4","Expand R"],
        ["1","4","4","10","Yes","4","Shrink → 3"],
        ["2","4","—","7","Yes","3","Shrink → 3 again"],
        ["2","5","3","8","Yes","3","Final min = 3"]
      ]
    }
  },
  424: {
    intuition: "Use sliding window. Expand right and count character frequencies. When window size - max_freq > k, shrink from left. Track maximum window size encountered.",
    formula: "Window validity:<br><code>while (windowSize - maxFreq > k) { shrink left; }</code><br><code>maxLen = max(maxLen, windowSize)</code>",
    time: "O(N) — each character processed at most twice.",
    space: "O(1) — frequency array of size 26.",
    dryrun: {
      testcase: "s = 'ABABBA', k = 1",
      headers: ["L","R","Char","Window","Max Freq","Valid?","Max Len"],
      rows: [
        ["0","0","A","A:1","1","1-1<=1 ✓","1"],
        ["0","1","B","A:1,B:1","1","2-1<=1 ✓","2"],
        ["0","2","A","A:2,B:1","2","3-2<=1 ✓","3"],
        ["0","3","B","A:2,B:2","2","4-2<=1? No","3"],
        ["1","3","—","A:1,B:2","2","3-2<=1 ✓","3"],
        ["1","4","B","A:1,B:3","3","4-3<=1 ✓","4"],
        ["1","5","A","A:2,B:3","3","5-3<=1? No","4"],
        ["2","5","—","A:1,B:3","3","4-3<=1 ✓","4"]
      ]
    }
  },
  303: {
    intuition: "Precompute prefix sums once. Then answer each range sum query [left, right] in O(1) using: prefix[right+1] - prefix[left].",
    formula: "Prefix array:<br><code>prefix[i] = prefix[i-1] + nums[i-1]</code><br>Range query:<br><code>sumRange(L, R) = prefix[R+1] - prefix[L]</code>",
    time: "O(N) build, O(1) query.",
    space: "O(N) — prefix sum array.",
    dryrun: {
      testcase: "nums = [-2,0,3,-5,2,-1], query(0,2)",
      headers: ["Index i","nums[i]","prefix[i+1]","Query(0,2) = prefix[3]-prefix[0]"],
      rows: [
        ["0","-2","-2","—"],
        ["1","0","-2","—"],
        ["2","3","1","1-0=1"],
        ["3","-5","-4","—"]
      ]
    }
  },
  19: {
    intuition: "Use two pointers: fast advances N+1 steps ahead, then both slow and fast advance together. When fast reaches end, slow.next is the node to remove.",
    formula: "Gap strategy:<br><code>fast = head; repeat n+1 times: fast = fast.next;</code><br><code>slow.next = slow.next.next;</code>",
    time: "O(L) — single pass of list length L.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "1→2→3→4→5, n = 2",
      headers: ["Step","Fast Pointer","Slow Pointer","Action"],
      rows: [
        ["Fast advance n+1","Moves to node 3","dummy (before 1)","Fast 3 ahead"],
        ["Advance both","Fast=4","Slow=1","Both move"],
        ["Advance both","Fast=5","Slow=2","Both move"],
        ["Fast.next=null","null","Slow=3","Remove slow.next (node 4)"]
      ]
    }
  },
  160: {
    intuition: "Use two pointers starting at head of each list. When one reaches null, redirect it to the head of the other list. Both pointers meet at the intersection after traversing combined distances.",
    formula: "Redirect logic:<br><code>pA = pA == null ? headB : pA.next;</code><br><code>pB = pB == null ? headA : pB.next;</code><br>Meet when pA == pB.",
    time: "O(M + N) — both pointers traverse both lists.",
    space: "O(1) — constant pointer usage.",
    dryrun: {
      testcase: "List A: 4→1→8→4→5, List B: 5→6→1→8→4→5 (merge at node 8)",
      headers: ["Step","Pointer A","Pointer B","Action"],
      rows: [
        ["1-3","4,1,8","5,6,1","Advance normally"],
        ["4-6","4,5,null→5","8,4,5","A redirected to headB"],
        ["7-9","6,1,8","null→4","B redirected to headA"],
        ["Meet","8","8","pA == pB → Intersection at node 8"]
      ]
    }
  },
  75: {
    intuition: "Dutch National Flag problem. Use three pointers: low (0 boundary), mid (current), high (2 boundary). Swap 0s to low, 2s to high, and skip 1s.",
    formula: "Three-way partition:<br><code>if (nums[mid] == 0) swap(low, mid); low++; mid++;</code><br><code>else if (nums[mid] == 2) swap(mid, high); high--;</code><br><code>else mid++;</code>",
    time: "O(N) — single pass.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "nums = [2,0,2,1,1,0]",
      headers: ["low","mid","high","nums","Action"],
      rows: [
        ["0","0","5","[2,0,2,1,1,0]","nums[0]=2 → swap with high → [0,0,2,1,1,2], high--"],
        ["0","0","4","[0,0,2,1,1,2]","nums[0]=0 → swap low/mid (same), low++, mid++"],
        ["1","1","4","[0,0,2,1,1,2]","nums[1]=0 → swap low/mid (same), low++, mid++"],
        ["2","2","4","[0,0,2,1,1,2]","nums[2]=2 → swap mid/high → [0,0,1,1,2,2], high--"],
        ["2","2","3","[0,0,1,1,2,2]","nums[2]=1 → mid++"],
        ["2","3","3","[0,0,1,1,2,2]","mid==high → done"]
      ]
    }
  },
  380: {
    intuition: "Combine a Hash Map (for O(1) get/delete) with a dynamic array (for O(1) random access). On insert: add to array and store index in map. On delete: swap with last element, pop array, update map.",
    formula: "Insert:<br><code>map[key] = arr.length; arr.push(val);</code><br>Delete:<br><code>idx = map[key]; swap(arr[idx], arr[last]); arr.pop(); map[arr[idx]] = idx;</code>",
    time: "O(1) average for insert, delete, getRandom.",
    space: "O(N) — map + array.",
    dryrun: {
      testcase: "insert(1), insert(2), getRandom(), delete(1), insert(3), getRandom()",
      headers: ["Operation","Map State","Array State","Random"],
      rows: [
        ["insert(1)","{1:0}","[1]","—"],
        ["insert(2)","{1:0,2:1}","[1,2]","—"],
        ["getRandom()","{1:0,2:1}","[1,2]","returns 1 or 2"],
        ["delete(1)","{2:0}","[2]","—"],
        ["insert(3)","{2:0,3:1}","[2,3]","—"],
        ["getRandom()","{2:0,3:1}","[2,3]","returns 2 or 3"]
      ]
    }
  },
  705: {
    intuition: "Use a fixed-size boolean array (or bitset) indexed by key hash. For simplicity, use an array of booleans where index = key (assuming non-negative integer keys).",
    formula: "HashSet operations:<br><code>add(key): set[key % size] = true;</code><br><code>remove(key): set[key % size] = false;</code><br><code>contains(key): return set[key % size];</code>",
    time: "O(1) — direct array access.",
    space: "O(N) — array of size N.",
    dryrun: {
      testcase: "insert(1), contains(1), remove(1), contains(1)",
      headers: ["Operation","Hash Key","Bucket Index","Bucket Value"],
      rows: [
        ["insert(1)","1","1 % 769 = 1","set[1] = true"],
        ["contains(1)","1","1","true"],
        ["remove(1)","1","1","set[1] = false"],
        ["contains(1)","1","1","false"]
      ]
    }
  },
  706: {
    intuition: "Use an array of linked lists (buckets) for collision handling. Hash key to bucket index, then traverse/list operations within that bucket.",
    formula: "HashMap operations:<br><code>index = hash(key) % numBuckets;</code><br><code>map[index].push({key, value});</code><br>Search: traverse bucket list for key.",
    time: "O(1) average, O(N) worst case (all collide).",
    space: "O(N) — bucket array + linked nodes.",
    dryrun: {
      testcase: "put(1,'a'), put(2,'b'), get(1), remove(1), get(1)",
      headers: ["Operation","Key","Bucket","Action"],
      rows: [
        ["put(1,'a')","1","1 % 769 = 1","bucket[1] = [(1,'a')]"],
        ["put(2,'b')","2","2 % 769 = 2","bucket[2] = [(2,'b')]"],
        ["get(1)","1","1","return 'a'"],
        ["remove(1)","1","1","bucket[1] = []"],
        ["get(1)","1","1","return -1 (not found)"]
      ]
    }
  },
  729: {
    intuition: "Maintain a sorted list of existing intervals. For each new booking, binary search for the insertion point. Check overlap with the interval at that position. If no overlap, insert the new interval.",
    formula: "Overlap check:<br><code>if (start < existing.end && end > existing.start) return false;</code><br>Insert:<br><code>bookings.insert(sortedPos, [start, end]);</code>",
    time: "O(N) for linear scan, O(log N) search + O(N) insert.",
    space: "O(N) — storing all bookings.",
    dryrun: {
      testcase: "book(10, 20), book(15, 25), book(20, 30)",
      headers: ["Booking","Sorted Intervals","Overlap?","Result"],
      rows: [
        ["[10,20]","[]","No","[[10,20]]"],
        ["[15,25]","[[10,20]]","Yes (15<20)","false"],
        ["[20,30]","[[10,20]]","No (20==20 boundary)","[[10,20],[20,30]]"]
      ]
    }
  },
  686: {
    intuition: "Use rolling hash (Rabin-Karp). Compute hash of each length-a substring of B and compare with hash of A. If hashes match, verify character-by-character to avoid false positives.",
    formula: "Rolling hash:<br><code>h = h * 26 + new_char;</code><br>Slide:<br><code>h = h - old_char * power; h = h * 26 + new_char;</code>",
    time: "O((M-N+1) * N) worst case, O(M+N) average with good hash.",
    space: "O(1) — constant hash variables.",
    dryrun: {
      testcase: "A='aab', B='aaabab'",
      headers: ["Window","Hash","Match A?","Action"],
      rows: [
        ["'aab'","computed","Yes","Return 0"],
        ["['aab'] substring found at index 0","—","—","Done"]
      ]
    }
  },
};


// ===== AUTO-INJECTED DETAILED LOGIC SPECS =====
Object.assign(problemLogicDatabase, {
  1382: {
    intuition: "Convert the unbalanced BST to a sorted array using in-order traversal (which visits nodes in sorted order). Then recursively rebuild a balanced BST by choosing the midpoint of each sub-range as the root, ensuring O(log N) height.",
    formula: "In-order collect: <code>inorder(node) → sorted[]</code><br>Balanced build: <code>mid = ⌊(L+R)/2⌋; root = sorted[mid]</code><br><code>root.left = build(L, mid-1); root.right = build(mid+1, R)</code>",
    time: "O(N) — single DFS pass to collect in-order + single pass to rebuild.",
    space: "O(N) — auxiliary array for sorted node values.",
    dryrun: {
      testcase: "tree = [1, null, 2, null, 3, null, 4] (right-skewed BST)",
      headers: ["Step", "In-Order Array", "Sub-range [L, R]", "Mid Index", "Subtree Root Value"],
      rows: [
        ["Collect", "[1, 2, 3, 4]", "Full", "—", "In-order done"],
        ["Build 1", "[1, 2, 3, 4]", "[0, 3]", "1", "2 becomes root"],
        ["Build 2", "[1, 2, 3, 4]", "[0, 0]", "0", "1 = left of 2"],
        ["Build 3", "[1, 2, 3, 4]", "[2, 3]", "2", "3 = right of 2"],
        ["Build 4", "[1, 2, 3, 4]", "[3, 3]", "3", "4 = right of 3"],
        ["Done", "—", "—", "—", "Balanced: height = 3 ✓"]
      ]
    }
  },
  669: {
    intuition: "Recursively trim the tree. If the node value < low, the entire left subtree is out — return trimmed right. If > high, return trimmed left. Otherwise trim both children and keep the node.",
    formula: "Trim rule:<br><code>if val < low: return trim(root.right, low, high)</code><br><code>if val > high: return trim(root.left, low, high)</code><br><code>else: root.left = trim(root.left); root.right = trim(root.right)</code>",
    time: "O(N) — visits every node once.",
    space: "O(H) — recursion stack where H is the height.",
    dryrun: {
      testcase: "root = [3,0,4,null,2,null,null,1], low = 1, high = 3",
      headers: ["Node Value", "Val < low?", "Val > high?", "Action", "Result"],
      rows: [
        ["3", "No", "No", "Trim children", "Keep node 3"],
        ["0", "Yes (0<1)", "No", "Return trim(right=2)", "Discard 0 subtree"],
        ["2", "No", "No", "Trim children", "Keep node 2"],
        ["1", "No", "No", "Both children null", "Keep node 1"],
        ["4", "No", "Yes (4>3)", "Return trim(left=null)", "Discard 4"],
        ["Final", "—", "—", "—", "Tree = [3, 2, null, 1]"]
      ]
    }
  },
  701: {
    intuition: "BST property guarantees: if val < root, insert into left; if val > root, insert into right. Recurse until finding a null slot — insert there. An AVL tree would rebalance after insertion.",
    formula: "Insert:<br><code>if root is null: return new Node(val)</code><br><code>if val < root.val: root.left = insert(root.left, val)</code><br><code>else: root.right = insert(root.right, val)</code>",
    time: "O(H) — where H is tree height; O(log N) for balanced BST.",
    space: "O(H) — recursion stack depth.",
    dryrun: {
      testcase: "root = [4,2,7,1,3], insert val = 5",
      headers: ["Current Node", "val vs node.val", "Direction", "Action"],
      rows: [
        ["4", "5 > 4", "Go Right", "Visit right child (7)"],
        ["7", "5 < 7", "Go Left", "Visit left child (null)"],
        ["null", "—", "—", "Insert new node (5) here"],
        ["Final", "—", "—", "Tree: [4,2,7,1,3,5,null] ✓"]
      ]
    }
  },
  1167: {
    intuition: "Use a Min-Heap. Repeatedly extract the two shortest sticks, combine them (cost = sum), push the combined back. Total cost accumulates each merge. This is the exact Huffman greedy merge strategy.",
    formula: "Greedy merge:<br><code>while (pq.size > 1): cost = pq.poll() + pq.poll()</code><br><code>total += cost; pq.offer(cost)</code><br>Result: total accumulated cost.",
    time: "O(N log N) — N-1 merges, each heap op is O(log N).",
    space: "O(N) — heap storage.",
    dryrun: {
      testcase: "sticks = [2, 4, 3]",
      headers: ["Heap (Sorted)", "First", "Second", "Merge Cost", "Total Cost"],
      rows: [
        ["[2, 3, 4]", "2", "3", "5", "5"],
        ["[4, 5]", "4", "5", "9", "14"],
        ["[9] → done", "—", "—", "—", "Answer = 14"]
      ]
    }
  },
  871: {
    intuition: "Greedy with a Max-Heap. At each station, collect all reachable fuel amounts. When we run out of fuel, greedily pick the largest stored fuel (from the heap) to refuel. Count how many refuels are needed.",
    formula: "Strategy:<br><code>for each station reachable from current fuel: heap.push(station.fuel)</code><br><code>if curr_fuel < 0: stops++; curr_fuel += heap.poll()</code><br><code>if heap empty and fuel < 0: return -1</code>",
    time: "O(N log N) — heap operations for N stations.",
    space: "O(N) — max-heap storage.",
    dryrun: {
      testcase: "target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]",
      headers: ["Position", "Fuel Before Station", "Action", "Heap Contents", "Stops"],
      rows: [
        ["Start", "10", "Begin journey", "[]", "0"],
        ["Reach 10", "0", "Collect 60 into heap", "[60]", "0"],
        ["Fuel runs out", "-10", "Refuel from heap: +60", "[]", "1"],
        ["Reach 20,30,60", "50→30→0", "Collect 30,30,40", "[40,30,30]", "1"],
        ["Fuel runs out", "-40", "Refuel from heap: +40", "[30,30]", "2"],
        ["Reach 100", "0", "Arrived!", "—", "2"]
      ]
    }
  },
  721: {
    intuition: "Use DSU to group accounts that share emails. Union accounts sharing any email. At the end, collect all emails per root account, sort them, and build the merged result.",
    formula: "For each account:<br><code>for each email: union(accounts, email → root_idx)</code><br>Collect: <code>root → Set of emails → sort → format output</code>",
    time: "O(N·K·α(N)) — N accounts, K emails each, near-linear with path compression.",
    space: "O(N·K) — email sets per component.",
    dryrun: {
      testcase: "accounts = [[John,a@,b@],[John,c@,d@],[John,b@,e@]]",
      headers: ["Step", "Email", "Action", "Component Root", "Merged Emails"],
      rows: [
        ["Init", "a@,b@", "Account 0 processed", "0", "{a@,b@}"],
        ["Init", "c@,d@", "Account 1 processed", "1", "{c@,d@}"],
        ["Union", "b@,e@", "Account 2: b@ links 0+2", "0", "{a@,b@,e@}"],
        ["Merge", "—", "Root 0 collects all", "0", "John: [a@,b@,e@] ✓"]
      ]
    }
  },
  839: {
    intuition: "Two strings are similar if one can be made from another by swapping 2 characters. Use DSU to group all similar strings into components. Count the number of components.",
    formula: "For each pair (i, j):<br><code>if areSimilar(strs[i], strs[j]): union(i, j)</code><br>Similar check: <code>diff positions ≤ 2 AND swapping those makes them equal</code>",
    time: "O(N² · L) — N strings, L length, pairwise comparison.",
    space: "O(N) — DSU parent array.",
    dryrun: {
      testcase: "strs = ['tars','rats','arts','star']",
      headers: ["Pair", "Diff Positions", "Similar?", "Union Action"],
      rows: [
        ["tars vs rats", "[0,1]: t↔r", "Yes", "union(0,1)"],
        ["tars vs arts", "[0,1,2]: t,a,r", "No (3 diffs)", "Skip"],
        ["rats vs arts", "[0,2]: r↔a,t↔s", "Yes (swap [0,2])", "union(1,2)"],
        ["star vs tars", "[0,1,2,3]", "No", "Skip"],
        ["Result", "—", "2 groups", "{tars,rats,arts}, {star}"]
      ]
    }
  },
  1061: {
    intuition: "Use DSU where each character is a node. For each equivalency pair (a, b), union their sets. To get the lex-smallest char, always point to the lexicographically smaller root.",
    formula: "Union by lex-order:<br><code>if find(a) < find(b): parent[find(b)] = find(a)</code><br><code>else: parent[find(a)] = find(b)</code><br>Map each char in s to its lex-smallest equivalent.",
    time: "O((E + |s|) · α(26)) — E equivalencies, near-linear.",
    space: "O(26) — fixed alphabet DSU.",
    dryrun: {
      testcase: "s = 'parker', t = 'morris', baseStr = 'parser'",
      headers: ["Pair (s[i], t[i])", "Union Action", "Root of 'p'", "Root of 'a'"],
      rows: [
        ["(p, m)", "union('p','m'), p<m so root='p'", "p", "a"],
        ["(a, o)", "union('a','o'), a<o so root='a'", "p", "a"],
        ["(r, r)", "Same — skip", "p", "a"],
        ["(k, r)", "union('k','r')", "p", "a"],
        ["Map 'parser'", "p→p, a→a, r→k, s→s, e→e, r→k", "—", "Result: 'paaker'"]
      ]
    }
  },
  307: {
    intuition: "Use a Segment Tree where each node stores the sum of a range [L, R]. Point updates modify a leaf and propagate sums up. Range queries split recursively into sub-segments.",
    formula: "Build: <code>tree[i] = tree[2i] + tree[2i+1]</code><br>Update: <code>tree[i] += delta; propagate up</code><br>Query: <code>if outside: 0; if inside: tree[i]; else split by mid</code>",
    time: "O(N) build, O(log N) update, O(log N) query.",
    space: "O(4N) — segment tree array.",
    dryrun: {
      testcase: "nums = [1,3,5], update(1,2), sumRange(0,2)",
      headers: ["Operation", "Tree Node", "Range [L,R]", "Value", "Action"],
      rows: [
        ["Build", "Node 1", "[0,2]", "9", "Root = 1+3+5"],
        ["Build", "Node 2", "[0,1]", "4", "Left child = 1+3"],
        ["Build", "Node 3", "[2,2]", "5", "Right leaf = 5"],
        ["Update(1,2)", "Node 2", "[0,1]", "3→5", "nums[1]: 3→2, diff=-1"],
        ["Update(1,2)", "Node 1", "[0,2]", "9→8", "Propagate up"],
        ["Query(0,2)", "Node 1", "[0,2]", "8", "Full coverage → 8 ✓"]
      ]
    }
  },
  315: {
    intuition: "Use a Segment Tree or BIT to count inversions. Process from right to left; for each num, query count of smaller elements already seen, then update the tree with current num's position.",
    formula: "For each num (right to left):<br><code>count[i] = query(0, rank(num)-1)</code><br><code>update(rank(num), +1)</code><br>rank() = position in sorted unique values.",
    time: "O(N log N) — N elements, each query/update O(log N).",
    space: "O(N) — segment tree or BIT.",
    dryrun: {
      testcase: "nums = [5, 2, 6, 1]",
      headers: ["Index (R→L)", "Num", "Query smaller seen?", "Count[i]", "Update BIT"],
      rows: [
        ["3", "1", "Query(0,0) = 0", "0", "BIT[rank(1)] += 1"],
        ["2", "6", "Query(0,3) = 1", "1", "BIT[rank(6)] += 1"],
        ["1", "2", "Query(0,0) = 1", "1", "BIT[rank(2)] += 1"],
        ["0", "5", "Query(0,2) = 2", "2", "BIT[rank(5)] += 1"],
        ["Result", "—", "—", "—", "[2, 1, 1, 0] ✓"]
      ]
    }
  },
  308: {
    intuition: "2D Segment Tree built over rows of 1D trees. Updates set a cell; queries compute the sum over a rectangular sub-grid by combining row-level range queries.",
    formula: "Build: each row has a 1D segment tree<br>Update(r,c,val): update row r's 1D tree at col c<br>Query(r1,c1,r2,c2): sum over rows r1..r2, each row queries [c1,c2]",
    time: "O(M·N) build, O(N log N) update, O(M log N) query.",
    space: "O(M·N) — 2D tree storage.",
    dryrun: {
      testcase: "matrix = [[3,0],[0,4]], update(0,0,2), query(0,0,1,1)",
      headers: ["Operation", "Row", "Cols [L,R]", "Value", "Result"],
      rows: [
        ["Build row 0", "0", "[0,1]", "3,0", "tree[0] built"],
        ["Build row 1", "1", "[0,1]", "0,4", "tree[1] built"],
        ["Update(0,0,2)", "0", "[0,0]", "3→2", "Row 0 tree updated"],
        ["Query(0,0,1,1)", "Row 0", "[0,1]", "2+0=2", "—"],
        ["Query(0,0,1,1)", "Row 1", "[0,1]", "0+4=4", "—"],
        ["Sum", "—", "—", "2+4=6", "Answer = 6 ✓"]
      ]
    }
  }
});

Object.assign(problemLogicDatabase, {
  74: {
    intuition: "Treat the 2D matrix as a sorted 1D array of length M * N. Binary search mid index. Map mid to row/col using divisions and modulos.",
    formula: "Coordinate mapping:<br><code>row = Math.floor(mid / cols); col = mid % cols;</code><br><code>val = matrix[row][col];</code>",
    time: "O(log(M * N)) — search space size halved at each step.",
    space: "O(1) — constant auxiliary space.",
    dryrun: {
      testcase: "matrix = [[1,3],[5,7]], target = 5",
      headers: ["L", "R", "Mid", "Row/Col", "Value", "Action"],
      rows: [
        ["0", "3", "1", "(0, 1)", "3", "3 < 5 → L = 2"],
        ["2", "3", "2", "(1, 0)", "5", "5 == 5 → Found!"]
      ]
    }
  },
  438: {
    intuition: "Use a fixed size sliding window of length pattern P. Maintain character frequency counts of target P and current window. Shift window right.",
    formula: "Count validation:<br><code>if (right - left + 1 == p.length) { if (matches(sCount, pCount)) res.push(left); }</code>",
    time: "O(N) — single linear pass through text s.",
    space: "O(1) — constant count maps (26 letter size limits).",
    dryrun: {
      testcase: "s = 'cbaebabacd', p = 'abc'",
      headers: ["L", "R", "Char In", "Char Out", "Counts Match?", "Indices Saved"],
      rows: [
        ["0", "2", "'a'", "−", "Yes (cba == abc)", "[0]"],
        ["1", "3", "'e'", "'c'", "No (bae != abc)", "[0]"],
        ["2", "4", "'b'", "'b'", "No", "[0]"]
      ]
    }
  },
  1004: {
    intuition: "Sliding window that expands right. Track zero counts. If zeroes count > k, shrink window from left until zeroes count <= k.",
    formula: "Zero check:<br><code>if (nums[right] == 0) zeroes++;</code><br><code>while (zeroes > k) { if (nums[left++] == 0) zeroes--; }</code>",
    time: "O(N) — single pass where left/right move at most N times.",
    space: "O(1) — constant space usage.",
    dryrun: {
      testcase: "nums = [1,1,0,0,1], k = 1",
      headers: ["L", "R", "val", "zeroes", "zeroes > k?", "Max Consecutive Ones"],
      rows: [
        ["0", "0", "1", "0", "No", "1"],
        ["0", "2", "0", "1", "No", "3"],
        ["0", "3", "0", "2", "Yes → L++ to 3", "3"]
      ]
    }
  },
  844: {
    intuition: "Use two pointers starting at the end of both strings. Process backspaces by skipping characters. Compare active characters.",
    formula: "Skip backspaces:<br><code>while (i >= 0 && (s[i] == '#' || skipS > 0)) { if (s[i] == '#') skipS++; else skipS--; i--; }</code>",
    time: "O(N + M) — single pass backwards.",
    space: "O(1) — in-place pointers.",
    dryrun: {
      testcase: "s = 'ab#c', t = 'ad#c'",
      headers: ["Pointer i (s)", "Pointer j (t)", "Char s[i]", "Char t[j]", "Match?", "Action"],
      rows: [
        ["3", "3", "'c'", "'c'", "Yes", "i--, j--"],
        ["2 ('#')", "2 ('#')", "Skip 'b'", "Skip 'd'", "−", "i=0, j=0"],
        ["0", "0", "'a'", "'a'", "Yes", "Both match! True"]
      ]
    }
  },
  150: {
    intuition: "Iterate tokens. If token is operand, push to stack. If token is operator, pop two operands, apply operator, and push result back.",
    formula: "Operator evaluation:<br><code>val2 = stack.pop(); val1 = stack.pop(); stack.push(eval(val1, val2, op));</code>",
    time: "O(N) — single pass processing N tokens.",
    space: "O(N) — stack depth storage.",
    dryrun: {
      testcase: "tokens = ['2', '1', '+', '3', '*']",
      headers: ["Token", "Stack Before", "Operation", "Stack After"],
      rows: [
        ["'2'", "[]", "Push 2", "[2]"],
        ["'1'", "[2]", "Push 1", "[2, 1]"],
        ["'+'", "[2, 1]", "Pop 1, 2 → 2+1 = 3 → Push 3", "[3]"],
        ["'3'", "[3]", "Push 3", "[3, 3]"],
        ["'*'", "[3, 3]", "Pop 3, 3 → 3*3 = 9 → Push 9", "[9]"]
      ]
    }
  },
  155: {
    intuition: "Standard stack pairing. Maintain two stacks: one for standard values and another for minimum values up to that element.",
    formula: "Min tracking:<br><code>stack.push(val); minStack.push(Math.min(val, minStack.top()));</code>",
    time: "O(1) — constant time for standard stack routines.",
    space: "O(N) — auxiliary storage for minimum counts.",
    dryrun: {
      testcase: "push(-2), push(0), push(-3), getMin()",
      headers: ["Operation", "Value", "Val Stack", "Min Stack", "getMin() Output"],
      rows: [
        ["push", "-2", "[-2]", "[-2]", "−"],
        ["push", "0", "[-2, 0]", "[-2, -2]", "−"],
        ["push", "-3", "[-2, 0, -3]", "[-2, -2, -3]", "−"],
        ["getMin", "−", "[-2, 0, -3]", "[-2, -2, -3]", "-3"]
      ]
    }
  },
  402: {
    intuition: "Build a monotonic increasing stack of digits. If current digit is smaller than stack top, pop stack top and decrement k. Strip leading zeroes.",
    formula: "Digit removal:<br><code>while (k > 0 && num[i] < stack.top()) { stack.pop(); k--; } stack.push(num[i]);</code>",
    time: "O(N) — linear complexity bounds.",
    space: "O(N) — auxiliary stack elements.",
    dryrun: {
      testcase: "num = '1432', k = 1",
      headers: ["Digit", "k Left", "Stack Before", "Action", "Stack After"],
      rows: [
        ["'1'", "1", "[]", "Push '1'", "['1']"],
        ["'4'", "1", "['1']", "Push '4'", "['1', '4']"],
        ["'3'", "1", "['1', '4']", "Pop '4' (3 < 4, k=0)", "['1', '3']"],
        ["'2'", "0", "['1', '3']", "Push '2' (k=0)", "['1', '3', '2']"]
      ]
    }
  }
,


  20: {
    intuition: "Use a stack. Iterate through characters. If open bracket, push corresponding close bracket to stack. If close bracket, pop from stack and check if it matches.",
    formula: "Bracket pairing check:<br><code>if (char == '(') stack.push(')');</code><br><code>else if (stack.pop() != char) return false;</code>",
    time: "O(N) — single pass.",
    space: "O(N) — stack size.",
    dryrun: {
      testcase: "s = '()[]'",
      headers: ["Char", "Stack Before", "Action", "Stack After", "Matches?"],
      rows: [
        ["'('", "[]", "Push ')'", "[')']", "Yes"],
        ["')'", "[')']", "Pop", "[]", "')' == ')'"],
        ["'['", "[]", "Push ']'", "[']']", "Yes"],
        ["']'", "[']']", "Pop", "[]", "']' == ']'"]
      ]
    }
  },
  100: {
    intuition: "DFS recursion. Two binary trees are identical if their root values are equal, and their left subtrees are identical, and their right subtrees are identical.",
    formula: "Identical condition:<br><code>if (!p && !q) return true;</code><br><code>if (!p || !q || p.val != q.val) return false;</code><br><code>return isSame(p.left, q.left) && isSame(p.right, q.right);</code>",
    time: "O(N) — visits each node at most once.",
    space: "O(H) — recursion stack bounded by tree height H.",
    dryrun: {
      testcase: "Tree p: [1,2], Tree q: [1,2]",
      headers: ["p Node", "q Node", "Vals equal?", "Left Same?", "Right Same?", "Result"],
      rows: [
        ["1 (root)", "1 (root)", "Yes", "recurse left", "recurse right", "true"],
        ["2 (left)", "2 (left)", "Yes", "both null → true", "both null → true", "true"]
      ]
    }
  },
  101: {
    intuition: "DFS recursion. A binary tree is symmetric if its left subtree is a mirror reflection of its right subtree.",
    formula: "Mirror check:<br><code>isMirror(t1, t2) -> t1.val == t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)</code>",
    time: "O(N) — visits each node at most once.",
    space: "O(H) — recursion stack.",
    dryrun: {
      testcase: "Root [1, 2, 2]",
      headers: ["t1 Node", "t2 Node", "Values equal?", "Mirror branch checks", "Result"],
      rows: [
        ["2 (left)", "2 (right)", "Yes", "isMirror(2.left, 2.right) & isMirror(2.right, 2.left)", "true"]
      ]
    }
  },
  125: {
    intuition: "Use two pointers (left=0, right=n-1). Skip non-alphanumeric characters. Compare characters case-insensitively. Move pointers inward.",
    formula: "Skip and compare:<br><code>while (!isAlphanumeric(s[left])) left++;</code><br><code>if (toLowerCase(s[left]) != toLowerCase(s[right])) return false;</code>",
    time: "O(N) — single pass.",
    space: "O(1) — in-place pointers.",
    dryrun: {
      testcase: "s = 'A man, a plan, a canal: Panama'",
      headers: ["Left Pointer", "Right Pointer", "L-Char (alphanum)", "R-Char (alphanum)", "Match?"],
      rows: [
        ["0 ('A')", "29 ('a')", "'a'", "'a'", "Yes, L++, R--"],
        ["1 (' ')", "28 ('m')", "Skip space → 'm'", "'m'", "Yes, L++, R--"]
      ]
    }
  },
  206: {
    intuition: "Iterate through the linked list. Keep a prev pointer initialized to null. At each step, store curr.next, redirect curr.next to prev, and advance both pointers.",
    formula: "Pointer adjustment:<br><code>next = curr.next; curr.next = prev; prev = curr; curr = next;</code>",
    time: "O(N) — single pass.",
    space: "O(1) — constant auxiliary pointers.",
    dryrun: {
      testcase: "1→2→3→null",
      headers: ["Iteration", "curr node", "prev node", "Link changes", "Next state (prev, curr)"],
      rows: [
        ["Init", "1", "null", "−", "(null, 1)"],
        ["1", "1", "null", "1.next = null", "(1, 2)"],
        ["2", "2", "1", "2.next = 1", "(2, 3)"],
        ["3", "3", "2", "3.next = 2", "(3, null)"]
      ]
    }
  },
  2381: {
    intuition: "Apply multiple shift operations on string using a difference array of shift amounts. Each [i, j, direction, amount] updates shift[i] += amount, shift[j+1] -= amount (or negated for right). Apply shifts using prefix sum, then rotate characters.",
    formula: "Difference array shift: <code>diff[i] += amount; diff[j+1] -= amount</code><br>Apply: <code>shift[i] = (prefix[i] % 26 + 26) % 26; s[i] = rotate(s[i], shift[i])</code>",
    time: "O(N + Q) — N chars + Q shift updates.",
    space: "O(N) — shift difference array.",
    dryrun: {
      testcase: "s='abc', shifts=[[0,1,0,1],[1,2,1,2]]",
      headers: ["Shift","i","j","dir","amount","Diff Array"],
      rows: [
        ["[0,1,0,1]","0","1","0 (left)","1","diff[0]-=1, diff[2]+=1"],
        ["[1,2,1,2]","1","2","1 (right)","2","diff[1]+=2, diff[3]-=2"],
        ["Prefix Sum","−","−","−","−","[-1,1,3] after partial prefix"],
        ["Apply to 'abc'","a→-1→z","b→1→c","c→3→f","−","Result: 'zcf'"]
      ]
    }
  },
  17: {
    intuition: "Use backtracking search recursion to build combinations character-by-character from mapping digit options.",
    formula: "Recursion state: <code>backtrack(idx, path) -> for char in map[digits[idx]]: backtrack(idx+1, path+char)</code>",
    time: "O(4^N * N) — where N is the digits length.",
    space: "O(N) — stack recursion depth.",
    dryrun: {
      testcase: "digits = '23'",
      headers: ["Index", "Path Progress", "Choices Left", "Next Choice", "Action"],
      rows: [
        ["0", "''", "['a','b','c']", "'a'", "Recurse level 1"],
        ["1", "'a'", "['d','e','f']", "'d'", "Save 'ad', backtrack"],
        ["1", "'a'", "['e','f']", "'e'", "Save 'ae', backtrack"]
      ]
    }
  },
  22: {
    intuition: "Construct valid brackets recursively by keeping counts of open and close brackets used. Close can only be placed when open > close.",
    formula: "Decision branch:<br><code>if (open < n) recurse(open + 1, close);</code><br><code>if (close < open) recurse(open, close + 1);</code>",
    time: "O(4^N / sqrt(N)) — Catalan number count.",
    space: "O(N) — stack recursion depth.",
    dryrun: {
      testcase: "n = 2",
      headers: ["open", "close", "Active Path", "Condition Met?", "Action"],
      rows: [
        ["0", "0", "''", "open < 2", "Add '('"],
        ["1", "0", "'('", "open < 2, close < open", "Branch: add '(' or ')'"],
        ["2", "0", "'(('", "close < open", "Add ')' -> '(('"]
      ]
    }
  },
  37: {
    intuition: "Fill empty cells with digits 1-9 sequentially. Use backtracking to undo a candidate if it violates row, column, or 3x3 block uniqueness constraints.",
    formula: "Constraint: <code>row[r].has(d) || col[c].has(d) || block[b].has(d) == false</code>",
    time: "O(9^(N)) — bounded worst case search space.",
    space: "O(81) = O(1) — fixed grid recursion depth.",
    dryrun: {
      testcase: "Solve cell (0, 2) in Sudoku grid",
      headers: ["Cell (r, c)", "Candidate", "Valid in Row/Col/Box?", "State Change", "Action Result"],
      rows: [
        ["(0, 2)", "1", "No (row conflict)", "None", "Try 2"],
        ["(0, 2)", "2", "Yes", "board[0][2] = 2", "Recurse next"]
      ]
    }
  },
  39: {
    intuition: "Recursively build candidate combinations. At each step, either reuse the current candidate or move to the next candidate to avoid duplicate combinations.",
    formula: "Decision state:<br><code>dfs(i, currentSum) -> dfs(i, sum + candidates[i])</code> (reuse)<br><code>dfs(i+1, sum)</code> (skip)",
    time: "O(2^T * N) — T is target sum, N is candidate count.",
    space: "O(T) — recursion depth space.",
    dryrun: {
      testcase: "candidates = [2, 3], target = 5",
      headers: ["Index i", "Sum", "Current Path", "Comparison", "Decision"],
      rows: [
        ["0", "0", "[]", "0 < 5", "Take 2"],
        ["0", "2", "[2]", "2 < 5", "Take 2"],
        ["0", "4", "[2,2]", "4 < 5", "Try 2 -> sum 6 > 5 (reject). Skip 2"],
        ["1", "4", "[2,2]", "4 < 5", "Take 3 -> sum 7 > 5 (reject). Backtrack"]
      ]
    }
  },
  40: {
    intuition: "Sort candidates first. Recursively build combinations. To avoid duplicates, skip adjacent identical candidates in the same recursion level.",
    formula: "De-duplication rule:<br><code>if (i > start && candidates[i] == candidates[i-1]) continue;</code>",
    time: "O(2^N)",
    space: "O(N)",
    dryrun: {
      testcase: "candidates = [1, 1, 2], target = 3",
      headers: ["Level Start", "i Scan", "candidates[i]", "Dup Skip?", "Combination Path"],
      rows: [
        ["0", "0", "1", "No", "[1]"],
        ["1", "1", "1", "No", "[1, 1]"],
        ["0", "1", "1", "Yes", "Skip candidate"],
        ["0", "2", "2", "No", "[2] (add 1 -> target 3)"]
      ]
    }
  },
  46: {
    intuition: "Build permutations recursively. Maintain a used boolean set/list. In each recursion level, try all unused elements and backtrack.",
    formula: "Choice tracking:<br><code>if (used[i]) continue;</code><br><code>used[i]=true; dfs(); used[i]=false;</code>",
    time: "O(N! * N) — where N is input elements length.",
    space: "O(N) — stack recursion depth.",
    dryrun: {
      testcase: "nums = [1, 2, 3]",
      headers: ["Path", "used set", "Available options", "Picked option", "Result"],
      rows: [
        ["[]", "{}", "[1, 2, 3]", "1", "Recurse level 1"],
        ["[1]", "{1}", "[2, 3]", "2", "Recurse level 2"],
        ["[1, 2]", "{1, 2}", "[3]", "3", "Save [1,2,3], backtrack"]
      ]
    }
  },
  51: {
    intuition: "Place queens row-by-row. Maintain column, diagonal (r-c), and anti-diagonal (r+c) sets to detect overlap. Backtrack when a column fails.",
    formula: "Col & Diag conflicts check:<br><code>col in cols || (row - col) in diag1 || (row + col) in diag2</code>",
    time: "O(N!) — search space bounded by N factorial.",
    space: "O(N) — recursion stack.",
    dryrun: {
      testcase: "Place queen on 4x4 board at row 1",
      headers: ["Row", "Col", "Cols Used", "Diags Used", "Conflict?", "Action Result"],
      rows: [
        ["0", "0", "{}", "{}", "No", "Place at (0,0). cols={0}, diag1={0}, diag2={0}"],
        ["1", "0", "{0}", "{0}", "Yes (col)", "Skip"],
        ["1", "1", "{0}", "{0}", "Yes (diag)", "Skip"],
        ["1", "2", "{0}", "{0}", "No", "Place at (1,2)"]
      ]
    }
  },
  78: {
    intuition: "Generate the power set. At each element, make a binary choice: either include the current element in the subset or exclude it.",
    formula: "Binary choice tree:<br><code>dfs(i) -> subset.push(nums[i]); dfs(i+1); subset.pop(); dfs(i+1);</code>",
    time: "O(2^N * N)",
    space: "O(N)",
    dryrun: {
      testcase: "nums = [1, 2]",
      headers: ["Index i", "Choice on nums[i]", "Subset Path", "Action Result"],
      rows: [
        ["0", "Include 1", "[1]", "Recurse next index"],
        ["1", "Include 2", "[1, 2]", "Save [1,2], backtrack"],
        ["1", "Exclude 2", "[1]", "Save [1], backtrack"],
        ["0", "Exclude 1", "[]", "Recurse without 1"]
      ]
    }
  },
  90: {
    intuition: "Sort candidates. Binary recursion choices. To prevent duplicate subsets, if excluding an element, skip all subsequent identical elements at the same level.",
    formula: "Duplicate skipping:<br><code>while (i < nums.length && nums[i] == nums[i-1]) i++;</code>",
    time: "O(2^N * N)",
    space: "O(N)",
    dryrun: {
      testcase: "nums = [1, 2, 2]",
      headers: ["i Index", "nums[i]", "Subset path", "Exclude skip action", "Result Subsets"],
      rows: [
        ["0", "1", "[1]", "Include", "[1]"],
        ["1", "2", "[1, 2]", "Include", "[1,2]"],
        ["2", "2", "[1, 2, 2]", "Include", "[1,2,2]"],
        ["-", "-", "exclude 2", "skip next 2 at index 2", "De-duped: [1,2] only once"]
      ]
    }
  },
  131: {
    intuition: "Recursively slice the string. If the current prefix is a palindrome, recurse on the remainder. Backtrack on return.",
    formula: "Palindrome condition:<br><code>if (isPalindrome(s[start..i])) recurse(i + 1);</code>",
    time: "O(N * 2^N) — N checks on 2^N recursive states.",
    space: "O(N) — recursion depth.",
    dryrun: {
      testcase: "s = 'aab'",
      headers: ["Start Index", "Partition Try", "Palindrome?", "Recurse remainder", "Result"],
      rows: [
        ["0", "'a'", "Yes", "recurse on 'ab'", "−"],
        ["1", "'a'", "Yes", "recurse on 'b'", "−"],
        ["2", "'b'", "Yes", "reached end", "Save ['a','a','b']"]
      ]
    }
  },
  2151: {
    intuition: "Try all 2^N combinations of roles (good=1, bad=0). For each combination, verify if the statements made by the assumed 'good' people are consistent. Find the valid combination with the maximum good people.",
    formula: "Assumed good statement check:<br><code>if (roles[i] == 1 && statements[i][j] != roles[j]) invalid;</code>",
    time: "O(N² * 2^N)",
    space: "O(N) — recursion depth.",
    dryrun: {
      testcase: "2 people, statements = [[2,1],[0,2]] (2=no statement)",
      headers: ["Role combo [P0,P1]", "P0 assumes good?", "Statement match?", "P1 assumes good?", "Statement match?", "Valid?"],
      rows: [
        ["[1,1] (both good)","Yes","statements[0][1]=1 == P1(good)","Yes","statements[1][0]=0 == P0(good)? No!","Invalid combo"],
        ["[1,0] (P0 good)","Yes","statements[0][1]=1 == P1(good)? No!","No (bad person statement ignored)","−","Invalid combo"]
      ]
    }
  },
  88: {
    intuition: "Merge from right to left using three pointers: p1 at end of nums1 elements, p2 at end of nums2, and p at end of nums1 array. Place the larger element at p and decrement pointer.",
    formula: "Merge from back:<br><code>if (nums1[p1] > nums2[p2]) { nums1[p] = nums1[p1--]; } else { nums1[p] = nums2[p2--]; }</code>",
    time: "O(M + N) — single pass.",
    space: "O(1) — in-place merge.",
    dryrun: {
      testcase: "nums1 = [1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3",
      headers: ["p1 (nums1)", "p2 (nums2)", "p (placement)", "Comparison", "Action Result"],
      rows: [
        ["2 (val 3)", "2 (val 6)", "5", "6 > 3", "nums1[5] = 6, p2--"],
        ["2 (val 3)", "1 (val 5)", "4", "5 > 3", "nums1[4] = 5, p2--"],
        ["2 (val 3)", "0 (val 2)", "3", "3 > 2", "nums1[3] = 3, p1--"]
      ]
    }
  },
  148: {
    intuition: "Divide the linked list into two halves using fast/slow pointers. Recursively sort both halves, then merge them back using a standard sorted list merge.",
    formula: "Split: <code>slow = mid, fast = head; slow.next = null;</code><br>Merge: <code>mergeTwoLists(leftSorted, rightSorted)</code>",
    time: "O(N log N) — mergesort complexity.",
    space: "O(log N) — recursion call stack.",
    dryrun: {
      testcase: "Sort 4→2→1→3",
      headers: ["Input list", "Mid split point", "Left half", "Right half", "Merged Output"],
      rows: [
        ["4→2→1→3", "node 2", "4→2", "1→3", "−"],
        ["4→2 (left)", "node 4", "4", "2", "2→4"],
        ["1→3 (right)", "node 1", "1", "3", "1→3"],
        ["Merge", "−", "2→4", "1→3", "1→2→3→4"]
      ]
    }
  },
  912: {
    intuition: "Use Merge Sort to divide array recursively into halves. Merge the sorted halves using a temporary buffer. This guarantees stable O(N log N) time complexity.",
    formula: "Halves division:<br><code>mid = (left + right) >> 1; mergeSort(left, mid); mergeSort(mid+1, right); merge(left, mid, right);</code>",
    time: "O(N log N) — worst, average, best case.",
    space: "O(N) — auxiliary buffer space.",
    dryrun: {
      testcase: "nums = [5, 2, 3, 1]",
      headers: ["Range [L, R]", "Mid", "Sub-arrays split", "Sorted Sub-arrays", "Merged Result"],
      rows: [
        ["[0, 3]", "1", "[5, 2] and [3, 1]", "−", "−"],
        ["[0, 1]", "0", "[5] and [2]", "[5], [2]", "[2, 5]"],
        ["[2, 3]", "2", "[3] and [1]", "[3], [1]", "[1, 3]"],
        ["[0, 3]", "−", "−", "[2, 5], [1, 3]", "[1, 2, 3, 5]"]
      ]
    }
  },
  977: {
    intuition: "Use two pointers starting at boundaries (left=0, right=n-1). Square both values. Place the larger square at the end of the result array and shift that pointer.",
    formula: "Place from back:<br><code>if (val[left]² > val[right]²) { res[p--] = val[left]²; left++; } else { res[p--] = val[right]²; right--; }</code>",
    time: "O(N) — single pass.",
    space: "O(N) — output array.",
    dryrun: {
      testcase: "nums = [-4, -1, 0, 3, 10]",
      headers: ["L", "R", "L² vs R²", "Index p (placement)", "Result Array State"],
      rows: [
        ["0 (val -4)", "4 (val 10)", "16 < 100", "4", "[..., 100]"],
        ["0 (val -4)", "3 (val 3)", "16 > 9", "3", "[..., 16, 100]"],
        ["1 (val -1)", "3 (val 3)", "1 < 9", "2", "[..., 9, 16, 100]"]
      ]
    }
  },
  179: {
    intuition: "Convert numbers to strings. Define a custom sort comparator: compare string concatenated pairs. Sort descending, and concatenate.",
    formula: "Sort comparator:<br><code>compare(a, b) -> return (b + a) - (a + b)</code>",
    time: "O(N log N * L) — sorting N string variables of length L.",
    space: "O(N) — string buffers.",
    dryrun: {
      testcase: "nums = [3, 30]",
      headers: ["Pair (a, b)", "a + b", "b + a", "Comparison (b+a vs a+b)", "Sort Order"],
      rows: [
        ["(3, 30)", "'330'", "'303'", "330 > 303 → '3' before '30'", "['3', '30'] → Largest '330'"]
      ]
    }
  },
  146: {
    intuition: "Pair a Hash Map (for O(1) key lookups) with a Doubly Linked List (for O(1) node additions/removals) to track node access recency.",
    formula: "Cache hit: update DLL pointer: <code>moveToHead(node)</code><br>Cache miss: add to head. If full: <code>evict(tail.prev)</code>",
    time: "O(1) average for both get and put operations.",
    space: "O(capacity) — storage nodes.",
    dryrun: {
      testcase: "put(1, 'A'), put(2, 'B'), get(1), put(3, 'C') (capacity=2)",
      headers: ["Operation", "Key", "Map state", "DLL List Order (Head → Tail)", "Evicted Key"],
      rows: [
        ["put(1)", "1", "{1: node1}", "1", "None"],
        ["put(2)", "2", "{1: node1, 2: node2}", "2 → 1", "None"],
        ["get(1)", "1", "{1: node1, 2: node2}", "1 → 2", "None"],
        ["put(3)", "3", "{1: node1, 3: node3}", "3 → 1", "2"]
      ]
    }
  },
  295: {
    intuition: "Use two priority queues (Heaps): a max-heap to store the smaller half of numbers, and a min-heap to store the larger half of numbers.",
    formula: "Median calculation:<br>if <code>maxHeap.size > minHeap.size</code>: return <code>maxHeap.top</code><br>else: return <code>(maxHeap.top + minHeap.top) / 2</code>",
    time: "O(log N) — heap insert operations.",
    space: "O(N) — heap storage.",
    dryrun: {
      testcase: "Add 1, then 3, then 2",
      headers: ["Stream value", "Max-Heap (lower)", "Min-Heap (upper)", "Rebalanced?", "Median"],
      rows: [
        ["1", "[1]", "[]", "Yes", "1"],
        ["3", "[1]", "[3]", "Yes", "(1 + 3)/2 = 2"],
        ["2", "[2, 1]", "[3]", "Yes", "2"]
      ]
    }
  },
  307: {
    intuition: "Use a Fenwick Tree (Binary Indexed Tree) or Segment Tree. Supports range sum queries and element point updates in O(log N) time.",
    formula: "Fenwick update: <code>for (; idx <= n; idx += idx & -idx) tree[idx] += diff;</code><br>Fenwick query: <code>for (; idx > 0; idx -= idx & -idx) sum += tree[idx];</code>",
    time: "O(log N) update, O(log N) sumRange query.",
    space: "O(N) — tree storage array.",
    dryrun: {
      testcase: "nums = [1, 3, 5], query(0,2), update(1, 2) (diff = -1)",
      headers: ["Op", "Index", "BIT tree state", "Sum query index 3", "Result Value"],
      rows: [
        ["Build", "−", "[0, 1, 4, 5]", "−", "−"],
        ["query(0,2)", "3", "[0, 1, 4, 5]", "sum(3) = BIT[3]+BIT[2] = 5+4 = 9", "9"],
        ["update(1, 2)", "2", "[0, 1, 3, 4]", "−", "Done"]
      ]
    }
  },
  315: {
    intuition: "Iterate through elements from right to left. Insert each element into a Fenwick Tree (BIT). Query the prefix sum count of values strictly smaller than the current element.",
    formula: "Coordinate compression index lookup:<br><code>ans[i] = query(compressedRank[nums[i]] - 1);</code><br><code>update(compressedRank[nums[i]], 1);</code>",
    time: "O(N log N) — sorting compression + tree updates.",
    space: "O(N) — Fenwick tree storage.",
    dryrun: {
      testcase: "nums = [5, 2, 6, 1]",
      headers: ["Index i", "nums[i]", "BIT indices updated", "query(nums[i]-1)", "ans[i]"],
      rows: [
        ["3", "1", "1", "query(0) = 0", "0"],
        ["2", "6", "6", "query(5) = 1 (node 1 exists)", "1"],
        ["1", "2", "2", "query(1) = 1", "1"],
        ["0", "5", "5", "query(4) = 2 (nodes 1,2 exist)", "2"]
      ]
    }
  },
  460: {
    intuition: "Maintain frequency lists. Map each frequency to a DLL of keys. Track minFreq. Evict the LRU key from the DLL corresponding to minFreq when capacity is exceeded.",
    formula: "Access upgrade:<br><code>node.freq++; move node to dll[freq];</code><br>If DLL at minFreq becomes empty: <code>minFreq++</code>",
    time: "O(1) average for get and put.",
    space: "O(capacity) — storage maps.",
    dryrun: {
      testcase: "put(1,'A'), put(2,'B'), get(1), put(3,'C') (capacity=2)",
      headers: ["Op", "freqMap state", "freqList mapping", "minFreq", "Evicted Key"],
      rows: [
        ["put(1)", "{1: node1(f=1)}", "{1: [1]}", "1", "None"],
        ["put(2)", "{1: node1, 2: node2(f=1)}", "{1: [2, 1]}", "1", "None"],
        ["get(1)", "{1: (f=2), 2: (f=1)}", "{2: [1], 1: [2]}", "1", "None"],
        ["put(3)", "{1: (f=2), 3: (f=1)}", "{2: [1], 1: [3]}", "1", "2"]
      ]
    }
  },
  493: {
    intuition: "Use Merge Sort division. Before merging sorted halves, count indices where nums[i] > 2 * nums[j] using two pointers.",
    formula: "Reverse pair condition count:<br><code>while (j <= right && nums[i] > 2 * nums[j]) j++;</code><br><code>count += (j - (mid + 1));</code>",
    time: "O(N log N) — sorting & verification pass.",
    space: "O(N) — auxiliary sort buffer.",
    dryrun: {
      testcase: "nums = [1, 3, 2, 3, 1]",
      headers: ["Left Sorted", "Right Sorted", "i pointer", "j pointer", "nums[i] > 2*nums[j]", "Count Added"],
      rows: [
        ["[1, 3]", "[2, 3, 1]...split", "−", "−", "−", "−"],
        ["Merge [3]", "[1]", "3", "1", "3 > 2", "Count += 1"],
        ["Merge [1,3]", "[2, 3]", "3", "2", "3 > 4 (No)", "Count += 0"]
      ]
    }
  },
  28: {
    intuition: "KMP algorithm. Build LPS array of the needle. Scan the haystack string. When characters match, advance both. On mismatch, fallback using LPS.",
    formula: "Fallback rule: <code>if (j > 0) j = lps[j-1]; else i++;</code>",
    time: "O(N + M) — linear text traversal.",
    space: "O(M) — LPS array of length M.",
    dryrun: {
      testcase: "haystack='sadbutsad', needle='sad'",
      headers: ["i (Haystack)", "j (Needle)", "Match?", "LPS Shift", "Position index"],
      rows: [
        ["0 ('s')", "0 ('s')", "Yes", "i++, j++", "−"],
        ["1 ('a')", "1 ('a')", "Yes", "i++, j++", "−"],
        ["2 ('d')", "2 ('d')", "Yes", "j == 3 (needle end!)", "Return 0"]
      ]
    }
  },
  214: {
    intuition: "KMP helper. Create a search string: s + '#' + reversed(s). Build LPS array of this string. The last LPS value indicates the longest palindromic prefix. Prepend the remaining reversed string.",
    formula: "Palindromic prefix size:<br><code>prefix_len = lps[combined.length - 1]</code><br><code>result = reverse(s[prefix_len..end]) + s</code>",
    time: "O(N) — linear string build + KMP.",
    space: "O(N) — temporary buffers.",
    dryrun: {
      testcase: "s = 'aacecaaa'",
      headers: ["Combined string (s + '#' + rev)", "LPS Array End", "Prefix size", "Remaining reversed", "Result"],
      rows: [
        ["'aacecaaa#aaacecaa'", "LPS: [..., 7]", "7", "'a'", "'aaacecaaa'"]
      ]
    }
  },
  459: {
    intuition: "String duplicates duplicate matching. Duplicate the string: t = s + s. Remove the first and last characters of t. If s is present in t, a repeated substring pattern exists.",
    formula: "Pattern detection:<br><code>(s + s).slice(1, -1).includes(s)</code>",
    time: "O(N) — string concatenation + lookup search.",
    space: "O(N) — concatenated buffer.",
    dryrun: {
      testcase: "s = 'abab'",
      headers: ["Concatenation s+s", "Slice (1, -1)", "Contains 'abab'?", "Repeated Substring?"],
      rows: [
        ["'abababab'", "'bababa'", "Yes", "true"]
      ]
    }
  },
  1044: {
    intuition: "Binary search on duplicate string length (1 to N-1). For a candidate length, use Rabin-Karp rolling hash (with modulo de-duplication) to identify if any substring of that length occurs twice.",
    formula: "Rabin-Karp search hash:<br><code>hash = (hash * base + char) % modulo; check duplicates in set;</code>",
    time: "O(N log N) — binary iterations of N-length rolling hashes.",
    space: "O(N) — set of hashes.",
    dryrun: {
      testcase: "s = 'banana'",
      headers: ["Low", "High", "Mid (length)", "Duplicates Found? (Hashes)", "Action Result"],
      rows: [
        ["1", "5", "3", "Yes ('ana')", "Save 'ana', High = 3"],
        ["1", "3", "2", "Yes ('an', 'na')", "High = 2"],
        ["1", "2", "1", "Yes ('a', 'n')", "Answer length = 3"]
      ]
    }
  },
  1392: {
    intuition: "A happy prefix is a prefix that is also a suffix. Run the KMP LPS array builder on the string. The last LPS value gives the length of the longest happy prefix.",
    formula: "Happy prefix range:<br><code>happy_len = lps[s.length - 1]; return s[0..happy_len-1];</code>",
    time: "O(N) — single pass array builder.",
    space: "O(N) — LPS storage array.",
    dryrun: {
      testcase: "s = 'level'",
      headers: ["Index i", "s[i]", "LPS Array State", "Last Value", "Happy Prefix String"],
      rows: [
        ["0", "l", "[0, 0, 0, 0, 0]", "−", "−"],
        ["...","...","[0, 0, 0, 0, 1]","1","'l'"]
      ]
    }
  }

});

const patternLogicTemplates = {
  'Sliding Window': {
    intuition: "Maintain a dynamic window defined by two pointers (left and right) representing the current sub-segment. Expand the right pointer to ingest elements, and shrink from the left pointer when window boundaries violate search constraints.",
    formula: "Window span: <code>[left, right]</code><br>Constraint validation:<br><code>while (!isValid(left...right)) { left++; }</code>",
    time: "O(N) — each element is visited by left and right pointers at most twice.",
    space: "O(K) — space to store active window counts/elements in a set or map.",
    dryrun: {
      testcase: "A = [1, 2, 1, 3], constraint: unique",
      headers: ["L", "R", "A[R]", "Window State", "Valid?", "Action Result"],
      rows: [
        ["0", "0", "1", "{1}", "Yes", "Width = 1"],
        ["0", "1", "2", "{1, 2}", "Yes", "Width = 2"],
        ["0", "2", "1", "{1, 2}", "No (dup 1)", "Shrink: L++ to 1. State valid: {2, 1}. Width = 2"]
      ]
    }
  },
  'Two Pointers': {
    intuition: "Use two index pointers (typically left and right) starting at boundaries and converging inward, or moving together at different speeds (slow/fast), to evaluate target conditions in-place.",
    formula: "Convergence bounds:<br><code>while (left < right) { evaluate(left, right); shiftPointers(); }</code>",
    time: "O(N) — single linear pass traversals.",
    space: "O(1) — constant space updates.",
    dryrun: {
      testcase: "A = [1, 2, 3, 4], target = 5",
      headers: ["L", "R", "Sum (A[L]+A[R])", "Target Comparison", "Action Result"],
      rows: [
        ["0 (val 1)", "3 (val 4)", "5", "5 == 5", "Match found! Stop."],
        ["-", "-", "-", "-", "-"]
      ]
    }
  },
  'Hashing / Frequency Maps': {
    intuition: "Build a frequency distribution map or value-index dictionary of elements to achieve constant O(1) time complexity search lookups.",
    formula: "Map mapping:<br><code>map.set(key, value)</code><br>Query: <code>if (map.has(key)) // O(1) resolution</code>",
    time: "O(N) — linear scan to build hash map.",
    space: "O(N) — space to store elements in the hash map.",
    dryrun: {
      testcase: "Keys = [A, B, A]",
      headers: ["Step", "Key", "Map State Before", "Action Result"],
      rows: [
        ["1", "A", "{}", "Store {A: 1}"],
        ["2", "B", "{A: 1}", "Store {A: 1, B: 1}"],
        ["3", "A", "{A: 1, B: 1}", "Key exists! Update count: {A: 2, B: 1}"]
      ]
    }
  },
  'Prefix Sum / Running Sum': {
    intuition: "Precompute the cumulative sums of the array so that range sum queries over any arbitrary index range [L, R] can be answered in O(1) time.",
    formula: "Prefix array relation:<br><code>P[i] = P[i-1] + A[i]</code><br>Range query:<br><code>sum(L...R) = P[R] - P[L-1]</code>",
    time: "O(N) — single pass to compute prefix sums.",
    space: "O(N) or O(1) — prefix array or running sum variable.",
    dryrun: {
      testcase: "A = [2, 4, 1, 5]",
      headers: ["Index i", "A[i]", "Prefix Sum P[i]", "Query Range [1, 3] Result"],
      rows: [
        ["0", "2", "2", "-"],
        ["1", "4", "6", "-"],
        ["2", "1", "7", "-"],
        ["3", "5", "12", "Sum = P[3] - P[0] = 12 - 2 = 10"]
      ]
    }
  },
  'Difference Array / Range Updates': {
    intuition: "Perform multiple range addition queries in O(1) time by marking boundaries of a difference array, then apply a prefix sum scan to obtain the final values.",
    formula: "Range update [L, R] with value val:<br><code>D[L] += val; D[R+1] -= val;</code><br>Final resolution: <code>A[i] = sum(D[0...i])</code>",
    time: "O(N + Q) — where Q is the number of range updates and N is array size.",
    space: "O(N) — size of difference array.",
    dryrun: {
      testcase: "Add 3 to range [1, 2] in 4-len array",
      headers: ["Diff Array Index", "Update markers", "Prefix Sum (A[i])", "Result Value"],
      rows: [
        ["0", "D[0] = 0", "0", "0"],
        ["1", "D[1] += 3", "3", "3"],
        ["2", "D[2] = 0", "3", "3"],
        ["3", "D[3] -= 3", "0", "0"]
      ]
    }
  },
  'Binary Search on Sorted Data': {
    intuition: "Continually divide the sorted search space in half by comparing target value against the midpoint index.",
    formula: "Midpoint: <code>mid = low + Math.floor((high - low) / 2)</code><br>Movement:<br><code>if (A[mid] < target) low = mid + 1; else high = mid - 1;</code>",
    time: "O(log N) — halves search space at each iteration.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "A = [2, 5, 8], target = 8",
      headers: ["L", "M", "R", "A[M]", "Comparison", "Action Result"],
      rows: [
        ["0", "1", "2", "5", "8 > 5", "Search Right: L = 2"],
        ["2", "2", "2", "8", "8 == 8", "Found target at index 2!"]
      ]
    }
  },
  'Binary Search on Answer': {
    intuition: "Binary search the answer space directly. Use a helper feasibility function to determine if a candidate midpoint answer is valid, narrowing the search space accordingly.",
    formula: "Search midpoint: <code>mid = low + Math.floor((high - low) / 2)</code><br>Movement rule:<br><code>if (isValid(mid)) high = mid; else low = mid + 1;</code>",
    time: "O(N log R) — where R is range size and N is size of helper check.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "Search range [1, 10]",
      headers: ["Low", "Mid", "High", "isValid(Mid)?", "Action Result"],
      rows: [
        ["1", "5", "10", "Yes", "Save 5, try smaller: High = 5"],
        ["1", "3", "5", "No", "Try larger: Low = 4"]
      ]
    }
  },
  'Fast/Slow Pointers (Linked List)': {
    intuition: "Detect cycle loops or locate structural nodes (e.g. middle node) of a list by moving two pointers at speeds of 1 (slow) and 2 (fast) steps per iteration.",
    formula: "Pointer step:<br><code>slow = slow.next; fast = fast.next.next;</code>",
    time: "O(N) — linear traversals.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "Cycle: A -> B -> C -> B",
      headers: ["Step", "Slow Pointer", "Fast Pointer", "Meet?", "Action Result"],
      rows: [
        ["0", "A", "A", "Yes (start)", "Advance"],
        ["1", "B", "C", "No", "Advance"],
        ["2", "C", "B", "No", "Advance"],
        ["3", "B", "B", "Yes (Meet!)", "Cycle detected!"]
      ]
    }
  },
  'Linked List Manipulation': {
    intuition: "Carefully adjust node links in-place (e.g. reverse, merge, swap) using helper pointers to prevent link loss.",
    formula: "Link swaps:<br><code>next = curr.next; curr.next = prev; prev = curr; curr = next;</code>",
    time: "O(N) — linear traversals.",
    space: "O(1) — constant space in-place updates.",
    dryrun: {
      testcase: "Reverse A -> B",
      headers: ["curr", "next reference", "curr.next updated", "prev updated", "curr advanced"],
      rows: [
        ["A", "B", "null (prev)", "A", "B"],
        ["B", "null", "A (prev)", "B", "null"]
      ]
    }
  },
  'Monotonic Stack': {
    intuition: "Maintain stack elements in increasing or decreasing sorting order to find next greater or smaller elements in a single linear pass.",
    formula: "Stack push invariant:<br><code>while (stack.length > 0 && num > stack[top]) { stack.pop(); } stack.push(num);</code>",
    time: "O(N) — each element is pushed and popped at most once.",
    space: "O(N) — stack size.",
    dryrun: {
      testcase: "A = [2, 5]",
      headers: ["Index i", "A[i]", "Stack before", "Popped items", "Action Result"],
      rows: [
        ["0", "2", "[]", "-", "Push 0. Stack = [0]"],
        ["1", "5", "[0]", "0 (since 5 > 2)", "Next greater of 0 is 5. Push 1. Stack = [1]"]
      ]
    }
  },
  'Monotonic Queue / Deque': {
    intuition: "Use a double-ended queue (deque) to maintain window elements in sorted order to answer sliding window minimum/maximum queries in O(1) time.",
    formula: "Indices range check:<br><code>if (deque.front < windowStart) deque.popFront();</code>",
    time: "O(N) — each index is pushed and popped from deque at most once.",
    space: "O(K) — deque size bounded by sliding window size K.",
    dryrun: {
      testcase: "Window size 2, values = [3, 1]",
      headers: ["i", "val", "Deque state", "Boundary check", "Window Max"],
      rows: [
        ["0", "3", "[0]", "Valid", "3"],
        ["1", "1", "[0, 1]", "Valid", "3"]
      ]
    }
  },
  'Heap / Top K': {
    intuition: "Utilize a priority queue (Heap) of size K to track largest or smallest elements dynamically.",
    formula: "Min-Heap constraint:<br><code>heap.push(val); if (heap.size > k) heap.pop();</code>",
    time: "O(N log K) — heap operations of size K for N elements.",
    space: "O(K) — heap storage size.",
    dryrun: {
      testcase: "nums = [5, 2], k = 1 (Largest)",
      headers: ["num", "Heap State", "Size check", "Action Result"],
      rows: [
        ["5", "[5]", "1", "Keep 5"],
        ["2", "[2, 5]", "2 > 1", "Pop root (2). Heap = [5]"]
      ]
    }
  },
  'Intervals': {
    intuition: "Sort intervals by start times, then scan sequentially to merge overlapping segments.",
    formula: "Overlap condition for interval I1 = [S1, E1] and I2 = [S2, E2]:<br><code>if (S2 <= E1) merge into [S1, max(E1, E2)]</code>",
    time: "O(N log N) — sorting takes O(N log N), merging takes O(N).",
    space: "O(N) or O(1) — space to store output.",
    dryrun: {
      testcase: "Intervals: [[1, 4], [2, 3]]",
      headers: ["Curr interval", "Last Merged", "Overlap?", "Merged output"],
      rows: [
        ["[1, 4]", "None", "No", "[[1, 4]]"],
        ["[2, 3]", "[1, 4]", "Yes (2 <= 4)", "[[1, 4]] (since max(4,3) = 4)"]
      ]
    }
  },
  'Greedy Scheduling / Sorting': {
    intuition: "Sort elements based on local metric priorities and pick the best choice iteratively to reach a global optimum.",
    formula: "Selection criteria:<br><code>select max(value / weight) or min(end_time) iteratively</code>",
    time: "O(N log N) — sorting dominates choices.",
    space: "O(1) — constant space.",
    dryrun: {
      testcase: "Tasks: t1(ends 2), t2(ends 4)",
      headers: ["Step", "Candidate", "End boundary limit", "Action Result"],
      rows: [
        ["1", "t1", "0", "Schedule t1. New limit = 2"],
        ["2", "t2", "2", "Schedule t2. New limit = 4"]
      ]
    }
  },
  'Tree DFS': {
    intuition: "Traverse tree nodes recursively by visiting children first, returning combined results from bottom up.",
    formula: "Post-order combination:<br><code>f(node) = g(f(node.left), f(node.right))</code>",
    time: "O(N) — visits each node exactly once.",
    space: "O(H) — recursion stack height H.",
    dryrun: {
      testcase: "Root (3) -> child (9)",
      headers: ["Node", "Left DFS Result", "Right DFS Result", "Combined Output"],
      rows: [
        ["9 (leaf)", "0", "0", "1 + max(0, 0) = 1"],
        ["3 (root)", "1", "0", "1 + max(1, 0) = 2"]
      ]
    }
  },
  'Tree BFS / Level Order': {
    intuition: "Traverse tree layer-by-layer horizontally using a FIFO Queue to store child nodes.",
    formula: "Queue operations: pop parent node, push left and right children. Process in batches of size equal to level count.",
    time: "O(N) — visits each node once.",
    space: "O(W) — queue size bounded by maximum tree width W.",
    dryrun: {
      testcase: "Root (3) -> Left (9)",
      headers: ["Level", "Queue State Before", "Level size", "Queue State After"],
      rows: [
        ["0", "[3]", "1", "[9]"],
        ["1", "[9]", "1", "[]"]
      ]
    }
  },
  'BST Problems': {
    intuition: "Leverage binary search tree properties (left subtree values < node value < right subtree values) to search/validate in O(h) time.",
    formula: "BST property:<br>For every node in Left subtree: value < node.value<br>For every node in Right subtree: value > node.value",
    time: "O(H) — path length bounded by tree height.",
    space: "O(H) — recursive stack height.",
    dryrun: {
      testcase: "Search 2 in BST [3, 1, 4]",
      headers: ["Node Val", "Target", "Comparison", "Next Branch Direction"],
      rows: [
        ["3 (root)", "2", "2 < 3", "Recurse Left"],
        ["1 (left)", "2", "2 > 1", "Recurse Right"]
      ]
    }
  },
  'Graph BFS / DFS': {
    intuition: "Explore connected network nodes using a visited set to avoid cycles. BFS uses a FIFO queue, DFS uses stack/recursion.",
    formula: "Traversal step:<br>Mark node u as visited.<br>For each unvisited neighbor v of u: traverse(v)",
    time: "O(V + E) — where V is vertices count and E is edges count.",
    space: "O(V) — visited tracking map and call stack.",
    dryrun: {
      testcase: "Nodes 0 -> 1",
      headers: ["Node popped", "Neighbors list", "Visited state before", "Action Result"],
      rows: [
        ["0", "[1]", "{0}", "Push 1 to search stack. Visited = {0, 1}"],
        ["1", "[]", "{0, 1}", "Terminal vertex."]
      ]
    }
  },
  'Topological Sort / DAG': {
    intuition: "Order directed acyclic graph nodes linearly such that dependency requirements are resolved before dependent tasks.",
    formula: "Kahn's algorithm:<br>If inDegree[v] == 0: add v to Queue.<br>Decrement adjacent node degrees.",
    time: "O(V + E) — visit all nodes and edges.",
    space: "O(V) — degree map and sorting array.",
    dryrun: {
      testcase: "Edge 0 -> 1",
      headers: ["Step", "Queue State", "Popped item", "inDegree drops", "Action Result"],
      rows: [
        ["1", "[0]", "0", "1 (drops 1 -> 0)", "Push 1 to Queue"],
        ["2", "[1]", "1", "None", "Topological order complete"]
      ]
    }
  },
  'Union Find / DSU': {
    intuition: "Manage disjoint subset partitions efficiently using union-by-rank and path compression helpers.",
    formula: "Path compression:<br>find(i) -> parent[i] = find(parent[i])<br>Union by rank:<br>union(i, j) -> parent[root_i] = root_j",
    time: "O(alpha(N)) — inverse Ackermann complexity per query (virtually constant).",
    space: "O(N) parent mapping array.",
    dryrun: {
      testcase: "Union nodes 0 and 1",
      headers: ["Operation", "parents before", "Roots resolved", "parents after"],
      rows: [
        ["union(0, 1)", "[0, 1]", "root(0)=0, root(1)=1", "[0, 0] (1 joins group 0)"]
      ]
    }
  },
  'Shortest Path': {
    intuition: "Find the shortest distance between nodes in a weighted graph using Dijkstra's algorithm (min-heap priority queue).",
    formula: "Relaxation condition:<br>if (dist[u] + weight(u, v) < dist[v]) { dist[v] = dist[u] + weight(u, v); }",
    time: "O((V + E) * log V) — heap search dominates paths.",
    space: "O(V) — distance array and heap.",
    dryrun: {
      testcase: "Edge A -> B weight 3",
      headers: ["Popped node", "dist[A]", "Edge A -> B weight", "dist[B] Old / New", "Relaxed?"],
      rows: [
        ["A", "0", "3", "inf / 3", "Yes (dist[B] = 3)"]
      ]
    }
  },
  'MST / Graph Greedy': {
    intuition: "Construct a Minimum Spanning Tree connecting all nodes with minimum edge weight using Prim's or Kruskal's greedy schemes.",
    formula: "Kruskal: Sort edges, add edge if it doesn't create cycle (use Union-Find).",
    time: "O(E * log E) — sorting edges.",
    space: "O(V) — disjoint set lists.",
    dryrun: {
      testcase: "Edges E1(wt 1), E2(wt 5)",
      headers: ["Edge", "Weight", "Endpoints connected?", "Action Result"],
      rows: [
        ["E1", "1", "No (roots differ)", "Add to MST. Union endpoints."],
        ["E2", "5", "Yes (same root)", "Skip to prevent graph cycle."]
      ]
    }
  },
  'Strongly Connected Components': {
    intuition: "Identify maximal subgraphs where every vertex is reachable from every other vertex. Kosaraju's algorithm achieves this in two DFS passes by utilizing graph transposition.",
    formula: "Transposed graph adjacency:<br><code>adjT[v].push(u)</code> for each edge <code>u -> v</code> in original graph.",
    time: "O(V + E) — two complete DFS passes over nodes and edges.",
    space: "O(V + E) — transposed graph storage and visited sets.",
    dryrun: {
      testcase: "Graph A->B, B->C, C->A (SCC1), B->D (SCC2)",
      headers: ["Phase", "Action", "Node / Stack State", "Result"],
      rows: [
        ["1", "DFS(A) on original", "Finish order: C, B, A", "Stack: [C, B, A] (top is A)"],
        ["2", "Reverse edges", "Transposed graph: B->A, C->B, A->C", "Edges reversed"],
        ["3", "DFS from Stack top", "Pop A: DFS(A) visits C, B", "SCC 1: {A, C, B}"]
      ]
    }
  },
  'Trie': {
    intuition: "Insert strings character-by-character into a multi-branch retrieval tree to support prefix searches in O(L) time.",
    formula: "Trie insertion logic:<br>node = node.children[char]<br>Check terminal:<br>node.isEnd = true",
    time: "O(L) — where L is search/insert word length.",
    space: "O(S) — memory space bounded by total character count S.",
    dryrun: {
      testcase: "insert('hi')",
      headers: ["Char", "Node Position", "Child Exists?", "Action", "isEnd Flag"],
      rows: [
        ["'h'", "Root", "No", "Create Node 'h'", "false"],
        ["'i'", "Node 'h'", "No", "Create Node 'i'", "true"]
      ]
    }
  },
  'Bit Manipulation': {
    intuition: "Perform bitwise queries (AND, OR, XOR, shifts) directly on binary digits to achieve extremely fast in-place compute.",
    formula: "Clear lowest set bit: n & (n - 1)<br>Isolate lowest set bit: n & (-n)<br>Parity check (odd/even): n & 1",
    time: "O(1) — constant time hardware instructions.",
    space: "O(1) — constant space registers.",
    dryrun: {
      testcase: "n = 12 (binary 1100)",
      headers: ["Operation", "Evaluation", "Binary Output", "Result Value"],
      rows: [
        ["Clear lowest bit", "12 & 11", "1000", "8"],
        ["Isolate lowest bit", "12 & -12", "0100", "4"]
      ]
    }
  },
  '1D DP Basics': {
    intuition: "Solve optimization problems bottom-up by saving sub-problem solutions in a 1D cache array.",
    formula: "Recurrence equation:<br>dp[i] = function(dp[i-1], dp[i-2], ...)",
    time: "O(N) — filling 1D cache sequentially.",
    space: "O(N) or O(1) — memory space for cache array.",
    dryrun: {
      testcase: "n = 3",
      headers: ["Index i", "dp[i-2]", "dp[i-1]", "dp[i] Value"],
      rows: [
        ["1", "-", "-", "1"],
        ["2", "-", "-", "2"],
        ["3", "1", "2", "dp[1]+dp[2] = 3"]
      ]
    }
  },
  'Bitmask DP': {
    intuition: "Solve optimization problems over small subsets (typically N <= 20) by representing subsets as binary integers (bitmasks) and using them as DP table keys.",
    formula: "Recurrence relation (e.g. TSP):<br>dp[mask][u] = min_{v ∈ mask, v ≠ u} (dp[mask \\ {u}][v] + dist[v][u])",
    time: "O(2^N * N^2) — where N is the number of elements/vertices.",
    space: "O(2^N * N) — DP cache size.",
    dryrun: {
      testcase: "N = 4, TSP",
      headers: ["Mask (bin)", "u (curr)", "dp[mask \\ {u}][v] + dist[v][u]", "dp[mask][u] Optimal Value"],
      rows: [
        ["0011 (1,0)", "1", "dp[0001][0] + dist[0][1]", "min cost visiting {0,1} ending at 1"],
        ["0111 (2,1,0)", "2", "dp[0011][0] + dist[0][2], dp[0011][1] + dist[1][2]", "optimal cost visiting {0,1,2} ending at 2"]
      ]
    }
  },
  'Knapsack / Subset DP': {
    intuition: "Determine maximum achievable value within knapsack weight capacity by building a choice cache of item inclusions.",
    formula: "Recurrence relation:<br>dp[w] = max(dp[w], dp[w - weight[i]] + value[i])",
    time: "O(N * W) — where N is item count and W is target capacity.",
    space: "O(W) — optimized 1D cache array.",
    dryrun: {
      testcase: "Weight 2, Value 5, Capacity 3",
      headers: ["j Capacity", "dp[j] (skip)", "dp[j - wt] + val", "dp[j] Optimal State"],
      rows: [
        ["3", "0", "dp[1] + 5 = 5", "5"],
        ["2", "0", "dp[0] + 5 = 5", "5"]
      ]
    }
  },
  'Grid DP': {
    intuition: "Compute paths/min-costs in a 2D matrix layout by combining valid adjacent movement cells.",
    formula: "Movement recurrence equation:<br>dp[i][j] = dp[i-1][j] + dp[i][j-1]",
    time: "O(M * N) — filling 2D grid matrix.",
    space: "O(M * N) or O(N) — cache storage matrix.",
    dryrun: {
      testcase: "Grid size 2x2",
      headers: ["Cell (r, c)", "dp[r-1][c] (from up)", "dp[r][c-1] (from left)", "dp[r][c] Value"],
      rows: [
        ["(0, 0)", "-", "-", "1"],
        ["(0, 1)", "-", "1", "1"],
        ["(1, 0)", "1", "-", "1"],
        ["(1, 1)", "1", "1", "1 + 1 = 2"]
      ]
    }
  },
  'String DP / Sequence DP': {
    intuition: "Evaluate relationships (alignment, distance, common subsequences) between two sequences using a 2D table comparison.",
    formula: "LCS recurrence relation:<br>if (S1[i-1] == S2[j-1]) { dp[i][j] = dp[i-1][j-1] + 1; }<br>else { dp[i][j] = max(dp[i-1][j], dp[i][j-1]); }",
    time: "O(M * N) — string alignments evaluation.",
    space: "O(M * N) — alignments cache matrix.",
    dryrun: {
      testcase: "s1 = 'ab', s2 = 'ac'",
      headers: ["i", "j", "s1[i-1]/s2[j-1]", "Match?", "dp[i][j] Value"],
      rows: [
        ["1", "1", "a / a", "Yes", "dp[0][0] + 1 = 1"],
        ["2", "2", "b / c", "No", "max(dp[1][2], dp[2][1]) = 1"]
      ]
    }
  },
  'Backtracking & Recursion': {
    intuition: "Systematically search a state space by building choices incrementally and backtracking (reverting changes) when a path fails to meet constraints.",
    formula: "Recursion state transition:<br><code>backtrack(state) -> for option in options: { makeChoice(); backtrack(nextState); undoChoice(); }</code>",
    time: "O(K^N) — exponential search space bounds.",
    space: "O(N) — recursion call stack depth.",
    dryrun: {
      testcase: "Solve 2x2 grid path options",
      headers: ["Level/Depth", "Choice Try", "Valid?", "Action", "Backtrack Status"],
      rows: [
        ["0", "Row 0: Queen at col 0", "Yes", "Place 'Q' at (0,0)", "Active"],
        ["1", "Row 1: Queen at col 0", "No", "Overlap conflict", "Backtrack"],
        ["1", "Row 1: Queen at col 1", "No", "Diag conflict", "Backtrack"]
      ]
    }
  },
  'Sorting & Partitioning': {
    intuition: "Rearrange items into a specific order (ascending/descending) or separate them around a pivot value using comparison rules.",
    formula: "Pivot partitioning:<br><code>if (element <= pivot) { swap(i, j); i++; }</code>",
    time: "O(N log N) or O(N) — sorting vs single-pass partitioning.",
    space: "O(1) or O(N) — in-place vs extra auxiliary buffer.",
    dryrun: {
      testcase: "Partition [3, 1, 2] around pivot 2",
      headers: ["Index j", "Val", "Pivot Val", "Comparison", "Action Result"],
      rows: [
        ["0", "3", "2", "3 > 2", "No swap, skip"],
        ["1", "1", "2", "1 <= 2", "Swap 3 and 1 -> [1, 3, 2]"],
        ["2 (pivot)", "2", "2", "2 <= 2", "Swap 3 and 2 -> [1, 2, 3]"]
      ]
    }
  },
  'Design & Advanced DS': {
    intuition: "Build high-performance custom data interfaces (caches, query trees) by pairing hash lookups with node link updates.",
    formula: "Hybrid cache operations:<br><code>get(key) -> updateRecency(node); return node.value;</code>",
    time: "O(1) or O(log N) — constant map/list operations vs tree index hops.",
    space: "O(N) — structural storage container size.",
    dryrun: {
      testcase: "Access LRU Cache (cap=2)",
      headers: ["Operation", "Key", "Map State", "List Order (MRU -> LRU)", "Eviction?"],
      rows: [
        ["put(1, 'A')", "1", "{1: node1}", "[1]", "No"],
        ["put(2, 'B')", "2", "{1: node1, 2: node2}", "[2, 1]", "No"],
        ["get(1)", "1", "{1: node1, 2: node2}", "[1, 2]", "No (Hit)"]
      ]
    }
  },
  'Strings & Pattern Matching': {
    intuition: "Inspect sequences of characters using prefix functions (KMP) or sliding hashes (Rabin-Karp) to find target substrings without backtracking.",
    formula: "LPS (longest prefix suffix) alignment:<br><code>if (pattern[i] != pattern[j]) { j = lps[j-1]; }</code>",
    time: "O(N + M) — linear scan of text N and pattern M.",
    space: "O(M) — auxiliary pattern matching lookup tables.",
    dryrun: {
      testcase: "Match 'ab' in 'aab'",
      headers: ["i (Text)", "j (Pattern)", "Match?", "LPS Shift / Action", "Result Position"],
      rows: [
        ["0 ('a')", "0 ('a')", "Yes", "i++, j++", "-"],
        ["1 ('a')", "1 ('b')", "No", "Fallback j to lps[0] = 0", "-"],
        ["1 ('a')", "0 ('a')", "Yes", "i++, j++", "-"]
      ]
    }
  }
};


Object.assign(problemLogicDatabase, {
  "2": {
    "intuition": "Traverse both lists digit-by-digit. Add values along with a carry variable, construct a new list of sums, and carry overflow to next nodes.",
    "formula": "Digit add:<br><code>sum = carry + l1.val + l2.val; carry = sum / 10; digit = sum % 10;</code>",
    "time": "O(max(N, M)) - visits longer list length.",
    "space": "O(max(N, M)) - return list elements.",
    "dryrun": {
      "testcase": "l1 = [2, 4], l2 = [5, 6]",
      "headers": [
        "Digit checked",
        "Sum calculation",
        "Carry output",
        "Digit result list"
      ],
      "rows": [
        [
          "1st Digit",
          "2 + 5 = 7",
          "0",
          "[7]"
        ],
        [
          "2nd Digit",
          "4 + 6 = 10",
          "1",
          "[7, 0]"
        ],
        [
          "Carry end",
          "1",
          "0",
          "[7, 0, 1]"
        ]
      ]
    }
  },
  "4": {
    "intuition": "Use binary search to partition the smaller of the two arrays. Find boundary splits such that elements on left are <= elements on right.",
    "formula": "Left partition constraint:<br><code>MaxLeftX <= MinRightY && MaxLeftY <= MinRightX</code>",
    "time": "O(log(min(M, N))) - binary search on smaller size.",
    "space": "O(1) - auxiliary space.",
    "dryrun": {
      "testcase": "A = [1,3], B = [2]",
      "headers": [
        "Partition X",
        "Partition Y",
        "Left Max values",
        "Right Min values",
        "Median"
      ],
      "rows": [
        [
          "1",
          "1",
          "Max(1, 2) = 2",
          "Min(3, inf) = 3",
          "2"
        ]
      ]
    }
  },
  "5": {
    "intuition": "Expand around centers. For each index, check odd-length palindromes (center at i) and even-length palindromes (center at i, i+1) to find maximum palindrome.",
    "formula": "Center expansions:<br><code>while (L >= 0 && R < len && s[L] == s[R]) { L--; R++; }</code>",
    "time": "O(N^2) - N center checks, N expansion checks.",
    "space": "O(1) - index pointers.",
    "dryrun": {
      "testcase": "s = 'babad'",
      "headers": [
        "Center i",
        "Search Type",
        "L boundary",
        "R boundary",
        "Palindromic substring"
      ],
      "rows": [
        [
          "0",
          "Odd ('b')",
          "0",
          "0",
          "'b'"
        ],
        [
          "1",
          "Odd ('a')",
          "0",
          "2",
          "'bab'"
        ]
      ]
    }
  },
  "10": {
    "intuition": "Use 2D DP. dp[i][j] represents if prefix s[0..i-1] matches pattern p[0..j-1]. Handle wildcards '*' recursively by matching 0 or more matching characters.",
    "formula": "Wildcard rule:<br><code>if (p[j-1] == '*') { dp[i][j] = dp[i][j-2] || (matches && dp[i-1][j]); }</code>",
    "time": "O(M*N) - match configurations.",
    "space": "O(M*N) - DP status matrix.",
    "dryrun": {
      "testcase": "s = 'aa', p = 'a*'",
      "headers": [
        "i",
        "j",
        "Pattern Char",
        "Match status",
        "dp[i][j]"
      ],
      "rows": [
        [
          "0",
          "2",
          "'*'",
          "0 occurrences match dp[0][0]",
          "True"
        ],
        [
          "2",
          "2",
          "'*'",
          "Match character repeat matches dp[1][2]",
          "True"
        ]
      ]
    }
  },
  "26": {
    "intuition": "Use two pointers. A slow pointer tracks the position of unique elements, and a fast pointer scans through the array to find new unique elements.",
    "formula": "Unique swap:<br><code>if (nums[fast] != nums[slow]) { slow++; nums[slow] = nums[fast]; }</code>",
    "time": "O(N) - single pass.",
    "space": "O(1) - in-place swaps.",
    "dryrun": {
      "testcase": "nums = [1, 1, 2]",
      "headers": [
        "Fast Index",
        "nums[fast]",
        "nums[slow]",
        "Action",
        "State Array"
      ],
      "rows": [
        [
          "0",
          "1",
          "1",
          "Initialize",
          "[1, 1, 2]"
        ],
        [
          "1",
          "1",
          "1",
          "Duplicate - skip",
          "[1, 1, 2]"
        ],
        [
          "2",
          "2",
          "1",
          "Unique - copy to nums[1]",
          "[1, 2, 2]"
        ]
      ]
    }
  },
  "27": {
    "intuition": "Scan array and copy elements not equal to val to a slow pointer index, skipping matching occurrences.",
    "formula": "Filter match:<br><code>if (nums[i] != val) { nums[k] = nums[i]; k++; }</code>",
    "time": "O(N) - linear pass.",
    "space": "O(1) - in-place updates.",
    "dryrun": {
      "testcase": "nums = [3, 2, 2, 3], val = 3",
      "headers": [
        "Index",
        "nums[i]",
        "Action",
        "k pointer",
        "Modified Array"
      ],
      "rows": [
        [
          "0",
          "3",
          "Matches val - skip",
          "0",
          "[3, 2, 2, 3]"
        ],
        [
          "1",
          "2",
          "No match - copy to k",
          "1",
          "[2, 2, 2, 3]"
        ],
        [
          "2",
          "2",
          "No match - copy to k",
          "2",
          "[2, 2, 2, 3]"
        ],
        [
          "3",
          "3",
          "Matches val - skip",
          "2",
          "[2, 2, 2, 3]"
        ]
      ]
    }
  },
  "36": {
    "intuition": "Validate row, column, and 3x3 box grid values to ensure no duplicate digits from 1-9 occur in any section.",
    "formula": "Check sets:<br><code>row_key = 'r' + row + val</code><br><code>col_key = 'c' + col + val</code><br><code>box_key = 'b' + box + val</code>",
    "time": "O(1) - constant grid board (81 cells).",
    "space": "O(1) - fixed lookup set size.",
    "dryrun": {
      "testcase": "Grid with duplicates",
      "headers": [
        "Cell Row/Col",
        "Value",
        "Generated Keys",
        "Has duplicate?"
      ],
      "rows": [
        [
          "(0, 0)",
          "'5'",
          "['r0-5', 'c0-5', 'b0-5']",
          "No"
        ],
        [
          "(0, 2)",
          "'5'",
          "['r0-5', 'c2-5', 'b0-5']",
          "Yes (r0-5 duplicate)"
        ]
      ]
    }
  },
  "47": {
    "intuition": "Generate unique permutations by sorting the array first. Skip duplicate recursive paths if the current element is equal to the previous element and the previous element has not been visited.",
    "formula": "Skip branch:<br><code>if (used[i] || (i > 0 && nums[i] == nums[i-1] && !used[i-1])) continue;</code>",
    "time": "O(N! * N) - generating paths.",
    "space": "O(N) - visited trackers.",
    "dryrun": {
      "testcase": "nums = [1, 1, 2]",
      "headers": [
        "Level",
        "Candidate Index",
        "Duplicate skip condition?",
        "Action",
        "Active Permutation"
      ],
      "rows": [
        [
          "0",
          "0 (val 1)",
          "No",
          "Push 1",
          "[1]"
        ],
        [
          "1",
          "1 (val 1)",
          "Yes (duplicate skipped)",
          "Skip",
          "[1]"
        ],
        [
          "1",
          "2 (val 2)",
          "No",
          "Push 2",
          "[1, 2]"
        ]
      ]
    }
  },
  "48": {
    "intuition": "Transpose the matrix (swap matrix[i][j] with matrix[j][i]), then reverse each row to achieve a clockwise 90 degree rotation in-place.",
    "formula": "Transpose:<br><code>swap(matrix[i][j], matrix[j][i])</code><br>Reverse:<br><code>reverse(row)</code>",
    "time": "O(N^2) - transpose and reverse cells.",
    "space": "O(1) - in-place.",
    "dryrun": {
      "testcase": "matrix = [[1,2],[3,4]]",
      "headers": [
        "Step",
        "Matrix state",
        "Action"
      ],
      "rows": [
        [
          "Start",
          "[[1,2],[3,4]]",
          "Initial"
        ],
        [
          "Transpose",
          "[[1,3],[2,4]]",
          "Swap (0,1) and (1,0)"
        ],
        [
          "Reverse",
          "[[3,1],[4,2]]",
          "Reverse each row"
        ]
      ]
    }
  },
  "53": {
    "intuition": "Kadane's Algorithm. Iterate through the array, adding numbers to a local sum. Reset sum to current number if local sum falls below current number.",
    "formula": "Maximum subarray step:<br><code>localSum = max(num, localSum + num); globalMax = max(globalMax, localSum);</code>",
    "time": "O(N) - single pass scan.",
    "space": "O(1) - constant tracking.",
    "dryrun": {
      "testcase": "nums = [-2, 1, -3]",
      "headers": [
        "Index",
        "Num",
        "localSum",
        "globalMax"
      ],
      "rows": [
        [
          "0",
          "-2",
          "-2",
          "-2"
        ],
        [
          "1",
          "1",
          "1",
          "1"
        ],
        [
          "2",
          "-3",
          "-2",
          "1"
        ]
      ]
    }
  },
  "54": {
    "intuition": "Maintain boundary pointers (top, bottom, left, right) and traverse the matrix in spiral rings, shifting boundaries inwards.",
    "formula": "Boundaries:<br><code>top++; right--; bottom--; left++;</code>",
    "time": "O(M*N) - visit all matrix elements.",
    "space": "O(1) - constant auxiliary storage.",
    "dryrun": {
      "testcase": "matrix = [[1,2],[3,4]]",
      "headers": [
        "Direction",
        "Limits",
        "Visited Items",
        "New boundary update"
      ],
      "rows": [
        [
          "Right",
          "Col 0..1 (Row 0)",
          "[1, 2]",
          "top = 1"
        ],
        [
          "Down",
          "Row 1..1 (Col 1)",
          "[4]",
          "right = 0"
        ],
        [
          "Left",
          "Col 0..0 (Row 1)",
          "[3]",
          "bottom = 0"
        ]
      ]
    }
  },
  "61": {
    "intuition": "Calculate list size, make it a circular ring by connecting tail to head, then locate new tail at position length - (k % length) and break circle.",
    "formula": "New tail position:<br><code>steps = len - (k % len)</code><br>Break link:<br><code>newHead = tail.next; tail.next = null;</code>",
    "time": "O(N) - two traversals.",
    "space": "O(1) - pointer updates.",
    "dryrun": {
      "testcase": "1 -> 2 -> 3, k = 1",
      "headers": [
        "List Size",
        "Effective k",
        "New tail val",
        "Circle broken",
        "Output"
      ],
      "rows": [
        [
          "3",
          "1",
          "2 (pos 2)",
          "tail.next = null",
          "3 -> 1 -> 2"
        ]
      ]
    }
  },
  "73": {
    "intuition": "Use the first row and first column as trackers to record if zero occurs in their respective lines. Use separate flags for first row/col themselves.",
    "formula": "Marker flags:<br><code>if (matrix[i][j] == 0) { matrix[i][0] = 0; matrix[0][j] = 0; }</code>",
    "time": "O(M*N) - two matrix passes.",
    "space": "O(1) - in-place markers.",
    "dryrun": {
      "testcase": "matrix = [[1,0],[1,1]]",
      "headers": [
        "Cell Checked",
        "Is Zero?",
        "Updated Header Markers",
        "Result Matrix"
      ],
      "rows": [
        [
          "(0, 1)",
          "Yes",
          "matrix[0][1] = 0; matrix[0][0] = 0",
          "[[0,0],[1,1]]"
        ],
        [
          "Set zeroes",
          "-",
          "Fill rows/cols based on markers",
          "[[0,0],[1,0]]"
        ]
      ]
    }
  },
  "80": {
    "intuition": "Maintain a write pointer. Allow at most two occurrences of each element by checking nums[i] against nums[write-2].",
    "formula": "Double duplicate rule:<br><code>if (write < 2 || nums[i] != nums[write-2]) { nums[write] = nums[i]; write++; }</code>",
    "time": "O(N) - linear scan.",
    "space": "O(1) - in-place modifications.",
    "dryrun": {
      "testcase": "nums = [1, 1, 1, 2]",
      "headers": [
        "Index",
        "nums[i]",
        "nums[write-2]",
        "Action",
        "Array state"
      ],
      "rows": [
        [
          "0",
          "1",
          "-",
          "write < 2 - Keep",
          "[1, 1, 1, 2] (w=1)"
        ],
        [
          "1",
          "1",
          "-",
          "write < 2 - Keep",
          "[1, 1, 1, 2] (w=2)"
        ],
        [
          "2",
          "1",
          "nums[0]=1",
          "Equals nums[write-2] - skip",
          "[1, 1, 1, 2] (w=2)"
        ],
        [
          "3",
          "2",
          "nums[0]=1",
          "Differs - Keep",
          "[1, 1, 2, 2] (w=3)"
        ]
      ]
    }
  },
  "82": {
    "intuition": "Use a dummy head. Loop through list checking if adjacent nodes share duplicate values. Relink the subsegment to skip duplicates entirely.",
    "formula": "Skip duplicate sublist:<br><code>prev.next = nextNonDupNode</code>",
    "time": "O(N) - single list scan.",
    "space": "O(1) - pointer links.",
    "dryrun": {
      "testcase": "1 -> 1 -> 2",
      "headers": [
        "Prev Pointer",
        "Curr Val",
        "Next Val",
        "Duplicates?",
        "Next linkage"
      ],
      "rows": [
        [
          "Dummy",
          "1",
          "1",
          "Yes",
          "Dummy -> 2"
        ],
        [
          "Dummy",
          "2",
          "null",
          "No",
          "Advance prev to 2"
        ]
      ]
    }
  },
  "83": {
    "intuition": "Iterate through the sorted linked list. If the current node value equals the next node value, skip the next node by relinking pointer.",
    "formula": "Deduplication link:<br><code>curr.next = curr.next.next</code>",
    "time": "O(N) - visits each node once.",
    "space": "O(1) - pointer modification.",
    "dryrun": {
      "testcase": "1 -> 1 -> 2",
      "headers": [
        "Current Node Val",
        "Next Node Val",
        "Duplicate found?",
        "Action"
      ],
      "rows": [
        [
          "1",
          "1",
          "Yes",
          "Skip next: 1 -> 2"
        ],
        [
          "1",
          "2",
          "No",
          "Advance pointer"
        ],
        [
          "2",
          "null",
          "No",
          "End traversal"
        ]
      ]
    }
  },
  "91": {
    "intuition": "Decode ways dp[i] sum combinations from dp[i-1] (if 1-digit valid) and dp[i-2] (if 2-digit valid, e.g. values 10-26).",
    "formula": "DP updates:<br><code>if (valid_1_digit) dp[i] += dp[i-1];</code><br><code>if (valid_2_digit) dp[i] += dp[i-2];</code>",
    "time": "O(N) - single pass.",
    "space": "O(N) - DP array sizes.",
    "dryrun": {
      "testcase": "s = '12'",
      "headers": [
        "i character",
        "1-digit match",
        "2-digit match",
        "dp[i] sum"
      ],
      "rows": [
        [
          "0 (init)",
          "-",
          "-",
          "dp[0]=1, dp[1]=1"
        ],
        [
          "2",
          "'2' valid",
          "'12' valid",
          "dp[2] = dp[1]+dp[0] = 2"
        ]
      ]
    }
  },
  "94": {
    "intuition": "Inorder traversal visits nodes in Left -> Root -> Right sequence. Use helper recursive calls to store visited nodes.",
    "formula": "DFS Order:<br><code>inorder(node.left); list.push(node.val); inorder(node.right);</code>",
    "time": "O(N) - visits each node.",
    "space": "O(H) - recursion stack depth.",
    "dryrun": {
      "testcase": "Tree: [1, null, 2, 3]",
      "headers": [
        "Visit State",
        "Active Stack",
        "Stored items",
        "Action"
      ],
      "rows": [
        [
          "Left child null",
          "[1]",
          "[]",
          "Process node 1"
        ],
        [
          "Collect root",
          "[]",
          "[1]",
          "Process right tree [2,3]"
        ],
        [
          "Left child 3",
          "[2,3]",
          "[1]",
          "Collect 3 -> [1, 3]"
        ]
      ]
    }
  },
  "105": {
    "intuition": "Use preorder to find root, look up index in inorder. Recursively build left/right subtrees using inorder split ranges.",
    "formula": "Root construction:<br><code>root = new Node(preorder[preIdx])</code><br>Boundary splits:<br><code>[inStart..idx-1], [idx+1..inEnd]</code>",
    "time": "O(N) - hash lookup.",
    "space": "O(N) - map.",
    "dryrun": {
      "testcase": "pre = [3,9,20], inorder = [9,3,20]",
      "headers": [
        "PreIdx",
        "Inorder boundaries",
        "Root value",
        "Left child bounds",
        "Right child bounds"
      ],
      "rows": [
        [
          "0",
          "[0..2]",
          "3",
          "[0..0] (value 9)",
          "[2..2] (value 20)"
        ]
      ]
    }
  },
  "106": {
    "intuition": "Construct from inorder and postorder lists. Postorder last element determines root. Partition inorder array like preorder scheme.",
    "formula": "Postorder traversal index decrement:<br><code>root = new Node(postorder[postIdx--])</code>",
    "time": "O(N) - node mapping passes.",
    "space": "O(N) - index structures.",
    "dryrun": {
      "testcase": "inorder = [9,3,20], post = [9,20,3]",
      "headers": [
        "PostIdx value",
        "Inorder range",
        "Created Node",
        "Subtree bounds"
      ],
      "rows": [
        [
          "3",
          "[0..2]",
          "3",
          "Right=[2..2], Left=[0..0]"
        ]
      ]
    }
  },
  "108": {
    "intuition": "Choose the middle element of the sorted array as the root node to guarantee a balanced BST. Recursively construct left and right subtrees from subarrays.",
    "formula": "Mid split BST:<br><code>mid = (L + R) / 2; root = Node(nums[mid]);</code><br><code>root.left = helper(L, mid-1); root.right = helper(mid+1, R);</code>",
    "time": "O(N) - visits each index once.",
    "space": "O(log N) - recursion stack.",
    "dryrun": {
      "testcase": "nums = [-10, -3, 0, 5]",
      "headers": [
        "L",
        "R",
        "Mid index",
        "Created node",
        "Subtrees split boundaries"
      ],
      "rows": [
        [
          "0",
          "3",
          "1",
          "-3",
          "Left=[0..0] (-10), Right=[2..3] (0, 5)"
        ]
      ]
    }
  },
  "110": {
    "intuition": "Return -1 from DFS helper if subtree is unbalanced, else return tree height. Check balance factor difference.",
    "formula": "Subtree balance check:<br><code>if (abs(H_left - H_right) > 1) return -1</code>",
    "time": "O(N) - single visit pass.",
    "space": "O(H) - tree heights recursion stack.",
    "dryrun": {
      "testcase": "Skewed BST [1, null, 2, null, 3]",
      "headers": [
        "Node checked",
        "Left depth",
        "Right depth",
        "Balanced?"
      ],
      "rows": [
        [
          "3",
          "0",
          "0",
          "Yes (height 1)"
        ],
        [
          "2",
          "0",
          "1",
          "Yes (height 2)"
        ],
        [
          "1",
          "0",
          "2",
          "No (delta 2 > 1 -> -1)"
        ]
      ]
    }
  },
  "121": {
    "intuition": "Track the minimum price seen so far. For each price, compute the profit if we sell today and update the maximum profit accordingly.",
    "formula": "Profit logic:<br><code>minPrice = min(minPrice, price)</code><br><code>maxProfit = max(maxProfit, price - minPrice)</code>",
    "time": "O(N) - single pass.",
    "space": "O(1) - constant space.",
    "dryrun": {
      "testcase": "prices = [7, 1, 5, 3]",
      "headers": [
        "Price",
        "Min Price",
        "Current Profit",
        "Max Profit"
      ],
      "rows": [
        [
          "7",
          "7",
          "0",
          "0"
        ],
        [
          "1",
          "1",
          "0",
          "0"
        ],
        [
          "5",
          "1",
          "4",
          "4"
        ],
        [
          "3",
          "1",
          "2",
          "4"
        ]
      ]
    }
  },
  "122": {
    "intuition": "Greedy accumulation. Collect profit from all consecutive price increases in the array by buying on day i-1 and selling on day i.",
    "formula": "Accumulate profit:<br><code>if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];</code>",
    "time": "O(N) - single pass.",
    "space": "O(1) - in-place.",
    "dryrun": {
      "testcase": "prices = [1, 2, 3, 2, 5]",
      "headers": [
        "Day index i",
        "prices[i]",
        "prices[i-1]",
        "Profit increment",
        "Total Profit"
      ],
      "rows": [
        [
          "1",
          "2",
          "1",
          "2-1 = 1",
          "1"
        ],
        [
          "2",
          "3",
          "2",
          "3-2 = 1",
          "2"
        ],
        [
          "3",
          "2",
          "3",
          "0",
          "2"
        ],
        [
          "4",
          "5",
          "2",
          "5-2 = 3",
          "5"
        ]
      ]
    }
  },
  "130": {
    "intuition": "Identify uncaptured border 'O' regions by launching DFS/BFS from grid border nodes. Mark reachable nodes. Convert remaining 'O's to 'X's.",
    "formula": "Cell marking:<br><code>if (matrix[r][c] == 'O') matrix[r][c] = 'E';</code>",
    "time": "O(M*N) - visit cells.",
    "space": "O(M*N) - recursion depth.",
    "dryrun": {
      "testcase": "Border 'O' versus middle 'O'",
      "headers": [
        "Border cell check",
        "Cell",
        "Border connected?",
        "Flip Action"
      ],
      "rows": [
        [
          "Row 0",
          "(0, 1) 'O'",
          "Yes - Mark 'E'",
          "No flip"
        ],
        [
          "Center",
          "(1, 1) 'O'",
          "No - Remains 'O'",
          "Flipped to 'X'"
        ]
      ]
    }
  },
  "133": {
    "intuition": "Use a hash map to map original nodes to their cloned copies. Perform a DFS/BFS traversal to clone node links recursively.",
    "formula": "Cloned linkage mapping:<br><code>cloned[node] = new Node(node.val);</code><br><code>cloned[node].neighbors.push(clone(neighbor));</code>",
    "time": "O(V + E) - visits vertices and edges.",
    "space": "O(V) - clone map memory.",
    "dryrun": {
      "testcase": "Graph node 1 connected to 2",
      "headers": [
        "Node checked",
        "Cloned map",
        "Clone Created?",
        "Cloned links built"
      ],
      "rows": [
        [
          "1",
          "{1: clone1}",
          "Yes",
          "Check neighbors of 1"
        ],
        [
          "2",
          "{1: clone1, 2: clone2}",
          "Yes",
          "clone1.neighbors.push(clone2)"
        ]
      ]
    }
  },
  "139": {
    "intuition": "Use DP. dp[i] is true if a prefix substring s[0..j] is segmentable, and the suffix s[j..i] exists in wordDict dictionary lookup.",
    "formula": "DP condition:<br><code>dp[i] = dp[j] && wordDict.has(s.substring(j, i))</code>",
    "time": "O(N^2) - check substrings combinations.",
    "space": "O(N) - boolean cache.",
    "dryrun": {
      "testcase": "s = 'leetcode', dict = ['leet','code']",
      "headers": [
        "Subsegment i",
        "Valid j split",
        "dict.has(s[j..i])?",
        "dp[i] status"
      ],
      "rows": [
        [
          "4 ('leet')",
          "j = 0 (dp[0]=T)",
          "dict.has('leet') -> True",
          "dp[4] = True"
        ],
        [
          "8 ('leetcode')",
          "j = 4 (dp[4]=T)",
          "dict.has('code') -> True",
          "dp[8] = True"
        ]
      ]
    }
  },
  "144": {
    "intuition": "Preorder traversal visits nodes in Root -> Left -> Right sequence. Record root value first, then recurse left and right subtrees.",
    "formula": "DFS Order:<br><code>list.push(node.val); preorder(node.left); preorder(node.right);</code>",
    "time": "O(N) - visits nodes.",
    "space": "O(H) - call stack.",
    "dryrun": {
      "testcase": "Tree: [1, null, 2]",
      "headers": [
        "Node visited",
        "Action",
        "Active list output",
        "Next candidates"
      ],
      "rows": [
        [
          "1",
          "Record root val",
          "[1]",
          "Check left(null), right(2)"
        ],
        [
          "2",
          "Record node val",
          "[1, 2]",
          "End"
        ]
      ]
    }
  },
  "145": {
    "intuition": "Postorder traversal visits nodes in Left -> Right -> Root sequence. Recurse left and right subtrees first, then add the parent node value.",
    "formula": "DFS Order:<br><code>postorder(node.left); postorder(node.right); list.push(node.val);</code>",
    "time": "O(N) - visits nodes.",
    "space": "O(H) - call stack.",
    "dryrun": {
      "testcase": "Tree: [1, null, 2]",
      "headers": [
        "Node visited",
        "Action",
        "Active list output",
        "Stack state"
      ],
      "rows": [
        [
          "2",
          "Record child val",
          "[2]",
          "Return to parent 1"
        ],
        [
          "1",
          "Record parent val",
          "[2, 1]",
          "Done"
        ]
      ]
    }
  },
  "152": {
    "intuition": "Track both maximum and minimum product ending at current index. A negative number can turn the minimum product into a new maximum product.",
    "formula": "Product transition:<br><code>temp = max;</code><br><code>max = max(num, num*max, num*min);</code><br><code>min = min(num, num*temp, num*min);</code>",
    "time": "O(N) - single pass.",
    "space": "O(1) - constant variables.",
    "dryrun": {
      "testcase": "nums = [2, 3, -2]",
      "headers": [
        "Index",
        "Num",
        "Max Prod",
        "Min Prod",
        "Global Max"
      ],
      "rows": [
        [
          "0",
          "2",
          "2",
          "2",
          "2"
        ],
        [
          "1",
          "3",
          "6",
          "3",
          "6"
        ],
        [
          "2",
          "-2",
          "-2",
          "-12",
          "6"
        ]
      ]
    }
  },
  "169": {
    "intuition": "Boyer-Moore Voting Algorithm. Maintain a candidate and a counter. Increment/decrement the counter and switch candidate if count drops to zero.",
    "formula": "Candidate adjustment:<br><code>if (count == 0) candidate = num;</code><br><code>count += (num == candidate) ? 1 : -1;</code>",
    "time": "O(N) - single pass.",
    "space": "O(1) - constant variables.",
    "dryrun": {
      "testcase": "nums = [2, 2, 1, 1, 1]",
      "headers": [
        "Index",
        "Num",
        "Candidate",
        "Count"
      ],
      "rows": [
        [
          "0",
          "2",
          "2",
          "1"
        ],
        [
          "1",
          "2",
          "2",
          "2"
        ],
        [
          "2",
          "1",
          "2",
          "1"
        ],
        [
          "3",
          "1",
          "2",
          "0"
        ],
        [
          "4",
          "1",
          "1",
          "1"
        ]
      ]
    }
  },
  "187": {
    "intuition": "Slide a window of length 10 across the DNA string. Store substrings in a set to identify recurring 10-letter subsequences.",
    "formula": "Subsegment hash check:<br><code>sub = s.substring(i, i+10); if (seen.has(sub)) duplicates.add(sub); seen.add(sub);</code>",
    "time": "O(N) - single pass.",
    "space": "O(N) - hash set storage.",
    "dryrun": {
      "testcase": "s = 'AAAAACCCCCAAAAACCCCC'",
      "headers": [
        "i",
        "Substring window",
        "seen?",
        "duplicates state"
      ],
      "rows": [
        [
          "0",
          "'AAAAACCCCC'",
          "No - Add to seen",
          "[]"
        ],
        [
          "10",
          "'AAAAACCCCC'",
          "Yes - Add to duplicates",
          "['AAAAACCCCC']"
        ]
      ]
    }
  },
  "203": {
    "intuition": "Iterate through the linked list with a tracker pointer. If the next node value equals val, skip it by linking the tracker to node.next.next.",
    "formula": "Link rewrite:<br><code>if (curr.next.val == val) curr.next = curr.next.next; else curr = curr.next;</code>",
    "time": "O(N) - visits each node once.",
    "space": "O(1) - links rewrite.",
    "dryrun": {
      "testcase": "1 -> 2 -> 3, val = 2",
      "headers": [
        "Node checked",
        "Next Node Val",
        "Matches val?",
        "Action Result"
      ],
      "rows": [
        [
          "1",
          "2",
          "Yes",
          "Skip node 2: 1 -> 3"
        ],
        [
          "1",
          "3",
          "No",
          "Advance pointer to 3"
        ]
      ]
    }
  },
  "225": {
    "intuition": "Implement stack operations using a single queue. For push, add element then rotate queue elements to bring newest item to front.",
    "formula": "Rotate items:<br><code>queue.push(val); for (0..size-1) queue.push(queue.shift())</code>",
    "time": "O(N) push, O(1) pop.",
    "space": "O(N) - storage.",
    "dryrun": {
      "testcase": "Push 1, Push 2",
      "headers": [
        "Action",
        "Push item",
        "Rotate loops",
        "Queue state"
      ],
      "rows": [
        [
          "Push 1",
          "1",
          "0",
          "[1]"
        ],
        [
          "Push 2",
          "2",
          "1",
          "[2, 1]"
        ]
      ]
    }
  },
  "232": {
    "intuition": "Use two stacks (input stack and output stack). For push, push to input. For pop/peek, transfer elements from input to output to reverse order.",
    "formula": "Stack transfer:<br><code>if (outputStack is empty) while (inputStack): outputStack.push(inputStack.pop())</code>",
    "time": "O(1) amortized.",
    "space": "O(N) - queue elements storage.",
    "dryrun": {
      "testcase": "push(1), push(2), pop()",
      "headers": [
        "Step",
        "Input Stack",
        "Output Stack",
        "Popped val"
      ],
      "rows": [
        [
          "Push 1",
          "[1]",
          "[]",
          "-"
        ],
        [
          "Push 2",
          "[1, 2]",
          "[]",
          "-"
        ],
        [
          "Pop()",
          "[]",
          "[2]",
          "1"
        ]
      ]
    }
  },
  "236": {
    "intuition": "Recursively traverse tree. Return node if node is p or q. If left and right subtrees both return non-null, current node is LCA.",
    "formula": "LCA Condition:<br><code>if (left && right) return root; return left ? left : right;</code>",
    "time": "O(N) - visit all nodes.",
    "space": "O(H) - call stack.",
    "dryrun": {
      "testcase": "root = [3,5,1], p = 5, q = 1",
      "headers": [
        "Node checked",
        "Left subtree return",
        "Right subtree return",
        "Result"
      ],
      "rows": [
        [
          "5",
          "5 (match)",
          "-",
          "5"
        ],
        [
          "1",
          "-",
          "1 (match)",
          "1"
        ],
        [
          "3",
          "5",
          "1",
          "Return 3"
        ]
      ]
    }
  },
  "238": {
    "intuition": "Construct prefix and suffix products in two passes. Store the product of elements before index in the output array, then multiply by elements after index.",
    "formula": "Prefix pass:<br><code>res[i] = prefix; prefix *= nums[i];</code><br>Suffix pass:<br><code>res[i] *= suffix; suffix *= nums[i];</code>",
    "time": "O(N) - two linear passes.",
    "space": "O(1) - excluding output array.",
    "dryrun": {
      "testcase": "nums = [1, 2, 3]",
      "headers": [
        "Index",
        "Num",
        "Prefix accumulator",
        "Suffix accumulator",
        "Result state"
      ],
      "rows": [
        [
          "0",
          "1",
          "1",
          "-",
          "[1, -, -]"
        ],
        [
          "1",
          "2",
          "1*1 = 1",
          "-",
          "[1, 1, -]"
        ],
        [
          "2",
          "3",
          "1*2 = 2",
          "1",
          "[1, 1, 2]"
        ],
        [
          "1 (Suffix)",
          "2",
          "-",
          "1*3 = 3",
          "[1, 3, 2]"
        ]
      ]
    }
  },
  "240": {
    "intuition": "Search from top-right corner. If cell value equals target, return true. If cell value is greater than target, move left. If cell value is smaller, move down.",
    "formula": "Pointer updates:<br><code>if (val == target) return true;<br>else if (val > target) col--;<br>else row++;</code>",
    "time": "O(M + N) - linear boundaries scan.",
    "space": "O(1) - pointer indices.",
    "dryrun": {
      "testcase": "matrix = [[1,4],[2,5]], target = 2",
      "headers": [
        "Row",
        "Col",
        "Val",
        "Val vs Target",
        "Direction"
      ],
      "rows": [
        [
          "0",
          "1",
          "4",
          "4 > 2",
          "Go Left (col--)"
        ],
        [
          "0",
          "0",
          "1",
          "1 < 2",
          "Go Down (row++)"
        ],
        [
          "1",
          "0",
          "2",
          "2 == 2",
          "Match!"
        ]
      ]
    }
  },
  "261": {
    "intuition": "A graph is a valid tree if it is connected and has no cycles. Use DSU to verify: if we try to connect two nodes with a common parent, we have a cycle.",
    "formula": "Tree Condition:<br><code>edges == n - 1 && DSU.union(u, v) succeeds for all edges</code>",
    "time": "O(N * alpha(N)) - DSU edge checks.",
    "space": "O(N) - parent maps.",
    "dryrun": {
      "testcase": "n = 3, edges = [[0,1],[1,2]]",
      "headers": [
        "Edge",
        "union(u, v)",
        "Cycle detected?",
        "DSU Sets"
      ],
      "rows": [
        [
          "[0,1]",
          "union(0,1) -> success",
          "No",
          "{0,1}, {2}"
        ],
        [
          "[1,2]",
          "union(1,2) -> success",
          "No",
          "{0,1,2} (Connected tree)"
        ]
      ]
    }
  },
  "269": {
    "intuition": "Build a character dependency graph from adjacent sorted words. Perform topological sort using DFS or Kahn's indegree search. Detect cycles.",
    "formula": "Graph edge:<br><code>if (w1[j] != w2[j]) addEdge(w1[j], w2[j])</code>",
    "time": "O(C) - character count total.",
    "space": "O(U) - unique characters.",
    "dryrun": {
      "testcase": "words = ['wrt','wrf','er']",
      "headers": [
        "Words adjacent",
        "First mismatch",
        "Edge created",
        "Toposort"
      ],
      "rows": [
        [
          "wrt vs wrf",
          "'t' vs 'f'",
          "t -> f",
          "-"
        ],
        [
          "wrf vs er",
          "'w' vs 'e'",
          "w -> e",
          "Order: w -> e -> r -> t -> f"
        ]
      ]
    }
  },
  "278": {
    "intuition": "Use binary search on versions 1 to N. Test midpoint; if bad, candidate is mid or smaller. If not bad, search right half.",
    "formula": "Binary boundary:<br><code>if (isBadVersion(mid)) R = mid; else L = mid + 1;</code>",
    "time": "O(log N) - versions halved each test.",
    "space": "O(1) - index pointers.",
    "dryrun": {
      "testcase": "n = 5, first_bad = 4",
      "headers": [
        "L",
        "R",
        "Mid",
        "isBadVersion(mid)?",
        "Action"
      ],
      "rows": [
        [
          "1",
          "5",
          "3",
          "False",
          "L = 4"
        ],
        [
          "4",
          "5",
          "4",
          "True",
          "R = 4"
        ],
        [
          "Done",
          "-",
          "-",
          "-",
          "Return L = 4"
        ]
      ]
    }
  },
  "283": {
    "intuition": "Maintain a write pointer. As we iterate through the array, copy all non-zero elements to the write pointer. Finally, fill the remaining elements with zeros.",
    "formula": "Write check:<br><code>if (nums[i] != 0) { nums[write] = nums[i]; write++; }</code>",
    "time": "O(N) - linear scan.",
    "space": "O(1) - in-place update.",
    "dryrun": {
      "testcase": "nums = [0, 1, 0, 3]",
      "headers": [
        "Index",
        "Value",
        "Write Index",
        "Array state"
      ],
      "rows": [
        [
          "0",
          "0",
          "0",
          "[0, 1, 0, 3]"
        ],
        [
          "1",
          "1",
          "1",
          "[1, 1, 0, 3]"
        ],
        [
          "2",
          "0",
          "1",
          "[1, 1, 0, 3]"
        ],
        [
          "3",
          "3",
          "2",
          "[1, 3, 0, 3]"
        ],
        [
          "End",
          "-",
          "2",
          "[1, 3, 0, 0]"
        ]
      ]
    }
  },
  "297": {
    "intuition": "Serialize by pre-order traversal printing values comma-separated with '#' for null. Deserialize using string splits queue helper.",
    "formula": "DFS String build:<br><code>str += node.val + ',' + dfs(node.left) + ',' + dfs(node.right)</code>",
    "time": "O(N) - elements visits.",
    "space": "O(N) - queue serialization lengths.",
    "dryrun": {
      "testcase": "Tree: 1 -> 2",
      "headers": [
        "Current Node",
        "Serialized String output",
        "Deserialization queue"
      ],
      "rows": [
        [
          "1",
          "'1,2,#,#,#'",
          "['1','2','#','#','#']"
        ]
      ]
    }
  },
  "310": {
    "intuition": "Repeatedly prune leaf nodes (indegree == 1) from the graph until at most two central nodes remain. These centroids represent minimum height tree roots.",
    "formula": "Pruning leaves:<br><code>while (nodes > 2) { size = leaves.queue.size; for (size) removeLeaf(leaves.pop()); }</code>",
    "time": "O(V + E) - linear graph reduction.",
    "space": "O(V) - degree structures.",
    "dryrun": {
      "testcase": "Line graph 0-1-2",
      "headers": [
        "Initial Leaves",
        "Active Node Count",
        "Pruning Step",
        "Remaining Node Centroids"
      ],
      "rows": [
        [
          "[0, 2]",
          "3",
          "Remove 0 and 2",
          "Node [1] is centroid"
        ]
      ]
    }
  },
  "328": {
    "intuition": "Maintain separate odd list and even list pointers. Link odd nodes together and even nodes together, then append the even list to the end of the odd list.",
    "formula": "Split link updates:<br><code>odd.next = even.next; odd = odd.next;</code><br><code>even.next = odd.next; even = even.next;</code>",
    "time": "O(N) - single pass.",
    "space": "O(1) - pointers connection.",
    "dryrun": {
      "testcase": "1 -> 2 -> 3 -> 4",
      "headers": [
        "Odd Tail",
        "Even Tail",
        "Odd Link",
        "Even Link"
      ],
      "rows": [
        [
          "1",
          "2",
          "1 -> 3",
          "2 -> 4"
        ],
        [
          "3",
          "4",
          "3 -> null",
          "4 -> null"
        ]
      ]
    }
  },
  "344": {
    "intuition": "Use two pointers, left starting at 0 and right at length-1. Swap elements at left and right pointers, then move pointers toward the center.",
    "formula": "Swap elements:<br><code>swap(s[left], s[right]); left++; right--;</code>",
    "time": "O(N) - swaps half the array.",
    "space": "O(1) - in-place swaps.",
    "dryrun": {
      "testcase": "s = ['h', 'e', 'l', 'o']",
      "headers": [
        "Left",
        "Right",
        "Swap Action",
        "Result Array"
      ],
      "rows": [
        [
          "0 ('h')",
          "3 ('o')",
          "h <-> o",
          "['o', 'e', 'l', 'h']"
        ],
        [
          "1 ('e')",
          "2 ('l')",
          "e <-> l",
          "['o', 'l', 'e', 'h']"
        ]
      ]
    }
  },
  "367": {
    "intuition": "Use binary search in range 1..num. If mid * mid matches num, it is a perfect square. Otherwise adjust search boundaries.",
    "formula": "Square check:<br><code>square = mid * mid; if (square == num) return true; else if (square > num) R = mid - 1; else L = mid + 1;</code>",
    "time": "O(log N) - halves range.",
    "space": "O(1) - in-place indices.",
    "dryrun": {
      "testcase": "num = 16",
      "headers": [
        "L",
        "R",
        "Mid",
        "Square (mid^2)",
        "Action"
      ],
      "rows": [
        [
          "1",
          "16",
          "8",
          "64",
          "R = 7"
        ],
        [
          "1",
          "7",
          "4",
          "16",
          "Match - Return true"
        ]
      ]
    }
  },
  "371": {
    "intuition": "Add two numbers without standard arithmetic operators using bitwise operations: XOR computes sum without carry, AND left shift computes carries.",
    "formula": "Bit additions:<br><code>sum = a ^ b</code><br><code>carry = (a & b) << 1</code>",
    "time": "O(1) - max 32 iterations.",
    "space": "O(1) - in-place.",
    "dryrun": {
      "testcase": "a = 2 (0010), b = 3 (0011)",
      "headers": [
        "Iteration",
        "a ^ b (Sum)",
        "(a & b) << 1 (Carry)",
        "New inputs"
      ],
      "rows": [
        [
          "1",
          "0001",
          "0100",
          "a=1, b=4"
        ],
        [
          "2",
          "0101",
          "0000",
          "a=5, b=0 (Done)"
        ]
      ]
    }
  },
  "373": {
    "intuition": "Use a Min-Heap. Initialize heap with pairs (nums1[i], nums2[0]). Pop smallest, add to results, then push next index pair (nums1[i], nums2[j+1]) to heap.",
    "formula": "Heap element push:<br><code>heap.push(nums1[i], nums2[j+1])</code>",
    "time": "O(K log N) - heap size N elements limit.",
    "space": "O(N) - heap size.",
    "dryrun": {
      "testcase": "nums1 = [1,2], nums2 = [3], k = 2",
      "headers": [
        "Step",
        "Heap State (sums)",
        "Popped Element",
        "Push next candidates"
      ],
      "rows": [
        [
          "Init",
          "[(1,3)=4, (2,3)=5]",
          "-",
          "Pairs initialized"
        ],
        [
          "1",
          "[(2,3)=5]",
          "(1,3)",
          "No more items in nums2"
        ],
        [
          "2",
          "[]",
          "(2,3)",
          "No more items in nums2"
        ]
      ]
    }
  },
  "374": {
    "intuition": "Perform binary search on search space 1..n. Query api helper API guess(mid). Shift range depending on search helper return value.",
    "formula": "Guess checking:<br><code>if (guess(mid) == 0) return mid;<br>else if (guess(mid) < 0) R = mid - 1;<br>else L = mid + 1;</code>",
    "time": "O(log N) - halves range.",
    "space": "O(1) - index trackers.",
    "dryrun": {
      "testcase": "n = 10, pick = 6",
      "headers": [
        "L",
        "R",
        "Mid",
        "Guess output",
        "Next Bounds"
      ],
      "rows": [
        [
          "1",
          "10",
          "5",
          "1",
          "L = 6"
        ],
        [
          "6",
          "10",
          "8",
          "-1",
          "R = 7"
        ],
        [
          "6",
          "7",
          "6",
          "0",
          "Match!"
        ]
      ]
    }
  },
  "394": {
    "intuition": "Use two stacks: one for repeat counts (k) and one for string segments. Build substring recursively inside brackets and multiply by counts when closing bracket is met.",
    "formula": "Bracket closure:<br><code>prevStr = strStack.pop(); count = countStack.pop(); currStr = prevStr + currStr.repeat(count);</code>",
    "time": "O(N) - process characters.",
    "space": "O(N) - stack storage.",
    "dryrun": {
      "testcase": "s = '2[a]'",
      "headers": [
        "Char checked",
        "Count Stack",
        "String Stack",
        "Current String status"
      ],
      "rows": [
        [
          "'2'",
          "[2]",
          "[]",
          "''"
        ],
        [
          "'['",
          "[2]",
          "['']",
          "''"
        ],
        [
          "'a'",
          "[2]",
          "['']",
          "'a'"
        ],
        [
          "']'",
          "[]",
          "[]",
          "'' + 'a'.repeat(2) = 'aa'"
        ]
      ]
    }
  },
  "417": {
    "intuition": "Run BFS/DFS from Pacific boundary edges and Atlantic boundary edges. The intersection of cells reachable by water flows determines coordinates.",
    "formula": "Water flow path:<br><code>heights[neighbor] >= heights[curr]</code>",
    "time": "O(M*N) - visit board cells twice.",
    "space": "O(M*N) - reachability maps.",
    "dryrun": {
      "testcase": "Matrix heights grid",
      "headers": [
        "Start Edge",
        "Search Type",
        "Visited Cells count",
        "Valid Overlaps"
      ],
      "rows": [
        [
          "Pacific border",
          "BFS",
          "Pacific reachable set",
          "-"
        ],
        [
          "Atlantic border",
          "BFS",
          "Atlantic reachable set",
          "Intersection coordinates"
        ]
      ]
    }
  },
  "421": {
    "intuition": "Insert binary prefixes of numbers into a Trie. For each number, query Trie for the branch matching the bits opposite to current value to maximize XOR output.",
    "formula": "XOR match digit:<br><code>target = opposite_bit; if (node.has(target)) { xor_sum += 1<<i; node = node[target]; }</code>",
    "time": "O(32 * N) - fixed bit-width tree operations.",
    "space": "O(32 * N) - trie node allocation.",
    "dryrun": {
      "testcase": "nums = [3, 10] -> binary [00011, 01010]",
      "headers": [
        "Bit index i",
        "Current val",
        "Opposite target bit",
        "Trie match?",
        "Max XOR path"
      ],
      "rows": [
        [
          "4",
          "01010 (10)",
          "1",
          "No (match bit 0)",
          "XOR sum = 0"
        ],
        [
          "3",
          "01010 (10)",
          "1",
          "Yes (match bit 1)",
          "XOR sum = 8"
        ]
      ]
    }
  },
  "437": {
    "intuition": "Find paths sums by traversing tree nodes. Maintain a running sum count lookup map to find target matching prefixes in O(N).",
    "formula": "Map lookup:<br><code>paths = prefixMap[currSum - target]</code><br>Map update:<br><code>prefixMap[currSum]++</code>",
    "time": "O(N) - single DFS pass.",
    "space": "O(H) - stack memory.",
    "dryrun": {
      "testcase": "root = [10,5,-3], target = 8",
      "headers": [
        "Node visited",
        "Current Sum",
        "Lookup Key (Sum-Target)",
        "Match count",
        "Prefix Map state"
      ],
      "rows": [
        [
          "10",
          "10",
          "10-8 = 2",
          "0",
          "{0:1, 10:1}"
        ],
        [
          "5",
          "15",
          "15-8 = 7",
          "0",
          "{0:1, 10:1, 15:1}"
        ]
      ]
    }
  },
  "441": {
    "intuition": "Determine maximum complete rows. Use binary search in range 1..n. The total coins required for k rows is k * (k + 1) / 2.",
    "formula": "Sum formula check:<br><code>sum = k * (k + 1) / 2; if (sum <= n) { ans = k; L = k + 1; } else R = k - 1;</code>",
    "time": "O(log N) - binary answer limits.",
    "space": "O(1) - index variables.",
    "dryrun": {
      "testcase": "n = 5",
      "headers": [
        "L",
        "R",
        "Mid k",
        "Coins needed (k*(k+1)/2)",
        "Action"
      ],
      "rows": [
        [
          "1",
          "5",
          "3",
          "6",
          "R = 2"
        ],
        [
          "1",
          "2",
          "1",
          "1",
          "L = 2, ans = 1"
        ],
        [
          "2",
          "2",
          "2",
          "3",
          "L = 3, ans = 2"
        ]
      ]
    }
  },
  "451": {
    "intuition": "Count character frequencies, then group characters by frequency in a bucket list. Join from highest bucket down to build sorted output.",
    "formula": "Bucket index:<br><code>buckets[frequency].push(char)</code>",
    "time": "O(N) - buckets size bounds.",
    "space": "O(N) - frequency map.",
    "dryrun": {
      "testcase": "s = 'tree'",
      "headers": [
        "Char Count Map",
        "Buckets [Freq]",
        "Output Build"
      ],
      "rows": [
        [
          "{'t':1, 'r':1, 'e':2}",
          "Buckets[2]=['e']; Buckets[1]=['t','r']",
          "'eetr'"
        ]
      ]
    }
  },
  "456": {
    "intuition": "Use a monotonic stack scanning from right to left to keep track of candidates for element 'k' (num3), maintaining the prefix minimums array for 'i' (num1).",
    "formula": "State match:<br><code>nums[i] < nums[k] && nums[k] < nums[j]</code>",
    "time": "O(N) - single pass.",
    "space": "O(N) - stack storage.",
    "dryrun": {
      "testcase": "nums = [3, 1, 4, 2]",
      "headers": [
        "Index",
        "Val",
        "Min Prefix",
        "Stack items",
        "s3 value"
      ],
      "rows": [
        [
          "3",
          "2",
          "1",
          "[2]",
          "-"
        ],
        [
          "2",
          "4",
          "1",
          "[4]",
          "2"
        ],
        [
          "1",
          "1",
          "1",
          "[4]",
          "2 (Match: 1 < 2 < 4)"
        ]
      ]
    }
  },
  "485": {
    "intuition": "Iterate through the array. Keep a running count of consecutive 1s and update the maximum count seen so far whenever a 0 is encountered or at the end of the array.",
    "formula": "Update count:<br><code>if (num == 1) count++; else { maxCount = max(maxCount, count); count = 0; }</code>",
    "time": "O(N) - single pass scan.",
    "space": "O(1) - auxiliary space.",
    "dryrun": {
      "testcase": "nums = [1, 1, 0, 1]",
      "headers": [
        "Index",
        "Num",
        "Current Count",
        "Max Count"
      ],
      "rows": [
        [
          "0",
          "1",
          "1",
          "0"
        ],
        [
          "1",
          "1",
          "2",
          "0"
        ],
        [
          "2",
          "0",
          "0",
          "2"
        ],
        [
          "3",
          "1",
          "1",
          "2"
        ],
        [
          "End",
          "-",
          "0",
          "2"
        ]
      ]
    }
  },
  "516": {
    "intuition": "The longest palindromic subsequence of a string is equivalent to the Longest Common Subsequence (LCS) of the string and its reversed version.",
    "formula": "Subsequence DP:<br><code>if (s[i] == rev[j]) dp[i][j] = dp[i-1][j-1] + 1; else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);</code>",
    "time": "O(N^2) - matrix cells fill.",
    "space": "O(N^2) - DP memory matrix.",
    "dryrun": {
      "testcase": "s = 'bbbab'",
      "headers": [
        "i char",
        "j char (reverse)",
        "Match?",
        "dp[i][j] score"
      ],
      "rows": [
        [
          "'b'",
          "'b'",
          "Yes",
          "1"
        ],
        [
          "'b'",
          "'a'",
          "No",
          "max(dp[i-1][j], dp[i][j-1])"
        ]
      ]
    }
  },
  "572": {
    "intuition": "Recursively check if current node matches root. Compare subtree using helper isSameTree function at every matching node.",
    "formula": "Subtree match:<br><code>isSubtree = isSame(r, s) || isSubtree(r.left, s) || isSubtree(r.right, s)</code>",
    "time": "O(M * N) - worst case comparison.",
    "space": "O(H) - call stack heights.",
    "dryrun": {
      "testcase": "tree = [3,4,5], sub = [4]",
      "headers": [
        "Root Node Checked",
        "Is same tree match?",
        "Result"
      ],
      "rows": [
        [
          "3",
          "False",
          "Check left"
        ],
        [
          "4",
          "True",
          "Subtree matches!"
        ]
      ]
    }
  },
  "647": {
    "intuition": "Use center expansion. Count all valid palindromes that can be formed by expanding outwards from single-character and double-character centers.",
    "formula": "Palindrome increment:<br><code>while (L >= 0 && R < len && s[L] == s[R]) { count++; L--; R++; }</code>",
    "time": "O(N^2) - expand centers.",
    "space": "O(1) - in-place counter.",
    "dryrun": {
      "testcase": "s = 'abc'",
      "headers": [
        "Center Index",
        "Expansion L/R",
        "Matching chars?",
        "Palindromes Count"
      ],
      "rows": [
        [
          "0",
          "(0, 0)",
          "Yes ('a')",
          "1"
        ],
        [
          "1",
          "(1, 1)",
          "Yes ('b')",
          "2"
        ],
        [
          "2",
          "(2, 2)",
          "Yes ('c')",
          "3"
        ]
      ]
    }
  },
  "712": {
    "intuition": "Define dp[i][j] as the minimum ASCII delete sum to make s1[0..i] and s2[0..j] equal. Balance deletions based on character matching.",
    "formula": "ASCII transition:<br><code>if (s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1];</code><br><code>else dp[i][j] = min(dp[i-1][j] + s1[i-1].charCodeAt, dp[i][j-1] + s2[j-1].charCodeAt);</code>",
    "time": "O(M*N) - state space.",
    "space": "O(M*N) - memo table.",
    "dryrun": {
      "testcase": "s1 = 'sea', s2 = 'eat'",
      "headers": [
        "i",
        "j",
        "s1[i-1]/s2[j-1]",
        "Match?",
        "Min ASCII cost"
      ],
      "rows": [
        [
          "1 ('s')",
          "1 ('e')",
          "No",
          "Min(dp[0][1]+115, dp[1][0]+101)",
          "115"
        ]
      ]
    }
  },
  "735": {
    "intuition": "Use a stack to model asteroid collisions. Positive asteroids move right (push to stack). Negative asteroids move left and collide with positive top items.",
    "formula": "Collision rule:<br><code>if (top > 0 && top < abs(asteroid)) stack.pop();</code>",
    "time": "O(N) - single pass.",
    "space": "O(N) - stack space.",
    "dryrun": {
      "testcase": "asteroids = [5, 10, -5]",
      "headers": [
        "Asteroid",
        "Stack state",
        "Collision?",
        "Result Action"
      ],
      "rows": [
        [
          "5",
          "[5]",
          "No",
          "Push 5"
        ],
        [
          "10",
          "[5, 10]",
          "No",
          "Push 10"
        ],
        [
          "-5",
          "[5, 10]",
          "Yes (10 vs -5)",
          "10 wins - discard -5"
        ]
      ]
    }
  },
  "746": {
    "intuition": "Calculate min cost to reach step i. The cost is the step's fee plus the minimum of costs to reach the preceding one or two steps.",
    "formula": "Min climb step:<br><code>dp[i] = cost[i] + min(dp[i-1], dp[i-2])</code>",
    "time": "O(N) - single pass.",
    "space": "O(1) - constant variable rolling array.",
    "dryrun": {
      "testcase": "cost = [10, 15, 20]",
      "headers": [
        "Step index i",
        "dp[i-2]",
        "dp[i-1]",
        "cost[i]",
        "dp[i] Value"
      ],
      "rows": [
        [
          "0",
          "-",
          "-",
          "10",
          "10"
        ],
        [
          "1",
          "-",
          "-",
          "15",
          "15"
        ],
        [
          "2",
          "10",
          "15",
          "20",
          "20 + Min(10, 15) = 30"
        ]
      ]
    }
  },
  "820": {
    "intuition": "Insert all words in reversed character order into a Trie. Count path lengths to all leaf nodes; internal matching prefixes are discarded as duplicates.",
    "formula": "Length sum:<br><code>sum += len(word) + 1 for each leaf in Trie</code>",
    "time": "O(S) - sum of all string lengths.",
    "space": "O(S) - trie node memory.",
    "dryrun": {
      "testcase": "words = ['time', 'me'] -> reversed = ['emit', 'em']",
      "headers": [
        "Reversed word",
        "Inserted Trie node path",
        "Is leaf?",
        "Leaf cost Contribution"
      ],
      "rows": [
        [
          "'emit'",
          "'e'->'m'->'i'->'t'",
          "Yes",
          "4 + 1 = 5"
        ],
        [
          "'em'",
          "'e'->'m' (already exists)",
          "No",
          "0"
        ]
      ]
    }
  },
  "907": {
    "intuition": "Calculate PLE (Previous Less Element) and NLE (Next Less Element) arrays for each index using a monotonic stack. Sum grid boundaries contributions.",
    "formula": "Subarray contributions:<br><code>Sum += nums[i] * (i - PLE[i]) * (NLE[i] - i)</code>",
    "time": "O(N) - linear passes.",
    "space": "O(N) - stack and index maps.",
    "dryrun": {
      "testcase": "nums = [3, 1, 2, 4]",
      "headers": [
        "Index",
        "Val",
        "PLE diff",
        "NLE diff",
        "Sum contribution"
      ],
      "rows": [
        [
          "0",
          "3",
          "1",
          "1",
          "3 * 1 * 1 = 3"
        ],
        [
          "1",
          "1",
          "2",
          "3",
          "1 * 2 * 3 = 6"
        ],
        [
          "2",
          "2",
          "1",
          "2",
          "2 * 1 * 2 = 4"
        ]
      ]
    }
  },
  "925": {
    "intuition": "Compare string characters with two pointers. If characters match, advance both. If mismatch, fast pointer can skip repeats of previous matched character.",
    "formula": "Repeat character check:<br><code>if (typed[j] == typed[j-1]) j++; else return false;</code>",
    "time": "O(N + M) - linear scans.",
    "space": "O(1) - index pointers.",
    "dryrun": {
      "testcase": "name = 'alex', typed = 'aaleex'",
      "headers": [
        "i (name)",
        "j (typed)",
        "Char Match?",
        "Action result"
      ],
      "rows": [
        [
          "0 ('a')",
          "0 ('a')",
          "Yes",
          "i++, j++"
        ],
        [
          "1 ('e')",
          "1 ('a')",
          "No",
          "typed[1]=='a' equals previous, skip (j++)"
        ],
        [
          "1 ('e')",
          "2 ('l')",
          "Yes (after skipping)",
          "i++, j++"
        ]
      ]
    }
  },
  "986": {
    "intuition": "Use two pointers, one for each list. Calculate the overlap of intervals. Move pointer whose interval ends first to find subsequent intersections.",
    "formula": "Overlap calculations:<br><code>start = max(A[i].start, B[j].start)</code><br><code>end = min(A[i].end, B[j].end)</code><br>Pointer increment:<br><code>if (A[i].end < B[j].end) i++; else j++;</code>",
    "time": "O(N + M) - linear comparison.",
    "space": "O(1) - output exclusions.",
    "dryrun": {
      "testcase": "A = [[1,3]], B = [[2,5]]",
      "headers": [
        "i",
        "j",
        "Start Max",
        "End Min",
        "Overlap saved",
        "Pointer Move"
      ],
      "rows": [
        [
          "0",
          "0",
          "Max(1, 2) = 2",
          "Min(3, 5) = 3",
          "[2, 3]",
          "i++ (3 < 5)"
        ]
      ]
    }
  },
  "1019": {
    "intuition": "Convert list to array. Use a monotonic stack storing indices to find the next strictly greater node value for each index in one pass.",
    "formula": "Update index:<br><code>while (stack && val[stack.top] < val[i]) { res[stack.pop] = val[i]; }</code>",
    "time": "O(N) - linear pass.",
    "space": "O(N) - stack sizes.",
    "dryrun": {
      "testcase": "list = [2, 1, 5]",
      "headers": [
        "Index",
        "Val",
        "Stack contents",
        "Action",
        "Result State"
      ],
      "rows": [
        [
          "0",
          "2",
          "[0]",
          "Push 0",
          "[0, 0, 0]"
        ],
        [
          "1",
          "1",
          "[0, 1]",
          "Push 1",
          "[0, 0, 0]"
        ],
        [
          "2",
          "5",
          "[]",
          "Pop 1 -> res[1]=5, Pop 0 -> res[0]=5",
          "[5, 5, 0]"
        ]
      ]
    }
  },
  "1052": {
    "intuition": "Use sliding window to find the subsegment of length 'minutes' where owner is grumpy and we can maximize satisfied customers by making him non-grumpy.",
    "formula": "Satisfaction gain:<br><code>gain = sum(customers[i] if grumpy[i] == 1)</code><br>Sliding Window max gain:<br><code>max_gain = max(max_gain, current_gain)</code>",
    "time": "O(N) - single pass.",
    "space": "O(1) - constant space.",
    "dryrun": {
      "testcase": "customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3",
      "headers": [
        "Window",
        "Gain added",
        "Gain removed",
        "Current Gain",
        "Max Gain"
      ],
      "rows": [
        [
          "0..2",
          "0+0+0 = 0",
          "0",
          "0",
          "0"
        ],
        [
          "1..3",
          "+2 (grumpy[3])",
          "0",
          "2",
          "2"
        ],
        [
          "4..6",
          "0",
          "0",
          "2",
          "2"
        ],
        [
          "5..7",
          "+5 (grumpy[7])",
          "0",
          "7",
          "7"
        ]
      ]
    }
  },
  "1208": {
    "intuition": "Calculate absolute difference cost at each index. Use a sliding window to find the maximum length of a subarray whose cost sum is <= maxCost.",
    "formula": "Cost increment:<br><code>currCost += abs(s[r] - t[r])</code><br>Shrink:<br><code>while (currCost > maxCost) { currCost -= abs(s[l] - t[l]); l++; }</code>",
    "time": "O(N) - linear scan.",
    "space": "O(1) - constant space.",
    "dryrun": {
      "testcase": "s = 'abcd', t = 'bcdf', maxCost = 3",
      "headers": [
        "Right",
        "Cost diff",
        "Cumulative Cost",
        "Left",
        "Max Length"
      ],
      "rows": [
        [
          "0 ('a'->'b')",
          "1",
          "1",
          "0",
          "1"
        ],
        [
          "1 ('b'->'c')",
          "1",
          "2",
          "0",
          "2"
        ],
        [
          "2 ('c'->'d')",
          "1",
          "3",
          "0",
          "3"
        ],
        [
          "3 ('d'->'f')",
          "2",
          "5 -> (shrink) -> 4",
          "1",
          "3"
        ]
      ]
    }
  },
  "1288": {
    "intuition": "Sort intervals by start point ascending, and by end point descending. Loop through and check if current interval lies within previous bounds.",
    "formula": "Cover condition:<br><code>if (curr.end <= max_end) covered++; else max_end = curr.end;</code>",
    "time": "O(N log N) - interval sorting.",
    "space": "O(1) - in-place.",
    "dryrun": {
      "testcase": "intervals = [[1,4],[3,6],[2,8]] -> sorted = [[1,4],[2,8],[3,6]]",
      "headers": [
        "Checked Interval",
        "Max End",
        "Is covered?",
        "Action"
      ],
      "rows": [
        [
          "[1,4]",
          "4",
          "No",
          "Update Max End to 4"
        ],
        [
          "[2,8]",
          "8",
          "No",
          "Update Max End to 8"
        ],
        [
          "[3,6]",
          "8",
          "Yes (6 <= 8)",
          "covered++ (Total = 1)"
        ]
      ]
    }
  },
  "1456": {
    "intuition": "Maintain a sliding window of size k and track the count of vowel characters inside it as it shifts to the right.",
    "formula": "Vowel check:<br><code>isVowel(char)</code><br>Shift update:<br><code>vowels += isVowel(in) - isVowel(out)</code>",
    "time": "O(N) - linear scan.",
    "space": "O(1) - constant storage.",
    "dryrun": {
      "testcase": "s = 'abciiidef', k = 3",
      "headers": [
        "Window",
        "Char In",
        "Char Out",
        "Vowel Count",
        "Max Vowels"
      ],
      "rows": [
        [
          "0..2 ('abc')",
          "'c'",
          "-",
          "1",
          "1"
        ],
        [
          "1..3 ('bci')",
          "'i'",
          "'a'",
          "2",
          "2"
        ],
        [
          "2..4 ('cii')",
          "'i'",
          "'b'",
          "3",
          "3"
        ],
        [
          "3..5 ('iii')",
          "'i'",
          "'c'",
          "3",
          "3"
        ]
      ]
    }
  },
  "1493": {
    "intuition": "Track a sliding window that contains at most one 0. The size of the window minus 1 represents the consecutive 1s after deleting one element.",
    "formula": "Window expansion:<br><code>if (nums[right] == 0) zeros++; while (zeros > 1) { if (nums[left] == 0) zeros--; left++; }</code>",
    "time": "O(N) - two pointers scan.",
    "space": "O(1) - constant auxiliary variables.",
    "dryrun": {
      "testcase": "nums = [1, 1, 0, 1]",
      "headers": [
        "Right",
        "Num",
        "Zeros in Window",
        "Left",
        "Max Length"
      ],
      "rows": [
        [
          "0",
          "1",
          "0",
          "0",
          "1"
        ],
        [
          "1",
          "1",
          "0",
          "0",
          "2"
        ],
        [
          "2",
          "0",
          "1",
          "0",
          "2"
        ],
        [
          "3",
          "1",
          "1",
          "0",
          "3"
        ]
      ]
    }
  },
  "1642": {
    "intuition": "Greedily use ladders for largest height differences. Track differences using a Min-Heap; when heap size exceeds ladder count, use bricks for smallest difference.",
    "formula": "Heap condition:<br><code>if (heap.size > ladders) bricks -= heap.poll();</code><br>Break condition:<br><code>if (bricks < 0) return current_index;</code>",
    "time": "O(N log L) - heap transitions.",
    "space": "O(L) - ladder limits heap.",
    "dryrun": {
      "testcase": "heights=[4,2,7,6,9], bricks=5, ladders=1",
      "headers": [
        "Step",
        "Climb height diff",
        "Heap (Ladders used)",
        "Bricks remaining",
        "Result"
      ],
      "rows": [
        [
          "4->2",
          "- (downhill)",
          "[]",
          "5",
          "Reachable"
        ],
        [
          "2->7",
          "5",
          "[5]",
          "5",
          "Reachable"
        ],
        [
          "7->6",
          "- (downhill)",
          "[5]",
          "5",
          "Reachable"
        ],
        [
          "6->9",
          "3",
          "[3, 5] -> heap.poll()=3",
          "5 - 3 = 2",
          "Reachable"
        ]
      ]
    }
  },
  "1658": {
    "intuition": "Instead of finding outer ends, find the longest contiguous subarray whose sum equals totalSum - x. Total operations equals length - subarray length.",
    "formula": "Target subsegment sum:<br><code>target = totalSum - x</code><br>Find max length:<br><code>sum == target</code>",
    "time": "O(N) - sliding window traversal.",
    "space": "O(1) - constant variable storage.",
    "dryrun": {
      "testcase": "nums = [1, 1, 4, 2, 3], x = 5",
      "headers": [
        "L",
        "R",
        "Window Sum",
        "Target Sum (11-5=6)",
        "Window length",
        "Min operations"
      ],
      "rows": [
        [
          "0",
          "1",
          "2",
          "6",
          "-",
          "-"
        ],
        [
          "0",
          "2",
          "6",
          "6",
          "3 (nums[0..2])",
          "5 - 3 = 2"
        ]
      ]
    }
  },
  "2090": {
    "intuition": "Use sliding window of size 2*k + 1 to compute range sums. Divide the sum by the window size to get the average, and pad outer indices with -1.",
    "formula": "Window Sum:<br><code>sum = sum + nums[right] - nums[left-1]</code><br>Average:<br><code>avg = sum / (2*k + 1)</code>",
    "time": "O(N) - linear window shift.",
    "space": "O(N) - output averages array.",
    "dryrun": {
      "testcase": "nums = [7,4,3,9,1,8,5], k = 2",
      "headers": [
        "Center Index",
        "Window [L..R]",
        "Window Sum",
        "Average",
        "Output Array"
      ],
      "rows": [
        [
          "0..1",
          "Out of bounds",
          "-",
          "-1",
          "[-1, -1]"
        ],
        [
          "2",
          "[0..4]",
          "7+4+3+9+1 = 24",
          "24/5 = 4",
          "[-1, -1, 4]"
        ],
        [
          "3",
          "[1..5]",
          "24-7+8 = 25",
          "25/5 = 5",
          "[-1, -1, 4, 5]"
        ]
      ]
    }
  },
  "2406": {
    "intuition": "Divide intervals by start times. Maintain a Min-Heap of end times of groups. If current interval start > smallest end time, reuse group; otherwise create new group.",
    "formula": "Reuse conditions:<br><code>if (start > heap.peek()) heap.poll(); heap.push(end);</code>",
    "time": "O(N log N) - sorted intervals pass.",
    "space": "O(N) - heap storage.",
    "dryrun": {
      "testcase": "intervals = [[5,10],[6,8],[1,5]] -> sorted = [[1,5],[5,10],[6,8]]",
      "headers": [
        "Interval",
        "Min end time",
        "Conflict?",
        "Action",
        "Active group ends"
      ],
      "rows": [
        [
          "[1,5]",
          "-",
          "No",
          "Create group 1",
          "[5]"
        ],
        [
          "[5,10]",
          "5",
          "Yes (5 <= 5)",
          "Create group 2",
          "[5, 10]"
        ],
        [
          "[6,8]",
          "5",
          "No (6 > 5)",
          "Reuse group 1",
          "[8, 10]"
        ]
      ]
    }
  },
  "2530": {
    "intuition": "Always pick largest element from Max-Heap, add value to score, then replace it with ceil(val / 3). Repeat k times.",
    "formula": "Replacement element formula:<br><code>val = heap.poll(); score += val; heap.push(ceil(val / 3));</code>",
    "time": "O(K log N) - K heap updates.",
    "space": "O(N) - heap size.",
    "dryrun": {
      "testcase": "nums = [10, 10], k = 2",
      "headers": [
        "Step",
        "Heap State",
        "Max value popped",
        "Ceil update",
        "Score"
      ],
      "rows": [
        [
          "1",
          "[10, 10]",
          "10",
          "ceil(10/3) = 4",
          "10"
        ],
        [
          "2",
          "[10, 4]",
          "10",
          "ceil(10/3) = 4",
          "20"
        ]
      ]
    }
  }
});


Object.assign(problemLogicDatabase, {
  "220": {
    "intuition": "Use a self-balancing binary search tree (like a Red-Black Tree) to maintain a sliding window of elements. This allows finding the ceiling and floor of the current element in O(log K) time.",
    "formula": "BST Sliding Window Range Check:<br><code>if (BST.ceil(val) <= val + t || BST.floor(val) >= val - t) return true;</code>",
    "time": "O(N log K) - where K is indexDiff.",
    "space": "O(K) - to store elements in the balanced tree.",
    "dryrun": {
      "testcase": "nums = [1, 5, 9], indexDiff = 2, valueDiff = 3",
      "headers": [
        "Index",
        "Val",
        "Sliding Tree Values",
        "Ceil value",
        "Floor value",
        "Match?"
      ],
      "rows": [
        [
          "0",
          "1",
          "BST: [1]",
          "-",
          "-",
          "No"
        ],
        [
          "1",
          "5",
          "BST: [1, 5]",
          "ceil(5)=5",
          "floor(5)=5",
          "No (diff 4 > 3)"
        ],
        [
          "2",
          "9",
          "BST: [5, 9]",
          "ceil(9)=9",
          "floor(9)=9",
          "No (diff 4 > 3)"
        ]
      ]
    }
  },
  "773": {
    "intuition": "Search for the shortest path from the initial 2x3 board state to the solved state [1,2,3,4,5,0]. A* search uses Manhattan distance heuristics to explore fewer states than standard BFS.",
    "formula": "Heuristic estimation:<br><code>f(state) = g(state) + sum(Manhattan_distance(val, target))</code>",
    "time": "O(State Space) - guided by heuristics.",
    "space": "O(State Space) - open/closed set maps.",
    "dryrun": {
      "testcase": "board = [[1,2,3],[4,0,5]]",
      "headers": [
        "Active State",
        "g cost",
        "h heuristic",
        "f total",
        "Action",
        "Open Set Size"
      ],
      "rows": [
        [
          "1,2,3,4,0,5",
          "0",
          "1 (5 is out of place)",
          "1",
          "Slide 5 left",
          "2"
        ],
        [
          "1,2,3,4,5,0",
          "1",
          "0 (solved)",
          "1",
          "Goal reached!",
          "0"
        ]
      ]
    }
  },
  "1349": {
    "intuition": "This problem can be modeled as finding the Maximum Independent Set on a bipartite graph. We can construct a flow network where edges connect seats that can cheat, and solve using Edmonds-Karp Max Flow.",
    "formula": "Max Independent Set:<br><code>Max Students = Total Active Seats - Max Bipartite Matching (Max Flow)</code>",
    "time": "O(V * E^2) - using Edmonds-Karp.",
    "space": "O(V + E) - graph model storage.",
    "dryrun": {
      "testcase": "Classroom active seats count",
      "headers": [
        "Edge",
        "From node",
        "To node (can cheat)",
        "Residual Capacity",
        "Flow contribution"
      ],
      "rows": [
        [
          "E1",
          "Seat (0,0)",
          "Seat (0,1)",
          "1 -> 0",
          "1 (cheater blocked)"
        ],
        [
          "Max Flow result",
          "-",
          "-",
          "-",
          "Bipartite match matches flow capacity"
        ]
      ]
    }
  }
});


Object.assign(problemLogicDatabase, {
  "109": {
    "intuition": "Convert a sorted linked list into a balanced BST. Since the list is sorted, find the middle element to serve as the root, then recursively build the left and right subtrees.",
    "formula": "BST Balance Recurrence:<br><code>root = new Node(mid.val); root.left = build(start, mid); root.right = build(mid.next, end);</code>",
    "time": "O(N log N) - where N is the number of nodes in the list.",
    "space": "O(log N) - recursion stack space.",
    "dryrun": {
      "testcase": "list = [-10, -3, 0, 5, 9]",
      "headers": [
        "Step",
        "Sublist Range",
        "Mid Chosen",
        "Left Child",
        "Right Child"
      ],
      "rows": [
        [
          "1",
          "[-10 to 9]",
          "0",
          "-3",
          "9"
        ],
        [
          "2",
          "[-10 to -3]",
          "-3",
          "-10",
          "null"
        ],
        [
          "3",
          "[5 to 9]",
          "9",
          "5",
          "null"
        ]
      ]
    }
  },
  "127": {
    "intuition": "Find the shortest transformation sequence from a begin word to an end word. A* uses a heuristic of character character diffs (Hamming distance) between the active word and the goal word.",
    "formula": "Word search heuristic:<br><code>h(word) = number of characters differing from endWord</code>",
    "time": "O(N * M) - where N is word list size and M is word length.",
    "space": "O(N * M) - vocabulary map cache.",
    "dryrun": {
      "testcase": "begin='hit', end='cog', list=['hot','dot','dog','lot','log','cog']",
      "headers": [
        "Active Word",
        "g (steps)",
        "h (char diff)",
        "f total",
        "Successors"
      ],
      "rows": [
        [
          "hit",
          "0",
          "3",
          "3",
          "hot"
        ],
        [
          "hot",
          "1",
          "2",
          "3",
          "dot, lot"
        ],
        [
          "dot",
          "2",
          "1",
          "3",
          "dog"
        ],
        [
          "cog",
          "4",
          "0",
          "4",
          "Target reached!"
        ]
      ]
    }
  },
  "218": {
    "intuition": "Use a sweep-line algorithm with a self-balancing binary search tree (like a TreeMap/Red-Black Tree) to store active building heights and query the maximum height at any given x-coordinate.",
    "formula": "Skyline Sweep Condition:<br><code>if (isStart) heights.insert(h); else heights.remove(h); maxH = heights.getMax();</code>",
    "time": "O(N log N) - sorting and tree insertions.",
    "space": "O(N) - to store active building heights in the tree.",
    "dryrun": {
      "testcase": "buildings = [[2,9,10], [3,7,15]]",
      "headers": [
        "X Coord",
        "Type",
        "Height",
        "Active Heights Tree",
        "Max Height",
        "Key Point?"
      ],
      "rows": [
        [
          "2",
          "Start",
          "10",
          "Tree: [10]",
          "10",
          "Yes: (2, 10)"
        ],
        [
          "3",
          "Start",
          "15",
          "Tree: [10, 15]",
          "15",
          "Yes: (3, 15)"
        ],
        [
          "7",
          "End",
          "15",
          "Tree: [10]",
          "10",
          "Yes: (7, 10)"
        ],
        [
          "9",
          "End",
          "10",
          "Tree: []",
          "0",
          "Yes: (9, 0)"
        ]
      ]
    }
  },
  "752": {
    "intuition": "Find the minimum rotation turns to open a lock from '0000' to a target sequence, avoiding deadends. A* guides search directions using the heuristic of slot character differences.",
    "formula": "Lock state heuristic:<br><code>h(state) = sum(min_diff(state[i], target[i])) for i in 0..3</code>",
    "time": "O(10^4) - max states limit.",
    "space": "O(10^4) - visited cache storage.",
    "dryrun": {
      "testcase": "target = '0202', deadends = ['0201','0102']",
      "headers": [
        "Inspected Lock",
        "g turns",
        "h heuristic",
        "f total",
        "Status"
      ],
      "rows": [
        [
          "0000",
          "0",
          "4",
          "4",
          "Rotate slot 1 & 3"
        ],
        [
          "0100",
          "1",
          "3",
          "4",
          "Rotate slot 3"
        ],
        [
          "0202",
          "4",
          "0",
          "4",
          "Solved!"
        ]
      ]
    }
  },
  "1263": {
    "intuition": "Solve the push-box maze puzzle. Use A* pathfinding to find the shortest push sequence. The heuristic function estimate is the Manhattan distance from the box to the target cell.",
    "formula": "State heuristic weight:<br><code>f(box, player) = g_pushes + Manhattan_distance(box, target)</code>",
    "time": "O(R * C * R * C) - state space graph nodes.",
    "space": "O(R * C) - distance map storage.",
    "dryrun": {
      "testcase": "Box at (1,1), Target at (1,4)",
      "headers": [
        "State (Box, Player)",
        "g (Pushes)",
        "h (Heuristic to target)",
        "f score",
        "Action"
      ],
      "rows": [
        [
          "(1,1) & (1,0)",
          "0",
          "3",
          "3",
          "Push right"
        ],
        [
          "(1,2) & (1,1)",
          "1",
          "2",
          "3",
          "Push right"
        ],
        [
          "(1,3) & (1,2)",
          "2",
          "1",
          "3",
          "Push right"
        ]
      ]
    }
  },
  "1947": {
    "intuition": "Maximize the compatibility scores of student-mentor pairs. This can be modeled as Maximum Weight Bipartite Matching, solvable via Min-Cost Max-Flow on a network flow diagram.",
    "formula": "Bipartite Edge Capacity:<br><code>flow = max_flow(S -> Students -> Mentors -> T, weight=score)</code>",
    "time": "O(N! * N) - or O(N^3) using network flow algorithms.",
    "space": "O(N^2) - state matrix space.",
    "dryrun": {
      "testcase": "3 students, 3 mentors",
      "headers": [
        "Student",
        "Mentor",
        "Compatibility Score",
        "Match Flow Allocation",
        "Cumulative score"
      ],
      "rows": [
        [
          "S0",
          "M1",
          "8",
          "1 unit flow",
          "8"
        ],
        [
          "S1",
          "M0",
          "7",
          "1 unit flow",
          "15"
        ],
        [
          "S2",
          "M2",
          "9",
          "1 unit flow",
          "24"
        ]
      ]
    }
  },
  "2123": {
    "intuition": "Model the grid as a bipartite graph where adjacent cells have opposite colors (odd/even parity of indices). Finding the minimum operations to remove adjacent ones is equivalent to Maximum Bipartite Matching (Max Flow).",
    "formula": "König's Theorem:<br><code>Min Vertex Cover = Max Flow / Max Bipartite Matching</code>",
    "time": "O(V * E) - where V is grid cells and E is adjacencies.",
    "space": "O(V + E) - network flow model storage.",
    "dryrun": {
      "testcase": "Grid size 2x2 with all 1s",
      "headers": [
        "Matching Iteration",
        "BFS Path Found",
        "Residual capacity",
        "Total matching flow"
      ],
      "rows": [
        [
          "1",
          "S -> (0,0) -> (0,1) -> T",
          "1 -> 0",
          "1"
        ],
        [
          "2",
          "S -> (1,1) -> (1,0) -> T",
          "1 -> 0",
          "2 (Full matching)"
        ]
      ]
    }
  }
});


Object.assign(problemLogicDatabase, {
  "52": {
    "intuition": "Similar to Sudoku Solver, N-Queens II uses backtracking to place queens on an N x N chessboard, counting all configurations where no two queens attack each other.",
    "formula": "Row/Col/Diag attack verification:<br><code>if (cols.has(c) || diag1.has(r+c) || diag2.has(r-c)) return false;</code>",
    "time": "O(N!) - search space options count.",
    "space": "O(N) - recursion depth array.",
    "dryrun": {
      "testcase": "N = 4",
      "headers": [
        "Active Row",
        "Placed Queens List",
        "Attack Violation check",
        "Matching configurations count"
      ],
      "rows": [
        [
          "Row 0",
          "Queen placed at Col 1",
          "No violation",
          "Total: 0"
        ],
        [
          "Row 1",
          "Queen placed at Col 3",
          "No violation",
          "Total: 0"
        ],
        [
          "Row 2",
          "Queen placed at Col 0",
          "No violation",
          "Total: 0"
        ],
        [
          "Success configuration",
          "[1, 3, 0, 2]",
          "All 4 queens placed",
          "Total configurations count = 1"
        ]
      ]
    }
  },
  "980": {
    "intuition": "Walk through all non-obstacle squares exactly once, from start to end square. We use depth-first backtracking search to inspect all possible walking paths.",
    "formula": "Complete Path Validation:<br><code>if (r === endR && c === endC && emptyWalked === totalEmpty) return 1;</code>",
    "time": "O(3^N) - where N is cells count.",
    "space": "O(N) - recursive stack frames depth.",
    "dryrun": {
      "testcase": "grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]",
      "headers": [
        "Step",
        "Cell index",
        "Unvisited remaining",
        "Status",
        "Matches count contribution"
      ],
      "rows": [
        [
          "1",
          "Start (0,0)",
          "8 cells left",
          "Visit neighbor",
          "0"
        ],
        [
          "2",
          "Walk (0,1)",
          "7 cells left",
          "Visit neighbor",
          "0"
        ],
        [
          "Success",
          "End (2,2)",
          "0 cells left",
          "Goal reached with 100% path coverage",
          "1 path found"
        ]
      ]
    }
  }
});


Object.assign(problemLogicDatabase, {
  "389": {
    "intuition": "Find the single character added to string t. By XORing the character values of both string s and string t, duplicate characters cancel out, leaving the ASCII value of the added character.",
    "formula": "Character XOR cancellation:<br><code>charXOR = s.charCodeAt(i) ^ t.charCodeAt(j);</code>",
    "time": "O(N) - single pass over s and t.",
    "space": "O(1) - single accumulator register.",
    "dryrun": {
      "testcase": "s = 'abcd', t = 'abcde'",
      "headers": [
        "Char Scanned",
        "Ascii Value",
        "Running XOR Accumulator",
        "Character equivalent"
      ],
      "rows": [
        [
          "Initial state",
          "-",
          "0",
          "-"
        ],
        [
          "s[0]='a'",
          "97",
          "97",
          "'a'"
        ],
        [
          "t[0]='a'",
          "97",
          "0 (cancels out)",
          "null"
        ],
        [
          "Final 'e'",
          "101",
          "101",
          "'e'"
        ]
      ]
    }
  },
  "1863": {
    "intuition": "Generate all possible subsets. For each subset, compute the XOR total of its elements, then sum these totals. We can use bitmasking from 0 to 2^N - 1 to extract every subset.",
    "formula": "XOR sum recurrence:<br><code>subsetXOR = val0 ^ val1 ^ ...; sum += subsetXOR;</code>",
    "time": "O(N * 2^N) - subset generation and XOR sum.",
    "space": "O(1) - constant overhead.",
    "dryrun": {
      "testcase": "nums = [1, 3]",
      "headers": [
        "Mask index",
        "Binary Mask",
        "Subset Selected",
        "Subset XOR value",
        "Running Sum"
      ],
      "rows": [
        [
          "0",
          "00",
          "[]",
          "0",
          "0"
        ],
        [
          "1",
          "01",
          "[1]",
          "1",
          "1"
        ],
        [
          "2",
          "10",
          "[3]",
          "3",
          "4"
        ],
        [
          "3",
          "11",
          "[1, 3]",
          "2 (1^3)",
          "6 (Final result)"
        ]
      ]
    }
  }
});


Object.assign(problemLogicDatabase, {
  "201": {
    "intuition": "Find the common prefix of the binary representations of range boundaries 'left' and 'right'. We shift both numbers to the right until they are equal, then shift the common prefix back to the left.",
    "formula": "Shift common prefix:<br><code>while (left < right) { left >>= 1; right >>= 1; shift++; } return left << shift;</code>",
    "time": "O(1) - maximum 32 shifts.",
    "space": "O(1) - single shift counter.",
    "dryrun": {
      "testcase": "left = 5, right = 7",
      "headers": [
        "Step",
        "Left Binary",
        "Right Binary",
        "Shifts Count",
        "Equality status"
      ],
      "rows": [
        [
          "Initial state",
          "5 (0101)",
          "7 (0111)",
          "0",
          "Not Equal"
        ],
        [
          "1",
          "2 (0010)",
          "3 (0011)",
          "1",
          "Not Equal"
        ],
        [
          "2",
          "1 (0001)",
          "1 (0001)",
          "2",
          "Equal (Common Prefix found)"
        ],
        [
          "Return result",
          "1 << 2 = 4 (0100)",
          "-",
          "2",
          "Final Range AND = 4"
        ]
      ]
    }
  },
  "476": {
    "intuition": "Flipped value complement of a positive integer is obtained by XORing it with a bitmask of all 1s matching the length of the integer's binary representation.",
    "formula": "Flipping mask creation:<br><code>let mask = (1 << num.toString(2).length) - 1; return num ^ mask;</code>",
    "time": "O(1) - proportional to bits count.",
    "space": "O(1) - single mask register.",
    "dryrun": {
      "testcase": "num = 5",
      "headers": [
        "Input Value",
        "Binary Representation",
        "Bitmask Creation",
        "XOR Result",
        "Complement Decimal"
      ],
      "rows": [
        [
          "5",
          "101_2 (length = 3)",
          "mask = (1<<3)-1 = 7 (111_2)",
          "5 ^ 7 = 101 ^ 111 = 010_2",
          "2"
        ]
      ]
    }
  }
});


Object.assign(problemLogicDatabase, {
  "147": {
    "intuition": "Sort a linked list using insertion sort. We maintain a sorted boundary at the beginning of the list, recursively removing node by node and inserting it at the correct index.",
    "formula": "Insertion pointers comparison:<br><code>if (curr.val < prev.next.val) { insert_node; }</code>",
    "time": "O(N^2) - comparisons for each list element.",
    "space": "O(1) - single auxiliary list node.",
    "dryrun": {
      "testcase": "head = [4,2,1,3]",
      "headers": [
        "Step",
        "Unsorted Element",
        "Sorted list state",
        "Insertion pointer slot",
        "Remaining List"
      ],
      "rows": [
        [
          "Initial state",
          "4",
          "[4]",
          "Insert at dummy next",
          "[2,1,3]"
        ],
        [
          "1",
          "2",
          "[2, 4]",
          "Insert before 4",
          "[1,3]"
        ],
        [
          "2",
          "1",
          "[1, 2, 4]",
          "Insert before 2",
          "[3]"
        ],
        [
          "3",
          "3",
          "[1, 2, 3, 4]",
          "Insert between 2 and 4",
          "[]"
        ]
      ]
    }
  }
});


Object.assign(problemLogicDatabase, {
  "179": {
    "intuition": "To form the largest number from an array of integers, convert each integer to a string and sort them using a custom comparator. Two strings A and B are compared as (A + B) vs (B + A).",
    "formula": "Custom comparator sorting condition:<br><code>compare(a, b) => (b + a).compareTo(a + b)</code>",
    "time": "O(N log N) - standard comparison sorting complexity.",
    "space": "O(N) - string array conversion copies.",
    "dryrun": {
      "testcase": "nums = [3, 30, 34]",
      "headers": [
        "Element A",
        "Element B",
        "Compare A+B vs B+A",
        "Sorting Order status"
      ],
      "rows": [
        [
          "'3'",
          "'30'",
          "'330' > '303'",
          "Keep 3 before 30"
        ],
        [
          "'30'",
          "'34'",
          "'3034' < '3430'",
          "Swap 34 before 30"
        ],
        [
          "Final order",
          "-",
          "-",
          "['34', '3', '30'] -> Output: '34330'"
        ]
      ]
    }
  },
  "274": {
    "intuition": "Find the H-Index. We sort the citations array in ascending order (using insertion sort or comparison sort) and scan from the right to find the threshold where papers citation counts match papers count.",
    "formula": "H-Index validation condition:<br><code>if (citations[n - 1 - i] >= i + 1) hIndex = i + 1;</code>",
    "time": "O(N^2) - citations sorting time.",
    "space": "O(1) - single citations array reference.",
    "dryrun": {
      "testcase": "citations = [3, 0, 6, 1, 5]",
      "headers": [
        "Sorted citations",
        "Index i from right",
        "Citation count citations[n-1-i]",
        "Threshold i+1",
        "H-Index update"
      ],
      "rows": [
        [
          "[0, 1, 3, 5, 6]",
          "i = 0",
          "6",
          "1",
          "h = 1"
        ],
        [
          "[0, 1, 3, 5, 6]",
          "i = 1",
          "5",
          "2",
          "h = 2"
        ],
        [
          "[0, 1, 3, 5, 6]",
          "i = 2",
          "3",
          "3",
          "h = 3 (Final match)"
        ],
        [
          "[0, 1, 3, 5, 6]",
          "i = 3",
          "1",
          "4",
          "Cannot update further"
        ]
      ]
    }
  }
});

function getProblemLogic(prob) {
  let logic = problemLogicDatabase[prob.id];
  if (!logic) {
    const pattern = patternLogicTemplates[prob.subcategory] || patternLogicTemplates[prob.topic] || {
      intuition: `Master this problem using general ${prob.topic} algorithmic logic.`,
      formula: `Formula / transition matches ${prob.subcategory} guidelines.`,
      time: "O(N)",
      space: "O(1)",
      dryrun: {
        testcase: "Generic Case",
        headers: ["Step", "Action"],
        rows: [["1", "Traces step sequentially matching pattern guidelines"]]
      }
    };
    logic = {
      intuition: `For <strong>#${prob.id} ${prob.name}</strong>: ${pattern.intuition}`,
      formula: pattern.formula,
      time: pattern.time,
      space: pattern.space,
      dryrun: pattern.dryrun
    };
  }
  return logic;
}

function updateProblemLogicPanel(prob) {
  const panel = document.getElementById('problem-logic-panel');
  if (!panel) return;
  
  const logic = getProblemLogic(prob);
  const content = document.getElementById('logic-content');
  if (!content) return;
  
  let dryrunHtml = '';
  if (logic.dryrun && typeof logic.dryrun === 'object' && logic.dryrun.headers) {
    const headersHtml = logic.dryrun.headers.map(h => `
      <th style="padding: 0.6rem 0.8rem; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.08); font-size: 0.75rem; font-weight: 600; color: var(--accent-cyan); font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em;">${h}</th>
    `).join('');
    const rowsHtml = logic.dryrun.rows.map(r => {
      const cellsHtml = r.map(c => `
        <td style="padding: 0.6rem 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.03); font-size: 0.75rem; color: var(--text-muted); font-family: monospace;">${c}</td>
      `).join('');
      return `<tr style="transition: background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.02)'" onmouseout="this.style.background='transparent'">${cellsHtml}</tr>`;
    });
    dryrunHtml = `
      <div style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); display: inline-block; margin-bottom: 0.5rem; background: rgba(0,242,254,0.08); border: 1px solid rgba(0,242,254,0.15); padding: 0.3rem 0.6rem; border-radius: 4px; font-family: monospace;">TEST CASE: ${logic.dryrun.testcase}</span>
        <div style="overflow-x: auto; width: 100%; background: rgba(255,255,255,0.01); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
          <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
              <tr style="background: rgba(255,255,255,0.01);">${headersHtml}</tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    dryrunHtml = `
      <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; background: rgba(255,255,255,0.02); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.03); white-space: pre-line;">${logic.dryrun}</p>
    `;
  }
  
  content.innerHTML = `
    <div>
      <h4 style="font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-bottom: 0.35rem;">Core Intuition</h4>
      <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">${logic.intuition}</p>
    </div>
    <div>
      <h4 style="font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-bottom: 0.35rem;">Mathematical Formulation & Rules</h4>
      <p style="font-size: 0.85rem; font-family: monospace; background: rgba(0,0,0,0.2); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); color: var(--accent-cyan); line-height: 1.6;">${logic.formula}</p>
    </div>
    <div>
      <h4 style="font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-bottom: 0.35rem;">Detailed Approach & Tabular Dry Run</h4>
      ${dryrunHtml}
    </div>
    <div style="display: flex; gap: 2rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 0.75rem; margin-top: 0.25rem;">
      <div>
        <h4 style="font-size: 0.85rem; font-weight: 600; color: #ffffff; margin-bottom: 0.15rem;">Time Complexity</h4>
        <span style="font-size: 0.8rem; font-family: monospace; color: var(--easy); font-weight: 700;">${logic.time}</span>
      </div>
      <div>
        <h4 style="font-size: 0.85rem; font-weight: 600; color: #ffffff; margin-bottom: 0.15rem;">Space Complexity</h4>
        <span style="font-size: 0.8rem; font-family: monospace; color: var(--easy); font-weight: 700;">${logic.space}</span>
      </div>
    </div>
  `;
  panel.style.display = 'block';
}

function buildHeatmap() {
  const container = document.getElementById('activity-heatmap');
  if (!container) return;
  if (container._heatmapResizeObserver) {
    container._heatmapResizeObserver.disconnect();
  }
  container.innerHTML = '';
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = formatDateKey(today);
  const datesToShow = [];
  const sixMonthsAgo = new Date(today);
  sixMonthsAgo.setMonth(today.getMonth() - 6);
  sixMonthsAgo.setDate(sixMonthsAgo.getDate() + 1);
  
  for (let d = new Date(sixMonthsAgo); d <= today; d.setDate(d.getDate() + 1)) {
    datesToShow.push(new Date(d));
  }

  const selectHeatmapDate = (cell, dateLabel, count) => {
    container.querySelectorAll('.heatmap-cell.selected').forEach(selected => {
      selected.classList.remove('selected');
      selected.setAttribute('aria-pressed', 'false');
    });
    cell.classList.add('selected');
    cell.setAttribute('aria-pressed', 'true');
    
    const detailDate = document.getElementById('heatmap-detail-date');
    const detailCount = document.getElementById('heatmap-detail-count');
    if (detailDate) detailDate.textContent = dateLabel;
    if (detailCount) detailCount.textContent = `${count} problem${count !== 1 ? 's' : ''} solved`;
  };

  const cellGap = 4;
  const minCellSize = 10;
  const maxCellSize = 16;

  const header = document.createElement('div');
  header.className = 'heatmap-summary';
  header.innerHTML = `
    <div>
      <span class="heatmap-summary-label">Selected date</span>
      <strong id="heatmap-detail-date">Today</strong>
    </div>
    <div>
      <span class="heatmap-summary-label">Solved</span>
      <strong id="heatmap-detail-count">0 problems solved</strong>
    </div>
  `;
  container.appendChild(header);

  const scroll = document.createElement('div');
  scroll.className = 'heatmap-scroll';

  const heatmapContent = document.createElement('div');
  heatmapContent.className = 'heatmap-content';

  const spacer = document.createElement('div');
  spacer.className = 'heatmap-label-spacer';
  heatmapContent.appendChild(spacer);

  const monthLabels = document.createElement('div');
  monthLabels.className = 'heatmap-month-labels';
  heatmapContent.appendChild(monthLabels);

  const dayLabels = document.createElement('div');
  dayLabels.className = 'heatmap-day-labels';
  const dayNames = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
  dayNames.forEach(dayName => {
    const label = document.createElement('span');
    label.className = 'heatmap-day-label';
    label.textContent = dayName;
    dayLabels.appendChild(label);
  });
  heatmapContent.appendChild(dayLabels);

  const grid = document.createElement('div');
  grid.className = 'heatmap-grid';
  heatmapContent.appendChild(grid);

  const startDay = datesToShow[0].getDay();
  const totalCells = startDay + datesToShow.length;
  const totalWeeks = Math.ceil(totalCells / 7);
  heatmapContent.style.setProperty('--heatmap-cell-size', `${minCellSize}px`);
  heatmapContent.style.setProperty('--heatmap-cell-gap', `${cellGap}px`);

  let lastMonth = -1;
  const monthColumns = [];
  datesToShow.forEach((date, idx) => {
    const month = date.getMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      const label = document.createElement('span');
      label.className = 'heatmap-month-label';
      label.textContent = date.toLocaleDateString(undefined, { month: 'short' });
      const column = Math.floor((startDay + idx) / 7);
      monthColumns.push({ label, column });
      monthLabels.appendChild(label);
    }
  });

  const updateHeatmapSizing = () => {
    const labelColumnWidth = 36;
    const availableWidth = Math.max(0, scroll.clientWidth - labelColumnWidth);
    const flexibleCellSize = Math.floor((availableWidth - ((totalWeeks - 1) * cellGap)) / totalWeeks);
    const cellSize = Math.max(minCellSize, Math.min(maxCellSize, flexibleCellSize));
    const columnStep = cellSize + cellGap;
    const gridWidth = (totalWeeks * cellSize) + ((totalWeeks - 1) * cellGap);

    heatmapContent.style.setProperty('--heatmap-cell-size', `${cellSize}px`);
    grid.style.width = `${gridWidth}px`;
    monthLabels.style.width = `${gridWidth}px`;
    monthColumns.forEach(({ label, column }) => {
      label.style.left = `${column * columnStep}px`;
    });
  };

  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'heatmap-cell empty';
    grid.appendChild(empty);
  }
  
  let todayCell = null;
  let todayCount = 0;
  let todayLabel = '';

  datesToShow.forEach(date => {
    const dateStr = formatDateKey(date);
    const cell = document.createElement('button');
    cell.className = 'heatmap-cell';
    
    const count = state.activityLog[dateStr] || 0;
    const dateLabel = date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    const solvedLabel = `${count} problem${count !== 1 ? 's' : ''} solved`;

    cell.type = 'button';
    cell.setAttribute('aria-label', `${dateLabel}: ${solvedLabel}`);
    cell.setAttribute('aria-pressed', 'false');
    cell.title = `${dateLabel} - ${solvedLabel}`;
    
    if (count > 0 && count <= 1) cell.classList.add('level-1');
    else if (count > 1 && count <= 2) cell.classList.add('level-2');
    else if (count > 2 && count <= 3) cell.classList.add('level-3');
    else if (count > 3) cell.classList.add('level-4');

    cell.addEventListener('click', () => selectHeatmapDate(cell, dateLabel, count));

    if (dateStr === todayKey) {
      todayCell = cell;
      todayCount = count;
      todayLabel = dateLabel;
    }
    
    grid.appendChild(cell);
  });
  
  scroll.appendChild(heatmapContent);
  container.appendChild(scroll);
  
  const legend = document.createElement('div');
  legend.className = 'heatmap-legend';
  legend.innerHTML = `
    <span>Less</span>
    <div class="heatmap-legend-cell" style="background: rgba(255, 255, 255, 0.03);"></div>
    <div class="heatmap-legend-cell level-1"></div>
    <div class="heatmap-legend-cell level-2"></div>
    <div class="heatmap-legend-cell level-3"></div>
    <div class="heatmap-legend-cell level-4"></div>
    <span>More</span>
  `;
  container.appendChild(legend);

  if (todayCell) {
    selectHeatmapDate(todayCell, todayLabel, todayCount);
  }

  requestAnimationFrame(() => {
    updateHeatmapSizing();
    scroll.scrollLeft = scroll.scrollWidth;
  });

  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(updateHeatmapSizing);
    resizeObserver.observe(scroll);
    container._heatmapResizeObserver = resizeObserver;
  } else {
    window.addEventListener('resize', updateHeatmapSizing);
  }
}

function calculatePoints() {
  const solvedCount = state.problems.filter(p => p.status === 'done').length;
  const progressCount = state.problems.filter(p => p.status === 'progress').length;
  
  // Base points from solved problems
  let points = solvedCount * 10 + progressCount * 3;
  
  // Streak bonus
  if (state.streak >= 5) points += state.streak * 5;
  if (state.streak >= 10) points += 25;
  
  state.points = points;
  
  // Update rank based on points
  if (points >= 500) state.rank = 'Algorithm Overlord';
  else if (points >= 250) state.rank = 'Elite';
  else if (points >= 100) state.rank = 'DSA Champion';
  else if (points >= 50) state.rank = 'Recursion Rookie';
  else state.rank = 'Coding Padawan';
}

function buildTopicProgress() {
  const container = document.getElementById('topic-progress-list');
  if (!container) return;
  container.innerHTML = '';
  
  const topics = DSA_TOPICS;
  let totalMastered = 0;
  
  // Count total problems per topic and solved per topic
  topics.forEach(topic => {
    const total = state.problems.filter(p => p.topic === topic).length;
    const solved = state.problems.filter(p => p.topic === topic && p.status === 'done').length;
    const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
    
    if (pct >= 80) totalMastered++;
    
    const row = document.createElement('div');
    row.className = 'topic-bar-row';
    row.innerHTML = `
      <span class="topic-bar-label">${topic}</span>
      <div class="topic-bar-track">
        <div class="topic-bar-fill" style="width: ${pct}%"></div>
      </div>
      <span class="topic-bar-count">${solved}/${total}</span>
    `;
    container.appendChild(row);
  });
  
  const badge = document.getElementById('topic-total-badge');
  if (badge) {
    badge.textContent = `${totalMastered} topics mastered`;
  }
}

function renderSolvedFeed() {
  const list = document.getElementById('solved-feed-list');
  const empty = document.getElementById('solved-feed-empty');
  if (!list || !empty) return;
  
  list.innerHTML = '';
  
  const diffFilter = document.getElementById('solved-filter-diff').value;
  const topicFilter = document.getElementById('solved-filter-topic').value;
  
  let solved = state.problems.filter(p => p.status === 'done');
  
  if (diffFilter !== 'all') {
    solved = solved.filter(p => p.difficulty === diffFilter);
  }
  if (topicFilter !== 'all') {
    solved = solved.filter(p => p.topic === topicFilter);
  }
  
  if (solved.length === 0) {
    list.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  
  list.style.display = 'block';
  empty.style.display = 'none';
  
  // Sort by most recently solved first (by id as proxy)
  solved.sort((a, b) => b.id - a.id);
  
  solved.forEach(p => {
    const item = document.createElement('div');
    item.className = 'solved-feed-item';
    item.onclick = () => onProblemClick(p.id);
    item.innerHTML = `
      <span class="solved-feed-check"><i data-lucide="check-circle-2"></i></span>
      <div class="solved-feed-info">
        <span class="solved-feed-name">#${p.id} ${p.name}</span>
        <span class="solved-feed-meta">${p.topic} · ${p.subcategory}</span>
      </div>
      <span class="difficulty-badge ${p.difficulty}">${p.difficulty}</span>
    `;
    list.appendChild(item);
  });
  
  lucide.createIcons();
}

function showBadgeUnlockNotifications(previouslyUnlockedBadges) {
  state.badges.forEach(badge => {
    const isUnlocked = badge.check(state.problems);
    if (!isUnlocked || previouslyUnlockedBadges.has(badge.id)) return;

    showNotification('', {
      type: 'badge',
      icon: badge.icon,
      title: 'Badge Unlocked',
      message: badge.name,
      detail: badge.desc
    });
  });
}

function showNotification(message, options = {}) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast-notification ${options.type ? `toast-${options.type}` : ''}`;
  
  if (options.type === 'badge') {
    toast.innerHTML = `
      <span class="toast-badge-icon">${options.icon}</span>
      <span class="toast-copy">
        <span class="toast-title">${options.title}</span>
        <strong>${options.message}</strong>
        <span class="toast-detail">${options.detail}</span>
      </span>
    `;
  } else {
    toast.textContent = message;
  }

  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, options.type === 'badge' ? 3600 : 2500);
}

function renderDashboard() {
  calculatePoints();
  
  // Update stat numbers
  const totalProblems = state.problems.length;
  const solvedCount = state.problems.filter(p => p.status === 'done').length;
  
  document.getElementById('stat-solved-count').textContent = `${solvedCount} / ${totalProblems}`;
  document.getElementById('stat-streak-val').textContent = `${state.streak} Days`;
  document.getElementById('stat-rank-name').textContent = state.rank;
  document.getElementById('stat-points-val').textContent = `${state.points} pts`;
  
  // Progress ring
  const pct = totalProblems > 0 ? Math.round((solvedCount / totalProblems) * 100) : 0;
  const ring = document.getElementById('dashboard-progress-ring');
  document.getElementById('dashboard-pct-text').textContent = `${pct}%`;
  
  if (ring) {
    const circumference = 2 * Math.PI * 60; // r=60
    const offset = circumference - (pct / 100) * circumference;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = offset;
  }
  
  // Breakdown by difficulty
  const easyTotal = state.problems.filter(p => p.difficulty === 'easy').length;
  const easySolved = state.problems.filter(p => p.difficulty === 'easy' && p.status === 'done').length;
  const medTotal = state.problems.filter(p => p.difficulty === 'medium').length;
  const medSolved = state.problems.filter(p => p.difficulty === 'medium' && p.status === 'done').length;
  const hardTotal = state.problems.filter(p => p.difficulty === 'hard').length;
  const hardSolved = state.problems.filter(p => p.difficulty === 'hard' && p.status === 'done').length;
  
  document.getElementById('breakdown-easy').textContent = `${easySolved} / ${easyTotal}`;
  document.getElementById('breakdown-medium').textContent = `${medSolved} / ${medTotal}`;
  document.getElementById('breakdown-hard').textContent = `${hardSolved} / ${hardTotal}`;
  
  buildHeatmap();
  buildBadgesList();
  buildTopicProgress();
  renderSolvedFeed();
}

function buildBadgesList() {
  const container = document.getElementById('badges-container');
  container.innerHTML = '';
  
  state.badges.forEach(badge => {
    const isUnlocked = badge.check(state.problems);
    const div = document.createElement('div');
    div.className = `badge-item ${isUnlocked ? 'unlocked' : 'locked'}`;
    
    div.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-details">
        <span class="badge-name">${badge.name}</span>
        <span class="badge-desc">${badge.desc}</span>
        <span class="badge-status">${isUnlocked ? 'Unlocked' : 'Locked'}</span>
      </div>
    `;
    
    container.appendChild(div);
  });
}

// ==========================================================================
// UTILS
// ==========================================================================

function getDiscardedRange(length, low, high) {
  const disc = [];
  for (let i = 0; i < length; i++) {
    if (i < low || i > high) disc.push(i);
  }
  return disc;
}

// ==========================================================================
// ALGORITHM VISUALIZATION TEMPLATE AND CODES
// ==========================================================================

const codeTemplates = {
  quicksortfull: `
<span class="code-keyword">function</span> <span class="code-fn">quickSort</span>(arr, lo, hi) {
  <span class="code-keyword">if</span> (lo &lt; hi) {
    <span class="code-keyword">let</span> p = <span class="code-fn">partition</span>(arr, lo, hi); <span class="code-comment">// Pivot index</span>
    <span class="code-fn">quickSort</span>(arr, lo, p - <span class="code-num">1</span>);
    <span class="code-fn">quickSort</span>(arr, p + <span class="code-num">1</span>, hi);
  }
}
`,
  mergesort: `
<span class="code-keyword">function</span> <span class="code-fn">mergeSort</span>(arr, l, r) {
  <span class="code-keyword">if</span> (l &lt; r) {
    <span class="code-keyword">let</span> m = Math.<span class="code-fn">floor</span>((l + r) / <span class="code-num">2</span>);
    <span class="code-fn">mergeSort</span>(arr, l, m);
    <span class="code-fn">mergeSort</span>(arr, m + <span class="code-num">1</span>, r);
    <span class="code-fn">merge</span>(arr, l, m, r);
  }
}
`,
  insertionsort: `
<span class="code-keyword">function</span> <span class="code-fn">insertionSort</span>(arr) {
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">1</span>; i &lt; arr.length; i++) {
    <span class="code-keyword">let</span> key = arr[i], j = i - <span class="code-num">1</span>;
    <span class="code-keyword">while</span> (j &gt;= <span class="code-num">0</span> &amp;&amp; arr[j] &gt; key) {
      arr[j + <span class="code-num">1</span>] = arr[j];
      j--;
    }
    arr[j + <span class="code-num">1</span>] = key;
  }
}
`,
  singlenumber: `
<span class="code-keyword">function</span> <span class="code-fn">singleNumber</span>(nums) {
  <span class="code-keyword">let</span> acc = <span class="code-num">0</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> num <span class="code-keyword">of</span> nums) {
    acc = acc ^ num; <span class="code-comment">// Duplicate pairs cancel out to 0</span>
  }
  <span class="code-keyword">return</span> acc;
}
`,
  bitmasksubsets: `
<span class="code-keyword">function</span> <span class="code-fn">subsets</span>(nums) {
  <span class="code-keyword">let</span> n = nums.length;
  <span class="code-keyword">let</span> res = [];
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> mask = <span class="code-num">0</span>; mask &lt; (<span class="code-num">1</span> &lt;&lt; n); mask++) {
    <span class="code-keyword">let</span> subset = [];
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; n; i++) {
      <span class="code-keyword">if</span> ((mask &amp; (<span class="code-num">1</span> &lt;&lt; i)) &gt; <span class="code-num">0</span>) {
        subset.<span class="code-fn">push</span>(nums[i]);
      }
    }
    res.<span class="code-fn">push</span>(subset);
  }
  <span class="code-keyword">return</span> res;
}
`,
  bitmaskdp: `
<span class="code-comment">// Travelling Salesperson Problem (TSP) using Bitmask DP</span>
<span class="code-keyword">function</span> <span class="code-fn">tsp</span>(dist) {
  <span class="code-keyword">let</span> n = dist.length;
  <span class="code-keyword">let</span> dp = Array.from({ length: <span class="code-num">1</span> &lt;&lt; n }, () =&gt; Array(n).fill(Infinity));
  dp[<span class="code-num">1</span>][<span class="code-num">0</span>] = <span class="code-num">0</span>; <span class="code-comment">// Start at node 0</span>

  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> mask = <span class="code-num">1</span>; mask &lt; (<span class="code-num">1</span> &lt;&lt; n); mask++) {
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> u = <span class="code-num">0</span>; u &lt; n; u++) {
      <span class="code-keyword">if</span> (dp[mask][u] === Infinity) <span class="code-keyword">continue</span>;
      <span class="code-keyword">for</span> (<span class="code-keyword">let</span> v = <span class="code-num">0</span>; v &lt; n; v++) {
        <span class="code-keyword">if</span> ((mask &amp; (<span class="code-num">1</span> &lt;&lt; v)) === <span class="code-num">0</span>) {
          <span class="code-keyword">let</span> nextMask = mask | (<span class="code-num">1</span> &lt;&lt; v);
          dp[nextMask][v] = Math.min(dp[nextMask][v], dp[mask][u] + dist[u][v]);
        }
      }
    }
  }
  <span class="code-keyword">let</span> minCost = Infinity;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> u = <span class="code-num">1</span>; u &lt; n; u++) {
    minCost = Math.min(minCost, dp[(<span class="code-num">1</span> &lt;&lt; n) - <span class="code-num">1</span>][u] + dist[u][<span class="code-num">0</span>]);
  }
  <span class="code-keyword">return</span> minCost;
}
`,
  kosaraju: `
<span class="code-comment">// Kosaraju's SCC Algorithm</span>
<span class="code-keyword">function</span> <span class="code-fn">kosaraju</span>(graph) {
  <span class="code-keyword">let</span> n = graph.length;
  <span class="code-keyword">let</span> visited = <span class="code-keyword">new</span> Set();
  <span class="code-keyword">let</span> stack = [];

  <span class="code-keyword">function</span> <span class="code-fn">dfs1</span>(u) {
    visited.<span class="code-fn">add</span>(u);
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> v <span class="code-keyword">of</span> graph[u]) {
      <span class="code-keyword">if</span> (!visited.<span class="code-fn">has</span>(v)) <span class="code-fn">dfs1</span>(v);
    }
    stack.<span class="code-fn">push</span>(u);
  }

  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; n; i++) {
    <span class="code-keyword">if</span> (!visited.<span class="code-fn">has</span>(i)) <span class="code-fn">dfs1</span>(i);
  }

  <span class="code-comment">// Transpose Graph</span>
  <span class="code-keyword">let</span> adjT = Array.from({ length: n }, () =&gt; []);
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> u = <span class="code-num">0</span>; u &lt; n; u++) {
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> v <span class="code-keyword">of</span> graph[u]) {
      adjT[v].<span class="code-fn">push</span>(u);
    }
  }

  visited.<span class="code-fn">clear</span>();
  <span class="code-keyword">let</span> sccs = [];

  <span class="code-keyword">function</span> <span class="code-fn">dfs2</span>(u, comp) {
    visited.<span class="code-fn">add</span>(u);
    comp.<span class="code-fn">push</span>(u);
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> v <span class="code-keyword">of</span> adjT[u]) {
      <span class="code-keyword">if</span> (!visited.<span class="code-fn">has</span>(v)) <span class="code-fn">dfs2</span>(v, comp);
    }
  }

  <span class="code-keyword">while</span> (stack.length &gt; <span class="code-num">0</span>) {
    <span class="code-keyword">let</span> u = stack.<span class="code-fn">pop</span>();
    <span class="code-keyword">if</span> (!visited.<span class="code-fn">has</span>(u)) {
      <span class="code-keyword">let</span> comp = [];
      <span class="code-fn">dfs2</span>(u, comp);
      sccs.<span class="code-fn">push</span>(comp);
    }
  }
  <span class="code-keyword">return</span> sccs;
}
`,
  binaryaddition: `
<span class="code-keyword">function</span> <span class="code-fn">getSum</span>(a, b) {
  <span class="code-keyword">while</span> (b !== <span class="code-num">0</span>) {
    <span class="code-keyword">let</span> sum = a ^ b; <span class="code-comment">// Add without carry</span>
    <span class="code-keyword">let</span> carry = (a &amp; b) &lt;&lt; <span class="code-num">1</span>; <span class="code-comment">// Carry bits</span>
    a = sum;
    b = carry;
  }
  <span class="code-keyword">return</span> a;
}
`,
  prims: `
<span class="code-keyword">function</span> <span class="code-fn">primsMST</span>(points) {
  <span class="code-keyword">let</span> n = points.length;
  <span class="code-keyword">let</span> inMST = <span class="code-keyword">new</span> <span class="code-fn">Array</span>(n).<span class="code-fn">fill</span>(<span class="code-keyword">false</span>);
  <span class="code-keyword">let</span> minDist = <span class="code-keyword">new</span> <span class="code-fn">Array</span>(n).<span class="code-fn">fill</span>(<span class="code-num">Infinity</span>);
  minDist[<span class="code-num">0</span>] = <span class="code-num">0</span>;
  
  <span class="code-keyword">let</span> totalCost = <span class="code-num">0</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; n; i++) {
    <span class="code-keyword">let</span> u = -<span class="code-num">1</span>;
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = <span class="code-num">0</span>; j &lt; n; j++) {
      <span class="code-keyword">if</span> (!inMST[j] && (u === -<span class="code-num">1</span> || minDist[j] &lt; minDist[u])) {
        u = j;
      }
    }
    
    inMST[u] = <span class="code-keyword">true</span>;
    totalCost += minDist[u];
    
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> v = <span class="code-num">0</span>; v &lt; n; v++) {
      <span class="code-keyword">let</span> d = <span class="code-fn">manhattanDist</span>(points[u], points[v]);
      <span class="code-keyword">if</span> (!inMST[v] && d &lt; minDist[v]) {
        minDist[v] = d;
      }
    }
  }
  <span class="code-keyword">return</span> totalCost;
}
`,
  rbtree: `
<span class="code-keyword">function</span> <span class="code-fn">insertRBTree</span>(root, val) {
  <span class="code-keyword">let</span> node = <span class="code-keyword">new</span> <span class="code-fn">Node</span>(val, <span class="code-str">'red'</span>);
  <span class="code-fn">bstInsert</span>(root, node);
  <span class="code-fn">balanceRBTree</span>(root, node);
}

<span class="code-keyword">function</span> <span class="code-fn">balanceRBTree</span>(root, x) {
  <span class="code-keyword">while</span> (x !== root && x.parent.color === <span class="code-str">'red'</span>) {
    <span class="code-keyword">if</span> (x.parent === x.parent.parent.left) {
      <span class="code-keyword">let</span> y = x.parent.parent.right; <span class="code-comment">// Uncle</span>
      <span class="code-keyword">if</span> (y && y.color === <span class="code-str">'red'</span>) {
        x.parent.color = <span class="code-str">'black'</span>;
        y.color = <span class="code-str">'black'</span>;
        x.parent.parent.color = <span class="code-str">'red'</span>;
        x = x.parent.parent;
      } <span class="code-keyword">else</span> {
        <span class="code-keyword">if</span> (x === x.parent.right) {
          x = x.parent;
          <span class="code-fn">leftRotate</span>(root, x);
        }
        x.parent.color = <span class="code-str">'black'</span>;
        x.parent.parent.color = <span class="code-str">'red'</span>;
        <span class="code-fn">rightRotate</span>(root, x.parent.parent);
      }
    }
  }
}
`,
  netflow: `
<span class="code-keyword">function</span> <span class="code-fn">edmondsKarp</span>(capacity, source, sink) {
  <span class="code-keyword">let</span> flow = <span class="code-num">0</span>;
  <span class="code-keyword">let</span> parent = <span class="code-keyword">new</span> <span class="code-fn">Array</span>(n);
  
  <span class="code-keyword">while</span> (<span class="code-fn">bfs</span>(residualCapacity, source, sink, parent)) {
    <span class="code-keyword">let</span> pathFlow = <span class="code-num">Infinity</span>;
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> v = sink; v !== source; v = parent[v]) {
      <span class="code-keyword">let</span> u = parent[v];
      pathFlow = Math.<span class="code-fn">min</span>(pathFlow, residualCapacity[u][v]);
    }
    
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> v = sink; v !== source; v = parent[v]) {
      <span class="code-keyword">let</span> u = parent[v];
      residualCapacity[u][v] -= pathFlow;
      residualCapacity[v][u] += pathFlow;
    }
    flow += pathFlow;
  }
  <span class="code-keyword">return</span> flow;
}
`,
  astar: `
<span class="code-keyword">function</span> <span class="code-fn">aStarSearch</span>(start, goal) {
  <span class="code-keyword">let</span> openSet = <span class="code-keyword">new</span> <span class="code-fn">MinHeap</span>();
  openSet.<span class="code-fn">push</span>(start, <span class="code-num">0</span>);
  
  gScore[start] = <span class="code-num">0</span>;
  fScore[start] = <span class="code-fn">heuristic</span>(start, goal);
  
  <span class="code-keyword">while</span> (!openSet.<span class="code-fn">isEmpty</span>()) {
    <span class="code-keyword">let</span> curr = openSet.<span class="code-fn">pop</span>();
    <span class="code-keyword">if</span> (curr === goal) <span class="code-keyword">return</span> <span class="code-fn">reconstructPath</span>(curr);
    
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> neighbor <span class="code-keyword">of</span> <span class="code-fn">neighbors</span>(curr)) {
      <span class="code-keyword">let</span> tempG = gScore[curr] + <span class="code-fn">dist</span>(curr, neighbor);
      <span class="code-keyword">if</span> (tempG &lt; gScore[neighbor]) {
        gScore[neighbor] = tempG;
        fScore[neighbor] = tempG + <span class="code-fn">heuristic</span>(neighbor, goal);
        openSet.<span class="code-fn">push</span>(neighbor, fScore[neighbor]);
      }
    }
  }
}
`,
  bubble: `
<span class="code-keyword">function</span> <span class="code-fn">bubbleSort</span>(arr) {
  <span class="code-keyword">let</span> n = arr.length;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; n - <span class="code-num">1</span>; i++) {
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = <span class="code-num">0</span>; j &lt; n - i - <span class="code-num">1</span>; j++) {
      <span class="code-keyword">if</span> (arr[j] &gt; arr[j + <span class="code-num">1</span>]) {
        <span class="code-keyword">let</span> temp = arr[j];
        arr[j] = arr[j + <span class="code-num">1</span>];
        arr[j + <span class="code-num">1</span>] = temp;
      }
    }
  }
}`,
  binary: `
<span class="code-keyword">function</span> <span class="code-fn">binarySearch</span>(arr, target) {
  <span class="code-keyword">let</span> low = <span class="code-num">0</span>, high = arr.length - <span class="code-num">1</span>;
  <span class="code-keyword">while</span> (low &lt;= high) {
    <span class="code-keyword">let</span> mid = Math.<span class="code-fn">floor</span>((low + high) / <span class="code-num">2</span>);
    <span class="code-keyword">if</span> (arr[mid] === target) <span class="code-keyword">return</span> mid;
    <span class="code-keyword">if</span> (arr[mid] &lt; target) low = mid + <span class="code-num">1</span>;
    <span class="code-keyword">else</span> high = mid - <span class="code-num">1</span>;
  }
  <span class="code-keyword">return</span> -<span class="code-num">1</span>;
}`,
  window: `
<span class="code-keyword">function</span> <span class="code-fn">lengthOfLongestSubstring</span>(s) {
  <span class="code-keyword">let</span> set = <span class="code-keyword">new</span> Set();
  <span class="code-keyword">let</span> left = <span class="code-num">0</span>, maxLen = <span class="code-num">0</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> right = <span class="code-num">0</span>; right &lt; s.length; right++) {
    <span class="code-keyword">while</span> (set.<span class="code-fn">has</span>(s[right])) {
      set.<span class="code-fn">delete</span>(s[left]);
      left++;
    }
    set.<span class="code-fn">add</span>(s[right]);
    maxLen = Math.<span class="code-fn">max</span>(maxLen, right - left + <span class="code-num">1</span>);
  }
  <span class="code-keyword">return</span> maxLen;
}`,
  pointer: `
<span class="code-keyword">function</span> <span class="code-fn">maxArea</span>(height) {
  <span class="code-keyword">let</span> maxA = <span class="code-num">0</span>, left = <span class="code-num">0</span>, right = height.length - <span class="code-num">1</span>;
  <span class="code-keyword">while</span> (left &lt; right) {
    <span class="code-keyword">let</span> h = Math.<span class="code-fn">min</span>(height[left], height[right]);
    maxA = Math.<span class="code-fn">max</span>(maxA, h * (right - left));
    <span class="code-keyword">if</span> (height[left] &lt; height[right]) left++;
    <span class="code-keyword">else</span> right--;
  }
  <span class="code-keyword">return</span> maxA;
}`,
  cycle: `
<span class="code-keyword">function</span> <span class="code-fn">hasCycle</span>(head) {
  <span class="code-keyword">let</span> slow = head, fast = head;
  <span class="code-keyword">while</span> (fast !== <span class="code-keyword">null</span> &amp;&amp; fast.next !== <span class="code-keyword">null</span>) {
    slow = slow.next;
    fast = fast.next.next;
    <span class="code-keyword">if</span> (slow === fast) <span class="code-keyword">return</span> <span class="code-keyword">true</span>;
  }
  <span class="code-keyword">return</span> <span class="code-keyword">false</span>;
}`,
  stack: `
<span class="code-keyword">function</span> <span class="code-fn">dailyTemperatures</span>(temp) {
  <span class="code-keyword">let</span> ans = <span class="code-keyword">new</span> Array(temp.length).<span class="code-fn">fill</span>(<span class="code-num">0</span>);
  <span class="code-keyword">let</span> stack = []; 
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; temp.length; i++) {
    <span class="code-keyword">while</span> (stack.length &gt; <span class="code-num">0</span> &amp;&amp; temp[i] &gt; temp[stack[stack.length - <span class="code-num">1</span>]]) {
      <span class="code-keyword">let</span> idx = stack.<span class="code-fn">pop</span>();
      ans[idx] = i - idx;
    }
    stack.<span class="code-fn">push</span>(i);
  }
  <span class="code-keyword">return</span> ans;
}`,
  tree: `
<span class="code-keyword">function</span> <span class="code-fn">maxDepth</span>(root) {
  <span class="code-keyword">if</span> (root === <span class="code-keyword">null</span>) <span class="code-keyword">return</span> <span class="code-num">0</span>;
  <span class="code-keyword">let</span> left = <span class="code-fn">maxDepth</span>(root.left);
  <span class="code-keyword">let</span> right = <span class="code-fn">maxDepth</span>(root.right);
  <span class="code-keyword">return</span> Math.<span class="code-fn">max</span>(left, right) + <span class="code-num">1</span>;
}`,
  graph: `
<span class="code-keyword">function</span> <span class="code-fn">numIslands</span>(grid) {
  <span class="code-keyword">let</span> count = <span class="code-num">0</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> r = <span class="code-num">0</span>; r &lt; grid.length; r++) {
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> c = <span class="code-num">0</span>; c &lt; grid[<span class="code-num">0</span>].length; c++) {
      <span class="code-keyword">if</span> (grid[r][c] === <span class="code-str">'1'</span>) {
        <span class="code-fn">dfs</span>(grid, r, c);
        count++;
      }
    }
  }
  <span class="code-keyword">return</span> count;
}`,
  matrix: `
<span class="code-keyword">function</span> <span class="code-fn">uniquePaths</span>(m, n) {
  <span class="code-keyword">let</span> dp = Array.<span class="code-fn">from</span>({length: m}, () => <span class="code-keyword">new</span> Array(n).<span class="code-fn">fill</span>(<span class="code-num">1</span>));
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">1</span>; i &lt; m; i++) {
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = <span class="code-num">1</span>; j &lt; n; j++) {
      dp[i][j] = dp[i - <span class="code-num">1</span>][j] + dp[i][j - <span class="code-num">1</span>];
    }
  }
  <span class="code-keyword">return</span> dp[m - <span class="code-num">1</span>][n - <span class="code-num">1</span>];
}`,
  intervals: `
<span class="code-keyword">function</span> <span class="code-fn">merge</span>(intervals) {
  intervals.<span class="code-fn">sort</span>((a, b) => a[<span class="code-num">0</span>] - b[<span class="code-num">0</span>]);
  <span class="code-keyword">let</span> merged = [];
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> interval <span class="code-keyword">of</span> intervals) {
    <span class="code-keyword">if</span> (merged.length === <span class="code-num">0</span> || merged[merged.length - <span class="code-num">1</span>][<span class="code-num">1</span>] &lt; interval[<span class="code-num">0</span>]) {
      merged.<span class="code-fn">push</span>(interval);
    } <span class="code-keyword">else</span> {
      merged[merged.length - <span class="code-num">1</span>][<span class="code-num">1</span>] = Math.<span class="code-fn">max</span>(merged[merged.length - <span class="code-num">1</span>][<span class="code-num">1</span>], interval[<span class="code-num">1</span>]);
    }
  }
  <span class="code-keyword">return</span> merged;
}`,
  hash: `
<span class="code-keyword">function</span> <span class="code-fn">wordFrequency</span>(words) {
  <span class="code-keyword">let</span> map = <span class="code-keyword">new</span> Map();
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> w <span class="code-keyword">of</span> words) {
    map.<span class="code-fn">set</span>(w, (map.<span class="code-fn">get</span>(w) || <span class="code-num">0</span>) + <span class="code-num">1</span>);
  }
  <span class="code-keyword">return</span> map;
}`,
  bits: `
<span class="code-keyword">function</span> <span class="code-fn">hammingWeight</span>(n) {
  <span class="code-keyword">let</span> sum = <span class="code-num">0</span>;
  <span class="code-keyword">while</span> (n !== <span class="code-num">0</span>) {
    sum += n &amp; <span class="code-num">1</span>;
    n = n &gt;&gt;&gt; <span class="code-num">1</span>;
  }
  <span class="code-keyword">return</span> sum;
}`,

  // --- Specific Overrides (by LeetCode ID) ---
  142: `
<span class="code-keyword">function</span> <span class="code-fn">detectCycle</span>(head) {
  <span class="code-keyword">let</span> slow = head, fast = head;
  <span class="code-keyword">while</span> (fast !== <span class="code-keyword">null</span> &amp;&amp; fast.next !== <span class="code-keyword">null</span>) {
    slow = slow.next;
    fast = fast.next.next;
    <span class="code-keyword">if</span> (slow === fast) {
      <span class="code-keyword">let</span> entry = head;
      <span class="code-keyword">while</span> (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
      }
      <span class="code-keyword">return</span> entry; <span class="code-comment">// cycle origin node</span>
    }
  }
  <span class="code-keyword">return</span> <span class="code-keyword">null</span>;
}`,
  167: `
<span class="code-keyword">function</span> <span class="code-fn">twoSumSorted</span>(numbers, target) {
  <span class="code-keyword">let</span> left = <span class="code-num">0</span>, right = numbers.length - <span class="code-num">1</span>;
  <span class="code-keyword">while</span> (left &lt; right) {
    <span class="code-keyword">let</span> sum = numbers[left] + numbers[right];
    <span class="code-keyword">if</span> (sum === target) <span class="code-keyword">return</span> [left + <span class="code-num">1</span>, right + <span class="code-num">1</span>];
    <span class="code-keyword">if</span> (sum &lt; target) left++;
    <span class="code-keyword">else</span> right--;
  }
  <span class="code-keyword">return</span> [];
}`,
  84: `
<span class="code-keyword">function</span> <span class="code-fn">largestRectangleArea</span>(heights) {
  <span class="code-keyword">let</span> maxArea = <span class="code-num">0</span>, stack = [];
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt;= heights.length; i++) {
    <span class="code-keyword">let</span> h = (i === heights.length) ? <span class="code-num">0</span> : heights[i];
    <span class="code-keyword">while</span> (stack.length &gt; <span class="code-num">0</span> &amp;&amp; h &lt; heights[stack[stack.length - <span class="code-num">1</span>]]) {
      <span class="code-keyword">let</span> height = heights[stack.<span class="code-fn">pop</span>()];
      <span class="code-keyword">let</span> width = stack.length === <span class="code-num">0</span> ? i : i - <span class="code-num">1</span> - stack[stack.length - <span class="code-num">1</span>];
      maxArea = Math.<span class="code-fn">max</span>(maxArea, height * width);
    }
    stack.<span class="code-fn">push</span>(i);
  }
  return maxArea;
}`,

  // --- New Engine Code Templates ---
  trie: `<span class="code-keyword">class</span> <span class="code-fn">TrieNode</span> {
  <span class="code-fn">constructor</span>() {
    <span class="code-keyword">this</span>.children = {};
    <span class="code-keyword">this</span>.isEnd = <span class="code-keyword">false</span>;
  }
}

<span class="code-keyword">class</span> <span class="code-fn">Trie</span> {
  <span class="code-fn">constructor</span>() {
    <span class="code-keyword">this</span>.root = <span class="code-keyword">new</span> <span class="code-fn">TrieNode</span>();
  }
  <span class="code-fn">insert</span>(word) {
    <span class="code-keyword">let</span> node = <span class="code-keyword">this</span>.root;
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> ch <span class="code-keyword">of</span> word) {
      <span class="code-keyword">if</span> (!node.children[ch])
        node.children[ch] = <span class="code-keyword">new</span> <span class="code-fn">TrieNode</span>();
      node = node.children[ch];
    }
    node.isEnd = <span class="code-keyword">true</span>;
  }
  <span class="code-fn">search</span>(word) {
    <span class="code-keyword">let</span> node = <span class="code-keyword">this</span>.root;
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> ch <span class="code-keyword">of</span> word) {
      <span class="code-keyword">if</span> (!node.children[ch]) <span class="code-keyword">return false</span>;
      node = node.children[ch];
    }
    <span class="code-keyword">return</span> node.isEnd;
  }
}`,

  stringdp: `<span class="code-comment">// LC 1143: Longest Common Subsequence</span>
<span class="code-keyword">function</span> <span class="code-fn">longestCommonSubsequence</span>(text1, text2) {
  <span class="code-keyword">const</span> m = text1.length, n = text2.length;
  <span class="code-keyword">const</span> dp = Array.from({length: m + <span class="code-num">1</span>},
    () =&gt; <span class="code-keyword">new</span> Array(n + <span class="code-num">1</span>).fill(<span class="code-num">0</span>));

  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">1</span>; i &lt;= m; i++) {
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = <span class="code-num">1</span>; j &lt;= n; j++) {
      <span class="code-keyword">if</span> (text1[i-<span class="code-num">1</span>] === text2[j-<span class="code-num">1</span>]) {
        dp[i][j] = dp[i-<span class="code-num">1</span>][j-<span class="code-num">1</span>] + <span class="code-num">1</span>;
      } <span class="code-keyword">else</span> {
        dp[i][j] = Math.<span class="code-fn">max</span>(dp[i-<span class="code-num">1</span>][j], dp[i][j-<span class="code-num">1</span>]);
      }
    }
  }
  <span class="code-keyword">return</span> dp[m][n];
}`,

  dp1d: `<span class="code-comment">// LC 70: Climbing Stairs (1D DP)</span>
<span class="code-keyword">function</span> <span class="code-fn">climbStairs</span>(n) {
  <span class="code-keyword">if</span> (n &lt;= <span class="code-num">2</span>) <span class="code-keyword">return</span> n;
  <span class="code-keyword">let</span> dp = <span class="code-keyword">new</span> Array(n + <span class="code-num">1</span>).fill(<span class="code-num">0</span>);
  dp[<span class="code-num">1</span>] = <span class="code-num">1</span>;
  dp[<span class="code-num">2</span>] = <span class="code-num">2</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">3</span>; i &lt;= n; i++) {
    dp[i] = dp[i - <span class="code-num">1</span>] + dp[i - <span class="code-num">2</span>];
    <span class="code-comment">// dp[i] = ways climbing 1 step + ways climbing 2 steps</span>
  }
  <span class="code-keyword">return</span> dp[n];
}`,

  prefixsum: `<span class="code-comment">// LC 560: Subarray Sum Equals K (Prefix Sum)</span>
<span class="code-keyword">function</span> <span class="code-fn">subarraySum</span>(nums, k) {
  <span class="code-keyword">let</span> count = <span class="code-num">0</span>, prefix = <span class="code-num">0</span>;
  <span class="code-keyword">const</span> map = { <span class="code-str">0</span>: <span class="code-num">1</span> };
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> n <span class="code-keyword">of</span> nums) {
    prefix += n;
    <span class="code-keyword">if</span> (map[prefix - k]) count += map[prefix - k];
    map[prefix] = (map[prefix] || <span class="code-num">0</span>) + <span class="code-num">1</span>;
  }
  <span class="code-keyword">return</span> count;
}`,

  // --- Specific Problem ID Overrides ---
  1: `<span class="code-comment">// LC 1: Two Sum</span>
<span class="code-keyword">function</span> <span class="code-fn">twoSum</span>(nums, target) {
  <span class="code-keyword">const</span> map = {};
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; nums.length; i++) {
    <span class="code-keyword">const</span> comp = target - nums[i];
    <span class="code-keyword">if</span> (map[comp] !== undefined) <span class="code-keyword">return</span> [map[comp], i];
    map[nums[i]] = i;
  }
}`,

  49: `<span class="code-comment">// LC 49: Group Anagrams</span>
<span class="code-keyword">function</span> <span class="code-fn">groupAnagrams</span>(strs) {
  <span class="code-keyword">const</span> map = {};
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> s <span class="code-keyword">of</span> strs) {
    <span class="code-keyword">const</span> key = [...s].<span class="code-fn">sort</span>().<span class="code-fn">join</span>(<span class="code-str">''</span>);
    <span class="code-keyword">if</span> (!map[key]) map[key] = [];
    map[key].<span class="code-fn">push</span>(s);
  }
  <span class="code-keyword">return</span> Object.<span class="code-fn">values</span>(map);
}`,

  198: `<span class="code-comment">// LC 198: House Robber</span>
<span class="code-keyword">function</span> <span class="code-fn">rob</span>(nums) {
  <span class="code-keyword">let</span> prev2 = <span class="code-num">0</span>, prev1 = <span class="code-num">0</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> n <span class="code-keyword">of</span> nums) {
    <span class="code-keyword">const</span> curr = Math.<span class="code-fn">max</span>(prev1, prev2 + n);
    prev2 = prev1;
    prev1 = curr;
  }
  <span class="code-keyword">return</span> prev1;
}`,

  322: `<span class="code-comment">// LC 322: Coin Change</span>
<span class="code-keyword">function</span> <span class="code-fn">coinChange</span>(coins, amount) {
  <span class="code-keyword">const</span> dp = <span class="code-keyword">new</span> Array(amount + <span class="code-num">1</span>).<span class="code-fn">fill</span>(Infinity);
  dp[<span class="code-num">0</span>] = <span class="code-num">0</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">1</span>; i &lt;= amount; i++) {
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> coin <span class="code-keyword">of</span> coins) {
      <span class="code-keyword">if</span> (i &gt;= coin)
        dp[i] = Math.<span class="code-fn">min</span>(dp[i], dp[i - coin] + <span class="code-num">1</span>);
    }
  }
  <span class="code-keyword">return</span> dp[amount] === Infinity ? -<span class="code-num">1</span> : dp[amount];
}`,

  207: `<span class="code-comment">// LC 207: Course Schedule (Topological Sort)</span>
<span class="code-keyword">function</span> <span class="code-fn">canFinish</span>(numCourses, prerequisites) {
  <span class="code-keyword">const</span> graph = Array.<span class="code-fn">from</span>({length: numCourses}, () =&gt; []);
  <span class="code-keyword">const</span> inDegree = <span class="code-keyword">new</span> Array(numCourses).<span class="code-fn">fill</span>(<span class="code-num">0</span>);
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> [a, b] <span class="code-keyword">of</span> prerequisites) {
    graph[b].<span class="code-fn">push</span>(a); inDegree[a]++;
  }
  <span class="code-keyword">const</span> queue = [];
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; numCourses; i++)
    <span class="code-keyword">if</span> (inDegree[i] === <span class="code-num">0</span>) queue.<span class="code-fn">push</span>(i);
  <span class="code-keyword">let</span> count = <span class="code-num">0</span>;
  <span class="code-keyword">while</span> (queue.length) {
    <span class="code-keyword">const</span> node = queue.<span class="code-fn">shift</span>();
    count++;
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> next <span class="code-keyword">of</span> graph[node])
      <span class="code-keyword">if</span> (--inDegree[next] === <span class="code-num">0</span>) queue.<span class="code-fn">push</span>(next);
  }
  <span class="code-keyword">return</span> count === numCourses;
}`,

  547: `<span class="code-comment">// LC 547: Number of Provinces (Union-Find)</span>
<span class="code-keyword">function</span> <span class="code-fn">findCircleNum</span>(isConnected) {
  <span class="code-keyword">const</span> n = isConnected.length;
  <span class="code-keyword">const</span> parent = Array.<span class="code-fn">from</span>({length: n}, (_, i) =&gt; i);
  <span class="code-keyword">function</span> <span class="code-fn">find</span>(x) {
    <span class="code-keyword">if</span> (parent[x] !== x) parent[x] = <span class="code-fn">find</span>(parent[x]);
    <span class="code-keyword">return</span> parent[x];
  }
  <span class="code-keyword">let</span> provinces = n;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; n; i++)
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = i + <span class="code-num">1</span>; j &lt; n; j++)
      <span class="code-keyword">if</span> (isConnected[i][j] &amp;&amp; <span class="code-fn">find</span>(i) !== <span class="code-fn">find</span>(j)) {
        parent[<span class="code-fn">find</span>(i)] = <span class="code-fn">find</span>(j);
        provinces--;
      }
  <span class="code-keyword">return</span> provinces;
}`,

  300: `<span class="code-comment">// LC 300: Longest Increasing Subsequence</span>
<span class="code-keyword">function</span> <span class="code-fn">lengthOfLIS</span>(nums) {
  <span class="code-keyword">const</span> dp = <span class="code-keyword">new</span> Array(nums.length).<span class="code-fn">fill</span>(<span class="code-num">1</span>);
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">1</span>; i &lt; nums.length; i++) {
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = <span class="code-num">0</span>; j &lt; i; j++) {
      <span class="code-keyword">if</span> (nums[j] &lt; nums[i])
        dp[i] = Math.<span class="code-fn">max</span>(dp[i], dp[j] + <span class="code-num">1</span>);
    }
  }
  <span class="code-keyword">return</span> Math.<span class="code-fn">max</span>(...dp);
}`,

  72: `<span class="code-comment">// LC 72: Edit Distance</span>
<span class="code-keyword">function</span> <span class="code-fn">minDistance</span>(word1, word2) {
  <span class="code-keyword">const</span> m = word1.length, n = word2.length;
  <span class="code-keyword">const</span> dp = Array.<span class="code-fn">from</span>({length: m+<span class="code-num">1</span>}, (_, i) =&gt;
    Array.<span class="code-fn">from</span>({length: n+<span class="code-num">1</span>}, (_, j) =&gt; i || j));
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">1</span>; i &lt;= m; i++)
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = <span class="code-num">1</span>; j &lt;= n; j++)
      dp[i][j] = word1[i-<span class="code-num">1</span>] === word2[j-<span class="code-num">1</span>]
        ? dp[i-<span class="code-num">1</span>][j-<span class="code-num">1</span>]
        : Math.<span class="code-fn">min</span>(dp[i-<span class="code-num">1</span>][j], dp[i][j-<span class="code-num">1</span>], dp[i-<span class="code-num">1</span>][j-<span class="code-num">1</span>]) + <span class="code-num">1</span>;
  <span class="code-keyword">return</span> dp[m][n];
}`,

  209: `<span class="code-comment">// LC 209: Minimum Size Subarray Sum</span>
<span class="code-keyword">function</span> <span class="code-fn">minSubArrayLen</span>(target, nums) {
  <span class="code-keyword">let</span> left = <span class="code-num">0</span>, sum = <span class="code-num">0</span>, minLen = Infinity;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> right = <span class="code-num">0</span>; right &lt; nums.length; right++) {
    sum += nums[right];
    <span class="code-keyword">while</span> (sum >= target) {
      minLen = Math.<span class="code-fn">min</span>(minLen, right - left + <span class="code-num">1</span>);
      sum -= nums[left++];
    }
  }
  <span class="code-keyword">return</span> minLen === Infinity ? <span class="code-num">0</span> : minLen;
}`,

  424: `<span class="code-comment">// LC 424: Longest Repeating Character Replacement</span>
<span class="code-keyword">function</span> <span class="code-fn">characterReplacement</span>(s, k) {
  <span class="code-keyword">const</span> count = <span class="code-keyword">new</span> Array(<span class="code-num">26</span>).fill(<span class="code-num">0</span>);
  <span class="code-keyword">let</span> left = <span class="code-num">0</span>, maxFreq = <span class="code-num">0</span>, maxLen = <span class="code-num">0</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> right = <span class="code-num">0</span>; right &lt; s.length; right++) {
    maxFreq = Math.<span class="code-fn">max</span>(maxFreq, ++count[s[right].<span class="code-fn">charCodeAt</span>(<span class="code-num">0</span>) - <span class="code-str">A'</span>]);
    <span class="code-keyword">while</span> (right - left + <span class="code-num">1</span> - maxFreq > k) count[s[left++].<span class="code-fn">charCodeAt</span>(<span class="code-num">0</span>) - <span class="code-str">A'</span>]--;
    maxLen = Math.<span class="code-fn">max</span>(maxLen, right - left + <span class="code-num">1</span>);
  }
  <span class="code-keyword">return</span> maxLen;
}`,

  303: `<span class="code-comment">// LC 303: Range Sum Query - Immutable</span>
<span class="code-keyword">class</span> <span class="code-fn">NumArray</span> {
  <span class="code-fn">constructor</span>(nums) {
    <span class="code-keyword">this</span>.prefix = [<span class="code-num">0</span>];
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> n <span class="code-keyword">of</span> nums)
      <span class="code-keyword">this</span>.prefix.<span class="code-fn">push</span>(<span class="code-keyword">this</span>.prefix[<span class="code-keyword">this</span>.prefix.length - <span class="code-num">1</span>] + n);
  }
  <span class="code-fn">sumRange</span>(left, right) {
    <span class="code-keyword">return</span> <span class="code-keyword">this</span>.prefix[right + <span class="code-num">1</span>] - <span class="code-keyword">this</span>.prefix[left];
  }
}`,

  19: `<span class="code-comment">// LC 19: Remove Nth Node From End of List</span>
<span class="code-keyword">function</span> <span class="code-fn">removeNthFromEnd</span>(head, n) {
  <span class="code-keyword">let</span> dummy = { next: head }, slow = dummy, fast = dummy;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i <= n; i++) fast = fast.next;
  <span class="code-keyword">while</span> (fast) { slow = slow.next; fast = fast.next; }
  slow.next = slow.next.next;
  <span class="code-keyword">return</span> dummy.next;
}`,

  160: `<span class="code-comment">// LC 160: Intersection of Two Linked Lists</span>
<span class="code-keyword">function</span> <span class="code-fn">getIntersectionNode</span>(headA, headB) {
  <span class="code-keyword">let</span> a = headA, b = headB;
  <span class="code-keyword">while</span> (a !== b) {
    a = a === <span class="code-keyword">null</span> ? headB : a.next;
    b = b === <span class="code-keyword">null</span> ? headA : b.next;
  }
  <span class="code-keyword">return</span> a;
}`,

  75: `<span class="code-comment">// LC 75: Sort Colors</span>
<span class="code-keyword">function</span> <span class="code-fn">sortColors</span>(nums) {
  <span class="code-keyword">let</span> low = <span class="code-num">0</span>, mid = <span class="code-num">0</span>, high = nums.length - <span class="code-num">1</span>;
  <span class="code-keyword">while</span> (mid <= high) {
    <span class="code-keyword">if</span> (nums[mid] === <span class="code-num">0</span>) [nums[low++], nums[mid++]] = [nums[mid], nums[low]];
    <span class="code-keyword">else if</span> (nums[mid] === <span class="code-num">2</span>) [nums[mid], nums[high--]] = [nums[high], nums[mid]];
    <span class="code-keyword">else</span> mid++;
  }
}`,

  380: `<span class="code-comment">// LC 380: Insert Delete GetRandom O(1)</span>
<span class="code-keyword">class</span> <span class="code-fn">RandomizedSet</span> {
  <span class="code-fn">constructor</span>() {
    <span class="code-keyword">this</span>.map = <span class="code-keyword">new</span> Map();
    <span class="code-keyword">this</span>.arr = [];
  }
  <span class="code-fn">insert</span>(val) {
    <span class="code-keyword">if</span> (<span class="code-keyword">this</span>.map.has(val)) <span class="code-keyword">return false</span>;
    <span class="code-keyword">this</span>.map.set(val, <span class="code-keyword">this</span>.arr.length);
    <span class="code-keyword">this</span>.arr.push(val);
    <span class="code-keyword">return true</span>;
  }
  <span class="code-fn">remove</span>(val) {
    <span class="code-keyword">if</span> (!<span class="code-keyword">this</span>.map.has(val)) <span class="code-keyword">return false</span>;
    <span class="code-keyword">const</span> idx = <span class="code-keyword">this</span>.map.get(val);
    <span class="code-keyword">const</span> last = <span class="code-keyword">this</span>.arr.pop();
    <span class="code-keyword">if</span> (idx < <span class="code-keyword">this</span>.arr.length) {
      <span class="code-keyword">this</span>.arr[idx] = last;
      <span class="code-keyword">this</span>.map.set(last, idx);
    }
    <span class="code-keyword">this</span>.map.delete(val);
    <span class="code-keyword">return true</span>;
  }
  <span class="code-fn">getRandom</span>() {
    <span class="code-keyword">return</span> <span class="code-keyword">this</span>.arr[Math.<span class="code-fn">floor</span>(Math.<span class="code-fn">random</span>() * <span class="code-keyword">this</span>.arr.length)];
  }
}`,

  705: `<span class="code-comment">// LC 705: Design HashSet</span>
<span class="code-keyword">class</span> <span class="code-fn">MyHashSet</span> {
  <span class="code-fn">constructor</span>() {
    <span class="code-keyword">this</span>.data = <span class="code-keyword">new</span> Array(<span class="code-num">769</span>).fill(<span class="code-keyword">null</span>);
  }
  <span class="code-fn">add</span>(key) {
    <span class="code-keyword">const</span> idx = key % <span class="code-num">769</span>;
    <span class="code-keyword">if</span> (!<span class="code-keyword">this</span>.data[idx]) <span class="code-keyword">this</span>.data[idx] = [];
    <span class="code-keyword">if</span> (!<span class="code-keyword">this</span>.data[idx].includes(key)) <span class="code-keyword">this</span>.data[idx].push(key);
  }
  <span class="code-fn">remove</span>(key) {
    <span class="code-keyword">const</span> idx = key % <span class="code-num">769</span>, bucket = <span class="code-keyword">this</span>.data[idx];
    <span class="code-keyword">if</span> (bucket) {
      <span class="code-keyword">const</span> i = bucket.indexOf(key);
      <span class="code-keyword">if</span> (i >= <span class="code-num">0</span>) bucket.splice(i, <span class="code-num">1</span>);
    }
  }
  <span class="code-fn">contains</span>(key) {
    <span class="code-keyword">const</span> idx = key % <span class="code-num">769</span>, bucket = <span class="code-keyword">this</span>.data[idx];
    <span class="code-keyword">return</span> bucket ? bucket.includes(key) : <span class="code-keyword">false</span>;
  }
}`,

  706: `<span class="code-comment">// LC 706: Design HashMap</span>
<span class="code-keyword">class</span> <span class="code-fn">MyHashMap</span> {
  <span class="code-fn">constructor</span>() {
    <span class="code-keyword">this</span>.data = <span class="code-keyword">new</span> Array(<span class="code-num">769</span>).fill(<span class="code-keyword">null</span>);
  }
  <span class="code-fn">put</span>(key, value) {
    <span class="code-keyword">const</span> idx = key % <span class="code-num">769</span>;
    <span class="code-keyword">if</span> (!<span class="code-keyword">this</span>.data[idx]) <span class="code-keyword">this</span>.data[idx] = [];
    <span class="code-keyword">const</span> bucket = <span class="code-keyword">this</span>.data[idx];
    <span class="code-keyword">const</span> exist = bucket.find(([k]) => k === key);
    <span class="code-keyword">if</span> (exist) exist[<span class="code-num">1</span>] = value; <span class="code-keyword">else</span> bucket.push([key, value]);
  }
  <span class="code-fn">get</span>(key) {
    <span class="code-keyword">const</span> idx = key % <span class="code-num">769</span>, bucket = <span class="code-keyword">this</span>.data[idx];
    <span class="code-keyword">const</span> pair = bucket?.find(([k]) => k === key);
    <span class="code-keyword">return</span> pair ? pair[<span class="code-num">1</span>] : -<span class="code-num">1</span>;
  }
  <span class="code-fn">remove</span>(key) {
    <span class="code-keyword">const</span> idx = key % <span class="code-num">769</span>, bucket = <span class="code-keyword">this</span>.data[idx];
    <span class="code-keyword">if</span> (bucket) {
      <span class="code-keyword">const</span> i = bucket.findIndex(([k]) => k === key);
      <span class="code-keyword">if</span> (i >= <span class="code-num">0</span>) bucket.splice(i, <span class="code-num">1</span>);
    }
  }
}`,

  729: `<span class="code-comment">// LC 729: My Calendar I</span>
<span class="code-keyword">class</span> <span class="code-fn">MyCalendar</span> {
  <span class="code-fn">constructor</span>() {
    <span class="code-keyword">this</span>.events = [];
  }
  <span class="code-fn">book</span>(start, end) {
    <span class="code-keyword">for</span> (<span class="code-keyword">const</span> [s, e] <span class="code-keyword">of</span> <span class="code-keyword">this</span>.events) {
      <span class="code-keyword">if</span> (start < e && end > s) <span class="code-keyword">return false</span>;
    }
    <span class="code-keyword">this</span>.events.push([start, end]);
    <span class="code-keyword">return true</span>;
  }
}`,

  686: `<span class="code-comment">// LC 686: Repeated String Match</span>
<span class="code-keyword">function</span> <span class="code-fn">repeatedStringMatch</span>(a, b) {
  <span class="code-keyword">let</span> s = a, count = <span class="code-num">1</span>;
  <span class="code-keyword">while</span> (s.length < b.length) {
    s += a; count++;
  }
  <span class="code-keyword">if</span> (s.includes(b)) <span class="code-keyword">return</span> count;
  s += a; count++;
  <span class="code-keyword">if</span> (s.includes(b)) <span class="code-keyword">return</span> count;
  <span class="code-keyword">return</span> -<span class="code-num">1</span>;
}`
};

codeTemplates['twoSumII'] = codeTemplates[167];
codeTemplates['cycleII'] = codeTemplates[142];
codeTemplates['largestRectangle'] = codeTemplates[84];
codeTemplates['backtracking'] = `<span class="code-comment">// Backtracking: N-Queens placement</span>
<span class="code-keyword">function</span> <span class="code-fn">solve</span>(row) {
  <span class="code-keyword">if</span> (row === n) <span class="code-keyword">return true</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> col = <span class="code-num">0</span>; col &lt; n; col++) {
    <span class="code-keyword">if</span> (<span class="code-fn">isSafe</span>(row, col)) {
      board[row][col] = <span class="code-str">'Q'</span>;
      <span class="code-keyword">if</span> (<span class="code-fn">solve</span>(row + <span class="code-num">1</span>)) <span class="code-keyword">return true</span>;
      board[row][col] = <span class="code-str">'.'</span>;
    }
  }
  <span class="code-keyword">return false</span>;
}`;
codeTemplates['unionfind'] = `<span class="code-comment">// Union-Find: merge connected components</span>
<span class="code-keyword">function</span> <span class="code-fn">find</span>(x) {
  <span class="code-keyword">if</span> (parent[x] !== x) parent[x] = <span class="code-fn">find</span>(parent[x]);
  <span class="code-keyword">return</span> parent[x];
}
<span class="code-keyword">function</span> <span class="code-fn">union</span>(a, b) {
  <span class="code-keyword">const</span> ra = <span class="code-fn">find</span>(a), rb = <span class="code-fn">find</span>(b);
  <span class="code-keyword">if</span> (ra !== rb) parent[rb] = ra;
}`;
codeTemplates['segmenttree'] = `<span class="code-comment">// Segment Tree: answer range sum queries</span>
<span class="code-keyword">function</span> <span class="code-fn">query</span>(node, l, r, ql, qr) {
  <span class="code-keyword">if</span> (qr &lt; l || r &lt; ql) <span class="code-keyword">return</span> <span class="code-num">0</span>;
  <span class="code-keyword">if</span> (ql &lt;= l &amp;&amp; r &lt;= qr) <span class="code-keyword">return</span> tree[node];
  <span class="code-keyword">const</span> mid = Math.<span class="code-fn">floor</span>((l + r) / <span class="code-num">2</span>);
  <span class="code-keyword">return</span> <span class="code-fn">query</span>(node*<span class="code-num">2</span>, l, mid, ql, qr)
       + <span class="code-fn">query</span>(node*<span class="code-num">2</span>+<span class="code-num">1</span>, mid+<span class="code-num">1</span>, r, ql, qr);
}`;

codeTemplates['avl'] = `<span class="code-comment">// AVL Tree: balance BST using rotations</span>
<span class="code-keyword">function</span> <span class="code-fn">rotateLeft</span>(x) {
  <span class="code-keyword">const</span> y = x.right;
  x.right = y.left;
  y.left = x;
  updateHeight(x); updateHeight(y);
  <span class="code-keyword">return</span> y;
}`;
codeTemplates['huffman'] = `<span class="code-comment">// Huffman Coding: build prefix tree</span>
<span class="code-keyword">while</span> (pq.size() &gt; <span class="code-num">1</span>) {
  <span class="code-keyword">const</span> left = pq.<span class="code-fn">poll</span>(), right = pq.<span class="code-fn">poll</span>();
  <span class="code-keyword">const</span> parent = <span class="code-keyword">new</span> <span class="code-fn">Node</span>(left.freq + right.freq);
  parent.left = left; parent.right = right;
  pq.<span class="code-fn">offer</span>(parent);
}`;

codeTemplates['greedy'] = `<span class="code-comment">// Greedy: choose maximum non-overlapping intervals</span>
intervals.<span class="code-fn">sort</span>((a, b) =&gt; a.end - b.end);
<span class="code-keyword">let</span> lastEnd = -Infinity, chosen = [];
<span class="code-keyword">for</span> (<span class="code-keyword">let</span> interval <span class="code-keyword">of</span> intervals) {
  <span class="code-keyword">if</span> (interval.start &gt;= lastEnd) {
    chosen.<span class="code-fn">push</span>(interval);
    lastEnd = interval.end;
  }
}`;
codeTemplates['editdistance'] = `<span class="code-comment">// Edit Distance: insert, delete, replace</span>
<span class="code-keyword">function</span> <span class="code-fn">minDistance</span>(a, b) {
  <span class="code-keyword">const</span> dp = Array.from({length: a.length + <span class="code-num">1</span>},
    (_, i) =&gt; Array.from({length: b.length + <span class="code-num">1</span>}, (_, j) =&gt; i || j));
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">1</span>; i &lt;= a.length; i++)
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = <span class="code-num">1</span>; j &lt;= b.length; j++)
      dp[i][j] = a[i-<span class="code-num">1</span>] === b[j-<span class="code-num">1</span>] ? dp[i-<span class="code-num">1</span>][j-<span class="code-num">1</span>]
        : <span class="code-num">1</span> + Math.<span class="code-fn">min</span>(dp[i-<span class="code-num">1</span>][j], dp[i][j-<span class="code-num">1</span>], dp[i-<span class="code-num">1</span>][j-<span class="code-num">1</span>]);
  <span class="code-keyword">return</span> dp[a.length][b.length];
}`;
codeTemplates['heap'] = `<span class="code-comment">// Min-Heap insert / extract</span>
<span class="code-keyword">function</span> <span class="code-fn">push</span>(x) { heap.push(x); <span class="code-fn">siftUp</span>(heap.length - <span class="code-num">1</span>); }
<span class="code-keyword">function</span> <span class="code-fn">pop</span>() {
  [heap[<span class="code-num">0</span>], heap[heap.length - <span class="code-num">1</span>]] = [heap[heap.length - <span class="code-num">1</span>], heap[<span class="code-num">0</span>]];
  <span class="code-keyword">const</span> ans = heap.pop();
  <span class="code-fn">siftDown</span>(<span class="code-num">0</span>);
  <span class="code-keyword">return</span> ans;
}`;
codeTemplates['dijkstra'] = `<span class="code-comment">// Dijkstra with min-priority queue</span>
dist[src] = <span class="code-num">0</span>;
pq.<span class="code-fn">push</span>([<span class="code-num">0</span>, src]);
<span class="code-keyword">while</span> (pq.length) {
  <span class="code-keyword">const</span> [d, u] = pq.<span class="code-fn">popMin</span>();
  <span class="code-keyword">if</span> (visited[u]) <span class="code-keyword">continue</span>;
  visited[u] = <span class="code-keyword">true</span>;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> [v, w] <span class="code-keyword">of</span> graph[u])
    <span class="code-keyword">if</span> (d + w &lt; dist[v]) dist[v] = d + w;
}`;
codeTemplates['toposort'] = `<span class="code-comment">// Kahn's Topological Sort</span>
<span class="code-keyword">const</span> queue = nodes.<span class="code-fn">filter</span>(n =&gt; indegree[n] === <span class="code-num">0</span>);
<span class="code-keyword">while</span> (queue.length) {
  <span class="code-keyword">const</span> u = queue.<span class="code-fn">shift</span>();
  order.<span class="code-fn">push</span>(u);
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> v <span class="code-keyword">of</span> graph[u])
    <span class="code-keyword">if</span> (--indegree[v] === <span class="code-num">0</span>) queue.<span class="code-fn">push</span>(v);
}`;
codeTemplates['knapsack'] = `<span class="code-comment">// 0/1 Knapsack DP</span>
<span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">1</span>; i &lt;= n; i++)
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> cap = <span class="code-num">0</span>; cap &lt;= W; cap++)
    dp[i][cap] = weight[i] &gt; cap
      ? dp[i-<span class="code-num">1</span>][cap]
      : Math.<span class="code-fn">max</span>(dp[i-<span class="code-num">1</span>][cap], value[i] + dp[i-<span class="code-num">1</span>][cap-weight[i]]);`;
codeTemplates['kmp'] = `<span class="code-comment">// KMP: build LPS, then scan text</span>
<span class="code-keyword">while</span> (i &lt; text.length) {
  <span class="code-keyword">if</span> (text[i] === pattern[j]) { i++; j++; }
  <span class="code-keyword">if</span> (j === pattern.length) <span class="code-keyword">return</span> i - j;
  <span class="code-keyword">else if</span> (i &lt; text.length &amp;&amp; text[i] !== pattern[j])
    j = j ? lps[j - <span class="code-num">1</span>] : <span class="code-num">0</span>;
}`;
codeTemplates['fenwick'] = `<span class="code-comment">// Fenwick Tree lowbit jumps</span>
<span class="code-keyword">function</span> <span class="code-fn">add</span>(i, delta) {
  <span class="code-keyword">for</span> (; i &lt;= n; i += i &amp; -i) bit[i] += delta;
}
<span class="code-keyword">function</span> <span class="code-fn">sum</span>(i) {
  <span class="code-keyword">let</span> s = <span class="code-num">0</span>;
  <span class="code-keyword">for</span> (; i &gt; <span class="code-num">0</span>; i -= i &amp; -i) s += bit[i];
  <span class="code-keyword">return</span> s;
}`;
codeTemplates['bellmanford'] = `<span class="code-comment">// Bellman-Ford edge relaxation</span>
dist[src] = <span class="code-num">0</span>;
<span class="code-keyword">for</span> (<span class="code-keyword">let</span> pass = <span class="code-num">1</span>; pass &lt; n; pass++)
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> [u, v, w] <span class="code-keyword">of</span> edges)
    <span class="code-keyword">if</span> (dist[u] + w &lt; dist[v]) dist[v] = dist[u] + w;`;
codeTemplates['floydwarshall'] = `<span class="code-comment">// Floyd-Warshall all-pairs shortest paths</span>
<span class="code-keyword">for</span> (<span class="code-keyword">let</span> k = <span class="code-num">0</span>; k &lt; n; k++)
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> i = <span class="code-num">0</span>; i &lt; n; i++)
    <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = <span class="code-num">0</span>; j &lt; n; j++)
      dist[i][j] = Math.<span class="code-fn">min</span>(dist[i][j], dist[i][k] + dist[k][j]);`;
codeTemplates['quicksort'] = `<span class="code-comment">// Quick Sort partition around pivot</span>
<span class="code-keyword">function</span> <span class="code-fn">partition</span>(a, lo, hi) {
  <span class="code-keyword">let</span> pivot = a[hi], i = lo;
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> j = lo; j &lt; hi; j++)
    <span class="code-keyword">if</span> (a[j] &lt;= pivot) [a[i++], a[j]] = [a[j], a[i]];
  [a[i], a[hi]] = [a[hi], a[i]];
  <span class="code-keyword">return</span> i;
}`;
codeTemplates['bfsgrid'] = `<span class="code-comment">// BFS grid shortest path</span>
queue = [[sr, sc]];
dist[sr][sc] = <span class="code-num">0</span>;
<span class="code-keyword">while</span> (queue.length) {
  <span class="code-keyword">const</span> [r, c] = queue.<span class="code-fn">shift</span>();
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> [dr, dc] <span class="code-keyword">of</span> dirs)
    <span class="code-keyword">if</span> (<span class="code-fn">valid</span>(r+dr, c+dc)) queue.<span class="code-fn">push</span>([r+dr, c+dc]);
}`;
codeTemplates['lrucache'] = `<span class="code-comment">// LRU Cache: map + recency list</span>
<span class="code-keyword">function</span> <span class="code-fn">get</span>(key) {
  <span class="code-keyword">if</span> (!map.has(key)) <span class="code-keyword">return</span> -<span class="code-num">1</span>;
  <span class="code-fn">moveToFront</span>(key);
  <span class="code-keyword">return</span> map.get(key);
}`;
codeTemplates['slidingmax'] = `<span class="code-comment">// Sliding Window Maximum with deque</span>
<span class="code-keyword">for</span> (<span class="code-keyword">let</span> r = <span class="code-num">0</span>; r &lt; nums.length; r++) {
  <span class="code-keyword">while</span> (dq.length &amp;&amp; nums[dq.at(-<span class="code-num">1</span>)] &lt;= nums[r]) dq.<span class="code-fn">pop</span>();
  dq.<span class="code-fn">push</span>(r);
  <span class="code-keyword">if</span> (dq[<span class="code-num">0</span>] &lt;= r-k) dq.<span class="code-fn">shift</span>();
}`;
codeTemplates['coinchange'] = `<span class="code-comment">// Coin Change minimum coins</span>
dp[<span class="code-num">0</span>] = <span class="code-num">0</span>;
<span class="code-keyword">for</span> (<span class="code-keyword">let</span> amount = <span class="code-num">1</span>; amount &lt;= target; amount++)
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> coin <span class="code-keyword">of</span> coins)
    <span class="code-keyword">if</span> (amount &gt;= coin) dp[amount] = Math.<span class="code-fn">min</span>(dp[amount], dp[amount-coin] + <span class="code-num">1</span>);`;
codeTemplates['kruskal'] = `<span class="code-comment">// Kruskal MST</span>
edges.<span class="code-fn">sort</span>((a,b) =&gt; a.w - b.w);
<span class="code-keyword">for</span> (<span class="code-keyword">let</span> e <span class="code-keyword">of</span> edges)
  <span class="code-keyword">if</span> (<span class="code-fn">find</span>(e.u) !== <span class="code-fn">find</span>(e.v)) {
    <span class="code-fn">union</span>(e.u, e.v);
    mst.<span class="code-fn">push</span>(e);
  }`;
codeTemplates['medianfinder'] = `<span class="code-comment">// Median Finder with two heaps</span>
small.<span class="code-fn">push</span>(num); <span class="code-comment">// max heap</span>
large.<span class="code-fn">push</span>(small.<span class="code-fn">pop</span>());
<span class="code-keyword">if</span> (large.length &gt; small.length) small.<span class="code-fn">push</span>(large.<span class="code-fn">pop</span>());
median = small.length &gt; large.length ? small.top() : (small.top()+large.top())/<span class="code-num">2</span>;`;
codeTemplates['sudoku'] = `<span class="code-comment">// Sudoku backtracking</span>
<span class="code-keyword">if</span> (cell is empty)
  <span class="code-keyword">for</span> digit <span class="code-num">1</span>..<span class="code-num">9</span>:
    <span class="code-keyword">if</span> (<span class="code-fn">valid</span>(digit)) {
      board[r][c] = digit;
      <span class="code-keyword">if</span> (<span class="code-fn">solve</span>(next)) <span class="code-keyword">return true</span>;
      board[r][c] = <span class="code-str">'.'</span>;
    }`;

const visualizerState = {
  algo: 'bubble',
  isPlaying: false,
  timer: null,
  speed: 800,
  steps: [],
  currentStepIndex: 0,
  rawArray: []
};

function loadSelectedAlgorithm() {
  const algo = document.getElementById('algo-select').value;
  visualizerState.algo = algo;
  
  // Only set code template if one exists for this algo key
  if (codeTemplates[algo]) {
    document.getElementById('code-snippet-box').innerHTML = codeTemplates[algo];
  }
  document.getElementById('editor-language').textContent = 'javascript';
  
  // Hide the problem banner when switching manually via dropdown
  const banner = document.getElementById('problem-info-banner');
  if (banner) banner.style.display = 'none';
  const logicPanel = document.getElementById('problem-logic-panel');
  if (logicPanel) logicPanel.style.display = 'none';
  
  resetVisualizer();
}

function updateVisualizerSpeed() {
  const slider = document.getElementById('speed-slider');
  visualizerState.speed = parseInt(slider.value);
  document.getElementById('speed-label').textContent = `${visualizerState.speed}ms`;
  
  if (visualizerState.isPlaying) {
    pauseVisualizer();
    playVisualizer();
  }
}

function appendLog(text, type = 'info') {
  const panel = document.getElementById('log-panel');
  const entry = document.createElement('div');
  entry.className = `log-entry ${type}`;
  entry.textContent = text;
  panel.appendChild(entry);
  panel.scrollTop = panel.scrollHeight;
}

function clearLogs() {
  document.getElementById('log-panel').innerHTML = '';
}

// ==========================================================================
// PLAYGROUND INITIALIZATION SEED VALUES
// ==========================================================================

function resetVisualizer() {
  pauseVisualizer();
  clearLogs();
  
  visualizerState.steps = [];
  visualizerState.currentStepIndex = 0;
  
  if (visualizerState.algo === 'bubble') {
    const id = visualizerState.currentProbId || 0;
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(((id * 7 + i * 13 + 10) % 45) + 10);
    }
    visualizerState.rawArray = [...arr];
    appendLog("[INFO] Generated deterministic array for Bubble Sort.", "info");
    generateBubbleSortSteps(arr);
  } 
  else if (visualizerState.algo === 'binary') {
    const id = visualizerState.currentProbId;
    let arr, target;
    if (id === 704) { arr = [-1, 0, 3, 5, 9, 12]; target = 9; }
    else if (id === 35) { arr = [1, 3, 5, 6]; target = 5; }
    else if (id === 33 || id === 153) { arr = [4, 5, 6, 7, 0, 1, 2]; target = 0; }
    else if (id === 162) { arr = [1, 2, 3, 1]; target = 2; }
    else { arr = [3, 8, 12, 17, 24, 38, 45, 52, 60, 77]; target = 45; }
    visualizerState.rawArray = [...arr];
    appendLog("[INFO] Initialized sorted array for Binary Search.", "info");
    generateBinarySearchSteps(arr, target);
  } 
  else if (visualizerState.algo === 'window') {
    const id = visualizerState.currentProbId;
    const str = id === 3 ? "abcabcbb" : id === 567 ? "eidbaooo" : "abcabcb";
    visualizerState.rawArray = str.split("");
    appendLog("[INFO] Loading Sliding Window test string: \"" + str + "\"", "info");
    generateSlidingWindowSteps(str);
  } 
  else if (visualizerState.algo === 'pointer') {
    const id = visualizerState.currentProbId;
    const heights = id === 11 ? [1, 8, 6, 2, 5, 4, 8, 3, 7] : [1, 8, 6, 2, 5, 4, 8, 3, 7];
    visualizerState.rawArray = [...heights];
    appendLog("[INFO] Loading Two Pointers heights array.", "info");
    generateTwoPointersSteps(heights);
  } 
  else if (visualizerState.algo === 'twoSumII') {
    const arr = [2, 7, 11, 15];
    visualizerState.rawArray = [...arr];
    appendLog("[INFO] Loading Two Sum II sorted array: [" + arr.join(", ") + "], Target = 9", "info");
    generateTwoSumIISteps(arr, 9);
  }
  else if (visualizerState.algo === 'cycle') {
    visualizerState.rawArray = [10, 20, 30, 40, 50, 60];
    appendLog("[INFO] Initializing Linked List containing a cycle: 5 -> 2", "info");
    generateLinkedListCycleSteps();
  } 
  else if (visualizerState.algo === 'cycleII') {
    visualizerState.rawArray = [10, 20, 30, 40, 50, 60];
    appendLog("[INFO] Loading Linked List for Cycle II detection.", "info");
    generateLinkedListCycleIISteps();
  }
  else if (visualizerState.algo === 'stack') {
    const temps = [73, 74, 75, 71, 69, 72, 76];
    visualizerState.rawArray = [...temps];
    appendLog("[INFO] Loading Monotonic Stack daily temperatures array.", "info");
    generateMonotonicStackSteps(temps);
  }
  else if (visualizerState.algo === 'largestRectangle') {
    const heights = [2, 1, 5, 6, 2, 3];
    visualizerState.rawArray = [...heights];
    appendLog("[INFO] Loading Histogram data: [" + heights.join(", ") + "]", "info");
    generateLargestRectangleSteps(heights);
  }
  else if (visualizerState.algo === 'tree') {
    const id = visualizerState.currentProbId;
    visualizerState.rawArray = id === 104 ? [3, 9, 20, null, null, 15, 7] : [4, 2, 6, 1, 3, 5, 7];
    appendLog("[INFO] Initialized Binary Tree Nodes. Running DFS search...", "info");
    generateTreeSteps(visualizerState.rawArray);
  }
  else if (visualizerState.algo === 'graph') {
    visualizerState.rawArray = [1, 2, 3, 4, 5];
    appendLog("[INFO] Initialized Graph Network. Running DFS path traversal...", "info");
    generateGraphSteps();
  }
  else if (visualizerState.algo === 'matrix') {
    visualizerState.rawArray = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ];
    appendLog("[INFO] Initialized 3x3 Grid Matrix. Computing unique paths...", "info");
    generateMatrixSteps();
  }
  else if (visualizerState.algo === 'intervals') {
    const id = visualizerState.currentProbId;
    visualizerState.rawArray = id === 56 ? [[1, 3], [2, 6], [8, 10], [15, 18]] : id === 435 ? [[1, 2], [2, 3], [3, 4], [1, 3]] : [[1, 3], [2, 5], [6, 8], [7, 10]];
    appendLog("[INFO] Loaded schedule interval sets. Scanning overlaps...", "info");
    generateIntervalsSteps(visualizerState.rawArray);
  }
  else if (visualizerState.algo === 'hash') {
    const id = visualizerState.currentProbId;
    const words = id === 1 ? ["2", "7", "11", "15"] : id === 49 ? ["eat", "tea", "tan", "ate", "nat", "bat"] : ["apple", "banana", "apple", "cherry", "banana"];
    visualizerState.rawArray = [...words];
    appendLog("[INFO] Loaded string arrays. Resolving frequency hashing...", "info");
    generateHashSteps(visualizerState.rawArray);
  }
  else if (visualizerState.algo === 'bits') {
    visualizerState.rawArray = [1, 0, 1, 1, 0, 1, 0, 0];
    appendLog("[INFO] Loaded 8-bit registers. Running bit shifts...", "info");
    generateBitSteps(visualizerState.rawArray);
  }
  else if (visualizerState.algo === 'trie') {
    visualizerState.rawArray = ['apple', 'app', 'apt', 'ball'];
    appendLog("[INFO] Loaded Trie words: ['apple', 'app', 'apt', 'ball']. Inserting char-by-char...", "info");
    generateTrieSteps(visualizerState.rawArray);
  }
  else if (visualizerState.algo === 'stringdp') {
    visualizerState.rawArray = { s1: 'ABCBDAB', s2: 'BDCABA' };
    appendLog('[INFO] LCS Matrix: "ABCBDAB" vs "BDCABA". Filling DP table cell-by-cell...', "info");
    generateStringDPSteps('ABCBDAB', 'BDCABA');
  }
  else if (visualizerState.algo === 'dp1d') {
    const n = 7;
    visualizerState.rawArray = new Array(n + 1).fill(0);
    appendLog(`[INFO] 1D DP: Climbing Stairs (n=${n}). Building dp[] array bottom-up...`, "info");
    generateDP1DSteps(n);
  }
  else if (visualizerState.algo === 'prefixsum') {
    const id = visualizerState.currentProbId;
    let nums, k;
    if (id === 560) { nums = [1, 1, 1]; k = 2; }
    else if (id === 930) { nums = [1, 0, 1, 0, 1]; k = 2; }
    else if (id === 974) { nums = [4, 5, 0, -2, -3, 1]; k = 5; }
    else if (id === 523) { nums = [23, 2, 4, 6, 7]; k = 6; }
    else { nums = [1, 2, 3, -1, 2, 1, 3]; k = 3; }
    visualizerState.rawArray = [...nums];
    appendLog(`[INFO] Prefix Sum: Subarray Sum Equals K=${k}. Array: [${nums.join(', ')}]`, "info");
    generatePrefixSumSteps(nums, k);
  }
  else if (visualizerState.algo === 'backtracking') {
    visualizerState.rawArray = { n: 4 };
    appendLog("[INFO] Backtracking: solving a 4x4 N-Queens board.", "info");
    generateBacktrackingSteps(4);
  }
  else if (visualizerState.algo === 'unionfind') {
    const edges = [[0, 1], [2, 3], [1, 2], [4, 5], [3, 5]];
    visualizerState.rawArray = { nodes: 6, edges };
    appendLog("[INFO] Union-Find: merging components across edges.", "info");
    generateUnionFindSteps(6, edges);
  }
  else if (visualizerState.algo === 'segmenttree') {
    const nums = [2, 1, 5, 3, 4, 7];
    visualizerState.rawArray = [...nums];
    appendLog("[INFO] Segment Tree: building tree and querying range [1, 4].", "info");
    generateSegmentTreeSteps(nums, 1, 4);
  }
  else if (visualizerState.algo === 'greedy') {
    const id = visualizerState.currentProbId;
    let intervals;
    if (id === 45) intervals = [[2,3],[1,4],[1,2],[2,2],[3,1]];
    else if (id === 55) intervals = [[3,2],[1,4],[0,1],[2,2],[3,1]];
    else if (id === 406) intervals = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
    else if (id === 621) intervals = [[1,2],[2,3],[3,1],[4,1],[5,1]];
    else if (id === 763) intervals = [[0,8],[1,4],[4,7],[5,6],[6,7]];
    else if (id === 134) intervals = [[1,3],[2,4],[3,2],[4,1],[5,2]];
    else intervals = [[1, 3], [2, 4], [3, 5], [0, 6], [5, 7], [8, 9]];
    visualizerState.rawArray = intervals.map(([start, end]) => ({ start, end }));
    appendLog(`[INFO] Greedy: selecting non-overlapping intervals for problem #${id}.`, "info");
    generateGreedySteps(visualizerState.rawArray);
  }
  else if (visualizerState.algo === 'editdistance') {
    visualizerState.rawArray = { s1: 'horse', s2: 'ros' };
    appendLog('[INFO] Edit Distance DP: transforming "horse" into "ros".', "info");
    generateEditDistanceSteps('horse', 'ros');
  }
  else if (visualizerState.algo === 'heap') {
    const nums = [7, 3, 9, 1, 5, 2];
    visualizerState.rawArray = [...nums];
    appendLog("[INFO] Heap: inserting values, then extracting the min.", "info");
    generateHeapSteps(nums);
  }
  else if (visualizerState.algo === 'dijkstra') {
    visualizerState.rawArray = { nodes: 5 };
    appendLog("[INFO] Dijkstra: relaxing shortest paths from source A.", "info");
    generateDijkstraSteps();
  }
  else if (visualizerState.algo === 'toposort') {
    visualizerState.rawArray = { nodes: 6 };
    appendLog("[INFO] Topological Sort: processing zero in-degree courses.", "info");
    generateTopoSortSteps();
  }
  else if (visualizerState.algo === 'knapsack') {
    appendLog("[INFO] 0/1 Knapsack: filling include/exclude DP table.", "info");
    generateKnapsackSteps([2, 3, 4], [4, 5, 7], 6);
  }
  else if (visualizerState.algo === 'kmp') {
    appendLog('[INFO] KMP: building LPS for "ababaca", then scanning text.', "info");
    generateKMPSteps('bacbababadababaca', 'ababaca');
  }
  else if (visualizerState.algo === 'fenwick') {
    const nums = [3, 2, -1, 6, 5, 4];
    visualizerState.rawArray = [...nums];
    appendLog("[INFO] Fenwick Tree: applying lowbit update jumps and prefix query.", "info");
    generateFenwickSteps(nums);
  }
  else if (visualizerState.algo === 'bellmanford') {
    appendLog("[INFO] Bellman-Ford: repeated edge relaxation across passes.", "info");
    generateBellmanFordSteps();
  }
  else if (visualizerState.algo === 'floydwarshall') {
    appendLog("[INFO] Floyd-Warshall: all-pairs matrix updates through intermediate nodes.", "info");
    generateFloydWarshallSteps();
  }
  else if (visualizerState.algo === 'quicksort') {
    const nums = [9, 3, 7, 1, 8, 2, 5];
    visualizerState.rawArray = [...nums];
    appendLog("[INFO] Quick Sort: partitioning around the last element as pivot.", "info");
    generateQuickSortSteps(nums);
  }
  else if (visualizerState.algo === 'quicksortfull') {
    visualizerState.rawArray = [4, 2, 1, 3];
    appendLog("[INFO] Initialized full Recursive Quick Sort.", "info");
    generateQuickSortFullSteps();
  }
  else if (visualizerState.algo === 'mergesort') {
    visualizerState.rawArray = [4, 2, 1, 3];
    appendLog("[INFO] Initialized Recursive Merge Sort.", "info");
    generateMergeSortSteps();
  }
  else if (visualizerState.algo === 'insertionsort') {
    visualizerState.rawArray = [5, 2, 4, 6, 1, 3];
    appendLog("[INFO] Initialized Insertion Sort.", "info");
    generateInsertionSortSteps();
  }
  else if (visualizerState.algo === 'bfsgrid') {
    appendLog("[INFO] BFS Grid: expanding shortest path layers around obstacles.", "info");
    generateBFSGridSteps();
  }
  else if (visualizerState.algo === 'lrucache') {
    appendLog("[INFO] LRU Cache: moving accessed keys to most-recent position.", "info");
    generateLRUCacheSteps();
  }
  else if (visualizerState.algo === 'slidingmax') {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7];
    visualizerState.rawArray = [...nums];
    appendLog("[INFO] Sliding Window Maximum: maintaining a decreasing deque.", "info");
    generateSlidingMaxSteps(nums, 3);
  }
  else if (visualizerState.algo === 'coinchange') {
    appendLog("[INFO] Coin Change: filling minimum coins for each amount.", "info");
    generateCoinChangeSteps([1, 3, 4], 6);
  }
  else if (visualizerState.algo === 'kruskal') {
    appendLog("[INFO] Kruskal MST: sorting edges and using Union-Find decisions.", "info");
    generateKruskalSteps();
  }
  else if (visualizerState.algo === 'medianfinder') {
    appendLog("[INFO] Median Finder: balancing lower and upper heaps.", "info");
    generateMedianFinderSteps([5, 2, 10, 1, 7, 3]);
  }
  else if (visualizerState.algo === 'sudoku') {
    appendLog("[INFO] Sudoku Solver: trying candidates with backtracking.", "info");
    generateSudokuSteps();
  }

  else if (visualizerState.algo === 'avl') {
    visualizerState.rawArray = [10, 20, 30, 40, 50, 25];
    appendLog("[INFO] Initialized AVL Tree nodes insertion. Watch left/right balance factors & rotations...", "info");
    generateAVLSteps(visualizerState.rawArray);
  }
  else if (visualizerState.algo === 'rbtree') {
    visualizerState.rawArray = [15, 8, 25, 5, 12, 2];
    appendLog("[INFO] Initialized Red-Black Tree. Nodes are colored (Red/Black) and rotated to maintain properties.", "info");
    generateRBTreeSteps(visualizerState.rawArray);
  }
  else if (visualizerState.algo === 'netflow') {
    visualizerState.rawArray = [
      { from: 'S', to: 'A', cap: 10, flow: 0 },
      { from: 'S', to: 'B', cap: 5, flow: 0 },
      { from: 'A', to: 'B', cap: 15, flow: 0 },
      { from: 'A', to: 'T', cap: 10, flow: 0 },
      { from: 'B', to: 'T', cap: 10, flow: 0 }
    ];
    appendLog("[INFO] Initialized Network Flow graph S -> A,B -> T. BFS computes augmenting paths.", "info");
    generateNetFlowSteps();
  }
  else if (visualizerState.algo === 'astar') {
    visualizerState.rawArray = {
      rows: 5,
      cols: 6,
      start: [2, 0],
      end: [2, 5],
      walls: [[1, 2], [2, 2], [3, 2]]
    };
    appendLog("[INFO] Initialized A* Search. Green is Start, Red is Goal, Grey is wall. f = g + h is computed.", "info");
    generateAStarSteps();
  }
  else if (visualizerState.algo === 'prims') {
    visualizerState.rawArray = [
      { x: 80, y: 80, id: 'A' },
      { x: 320, y: 60, id: 'B' },
      { x: 180, y: 200, id: 'C' },
      { x: 360, y: 220, id: 'D' }
    ];
    appendLog("[INFO] Initialized Prim's Minimum Spanning Tree. Starting from node A.", "info");
    generatePrimsSteps();
  }
  else if (visualizerState.algo === 'singlenumber') {
    visualizerState.rawArray = [4, 1, 2, 1, 2];
    appendLog("[INFO] Initialized Single Number Finder. Running XOR accumulator scan...", "info");
    generateSingleNumberSteps();
  }
  else if (visualizerState.algo === 'bitmasksubsets') {
    visualizerState.rawArray = ['A', 'B', 'C'];
    appendLog("[INFO] Initialized Bitmask Subsets. Enumerating binary masks from 000 to 111...", "info");
    generateBitmaskSubsetsSteps();
  }
  else if (visualizerState.algo === 'bitmaskdp') {
    visualizerState.rawArray = { nodes: 4 };
    appendLog("[INFO] Bitmask DP (TSP): Computing shortest Hamiltonian Cycle on a 4-node complete graph.", "info");
    generateBitmaskDPSteps();
  }
  else if (visualizerState.algo === 'kosaraju') {
    visualizerState.rawArray = { nodes: 5 };
    appendLog("[INFO] Kosaraju's SCC: Finding Strongly Connected Components on a 5-node directed graph.", "info");
    generateKosarajuSteps();
  }
  else if (visualizerState.algo === 'binaryaddition') {
    visualizerState.rawArray = [3, 2];
    appendLog("[INFO] Initialized Binary Addition. Simulating adder carry propagation for 3 + 2...", "info");
    generateBinaryAdditionSteps();
  }
  else if (visualizerState.algo === 'huffman') {
    visualizerState.rawArray = [
      { char: 'A', freq: 5 },
      { char: 'B', freq: 9 },
      { char: 'C', freq: 12 },
      { char: 'D', freq: 13 },
      { char: 'E', freq: 16 },
      { char: 'F', freq: 45 }
    ];
    appendLog("[INFO] Loaded Huffman frequency map. Building prefix tree...", "info");
    generateHuffmanSteps(visualizerState.rawArray);
  }

  
  renderCanvasStep();
}

// ==========================================================================
// DYNAMIC SNAPSHOT STEP GENERATION ROUTINES
// ==========================================================================


// AVL Tree Step Generation
function generateAVLSteps(nums) {
  const steps = [];
  let root = null;
  
  function getHeight(n) {
    return n ? n.height : 0;
  }
  
  function getBalance(n) {
    return n ? getHeight(n.left) - getHeight(n.right) : 0;
  }
  
  function updateHeight(n) {
    if (n) {
      n.height = Math.max(getHeight(n.left), getHeight(n.right)) + 1;
    }
  }
  
  function serializeTree(n) {
    if (!n) return null;
    return {
      val: n.val,
      height: n.height,
      bf: getBalance(n),
      left: serializeTree(n.left),
      right: serializeTree(n.right)
    };
  }
  
  function rotateRight(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    updateHeight(y);
    updateHeight(x);
    return x;
  }
  
  function rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    updateHeight(x);
    updateHeight(y);
    return y;
  }
  
  function insert(node, val) {
    if (!node) {
      const newNode = { val, left: null, right: null, height: 1 };
      steps.push({ tree: serializeTree(root || newNode), activeNode: val, status: 'insert', log: `Inserted node ${val}.` });
      return newNode;
    }
    
    if (val < node.val) {
      node.left = insert(node.left, val);
    } else if (val > node.val) {
      node.right = insert(node.right, val);
    } else {
      return node;
    }
    
    updateHeight(node);
    const balance = getBalance(node);
    
    if (balance > 1 && val < node.left.val) {
      steps.push({ tree: serializeTree(root), activeNode: node.val, status: 'unbalanced-LL', log: `Node ${node.val} is unbalanced (BF = ${balance}). Left-Left violation. Rotate Right.` });
      const newSub = rotateRight(node);
      steps.push({ tree: serializeTree(newSub), activeNode: newSub.val, status: 'rotated-LL', log: `Rotated Right around node ${node.val} to rebalance.` });
      return newSub;
    }
    
    if (balance < -1 && val > node.right.val) {
      steps.push({ tree: serializeTree(root), activeNode: node.val, status: 'unbalanced-RR', log: `Node ${node.val} is unbalanced (BF = ${balance}). Right-Right violation. Rotate Left.` });
      const newSub = rotateLeft(node);
      steps.push({ tree: serializeTree(newSub), activeNode: newSub.val, status: 'rotated-RR', log: `Rotated Left around node ${node.val} to rebalance.` });
      return newSub;
    }
    
    if (balance > 1 && val > node.left.val) {
      steps.push({ tree: serializeTree(root), activeNode: node.left.val, status: 'unbalanced-LR-1', log: `Node ${node.val} is unbalanced (BF = ${balance}). Left-Right violation. Rotate Left on child ${node.left.val}.` });
      node.left = rotateLeft(node.left);
      steps.push({ tree: serializeTree(root), activeNode: node.val, status: 'unbalanced-LR-2', log: `Rotate Right on node ${node.val} to complete rebalance.` });
      const newSub = rotateRight(node);
      return newSub;
    }
    
    if (balance < -1 && val < node.right.val) {
      steps.push({ tree: serializeTree(root), activeNode: node.right.val, status: 'unbalanced-RL-1', log: `Node ${node.val} is unbalanced (BF = ${balance}). Right-Left violation. Rotate Right on child ${node.right.val}.` });
      node.right = rotateRight(node.right);
      steps.push({ tree: serializeTree(root), activeNode: node.val, status: 'unbalanced-RL-2', log: `Rotate Left on node ${node.val} to complete rebalance.` });
      const newSub = rotateLeft(node);
      return newSub;
    }
    
    return node;
  }
  
  steps.push({ tree: null, activeNode: null, status: 'start', log: "Start AVL Tree Insertion. Input sequence: [" + nums.join(", ") + "]" });
  
  for (let num of nums) {
    root = insert(root, num);
    steps.push({ tree: serializeTree(root), activeNode: null, status: 'stable', log: `AVL Tree is stable after inserting ${num}.` });
  }
  
  visualizerState.steps = steps;
}

// Huffman Coding Step Generation
function generateHuffmanSteps(nodes) {
  const steps = [];
  
  let queue = nodes.map(n => ({
    val: n.char,
    freq: n.freq,
    left: null,
    right: null
  })).sort((a, b) => a.freq - b.freq);
  
  function cloneQueue(q) {
    return q.map(n => serializeNode(n));
  }
  
  function serializeNode(n) {
    if (!n) return null;
    return {
      val: n.val,
      freq: n.freq,
      left: serializeNode(n.left),
      right: serializeNode(n.right)
    };
  }
  
  steps.push({ queue: cloneQueue(queue), mergedNode: null, log: "Huffman initialized. Sorted frequency nodes: " + queue.map(n => `${n.val}:${n.freq}`).join(", ") });
  
  while (queue.length > 1) {
    const left = queue.shift();
    const right = queue.shift();
    
    const parent = {
      val: left.val + right.val,
      freq: left.freq + right.freq,
      left,
      right
    };
    
    queue.push(parent);
    queue.sort((a, b) => a.freq - b.freq);
    
    steps.push({
      queue: cloneQueue(queue),
      mergedNode: parent.val,
      log: `Merged '${left.val}' (${left.freq}) and '${right.val}' (${right.freq}) into parent '${parent.val}' (${parent.freq}).`
    });
  }
  
  visualizerState.steps = steps;
}

// Red-Black Tree step generator
function generateRBTreeSteps(arr) {
  const steps = [];
  // Hardcoded trace representing standard Red-Black tree insertion steps for [15, 8, 25, 5, 12, 2]
  // showing coloring rules and left/right rotations.
  
  steps.push({
    nodes: [],
    log: "Red-Black Tree is empty. Initializing insertion..."
  });
  
  steps.push({
    nodes: [
      { val: 15, color: 'black', x: 228, y: 30, left: null, right: null }
    ],
    log: "Insert 15. Root node must always be colored Black."
  });
  
  steps.push({
    nodes: [
      { val: 15, color: 'black', x: 228, y: 30, left: 8, right: null },
      { val: 8, color: 'red', x: 120, y: 110, left: null, right: null }
    ],
    log: "Insert 8 as left child of 15. New insertions default to Red. Properties satisfied."
  });
  
  steps.push({
    nodes: [
      { val: 15, color: 'black', x: 228, y: 30, left: 8, right: 25 },
      { val: 8, color: 'red', x: 120, y: 110, left: null, right: null },
      { val: 25, color: 'red', x: 336, y: 110, left: null, right: null }
    ],
    log: "Insert 25 as right child of 15. Colored Red. Tree remains balanced."
  });
  
  steps.push({
    nodes: [
      { val: 15, color: 'black', x: 228, y: 30, left: 8, right: 25 },
      { val: 8, color: 'black', x: 120, y: 110, left: 5, right: null },
      { val: 25, color: 'black', x: 336, y: 110, left: null, right: null },
      { val: 5, color: 'red', x: 50, y: 190, left: null, right: null }
    ],
    log: "Insert 5. Red-Red violation at parent 8 and child 5! Uncle 25 is Red -> Recoloring: parent 8 and uncle 25 become Black, root 15 remains Black."
  });
  
  steps.push({
    nodes: [
      { val: 15, color: 'black', x: 228, y: 30, left: 8, right: 25 },
      { val: 8, color: 'black', x: 120, y: 110, left: 5, right: 12 },
      { val: 25, color: 'black', x: 336, y: 110, left: null, right: null },
      { val: 5, color: 'red', x: 50, y: 190, left: null, right: null },
      { val: 12, color: 'red', x: 180, y: 190, left: null, right: null }
    ],
    log: "Insert 12 as right child of 8. Colored Red. Tree properties are valid."
  });
  
  steps.push({
    nodes: [
      { val: 15, color: 'black', x: 228, y: 30, left: 5, right: 25 },
      { val: 5, color: 'black', x: 120, y: 110, left: 2, right: 8 },
      { val: 2, color: 'red', x: 50, y: 190, left: null, right: null },
      { val: 8, color: 'red', x: 180, y: 190, left: null, right: 12 },
      { val: 12, color: 'red', x: 240, y: 270, left: null, right: null },
      { val: 25, color: 'black', x: 336, y: 110, left: null, right: null }
    ],
    log: "Insert 2. Red-Red violation! Parent 5 and grandparent 8 form a Left-Left line, and uncle is null (Black). Perform Right Rotation on 8 and swap colors of 5 and 8."
  });
  
  visualizerState.steps = steps;
}

// Network Flow step generator
function generateNetFlowSteps() {
  const steps = [];
  
  steps.push({
    flows: [
      { u: 'S', v: 'A', cap: 10, flow: 0 },
      { u: 'S', v: 'B', cap: 5, flow: 0 },
      { u: 'A', v: 'B', cap: 15, flow: 0 },
      { u: 'A', v: 'T', cap: 10, flow: 0 },
      { u: 'B', v: 'T', cap: 10, flow: 0 }
    ],
    path: [],
    activeEdges: [],
    maxFlow: 0,
    log: "Flow network initialized with 0 flow. BFS is triggered to find augmenting paths."
  });
  
  steps.push({
    flows: [
      { u: 'S', v: 'A', cap: 10, flow: 0 },
      { u: 'S', v: 'B', cap: 5, flow: 0 },
      { u: 'A', v: 'B', cap: 15, flow: 0 },
      { u: 'A', v: 'T', cap: 10, flow: 0 },
      { u: 'B', v: 'T', cap: 10, flow: 0 }
    ],
    path: ['S', 'A', 'T'],
    activeEdges: ['S-A', 'A-T'],
    maxFlow: 0,
    log: "BFS found augmenting path S -> A -> T. Bottleneck capacity along this path is min(10, 10) = 10."
  });
  
  steps.push({
    flows: [
      { u: 'S', v: 'A', cap: 10, flow: 10 },
      { u: 'S', v: 'B', cap: 5, flow: 0 },
      { u: 'A', v: 'B', cap: 15, flow: 0 },
      { u: 'A', v: 'T', cap: 10, flow: 10 },
      { u: 'B', v: 'T', cap: 10, flow: 0 }
    ],
    path: ['S', 'A', 'T'],
    activeEdges: ['S-A', 'A-T'],
    maxFlow: 10,
    log: "Pushed 10 units of flow along S -> A -> T. Current total flow = 10."
  });
  
  steps.push({
    flows: [
      { u: 'S', v: 'A', cap: 10, flow: 10 },
      { u: 'S', v: 'B', cap: 5, flow: 0 },
      { u: 'A', v: 'B', cap: 15, flow: 0 },
      { u: 'A', v: 'T', cap: 10, flow: 10 },
      { u: 'B', v: 'T', cap: 10, flow: 0 }
    ],
    path: ['S', 'B', 'T'],
    activeEdges: ['S-B', 'B-T'],
    maxFlow: 10,
    log: "BFS found next augmenting path S -> B -> T. Bottleneck capacity along this path is min(5, 10) = 5."
  });
  
  steps.push({
    flows: [
      { u: 'S', v: 'A', cap: 10, flow: 10 },
      { u: 'S', v: 'B', cap: 5, flow: 5 },
      { u: 'A', v: 'B', cap: 15, flow: 0 },
      { u: 'A', v: 'T', cap: 10, flow: 10 },
      { u: 'B', v: 'T', cap: 10, flow: 5 }
    ],
    path: ['S', 'B', 'T'],
    activeEdges: ['S-B', 'B-T'],
    maxFlow: 15,
    log: "Pushed 5 units of flow along S -> B -> T. Current total flow = 15."
  });
  
  steps.push({
    flows: [
      { u: 'S', v: 'A', cap: 10, flow: 10 },
      { u: 'S', v: 'B', cap: 5, flow: 5 },
      { u: 'A', v: 'B', cap: 15, flow: 0 },
      { u: 'A', v: 'T', cap: 10, flow: 10 },
      { u: 'B', v: 'T', cap: 10, flow: 5 }
    ],
    path: [],
    activeEdges: [],
    maxFlow: 15,
    log: "BFS runs again. Source and sink are disconnected in residual graph. Max Flow algorithm complete. Optimal Max Flow = 15."
  });
  
  visualizerState.steps = steps;
}

// A* Pathfinding step generator
function generateAStarSteps() {
  const steps = [];
  
  // start [2,0], end [2,5], walls [[1,2],[2,2],[3,2]]
  steps.push({
    open: [[2,0]],
    closed: [],
    active: null,
    path: [],
    f: {}, g: {}, h: {},
    log: "A* Search initialized. Green cell is Start, Red is Goal, Grey cells are impassable Walls."
  });
  
  steps.push({
    open: [[1,0], [3,0], [2,1]],
    closed: [[2,0]],
    active: [2,0],
    path: [],
    f: {'2,1':5, '1,0':6, '3,0':6},
    g: {'2,1':1, '1,0':1, '3,0':1},
    h: {'2,1':4, '1,0':5, '3,0':5},
    log: "Evaluate cell (2,0) [f=5]. Open neighbors: (2,1) [f=5], (1,0) [f=6], (3,0) [f=6]."
  });
  
  steps.push({
    open: [[1,1], [3,1], [1,0], [3,0]],
    closed: [[2,0], [2,1]],
    active: [2,1],
    path: [],
    f: {'1,1':6, '3,1':6, '1,0':6, '3,0':6},
    g: {'1,1':2, '3,1':2, '1,0':1, '3,0':1},
    h: {'1,1':4, '3,1':4, '1,0':5, '3,0':5},
    log: "Evaluate lowest-F cell (2,1) [f=5]. Open neighbors (1,1) [f=6] and (3,1) [f=6]."
  });
  
  steps.push({
    open: [[0,1], [3,1], [1,0], [3,0]],
    closed: [[2,0], [2,1], [1,1]],
    active: [1,1],
    path: [],
    f: {'0,1':7, '3,1':6, '1,0':6, '3,0':6},
    g: {'0,1':3, '3,1':2, '1,0':1, '3,0':1},
    h: {'0,1':4, '3,1':4, '1,0':5, '3,0':5},
    log: "Evaluate cell (1,1) [f=6]. Open neighbor (0,1) [f=7]. (Note: (1,2) is a Wall)."
  });
  
  steps.push({
    open: [[0,2], [3,1], [1,0], [3,0]],
    closed: [[2,0], [2,1], [1,1], [0,1]],
    active: [0,1],
    path: [],
    f: {'0,2':7, '3,1':6, '1,0':6, '3,0':6},
    g: {'0,2':4, '3,1':2, '1,0':1, '3,0':1},
    h: {'0,2':3, '3,1':4, '1,0':5, '3,0':5},
    log: "Evaluate cell (0,1) [f=7]. Open neighbor (0,2) [f=7] (successfully bypasses wall block from above)."
  });
  
  steps.push({
    open: [[0,3], [3,1], [1,0], [3,0]],
    closed: [[2,0], [2,1], [1,1], [0,1], [0,2]],
    active: [0,2],
    path: [],
    f: {'0,3':7, '3,1':6, '1,0':6, '3,0':6},
    g: {'0,3':5, '3,1':2, '1,0':1, '3,0':1},
    h: {'0,3':2, '3,1':4, '1,0':5, '3,0':5},
    log: "Evaluate cell (0,2) [f=7]. Open neighbor (0,3) [f=7]."
  });
  
  steps.push({
    open: [[0,4], [1,3], [3,1], [1,0]],
    closed: [[2,0], [2,1], [1,1], [0,1], [0,2], [0,3]],
    active: [0,3],
    path: [],
    f: {'0,4':7, '1,3':7, '3,1':6, '1,0':6},
    g: {'0,4':6, '1,3':6, '3,1':2, '1,0':1},
    h: {'0,4':1, '1,3':1, '3,1':4, '1,0':5},
    log: "Evaluate cell (0,3) [f=7]. Open neighbors (0,4) [f=7] and (1,3) [f=7]."
  });
  
  steps.push({
    open: [[0,5], [1,4], [1,3], [1,0]],
    closed: [[2,0], [2,1], [1,1], [0,1], [0,2], [0,3], [0,4]],
    active: [0,4],
    path: [],
    f: {'0,5':9, '1,4':8, '1,3':7, '1,0':6},
    g: {'0,5':7, '1,4':7, '1,3':6, '1,0':1},
    h: {'0,5':2, '1,4':1, '1,3':1, '1,0':5},
    log: "Evaluate cell (0,4) [f=7]. Open neighbors (0,5) [f=9] and (1,4) [f=8]."
  });
  
  steps.push({
    open: [[2,5], [1,4], [1,0]],
    closed: [[2,0], [2,1], [1,1], [0,1], [0,2], [0,3], [0,4], [1,4]],
    active: [1,4],
    path: [],
    f: {'2,5':9, '1,4':8, '1,0':6},
    g: {'2,5':8, '1,4':7, '1,0':1},
    h: {'2,5':0, '1,4':1, '1,0':5},
    log: "Evaluate cell (1,4) [f=8]. Open target node (2,5) [f=9, g=8, h=0]!"
  });
  
  steps.push({
    open: [],
    closed: [[2,0], [2,1], [1,1], [0,1], [0,2], [0,3], [0,4], [1,4], [2,5]],
    active: [2,5],
    path: [[2,0], [2,1], [1,1], [0,1], [0,2], [0,3], [0,4], [1,4], [2,5]],
    f: {}, g: {}, h: {},
    log: "Target reached! Backtrack parents to construct optimal path: (2,0) -> (2,1) -> (1,1) -> (0,1) -> (0,2) -> (0,3) -> (0,4) -> (1,4) -> (2,5)."
  });
  
  visualizerState.steps = steps;
}

// Prim's MST step generator
function generatePrimsSteps() {
  const steps = [];
  
  // Hardcoded steps for points: A(80,80), B(320,60), C(180,200), D(360,220)
  // dist(A,B) = 241, dist(A,C) = 156, dist(B,C) = 198, dist(B,D) = 165, dist(C,D) = 181
  
  steps.push({
    mstEdges: [],
    inMST: [],
    minDist: { 'A': 0, 'B': Infinity, 'C': Infinity, 'D': Infinity },
    candidates: [],
    activeNode: null,
    log: "Prim's algorithm initialized. Start node A chosen with distance 0. All other distances set to Infinity."
  });
  
  steps.push({
    mstEdges: [],
    inMST: ['A'],
    minDist: { 'A': 0, 'B': 241, 'C': 156, 'D': Infinity },
    candidates: ['A-B', 'A-C'],
    activeNode: 'A',
    log: "Add node A to MST. Scan outgoing edges from A: candidate edge A-B (dist 241), candidate edge A-C (dist 156)."
  });
  
  steps.push({
    mstEdges: ['A-C'],
    inMST: ['A', 'C'],
    minDist: { 'A': 0, 'B': 198, 'C': 156, 'D': 181 },
    candidates: ['A-B', 'C-B', 'C-D'],
    activeNode: 'C',
    log: "Select closest candidate node C (distance 156). Add edge A-C to MST. Scan C's neighbors: B's distance updated to 198 (via C-B), candidate edge C-D (dist 181) added."
  });
  
  steps.push({
    mstEdges: ['A-C', 'C-D'],
    inMST: ['A', 'C', 'D'],
    minDist: { 'A': 0, 'B': 165, 'C': 156, 'D': 181 },
    candidates: ['C-B', 'D-B'],
    activeNode: 'D',
    log: "Select closest candidate node D (distance 181). Add edge C-D to MST. Scan D's neighbors: B's distance updated to 165 (via D-B)."
  });
  
  steps.push({
    mstEdges: ['A-C', 'C-D', 'D-B'],
    inMST: ['A', 'C', 'D', 'B'],
    minDist: { 'A': 0, 'B': 165, 'C': 156, 'D': 181 },
    candidates: [],
    activeNode: 'B',
    log: "Select closest candidate node B (distance 165). Add edge D-B to MST. All nodes connected! Spanning Tree complete. Total MST cost = 156 + 181 + 165 = 502."
  });
  
  visualizerState.steps = steps;
}

// Single Number step generator
function generateSingleNumberSteps() {
  const steps = [];
  const arr = [4, 1, 2, 1, 2];
  let acc = 0;
  
  steps.push({
    array: arr,
    index: -1,
    acc: 0,
    binaryAcc: "000",
    binaryVal: "000",
    log: "XOR Accumulator initialized with 0. Starting scan of elements..."
  });
  
  const toBin = (v) => v.toString(2).padStart(3, '0');
  
  arr.forEach((val, idx) => {
    const prevAcc = acc;
    acc = acc ^ val;
    steps.push({
      array: arr,
      index: idx,
      acc: acc,
      binaryAcc: toBin(acc),
      binaryVal: toBin(val),
      log: `XOR element index ${idx} (${val}). Acc = ${prevAcc} (${toBin(prevAcc)}) ^ ${val} (${toBin(val)}) = ${acc} (${toBin(acc)})`
    });
  });
  
  steps.push({
    array: arr,
    index: -1,
    acc: acc,
    binaryAcc: toBin(acc),
    binaryVal: "000",
    log: `Scan complete. The unique element left after pairs cancel out is ${acc}.`
  });
  
  visualizerState.steps = steps;
}

// Bitmask Subsets step generator
function generateBitmaskSubsetsSteps() {
  const steps = [];
  const arr = ['A', 'B', 'C'];
  const n = arr.length;
  const list = [];
  
  const toBin = (v) => v.toString(2).padStart(3, '0');
  
  for (let mask = 0; mask < (1 << n); mask++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) > 0) {
        subset.push(arr[i]);
      }
    }
    list.push([...subset]);
    
    steps.push({
      mask: mask,
      binaryMask: toBin(mask),
      activeSubset: [...subset],
      subsetsList: list.map(s => `[${s.join(', ')}]`),
      log: `Mask ${mask} (${toBin(mask)}). Set bits match indices: ${subset.join(', ') || 'None'}. Subtree generated: [${subset.join(', ')}]`
    });
  }
  
  visualizerState.steps = steps;
}

// Bitmask DP step generator (TSP)
function generateBitmaskDPSteps() {
  const steps = [];
  const n = 4;
  const numStates = 1 << n;
  
  let dp = Array.from({ length: numStates }, () => Array(n).fill(Infinity));
  const cloneDP = (tbl) => tbl.map(r => [...r]);
  const toBin = (v) => v.toString(2).padStart(4, '0');
  const nodeName = (idx) => ['A', 'B', 'C', 'D'][idx];
  
  const dist = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
  ];
  
  dp[1][0] = 0;
  steps.push({
    dp: cloneDP(dp),
    activeMask: 1,
    activeNode: 0,
    candidateNode: null,
    activeEdge: null,
    inTour: [],
    action: 'init',
    log: "Initialize DP table. dp[0001][A] = 0 (Start path at node A visiting only A)."
  });
  
  const size1Transitions = [
    { u: 0, v: 1, nextMask: 3 },
    { u: 0, v: 2, nextMask: 5 },
    { u: 0, v: 3, nextMask: 9 }
  ];
  
  const size2Transitions = [
    { mask: 3, u: 1, v: 2, nextMask: 7 },
    { mask: 3, u: 1, v: 3, nextMask: 11 },
    { mask: 5, u: 2, v: 1, nextMask: 7 },
    { mask: 5, u: 2, v: 3, nextMask: 13 },
    { mask: 9, u: 3, v: 1, nextMask: 11 },
    { mask: 9, u: 3, v: 2, nextMask: 13 }
  ];
  
  const size3Transitions = [
    { mask: 7, u: 1, v: 3, nextMask: 15 },
    { mask: 7, u: 2, v: 3, nextMask: 15 },
    { mask: 11, u: 1, v: 2, nextMask: 15 },
    { mask: 11, u: 3, v: 2, nextMask: 15 },
    { mask: 13, u: 2, v: 1, nextMask: 15 },
    { mask: 13, u: 3, v: 1, nextMask: 15 }
  ];

  size1Transitions.forEach(trans => {
    const { u, v, nextMask } = trans;
    const currentCost = dp[1][u];
    const newCost = currentCost + dist[u][v];
    const prevNextCost = dp[nextMask][v];
    
    steps.push({
      dp: cloneDP(dp),
      activeMask: 1,
      activeNode: u,
      candidateNode: v,
      activeEdge: { from: u, to: v },
      inTour: [],
      action: 'evaluate',
      log: `Evaluating path size 1: Ending at ${nodeName(u)} (visited: {A}). Trying transition to unvisited ${nodeName(v)}. Cost: dp[0001][A] (${currentCost}) + dist(${nodeName(u)},${nodeName(v)}) (${dist[u][v]}) = ${newCost}.`
    });
    
    dp[nextMask][v] = Math.min(dp[nextMask][v], newCost);
    
    steps.push({
      dp: cloneDP(dp),
      activeMask: nextMask,
      activeNode: v,
      candidateNode: null,
      activeEdge: null,
      inTour: [],
      action: 'update',
      log: `Updated DP table: dp[${toBin(nextMask)}][${nodeName(v)}] = min(${prevNextCost === Infinity ? '∞' : prevNextCost}, ${newCost}) = ${dp[nextMask][v]}.`
    });
  });
  
  size2Transitions.forEach(trans => {
    const { mask, u, v, nextMask } = trans;
    const currentCost = dp[mask][u];
    const newCost = currentCost + dist[u][v];
    const prevNextCost = dp[nextMask][v];
    
    steps.push({
      dp: cloneDP(dp),
      activeMask: mask,
      activeNode: u,
      candidateNode: v,
      activeEdge: { from: u, to: v },
      inTour: [],
      action: 'evaluate',
      log: `Evaluating path size 2: Ending at ${nodeName(u)} (visited: {A,${nodeName(mask === 3 ? 1 : mask === 5 ? 2 : 3)}}). Transition to unvisited ${nodeName(v)}. Cost: dp[${toBin(mask)}][${nodeName(u)}] (${currentCost}) + dist(${nodeName(u)},${nodeName(v)}) (${dist[u][v]}) = ${newCost}.`
    });
    
    dp[nextMask][v] = Math.min(dp[nextMask][v], newCost);
    
    steps.push({
      dp: cloneDP(dp),
      activeMask: nextMask,
      activeNode: v,
      candidateNode: null,
      activeEdge: null,
      inTour: [],
      action: 'update',
      log: `Updated DP table: dp[${toBin(nextMask)}][${nodeName(v)}] = min(${prevNextCost === Infinity ? '∞' : prevNextCost}, ${newCost}) = ${dp[nextMask][v]}.`
    });
  });
  
  size3Transitions.forEach(trans => {
    const { mask, u, v, nextMask } = trans;
    const currentCost = dp[mask][u];
    const newCost = currentCost + dist[u][v];
    const prevNextCost = dp[nextMask][v];
    
    const getVisitedDesc = (m) => {
      let res = ['A'];
      if (m & 2) res.push('B');
      if (m & 4) res.push('C');
      if (m & 8) res.push('D');
      return '{' + res.join(',') + '}';
    };

    steps.push({
      dp: cloneDP(dp),
      activeMask: mask,
      activeNode: u,
      candidateNode: v,
      activeEdge: { from: u, to: v },
      inTour: [],
      action: 'evaluate',
      log: `Evaluating path size 3: Ending at ${nodeName(u)} (visited: ${getVisitedDesc(mask)}). Transition to unvisited ${nodeName(v)}. Cost: dp[${toBin(mask)}][${nodeName(u)}] (${currentCost}) + dist(${nodeName(u)},${nodeName(v)}) (${dist[u][v]}) = ${newCost}.`
    });
    
    dp[nextMask][v] = Math.min(dp[nextMask][v], newCost);
    
    steps.push({
      dp: cloneDP(dp),
      activeMask: nextMask,
      activeNode: v,
      candidateNode: null,
      activeEdge: null,
      inTour: [],
      action: 'update',
      log: `Updated DP table: dp[${toBin(nextMask)}][${nodeName(v)}] = min(${prevNextCost === Infinity ? '∞' : prevNextCost}, ${newCost}) = ${dp[nextMask][v]}.`
    });
  });
  
  const closingNodes = [1, 2, 3];
  let bestTourCost = Infinity;
  
  closingNodes.forEach(u => {
    const cost = dp[15][u] + dist[u][0];
    steps.push({
      dp: cloneDP(dp),
      activeMask: 15,
      activeNode: u,
      candidateNode: 0,
      activeEdge: { from: u, to: 0 },
      inTour: [],
      action: 'cycle_check',
      log: `Returning to Start A: Evaluating path completing cycle from ending node ${nodeName(u)}. Total Cost: dp[1111][${nodeName(u)}] (${dp[15][u]}) + dist(${nodeName(u)},A) (${dist[u][0]}) = ${cost}.`
    });
    if (cost < bestTourCost) {
      bestTourCost = cost;
    }
  });
  
  const tourEdges = [
    { from: 0, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 1 },
    { from: 1, to: 0 }
  ];
  
  steps.push({
    dp: cloneDP(dp),
    activeMask: 15,
    activeNode: null,
    candidateNode: null,
    activeEdge: null,
    inTour: tourEdges,
    action: 'done',
    log: `TSP Complete! Optimal Hamiltonian Cycle found: A → C → D → B → A. Minimum total distance = ${bestTourCost}.`
  });
  
  visualizerState.steps = steps;
}

// Kosaraju's SCC step generator
function generateKosarajuSteps() {
  const steps = [];
  const n = 5;
  const nodeNames = ['A', 'B', 'C', 'D', 'E'];
  
  let stack = [];
  let visited = new Set();
  
  const pushStep = (phase, activeNode, scanningEdge, log, customObj = {}) => {
    steps.push({
      phase,
      activeNode,
      scanningEdge,
      stack: [...stack],
      visited: Array.from(visited),
      reversed: phase >= 2,
      log,
      ...customObj
    });
  };
  
  pushStep(1, null, null, "Kosaraju's Algorithm Initialized. Phase 1: DFS on original graph to determine topological finish times.");
  
  pushStep(1, 0, null, "DFS Pass 1: Start DFS from node A (unvisited).");
  visited.add(0);
  
  pushStep(1, 0, { from: 0, to: 1 }, "DFS Pass 1: Traversing edge A → B.");
  pushStep(1, 1, null, "DFS Pass 1: Node B visited.");
  visited.add(1);
  
  pushStep(1, 1, { from: 1, to: 2 }, "DFS Pass 1: Traversing edge B → C.");
  pushStep(1, 2, null, "DFS Pass 1: Node C visited.");
  visited.add(2);
  
  pushStep(1, 2, { from: 2, to: 0 }, "DFS Pass 1: Edge C → A points to visited node A. Backtracking.");
  
  stack.push(2);
  pushStep(1, 2, null, "DFS Pass 1: Node C has no unvisited neighbors. Backtracking and pushing C to stack.");
  
  pushStep(1, 1, { from: 1, to: 3 }, "DFS Pass 1: Back to B. Traversing edge B → D.");
  pushStep(1, 3, null, "DFS Pass 1: Node D visited.");
  visited.add(3);
  
  pushStep(1, 3, { from: 3, to: 4 }, "DFS Pass 1: Traversing edge D → E.");
  pushStep(1, 4, null, "DFS Pass 1: Node E visited.");
  visited.add(4);
  
  pushStep(1, 4, { from: 4, to: 3 }, "DFS Pass 1: Edge E → D points to visited node D. Backtracking.");
  
  stack.push(4);
  pushStep(1, 4, null, "DFS Pass 1: Node E has no unvisited neighbors. Backtracking and pushing E to stack.");
  
  stack.push(3);
  pushStep(1, 3, null, "DFS Pass 1: Back to D. Node D has no unvisited neighbors. Backtracking and pushing D to stack.");
  
  stack.push(1);
  pushStep(1, 1, null, "DFS Pass 1: Back to B. Node B has no unvisited neighbors. Backtracking and pushing B to stack.");
  
  stack.push(0);
  pushStep(1, 0, null, "DFS Pass 1: Back to A. Node A has no unvisited neighbors. DFS complete. Pushing A to stack.");
  
  pushStep(1, null, null, `Phase 1 Complete. Finish order stack (LIFO): [${stack.map(x => nodeNames[x]).join(', ')}].`);
  
  pushStep(2, null, null, "Phase 2: Reversing all graph edges to construct the transposed graph (G^T).");
  
  visited.clear();
  let sccs = [];
  let nodeComponents = {};
  
  const getCompObj = () => ({
    sccs: sccs.map(comp => comp.map(x => nodeNames[x])),
    nodeComponents: { ...nodeComponents }
  });
  
  pushStep(3, null, null, "Phase 3: Starting DFS on transposed graph by popping nodes from finish stack.", getCompObj());
  
  let poppedVal = stack.pop();
  pushStep(3, null, null, `Phase 3: Popping ${nodeNames[poppedVal]} from stack.`, { poppingVal: poppedVal, ...getCompObj() });
  pushStep(3, 0, null, "Node A is unvisited. Start new DFS search on transposed graph to collect SCC.", getCompObj());
  
  visited.add(0);
  nodeComponents[0] = 0;
  let comp1 = [0];
  pushStep(3, 0, null, "DFS Pass 2: Visited node A. Added to component 1.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp1.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  
  pushStep(3, 0, { from: 0, to: 2 }, "DFS Pass 2: Traversing edge A → C in transposed graph.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp1.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  visited.add(2);
  nodeComponents[2] = 0;
  comp1.push(2);
  pushStep(3, 2, null, "DFS Pass 2: Visited node C. Added to component 1.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp1.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  
  pushStep(3, 2, { from: 2, to: 1 }, "DFS Pass 2: Traversing edge C → B in transposed graph.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp1.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  visited.add(1);
  nodeComponents[1] = 0;
  comp1.push(1);
  pushStep(3, 1, null, "DFS Pass 2: Visited node B. Added to component 1.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp1.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  
  pushStep(3, 1, { from: 1, to: 0 }, "DFS Pass 2: Edge B → A points to visited node A. Backtracking.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp1.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  
  sccs.push(comp1);
  pushStep(3, null, null, `DFS Pass 2 complete. Resolved Component 1: {${comp1.map(x => nodeNames[x]).join(', ')}}.`, getCompObj());
  
  poppedVal = stack.pop();
  pushStep(3, null, null, `Phase 3: Popping ${nodeNames[poppedVal]} from stack.`, { poppingVal: poppedVal, ...getCompObj() });
  pushStep(3, null, null, "Node B is already visited. Skipping.", getCompObj());
  
  poppedVal = stack.pop();
  pushStep(3, null, null, `Phase 3: Popping ${nodeNames[poppedVal]} from stack.`, { poppingVal: poppedVal, ...getCompObj() });
  pushStep(3, 3, null, "Node D is unvisited. Start new DFS search on transposed graph to collect SCC.", getCompObj());
  
  visited.add(3);
  nodeComponents[3] = 1;
  let comp2 = [3];
  pushStep(3, 3, null, "DFS Pass 2: Visited node D. Added to component 2.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp2.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  
  pushStep(3, 3, { from: 3, to: 4 }, "DFS Pass 2: Traversing edge D → E in transposed graph.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp2.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  visited.add(4);
  nodeComponents[4] = 1;
  comp2.push(4);
  pushStep(3, 4, null, "DFS Pass 2: Visited node E. Added to component 2.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp2.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  
  pushStep(3, 4, { from: 4, to: 3 }, "DFS Pass 2: Edge E → D points to visited node D. Backtracking.", { sccs: [...sccs.map(comp => comp.map(x => nodeNames[x])), comp2.map(x => nodeNames[x])], nodeComponents: { ...nodeComponents } });
  
  sccs.push(comp2);
  pushStep(3, null, null, `DFS Pass 2 complete. Resolved Component 2: {${comp2.map(x => nodeNames[x]).join(', ')}}.`, getCompObj());
  
  poppedVal = stack.pop();
  pushStep(3, null, null, `Phase 3: Popping ${nodeNames[poppedVal]} from stack.`, { poppingVal: poppedVal, ...getCompObj() });
  pushStep(3, null, null, "Node E is already visited. Skipping.", getCompObj());
  
  poppedVal = stack.pop();
  pushStep(3, null, null, `Phase 3: Popping ${nodeNames[poppedVal]} from stack.`, { poppingVal: poppedVal, ...getCompObj() });
  pushStep(3, null, null, "Node C is already visited. Skipping.", getCompObj());
  
  pushStep(3, null, null, `Kosaraju SCC Complete! Found 2 Strongly Connected Components: Component 1 {A, C, B}, Component 2 {D, E}.`, getCompObj());
  
  visualizerState.steps = steps;
}

// Binary Addition step generator
function generateBinaryAdditionSteps() {
  const steps = [];
  let a = 3;
  let b = 2;
  
  steps.push({
    a: a,
    b: b,
    sum: 0,
    carry: 0,
    binaryA: a.toString(2).padStart(4, '0'),
    binaryB: b.toString(2).padStart(4, '0'),
    binarySum: "0000",
    binaryCarry: "0000",
    log: "Adder initialized. A = 3 (0011), B = 2 (0010)."
  });
  
  let tempA = a;
  let tempB = b;
  let stepIdx = 0;
  
  while (tempB !== 0) {
    const prevA = tempA;
    const prevB = tempB;
    const sumVal = tempA ^ tempB;
    const carryVal = (tempA & tempB) << 1;
    
    steps.push({
      a: prevA,
      b: prevB,
      sum: sumVal,
      carry: carryVal,
      binaryA: prevA.toString(2).padStart(4, '0'),
      binaryB: prevB.toString(2).padStart(4, '0'),
      binarySum: sumVal.toString(2).padStart(4, '0'),
      binaryCarry: carryVal.toString(2).padStart(4, '0'),
      log: `Step ${++stepIdx}: Sum (XOR) = ${prevA} ^ ${prevB} = ${sumVal}. Carry (AND<<1) = (${prevA} & ${prevB})<<1 = ${carryVal}.`
    });
    
    tempA = sumVal;
    tempB = carryVal;
  }
  
  steps.push({
    a: tempA,
    b: tempB,
    sum: tempA,
    carry: 0,
    binaryA: tempA.toString(2).padStart(4, '0'),
    binaryB: "0000",
    binarySum: tempA.toString(2).padStart(4, '0'),
    binaryCarry: "0000",
    log: `Carry is 0. Sum loop complete. Final Sum = ${tempA}.`
  });
  
  visualizerState.steps = steps;
}




// 1. Bubble Sort
function generateBubbleSortSteps(arr) {
  const steps = [];
  const temp = [...arr];
  const n = temp.length;
  steps.push({ array: [...temp], compare: [], swap: [], sorted: [], log: "Ready. Bubble Sort started." });
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({
        array: [...temp],
        compare: [j, j + 1],
        swap: [],
        sorted: getSortedIndicesList(n, i),
        log: `Comparing index ${j} (${temp[j]}) and index ${j+1} (${temp[j+1]})`
      });
      if (temp[j] > temp[j + 1]) {
        const swapVal = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = swapVal;
        steps.push({
          array: [...temp],
          compare: [],
          swap: [j, j + 1],
          sorted: getSortedIndicesList(n, i),
          log: `Swapped indices ${j} & ${j+1} (${temp[j]} <-> ${temp[j+1]})`
        });
      }
    }
    steps.push({
      array: [...temp],
      compare: [],
      swap: [],
      sorted: getSortedIndicesList(n, i + 1),
      log: `Placed element ${temp[n - i - 1]} at final sorted index ${n - i - 1}`
    });
  }
  steps.push({
    array: [...temp],
    compare: [],
    swap: [],
    sorted: Array.from({length: n}, (_, i) => i),
    log: "Bubble Sort completed! Array is fully sorted."
  });
  visualizerState.steps = steps;
}

function getSortedIndicesList(len, count) {
  const res = [];
  for (let i = len - count; i < len; i++) {
    if (i >= 0) res.push(i);
  }
  return res;
}

// 2. Binary Search
function generateBinarySearchSteps(arr, target) {
  const steps = [];
  let low = 0;
  let high = arr.length - 1;
  const n = arr.length;
  steps.push({ low, high, mid: -1, discarded: [], found: -1, log: `Binary Search start. Target = ${target}` });
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    steps.push({
      low, high, mid,
      discarded: getDiscardedRange(n, low, high),
      found: -1,
      log: `Inspecting Mid point index ${mid} (value = ${arr[mid]}). Range [${low}...${high}]`
    });
    
    if (arr[mid] === target) {
      steps.push({
        low, high, mid,
        discarded: getDiscardedRange(n, low, high),
        found: mid,
        log: `Success! Target ${target} matches index ${mid}.`
      });
      break;
    }
    
    if (arr[mid] < target) {
      const oldLow = low;
      low = mid + 1;
      steps.push({
        low, high, mid,
        discarded: getDiscardedRange(n, oldLow, high),
        found: -1,
        log: `Value ${arr[mid]} < ${target}. Search focus shifted to Right side (Low = ${low})`
      });
    } else {
      const oldHigh = high;
      high = mid - 1;
      steps.push({
        low, high, mid,
        discarded: getDiscardedRange(n, low, oldHigh),
        found: -1,
        log: `Value ${arr[mid]} > ${target}. Search focus shifted to Left side (High = ${high})`
      });
    }
  }
  
  if (low > high) {
    steps.push({ low, high, mid: -1, discarded: Array.from({length: n}, (_, i) => i), found: -1, log: `Target not found.` });
  }
  
  visualizerState.steps = steps;
}

// 3. Sliding Window
function generateSlidingWindowSteps(str) {
  const steps = [];
  const chars = str.split("");
  const n = chars.length;
  let left = 0;
  let set = new Set();
  
  steps.push({ left: 0, right: -1, set: new Set(), duplicateIndex: -1, maxLen: 0, log: "Start. Window is empty." });
  
  for (let right = 0; right < n; right++) {
    const char = chars[right];
    if (set.has(char)) {
      steps.push({
        left, right, set: new Set(set), duplicateIndex: right, maxLen: set.size,
        log: `Conflict found! Character "${char}" is already in the window set.`
      });
      while (set.has(char)) {
        set.delete(chars[left]);
        left++;
        steps.push({
          left, right, set: new Set(set), duplicateIndex: right, maxLen: Math.max(set.size, 0),
          log: `Window shrinks from left. Left advances to index ${left}`
        });
      }
    }
    
    set.add(char);
    const currLen = right - left + 1;
    steps.push({
      left, right, set: new Set(set), duplicateIndex: -1, maxLen: currLen,
      log: `Expanded window. Added "${char}". Current window size = ${currLen}`
    });
  }
  
  steps.push({ left, right: n - 1, set: new Set(set), duplicateIndex: -1, maxLen: set.size, log: `Finished. Max unique length = ${set.size}` });
  visualizerState.steps = steps;
}

// 4. Two Pointers
function generateTwoPointersSteps(heights) {
  const steps = [];
  let left = 0;
  let right = heights.length - 1;
  let maxA = 0;
  
  steps.push({ left, right, currentArea: 0, maxArea: 0, log: "Two Pointers loaded. L=0, R=" + right });
  
  while (left < right) {
    const w = right - left;
    const h = Math.min(heights[left], heights[right]);
    const area = h * w;
    maxA = Math.max(maxA, area);
    
    steps.push({
      left, right, currentArea: area, maxArea: maxA,
      log: `Pointers L=${left} (val=${heights[left]}), R=${right} (val=${heights[right]}). Width=${w}, height=${h}. Area=${area}. MaxArea=${maxA}`
    });
    
    if (heights[left] < heights[right]) {
      left++;
      steps.push({ left, right, currentArea: area, maxArea: maxA, log: `Height L (${heights[left-1]}) < R (${heights[right]}). Advance L index to ${left}` });
    } else {
      right--;
      steps.push({ left, right, currentArea: area, maxArea: maxA, log: `Height L (${heights[left]}) >= R (${heights[right+1]}). Retreat R index to ${right}` });
    }
  }
  
  steps.push({ left, right, currentArea: 0, maxArea: maxA, log: `Pointers met. Completed! Max Area found = ${maxA}` });
  visualizerState.steps = steps;
}

// 5. Two Sum II (Sorted Two Pointers)
function generateTwoSumIISteps(numbers, target) {
  const steps = [];
  let left = 0;
  let right = numbers.length - 1;
  
  steps.push({ left, right, sum: 0, found: false, log: `Two Sum II start. Numbers=[${numbers.join(", ")}], Target=${target}` });
  
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    steps.push({
      left, right, sum, found: sum === target,
      log: `Inspecting L=${left} (val=${numbers[left]}), R=${right} (val=${numbers[right]}). Sum = ${sum}`
    });
    
    if (sum === target) {
      steps.push({
        left, right, sum, found: true,
        log: `Target sum reached! sum(${numbers[left]} + ${numbers[right]}) = ${target}. Return indices [${left+1}, ${right+1}]`
      });
      break;
    }
    
    if (sum < target) {
      left++;
      steps.push({ left, right, sum, found: false, log: `Sum ${sum} < ${target}. Left pointer advances to index ${left}` });
    } else {
      right--;
      steps.push({ left, right, sum, found: false, log: `Sum ${sum} > ${target}. Right pointer retreats to index ${right}` });
    }
  }
  
  visualizerState.steps = steps;
}

// 6. Linked List Cycle
function generateLinkedListCycleSteps() {
  const steps = [];
  const path = [0, 1, 2, 3, 4, 5, 2, 3, 4, 5, 2];
  let slowIdx = 0;
  let fastIdx = 0;
  
  steps.push({ slow: path[0], fast: path[0], met: false, log: "Start. Slow and Fast pointers initialized at Node 0." });
  
  for (let it = 1; it <= 9; it++) {
    slowIdx = slowIdx + 1;
    fastIdx = fastIdx + 2;
    const slowNode = path[slowIdx];
    const fastNode = path[fastIdx];
    const met = slowNode === fastNode;
    
    if (met) {
      steps.push({ slow: slowNode, fast: fastNode, met: true, log: `Meeting detected at Node ${slowNode}! Cycle confirmed.` });
      break;
    } else {
      steps.push({ slow: slowNode, fast: fastNode, met: false, log: `Step ${it}: Slow advanced to Node ${slowNode}. Fast advanced to Node ${fastNode}.` });
    }
  }
  visualizerState.steps = steps;
}

// 7. Linked List Cycle II
function generateLinkedListCycleIISteps() {
  const steps = [];
  const path = [0, 1, 2, 3, 4, 5, 2, 3, 4, 5, 2];
  
  let slowIdx = 0;
  let fastIdx = 0;
  steps.push({ phase: 1, slow: path[0], fast: path[0], entry: -1, met: false, log: "Phase 1: Detect cycle. Slow and Fast pointers start at Node 0." });
  
  let metNode = -1;
  for (let it = 1; it <= 10; it++) {
    slowIdx = slowIdx + 1;
    fastIdx = fastIdx + 2;
    const slowNode = path[slowIdx];
    const fastNode = path[fastIdx];
    const met = slowNode === fastNode;
    
    if (met) {
      metNode = slowNode;
      steps.push({ phase: 1, slow: slowNode, fast: fastNode, entry: -1, met: true, log: `Phase 1 met at Node ${slowNode}! Cycle detected. Reseting slow pointer to find cycle start.` });
      break;
    } else {
      steps.push({ phase: 1, slow: slowNode, fast: fastNode, entry: -1, met: false, log: `Slow at Node ${slowNode}. Fast at Node ${fastNode}.` });
    }
  }
  
  let entryIdx = 0;
  steps.push({ phase: 2, slow: metNode, fast: -1, entry: path[entryIdx], met: false, log: "Phase 2: Initialize 'entry' pointer at head (Node 0). Keep 'slow' at meeting Node." });
  
  while (path[entryIdx] !== path[slowIdx]) {
    entryIdx++;
    slowIdx++;
    steps.push({
      phase: 2,
      slow: path[slowIdx],
      fast: -1,
      entry: path[entryIdx],
      met: path[entryIdx] === path[slowIdx],
      log: `Advance both pointers. Entry advances to Node ${path[entryIdx]}. Slow advances to Node ${path[slowIdx]}.`
    });
  }
  
  steps.push({
    phase: 2,
    slow: path[slowIdx],
    fast: -1,
    entry: path[entryIdx],
    met: true,
    log: `Intersection reached! Both pointers meet at Node ${path[entryIdx]}. This is the cycle start node.`
  });
  
  visualizerState.steps = steps;
}

// 8. Monotonic Stack
function generateMonotonicStackSteps(temps) {
  const steps = [];
  const n = temps.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  
  steps.push({ scanning: -1, stack: [], resolved: {}, result: [...ans], log: "Stack initialised." });
  
  for (let i = 0; i < n; i++) {
    steps.push({ scanning: i, stack: [...stack], resolved: {}, result: [...ans], log: `Inspecting temperature index ${i} (${temps[i]}°)` });
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      const poppedIdx = stack.pop();
      ans[poppedIdx] = i - poppedIdx;
      const resolvedMap = {};
      resolvedMap[poppedIdx] = i;
      steps.push({
        scanning: i, stack: [...stack], resolved: resolvedMap, result: [...ans],
        log: `Temp ${temps[i]}° is warmer than stack top ${temps[poppedIdx]}°. Pop index ${poppedIdx}. Days elapsed = ${i - poppedIdx}`
      });
    }
    stack.push(i);
    steps.push({ scanning: i, stack: [...stack], resolved: {}, result: [...ans], log: `Push index ${i} onto stack.` });
  }
  steps.push({ scanning: -1, stack: [...stack], resolved: {}, result: [...ans], log: "Completed scanning. Remainder elements in stack resolve to 0." });
  visualizerState.steps = steps;
}

// 9. Largest Rectangle in Histogram
function generateLargestRectangleSteps(heights) {
  const steps = [];
  const n = heights.length;
  const stack = [];
  let maxArea = 0;
  
  steps.push({ scanning: -1, stack: [], activeRectangle: null, maxArea: 0, log: "Histogram loaded. Stack initialized to empty." });
  
  for (let i = 0; i <= n; i++) {
    const h = (i === n) ? 0 : heights[i];
    steps.push({ scanning: i, stack: [...stack], activeRectangle: null, maxArea, log: `Scanning bar index ${i} (height = ${h}). Stack = [${stack.join(", ")}]` });
    
    while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
      const poppedIdx = stack.pop();
      const height = heights[poppedIdx];
      const width = stack.length === 0 ? i : i - 1 - stack[stack.length - 1];
      const area = height * width;
      maxArea = Math.max(maxArea, area);
      
      const rectStart = stack.length === 0 ? 0 : stack[stack.length - 1] + 1;
      const rectWidth = width;
      const rectHeight = height;
      
      steps.push({
        scanning: i,
        stack: [...stack],
        activeRectangle: { start: rectStart, width: rectWidth, height: rectHeight },
        maxArea,
        log: `Popped index ${poppedIdx} (height ${height}). Computed Width = ${width}. Area = ${height} * ${width} = ${area}. Max Area = ${maxArea}`
      });
    }
    
    if (i < n) {
      stack.push(i);
      steps.push({ scanning: i, stack: [...stack], activeRectangle: null, maxArea, log: `Pushed index ${i} onto stack.` });
    }
  }
  
  steps.push({ scanning: -1, stack: [], activeRectangle: null, maxArea, log: `Histogram scanned. Maximum rectangle area = ${maxArea}` });
  visualizerState.steps = steps;
}

// 10. Binary Tree DFS
function generateTreeSteps(treeArray) {
  const steps = [];
  const traversalOrder = [0, 1, 3, 4, 2, 5, 6];
  
  steps.push({ scanning: -1, visited: [], log: "Tree DFS loaded. Initializing search at root node 0." });
  
  const visited = [];
  for (let i = 0; i < traversalOrder.length; i++) {
    const node = traversalOrder[i];
    steps.push({
      scanning: node,
      visited: [...visited],
      log: `DFS traversing to Node index ${node} (Value = ${treeArray[node]})`
    });
    visited.push(node);
    steps.push({
      scanning: -1,
      visited: [...visited],
      log: `Visited Node index ${node}. Checking child components.`
    });
  }
  steps.push({ scanning: -1, visited: [...visited], log: "DFS complete. Reached maximum depth 3." });
  visualizerState.steps = steps;
}

// 11. Graph BFS
function generateGraphSteps() {
  const steps = [];
  const path = [0, 1, 4, 2, 3];
  
  steps.push({ scanning: -1, visited: [], log: "Graph BFS search initialized. Queue: [0]" });
  
  const visited = [];
  for (let i = 0; i < path.length; i++) {
    const active = path[i];
    steps.push({
      scanning: active,
      visited: [...visited],
      log: `BFS Queue popped. Scanning node ${active}.`
    });
    visited.push(active);
    steps.push({
      scanning: -1,
      visited: [...visited],
      log: `Marked Node ${active} as visited. Adding adjacent nodes to BFS queue.`
    });
  }
  steps.push({ scanning: -1, visited: [...visited], log: "BFS Traversal completed. All nodes reached." });
  visualizerState.steps = steps;
}

// 12. Matrix DP (Unique Paths)
function generateMatrixSteps() {
  const steps = [];
  const m = 3;
  const n = 3;
  const grid = Array.from({length: m}, () => new Array(n).fill(1));
  
  steps.push({
    scanning: null,
    grid: Array.from({length: m}, () => new Array(n).fill(1)),
    log: "Matrix Grid initialized. Base row and column set to 1."
  });
  
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      steps.push({
        scanning: { r, c },
        grid: JSON.parse(JSON.stringify(grid)),
        log: `Computing path for cell (${r}, ${c}). Adding left cell value (${grid[r][c-1]}) and top cell value (${grid[r-1][c]})`
      });
      grid[r][c] = grid[r-1][c] + grid[r][c-1];
      steps.push({
        scanning: null,
        grid: JSON.parse(JSON.stringify(grid)),
        log: `Cell (${r}, ${c}) computed. Value = ${grid[r][c]}`
      });
    }
  }
  
  steps.push({ scanning: null, grid: JSON.parse(JSON.stringify(grid)), log: `Matrix Grid computation complete! Unique paths count = ${grid[2][2]}` });
  visualizerState.steps = steps;
}

// 13. Interval Merges
function generateIntervalsSteps(intervals) {
  const steps = [];
  const n = intervals.length;
  
  steps.push({
    scanning: -1,
    activeInterval: null,
    merged: [],
    log: "Interval elements loaded. Sorting ranges by start times."
  });
  
  const merged = [];
  for (let i = 0; i < n; i++) {
    const current = intervals[i];
    steps.push({
      scanning: i,
      activeInterval: current,
      merged: JSON.parse(JSON.stringify(merged)),
      log: `Inspecting interval [${current[0]}, ${current[1]}].`
    });
    
    if (merged.length === 0 || merged[merged.length - 1][1] < current[0]) {
      merged.push(current);
      steps.push({
        scanning: -1,
        activeInterval: null,
        merged: JSON.parse(JSON.stringify(merged)),
        log: `No overlap detected. Push interval [${current[0]}, ${current[1]}] into merged output.`
      });
    } else {
      const prev = merged[merged.length - 1];
      const prevEnd = prev[1];
      prev[1] = Math.max(prev[1], current[1]);
      steps.push({
        scanning: -1,
        activeInterval: null,
        merged: JSON.parse(JSON.stringify(merged)),
        log: `Overlap found! Interval start ${current[0]} is <= previous end ${prevEnd}. Merge into [${prev[0]}, ${prev[1]}].`
      });
    }
  }
  
  steps.push({ scanning: -1, activeInterval: null, merged: JSON.parse(JSON.stringify(merged)), log: "Interval scanning complete." });
  visualizerState.steps = steps;
}

// 14. Frequency Map Hash Table
function generateHashSteps(elements) {
  const steps = [];
  const map = {};
  
  steps.push({ scanning: null, map: {}, log: "HashMap initialized. Starting word frequency count." });
  
  elements.forEach((word, idx) => {
    steps.push({
      scanning: { word, index: idx },
      map: { ...map },
      log: `Inspecting element ${idx}: "${word}".`
    });
    
    const exist = map[word] !== undefined;
    map[word] = (map[word] || 0) + 1;
    
    steps.push({
      scanning: null,
      map: { ...map },
      log: exist 
        ? `Found duplicate key "${word}". Increment frequency to ${map[word]}.`
        : `New key "${word}" added. Initialize frequency to 1.`
    });
  });
  
  steps.push({ scanning: null, map: { ...map }, log: "Completed building word frequency map." });
  visualizerState.steps = steps;
}

// 15. Bit Shift Register
function generateBitSteps(bits) {
  const steps = [];
  const tempBits = [...bits];
  
  steps.push({ activeIndex: -1, bits: [...tempBits], log: "8-bit register loaded." });
  
  let setBits = 0;
  for (let i = 0; i < tempBits.length; i++) {
    steps.push({
      activeIndex: i,
      bits: [...tempBits],
      log: `Checking bit cell at index ${i} (value = ${tempBits[i]}) via bitwise operation: (bit & 1)`
    });
    
    if (tempBits[i] === 1) {
      setBits++;
      steps.push({
        activeIndex: i,
        bits: [...tempBits],
        log: `Bit is 1! Increment Hamming weight count to ${setBits}.`
      });
    } else {
      steps.push({
        activeIndex: i,
        bits: [...tempBits],
        log: `Bit is 0. Shift bit cursor to next register slot.`
      });
    }
  }
  
  steps.push({ activeIndex: -1, bits: [...tempBits], log: `Bit evaluation completed. Total Hamming Weight = ${setBits}` });
  visualizerState.steps = steps;
}

// 16. Trie Prefix Map
function generateTrieSteps(words) {
  const steps = [];
  // Build trie structure and trace insertions
  const trie = { char: 'ROOT', children: {}, isEnd: false, id: 0 };
  let nodeCounter = 1;
  
  steps.push({ 
    trie: JSON.parse(JSON.stringify(trie)), 
    currentPath: [], 
    currentWord: '',
    insertingChar: '',
    log: 'Trie initialized. Root node created. Ready to insert words.' 
  });
  
  for (const word of words) {
    let node = trie;
    const path = [];
    
    steps.push({ 
      trie: JSON.parse(JSON.stringify(trie)), 
      currentPath: [], 
      currentWord: word,
      insertingChar: '',
      log: `Starting insertion of word: "${word}"` 
    });
    
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      path.push(ch);
      
      if (!node.children[ch]) {
        node.children[ch] = { char: ch, children: {}, isEnd: false, id: nodeCounter++ };
        steps.push({ 
          trie: JSON.parse(JSON.stringify(trie)), 
          currentPath: [...path], 
          currentWord: word,
          insertingChar: ch,
          log: `New node created for char "${ch}" (word: "${word.substring(0, i+1)}")` 
        });
      } else {
        steps.push({ 
          trie: JSON.parse(JSON.stringify(trie)), 
          currentPath: [...path], 
          currentWord: word,
          insertingChar: ch,
          log: `Node for char "${ch}" already exists. Traversing to child...` 
        });
      }
      node = node.children[ch];
    }
    node.isEnd = true;
    steps.push({ 
      trie: JSON.parse(JSON.stringify(trie)), 
      currentPath: [...path], 
      currentWord: word,
      insertingChar: '✓',
      log: `Word "${word}" fully inserted. Marked terminal node (isEnd = true).` 
    });
  }
  
  steps.push({ 
    trie: JSON.parse(JSON.stringify(trie)), 
    currentPath: [], 
    currentWord: '',
    insertingChar: '',
    log: `Trie built! Inserted ${words.length} words. All prefix paths are active.` 
  });
  
  visualizerState.steps = steps;
  visualizerState.trieStructure = trie;
}

// 17. String DP — LCS Alignment Matrix
function generateStringDPSteps(s1, s2) {
  const steps = [];
  const m = s1.length, n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  
  steps.push({
    dp: dp.map(r => [...r]),
    activeCell: null,
    s1, s2,
    log: `LCS DP table initialized (${m+1}×${n+1}). All cells set to 0.`
  });
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      steps.push({
        dp: dp.map(r => [...r]),
        activeCell: { r: i, c: j },
        matchChars: { a: s1[i-1], b: s2[j-1] },
        s1, s2,
        log: `Comparing s1[${i-1}]="${s1[i-1]}" with s2[${j-1}]="${s2[j-1]}"`
      });
      
      const match = s1[i-1] === s2[j-1];
      if (match) {
        dp[i][j] = dp[i-1][j-1] + 1;
        steps.push({
          dp: dp.map(r => [...r]),
          activeCell: { r: i, c: j },
          matchChars: { a: s1[i-1], b: s2[j-1] },
          s1, s2,
          log: `Match! "${s1[i-1]}" == "${s2[j-1]}". dp[${i}][${j}] = dp[${i-1}][${j-1}] + 1 = ${dp[i][j]}`
        });
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        steps.push({
          dp: dp.map(r => [...r]),
          activeCell: { r: i, c: j },
          matchChars: { a: s1[i-1], b: s2[j-1] },
          s1, s2,
          log: `No match. dp[${i}][${j}] = max(dp[${i-1}][${j}], dp[${i}][${j-1}]) = max(${dp[i-1][j]}, ${dp[i][j-1]}) = ${dp[i][j]}`
        });
      }
    }
  }
  
  steps.push({
    dp: dp.map(r => [...r]),
    activeCell: null,
    s1, s2,
    log: `LCS complete! Length = dp[${m}][${n}] = ${dp[m][n]}. The LCS of "${s1}" and "${s2}" has length ${dp[m][n]}.`
  });
  visualizerState.steps = steps;
}

// 18. 1D DP — Climbing Stairs
function generateDP1DSteps(n) {
  const steps = [];
  const dp = new Array(n + 1).fill(0);
  
  steps.push({ dp: [...dp], activeIndex: -1, n, log: `Climbing Stairs initialized. dp array of size ${n+1} created.` });
  
  dp[0] = 1;
  steps.push({ dp: [...dp], activeIndex: 0, n, log: `Base case: dp[0] = 1 (1 way to stay at ground)` });
  
  if (n >= 1) {
    dp[1] = 1;
    steps.push({ dp: [...dp], activeIndex: 1, n, log: `Base case: dp[1] = 1 (only one way to climb 1 stair)` });
  }
  if (n >= 2) {
    dp[2] = 2;
    steps.push({ dp: [...dp], activeIndex: 2, n, log: `Base case: dp[2] = 2 (1+1 or 2 in one jump)` });
  }
  
  for (let i = 3; i <= n; i++) {
    steps.push({ dp: [...dp], activeIndex: i, n, log: `Computing dp[${i}]: dp[${i-1}] (${dp[i-1]}) + dp[${i-2}] (${dp[i-2]})` });
    dp[i] = dp[i-1] + dp[i-2];
    steps.push({ dp: [...dp], activeIndex: i, n, log: `dp[${i}] = ${dp[i]}. This is the Fibonacci recurrence!` });
  }
  
  steps.push({ dp: [...dp], activeIndex: -1, n, log: `Completed! dp[${n}] = ${dp[n]} unique ways to climb ${n} stairs.` });
  visualizerState.steps = steps;
}

// 19. Prefix Sum — Subarray Sum Equals K
function generatePrefixSumSteps(nums, k) {
  const steps = [];
  const prefixMap = { 0: 1 };
  let prefix = 0;
  let count = 0;
  const prefixArr = [0];
  
  steps.push({ 
    nums, prefix: 0, prefixArr: [0], prefixMap: { ...prefixMap }, 
    activeIndex: -1, count, k,
    log: `Prefix Sum init. Map: {0:1} means empty subarray has sum 0.`
  });
  
  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];
    prefixArr.push(prefix);
    
    steps.push({ 
      nums, prefix, prefixArr: [...prefixArr], prefixMap: { ...prefixMap }, 
      activeIndex: i, count, k,
      log: `Index ${i}: nums[${i}]=${nums[i]}. Running prefix = ${prefix}`
    });
    
    const needed = prefix - k;
    if (prefixMap[needed] !== undefined) {
      count += prefixMap[needed];
      steps.push({ 
        nums, prefix, prefixArr: [...prefixArr], prefixMap: { ...prefixMap }, 
        activeIndex: i, count, k,
        log: `Found! prefix - k = ${prefix} - ${k} = ${needed} exists in map (×${prefixMap[needed]}). count → ${count}`
      });
    }
    
    prefixMap[prefix] = (prefixMap[prefix] || 0) + 1;
    steps.push({ 
      nums, prefix, prefixArr: [...prefixArr], prefixMap: { ...prefixMap }, 
      activeIndex: i, count, k,
      log: `Added prefix ${prefix} to map. Map[${prefix}] = ${prefixMap[prefix]}`
    });
  }
  
  steps.push({ 
    nums, prefix, prefixArr: [...prefixArr], prefixMap: { ...prefixMap }, 
    activeIndex: -1, count, k,
    log: `Complete! Found ${count} subarrays with sum = ${k}`
  });
  visualizerState.steps = steps;
}

// 20. Backtracking — N-Queens Board
function generateBacktrackingSteps(n) {
  const steps = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  let solved = false;

  const cloneBoard = () => board.map(row => [...row]);

  function backtrack(row) {
    if (row === n) {
      steps.push({ board: cloneBoard(), active: null, conflict: null, row, status: 'solved', log: "Success! One valid N-Queens placement is complete." });
      solved = true;
      return true;
    }

    for (let col = 0; col < n; col++) {
      const blocked = cols.has(col) || diag1.has(row - col) || diag2.has(row + col);
      steps.push({
        board: cloneBoard(),
        active: { r: row, c: col },
        conflict: blocked ? { r: row, c: col } : null,
        row,
        status: blocked ? 'reject' : 'try',
        log: blocked ? `Conflict at row ${row}, col ${col}. Try next column.` : `Trying queen at row ${row}, col ${col}.`
      });

      if (blocked) continue;

      board[row][col] = 'Q';
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);
      steps.push({ board: cloneBoard(), active: { r: row, c: col }, conflict: null, row, status: 'place', log: `Placed queen at (${row}, ${col}). Move to row ${row + 1}.` });

      if (backtrack(row + 1)) return true;

      board[row][col] = '.';
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
      steps.push({ board: cloneBoard(), active: { r: row, c: col }, conflict: null, row, status: 'backtrack', log: `Backtrack from (${row}, ${col}). Remove queen and continue.` });
    }

    return false;
  }

  steps.push({ board: cloneBoard(), active: null, conflict: null, row: 0, status: 'start', log: "Start from row 0. Place one queen per row." });
  backtrack(0);
  if (!solved) steps.push({ board: cloneBoard(), active: null, conflict: null, row: n, status: 'failed', log: "No valid placement found." });
  visualizerState.steps = steps;
}

// 21. Union-Find Components
function generateUnionFindSteps(n, edges) {
  const steps = [];
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);

  const find = (x) => {
    const path = [];
    let curr = x;
    while (parent[curr] !== curr) {
      path.push(curr);
      curr = parent[curr];
    }
    
    path.forEach(node => {
      if (parent[node] !== curr) {
        parent[node] = curr;
        steps.push({
          parent: [...parent],
          rank: [...rank],
          edge: null,
          roots: [node, curr],
          compressed: true,
          log: `Path Compression: Re-linked node ${node} parent directly to root ${curr}.`
        });
      }
    });
    return curr;
  };

  steps.push({ parent: [...parent], rank: [...rank], edge: null, roots: [], merged: false, log: "Union-Find initialized. Every node starts as its own parent." });

  edges.forEach(([a, b]) => {
    const rootA = find(a);
    const rootB = find(b);
    steps.push({ parent: [...parent], rank: [...rank], edge: [a, b], roots: [rootA, rootB], merged: false, log: `Inspecting edge ${a}-${b}. Roots are ${rootA} and ${rootB}.` });

    if (rootA === rootB) {
      steps.push({ parent: [...parent], rank: [...rank], edge: [a, b], roots: [rootA, rootB], merged: false, log: `Nodes ${a} and ${b} already share root ${rootA}. Skip union.` });
      return;
    }

    if (rank[rootA] < rank[rootB]) {
      parent[rootA] = rootB;
    } else if (rank[rootA] > rank[rootB]) {
      parent[rootB] = rootA;
    } else {
      parent[rootB] = rootA;
      rank[rootA]++;
    }

    steps.push({ parent: [...parent], rank: [...rank], edge: [a, b], roots: [find(a), find(b)], merged: true, log: `Union complete. Components connected through edge ${a}-${b}.` });
  });

  steps.push({ parent: [...parent], rank: [...rank], edge: null, roots: [], merged: true, log: "Union-Find pass complete. Parent array shows final components." });
  visualizerState.steps = steps;
}

// 22. Segment Tree Build + Range Query
function generateSegmentTreeSteps(nums, ql, qr) {
  const steps = [];
  const tree = new Array(nums.length * 4).fill(null);
  const ranges = {};

  function build(node, l, r) {
    ranges[node] = [l, r];
    steps.push({ nums, tree: [...tree], ranges: { ...ranges }, activeNode: node, queryRange: null, result: 0, covered: [], log: `Build node ${node} for range [${l}, ${r}].` });
    if (l === r) {
      tree[node] = nums[l];
      steps.push({ nums, tree: [...tree], ranges: { ...ranges }, activeNode: node, queryRange: null, result: 0, covered: [], log: `Leaf node ${node} stores nums[${l}] = ${nums[l]}.` });
      return tree[node];
    }
    const mid = Math.floor((l + r) / 2);
    const left = build(node * 2, l, mid);
    const right = build(node * 2 + 1, mid + 1, r);
    tree[node] = left + right;
    steps.push({ nums, tree: [...tree], ranges: { ...ranges }, activeNode: node, queryRange: null, result: 0, covered: [], log: `Node ${node} combines children: ${left} + ${right} = ${tree[node]}.` });
    return tree[node];
  }

  let result = 0;
  const covered = [];
  function query(node, l, r) {
    steps.push({ nums, tree: [...tree], ranges: { ...ranges }, activeNode: node, queryRange: [ql, qr], result, covered: [...covered], log: `Query visits node ${node} range [${l}, ${r}].` });
    if (qr < l || r < ql) {
      steps.push({ nums, tree: [...tree], ranges: { ...ranges }, activeNode: node, queryRange: [ql, qr], result, covered: [...covered], log: `Range [${l}, ${r}] is outside [${ql}, ${qr}]. Return 0.` });
      return 0;
    }
    if (ql <= l && r <= qr) {
      result += tree[node];
      covered.push(node);
      steps.push({ nums, tree: [...tree], ranges: { ...ranges }, activeNode: node, queryRange: [ql, qr], result, covered: [...covered], log: `Range [${l}, ${r}] fully covered. Add tree[${node}] = ${tree[node]}.` });
      return tree[node];
    }
    const mid = Math.floor((l + r) / 2);
    return query(node * 2, l, mid) + query(node * 2 + 1, mid + 1, r);
  }

  steps.push({ nums, tree: [...tree], ranges: {}, activeNode: null, queryRange: null, result: 0, covered: [], log: "Segment tree initialized. Start recursive build." });
  build(1, 0, nums.length - 1);
  query(1, 0, nums.length - 1);
  steps.push({ nums, tree: [...tree], ranges: { ...ranges }, activeNode: null, queryRange: [ql, qr], result, covered: [...covered], log: `Query complete. Sum for [${ql}, ${qr}] = ${result}.` });
  visualizerState.steps = steps;
}

// 23. Greedy Interval Selection
function generateGreedySteps(intervals) {
  const sorted = intervals
    .map((interval, idx) => ({ ...interval, originalIndex: idx }))
    .sort((a, b) => a.end - b.end || a.start - b.start);
  const steps = [];
  const selected = [];
  let lastEnd = -Infinity;

  steps.push({ intervals: sorted, scanning: -1, selected: [], rejected: [], lastEnd, log: "Sort intervals by earliest finish time." });

  sorted.forEach((interval, idx) => {
    const canTake = interval.start >= lastEnd;
    steps.push({ intervals: sorted, scanning: idx, selected: [...selected], rejected: canTake ? [] : [idx], lastEnd, log: `Inspect [${interval.start}, ${interval.end}]. Current lastEnd = ${lastEnd === -Infinity ? '-inf' : lastEnd}.` });

    if (canTake) {
      selected.push(idx);
      lastEnd = interval.end;
      steps.push({ intervals: sorted, scanning: idx, selected: [...selected], rejected: [], lastEnd, log: `Selected [${interval.start}, ${interval.end}]. Update lastEnd to ${lastEnd}.` });
    } else {
      steps.push({ intervals: sorted, scanning: idx, selected: [...selected], rejected: [idx], lastEnd, log: `Overlap detected. Reject [${interval.start}, ${interval.end}].` });
    }
  });

  steps.push({ intervals: sorted, scanning: -1, selected: [...selected], rejected: [], lastEnd, log: `Greedy complete. Selected ${selected.length} compatible intervals.` });
  visualizerState.steps = steps;
}

// 24. Edit Distance DP Matrix
function generateEditDistanceSteps(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  const steps = [];

  steps.push({ dp: dp.map(row => [...row]), activeCell: null, s1, s2, operation: 'init', log: `Edit Distance initialized for "${s1}" -> "${s2}".` });

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
    steps.push({ dp: dp.map(row => [...row]), activeCell: { r: i, c: 0 }, s1, s2, operation: 'delete', log: `Base case dp[${i}][0] = ${i}: delete ${i} character(s).` });
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
    steps.push({ dp: dp.map(row => [...row]), activeCell: { r: 0, c: j }, s1, s2, operation: 'insert', log: `Base case dp[0][${j}] = ${j}: insert ${j} character(s).` });
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
        steps.push({ dp: dp.map(row => [...row]), activeCell: { r: i, c: j }, s1, s2, operation: 'match', log: `Match '${s1[i - 1]}'. Carry diagonal dp[${i - 1}][${j - 1}] = ${dp[i][j]}.` });
      } else {
        const del = dp[i - 1][j];
        const ins = dp[i][j - 1];
        const rep = dp[i - 1][j - 1];
        dp[i][j] = 1 + Math.min(del, ins, rep);
        steps.push({ dp: dp.map(row => [...row]), activeCell: { r: i, c: j }, s1, s2, operation: 'edit', log: `Edit '${s1[i - 1]}' vs '${s2[j - 1]}': 1 + min(delete ${del}, insert ${ins}, replace ${rep}) = ${dp[i][j]}.` });
      }
    }
  }

  steps.push({ dp: dp.map(row => [...row]), activeCell: null, s1, s2, operation: 'done', log: `Edit Distance complete. Minimum operations = ${dp[m][n]}.` });
  visualizerState.steps = steps;
}

// 25. Heap / Priority Queue
function generateHeapSteps(nums) {
  const steps = [];
  const heap = [];
  const snapshot = (active, log) => steps.push({ heap: [...heap], active: active || [], log });
  const swap = (i, j) => {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  };

  snapshot([], "Min-heap starts empty.");
  nums.forEach(value => {
    heap.push(value);
    let i = heap.length - 1;
    snapshot([i], `Inserted ${value}. Sift up from index ${i}.`);
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      snapshot([i, parent], `Compare child ${heap[i]} with parent ${heap[parent]}.`);
      if (heap[parent] <= heap[i]) break;
      swap(parent, i);
      snapshot([i, parent], `Swap to restore heap order.`);
      i = parent;
    }
  });

  const min = heap[0];
  swap(0, heap.length - 1);
  heap.pop();
  snapshot([0], `Extracted min ${min}. Move last value to root and sift down.`);
  let i = 0;
  while (true) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let smallest = i;
    if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
    if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
    if (smallest === i) break;
    snapshot([i, smallest], `Swap ${heap[i]} with smaller child ${heap[smallest]}.`);
    swap(i, smallest);
    snapshot([i, smallest], `Heap order restored locally.`);
    i = smallest;
  }
  snapshot([], `Heap complete after one extract-min.`);
  visualizerState.steps = steps;
}

// 26. Dijkstra Shortest Path
function generateDijkstraSteps() {
  const edges = [
    [0, 1, 4], [0, 2, 1], [2, 1, 2], [1, 3, 1], [2, 3, 5], [3, 4, 3]
  ];
  const graph = Array.from({ length: 5 }, () => []);
  edges.forEach(([u, v, w]) => graph[u].push([v, w]));
  const dist = [0, Infinity, Infinity, Infinity, Infinity];
  const visited = new Set();
  const pq = [[0, 0]];
  const steps = [{ edges, dist: [...dist], visited: [], active: null, pq: [...pq], log: "Source A distance is 0. Push A into min-heap." }];

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift();
    if (visited.has(u)) continue;
    visited.add(u);
    steps.push({ edges, dist: [...dist], visited: [...visited], active: { node: u }, pq: [...pq], log: `Visit node ${String.fromCharCode(65 + u)} with settled distance ${d}.` });
    graph[u].forEach(([v, w]) => {
      steps.push({ edges, dist: [...dist], visited: [...visited], active: { edge: [u, v] }, pq: [...pq], log: `Relax edge ${String.fromCharCode(65 + u)} -> ${String.fromCharCode(65 + v)} with weight ${w}.` });
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        pq.push([dist[v], v]);
        steps.push({ edges, dist: [...dist], visited: [...visited], active: { node: v, edge: [u, v] }, pq: [...pq], log: `Updated ${String.fromCharCode(65 + v)} distance to ${dist[v]}.` });
      }
    });
  }
  steps.push({ edges, dist: [...dist], visited: [...visited], active: null, pq: [], log: "Dijkstra complete. All reachable shortest paths are settled." });
  visualizerState.steps = steps;
}

// 27. Topological Sort
function generateTopoSortSteps() {
  const edges = [[0, 2], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5]];
  const n = 6;
  const graph = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);
  edges.forEach(([u, v]) => { graph[u].push(v); indegree[v]++; });
  const queue = [];
  indegree.forEach((deg, idx) => { if (deg === 0) queue.push(idx); });
  const order = [];
  const steps = [{ edges, indegree: [...indegree], queue: [...queue], order: [], active: null, log: "Queue starts with all zero in-degree nodes." }];

  while (queue.length) {
    const u = queue.shift();
    order.push(u);
    steps.push({ edges, indegree: [...indegree], queue: [...queue], order: [...order], active: u, log: `Pop course ${u}. Add it to topological order.` });
    graph[u].forEach(v => {
      indegree[v]--;
      if (indegree[v] === 0) queue.push(v);
      steps.push({ edges, indegree: [...indegree], queue: [...queue], order: [...order], active: v, log: `Remove edge ${u}->${v}. In-degree[${v}] is now ${indegree[v]}.` });
    });
  }
  steps.push({ edges, indegree: [...indegree], queue: [], order: [...order], active: null, log: `Topological order complete: ${order.join(" -> ")}.` });
  visualizerState.steps = steps;
}

// 28. 0/1 Knapsack
function generateKnapsackSteps(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
  const steps = [{ dp: dp.map(r => [...r]), weights, values, capacity, activeCell: null, log: "Knapsack table initialized. Rows are items, columns are capacity." }];
  for (let i = 1; i <= n; i++) {
    for (let cap = 0; cap <= capacity; cap++) {
      const skip = dp[i - 1][cap];
      let take = -Infinity;
      if (weights[i - 1] <= cap) take = values[i - 1] + dp[i - 1][cap - weights[i - 1]];
      dp[i][cap] = Math.max(skip, take);
      const action = take > skip ? "take" : "skip";
      steps.push({ dp: dp.map(r => [...r]), weights, values, capacity, activeCell: { r: i, c: cap }, action, log: `Item ${i} (w=${weights[i - 1]}, v=${values[i - 1]}), cap ${cap}: ${action} -> ${dp[i][cap]}.` });
    }
  }
  steps.push({ dp: dp.map(r => [...r]), weights, values, capacity, activeCell: null, action: 'done', log: `Knapsack complete. Best value = ${dp[n][capacity]}.` });
  visualizerState.steps = steps;
}

// 29. KMP String Matching
function generateKMPSteps(text, pattern) {
  const steps = [];
  const lps = new Array(pattern.length).fill(0);
  let len = 0;
  steps.push({ phase: 'lps', text, pattern, lps: [...lps], i: 1, j: 0, matchedAt: -1, log: "Build LPS array for pattern." });
  for (let i = 1; i < pattern.length;) {
    if (pattern[i] === pattern[len]) {
      lps[i] = ++len;
      steps.push({ phase: 'lps', text, pattern, lps: [...lps], i, j: len - 1, matchedAt: -1, log: `LPS match at pattern[${i}]. lps[${i}] = ${lps[i]}.` });
      i++;
    } else if (len > 0) {
      len = lps[len - 1];
      steps.push({ phase: 'lps', text, pattern, lps: [...lps], i, j: len, matchedAt: -1, log: `Fallback len to ${len}.` });
    } else {
      steps.push({ phase: 'lps', text, pattern, lps: [...lps], i, j: 0, matchedAt: -1, log: `No prefix match for pattern[${i}]. lps[${i}] remains 0.` });
      i++;
    }
  }

  let i = 0, j = 0;
  while (i < text.length) {
    steps.push({ phase: 'scan', text, pattern, lps: [...lps], i, j, matchedAt: -1, log: `Compare text[${i}] '${text[i]}' with pattern[${j}] '${pattern[j]}'.` });
    if (text[i] === pattern[j]) {
      i++; j++;
      if (j === pattern.length) {
        steps.push({ phase: 'scan', text, pattern, lps: [...lps], i: i - 1, j: j - 1, matchedAt: i - j, log: `Pattern found at index ${i - j}.` });
        break;
      }
    } else if (j > 0) {
      j = lps[j - 1];
      steps.push({ phase: 'scan', text, pattern, lps: [...lps], i, j, matchedAt: -1, log: `Mismatch. Jump pattern pointer to ${j} using LPS.` });
    } else {
      i++;
    }
  }
  visualizerState.steps = steps;
}

// 30. Fenwick Tree / BIT
function generateFenwickSteps(nums) {
  const n = nums.length;
  const bit = new Array(n + 1).fill(0);
  const steps = [{ nums, bit: [...bit], active: [], mode: 'init', total: 0, log: "Fenwick tree starts empty. Use 1-based indexes." }];
  nums.forEach((value, idx) => {
    for (let i = idx + 1; i <= n; i += i & -i) {
      bit[i] += value;
      steps.push({ nums, bit: [...bit], active: [i], mode: 'update', total: 0, log: `Add nums[${idx}] = ${value} to BIT[${i}]. Next i += lowbit(i).` });
    }
  });
  let total = 0;
  for (let i = 5; i > 0; i -= i & -i) {
    total += bit[i];
    steps.push({ nums, bit: [...bit], active: [i], mode: 'query', total, log: `Prefix query at i=${i}. Add BIT[${i}], running sum = ${total}.` });
  }
  steps.push({ nums, bit: [...bit], active: [], mode: 'done', total, log: `Fenwick prefix sum(5) = ${total}.` });
  visualizerState.steps = steps;
}

// 31. Bellman-Ford
function generateBellmanFordSteps() {
  const n = 5;
  const edges = [[0, 1, 6], [0, 2, 7], [1, 3, 5], [1, 2, 8], [2, 3, -3], [3, 4, 2], [4, 1, -2]];
  const dist = [0, Infinity, Infinity, Infinity, Infinity];
  const steps = [{ edges, dist: [...dist], activeEdge: null, pass: 0, log: "Bellman-Ford starts from source A." }];
  for (let pass = 1; pass < n; pass++) {
    edges.forEach(([u, v, w]) => {
      steps.push({ edges, dist: [...dist], activeEdge: [u, v], pass, log: `Pass ${pass}: test edge ${String.fromCharCode(65 + u)}->${String.fromCharCode(65 + v)} (${w}).` });
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        steps.push({ edges, dist: [...dist], activeEdge: [u, v], pass, log: `Relaxed ${String.fromCharCode(65 + v)} to ${dist[v]}.` });
      }
    });
  }
  steps.push({ edges, dist: [...dist], activeEdge: null, pass: n - 1, log: "Bellman-Ford complete after V-1 passes." });
  visualizerState.steps = steps;
}

// 32. Floyd-Warshall
function generateFloydWarshallSteps() {
  const inf = Infinity;
  const dist = [
    [0, 3, inf, 7],
    [8, 0, 2, inf],
    [5, inf, 0, 1],
    [2, inf, inf, 0]
  ];
  const steps = [{ dist: dist.map(r => [...r]), activeCell: null, k: -1, log: "Floyd-Warshall matrix initialized." }];
  for (let k = 0; k < dist.length; k++) {
    for (let i = 0; i < dist.length; i++) {
      for (let j = 0; j < dist.length; j++) {
        const via = dist[i][k] + dist[k][j];
        if (via < dist[i][j]) {
          dist[i][j] = via;
          steps.push({ dist: dist.map(r => [...r]), activeCell: { r: i, c: j }, k, log: `Use ${String.fromCharCode(65 + k)} as intermediate: dist[${i}][${j}] becomes ${via}.` });
        } else {
          steps.push({ dist: dist.map(r => [...r]), activeCell: { r: i, c: j }, k, log: `Check path ${i}->${k}->${j}. No improvement.` });
        }
      }
    }
  }
  steps.push({ dist: dist.map(r => [...r]), activeCell: null, k: dist.length, log: "Floyd-Warshall complete. Matrix stores all-pairs shortest paths." });
  visualizerState.steps = steps;
}

// 33. Quick Sort Partition
function generateQuickSortSteps(nums) {
  const arr = [...nums];
  const steps = [];
  const lo = 0;
  const hi = arr.length - 1;
  const pivot = arr[hi];
  let i = lo;
  steps.push({ array: [...arr], i, j: lo, pivot: hi, sorted: [], log: `Partition start. Pivot = ${pivot} at index ${hi}.` });
  for (let j = lo; j < hi; j++) {
    steps.push({ array: [...arr], i, j, pivot: hi, sorted: [], log: `Compare arr[${j}] = ${arr[j]} with pivot ${pivot}.` });
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      steps.push({ array: [...arr], i, j, pivot: hi, sorted: [], log: `Swap into smaller partition. i moves from ${i} to ${i + 1}.` });
      i++;
    }
  }
  [arr[i], arr[hi]] = [arr[hi], arr[i]];
  steps.push({ array: [...arr], i, j: hi, pivot: i, sorted: [i], log: `Place pivot at final index ${i}.` });
  visualizerState.steps = steps;
}

// Recursive Quick Sort full step generator
function generateQuickSortFullSteps() {
  const steps = [];
  const initialArr = [4, 2, 1, 3];
  
  steps.push({
    array: [...initialArr],
    pivotIdx: -1,
    left: 0,
    right: 3,
    sorted: [],
    log: "Initial array loaded. Starting recursive Quick Sort."
  });
  
  // Hardcoded steps for simplicity of [4, 2, 1, 3] Lomuto trace
  // 1. Partition [0, 3], pivot value = 3, pivotIdx = 3
  steps.push({
    array: [4, 2, 1, 3],
    pivotIdx: 3,
    left: 0,
    right: 3,
    sorted: [],
    log: "Partition subarray [0, 3]. Pivot value is 3."
  });
  // Compare 4 with 3 -> greater
  // Compare 2 with 3 -> smaller, swap with 4 -> [2, 4, 1, 3]
  steps.push({
    array: [2, 4, 1, 3],
    pivotIdx: 3,
    left: 0,
    right: 3,
    sorted: [],
    log: "Swap 2 into smaller partition. Array becomes [2, 4, 1, 3]."
  });
  // Compare 1 with 3 -> smaller, swap with 4 -> [2, 1, 4, 3]
  steps.push({
    array: [2, 1, 4, 3],
    pivotIdx: 3,
    left: 0,
    right: 3,
    sorted: [],
    log: "Swap 1 into smaller partition. Array becomes [2, 1, 4, 3]."
  });
  // Swap pivot with 4 -> [2, 1, 3, 4]
  steps.push({
    array: [2, 1, 3, 4],
    pivotIdx: 2,
    left: 0,
    right: 3,
    sorted: [2],
    log: "Place pivot 3 at final sorted index 2. Pivot is now locked."
  });
  
  // 2. Recursively partition left half [0, 1], pivot value = 1, pivotIdx = 1
  steps.push({
    array: [2, 1, 3, 4],
    pivotIdx: 1,
    left: 0,
    right: 1,
    sorted: [2],
    log: "Recurse on left subarray [0, 1]. Pivot is 1."
  });
  // Swap pivot 1 with 2 -> [1, 2, 3, 4]
  steps.push({
    array: [1, 2, 3, 4],
    pivotIdx: 0,
    left: 0,
    right: 1,
    sorted: [0, 2],
    log: "Place pivot 1 at final index 0. Locked."
  });
  
  // 3. Right half [3, 3] is single element, sorted
  steps.push({
    array: [1, 2, 3, 4],
    pivotIdx: -1,
    left: -1,
    right: -1,
    sorted: [0, 1, 2, 3],
    log: "All partition recursions complete. Array is fully sorted."
  });
  
  visualizerState.steps = steps;
}

// Recursive Merge Sort step generator
function generateMergeSortSteps() {
  const steps = [];
  const initialArr = [4, 2, 1, 3];
  
  steps.push({
    array: [...initialArr],
    splitL: -1,
    splitR: -1,
    merging: false,
    left: -1,
    mid: -1,
    right: -1,
    log: "Initial array loaded. Starting recursive Merge Sort."
  });
  
  // Divide phase
  steps.push({
    array: [4, 2, 1, 3],
    splitL: 0,
    splitR: 1,
    merging: false,
    left: 0,
    mid: 0,
    right: 1,
    log: "Split left half: [4, 2]."
  });
  steps.push({
    array: [4, 2, 1, 3],
    splitL: 2,
    splitR: 3,
    merging: false,
    left: 2,
    mid: 2,
    right: 3,
    log: "Split right half: [1, 3]."
  });
  
  // Merge left half: [4] and [2] -> [2, 4]
  steps.push({
    array: [4, 2, 1, 3],
    splitL: -1,
    splitR: -1,
    merging: true,
    left: 0,
    mid: 0,
    right: 1,
    log: "Merge [4] and [2] into sorted subarray."
  });
  steps.push({
    array: [2, 4, 1, 3],
    splitL: -1,
    splitR: -1,
    merging: true,
    left: 0,
    mid: 0,
    right: 1,
    log: "Merged: [2, 4]."
  });
  
  // Merge right half: [1] and [3] -> [1, 3]
  steps.push({
    array: [2, 4, 1, 3],
    splitL: -1,
    splitR: -1,
    merging: true,
    left: 2,
    mid: 2,
    right: 3,
    log: "Merge [1] and [3] into sorted subarray."
  });
  
  // Final merge: [2, 4] and [1, 3] -> [1, 2, 3, 4]
  steps.push({
    array: [2, 4, 1, 3],
    splitL: -1,
    splitR: -1,
    merging: true,
    left: 0,
    mid: 1,
    right: 3,
    log: "Merge sorted halves: [2, 4] and [1, 3]."
  });
  steps.push({
    array: [1, 2, 3, 4],
    splitL: -1,
    splitR: -1,
    merging: true,
    left: 0,
    mid: 1,
    right: 3,
    log: "Final merged array fully sorted."
  });
  
  visualizerState.steps = steps;
}

// Insertion Sort step generator
function generateInsertionSortSteps() {
  const steps = [];
  const arr = [5, 2, 4, 6, 1, 3];
  
  steps.push({
    array: [...arr],
    activeIdx: -1,
    compareIdx: -1,
    sortedCount: 1,
    log: "Insertion Sort started. Initial subarray index 0 is trivially sorted."
  });
  
  // Step-by-step trace
  // 1. Insert 2
  steps.push({
    array: [...arr],
    activeIdx: 1,
    compareIdx: 0,
    sortedCount: 1,
    log: "Compare element 2 at index 1 with sorted left element 5."
  });
  steps.push({
    array: [2, 5, 4, 6, 1, 3],
    activeIdx: 0,
    compareIdx: -1,
    sortedCount: 2,
    log: "Shift 5 right and insert 2. Sorted portion is now [2, 5]."
  });
  
  // 2. Insert 4
  steps.push({
    array: [2, 5, 4, 6, 1, 3],
    activeIdx: 2,
    compareIdx: 1,
    sortedCount: 2,
    log: "Compare element 4 at index 2 with sorted left element 5."
  });
  steps.push({
    array: [2, 4, 5, 6, 1, 3],
    activeIdx: 1,
    compareIdx: -1,
    sortedCount: 3,
    log: "Shift 5 right and insert 4. Sorted portion is now [2, 4, 5]."
  });
  
  // 3. Insert 6
  steps.push({
    array: [2, 4, 5, 6, 1, 3],
    activeIdx: 3,
    compareIdx: 2,
    sortedCount: 3,
    log: "Compare element 6 at index 3 with sorted left element 5. Greater, no shift needed."
  });
  steps.push({
    array: [2, 4, 5, 6, 1, 3],
    activeIdx: 3,
    compareIdx: -1,
    sortedCount: 4,
    log: "Commit 6 at index 3. Sorted portion is now [2, 4, 5, 6]."
  });
  
  // 4. Insert 1
  steps.push({
    array: [2, 4, 5, 6, 1, 3],
    activeIdx: 4,
    compareIdx: 3,
    sortedCount: 4,
    log: "Compare element 1 with sorted left elements."
  });
  steps.push({
    array: [1, 2, 4, 5, 6, 3],
    activeIdx: 0,
    compareIdx: -1,
    sortedCount: 5,
    log: "Shift sorted elements right and insert 1 at index 0."
  });
  
  // 5. Insert 3
  steps.push({
    array: [1, 2, 4, 5, 6, 3],
    activeIdx: 5,
    compareIdx: 4,
    sortedCount: 5,
    log: "Compare element 3 with sorted left elements."
  });
  steps.push({
    array: [1, 2, 3, 4, 5, 6],
    activeIdx: 2,
    compareIdx: -1,
    sortedCount: 6,
    log: "Shift sorted elements and insert 3 at index 2. Sorting complete!"
  });
  
  visualizerState.steps = steps;
}


// 34. BFS Grid Shortest Path
function generateBFSGridSteps() {
  const grid = [
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
  ];
  const rows = grid.length, cols = grid[0].length;
  const dist = Array.from({ length: rows }, () => Array(cols).fill(-1));
  const q = [[0, 0]];
  dist[0][0] = 0;
  const steps = [{ grid, dist: dist.map(r => [...r]), active: [0, 0], queue: [...q], target: [4, 4], log: "BFS starts from top-left cell." }];
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  while (q.length) {
    const [r, c] = q.shift();
    steps.push({ grid, dist: dist.map(row => [...row]), active: [r, c], queue: [...q], target: [4, 4], log: `Visit cell (${r}, ${c}) at distance ${dist[r][c]}.` });
    if (r === 4 && c === 4) break;
    dirs.forEach(([dr, dc]) => {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] === 1 || dist[nr][nc] !== -1) return;
      dist[nr][nc] = dist[r][c] + 1;
      q.push([nr, nc]);
      steps.push({ grid, dist: dist.map(row => [...row]), active: [nr, nc], queue: [...q], target: [4, 4], log: `Enqueue (${nr}, ${nc}) with distance ${dist[nr][nc]}.` });
    });
  }
  steps.push({ grid, dist: dist.map(row => [...row]), active: [4, 4], queue: [], target: [4, 4], log: `Shortest path distance = ${dist[4][4]}.` });
  visualizerState.steps = steps;
}

// 35. LRU Cache
function generateLRUCacheSteps() {
  const capacity = 3;
  const ops = [['put', 1, 'A'], ['put', 2, 'B'], ['put', 3, 'C'], ['get', 1], ['put', 4, 'D'], ['get', 2], ['put', 5, 'E']];
  const map = new Map();
  const order = [];
  const steps = [{ capacity, map: {}, order: [], active: null, evicted: null, log: "LRU cache starts empty. Left is most recent." }];
  const touch = key => {
    const idx = order.indexOf(key);
    if (idx !== -1) order.splice(idx, 1);
    order.unshift(key);
  };
  ops.forEach(op => {
    let evicted = null;
    if (op[0] === 'put') {
      map.set(op[1], op[2]);
      touch(op[1]);
      if (order.length > capacity) {
        evicted = order.pop();
        map.delete(evicted);
      }
      steps.push({ capacity, map: Object.fromEntries(map), order: [...order], active: op[1], evicted, log: evicted ? `put(${op[1]}) evicts least recent key ${evicted}.` : `put(${op[1]}) moves key to most recent.` });
    } else {
      const hit = map.has(op[1]);
      if (hit) touch(op[1]);
      steps.push({ capacity, map: Object.fromEntries(map), order: [...order], active: op[1], evicted: null, log: hit ? `get(${op[1]}) hit. Move key to front.` : `get(${op[1]}) miss.` });
    }
  });
  visualizerState.steps = steps;
}

// 36. Sliding Window Maximum
function generateSlidingMaxSteps(nums, k) {
  const dq = [];
  const out = [];
  const steps = [{ nums, k, dq: [], out: [], r: -1, log: "Deque stores indices in decreasing value order." }];
  for (let r = 0; r < nums.length; r++) {
    while (dq.length && nums[dq[dq.length - 1]] <= nums[r]) dq.pop();
    dq.push(r);
    if (dq[0] <= r - k) dq.shift();
    if (r >= k - 1) out.push(nums[dq[0]]);
    steps.push({ nums, k, dq: [...dq], out: [...out], r, log: `Window ending at ${r}. Current max = ${r >= k - 1 ? nums[dq[0]] : 'waiting'}.` });
  }
  visualizerState.steps = steps;
}

// 37. Coin Change DP
function generateCoinChangeSteps(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  const steps = [{ coins, amount, dp: [...dp], active: -1, coin: null, log: "dp[0] = 0. Other amounts start as infinity." }];
  for (let a = 1; a <= amount; a++) {
    coins.forEach(coin => {
      if (a >= coin && dp[a - coin] !== Infinity) dp[a] = Math.min(dp[a], dp[a - coin] + 1);
      steps.push({ coins, amount, dp: [...dp], active: a, coin, log: `Amount ${a}, coin ${coin}: dp[${a}] = ${dp[a] === Infinity ? '∞' : dp[a]}.` });
    });
  }
  steps.push({ coins, amount, dp: [...dp], active: amount, coin: null, log: `Minimum coins for ${amount} = ${dp[amount]}.` });
  visualizerState.steps = steps;
}

// 38. Kruskal MST
function generateKruskalSteps() {
  const edges = [
    { u: 0, v: 1, w: 4 }, { u: 0, v: 2, w: 3 }, { u: 1, v: 2, w: 1 },
    { u: 1, v: 3, w: 2 }, { u: 2, v: 3, w: 4 }, { u: 3, v: 4, w: 2 }
  ].sort((a, b) => a.w - b.w);
  const parent = [0, 1, 2, 3, 4];
  const mst = [];
  const find = x => parent[x] === x ? x : find(parent[x]);
  const steps = [{ edges, parent: [...parent], mst: [], activeEdge: null, log: "Sort edges by weight. Start MST empty." }];
  edges.forEach(edge => {
    const ru = find(edge.u), rv = find(edge.v);
    steps.push({ edges, parent: [...parent], mst: [...mst], activeEdge: edge, log: `Check edge ${edge.u}-${edge.v} weight ${edge.w}. Roots ${ru}, ${rv}.` });
    if (ru !== rv) {
      parent[rv] = ru;
      mst.push(edge);
      steps.push({ edges, parent: [...parent], mst: [...mst], activeEdge: edge, log: `Accept edge ${edge.u}-${edge.v}. Add to MST.` });
    } else {
      steps.push({ edges, parent: [...parent], mst: [...mst], activeEdge: edge, log: `Reject edge ${edge.u}-${edge.v}; it forms a cycle.` });
    }
  });
  visualizerState.steps = steps;
}

// 39. Median Finder
function generateMedianFinderSteps(nums) {
  const small = [];
  const large = [];
  const steps = [{ small: [], large: [], active: null, median: null, log: "Two heaps start empty: lower half and upper half." }];
  nums.forEach(num => {
    small.push(num);
    small.sort((a, b) => b - a);
    large.push(small.shift());
    large.sort((a, b) => a - b);
    if (large.length > small.length) {
      small.push(large.shift());
      small.sort((a, b) => b - a);
    }
    const median = small.length > large.length ? small[0] : (small[0] + large[0]) / 2;
    steps.push({ small: [...small], large: [...large], active: num, median, log: `Insert ${num}. Rebalance heaps. Median = ${median}.` });
  });
  visualizerState.steps = steps;
}

// 40. Sudoku Solver
function generateSudokuSteps() {
  const board = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
  ];
  
  const steps = [];
  steps.push({
    board: board.map(r => [...r]),
    active: null,
    conflict: null,
    log: "Sudoku puzzle loaded. Starting recursive backtracking search..."
  });
  
  function isValid(r, c, val) {
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === val) return false;
      if (board[i][c] === val) return false;
    }
    const br = Math.floor(r / 3) * 3;
    const bc = Math.floor(c / 3) * 3;
    for (let rr = br; rr < br + 3; rr++) {
      for (let cc = bc; cc < bc + 3; cc++) {
        if (board[rr][cc] === val) return false;
      }
    }
    return true;
  }
  
  let stepCount = 0;
  const maxSteps = 400; // Safe cap for visual steps density
  
  function solve() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') {
          for (let d = 1; d <= 9; d++) {
            const val = String(d);
            if (stepCount < maxSteps) {
              stepCount++;
              const ok = isValid(r, c, val);
              steps.push({
                board: board.map(row => [...row]),
                active: [r, c],
                conflict: ok ? null : [r, c],
                candidate: val,
                log: ok ? `Trying ${val} at (${r}, ${c}) - Valid.` : `Trying ${val} at (${r}, ${c}) - Conflict found.`
              });
              
              if (ok) {
                board[r][c] = val;
                if (solve()) return true;
                
                // Backtrack
                board[r][c] = '.';
                if (stepCount < maxSteps) {
                  stepCount++;
                  steps.push({
                    board: board.map(row => [...row]),
                    active: [r, c],
                    conflict: [r, c],
                    candidate: '.',
                    log: `Backtracking: removing value at (${r}, ${c}) and trying next candidate.`
                  });
                }
              }
            } else {
              // Capped steps - complete solving without visual records to prevent memory limits
              if (isValid(r, c, val)) {
                board[r][c] = val;
                if (solve()) return true;
                board[r][c] = '.';
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  
  solve();
  
  // Add final step showing completely solved grid
  steps.push({
    board: board.map(r => [...r]),
    active: null,
    conflict: null,
    log: "Sudoku puzzle completely solved successfully!"
  });
  
  visualizerState.steps = steps;
}

// ==========================================================================
// CANVAS DRAWING & RENDER ENGINE
// ==========================================================================

function renderCanvasStep() {
  const canvas = document.getElementById('canvas-area');
  canvas.innerHTML = '';
  
  const step = visualizerState.steps[visualizerState.currentStepIndex];
  if (!step) return;
  
  // --- A. BUBBLE SORT ---
  if (visualizerState.algo === 'bubble') {
    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';
    const maxVal = Math.max(...visualizerState.rawArray);
    
    step.array.forEach((val, idx) => {
      const bar = document.createElement('div');
      bar.className = 'algo-bar';
      const pctHeight = Math.max(15, (val / maxVal) * 80); 
      bar.style.height = `${pctHeight}%`;
      
      if (step.compare.includes(idx)) bar.classList.add('compare');
      else if (step.swap.includes(idx)) bar.classList.add('swap');
      else if (step.sorted.includes(idx)) bar.classList.add('sorted');
      
      const span = document.createElement('span');
      span.className = 'algo-bar-val';
      span.textContent = val;
      
      bar.appendChild(span);
      barContainer.appendChild(bar);
    });
    canvas.appendChild(barContainer);
  } 
  
  // --- B. BINARY SEARCH ---
  else if (visualizerState.algo === 'binary') {
    const bsContainer = document.createElement('div');
    bsContainer.className = 'binary-search-container';
    const arrayContainer = document.createElement('div');
    arrayContainer.className = 'bs-array';
    
    visualizerState.rawArray.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'bs-element';
      cell.textContent = val;
      
      const idxSpan = document.createElement('div');
      idxSpan.className = 'bs-element-idx';
      idxSpan.textContent = idx;
      cell.appendChild(idxSpan);
      
      if (idx === step.found) cell.classList.add('found');
      else if (idx === step.mid) cell.classList.add('mid');
      else if (step.discarded.includes(idx)) cell.classList.add('discarded');
      else if (idx >= step.low && idx <= step.high) {
        cell.classList.add('active');
        if (idx === step.low || idx === step.high) cell.classList.add('low-high');
      }
      
      if (idx === step.low && idx === step.high) {
        const pointer = document.createElement('div');
        pointer.className = 'bs-pointer-label low';
        pointer.style.bottom = '-22px';
        pointer.textContent = 'L & H';
        cell.appendChild(pointer);
      } else {
        if (idx === step.low) {
          const pointer = document.createElement('div');
          pointer.className = 'bs-pointer-label low';
          pointer.textContent = 'Low';
          cell.appendChild(pointer);
        }
        if (idx === step.high) {
          const pointer = document.createElement('div');
          pointer.className = 'bs-pointer-label high';
          pointer.textContent = 'High';
          cell.appendChild(pointer);
        }
      }
      if (idx === step.mid && idx !== step.found) {
        const pointer = document.createElement('div');
        pointer.className = 'bs-pointer-label mid';
        pointer.style.bottom = '-36px';
        pointer.textContent = 'Mid';
        cell.appendChild(pointer);
      }
      
      arrayContainer.appendChild(cell);
    });
    
    bsContainer.appendChild(arrayContainer);
    canvas.appendChild(bsContainer);
  }
  
  // --- C. SLIDING WINDOW ---
  else if (visualizerState.algo === 'window') {
    const container = document.createElement('div');
    container.className = 'sliding-window-container';
    
    const wrapper = document.createElement('div');
    wrapper.className = 'sw-string-wrapper';
    
    visualizerState.rawArray.forEach((char, idx) => {
      const box = document.createElement('div');
      box.className = 'sw-char-box';
      box.textContent = char;
      
      const idxSpan = document.createElement('div');
      idxSpan.className = 'sw-char-idx';
      idxSpan.textContent = idx;
      box.appendChild(idxSpan);
      
      if (idx >= step.left && idx <= step.right) {
        box.classList.add('in-window');
        if (idx === step.duplicateIndex) {
          box.classList.add('duplicate');
        }
      }
      
      wrapper.appendChild(box);
    });
    
    if (step.right >= step.left) {
      const overlay = document.createElement('div');
      overlay.className = 'sw-window-overlay';
      const boxWidth = 48 + 8; 
      const offsetLeft = 24 + step.left * boxWidth; 
      const width = (step.right - step.left + 1) * boxWidth - 8;
      
      overlay.style.left = `${offsetLeft}px`;
      overlay.style.width = `${width}px`;
      wrapper.appendChild(overlay);
    }
    
    container.appendChild(wrapper);
    
    const stats = document.createElement('div');
    stats.style.fontFamily = 'Space Grotesk, sans-serif';
    stats.style.fontSize = '0.95rem';
    stats.style.color = 'var(--text-muted)';
    stats.innerHTML = `Current Unique Set: <strong>[ ${Array.from(step.set).join(", ")} ]</strong> | Size = <strong>${step.set.size}</strong>`;
    container.appendChild(stats);
    
    canvas.appendChild(container);
  }
  
  // --- D. TWO POINTERS ---
  else if (visualizerState.algo === 'pointer') {
    const container = document.createElement('div');
    container.className = 'tp-container';
    const maxVal = Math.max(...visualizerState.rawArray);
    
    visualizerState.rawArray.forEach((val, idx) => {
      const bar = document.createElement('div');
      bar.className = 'tp-bar';
      const pctHeight = (val / maxVal) * 75;
      bar.style.height = `${pctHeight}%`;
      
      if (idx === step.left || idx === step.right) bar.classList.add('active');
      
      const valSpan = document.createElement('div');
      valSpan.className = 'tp-bar-val';
      valSpan.textContent = val;
      
      const idxSpan = document.createElement('div');
      idxSpan.className = 'tp-bar-idx';
      idxSpan.textContent = idx;
      
      if (idx === step.left) {
        const label = document.createElement('div');
        label.className = 'bs-pointer-label low';
        label.style.bottom = '-38px';
        label.textContent = 'Left';
        bar.appendChild(label);
      }
      if (idx === step.right) {
        const label = document.createElement('div');
        label.className = 'bs-pointer-label high';
        label.style.bottom = '-38px';
        label.textContent = 'Right';
        bar.appendChild(label);
      }
      
      bar.appendChild(valSpan);
      bar.appendChild(idxSpan);
      container.appendChild(bar);
    });
    
    if (step.left < step.right) {
      const water = document.createElement('div');
      water.className = 'tp-water-overlay';
      const barWidth = 40; 
      const barGap = 16;
      const totalBarSpace = barWidth + barGap;
      const leftVal = visualizerState.rawArray[step.left];
      const rightVal = visualizerState.rawArray[step.right];
      const minH = Math.min(leftVal, rightVal);
      const startX = step.left * totalBarSpace + (barWidth / 2);
      const width = (step.right - step.left) * totalBarSpace;
      const waterH = (minH / maxVal) * 75;
      
      water.style.left = `${startX}px`;
      water.style.width = `${width}px`;
      water.style.height = `${waterH}%`;
      water.style.bottom = '0';
      
      container.appendChild(water);
    }
    canvas.appendChild(container);
  }
  
  // --- E. TWO SUM II CANVAS (Sorted Cells) ---
  else if (visualizerState.algo === 'twoSumII') {
    const bsContainer = document.createElement('div');
    bsContainer.className = 'binary-search-container';
    const arrayContainer = document.createElement('div');
    arrayContainer.className = 'bs-array';
    
    visualizerState.rawArray.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'bs-element';
      cell.textContent = val;
      
      const idxSpan = document.createElement('div');
      idxSpan.className = 'bs-element-idx';
      idxSpan.textContent = idx;
      cell.appendChild(idxSpan);
      
      if (idx === step.left || idx === step.right) {
        cell.classList.add('active');
        cell.classList.add('low-high');
        
        if (idx === step.left) {
          const pointer = document.createElement('div');
          pointer.className = 'bs-pointer-label low';
          pointer.textContent = 'Left';
          cell.appendChild(pointer);
        }
        if (idx === step.right) {
          const pointer = document.createElement('div');
          pointer.className = 'bs-pointer-label high';
          pointer.textContent = 'Right';
          cell.appendChild(pointer);
        }
      }
      
      if (step.found && (idx === step.left || idx === step.right)) {
        cell.classList.remove('active');
        cell.classList.add('found');
      }
      
      arrayContainer.appendChild(cell);
    });
    
    bsContainer.appendChild(arrayContainer);
    canvas.appendChild(bsContainer);
  }
  
  // --- F. LINKED LIST CYCLE (Fast / Slow Pointers) ---
  else if (visualizerState.algo === 'cycle' || visualizerState.algo === 'cycleII') {
    const container = document.createElement('div');
    container.className = 'cycle-container';
    const wrapper = document.createElement('div');
    wrapper.className = 'cycle-nodes-wrapper';
    
    const coords = [
      { x: 30, y: 70 },   
      { x: 120, y: 70 },  
      { x: 210, y: 70 },  
      { x: 300, y: 40 },  
      { x: 380, y: 80 },  
      { x: 310, y: 130 }   
    ];
    
    coords.forEach((c, idx) => {
      const node = document.createElement('div');
      node.className = 'cycle-node';
      node.style.left = `${c.x}px`;
      node.style.top = `${c.y}px`;
      node.innerHTML = `<span class="cycle-node-val">${visualizerState.rawArray[idx]}</span>`;
      
      const isSlow = idx === step.slow;
      const isFast = idx === step.fast;
      const isEntry = idx === step.entry;
      
      if (isSlow && isEntry) {
        node.classList.add('active-both');
      } else if (isSlow && isFast) {
        node.classList.add('active-both');
      } else if (isSlow) {
        node.classList.add('active-slow');
      } else if (isFast) {
        node.classList.add('active-fast');
      } else if (isEntry) {
        node.classList.add('active-slow');
        node.style.borderColor = 'var(--accent-cyan)';
      }
      
      if (isSlow || isFast || isEntry) {
        const textLabel = document.createElement('div');
        textLabel.style.position = 'absolute';
        textLabel.style.top = '-20px';
        textLabel.style.fontSize = '0.7rem';
        textLabel.style.fontWeight = '700';
        textLabel.style.textTransform = 'uppercase';
        textLabel.style.whiteSpace = 'nowrap';
        
        if (isSlow && isEntry) {
          textLabel.style.color = 'var(--easy)';
          textLabel.textContent = 'Intersection Met';
        } else if (isSlow && isFast) {
          textLabel.style.color = 'var(--easy)';
          textLabel.textContent = 'Slow & Fast Met';
        } else if (isEntry) {
          textLabel.style.color = 'var(--accent-cyan)';
          textLabel.textContent = 'Entry';
        } else if (isSlow) {
          textLabel.style.color = 'var(--secondary)';
          textLabel.textContent = 'Slow';
        } else if (isFast) {
          textLabel.style.color = 'var(--secondary)';
          textLabel.textContent = 'Fast';
        }
        node.appendChild(textLabel);
      }
      wrapper.appendChild(node);
    });
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    
    const links = [
      { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
      { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 2 } 
    ];
    
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
      <marker id="arrow" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.2)"/>
      </marker>
      <marker id="arrow-cycle" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(99,102,241,0.5)"/>
      </marker>
    `;
    svg.appendChild(defs);
    
    links.forEach(l => {
      const fromNode = coords[l.from];
      const toNode = coords[l.to];
      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const r = 27; 
      
      if (l.from === 5 && l.to === 2) {
        const dStr = `M ${fromNode.x + r} ${fromNode.y + r} Q ${(fromNode.x + toNode.x)/2 - 30} ${(fromNode.y + toNode.y)/2 + 20} ${toNode.x + r} ${toNode.y + r}`;
        line.setAttribute("d", dStr);
        line.setAttribute("stroke", "rgba(99,102,241,0.45)");
        line.setAttribute("stroke-dasharray", "4");
        line.setAttribute("marker-end", "url(#arrow-cycle)");
      } else {
        const dStr = `M ${fromNode.x + r} ${fromNode.y + r} L ${toNode.x + r} ${toNode.y + r}`;
        line.setAttribute("d", dStr);
        line.setAttribute("stroke", "rgba(255,255,255,0.15)");
        line.setAttribute("marker-end", "url(#arrow)");
      }
      line.setAttribute("stroke-width", "2");
      line.setAttribute("fill", "none");
      svg.appendChild(line);
    });
    
    wrapper.appendChild(svg);
    container.appendChild(wrapper);
    canvas.appendChild(container);
  }
  
  // --- G. MONOTONIC STACK ---
  else if (visualizerState.algo === 'stack') {
    const container = document.createElement('div');
    container.className = 'stack-container';
    
    const leftSide = document.createElement('div');
    leftSide.className = 'stack-array-side';
    
    const labelRow = document.createElement('div');
    labelRow.style.fontSize = '0.85rem';
    labelRow.style.color = 'var(--text-muted)';
    labelRow.textContent = 'Scanning Temperatures:';
    leftSide.appendChild(labelRow);
    
    const arrayRow = document.createElement('div');
    arrayRow.className = 'stack-array-row';
    
    visualizerState.rawArray.forEach((temp, idx) => {
      const el = document.createElement('div');
      el.className = 'stack-array-el';
      el.textContent = temp;
      const idxSpan = document.createElement('div');
      idxSpan.className = 'bs-element-idx';
      idxSpan.textContent = idx;
      el.appendChild(idxSpan);
      
      if (idx === step.scanning) el.classList.add('scanning');
      else if (step.resolved[idx] !== undefined || step.result[idx] > 0) el.classList.add('resolved');
      else if (step.stack.includes(idx)) el.classList.add('popped');
      
      arrayRow.appendChild(el);
    });
    leftSide.appendChild(arrayRow);
    
    const ansRowLabel = document.createElement('div');
    ansRowLabel.style.fontSize = '0.85rem';
    ansRowLabel.style.color = 'var(--text-muted)';
    ansRowLabel.style.marginTop = '1rem';
    ansRowLabel.textContent = 'Output Days Array:';
    leftSide.appendChild(ansRowLabel);
    
    const ansRow = document.createElement('div');
    ansRow.className = 'stack-array-row';
    step.result.forEach((val, idx) => {
      const el = document.createElement('div');
      el.className = 'stack-array-el';
      el.style.fontWeight = '500';
      el.style.background = 'rgba(0,0,0,0.2)';
      el.textContent = val;
      if (step.resolved[idx] !== undefined) {
        el.style.borderColor = 'var(--easy)';
        el.style.color = 'var(--easy)';
      }
      ansRow.appendChild(el);
    });
    leftSide.appendChild(ansRow);
    container.appendChild(leftSide);
    
    const rightSide = document.createElement('div');
    rightSide.className = 'stack-frame-side';
    
    const stackLabel = document.createElement('div');
    stackLabel.style.fontSize = '0.8rem';
    stackLabel.style.color = 'var(--text-muted)';
    stackLabel.style.marginBottom = '6px';
    stackLabel.textContent = 'Monotonic Stack';
    rightSide.appendChild(stackLabel);
    
    const beaker = document.createElement('div');
    beaker.className = 'stack-visual-box';
    
    step.stack.forEach(idx => {
      const item = document.createElement('div');
      item.className = 'stack-visual-item';
      item.textContent = `${visualizerState.rawArray[idx]}° (idx ${idx})`;
      beaker.appendChild(item);
    });
    
    rightSide.appendChild(beaker);
    container.appendChild(rightSide);
    canvas.appendChild(container);
  }

  // --- H. LARGEST RECTANGLE IN HISTOGRAM ---
  else if (visualizerState.algo === 'largestRectangle') {
    const container = document.createElement('div');
    container.className = 'tp-container';
    container.style.position = 'relative';
    const maxVal = Math.max(...visualizerState.rawArray);
    
    visualizerState.rawArray.forEach((val, idx) => {
      const bar = document.createElement('div');
      bar.className = 'tp-bar';
      const pctHeight = (val / maxVal) * 75;
      bar.style.height = `${pctHeight}%`;
      
      if (idx === step.scanning) {
        bar.classList.add('active');
        bar.style.background = 'var(--secondary)';
      } else if (step.stack.includes(idx)) {
        bar.style.background = 'rgba(99, 102, 241, 0.4)';
        bar.style.borderColor = 'var(--primary)';
      }
      
      const valSpan = document.createElement('div');
      valSpan.className = 'tp-bar-val';
      valSpan.textContent = val;
      
      const idxSpan = document.createElement('div');
      idxSpan.className = 'tp-bar-idx';
      idxSpan.textContent = idx;
      
      bar.appendChild(valSpan);
      bar.appendChild(idxSpan);
      container.appendChild(bar);
    });
    
    if (step.activeRectangle) {
      const overlay = document.createElement('div');
      overlay.style.position = 'absolute';
      overlay.style.background = 'rgba(16, 185, 129, 0.25)';
      overlay.style.border = '2px dashed var(--easy)';
      overlay.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.3)';
      overlay.style.borderRadius = '4px 4px 0 0';
      overlay.style.zIndex = '5';
      overlay.style.pointerEvents = 'none';
      overlay.style.bottom = '0';
      
      const barWidth = 40; 
      const barGap = 16;
      const totalBarSpace = barWidth + barGap;
      
      const startX = step.activeRectangle.start * totalBarSpace;
      const width = step.activeRectangle.width * totalBarSpace - barGap;
      const heightPct = (step.activeRectangle.height / maxVal) * 75;
      
      overlay.style.left = `${startX}px`;
      overlay.style.width = `${width}px`;
      overlay.style.height = `${heightPct}%`;
      
      const overlayLabel = document.createElement('div');
      overlayLabel.style.position = 'absolute';
      overlayLabel.style.top = '50%';
      overlayLabel.style.left = '50%';
      overlayLabel.style.transform = 'translate(-50%, -50%)';
      overlayLabel.style.fontSize = '0.85rem';
      overlayLabel.style.fontFamily = 'Space Grotesk, sans-serif';
      overlayLabel.style.fontWeight = '700';
      overlayLabel.style.color = '#ffffff';
      overlayLabel.style.whiteSpace = 'nowrap';
      overlayLabel.style.textShadow = '0 1px 3px rgba(0,0,0,0.8)';
      overlayLabel.textContent = `A = ${step.activeRectangle.height * step.activeRectangle.width}`;
      overlay.appendChild(overlayLabel);
      
      container.appendChild(overlay);
    }
    canvas.appendChild(container);
  }

  // --- I. BINARY TREE (DFS/BFS) ---
  else if (visualizerState.algo === 'tree') {
    const container = document.createElement('div');
    container.className = 'tree-container';
    
    const treeCoords = [
      { x: 228, y: 20 },   
      { x: 120, y: 90 },   
      { x: 336, y: 90 },   
      { x: 50,  y: 160 },  
      { x: 180, y: 160 },  
      { x: 270, y: 160 },  
      { x: 400, y: 160 }   
    ];
    
    treeCoords.forEach((c, idx) => {
      const node = document.createElement('div');
      node.className = 'tree-node';
      node.style.left = `${c.x}px`;
      node.style.top = `${c.y}px`;
      
      const valSpan = document.createElement('span');
      valSpan.className = 'tree-node-val';
      valSpan.textContent = visualizerState.rawArray[idx];
      node.appendChild(valSpan);
      
      if (idx === step.scanning) node.classList.add('scanning');
      else if (step.visited.includes(idx)) node.classList.add('visited');
      
      container.appendChild(node);
    });
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    
    const treeLinks = [
      { from: 0, to: 1 }, { from: 0, to: 2 },
      { from: 1, to: 3 }, { from: 1, to: 4 },
      { from: 2, to: 5 }, { from: 2, to: 6 }
    ];
    
    treeLinks.forEach(l => {
      const from = treeCoords[l.from];
      const to = treeCoords[l.to];
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      
      const r = 22; 
      line.setAttribute("x1", from.x + r);
      line.setAttribute("y1", from.y + r);
      line.setAttribute("x2", to.x + r);
      line.setAttribute("y2", to.y + r);
      
      if (step.visited.includes(l.to) || (step.scanning === l.to && step.visited.includes(l.from))) {
        line.setAttribute("stroke", "var(--easy)");
        line.setAttribute("stroke-width", "2.5");
      } else {
        line.setAttribute("stroke", "rgba(255,255,255,0.15)");
        line.setAttribute("stroke-width", "1.5");
      }
      svg.appendChild(line);
    });
    
    container.appendChild(svg);
    canvas.appendChild(container);
  }

  // --- J. GRAPH NETWORK ---
  else if (visualizerState.algo === 'graph') {
    const container = document.createElement('div');
    container.className = 'tree-container';
    
    const graphCoords = [
      { x: 100, y: 35 },   
      { x: 300, y: 35 },   
      { x: 340, y: 155 },  
      { x: 200, y: 200 },  
      { x: 60,  y: 155 }   
    ];
    
    graphCoords.forEach((c, idx) => {
      const node = document.createElement('div');
      node.className = 'tree-node';
      node.style.left = `${c.x}px`;
      node.style.top = `${c.y}px`;
      node.innerHTML = `<span>G${idx}</span>`;
      
      if (idx === step.scanning) node.classList.add('scanning');
      else if (step.visited.includes(idx)) node.classList.add('visited');
      
      container.appendChild(node);
    });
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    
    const edges = [
      { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
      { from: 3, to: 4 }, { from: 4, to: 0 }, { from: 0, to: 4 }
    ];
    
    edges.forEach(e => {
      const from = graphCoords[e.from];
      const to = graphCoords[e.to];
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      const r = 22;
      
      line.setAttribute("x1", from.x + r);
      line.setAttribute("y1", from.y + r);
      line.setAttribute("x2", to.x + r);
      line.setAttribute("y2", to.y + r);
      
      if (step.visited.includes(e.to) && step.visited.includes(e.from)) {
        line.setAttribute("stroke", "var(--easy)");
        line.setAttribute("stroke-width", "2.5");
      } else {
        line.setAttribute("stroke", "rgba(255,255,255,0.15)");
        line.setAttribute("stroke-width", "1.5");
      }
      svg.appendChild(line);
    });
    
    container.appendChild(svg);
    canvas.appendChild(container);
  }

  // --- K. 2D MATRIX GRID ---
  else if (visualizerState.algo === 'matrix') {
    const container = document.createElement('div');
    container.className = 'matrix-container';
    
    const gridEl = document.createElement('div');
    gridEl.className = 'matrix-grid';
    gridEl.style.gridTemplateColumns = 'repeat(3, 46px)';
    
    step.grid.forEach((row, rIdx) => {
      row.forEach((val, cIdx) => {
        const cell = document.createElement('div');
        cell.className = 'matrix-cell';
        cell.textContent = val;
        
        const isScanning = step.scanning && step.scanning.r === rIdx && step.scanning.c === cIdx;
        
        if (isScanning) cell.classList.add('scanning');
        else if (rIdx === 0 || cIdx === 0) cell.classList.add('active-path');
        else if (val > 1) cell.classList.add('solved');
        
        gridEl.appendChild(cell);
      });
    });
    
    container.appendChild(gridEl);
    canvas.appendChild(container);
  }

  // --- L. INTERVAL TIMELINES ---
  else if (visualizerState.algo === 'intervals') {
    const container = document.createElement('div');
    container.className = 'interval-container';
    
    visualizerState.rawArray.forEach((interval, idx) => {
      const row = document.createElement('div');
      row.className = 'interval-row-block';
      
      const bar = document.createElement('div');
      bar.className = 'interval-bar-block';
      
      const timelineMaxVal = 10;
      const leftPct = (interval[0] / timelineMaxVal) * 100;
      const widthPct = ((interval[1] - interval[0]) / timelineMaxVal) * 100;
      
      bar.style.left = `${leftPct}%`;
      bar.style.width = `${widthPct}%`;
      bar.textContent = `[${interval[0]}, ${interval[1]}]`;
      
      if (idx === step.scanning) bar.classList.add('scanning');
      else if (step.merged.some(m => m[0] <= interval[0] && m[1] >= interval[1])) bar.classList.add('merged');
      else bar.classList.add('active');
      
      row.appendChild(bar);
      container.appendChild(row);
    });
    
    const axis = document.createElement('div');
    axis.className = 'interval-axis';
    axis.innerHTML = '<span>t=0</span><span>t=2</span><span>t=4</span><span>t=6</span><span>t=8</span><span>t=10</span>';
    container.appendChild(axis);
    
    canvas.appendChild(container);
  }

  // --- M. HASHMAP TABLE ---
  else if (visualizerState.algo === 'hash') {
    const container = document.createElement('div');
    container.className = 'hash-container';
    
    const numBuckets = 5;
    for (let b = 0; b < numBuckets; b++) {
      const row = document.createElement('div');
      row.className = 'hash-row';
      
      const idx = document.createElement('div');
      idx.className = 'hash-bucket-idx';
      idx.textContent = `[${b}]`;
      row.appendChild(idx);
      
      const cell = document.createElement('div');
      cell.className = 'hash-bucket-cell';
      
      Object.keys(step.map).forEach(key => {
        const hashedBucket = key.length % numBuckets;
        if (hashedBucket === b) {
          const pair = document.createElement('div');
          pair.className = 'hash-pair';
          pair.innerHTML = `<strong>${key}</strong>: ${step.map[key]}`;
          
          if (step.scanning && step.scanning.word === key) {
            pair.classList.add('scanning');
            cell.classList.add('active');
          } else {
            pair.classList.add('matched');
          }
          cell.appendChild(pair);
        }
      });
      
      row.appendChild(cell);
      container.appendChild(row);
    }
    canvas.appendChild(container);
  }

  // --- N. BIT REGISTER ---
  else if (visualizerState.algo === 'bits') {
    const container = document.createElement('div');
    container.className = 'bit-container';
    
    step.bits.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'bit-cell';
      
      if (idx === step.activeIndex) cell.classList.add('active-bit');
      
      const valDiv = document.createElement('div');
      valDiv.className = 'bit-cell-val';
      valDiv.textContent = val;
      
      const idxDiv = document.createElement('div');
      idxDiv.className = 'bit-cell-idx';
      idxDiv.textContent = 7 - idx; 
      
      cell.appendChild(valDiv);
      cell.appendChild(idxDiv);
      container.appendChild(cell);
    });
    
    canvas.appendChild(container);
  }

  // --- O. TRIE PREFIX MAP ---
  else if (visualizerState.algo === 'trie') {
    const container = document.createElement('div');
    container.className = 'trie-container';

    const title = document.createElement('div');
    title.className = 'trie-title';
    title.innerHTML = `Inserting: <span style="color:var(--primary-glow); font-weight:700">"${step.currentWord || '—'}"</span> &nbsp;|&nbsp; Active char: <span style="color:var(--accent-cyan); font-weight:700">${step.insertingChar || '—'}</span>`;
    container.appendChild(title);

    const trieVis = document.createElement('div');
    trieVis.className = 'trie-vis-wrapper';

    // Render trie as a level-by-level tree using flexbox rows
    function renderTrieNode(nodeData, depth, inActivePath) {
      const nodeWrap = document.createElement('div');
      nodeWrap.className = 'trie-node-wrap';

      const nodeEl = document.createElement('div');
      nodeEl.className = 'trie-node';
      nodeEl.textContent = nodeData.char === 'ROOT' ? '⬤' : nodeData.char;

      const isInPath = step.currentPath.includes(nodeData.char) && depth <= step.currentPath.length && inActivePath;
      const isTerminal = nodeData.isEnd;
      const isActive = step.insertingChar === nodeData.char && isInPath;

      if (isActive) nodeEl.classList.add('trie-active');
      else if (isInPath) nodeEl.classList.add('trie-path');
      if (isTerminal) nodeEl.classList.add('trie-terminal');

      nodeWrap.appendChild(nodeEl);

      const children = Object.values(nodeData.children);
      if (children.length > 0) {
        const childRow = document.createElement('div');
        childRow.className = 'trie-children-row';
        children.forEach((child, ci) => {
          const childInPath = isInPath && step.currentPath[depth] === child.char;
          childRow.appendChild(renderTrieNode(child, depth + 1, childInPath));
        });
        nodeWrap.appendChild(childRow);
      }
      return nodeWrap;
    }

    trieVis.appendChild(renderTrieNode(step.trie, 0, true));
    container.appendChild(trieVis);
    canvas.appendChild(container);
  }

  // --- P. STRING DP — LCS ALIGNMENT MATRIX ---
  else if (visualizerState.algo === 'stringdp') {
    const container = document.createElement('div');
    container.className = 'stringdp-container';

    const s1 = step.s1, s2 = step.s2;
    const dp = step.dp;
    const m = dp.length - 1, n = dp[0].length - 1;

    const titleEl = document.createElement('div');
    titleEl.className = 'stringdp-title';
    titleEl.innerHTML = `LCS: <span style="color:var(--primary-glow)">"${s1}"</span> &nbsp;vs&nbsp; <span style="color:var(--secondary)">"${s2}"</span>`;
    container.appendChild(titleEl);

    const gridWrap = document.createElement('div');
    gridWrap.className = 'stringdp-grid-wrap';

    const grid = document.createElement('div');
    grid.className = 'stringdp-grid';
    grid.style.gridTemplateColumns = `36px repeat(${n + 1}, 36px)`;

    // Header row: "" + s2 chars
    const topLeft = document.createElement('div');
    topLeft.className = 'stringdp-header-cell';
    topLeft.style.background = 'transparent';
    grid.appendChild(topLeft);
    // empty corner
    const emptyCorner = document.createElement('div');
    emptyCorner.className = 'stringdp-header-cell';
    emptyCorner.textContent = '';
    grid.appendChild(emptyCorner);
    for (let j = 0; j < n; j++) {
      const hc = document.createElement('div');
      hc.className = 'stringdp-header-cell s2-header';
      hc.textContent = s2[j];
      if (step.activeCell && step.activeCell.c === j + 1) hc.classList.add('active-header');
      grid.appendChild(hc);
    }

    // Data rows
    for (let i = 0; i <= m; i++) {
      // Row header: s1 char or empty
      const rowHeader = document.createElement('div');
      rowHeader.className = 'stringdp-header-cell s1-header';
      rowHeader.textContent = i === 0 ? '' : s1[i - 1];
      if (step.activeCell && step.activeCell.r === i) rowHeader.classList.add('active-header');
      grid.appendChild(rowHeader);

      for (let j = 0; j <= n; j++) {
        const cell = document.createElement('div');
        cell.className = 'stringdp-cell';
        cell.textContent = dp[i][j];

        const isActive = step.activeCell && step.activeCell.r === i && step.activeCell.c === j;
        if (isActive) cell.classList.add('stringdp-active');
        else if (i === 0 || j === 0) cell.classList.add('stringdp-base');
        else if (dp[i][j] > 0) cell.classList.add('stringdp-filled');

        grid.appendChild(cell);
      }
    }

    gridWrap.appendChild(grid);
    container.appendChild(gridWrap);
    canvas.appendChild(container);
  }

  // --- Q. 1D DP ARRAY ---
  else if (visualizerState.algo === 'dp1d') {
    const container = document.createElement('div');
    container.className = 'dp1d-container';

    const label = document.createElement('div');
    label.className = 'dp1d-label';
    label.innerHTML = `Climbing Stairs &mdash; dp[n] array (n = ${step.n})`;
    container.appendChild(label);

    const row = document.createElement('div');
    row.className = 'dp1d-row';

    step.dp.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';

      if (idx === step.activeIndex) cell.classList.add('dp1d-active');
      else if (val > 0) cell.classList.add('dp1d-filled');

      const valDiv = document.createElement('div');
      valDiv.className = 'dp1d-cell-val';
      valDiv.textContent = val;

      const idxDiv = document.createElement('div');
      idxDiv.className = 'dp1d-cell-idx';
      idxDiv.textContent = `dp[${idx}]`;

      cell.appendChild(valDiv);
      cell.appendChild(idxDiv);
      row.appendChild(cell);
    });

    container.appendChild(row);

    if (step.activeIndex > 1) {
      const formula = document.createElement('div');
      formula.className = 'dp1d-formula';
      formula.innerHTML = `dp[${step.activeIndex}] = dp[${step.activeIndex-1}] + dp[${step.activeIndex-2}] = <strong>${step.dp[step.activeIndex-1] || 0}</strong> + <strong>${step.dp[step.activeIndex-2] || 0}</strong> = <span style="color:var(--primary-glow)">${step.dp[step.activeIndex] || '?'}</span>`;
      container.appendChild(formula);
    }

    canvas.appendChild(container);
  }

  // --- R. PREFIX SUM ARRAY ---
  else if (visualizerState.algo === 'prefixsum') {
    const container = document.createElement('div');
    container.className = 'prefixsum-container';

    // nums array
    const numsLabel = document.createElement('div');
    numsLabel.className = 'prefixsum-label';
    numsLabel.textContent = `Input Array (k = ${step.k}):`;
    container.appendChild(numsLabel);

    const numsRow = document.createElement('div');
    numsRow.className = 'dp1d-row';
    step.nums.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      if (idx === step.activeIndex) cell.classList.add('dp1d-active');
      const valDiv = document.createElement('div');
      valDiv.className = 'dp1d-cell-val';
      valDiv.textContent = val;
      const idxDiv = document.createElement('div');
      idxDiv.className = 'dp1d-cell-idx';
      idxDiv.textContent = `[${idx}]`;
      cell.appendChild(valDiv);
      cell.appendChild(idxDiv);
      numsRow.appendChild(cell);
    });
    container.appendChild(numsRow);

    // Prefix sum array
    const pLabel = document.createElement('div');
    pLabel.className = 'prefixsum-label';
    pLabel.textContent = 'Running Prefix Sum:';
    container.appendChild(pLabel);

    const prefRow = document.createElement('div');
    prefRow.className = 'dp1d-row';
    step.prefixArr.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      if (idx === step.prefixArr.length - 1 && step.activeIndex >= 0) cell.classList.add('dp1d-active');
      else if (idx > 0) cell.classList.add('dp1d-filled');
      const valDiv = document.createElement('div');
      valDiv.className = 'dp1d-cell-val';
      valDiv.textContent = val;
      const idxDiv = document.createElement('div');
      idxDiv.className = 'dp1d-cell-idx';
      idxDiv.textContent = `P[${idx}]`;
      cell.appendChild(valDiv);
      cell.appendChild(idxDiv);
      prefRow.appendChild(cell);
    });
    container.appendChild(prefRow);

    // HashMap
    const mapLabel = document.createElement('div');
    mapLabel.className = 'prefixsum-label';
    mapLabel.innerHTML = `Prefix Hashmap &mdash; Subarrays found: <strong style="color:var(--easy)">${step.count}</strong>`;
    container.appendChild(mapLabel);

    const mapRow = document.createElement('div');
    mapRow.className = 'prefixsum-map-row';
    Object.entries(step.prefixMap).forEach(([key, cnt]) => {
      const pair = document.createElement('div');
      pair.className = 'hash-pair matched';
      pair.style.display = 'inline-flex';
      pair.style.margin = '0.25rem';
      const needed = step.prefix - step.k;
      if (parseInt(key) === needed && step.activeIndex >= 0) pair.classList.add('scanning');
      pair.innerHTML = `<strong>${key}</strong>: ${cnt}`;
      mapRow.appendChild(pair);
    });
    container.appendChild(mapRow);

    canvas.appendChild(container);
  }

  // --- S. BACKTRACKING BOARD ---
  else if (visualizerState.algo === 'backtracking') {
    const container = document.createElement('div');
    container.className = 'concept-vis-container';

    const board = document.createElement('div');
    board.className = 'bt-board';
    const boardSize = step.board.length;
    const boardGap = 5;
    const availableWidth = Math.max(180, canvas.clientWidth - 96);
    const availableHeight = Math.max(180, canvas.clientHeight - 96);
    const cellSize = Math.max(32, Math.min(52, Math.floor((Math.min(availableWidth, availableHeight) - (boardGap * (boardSize - 1)) - 20) / boardSize)));
    board.style.setProperty('--bt-cell-size', `${cellSize}px`);
    board.style.setProperty('--bt-gap', `${boardGap}px`);
    board.style.gridTemplateColumns = `repeat(${step.board.length}, var(--bt-cell-size))`;

    step.board.forEach((row, r) => {
      row.forEach((val, c) => {
        const cell = document.createElement('div');
        cell.className = 'bt-cell';
        if ((r + c) % 2 === 1) cell.classList.add('dark');
        if (val === 'Q') {
          cell.classList.add('queen');
          cell.textContent = 'Q';
        }
        if (step.active && step.active.r === r && step.active.c === c) cell.classList.add('active');
        if (step.conflict && step.conflict.r === r && step.conflict.c === c) cell.classList.add('conflict');
        board.appendChild(cell);
      });
    });

    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Row <strong>${Math.min(step.row, step.board.length)}</strong> | State <strong>${step.status}</strong>`;
    container.appendChild(board);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- T. UNION-FIND COMPONENTS ---
  else if (visualizerState.algo === 'unionfind') {
    const container = document.createElement('div');
    container.className = 'concept-vis-container';

    const nodes = document.createElement('div');
    nodes.className = 'uf-node-row';
    step.parent.forEach((parent, idx) => {
      const node = document.createElement('div');
      node.className = 'uf-node';
      const isActive = step.edge && step.edge.includes(idx);
      const isRoot = parent === idx;
      if (isActive) node.classList.add('active');
      if (isRoot) node.classList.add('root');
      if (step.compressed && step.roots && step.roots.includes(idx)) node.classList.add('compressed');
      node.innerHTML = `<strong>${idx}</strong><span>p=${parent}</span>`;
      nodes.appendChild(node);
    });

    const parentRow = document.createElement('div');
    parentRow.className = 'uf-parent-row';
    step.parent.forEach((parent, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      if (step.edge && step.edge.includes(idx)) cell.classList.add('dp1d-active');
      cell.innerHTML = `<div class="dp1d-cell-val">${parent}</div><div class="dp1d-cell-idx">parent[${idx}]</div>`;
      parentRow.appendChild(cell);
    });

    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = step.edge ? `Edge <strong>${step.edge[0]}-${step.edge[1]}</strong> | Roots <strong>${step.roots.join(', ')}</strong>` : 'Final parent array';

    container.appendChild(nodes);
    container.appendChild(parentRow);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- U. SEGMENT TREE RANGE QUERY ---
  else if (visualizerState.algo === 'segmenttree') {
    const container = document.createElement('div');
    container.className = 'segmenttree-container';

    const inputRow = document.createElement('div');
    inputRow.className = 'dp1d-row';
    step.nums.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      if (step.queryRange && idx >= step.queryRange[0] && idx <= step.queryRange[1]) cell.classList.add('dp1d-active');
      cell.innerHTML = `<div class="dp1d-cell-val">${val}</div><div class="dp1d-cell-idx">[${idx}]</div>`;
      inputRow.appendChild(cell);
    });
    container.appendChild(inputRow);

    const treeGrid = document.createElement('div');
    treeGrid.className = 'segmenttree-grid';
    for (let node = 1; node < Math.min(step.tree.length, 16); node++) {
      if (step.tree[node] === null && !step.ranges[node]) continue;
      const treeNode = document.createElement('div');
      treeNode.className = 'segmenttree-node';
      if (node === step.activeNode) treeNode.classList.add('active');
      if (step.covered.includes(node)) treeNode.classList.add('covered');
      const range = step.ranges[node] ? `[${step.ranges[node][0]}, ${step.ranges[node][1]}]` : '';
      treeNode.innerHTML = `<strong>${step.tree[node] ?? '?'}</strong><span>${range}</span><em>#${node}</em>`;
      treeGrid.appendChild(treeNode);
    }
    container.appendChild(treeGrid);

    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = step.queryRange ? `Query [${step.queryRange[0]}, ${step.queryRange[1]}] | Sum <strong>${step.result}</strong>` : 'Building segment tree';
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- V. GREEDY INTERVAL SELECTION ---
  else if (visualizerState.algo === 'greedy') {
    const container = document.createElement('div');
    container.className = 'greedy-container';
    const maxEnd = Math.max(...step.intervals.map(interval => interval.end));

    step.intervals.forEach((interval, idx) => {
      const row = document.createElement('div');
      row.className = 'interval-row-block';
      const bar = document.createElement('div');
      bar.className = 'interval-bar-block';
      bar.style.left = `${(interval.start / maxEnd) * 100}%`;
      bar.style.width = `${((interval.end - interval.start) / maxEnd) * 100}%`;
      bar.textContent = `[${interval.start}, ${interval.end}]`;
      if (idx === step.scanning) bar.classList.add('scanning');
      if (step.selected.includes(idx)) bar.classList.add('merged');
      if (step.rejected.includes(idx)) bar.classList.add('rejected');
      row.appendChild(bar);
      container.appendChild(row);
    });

    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Selected <strong>${step.selected.length}</strong> | lastEnd <strong>${step.lastEnd === -Infinity ? '-inf' : step.lastEnd}</strong>`;
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- W. EDIT DISTANCE DP ---
  else if (visualizerState.algo === 'editdistance') {
    const container = document.createElement('div');
    container.className = 'stringdp-container';

    const titleEl = document.createElement('div');
    titleEl.className = 'stringdp-title';
    titleEl.innerHTML = `Edit Distance: <span style="color:var(--primary-glow)">"${step.s1}"</span> to <span style="color:var(--secondary)">"${step.s2}"</span>`;
    container.appendChild(titleEl);

    const gridWrap = document.createElement('div');
    gridWrap.className = 'stringdp-grid-wrap';
    const grid = document.createElement('div');
    grid.className = 'stringdp-grid';
    grid.style.gridTemplateColumns = `36px repeat(${step.s2.length + 1}, 36px)`;

    const topLeft = document.createElement('div');
    topLeft.className = 'stringdp-header-cell';
    grid.appendChild(topLeft);
    const emptyCorner = document.createElement('div');
    emptyCorner.className = 'stringdp-header-cell';
    emptyCorner.textContent = '';
    grid.appendChild(emptyCorner);
    for (let j = 0; j < step.s2.length; j++) {
      const header = document.createElement('div');
      header.className = 'stringdp-header-cell s2-header';
      header.textContent = step.s2[j];
      if (step.activeCell && step.activeCell.c === j + 1) header.classList.add('active-header');
      grid.appendChild(header);
    }

    for (let i = 0; i <= step.s1.length; i++) {
      const rowHeader = document.createElement('div');
      rowHeader.className = 'stringdp-header-cell s1-header';
      rowHeader.textContent = i === 0 ? '' : step.s1[i - 1];
      if (step.activeCell && step.activeCell.r === i) rowHeader.classList.add('active-header');
      grid.appendChild(rowHeader);

      for (let j = 0; j <= step.s2.length; j++) {
        const cell = document.createElement('div');
        cell.className = 'stringdp-cell';
        cell.textContent = step.dp[i][j];
        const isActive = step.activeCell && step.activeCell.r === i && step.activeCell.c === j;
        if (isActive) cell.classList.add('stringdp-active');
        else if (i === 0 || j === 0) cell.classList.add('stringdp-base');
        else if (step.dp[i][j] > 0) cell.classList.add('stringdp-filled');
        grid.appendChild(cell);
      }
    }

    gridWrap.appendChild(grid);
    container.appendChild(gridWrap);
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Operation <strong>${step.operation}</strong>`;
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- X. HEAP / PRIORITY QUEUE ---
  else if (visualizerState.algo === 'heap') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const title = document.createElement('div');
    title.className = 'concept-status';
    title.innerHTML = `Min-Heap array size <strong>${step.heap.length}</strong>`;
    container.appendChild(title);

    const tree = document.createElement('div');
    tree.className = 'heap-tree';
    step.heap.forEach((val, idx) => {
      const node = document.createElement('div');
      node.className = 'heap-node';
      if (step.active.includes(idx)) node.classList.add('active');
      node.innerHTML = `<strong>${val}</strong><span>${idx}</span>`;
      tree.appendChild(node);
    });
    container.appendChild(tree);
    canvas.appendChild(container);
  }

  // --- Y. DIJKSTRA / BELLMAN-FORD GRAPH ---
  else if (visualizerState.algo === 'dijkstra' || visualizerState.algo === 'bellmanford') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const graph = document.createElement('div');
    graph.className = 'weighted-graph';
    const coords = [
      { x: 40, y: 115 }, { x: 170, y: 40 }, { x: 170, y: 190 }, { x: 315, y: 115 }, { x: 450, y: 115 }
    ];

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "weighted-graph-svg");
    step.edges.forEach(([u, v, w]) => {
      const from = coords[u], to = coords[v];
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", from.x + 24);
      line.setAttribute("y1", from.y + 24);
      line.setAttribute("x2", to.x + 24);
      line.setAttribute("y2", to.y + 24);
      const activeEdge = (step.active && step.active.edge && step.active.edge[0] === u && step.active.edge[1] === v) || (step.activeEdge && step.activeEdge[0] === u && step.activeEdge[1] === v);
      line.setAttribute("class", activeEdge ? "weighted-edge active" : "weighted-edge");
      svg.appendChild(line);

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", (from.x + to.x) / 2 + 24);
      label.setAttribute("y", (from.y + to.y) / 2 + 18);
      label.setAttribute("class", "weighted-edge-label");
      label.textContent = w;
      svg.appendChild(label);
    });
    graph.appendChild(svg);

    coords.forEach((coord, idx) => {
      const node = document.createElement('div');
      node.className = 'weighted-node';
      node.style.left = `${coord.x}px`;
      node.style.top = `${coord.y}px`;
      const isVisited = step.visited && step.visited.includes(idx);
      const isActive = (step.active && step.active.node === idx);
      if (isVisited) node.classList.add('visited');
      if (isActive) node.classList.add('active');
      const dist = step.dist[idx] === Infinity ? '∞' : step.dist[idx];
      node.innerHTML = `<strong>${String.fromCharCode(65 + idx)}</strong><span>${dist}</span>`;
      graph.appendChild(node);
    });

    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = visualizerState.algo === 'bellmanford' ? `Pass <strong>${step.pass}</strong>` : `PQ <strong>${(step.pq || []).map(([d, n]) => `${String.fromCharCode(65 + n)}:${d}`).join(', ') || 'empty'}</strong>`;
    container.appendChild(graph);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- Z. TOPOLOGICAL SORT ---
  else if (visualizerState.algo === 'toposort') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const row = document.createElement('div');
    row.className = 'topo-row';
    step.indegree.forEach((deg, idx) => {
      const cell = document.createElement('div');
      cell.className = 'topo-node';
      if (idx === step.active) cell.classList.add('active');
      if (step.order.includes(idx)) cell.classList.add('done');
      cell.innerHTML = `<strong>${idx}</strong><span>in=${deg}</span>`;
      row.appendChild(cell);
    });
    const lanes = document.createElement('div');
    lanes.className = 'topo-lanes';
    lanes.innerHTML = `<div><span>Queue</span><strong>${step.queue.join(' -> ') || 'empty'}</strong></div><div><span>Order</span><strong>${step.order.join(' -> ') || '...'}</strong></div>`;
    container.appendChild(row);
    container.appendChild(lanes);
    canvas.appendChild(container);
  }

  // --- AA. KNAPSACK DP ---
  else if (visualizerState.algo === 'knapsack') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const title = document.createElement('div');
    title.className = 'concept-status';
    title.innerHTML = `Capacity <strong>${step.capacity}</strong> | Action <strong>${step.action || 'init'}</strong>`;
    container.appendChild(title);
    const grid = document.createElement('div');
    grid.className = 'compact-matrix';
    grid.style.gridTemplateColumns = `repeat(${step.capacity + 1}, 42px)`;
    step.dp.forEach((row, r) => row.forEach((val, c) => {
      const cell = document.createElement('div');
      cell.className = 'compact-cell';
      if (step.activeCell && step.activeCell.r === r && step.activeCell.c === c) cell.classList.add('active');
      else if (val > 0) cell.classList.add('filled');
      cell.innerHTML = `<strong>${val}</strong><span>${r},${c}</span>`;
      grid.appendChild(cell);
    }));
    container.appendChild(grid);
    canvas.appendChild(container);
  }

  // --- AB. KMP STRING MATCHING ---
  else if (visualizerState.algo === 'kmp') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const textRow = document.createElement('div');
    textRow.className = 'kmp-row';
    [...step.text].forEach((ch, idx) => {
      const cell = document.createElement('div');
      cell.className = 'kmp-cell';
      if (idx === step.i || (step.matchedAt >= 0 && idx >= step.matchedAt && idx < step.matchedAt + step.pattern.length)) cell.classList.add('active');
      cell.innerHTML = `<strong>${ch}</strong><span>${idx}</span>`;
      textRow.appendChild(cell);
    });
    const patternRow = document.createElement('div');
    patternRow.className = 'kmp-row';
    [...step.pattern].forEach((ch, idx) => {
      const cell = document.createElement('div');
      cell.className = 'kmp-cell pattern';
      if (idx === step.j) cell.classList.add('active');
      cell.innerHTML = `<strong>${ch}</strong><span>${step.lps[idx]}</span>`;
      patternRow.appendChild(cell);
    });
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Phase <strong>${step.phase}</strong> | Match <strong>${step.matchedAt >= 0 ? step.matchedAt : 'searching'}</strong>`;
    container.appendChild(textRow);
    container.appendChild(patternRow);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AC. FENWICK TREE ---
  else if (visualizerState.algo === 'fenwick') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const numsRow = document.createElement('div');
    numsRow.className = 'dp1d-row';
    step.nums.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      cell.innerHTML = `<div class="dp1d-cell-val">${val}</div><div class="dp1d-cell-idx">a[${idx + 1}]</div>`;
      numsRow.appendChild(cell);
    });
    const bitRow = document.createElement('div');
    bitRow.className = 'dp1d-row';
    step.bit.slice(1).forEach((val, idx) => {
      const bitIndex = idx + 1;
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      if (step.active.includes(bitIndex)) cell.classList.add('dp1d-active');
      else if (val !== 0) cell.classList.add('dp1d-filled');
      cell.innerHTML = `<div class="dp1d-cell-val">${val}</div><div class="dp1d-cell-idx">bit[${bitIndex}]</div>`;
      bitRow.appendChild(cell);
    });
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Mode <strong>${step.mode}</strong> | Query total <strong>${step.total}</strong>`;
    container.appendChild(numsRow);
    container.appendChild(bitRow);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AD. FLOYD-WARSHALL MATRIX ---
  else if (visualizerState.algo === 'floydwarshall') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Intermediate node <strong>${step.k >= 0 && step.k < step.dist.length ? String.fromCharCode(65 + step.k) : '-'}</strong>`;
    const grid = document.createElement('div');
    grid.className = 'compact-matrix';
    grid.style.gridTemplateColumns = `repeat(${step.dist.length}, 48px)`;
    step.dist.forEach((row, r) => row.forEach((val, c) => {
      const cell = document.createElement('div');
      cell.className = 'compact-cell';
      if (step.activeCell && step.activeCell.r === r && step.activeCell.c === c) cell.classList.add('active');
      else if (val !== Infinity && val !== 0) cell.classList.add('filled');
      cell.innerHTML = `<strong>${val === Infinity ? '∞' : val}</strong><span>${String.fromCharCode(65 + r)}→${String.fromCharCode(65 + c)}</span>`;
      grid.appendChild(cell);
    }));
    container.appendChild(status);
    container.appendChild(grid);
    canvas.appendChild(container);
  }

  // --- AE. QUICK SORT PARTITION ---
  else if (visualizerState.algo === 'quicksortfull') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    container.style.paddingTop = '30px';
    container.style.paddingBottom = '30px';
    
    // Draw partition segment blocks
    const blocksWrap = document.createElement('div');
    blocksWrap.style.display = 'flex';
    blocksWrap.style.gap = '10px';
    blocksWrap.style.justifyContent = 'center';
    blocksWrap.style.marginTop = '20px';
    blocksWrap.style.flexWrap = 'wrap';
    
    step.array.forEach((val, idx) => {
      const block = document.createElement('div');
      block.style.padding = '8px 12px';
      block.style.borderRadius = '6px';
      block.style.border = '1px solid var(--border-color)';
      block.style.fontSize = '0.8rem';
      block.style.fontWeight = 'bold';
      block.style.fontFamily = 'monospace';
      block.style.textAlign = 'center';
      block.style.minWidth = '50px';
      
      const inPartition = idx >= step.left && idx <= step.right;
      const isPivot = idx === step.pivotIdx;
      const isSorted = step.sorted.includes(idx);
      
      let label = "Inactive";
      let bg = "rgba(255,255,255,0.02)";
      let borderC = "var(--border-color)";
      let textC = "var(--text-main)";
      
      if (isPivot) {
        label = "Pivot";
        bg = "rgba(6, 182, 212, 0.15)";
        borderC = "var(--accent-cyan)";
        textC = "var(--accent-cyan)";
      } else if (isSorted) {
        label = "Sorted";
        bg = "rgba(16, 185, 129, 0.15)";
        borderC = "var(--easy)";
        textC = "var(--easy)";
      } else if (inPartition) {
        label = "Subarray";
        bg = "rgba(245, 158, 11, 0.15)";
        borderC = "var(--warning)";
        textC = "var(--warning)";
      }
      
      block.style.background = bg;
      block.style.borderColor = borderC;
      block.style.color = textC;
      
      const valDiv = document.createElement('div');
      valDiv.style.fontSize = '1.05rem';
      valDiv.textContent = val;
      
      const lblDiv = document.createElement('div');
      lblDiv.style.fontSize = '0.6rem';
      lblDiv.style.color = textC;
      lblDiv.style.marginTop = '4px';
      lblDiv.textContent = label;
      
      block.appendChild(valDiv);
      block.appendChild(lblDiv);
      blocksWrap.appendChild(block);
    });
    container.appendChild(blocksWrap);
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'mergesort') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    container.style.paddingTop = '30px';
    container.style.paddingBottom = '30px';
    
    // Draw partition segment blocks
    const blocksWrap = document.createElement('div');
    blocksWrap.style.display = 'flex';
    blocksWrap.style.gap = '10px';
    blocksWrap.style.justifyContent = 'center';
    blocksWrap.style.marginTop = '20px';
    blocksWrap.style.flexWrap = 'wrap';
    
    step.array.forEach((val, idx) => {
      const block = document.createElement('div');
      block.style.padding = '8px 12px';
      block.style.borderRadius = '6px';
      block.style.border = '1px solid var(--border-color)';
      block.style.fontSize = '0.8rem';
      block.style.fontWeight = 'bold';
      block.style.fontFamily = 'monospace';
      block.style.textAlign = 'center';
      block.style.minWidth = '50px';
      
      const isMerging = step.merging && (idx >= step.left && idx <= step.right);
      const isSplit = (idx === step.splitL || idx === step.splitR);
      
      let label = "Unsorted";
      let bg = "rgba(255,255,255,0.02)";
      let borderC = "var(--border-color)";
      let textC = "var(--text-main)";
      
      if (isMerging) {
        label = "Merge";
        bg = "rgba(16, 185, 129, 0.15)";
        borderC = "var(--easy)";
        textC = "var(--easy)";
      } else if (isSplit) {
        label = "Split";
        bg = "rgba(244, 63, 94, 0.15)";
        borderC = "var(--hard)";
        textC = "var(--hard)";
      }
      
      block.style.background = bg;
      block.style.borderColor = borderC;
      block.style.color = textC;
      
      const valDiv = document.createElement('div');
      valDiv.style.fontSize = '1.05rem';
      valDiv.textContent = val;
      
      const lblDiv = document.createElement('div');
      lblDiv.style.fontSize = '0.6rem';
      lblDiv.style.color = textC;
      lblDiv.style.marginTop = '4px';
      lblDiv.textContent = label;
      
      block.appendChild(valDiv);
      block.appendChild(lblDiv);
      blocksWrap.appendChild(block);
    });
    container.appendChild(blocksWrap);
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'insertionsort') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    container.style.paddingTop = '50px';
    container.style.paddingBottom = '30px';
    
    // Draw partition segment blocks (boxes below the bars)
    const blocksWrap = document.createElement('div');
    blocksWrap.style.display = 'flex';
    blocksWrap.style.gap = '10px';
    blocksWrap.style.margin = '20px auto 0 auto';
    blocksWrap.style.width = 'max-content';
    blocksWrap.style.position = 'relative';
    
    step.array.forEach((val, idx) => {
      const block = document.createElement('div');
      block.style.padding = '8px 0';
      block.style.width = '64px';
      block.style.boxSizing = 'border-box';
      block.style.borderRadius = '6px';
      block.style.border = '1px solid var(--border-color)';
      block.style.fontSize = '0.8rem';
      block.style.fontWeight = 'bold';
      block.style.fontFamily = 'monospace';
      block.style.textAlign = 'center';
      
      const isSorted = idx < step.sortedCount;
      const isActive = idx === step.activeIdx;
      const isCompare = idx === step.compareIdx;
      
      let label = "Unsorted";
      let bg = "rgba(255,255,255,0.02)";
      let borderC = "var(--border-color)";
      let textC = "var(--text-main)";
      
      if (isActive) {
        label = "Key";
        bg = "rgba(236, 72, 153, 0.15)";
        borderC = "var(--secondary)";
        textC = "var(--secondary)";
      } else if (isCompare) {
        label = "Compare";
        bg = "rgba(6, 182, 212, 0.15)";
        borderC = "var(--accent-cyan)";
        textC = "var(--accent-cyan)";
      } else if (isSorted) {
        label = "Sorted";
        bg = "rgba(16, 185, 129, 0.15)";
        borderC = "var(--easy)";
        textC = "var(--easy)";
      }
      
      block.style.background = bg;
      block.style.borderColor = borderC;
      block.style.color = textC;
      
      const valDiv = document.createElement('div');
      valDiv.style.fontSize = '1.05rem';
      valDiv.textContent = val;
      
      const lblDiv = document.createElement('div');
      lblDiv.style.fontSize = '0.6rem';
      lblDiv.style.color = textC;
      lblDiv.style.marginTop = '4px';
      lblDiv.textContent = label;
      
      block.appendChild(valDiv);
      block.appendChild(lblDiv);
      blocksWrap.appendChild(block);
    });
    
    // 3. Draw insertion arrow if active & comparing
    if (step.activeIdx >= 0 && step.compareIdx >= 0) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.style.position = 'absolute';
      svg.style.top = '-45px'; 
      svg.style.left = '0';
      svg.style.width = '100%';
      svg.style.height = '45px';
      svg.style.pointerEvents = 'none';
      svg.style.zIndex = '10';
      
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
      marker.setAttribute("id", "arr-head");
      marker.setAttribute("viewBox", "0 0 10 10");
      marker.setAttribute("refX", "5");
      marker.setAttribute("refY", "5");
      marker.setAttribute("markerWidth", "6");
      marker.setAttribute("markerHeight", "6");
      marker.setAttribute("orient", "auto-start-reverse");
      
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
      path.setAttribute("fill", "var(--secondary)");
      marker.appendChild(path);
      defs.appendChild(marker);
      svg.appendChild(defs);
      
      const startX = step.activeIdx * 74 + 32; 
      const endX = step.compareIdx * 74 + 32;
      
      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const dy = -25;
      const dPath = `M ${startX} 43 Q ${(startX + endX)/2} 10 ${endX} 43`;
      line.setAttribute("d", dPath);
      line.setAttribute("stroke", "var(--secondary)");
      line.setAttribute("stroke-width", "2.5");
      line.setAttribute("fill", "none");
      line.setAttribute("marker-end", "url(#arr-head)");
      svg.appendChild(line);
      blocksWrap.appendChild(svg);
    }
    
    container.appendChild(blocksWrap);
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'quicksort') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    container.style.paddingTop = '30px';
    container.style.paddingBottom = '30px';
    
    // Draw partition segment blocks
    const blocksWrap = document.createElement('div');
    blocksWrap.style.display = 'flex';
    blocksWrap.style.gap = '10px';
    blocksWrap.style.justifyContent = 'center';
    blocksWrap.style.marginTop = '20px';
    blocksWrap.style.flexWrap = 'wrap';
    
    step.array.forEach((val, idx) => {
      const block = document.createElement('div');
      block.style.padding = '8px 12px';
      block.style.borderRadius = '6px';
      block.style.border = '1px solid var(--border-color)';
      block.style.fontSize = '0.8rem';
      block.style.fontWeight = 'bold';
      block.style.fontFamily = 'monospace';
      block.style.textAlign = 'center';
      block.style.minWidth = '50px';
      
      let label = "";
      let bg = "rgba(255,255,255,0.02)";
      let borderC = "var(--border-color)";
      let textC = "var(--text-main)";
      
      if (idx === step.pivot) {
        label = "Pivot";
        bg = "rgba(6, 182, 212, 0.15)";
        borderC = "var(--accent-cyan)";
        textC = "var(--accent-cyan)";
      } else if (idx < step.i) {
        label = "≤ Pivot";
        bg = "rgba(16, 185, 129, 0.15)";
        borderC = "var(--easy)";
        textC = "var(--easy)";
      } else if (idx >= step.i && idx < step.j) {
        label = "> Pivot";
        bg = "rgba(244, 63, 94, 0.15)";
        borderC = "var(--hard)";
        textC = "var(--hard)";
      } else if (idx >= step.j && idx < step.pivot) {
        label = "Unsorted";
        bg = "rgba(255,255,255,0.04)";
        borderC = "rgba(255,255,255,0.1)";
        textC = "var(--text-muted)";
      } else if (idx > step.pivot) {
        label = "Sorted";
        bg = "rgba(16, 185, 129, 0.25)";
        borderC = "var(--easy)";
        textC = "var(--easy)";
      }
      
      block.style.background = bg;
      block.style.borderColor = borderC;
      block.style.color = textC;
      
      const valDiv = document.createElement('div');
      valDiv.style.fontSize = '1.05rem';
      valDiv.textContent = val;
      
      const lblDiv = document.createElement('div');
      lblDiv.style.fontSize = '0.6rem';
      lblDiv.style.color = textC;
      lblDiv.style.marginTop = '4px';
      lblDiv.textContent = label;
      
      block.appendChild(valDiv);
      block.appendChild(lblDiv);
      blocksWrap.appendChild(block);
    });
    container.appendChild(blocksWrap);
    
    // 3. Draw status variables
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `i = <span style="color:var(--easy);font-weight:bold">${step.i}</span> &nbsp;|&nbsp; j = <span style="color:var(--hard);font-weight:bold">${step.j}</span> &nbsp;|&nbsp; pivot = <span style="color:var(--accent-cyan);font-weight:bold">${step.pivot}</span>`;
    container.appendChild(status);
    
    canvas.appendChild(container);
  }

  // --- AF. BFS GRID SHORTEST PATH ---
  else if (visualizerState.algo === 'bfsgrid') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const grid = document.createElement('div');
    grid.className = 'bfs-grid';
    grid.style.gridTemplateColumns = `repeat(${step.grid[0].length}, 46px)`;
    step.grid.forEach((row, r) => row.forEach((val, c) => {
      const cell = document.createElement('div');
      cell.className = 'bfs-cell';
      if (val === 1) cell.classList.add('wall');
      if (step.dist[r][c] >= 0) cell.classList.add('visited');
      if (step.active && step.active[0] === r && step.active[1] === c) cell.classList.add('active');
      if (step.target && step.target[0] === r && step.target[1] === c) cell.classList.add('target');
      cell.textContent = val === 1 ? '' : (step.dist[r][c] >= 0 ? step.dist[r][c] : '');
      grid.appendChild(cell);
    }));
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Queue <strong>${step.queue.map(([r,c]) => `(${r},${c})`).join(' ') || 'empty'}</strong>`;
    container.appendChild(grid);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AG. LRU CACHE ---
  else if (visualizerState.algo === 'lrucache') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const row = document.createElement('div');
    row.className = 'cache-row';
    step.order.forEach((key, idx) => {
      const card = document.createElement('div');
      card.className = 'cache-card';
      if (key === step.active) card.classList.add('active');
      if (key === step.evicted) card.classList.add('evicted');
      card.innerHTML = `<strong>${key}</strong><span>${step.map[key]}</span><em>${idx === 0 ? 'MRU' : idx === step.order.length - 1 ? 'LRU' : ''}</em>`;
      row.appendChild(card);
    });
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Capacity <strong>${step.capacity}</strong> | Active <strong>${step.active ?? '-'}</strong> | Evicted <strong>${step.evicted ?? '-'}</strong>`;
    container.appendChild(row);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AH. SLIDING WINDOW MAXIMUM ---
  else if (visualizerState.algo === 'slidingmax') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const row = document.createElement('div');
    row.className = 'dp1d-row';
    step.nums.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      if (idx > step.r - step.k && idx <= step.r) cell.classList.add('dp1d-filled');
      if (step.dq.includes(idx)) cell.classList.add('dp1d-active');
      cell.innerHTML = `<div class="dp1d-cell-val">${val}</div><div class="dp1d-cell-idx">[${idx}]</div>`;
      row.appendChild(cell);
    });
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Deque indexes <strong>${step.dq.join(' -> ') || 'empty'}</strong> | Output <strong>${step.out.join(', ') || '-'}</strong>`;
    container.appendChild(row);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AI. COIN CHANGE DP ---
  else if (visualizerState.algo === 'coinchange') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const row = document.createElement('div');
    row.className = 'dp1d-row';
    step.dp.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      if (idx === step.active) cell.classList.add('dp1d-active');
      else if (val !== Infinity) cell.classList.add('dp1d-filled');
      cell.innerHTML = `<div class="dp1d-cell-val">${val === Infinity ? '∞' : val}</div><div class="dp1d-cell-idx">$${idx}</div>`;
      row.appendChild(cell);
    });
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Coins <strong>${step.coins.join(', ')}</strong> | Active coin <strong>${step.coin ?? '-'}</strong>`;
    container.appendChild(row);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AJ. KRUSKAL MST ---
  else if (visualizerState.algo === 'kruskal') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const edgeRow = document.createElement('div');
    edgeRow.className = 'mst-edge-row';
    step.edges.forEach(edge => {
      const pill = document.createElement('div');
      pill.className = 'mst-edge-pill';
      if (step.activeEdge && step.activeEdge.u === edge.u && step.activeEdge.v === edge.v) pill.classList.add('active');
      if (step.mst.some(e => e.u === edge.u && e.v === edge.v)) pill.classList.add('chosen');
      pill.textContent = `${edge.u}-${edge.v} (${edge.w})`;
      edgeRow.appendChild(pill);
    });
    const parentRow = document.createElement('div');
    parentRow.className = 'uf-parent-row';
    step.parent.forEach((parent, idx) => {
      const cell = document.createElement('div');
      cell.className = 'dp1d-cell';
      cell.innerHTML = `<div class="dp1d-cell-val">${parent}</div><div class="dp1d-cell-idx">p[${idx}]</div>`;
      parentRow.appendChild(cell);
    });
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `MST edges <strong>${step.mst.map(e => `${e.u}-${e.v}`).join(', ') || '-'}</strong>`;
    container.appendChild(edgeRow);
    container.appendChild(parentRow);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AK. MEDIAN FINDER ---
  else if (visualizerState.algo === 'medianfinder') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const heaps = document.createElement('div');
    heaps.className = 'median-heaps';
    [['Lower max-heap', step.small], ['Upper min-heap', step.large]].forEach(([label, heap]) => {
      const box = document.createElement('div');
      box.className = 'median-heap-box';
      box.innerHTML = `<span>${label}</span>`;
      heap.forEach(val => {
        const item = document.createElement('strong');
        item.textContent = val;
        if (val === step.active) item.classList.add('active');
        box.appendChild(item);
      });
      heaps.appendChild(box);
    });
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Inserted <strong>${step.active ?? '-'}</strong> | Median <strong>${step.median ?? '-'}</strong>`;
    container.appendChild(heaps);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AL. SUDOKU SOLVER ---
  else if (visualizerState.algo === 'sudoku') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    const board = document.createElement('div');
    board.className = 'sudoku-board';
    step.board.forEach((row, r) => row.forEach((val, c) => {
      const cell = document.createElement('div');
      cell.className = 'sudoku-cell';
      if (step.active && step.active[0] === r && step.active[1] === c) cell.classList.add('active');
      if (step.conflict && step.conflict[0] === r && step.conflict[1] === c) cell.classList.add('conflict');
      cell.textContent = val === '.' ? '' : val;
      board.appendChild(cell);
    }));
    const status = document.createElement('div');
    status.className = 'concept-status';
    status.innerHTML = `Candidate <strong>${step.candidate ?? '-'}</strong>`;
    container.appendChild(board);
    container.appendChild(status);
    canvas.appendChild(container);
  }

  // --- AVL Tree Drawer ---
  else if (visualizerState.algo === 'avl') {
    const container = document.createElement('div');
    container.className = 'tree-container';
    
    const treeCoords = [
      { x: 228, y: 20 },   
      { x: 110, y: 85 },   
      { x: 346, y: 85 },   
      { x: 50,  y: 155 },  
      { x: 170, y: 155 },  
      { x: 286, y: 155 },  
      { x: 406, y: 155 }   
    ];
    
    const flatTree = new Array(7).fill(null);
    function flatten(node, idx) {
      if (!node || idx >= 7) return;
      flatTree[idx] = node;
      flatten(node.left, idx * 2 + 1);
      flatten(node.right, idx * 2 + 2);
    }
    flatten(step.tree, 0);
    
    flatTree.forEach((nodeData, idx) => {
      if (!nodeData) return;
      const c = treeCoords[idx];
      const node = document.createElement('div');
      node.className = 'tree-node';
      node.style.left = `${c.x}px`;
      node.style.top = `${c.y}px`;
      
      const valSpan = document.createElement('span');
      valSpan.className = 'tree-node-val';
      valSpan.textContent = nodeData.val;
      node.appendChild(valSpan);
      
      const bfSpan = document.createElement('span');
      bfSpan.style.fontSize = '0.65rem';
      bfSpan.style.color = Math.abs(nodeData.bf) > 1 ? 'var(--accent-red)' : 'var(--text-muted)';
      bfSpan.textContent = `BF:${nodeData.bf}`;
      bfSpan.style.marginTop = '2px';
      node.appendChild(bfSpan);
      
      if (nodeData.val === step.activeNode) node.classList.add('scanning');
      
      container.appendChild(node);
    });
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    
    const treeLinks = [
      { from: 0, to: 1 }, { from: 0, to: 2 },
      { from: 1, to: 3 }, { from: 1, to: 4 },
      { from: 2, to: 5 }, { from: 2, to: 6 }
    ];
    
    treeLinks.forEach(l => {
      if (!flatTree[l.from] || !flatTree[l.to]) return;
      const from = treeCoords[l.from];
      const to = treeCoords[l.to];
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      
      const r = 22; 
      line.setAttribute("x1", from.x + r);
      line.setAttribute("y1", from.y + r);
      line.setAttribute("x2", to.x + r);
      line.setAttribute("y2", to.y + r);
      line.setAttribute("stroke", "rgba(255,255,255,0.15)");
      line.setAttribute("stroke-width", "1.5");
      svg.appendChild(line);
    });
    
    container.appendChild(svg);
    canvas.appendChild(container);
  }

  // --- Huffman Tree Drawer ---
  else if (visualizerState.algo === 'huffman') {
    const container = document.createElement('div');
    container.className = 'concept-vis-container';
    container.style.flexDirection = 'column';
    container.style.gap = '1rem';
    
    const queueTitle = document.createElement('div');
    queueTitle.className = 'prefixsum-label';
    queueTitle.innerHTML = `Priority Queue (Sorted Forests):`;
    container.appendChild(queueTitle);
    
    const queueRow = document.createElement('div');
    queueRow.style.display = 'flex';
    queueRow.style.flexWrap = 'wrap';
    queueRow.style.gap = '0.5rem';
    queueRow.style.justifyContent = 'center';
    
    step.queue.forEach(node => {
      const card = document.createElement('div');
      card.className = 'hash-pair';
      if (node.val === step.mergedNode) card.classList.add('scanning');
      card.innerHTML = `<strong style="color:var(--accent-cyan)">${node.val}</strong> : ${node.freq}`;
      queueRow.appendChild(card);
    });
    container.appendChild(queueRow);
    
    if (step.queue.length > 0) {
      const treeTitle = document.createElement('div');
      treeTitle.className = 'prefixsum-label';
      treeTitle.innerHTML = `Active Huffman Tree:`;
      container.appendChild(treeTitle);
      
      const treeContainer = document.createElement('div');
      treeContainer.style.display = 'flex';
      treeContainer.style.justifyContent = 'center';
      treeContainer.style.width = '100%';
      
      const rootNode = step.queue[step.queue.length - 1];
      
      function drawHuffmanNode(n) {
        if (!n) return '';
        const hasChildren = n.left || n.right;
        const leftHtml = n.left ? `
          <div style="display:flex; flex-direction:column; align-items:center; position:relative;">
            <span style="position:absolute; top:-12px; left:-5px; font-size:0.65rem; color:var(--text-muted);">0</span>
            ${drawHuffmanNode(n.left)}
          </div>
        ` : '';
        const rightHtml = n.right ? `
          <div style="display:flex; flex-direction:column; align-items:center; position:relative;">
            <span style="position:absolute; top:-12px; right:-5px; font-size:0.65rem; color:var(--text-muted);">1</span>
            ${drawHuffmanNode(n.right)}
          </div>
        ` : '';
        
        return `
          <div style="display:flex; flex-direction:column; align-items:center; margin: 0 0.4rem;">
            <div class="uf-node root" style="width: 44px; height: 44px; border-radius: 50%; font-size: 0.72rem; border:1px solid var(--accent-cyan); background:rgba(0,188,212,0.08); display:flex; flex-direction:column; justify-content:center; align-items:center;">
              <strong>${n.val}</strong>
              <span style="font-size:0.58rem; color:var(--text-muted); integrity: 100%;">${n.freq}</span>
            </div>
            ${hasChildren ? `
              <div style="display:flex; gap:0.8rem; margin-top:1rem; border-top:1px dashed rgba(255,255,255,0.15); padding-top:0.4rem;">
                ${leftHtml}
                ${rightHtml}
              </div>
            ` : ''}
          </div>
        `;
      }
      
      treeContainer.innerHTML = drawHuffmanNode(rootNode);
      container.appendChild(treeContainer);
    }
    
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'rbtree') {
    const container = document.createElement('div');
    container.className = 'tree-container';
    
    // Create SVG container for lines
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    
    // Draw links using SVG
    step.nodes.forEach(n => {
      if (n.left !== null) {
        const child = step.nodes.find(c => c.val === n.left);
        if (child) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", n.x + 22);
          line.setAttribute("y1", n.y + 22);
          line.setAttribute("x2", child.x + 22);
          line.setAttribute("y2", child.y + 22);
          line.setAttribute("stroke", "rgba(255,255,255,0.15)");
          line.setAttribute("stroke-width", "1.5");
          svg.appendChild(line);
        }
      }
      if (n.right !== null) {
        const child = step.nodes.find(c => c.val === n.right);
        if (child) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", n.x + 22);
          line.setAttribute("y1", n.y + 22);
          line.setAttribute("x2", child.x + 22);
          line.setAttribute("y2", child.y + 22);
          line.setAttribute("stroke", "rgba(255,255,255,0.15)");
          line.setAttribute("stroke-width", "1.5");
          svg.appendChild(line);
        }
      }
    });
    container.appendChild(svg);
    
    // Draw nodes
    step.nodes.forEach(n => {
      const node = document.createElement('div');
      node.className = 'tree-node ' + (n.color === 'red' ? 'rb-red' : 'rb-black');
      node.style.left = `${n.x}px`;
      node.style.top = `${n.y}px`;
      node.style.position = 'absolute';
      
      const valSpan = document.createElement('span');
      valSpan.className = 'tree-node-val';
      valSpan.style.color = '#ffffff';
      valSpan.textContent = n.val;
      node.appendChild(valSpan);
      
      container.appendChild(node);
    });
    
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'netflow') {
    const container = document.createElement('div');
    container.className = 'tree-container';
    
    const nodeCoords = {
      'S': { x: 40, y: 120 },
      'A': { x: 220, y: 40 },
      'B': { x: 220, y: 200 },
      'T': { x: 400, y: 120 }
    };
    
    // Create SVG container for lines
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    
    // Draw links using SVG
    step.flows.forEach(e => {
      const fromC = nodeCoords[e.u];
      const toC = nodeCoords[e.v];
      
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      const edgeKey = `${e.u}-${e.v}`;
      const isActive = step.activeEdges.includes(edgeKey);
      
      line.setAttribute("x1", fromC.x + 22);
      line.setAttribute("y1", fromC.y + 22);
      line.setAttribute("x2", toC.x + 22);
      line.setAttribute("y2", toC.y + 22);
      
      if (isActive) {
        line.setAttribute("stroke", "var(--accent-cyan)");
        line.setAttribute("stroke-width", "3");
      } else {
        line.setAttribute("stroke", "rgba(255,255,255,0.15)");
        line.setAttribute("stroke-width", "1.5");
      }
      svg.appendChild(line);
      
      // Label text
      const label = document.createElement('div');
      label.style.position = 'absolute';
      const dx = toC.x - fromC.x;
      const dy = toC.y - fromC.y;
      label.style.left = `${fromC.x + dx/2 + 10}px`;
      label.style.top = `${fromC.y + dy/2 - 10}px`;
      label.style.fontSize = '0.75rem';
      label.style.color = isActive ? 'var(--accent-cyan)' : 'var(--text-muted)';
      label.style.fontFamily = 'monospace';
      label.style.fontWeight = 'bold';
      label.textContent = `${e.flow}/${e.cap}`;
      container.appendChild(label);
    });
    container.appendChild(svg);
    
    // Draw node circles
    Object.keys(nodeCoords).forEach(id => {
      const coord = nodeCoords[id];
      const node = document.createElement('div');
      node.className = 'tree-node';
      node.style.position = 'absolute';
      node.style.left = `${coord.x}px`;
      node.style.top = `${coord.y}px`;
      
      if (step.path.includes(id)) {
        node.style.borderColor = 'var(--accent-cyan)';
        node.style.background = 'rgba(0,188,212,0.15)';
      }
      
      const valSpan = document.createElement('span');
      valSpan.className = 'tree-node-val';
      valSpan.textContent = id;
      node.appendChild(valSpan);
      container.appendChild(node);
    });
    
    // Total Flow Label
    const totalLabel = document.createElement('div');
    totalLabel.style.position = 'absolute';
    totalLabel.style.bottom = '10px';
    totalLabel.style.left = '10px';
    totalLabel.style.fontSize = '0.85rem';
    totalLabel.style.fontWeight = 'bold';
    totalLabel.style.color = 'var(--accent-cyan)';
    totalLabel.textContent = `Total Flow: ${step.maxFlow}`;
    container.appendChild(totalLabel);
    
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'singlenumber') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    
    const arrayWrap = document.createElement('div');
    arrayWrap.style.display = 'flex';
    arrayWrap.style.gap = '10px';
    arrayWrap.style.marginBottom = '25px';
    
    step.array.forEach((val, idx) => {
      const cell = document.createElement('div');
      cell.className = 'bs-element';
      cell.textContent = val;
      if (idx === step.index) {
        cell.style.borderColor = 'var(--secondary)';
        cell.style.background = 'rgba(236,72,153,0.15)';
      }
      arrayWrap.appendChild(cell);
    });
    container.appendChild(arrayWrap);
    
    // Register display
    const registers = document.createElement('div');
    registers.style.display = 'flex';
    registers.style.flexDirection = 'column';
    registers.style.gap = '12px';
    registers.style.width = '240px';
    registers.style.fontFamily = 'monospace';
    registers.style.fontSize = '0.95rem';
    
    registers.innerHTML = `
      <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:6px;">
        <span>Active Val:</span><strong>${step.index >= 0 ? step.array[step.index] : '0'} (${step.binaryVal})</strong>
      </div>
      <div style="display:flex; justify-content:space-between; color:var(--accent-cyan);">
        <span>XOR Acc:</span><strong>${step.acc} (&nbsp;${step.binaryAcc}&nbsp;)</strong>
      </div>
    `;
    container.appendChild(registers);
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'bitmasksubsets') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.gap = '30px';
    container.style.width = '100%';
    container.style.justifyContent = 'space-around';
    
    // Left: Active state
    const leftPanel = document.createElement('div');
    leftPanel.style.display = 'flex';
    leftPanel.style.flexDirection = 'column';
    leftPanel.style.gap = '15px';
    leftPanel.innerHTML = `
      <div style="font-size:0.9rem; color:var(--text-muted);">Elements: <strong>[A, B, C]</strong></div>
      <div style="font-family:monospace; font-size:1.1rem;">
        Mask: <span style="color:var(--accent-cyan); font-weight:bold;">${step.mask}</span> &rarr; 
        <span style="color:var(--secondary); font-weight:bold;">${step.binaryMask}</span>
      </div>
      <div style="font-size:0.95rem; font-weight:bold; color:var(--easy);">
        Active Subset: [${step.activeSubset.join(', ')}]
      </div>
    `;
    container.appendChild(leftPanel);
    
    // Right: Subsets accumulated list
    const rightPanel = document.createElement('div');
    rightPanel.style.width = '200px';
    rightPanel.style.maxHeight = '220px';
    rightPanel.style.overflowY = 'auto';
    rightPanel.style.border = '1px solid var(--border-color)';
    rightPanel.style.borderRadius = '6px';
    rightPanel.style.padding = '10px';
    rightPanel.style.background = 'rgba(255,255,255,0.02)';
    
    const title = document.createElement('div');
    title.style.fontSize = '0.75rem';
    title.style.color = 'var(--text-muted)';
    title.style.marginBottom = '6px';
    title.style.fontWeight = 'bold';
    title.textContent = "ACCUMULATED SUBSETS:";
    rightPanel.appendChild(title);
    
    step.subsetsList.forEach(s => {
      const el = document.createElement('div');
      el.style.fontSize = '0.85rem';
      el.style.fontFamily = 'monospace';
      el.style.padding = '2px 0';
      el.textContent = s;
      rightPanel.appendChild(el);
    });
    container.appendChild(rightPanel);
    
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'bitmaskdp') {
    const container = document.createElement('div');
    container.className = 'tsp-container';
    
    const graphPanel = document.createElement('div');
    graphPanel.className = 'tsp-graph-panel';
    
    const graphTitle = document.createElement('div');
    graphTitle.className = 'tsp-table-header';
    graphTitle.textContent = 'Complete Weighted Graph (TSP)';
    graphPanel.appendChild(graphTitle);
    
    const graphWrapper = document.createElement('div');
    graphWrapper.className = 'tsp-graph-wrapper';
    
    const coords = [
      { x: 80, y: 30, name: 'A' },
      { x: 320, y: 30, name: 'B' },
      { x: 320, y: 220, name: 'C' },
      { x: 80, y: 220, name: 'D' }
    ];
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    
    const edgesList = [
      { u: 0, v: 1, w: 10, mid: { x: 222, y: 52 } },
      { u: 0, v: 2, w: 15, mid: { x: 222, y: 165 } },
      { u: 0, v: 3, w: 20, mid: { x: 102, y: 147 } },
      { u: 1, v: 2, w: 35, mid: { x: 342, y: 147 } },
      { u: 1, v: 3, w: 25, mid: { x: 222, y: 125 } },
      { u: 2, v: 3, w: 30, mid: { x: 222, y: 242 } }
    ];
    
    edgesList.forEach(e => {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      const from = coords[e.u];
      const to = coords[e.v];
      
      line.setAttribute("x1", from.x + 22);
      line.setAttribute("y1", from.y + 22);
      line.setAttribute("x2", to.x + 22);
      line.setAttribute("y2", to.y + 22);
      
      const isInTour = step.inTour.some(te => 
        (te.from === e.u && te.to === e.v) || (te.from === e.v && te.to === e.u)
      );
      
      const isActive = step.activeEdge && (
        (step.activeEdge.from === e.u && step.activeEdge.to === e.v) ||
        (step.activeEdge.from === e.v && step.activeEdge.to === e.u)
      );
      
      if (isInTour) {
        line.setAttribute("stroke", "var(--easy)");
        line.setAttribute("stroke-width", "4");
      } else if (isActive) {
        line.setAttribute("stroke", "var(--secondary)");
        line.setAttribute("stroke-width", "3.5");
        line.setAttribute("stroke-dasharray", "4,4");
        line.innerHTML = `<animate attributeName="stroke-dashoffset" values="0;20" dur="1s" repeatCount="indefinite" />`;
      } else {
        line.setAttribute("stroke", "rgba(255,255,255,0.08)");
        line.setAttribute("stroke-width", "1.5");
      }
      svg.appendChild(line);
      
      const label = document.createElement('div');
      label.className = 'tsp-edge-label';
      if (isInTour) label.classList.add('in-tour');
      else if (isActive) label.classList.add('active');
      label.style.left = `${e.mid.x}px`;
      label.style.top = `${e.mid.y}px`;
      label.textContent = e.w;
      graphWrapper.appendChild(label);
    });
    
    graphWrapper.appendChild(svg);
    
    coords.forEach((coord, idx) => {
      const el = document.createElement('div');
      el.className = 'tsp-node';
      el.style.left = `${coord.x}px`;
      el.style.top = `${coord.y}px`;
      el.textContent = coord.name;
      
      const isVisited = (step.activeMask & (1 << idx)) > 0;
      if (isVisited) el.classList.add('visited');
      
      if (step.activeNode === idx) {
        el.classList.remove('visited');
        el.classList.add('active');
      }
      
      if (step.candidateNode === idx) {
        el.classList.remove('visited');
        el.classList.add('neighbor');
      }
      
      graphWrapper.appendChild(el);
    });
    
    graphPanel.appendChild(graphWrapper);
    
    const graphInfo = document.createElement('div');
    graphInfo.className = 'tsp-info-box';
    graphInfo.innerHTML = `
      <div style="font-weight:bold; color:var(--accent-cyan); margin-bottom:4px;">Recurrence formula:</div>
      <code>dp[mask][u] = min(dp[mask][u], dp[mask \\ {u}][v] + dist[v][u])</code>
    `;
    graphPanel.appendChild(graphInfo);
    container.appendChild(graphPanel);
    
    const tablePanel = document.createElement('div');
    tablePanel.className = 'tsp-table-panel';
    
    const tableTitle = document.createElement('div');
    tableTitle.className = 'tsp-table-header';
    tableTitle.textContent = 'DP Table dp[mask][u]';
    tablePanel.appendChild(tableTitle);
    
    const tableScroll = document.createElement('div');
    tableScroll.className = 'tsp-table-scroll';
    
    const table = document.createElement('table');
    table.className = 'tsp-table';
    
    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr>
        <th style="width:30%">Mask (Bin)</th>
        <th style="width:17.5%">A (0)</th>
        <th style="width:17.5%">B (1)</th>
        <th style="width:17.5%">C (2)</th>
        <th style="width:17.5%">D (3)</th>
      </tr>
    `;
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    for (let mask = 0; mask < 16; mask++) {
      const tr = document.createElement('tr');
      if (step.activeMask === mask) {
        tr.className = 'active-row';
      }
      
      const toBin = (v) => v.toString(2).padStart(4, '0');
      
      const desc = [];
      if (mask & 1) desc.push('A');
      if (mask & 2) desc.push('B');
      if (mask & 4) desc.push('C');
      if (mask & 8) desc.push('D');
      
      let tdMask = document.createElement('td');
      tdMask.innerHTML = `<span style="font-family:monospace; font-weight:bold; color:var(--text-muted);">${toBin(mask)}</span> <span style="font-size:0.7rem; color:var(--text-muted); font-weight:normal;">{${desc.join(',')}}</span>`;
      tr.appendChild(tdMask);
      
      for (let u = 0; u < 4; u++) {
        const td = document.createElement('td');
        const val = step.dp[mask][u];
        
        if (val === Infinity) {
          td.textContent = '∞';
          td.className = 'cell-infinity';
        } else {
          td.textContent = val;
          if (mask === 1 && u === 0) {
            td.className = 'cell-base';
          }
        }
        
        if (step.activeMask === mask && step.activeNode === u) {
          td.className = 'cell-active';
        }
        
        const nextMask = step.activeMask | (1 << step.candidateNode);
        if (step.candidateNode !== null && nextMask === mask && step.candidateNode === u) {
          td.className = 'cell-candidate';
        }
        
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    tableScroll.appendChild(table);
    tablePanel.appendChild(tableScroll);
    container.appendChild(tablePanel);
    
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'kosaraju') {
    const container = document.createElement('div');
    container.className = 'scc-container';
    
    const graphPanel = document.createElement('div');
    graphPanel.className = 'scc-graph-panel';
    
    const graphTitle = document.createElement('div');
    graphTitle.className = 'tsp-table-header';
    graphTitle.textContent = step.reversed ? 'Transposed Directed Graph (G^T)' : 'Original Directed Graph (G)';
    graphPanel.appendChild(graphTitle);
    
    const graphWrapper = document.createElement('div');
    graphWrapper.className = 'scc-graph-wrapper';
    
    const coords = [
      { x: 30, y: 130, name: 'A' },
      { x: 150, y: 40, name: 'B' },
      { x: 150, y: 220, name: 'C' },
      { x: 270, y: 130, name: 'D' },
      { x: 390, y: 130, name: 'E' }
    ];
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    
    svg.innerHTML = `
      <defs>
        <marker id="scc-arrow" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.4)" />
        </marker>
        <marker id="scc-arrow-active" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--secondary)" />
        </marker>
      </defs>
    `;
    
    let edges = [];
    if (step.reversed) {
      edges = [
        { u: 1, v: 0 },
        { u: 2, v: 1 },
        { u: 0, v: 2 },
        { u: 3, v: 1 },
        { u: 4, v: 3, offset: -6 },
        { u: 3, v: 4, offset: 6 }
      ];
    } else {
      edges = [
        { u: 0, v: 1 },
        { u: 1, v: 2 },
        { u: 2, v: 0 },
        { u: 1, v: 3 },
        { u: 3, v: 4, offset: -6 },
        { u: 4, v: 3, offset: 6 }
      ];
    }
    
    edges.forEach(e => {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      const from = coords[e.u];
      const to = coords[e.v];
      
      const offset = e.offset || 0;
      
      line.setAttribute("x1", from.x + 22);
      line.setAttribute("y1", from.y + 22 + offset);
      line.setAttribute("x2", to.x + 22);
      line.setAttribute("y2", to.y + 22 + offset);
      
      const isActive = step.scanningEdge && (step.scanningEdge.from === e.u && step.scanningEdge.to === e.v);
      
      if (isActive) {
        line.setAttribute("stroke", "var(--secondary)");
        line.setAttribute("stroke-width", "3");
        line.setAttribute("marker-end", "url(#scc-arrow-active)");
      } else {
        line.setAttribute("stroke", "rgba(255,255,255,0.15)");
        line.setAttribute("stroke-width", "1.5");
        line.setAttribute("marker-end", "url(#scc-arrow)");
      }
      svg.appendChild(line);
    });
    
    graphWrapper.appendChild(svg);
    
    coords.forEach((coord, idx) => {
      const el = document.createElement('div');
      el.className = 'scc-node';
      el.style.left = `${coord.x}px`;
      el.style.top = `${coord.y}px`;
      el.textContent = coord.name;
      
      if (step.activeNode === idx) {
        el.classList.add('active');
      } else if (step.nodeComponents && step.nodeComponents[idx] !== undefined) {
        el.classList.add(`scc-group-${step.nodeComponents[idx]}`);
      } else if (step.phase === 1 && step.visited.includes(idx)) {
        el.classList.add('visited-pass1');
      }
      
      graphWrapper.appendChild(el);
    });
    
    graphPanel.appendChild(graphWrapper);
    
    const legend = document.createElement('div');
    legend.className = 'tsp-info-box';
    legend.innerHTML = `
      <div style="font-weight:bold; color:var(--accent-cyan); margin-bottom:4px;">Kosaraju's Phase Info:</div>
      <span style="font-size:0.75rem;">
        Phase 1: DFS tracking finish stack. <br>
        Phase 2: Transpose (reverse) edges. <br>
        Phase 3: Pop from stack and run DFS to group SCCs.
      </span>
    `;
    graphPanel.appendChild(legend);
    container.appendChild(graphPanel);
    
    const sidebar = document.createElement('div');
    sidebar.className = 'scc-sidebar';
    
    const stackBox = document.createElement('div');
    stackBox.className = 'scc-panel-box';
    
    const stackTitle = document.createElement('div');
    stackTitle.className = 'tsp-table-header';
    stackTitle.textContent = 'Finish Stack (DFS 1)';
    stackBox.appendChild(stackTitle);
    
    const stackScroll = document.createElement('div');
    stackScroll.className = 'scc-stack-scroll';
    
    const stackContainer = document.createElement('div');
    stackContainer.className = 'scc-stack-container';
    
    step.stack.forEach((val, idx) => {
      const el = document.createElement('div');
      el.className = 'scc-stack-el';
      el.textContent = coords[val].name;
      if (step.poppingVal === val) {
        el.classList.add('popping');
      }
      stackContainer.appendChild(el);
    });
    stackScroll.appendChild(stackContainer);
    stackBox.appendChild(stackScroll);
    sidebar.appendChild(stackBox);
    
    const sccBox = document.createElement('div');
    sccBox.className = 'scc-panel-box';
    
    const sccTitle = document.createElement('div');
    sccTitle.className = 'tsp-table-header';
    sccTitle.textContent = 'Strongly Connected Components';
    sccBox.appendChild(sccTitle);
    
    const sccContainer = document.createElement('div');
    sccContainer.className = 'scc-groups-container';
    
    if (step.sccs && step.sccs.length > 0) {
      step.sccs.forEach((comp, idx) => {
        const el = document.createElement('div');
        el.className = `scc-group-card group-${idx % 2}`;
        el.innerHTML = `<strong>Component ${idx + 1}:</strong> { ${comp.join(', ')} }`;
        sccContainer.appendChild(el);
      });
    } else {
      const emptyMsg = document.createElement('div');
      emptyMsg.style.fontSize = '0.8rem';
      emptyMsg.style.color = 'var(--text-muted)';
      emptyMsg.style.textAlign = 'center';
      emptyMsg.style.marginTop = '20px';
      emptyMsg.textContent = 'No components identified yet.';
      sccContainer.appendChild(emptyMsg);
    }
    sccBox.appendChild(sccContainer);
    sidebar.appendChild(sccBox);
    container.appendChild(sidebar);
    
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'binaryaddition') {
    const container = document.createElement('div');
    container.className = 'advanced-vis-container';
    
    const registers = document.createElement('div');
    registers.style.display = 'flex';
    registers.style.flexDirection = 'column';
    registers.style.gap = '10px';
    registers.style.width = '240px';
    registers.style.fontFamily = 'monospace';
    
    registers.innerHTML = `
      <div style="display:flex; justify-content:space-between;">
        <span>Register A:</span><strong>${step.a} (${step.binaryA})</strong>
      </div>
      <div style="display:flex; justify-content:space-between; border-bottom:1px dashed rgba(255,255,255,0.1); padding-bottom:6px;">
        <span>Register B:</span><strong>${step.b} (${step.binaryB})</strong>
      </div>
      <div style="display:flex; justify-content:space-between; color:var(--accent-cyan); font-weight:bold;">
        <span>Sum (A ^ B):</span><strong>${step.sum} (${step.binarySum})</strong>
      </div>
      <div style="display:flex; justify-content:space-between; color:var(--secondary); font-weight:bold;">
        <span>Carry ((A&B)<<1):</span><strong>${step.carry} (${step.binaryCarry})</strong>
      </div>
    `;
    container.appendChild(registers);
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'prims') {
    const container = document.createElement('div');
    container.className = 'tree-container';
    
    const nodeCoords = {
      'A': { x: 80, y: 80 },
      'B': { x: 320, y: 60 },
      'C': { x: 180, y: 200 },
      'D': { x: 360, y: 220 }
    };
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cycle-arrow-svg");
    
    // Draw all potential edges
    const allEdges = [
      { u: 'A', v: 'B', d: 241 },
      { u: 'A', v: 'C', d: 156 },
      { u: 'B', v: 'C', d: 198 },
      { u: 'B', v: 'D', d: 165 },
      { u: 'C', v: 'D', d: 181 }
    ];
    
    allEdges.forEach(e => {
      const fromC = nodeCoords[e.u];
      const toC = nodeCoords[e.v];
      const edgeKey = `${e.u}-${e.v}`;
      const edgeKeyRev = `${e.v}-${e.u}`;
      
      const isMst = step.mstEdges.includes(edgeKey) || step.mstEdges.includes(edgeKeyRev);
      const isCandidate = step.candidates.includes(edgeKey) || step.candidates.includes(edgeKeyRev);
      
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", fromC.x + 22);
      line.setAttribute("y1", fromC.y + 22);
      line.setAttribute("x2", toC.x + 22);
      line.setAttribute("y2", toC.y + 22);
      
      if (isMst) {
        line.setAttribute("stroke", "var(--easy)");
        line.setAttribute("stroke-width", "3.5");
      } else if (isCandidate) {
        line.setAttribute("stroke", "rgba(245, 158, 11, 0.7)");
        line.setAttribute("stroke-dasharray", "4,4");
        line.setAttribute("stroke-width", "2");
      } else {
        line.setAttribute("stroke", "rgba(255,255,255,0.1)");
        line.setAttribute("stroke-width", "1");
      }
      svg.appendChild(line);
      
      // Draw label
      const dx = toC.x - fromC.x;
      const dy = toC.y - fromC.y;
      const label = document.createElement('div');
      label.style.position = 'absolute';
      label.style.left = `${fromC.x + dx/2 - 10}px`;
      label.style.top = `${fromC.y + dy/2 - 10}px`;
      label.style.fontSize = '0.7rem';
      label.style.fontFamily = 'monospace';
      label.style.color = isMst ? 'var(--easy)' : isCandidate ? 'rgba(245, 158, 11, 0.9)' : 'var(--text-muted)';
      label.textContent = e.d;
      container.appendChild(label);
    });
    container.appendChild(svg);
    
    // Draw Nodes
    Object.keys(nodeCoords).forEach(id => {
      const coord = nodeCoords[id];
      const node = document.createElement('div');
      node.className = 'tree-node';
      node.style.position = 'absolute';
      node.style.left = `${coord.x}px`;
      node.style.top = `${coord.y}px`;
      
      const inMst = step.inMST.includes(id);
      if (inMst) {
        node.style.borderColor = 'var(--easy)';
        node.style.background = 'rgba(16, 185, 129, 0.15)';
        node.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.4)';
      } else if (step.activeNode === id) {
        node.style.borderColor = 'var(--accent-cyan)';
        node.style.background = 'rgba(6, 182, 212, 0.2)';
      }
      
      const valSpan = document.createElement('span');
      valSpan.className = 'tree-node-val';
      valSpan.textContent = id;
      node.appendChild(valSpan);
      
      const distSpan = document.createElement('span');
      distSpan.style.fontSize = '0.55rem';
      distSpan.style.color = inMst ? 'var(--easy)' : 'var(--text-muted)';
      distSpan.textContent = step.minDist[id] === Infinity ? 'd:' : `d:${step.minDist[id]}`;
      node.appendChild(distSpan);
      
      container.appendChild(node);
    });
    
    canvas.appendChild(container);
  }
  else if (visualizerState.algo === 'astar') {
    const container = document.createElement('div');
    container.className = 'matrix-container';
    
    const rows = 5;
    const cols = 6;
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${cols}, 54px)`;
    grid.style.gap = '8px';
    grid.style.margin = '0 auto';
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement('div');
        cell.className = 'dp-cell';
        cell.style.width = '54px';
        cell.style.height = '54px';
        cell.style.display = 'flex';
        cell.style.flexDirection = 'column';
        cell.style.justifyContent = 'space-between';
        cell.style.padding = '4px';
        cell.style.fontSize = '0.65rem';
        cell.style.position = 'relative';
        
        const isStart = r === 2 && c === 0;
        const isEnd = r === 2 && c === 5;
        const isWall = (r === 1 && c === 2) || (r === 2 && c === 2) || (r === 3 && c === 2);
        
        const isOpen = step.open.some(x => x[0] === r && x[1] === c);
        const isClosed = step.closed.some(x => x[0] === r && x[1] === c);
        const isPath = step.path.some(x => x[0] === r && x[1] === c);
        const isActive = step.active && step.active[0] === r && step.active[1] === c;
        
        if (isStart) {
          cell.style.background = 'rgba(16, 185, 129, 0.2)';
          cell.style.borderColor = 'var(--easy)';
        } else if (isEnd) {
          cell.style.background = 'rgba(244, 63, 94, 0.2)';
          cell.style.borderColor = 'var(--hard)';
        } else if (isWall) {
          cell.style.background = '#334155';
          cell.style.borderColor = '#475569';
        } else if (isPath) {
          cell.style.background = 'rgba(99, 102, 241, 0.25)';
          cell.style.borderColor = 'var(--primary)';
        } else if (isActive) {
          cell.style.background = 'rgba(6, 182, 212, 0.25)';
          cell.style.borderColor = 'var(--accent-cyan)';
        } else if (isClosed) {
          cell.style.background = 'rgba(30, 41, 59, 0.7)';
          cell.style.borderColor = 'rgba(255,255,255,0.06)';
        } else if (isOpen) {
          cell.style.borderColor = 'rgba(245, 158, 11, 0.4)';
          cell.style.background = 'rgba(245, 158, 11, 0.05)';
        }
        
        const key = `${r},${c}`;
        if (step.f[key] !== undefined && !isWall) {
          const corner = document.createElement('div');
          corner.style.display = 'flex';
          corner.style.justifyContent = 'space-between';
          corner.style.width = '100%';
          corner.innerHTML = `<span>g:${step.g[key]}</span><span>h:${step.h[key]}</span>`;
          cell.appendChild(corner);
          
          const center = document.createElement('div');
          center.style.fontWeight = 'bold';
          center.style.textAlign = 'center';
          center.style.marginTop = '2px';
          center.style.color = 'var(--accent-cyan)';
          center.textContent = `f=${step.f[key]}`;
          cell.appendChild(center);
        } else {
          const label = document.createElement('div');
          label.style.textAlign = 'center';
          label.style.width = '100%';
          label.style.marginTop = '10px';
          label.textContent = isStart ? 'START' : isEnd ? 'GOAL' : isWall ? 'WALL' : `(${r},${c})`;
          cell.appendChild(label);
        }
        
        grid.appendChild(cell);
      }
    }
    container.appendChild(grid);
    canvas.appendChild(container);
  }
}


function stepVisualizer() {
  if (visualizerState.steps.length === 0) return;
  
  if (visualizerState.currentStepIndex >= visualizerState.steps.length - 1) {
    appendLog("[INFO] End of simulation steps reached. Click Reset.", 'alert');
    pauseVisualizer();
    return;
  }
  
  visualizerState.currentStepIndex++;
  const activeStepSnapshot = visualizerState.steps[visualizerState.currentStepIndex];
  
  let traceType = 'info';
  if (activeStepSnapshot.log.includes("Comparing") || activeStepSnapshot.log.includes("Inspecting")) traceType = 'compare';
  if (activeStepSnapshot.log.includes("Swapped") || activeStepSnapshot.log.includes("Pop") || activeStepSnapshot.log.includes("Conflict") || activeStepSnapshot.log.includes("Overlap")) traceType = 'alert';
  if (activeStepSnapshot.log.includes("Success") || activeStepSnapshot.log.includes("Finished") || activeStepSnapshot.log.includes("Meeting") || activeStepSnapshot.log.includes("complete")) traceType = 'success';
  
  appendLog(activeStepSnapshot.log, traceType);
  renderCanvasStep();
}

function playVisualizer() {
  if (visualizerState.isPlaying) {
    pauseVisualizer();
    return;
  }
  
  if (visualizerState.currentStepIndex >= visualizerState.steps.length - 1) {
    resetVisualizer();
  }
  
  visualizerState.isPlaying = true;
  document.getElementById('play-icon').setAttribute('data-lucide', 'pause');
  document.getElementById('play-text').textContent = 'Pause';
  lucide.createIcons();
  
  visualizerState.timer = setInterval(() => {
    if (visualizerState.currentStepIndex >= visualizerState.steps.length - 1) {
      pauseVisualizer();
      appendLog("[INFO] Simulation complete.", 'success');
      return;
    }
    stepVisualizer();
  }, visualizerState.speed);
}

function pauseVisualizer() {
  visualizerState.isPlaying = false;
  if (visualizerState.timer) {
    clearInterval(visualizerState.timer);
    visualizerState.timer = null;
  }
  
  const playIcon = document.getElementById('play-icon');
  const playText = document.getElementById('play-text');
  
  if (playIcon && playText) {
    playIcon.setAttribute('data-lucide', 'play');
    playText.textContent = 'Play';
    lucide.createIcons();
  }
}

// ==========================================================================
// THEME MANAGEMENT (LIGHT/DARK MODE)
// ==========================================================================

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = 'inline-block';
      moonIcon.style.display = 'none';
    }
  } else {
    document.body.classList.remove('light-theme');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
    }
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  
  if (sunIcon && moonIcon) {
    if (isLight) {
      sunIcon.style.display = 'inline-block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
    }
  }
}

// ==========================================================================
// INIT APP
// ==========================================================================

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  seedActivityData();
  switchTab('lobby');
  renderProblemsList();
});
