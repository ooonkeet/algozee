# Algozee Backend - Setup Guide

## 🚀 Phase 1: Backend Setup & Database

### Quick Start

1. **Install Dependencies**
```bash
cd backend
npm install
```

2. **Configure Environment**
```bash
# Edit .env file with your MongoDB connection string
# Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/algozee

# OR MongoDB Atlas (Cloud):
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/algozee
```

3. **Start Server (Development)**
```bash
npm run dev
```

Server will start on: `http://localhost:5000`

4. **Seed Sample Problems**
```bash
npm run seed
```

---

## 📋 What's Included in Phase 1

✅ **Server Setup**
- Express.js server
- Socket.io for real-time updates
- CORS enabled
- Security middleware (helmet)
- Request logging (morgan)
- Compression enabled

✅ **Database Models**
- User (authentication & profile)
- Problem (DSA problems database)
- UserProblem (progress tracking)
- Streak (streak tracking)
- Submission (code submissions)
- Visualization (algorithm visualizations)

✅ **Configuration**
- MongoDB connection handler
- Environment variables setup
- Error handling middleware

---

## 🔌 API Endpoints (Phase 1 - Basic)

### Health Check
```
GET /api/health
Response: { success: true, message: "✅ Server is running" }
```

### API Info
```
GET /api
Response: API version, available endpoints
```

---

## 🗄️ Database Collections

### Users Collection
```json
{
  "_id": ObjectId,
  "username": "string",
  "email": "string",
  "password": "string (hashed)",
  "stats": {
    "totalProblems": 0,
    "solvedProblems": 0,
    "streak": 0,
    "points": 0
  }
}
```

### Problems Collection
```json
{
  "_id": ObjectId,
  "leetcodeId": 1,
  "name": "Two Sum",
  "difficulty": "easy",
  "topic": "Arrays & Hashing",
  "acceptance": "49.6%"
}
```

### UserProblems Collection
```json
{
  "_id": ObjectId,
  "userId": ObjectId,
  "problemId": ObjectId,
  "status": "todo|in_progress|solved",
  "attempts": 0,
  "solvedDate": null
}
```

---

## ✅ Testing Checklist

### 1. Server Starts
- [ ] `npm run dev` starts without errors
- [ ] Terminal shows "Algozee Backend Server Started"
- [ ] Server listening on port 5000

### 2. Database Connected
- [ ] Console shows "✅ MongoDB Connected"
- [ ] No connection errors

### 3. API Endpoints Work
- [ ] GET http://localhost:5000/api returns JSON
- [ ] GET http://localhost:5000/api/health returns { success: true }

### 4. WebSocket Connected
- [ ] Socket.io initialized
- [ ] Listen for: `connection`, `user-joined`, `user-left`

### 5. Seed Data
- [ ] Run: `npm run seed`
- [ ] Should insert sample problems
- [ ] Check MongoDB for problems collection

---

## 🛠️ Troubleshooting

### Error: Cannot find module 'express'
```bash
npm install
```

### Error: MongoDB connection failed
- Check `.env` file has correct `MONGODB_URI`
- For local: ensure MongoDB is running
- For Atlas: check connection string from MongoDB website

### Error: Port 5000 already in use
```bash
# Change PORT in .env file
PORT=5001
```

### Error: JWT_SECRET is undefined
- Check `.env` file has `JWT_SECRET` defined
- Should be at least 32 characters

---

## 📦 Project Structure

```
backend/
├── server.js                 # Main server file
├── package.json              # Dependencies
├── .env                       # Environment variables
├── .gitignore                # Git ignore file
│
├── config/
│   └── db.js                 # MongoDB connection
│
├── models/                   # Mongoose schemas
│   ├── User.js
│   ├── Problem.js
│   ├── UserProblem.js
│   ├── Streak.js
│   ├── Submission.js
│   └── Visualization.js
│
├── routes/                   # API routes (Phase 2-3)
│   ├── auth.js
│   ├── users.js
│   ├── problems.js
│   └── ...
│
├── controllers/              # Business logic (Phase 2-3)
├── middleware/               # Custom middleware (Phase 2)
├── sockets/                  # WebSocket events (Phase 4)
└── seeds/                    # Sample data
    └── seedProblems.js
```

---

## 🔐 Security Notes

⚠️ **IMPORTANT:**
- Never commit `.env` to git (added to .gitignore)
- Keep `JWT_SECRET` private and strong (min 32 chars)
- Use environment variables for sensitive data
- Passwords are hashed with bcrypt before storage

---

## 📚 Next Steps

After Phase 1:

1. **Phase 2:** Authentication (Register, Login, JWT)
2. **Phase 3:** REST API (Problems, Progress, Dashboard)
3. **Phase 4:** Real-time Features (WebSocket)
4. **Phase 5:** Frontend Integration
5. **Phase 6:** Advanced Features (Leaderboard, Badges)

---

## 📞 Support

For issues:
1. Check console logs
2. Verify `.env` configuration
3. Ensure MongoDB is running
4. Check if port 5000 is available

---

**Status:** ✅ Phase 1 Complete - Ready for Testing
