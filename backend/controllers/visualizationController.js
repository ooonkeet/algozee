// controllers/visualizationController.js
// Pure in-process algorithm visualizer — generates step-by-step execution traces.
const Visualization = require('../models/Visualization');

// ─── Algorithm implementations ────────────────────────────────────────────────
// Each returns { steps, output, complexity }

const algorithms = {

  // ── Sorting ────────────────────────────────────────────────────────────────

  bubble_sort: (arr) => {
    const a = [...arr];
    const steps = [];
    let stepNum = 0;
    const n = a.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({
          stepNumber: ++stepNum,
          description: `Comparing a[${j}]=${a[j]} and a[${j+1}]=${a[j+1]}`,
          array: [...a],
          currentIndex: j,
          comparedIndices: [j, j + 1],
        });
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          steps.push({
            stepNumber: ++stepNum,
            description: `Swapped → a[${j}]=${a[j]}, a[${j+1}]=${a[j+1]}`,
            array: [...a],
            currentIndex: j,
            comparedIndices: [j, j + 1],
          });
        }
      }
    }
    return { steps, output: a, complexity: { time: 'O(n²)', space: 'O(1)' } };
  },

  selection_sort: (arr) => {
    const a = [...arr];
    const steps = [];
    let stepNum = 0;
    const n = a.length;

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      steps.push({
        stepNumber: ++stepNum,
        description: `Finding minimum in subarray starting at index ${i}`,
        array: [...a],
        currentIndex: i,
        comparedIndices: [i],
      });
      for (let j = i + 1; j < n; j++) {
        steps.push({
          stepNumber: ++stepNum,
          description: `Comparing a[${j}]=${a[j]} with current min a[${minIdx}]=${a[minIdx]}`,
          array: [...a],
          currentIndex: j,
          comparedIndices: [j, minIdx],
        });
        if (a[j] < a[minIdx]) minIdx = j;
      }
      if (minIdx !== i) {
        [a[i], a[minIdx]] = [a[minIdx], a[i]];
        steps.push({
          stepNumber: ++stepNum,
          description: `Swapped a[${i}]=${a[i]} with a[${minIdx}]=${a[minIdx]}`,
          array: [...a],
          currentIndex: i,
          comparedIndices: [i, minIdx],
        });
      }
    }
    return { steps, output: a, complexity: { time: 'O(n²)', space: 'O(1)' } };
  },

  insertion_sort: (arr) => {
    const a = [...arr];
    const steps = [];
    let stepNum = 0;

    for (let i = 1; i < a.length; i++) {
      const key = a[i];
      let j = i - 1;
      steps.push({
        stepNumber: ++stepNum,
        description: `Inserting key=${key} (index ${i}) into sorted portion`,
        array: [...a],
        currentIndex: i,
        comparedIndices: [i],
      });
      while (j >= 0 && a[j] > key) {
        steps.push({
          stepNumber: ++stepNum,
          description: `a[${j}]=${a[j]} > key=${key}, shifting right`,
          array: [...a],
          currentIndex: j,
          comparedIndices: [j, j + 1],
        });
        a[j + 1] = a[j];
        j--;
      }
      a[j + 1] = key;
      steps.push({
        stepNumber: ++stepNum,
        description: `Placed key=${key} at index ${j + 1}`,
        array: [...a],
        currentIndex: j + 1,
        comparedIndices: [j + 1],
      });
    }
    return { steps, output: a, complexity: { time: 'O(n²)', space: 'O(1)' } };
  },

  merge_sort: (arr) => {
    const steps = [];
    let stepNum = 0;
    const a = [...arr];

    const merge = (array, left, mid, right) => {
      const L = array.slice(left, mid + 1);
      const R = array.slice(mid + 1, right + 1);
      let i = 0, j = 0, k = left;

      while (i < L.length && j < R.length) {
        steps.push({
          stepNumber: ++stepNum,
          description: `Merging: comparing L[${i}]=${L[i]} vs R[${j}]=${R[j]}`,
          array: [...array],
          currentIndex: k,
          comparedIndices: [left + i, mid + 1 + j],
        });
        if (L[i] <= R[j]) { array[k++] = L[i++]; }
        else              { array[k++] = R[j++]; }
      }
      while (i < L.length) array[k++] = L[i++];
      while (j < R.length) array[k++] = R[j++];

      steps.push({
        stepNumber: ++stepNum,
        description: `Merged subarray [${left}..${right}]`,
        array: [...array],
        currentIndex: left,
        comparedIndices: Array.from({ length: right - left + 1 }, (_, x) => left + x),
      });
    };

    const sort = (array, left, right) => {
      if (left >= right) return;
      const mid = Math.floor((left + right) / 2);
      steps.push({
        stepNumber: ++stepNum,
        description: `Splitting [${left}..${right}] at mid=${mid}`,
        array: [...array],
        currentIndex: mid,
        comparedIndices: [left, right],
      });
      sort(array, left, mid);
      sort(array, mid + 1, right);
      merge(array, left, mid, right);
    };

    sort(a, 0, a.length - 1);
    return { steps, output: a, complexity: { time: 'O(n log n)', space: 'O(n)' } };
  },

  quick_sort: (arr) => {
    const steps = [];
    let stepNum = 0;
    const a = [...arr];

    const partition = (array, low, high) => {
      const pivot = array[high];
      let i = low - 1;
      steps.push({
        stepNumber: ++stepNum,
        description: `Pivot = ${pivot} at index ${high}`,
        array: [...array],
        currentIndex: high,
        comparedIndices: [high],
      });
      for (let j = low; j < high; j++) {
        steps.push({
          stepNumber: ++stepNum,
          description: `Comparing a[${j}]=${array[j]} with pivot=${pivot}`,
          array: [...array],
          currentIndex: j,
          comparedIndices: [j, high],
        });
        if (array[j] < pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
          steps.push({
            stepNumber: ++stepNum,
            description: `Swapped a[${i}]=${array[i]} with a[${j}]=${array[j]}`,
            array: [...array],
            currentIndex: i,
            comparedIndices: [i, j],
          });
        }
      }
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      steps.push({
        stepNumber: ++stepNum,
        description: `Pivot placed at index ${i + 1}`,
        array: [...array],
        currentIndex: i + 1,
        comparedIndices: [i + 1],
      });
      return i + 1;
    };

    const sort = (array, low, high) => {
      if (low < high) {
        const pi = partition(array, low, high);
        sort(array, low, pi - 1);
        sort(array, pi + 1, high);
      }
    };

    sort(a, 0, a.length - 1);
    return { steps, output: a, complexity: { time: 'O(n log n) avg', space: 'O(log n)' } };
  },

  // ── Searching ──────────────────────────────────────────────────────────────

  binary_search: ({ array, target }) => {
    const a = [...array].sort((x, y) => x - y);
    const steps = [];
    let stepNum = 0;
    let left = 0, right = a.length - 1, found = -1;

    steps.push({
      stepNumber: ++stepNum,
      description: `Starting binary search for target=${target} in sorted array`,
      array: [...a],
      currentIndex: -1,
      comparedIndices: [left, right],
    });

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      steps.push({
        stepNumber: ++stepNum,
        description: `mid=${mid}, a[mid]=${a[mid]}, left=${left}, right=${right}`,
        array: [...a],
        currentIndex: mid,
        comparedIndices: [left, mid, right],
      });
      if (a[mid] === target) {
        found = mid;
        steps.push({
          stepNumber: ++stepNum,
          description: `✅ Found target=${target} at index ${mid}`,
          array: [...a],
          currentIndex: mid,
          comparedIndices: [mid],
        });
        break;
      } else if (a[mid] < target) {
        steps.push({ stepNumber: ++stepNum, description: `a[mid] < target → search right half`, array: [...a], currentIndex: mid, comparedIndices: [mid] });
        left = mid + 1;
      } else {
        steps.push({ stepNumber: ++stepNum, description: `a[mid] > target → search left half`, array: [...a], currentIndex: mid, comparedIndices: [mid] });
        right = mid - 1;
      }
    }

    if (found === -1) {
      steps.push({ stepNumber: ++stepNum, description: `❌ Target=${target} not found`, array: [...a], currentIndex: -1, comparedIndices: [] });
    }

    return { steps, output: found, complexity: { time: 'O(log n)', space: 'O(1)' } };
  },

  linear_search: ({ array, target }) => {
    const a = [...array];
    const steps = [];
    let stepNum = 0;
    let found = -1;

    for (let i = 0; i < a.length; i++) {
      steps.push({
        stepNumber: ++stepNum,
        description: `Checking a[${i}]=${a[i]} against target=${target}`,
        array: [...a],
        currentIndex: i,
        comparedIndices: [i],
      });
      if (a[i] === target) {
        found = i;
        steps.push({ stepNumber: ++stepNum, description: `✅ Found at index ${i}`, array: [...a], currentIndex: i, comparedIndices: [i] });
        break;
      }
    }
    if (found === -1) {
      steps.push({ stepNumber: ++stepNum, description: `❌ Not found`, array: [...a], currentIndex: -1, comparedIndices: [] });
    }
    return { steps, output: found, complexity: { time: 'O(n)', space: 'O(1)' } };
  },

  // ── Graph traversal ────────────────────────────────────────────────────────
  // Input for BFS/DFS: { graph: { "0": [1,2], "1": [3] }, start: 0 }

  bfs: ({ graph, start }) => {
    const steps = [];
    let stepNum = 0;
    const visited = new Set();
    const queue = [start];
    const order = [];
    visited.add(start);

    steps.push({ stepNumber: ++stepNum, description: `BFS start from node ${start}`, array: [start], currentIndex: 0, comparedIndices: [] });

    while (queue.length > 0) {
      const node = queue.shift();
      order.push(node);
      steps.push({ stepNumber: ++stepNum, description: `Visiting node ${node}`, array: [...order], currentIndex: order.length - 1, comparedIndices: [] });

      const neighbours = graph[node] || [];
      for (const nb of neighbours) {
        if (!visited.has(nb)) {
          visited.add(nb);
          queue.push(nb);
          steps.push({ stepNumber: ++stepNum, description: `Enqueued neighbour ${nb} of ${node}`, array: [...order, ...queue], currentIndex: order.length - 1, comparedIndices: [] });
        }
      }
    }
    return { steps, output: order, complexity: { time: 'O(V + E)', space: 'O(V)' } };
  },

  dfs: ({ graph, start }) => {
    const steps = [];
    let stepNum = 0;
    const visited = new Set();
    const order = [];

    const dfsHelper = (node) => {
      visited.add(node);
      order.push(node);
      steps.push({ stepNumber: ++stepNum, description: `Visiting node ${node}`, array: [...order], currentIndex: order.length - 1, comparedIndices: [] });
      for (const nb of (graph[node] || [])) {
        if (!visited.has(nb)) {
          steps.push({ stepNumber: ++stepNum, description: `Exploring edge ${node} → ${nb}`, array: [...order], currentIndex: order.length - 1, comparedIndices: [] });
          dfsHelper(nb);
        }
      }
    };

    dfsHelper(start);
    return { steps, output: order, complexity: { time: 'O(V + E)', space: 'O(V)' } };
  },
};

