# Algozee — "I'll Go if you say Algo" 🎲

A gamified, interactive Data Structures & Algorithms (DSA) roadmap, progress tracker, and step-by-step visualization sandbox designed to help developers break out of analysis paralysis and build consistent coding habits.

---

## 🚀 Key Features

*   **🎮 Gamified Experience:**
    *   **Daily Algorithm Decider Widget:** Roll the dice 🎲 to randomly select your daily coding challenge and keep your brain guessing.
    *   **Progressive Ranks & Achievements:** Earn points and level up from *Coding Padawan* to higher ranks. Unlock special badges like "Binary Boss" or "Recursion Rookie".
    *   **Solve Streaks:** Watch your streak multiplier grow to double your points by maintaining consecutive daily practice.
*   **📊 Dynamic Progress Dashboard:**
    *   Interactive circular completion gauges tracking solved statistics.
    *   Live problem-solving ratios broken down by difficulty (Easy, Medium, Hard).
    *   Contribution calendar grid showcasing your daily practice consistency.
*   **🧭 Comprehensive DSA Explorer:**
    *   A massive, built-in roadmap of over 100+ curated DSA questions categorized by topics.
    *   Filter problems by status (Todo, Solved, In Progress) or difficulty.
    *   Direct links to external practice platforms (e.g., LeetCode).
*   **🔬 Step-by-Step Algorithm Sandbox:**
    *   Interactive canvas visualizers showing live array transitions, graph traversals, and dynamic state updates.
    *   Full playback controls: **Play/Pause**, **Step Forward**, and **Reset**.
    *   Adjustable speed controller (100ms - 1500ms).
    *   Syntax-highlighted code editor interface displaying current execution step state.
    *   Live step-by-step trace log terminal explaining the algorithm's decisions in plain English.

---

## 🎨 Design System & Aesthetics

Algozee features a premium dark-themed aesthetic with modern web design details:
*   **Typography:** Combines *Space Grotesk* for futuristic headings, *Inter* for readable text, and *Fira Code* for monospace code snippets.
*   **Glassmorphism:** Card containers feature frosted-glass styling (`backdrop-filter`) with subtle borders and colored glow effects.
*   **Theme Toggle:** Quick switching between the premium dark mode (default) and light mode.
*   **Tailored Colors:** Explicitly themed indicators for difficulty ranks (Emerald for Easy, Amber for Medium, Rose for Hard) and indigo/pink glow highlights.

---

## 📁 Project Structure

```
algozee/
├── index.html          # Main HTML5 entrypoint, layouts, modal forms, and UI view tabs
├── style.css           # 5,700+ lines of custom, modern CSS variables and layouts
├── app.js              # 31,000+ lines containing state management, problem databases, and step generators
├── frontend/           # Static code analysis tools and coverage validation scripts
│   ├── analyze_viz.js
│   ├── analyze_viz2.js
│   ├── analyze_viz3.js
│   ├── analyze_viz4.js
│   ├── analyze_viz5.js
│   ├── analyze_viz6.js
│   └── analyze_viz7.js
└── backend/            # Backend dependencies and node configuration
    └── node_modules/
```

### Component Details
*   [index.html](file:///c:/Users/Ankit/Desktop/algozee/index.html): Defines the single-page application structure. Implements views for **Lobby**, **Dashboard**, **DSA Explorer**, and **Visualizer Sandbox**.
*   [style.css](file:///c:/Users/Ankit/Desktop/algozee/style.css): Governs all visual styling, layout grids, animations, theme configurations, responsive layouts, and interactive micro-animations.
*   [app.js](file:///c:/Users/Ankit/Desktop/algozee/app.js): Handles the client-side state machine. Includes:
    *   `state.problems`: The master database of problems with LeetCode ID, subcategories, acceptance, and status.
    *   `generate*Steps` functions: Specialized generator algorithms (e.g., `generateBubblesortSteps`, `generateDijkstraSteps`, `generateSlidingwindowSteps`) that record step-by-step operational states for visual playback.
    *   `codeTemplates`: Code snippets rendered in the sidebar panel representing typical algorithm solutions.
*   `frontend/analyze_viz*.js`: A suite of analytical node scripts used to inspect coverage and ensure that all problems in the database map to active visualizers and code templates.

---

## 🛠️ Supported Visualizers

Algozee contains specialized visualization states for dozens of core computer science topics:

| Visualizer Key | Target Data Structure / Algorithm | Generator Function |
| :--- | :--- | :--- |
| `bubble` | Bubble Sort | `generateBubblesortSteps` |
| `quicksort` | Quick Sort & Merge Sort | `generateQuicksortSteps` |
| `binary` | Binary Search | `generateBinarysearchSteps` |
| `window` | Sliding Window | `generateSlidingwindowSteps` |
| `pointer` | Two Pointers | `generateTwopointersSteps` |
| `stack` | Monotonic Stack | `generateMonotonicstackSteps` |
| `slidingmax` | Monotonic Queue / Deque | `generateSlidingmaxSteps` |
| `heap` | Min/Max Heap & Priority Queue | `generateHeapSteps` |
| `tree` | Tree Traversals (DFS, BFS, BST) | `generateTreeSteps` |
| `trie` | Prefix Trees | `generateTrieSteps` |
| `graph` | Graph BFS & DFS Traversals | `generateGraphSteps` |
| `dijkstra` | Shortest Path | `generateDijkstraSteps` |
| `unionfind` | Disjoint Set Union (DSU) | `generateUnionfindSteps` |
| `backtracking` | Backtracking Sandbox (N-Queens, Sudoku) | `generateBacktrackingSteps` |
| `lrucache` | LRU Cache Design | `generateLrucacheSteps` |
| `prefixsum` | Prefix Sums & Difference Arrays | `generatePrefixsumSteps` |
| `dp1d` / `matrix` | Dynamic Programming (1D & Grid) | `generateDp1dSteps` / `generateMatrixSteps` |

---

## 🚀 Running the Project

### Local Server (Recommended)
Since the app relies on CSS fonts and Lucide icons, running it via a local development server ensures proper performance and asset loading.
1. Run a local web server (e.g., using VS Code Live Server, Python's `http.server`, or Node's `http-server`):
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000` in your web browser.

### Direct File Open
You can also open `index.html` directly in any modern browser by double-clicking the file in your file explorer.

---

## 🧪 Running Static Coverage Checks

You can audit the integration of algorithms, code templates, and problem mappings by running the analysis suite inside the `frontend/` folder:

```bash
# Verify all visualizer mapping branches, code templates, and generators
node frontend/analyze_viz7.js
```

This will print a comprehensive breakdown showing:
*   Total problems successfully parsed
*   Problems mapped per visualizer
*   Any unmapped problems
*   Gaps where templates or generator functions might be missing
