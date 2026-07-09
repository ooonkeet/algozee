# Algozee Backend API Documentation

Base URL: `http://localhost:5000/api`  
WebSocket: `ws://localhost:5000`  
Auth: `Bearer <JWT>` in `Authorization` header for all protected routes.

---

## Auth  `/api/auth`

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/register` | ✗ | Register new user |
| POST | `/login` | ✗ | Login, returns `token` + `refreshToken` |
| POST | `/refresh-token` | ✗ | Exchange refreshToken for new token |
| POST | `/logout` | ✓ | Logout (client should discard tokens) |
| GET | `/me` | ✓ | Get current user profile |

### POST /register
```json
{ "username": "string", "email": "string", "password": "string" }
```

### POST /login
```json
{ "email": "string", "password": "string" }
```

---

## Users  `/api/users`

All routes require auth.

| Method | Path | Description |
|--------|------|-------------|
| GET | `/:id` | Get user profile |
| PUT | `/:id` | Update profile (username, avatar) |
| DELETE | `/:id` | Delete account |
| GET | `/:id/stats` | Get user stats + streak |
| GET | `/:id/streak` | Get streak details |
| PUT | `/:id/preferences` | Update theme / notifications |

---

## Problems  `/api/problems`

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/` | ✗ | List problems (filter + paginate) |
| GET | `/topics` | ✗ | Problems grouped by topic |
| GET | `/:id` | ✗ | Single problem |
| GET | `/user/:userId` | ✓ | Problems with user progress merged |
| POST | `/` | ✓ | Create problem (admin) |
| PUT | `/:id` | ✓ | Update problem (admin) |
| DELETE | `/:id` | ✓ | Delete problem (admin) |

### Query params for GET /
| Param | Type | Example |
|-------|------|---------|
| `difficulty` | easy \| medium \| hard | `?difficulty=easy` |
| `topic` | string | `?topic=arrays` |
| `search` | string | `?search=two+sum` |
| `page` | number | `?page=2` |
| `limit` | number (max 100) | `?limit=10` |
| `sort` | mongoose sort string | `?sort=-createdAt` |

---

## Dashboard  `/api/dashboard`

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/global` | ✗ | Platform-wide stats |
| GET | `/:userId` | ✓ | Full user dashboard (overview, difficulty, streak, heatmap, recent activity) |

---

## User Problems  `/api/user-problems`

All routes require auth.

| Method | Path | Description |
|--------|------|-------------|
| GET | `/:userId/:problemId` | Get or return default progress for a problem |
| POST | `/` | Upsert progress (creates or updates) |
| PATCH | `/:id` | Patch specific fields (notes, code, status) |
| DELETE | `/:id` | Delete a progress record |
| DELETE | `/user/:userId/reset` | Reset all progress for a user |

### POST / body
```json
{
  "userId": "string",
  "problemId": "string",
  "status": "todo | in_progress | attempted | solved",
  "notes": "string",
  "solutionCode": "string",
  "solutionLanguage": "javascript | python | java | cpp | csharp | go | rust",
  "timeSpent": 30
}
```

---

## Submissions  `/api/submissions`

All routes require auth. Submissions for JavaScript are executed in a sandboxed Node.js `vm` context against the problem's example test cases.

| Method | Path | Description |
|--------|------|-------------|
| POST | `/` | Submit code for execution |
| GET | `/:id` | Get a submission by ID (owner only) |
| GET | `/user/:userId` | List user submissions (filter + paginate) |
| GET | `/user/:userId/stats` | Submission stats (acceptance rate, by language) |
| GET | `/user/:userId/problem/:problemId` | Submission history for a problem |

### POST / body
```json
{
  "userId": "string",
  "problemId": "string",
  "code": "function solution(nums) { ... }",
  "language": "javascript"
}
```

### Response
```json
{
  "success": true,
  "submission": {
    "id": "...",
    "status": "accepted | wrong_answer | runtime_error | pending",
    "testsPassed": 3,
    "testsFailed": 0,
    "totalTests": 3,
    "runtime": 12,
    "language": "javascript",
    "submittedAt": "2026-07-09T..."
  }
}
```

---

## Leaderboard  `/api/leaderboard`

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/` | ✗ | Global leaderboard (top 50 by points) |
| GET | `/streak` | ✗ | Top streaks |
| GET | `/topic/:topic` | ✗ | Leaders for a specific topic |
| GET | `/rank/:userId` | ✓ | A user's current rank and nearby users |

---

## Visualizations  `/api/visualizations`

All routes require auth.

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | List all supported algorithms |
| POST | `/run` | Run an algorithm and get step-by-step output |
| GET | `/history/:userId` | User's visualization history |
| GET | `/:id` | A saved visualization |
| DELETE | `/:id` | Delete a visualization |

### POST /run body
```json
{
  "userId": "string",
  "algorithmName": "bubble_sort | selection_sort | insertion_sort | merge_sort | quick_sort | binary_search | linear_search | bfs | dfs",
  "input": [64, 34, 25, 12, 22, 11, 90]
}
```

---

## WebSocket Events  `ws://localhost:5000`

Connect with: `{ auth: { token: "<JWT>" } }`

### Client → Server

| Event | Payload | Description |
|-------|---------|-------------|
| `join-room` | `{ room: string }` | Join a named room (e.g. `topic:arrays`) |
| `leave-room` | `{ room: string }` | Leave a room |
| `update-problem-status` | `{ problemId, status, topic, difficulty }` | Broadcast status change |
| `get-streak` | — | Request current streak data |
| `request-dashboard-refresh` | — | Request fresh solved/attempted counts |
| `typing` | `{ room, username }` | Typing indicator |
| `stop-typing` | `{ room }` | Stop typing indicator |
| `ping-check` | callback | Latency check |

### Server → Client

| Event | Payload | Description |
|-------|---------|-------------|
| `welcome` | `{ socketId, userId, onlineCount }` | Sent on connect |
| `online-count` | `{ count, users }` | Broadcast when users join/leave |
| `room-joined` | `{ room, members }` | Confirmed room join |
| `room-member-joined` | `{ room, socketId }` | Someone joined your room |
| `room-member-left` | `{ room, socketId }` | Someone left your room |
| `problem-status-updated` | `{ problemId, status, updatedAt }` | Syncs other tabs |
| `streak-updated` | `{ currentStreak, longestStreak }` | After solving a problem |
| `problem-solved-global` | `{ topic, difficulty, timestamp }` | Anonymous global feed |
| `topic-activity` | `{ problemId, status, timestamp }` | Activity in a topic room |
| `dashboard-stats-update` | `{ solved, attempted }` | Dashboard quick refresh |
| `streak-data` | `{ currentStreak, longestStreak, ... }` | Response to `get-streak` |
| `error` | `{ message }` | Server-side error |