const SUPPORTED_ALGORITHMS = Object.keys(algorithms);

// ─── Controller handlers ──────────────────────────────────────────────────────

// @desc    List all supported algorithms
// @route   GET /api/visualizations
// @access  Public
exports.getSupportedAlgorithms = (req, res) => {
  res.status(200).json({
    success: true,
    algorithms: [
      { name: 'bubble_sort',    category: 'sorting',   displayName: 'Bubble Sort' },
      { name: 'selection_sort', category: 'sorting',   displayName: 'Selection Sort' },
      { name: 'insertion_sort', category: 'sorting',   displayName: 'Insertion Sort' },
      { name: 'merge_sort',     category: 'sorting',   displayName: 'Merge Sort' },
      { name: 'quick_sort',     category: 'sorting',   displayName: 'Quick Sort' },
      { name: 'binary_search',  category: 'searching', displayName: 'Binary Search' },
      { name: 'linear_search',  category: 'searching', displayName: 'Linear Search' },
      { name: 'bfs',            category: 'graph',     displayName: 'Breadth-First Search' },
      { name: 'dfs',            category: 'graph',     displayName: 'Depth-First Search' },
    ],
  });
};

// @desc    Run algorithm and get step-by-step trace
// @route   POST /api/visualizations/run
// @access  Private
exports.runVisualization = async (req, res) => {
  try {
    const { userId, algorithmName, input, notes } = req.body;

    if (!algorithmName || input === undefined) {
      return res.status(400).json({ success: false, message: 'algorithmName and input are required' });
    }

    if (!SUPPORTED_ALGORITHMS.includes(algorithmName)) {
      return res.status(400).json({
        success: false,
        message: `Unsupported algorithm. Supported: ${SUPPORTED_ALGORITHMS.join(', ')}`,
      });
    }

    // Validate input size to prevent abuse
    const inputArr = Array.isArray(input) ? input : input?.array || [];
    if (inputArr.length > 200) {
      return res.status(400).json({ success: false, message: 'Input array cannot exceed 200 elements' });
    }

    const startTime = Date.now();
    const { steps, output, complexity } = algorithms[algorithmName](input);
    const executionTime = Date.now() - startTime;

    // Save to DB if userId provided
    let saved = null;
    if (userId) {
      saved = await Visualization.create({
        userId,
        algorithmName,
        input: JSON.stringify(input),
        output: JSON.stringify(output),
        steps,
        executionTime,
        complexity,
        notes: notes || '',
      });
    }

    res.status(200).json({
      success: true,
      visualization: {
        id: saved?._id,
        algorithmName,
        input,
        output,
        steps,
        totalSteps: steps.length,
        executionTime,
        complexity,
        savedAt: saved?.createdAt,
      },
    });
  } catch (error) {
    console.error('❌ Run Visualization Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error running visualization',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get visualization history for a user
// @route   GET /api/visualizations/history/:userId
// @access  Private
exports.getVisualizationHistory = async (req, res) => {
  try {
    const { algorithmName, page = 1, limit = 20 } = req.query;

    const filter = { userId: req.params.userId };
    if (algorithmName) filter.algorithmName = algorithmName;

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const [visualizations, total] = await Promise.all([
      Visualization.find(filter)
        .select('-steps') // exclude heavy steps array from list view
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean(),
      Visualization.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      count: visualizations.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      visualizations,
    });
  } catch (error) {
    console.error('❌ Get Visualization History Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching history',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Get a single saved visualization (with full steps)
// @route   GET /api/visualizations/:id
// @access  Private
exports.getVisualizationById = async (req, res) => {
  try {
    const viz = await Visualization.findById(req.params.id).lean();

    if (!viz) return res.status(404).json({ success: false, message: 'Visualization not found' });
    if (viz.userId.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    res.status(200).json({ success: true, visualization: viz });
  } catch (error) {
    console.error('❌ Get Visualization Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching visualization',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};

// @desc    Delete a saved visualization
// @route   DELETE /api/visualizations/:id
// @access  Private
exports.deleteVisualization = async (req, res) => {
  try {
    const viz = await Visualization.findById(req.params.id);

    if (!viz) return res.status(404).json({ success: false, message: 'Visualization not found' });
    if (viz.userId.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    await viz.deleteOne();
    res.status(200).json({ success: true, message: 'Visualization deleted' });
  } catch (error) {
    console.error('❌ Delete Visualization Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting visualization',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
};
