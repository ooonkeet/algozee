// api-bridge.js
// ─── Backend integration bridge ───────────────────────────────────────────────
// Loaded AFTER algozee-api.js and app.js.
// Strategy: monkey-patch the key app.js functions to add API calls,
// while keeping all existing UI logic intact.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  // Guard: algozee-api.js must be loaded first
  if (!window.AlgozeeAPI) {
    console.error('[Bridge] algozee-api.js not loaded. Bridge aborted.');
    return;
  }

  const API     = window.AlgozeeAPI;
  const Session = window.AlgozeeSession;
  const Socket  = window.AlgozeeSocket;

  // ─── 1. Auth guard ──────────────────────────────────────────────────────────
  // If no session, inject a slim auth bar at the top of the page
  function injectAuthBar() {
    if (document.getElementById('algozee-auth-bar')) return;

    const bar = document.createElement('div');
    bar.id = 'algozee-auth-bar';
    bar.style.cssText = `
      position: fixed; bottom: 0; right: 0; z-index: 9999;
      display: flex; align-items: center; gap: 0.75rem;
      background: rgba(13,20,38,0.92); backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.08); border-radius: 14px 0 0 0;
      padding: 0.6rem 1.1rem; font-size: 0.82rem; color: #9ca3af;
    `;

    if (Session.isLoggedIn()) {
      bar.innerHTML = `
        <span style="color:#a5b4fc; font-weight:600;">👤 ${Session.user.username}</span>
        <span style="color:#374151;">|</span>
        <span id="ab-streak" style="color:#f59e0b;">🔥 — streak</span>
        <span id="ab-points" style="color:#818cf8;">✦ — pts</span>
        <button onclick="window._algozeeLogout()" style="
          background:rgba(244,63,94,0.12); border:1px solid rgba(244,63,94,0.25);
          color:#fda4af; border-radius:6px; padding:0.25rem 0.6rem;
          cursor:pointer; font-size:0.78rem; font-weight:600;">Logout</button>
      `;
    } else {
      bar.innerHTML = `
        <span>Progress not saved —</span>
        <a href="auth.html" style="
          background:linear-gradient(135deg,#6366f1,#4f46e5);
          color:#fff; border-radius:8px; padding:0.35rem 0.9rem;
          text-decoration:none; font-weight:600; font-size:0.82rem;">Sign In / Register</a>
      `;
    }

    document.body.appendChild(bar);
  }

  // ─── 2. Map app.js status → backend status ──────────────────────────────────
  // app.js uses: 'todo' | 'progress' | 'done'
  // Backend uses: 'todo' | 'in_progress' | 'solved'
  function toBackendStatus(appStatus) {
    return appStatus === 'done' ? 'solved'
         : appStatus === 'progress' ? 'in_progress'
         : 'todo';
  }

  function toAppStatus(backendStatus) {
    return backendStatus === 'solved'      ? 'done'
         : backendStatus === 'in_progress' ? 'progress'
         : 'todo';
  }

  // ─── 3. Problem ID → MongoDB _id lookup cache ───────────────────────────────
  // We fetch the problem list once and build a leetcodeId → _id map
  const problemIdCache = {}; // { leetcodeId: mongoId }

  async function ensureProblemCache() {
    if (Object.keys(problemIdCache).length > 0) return;
    try {
      let page = 1;
      let pages = 1;
      while (page <= pages) {
        const res = await API.Problems.list({ page, limit: 100 });
        (res.problems || []).forEach(p => {
          problemIdCache[p.leetcodeId] = p._id;
        });
        pages = res.pages || 1;
        page++;
      }
    } catch (e) {
      console.warn('[Bridge] Could not populate problem cache:', e.message);
    }
  }

  // ─── 4. Monkey-patch updateProblemStatus ────────────────────────────────────
  const _origUpdateStatus = window.updateProblemStatus;

  window.updateProblemStatus = async function (probId, newStatus) {
    // Always run original first so the UI updates immediately
    _origUpdateStatus(probId, newStatus);

    if (!Session.isLoggedIn()) return; // guest — UI only

    const userId = Session.userId();
    try {
      await ensureProblemCache();
      const mongoId = problemIdCache[probId];
      if (!mongoId) {
        console.warn(`[Bridge] No MongoDB id for leetcodeId=${probId}. Is the DB seeded?`);
        return;
      }

      const backendStatus = toBackendStatus(newStatus);
      const res = await API.Progress.upsert({
        userId,
        problemId: mongoId,
        status: backendStatus,
      });

      // Propagate streak/points from API response back into app.js state
      if (res.streak) {
        if (typeof state !== 'undefined') {
          state.streak = res.streak.currentStreak;
        }
        updateAuthBar();
      }
      if (res.newBadges && res.newBadges.length > 0) {
        res.newBadges.forEach(b => {
          if (typeof showNotification === 'function') {
            showNotification('', {
              type: 'badge',
              icon: b.icon || '🏆',
              title: 'Badge Unlocked (Server)',
              message: b.name,
              detail: b.description,
            });
          }
        });
      }

      // Emit socket event so other tabs sync
      Socket.emit('update-problem-status', {
        problemId: mongoId,
        status: backendStatus,
        topic: (typeof state !== 'undefined')
          ? state.problems.find(p => p.id === probId)?.topic
          : undefined,
      });
    } catch (err) {
      console.error('[Bridge] Failed to sync status:', err.message);
    }
  };

  // ─── 5. Monkey-patch renderDashboard ────────────────────────────────────────
  const _origRenderDashboard = window.renderDashboard;

  window.renderDashboard = async function () {
    // Run original for instant render with local state
    _origRenderDashboard();

    if (!Session.isLoggedIn()) return;

    try {
      const userId = Session.userId();
      const [dashData, badgesData] = await Promise.all([
        API.Dashboard.user(userId),
        API.Leaderboard.badges(userId),
      ]);

      const d = dashData.dashboard;

      // ── Sync app.js state.problems statuses from server ──────────────────
      if (d.recentActivity && typeof state !== 'undefined') {
        // Batch-fetch all user problems to get full status map
        try {
          let page = 1, pages = 1;
          while (page <= pages) {
            const up = await API.Problems.userProblems(userId, { page, limit: 100 });
            (up.problems || []).forEach(p => {
              const local = state.problems.find(lp => lp.id === p.leetcodeId);
              if (local) local.status = toAppStatus(p.userProgress.status);
            });
            pages = up.pages || 1;
            page++;
          }
        } catch (_) {}
      }

      // ── Patch stat counters with server truth ─────────────────────────────
      const overview = d.overview;
      const streak   = d.streak;

      const elSolved = document.getElementById('stat-solved-count');
      const elStreak = document.getElementById('stat-streak-val');
      const elRank   = document.getElementById('stat-rank-name');
      const elPoints = document.getElementById('stat-points-val');
      const elRing   = document.getElementById('dashboard-progress-ring');
      const elPct    = document.getElementById('dashboard-pct-text');
      const elEasy   = document.getElementById('breakdown-easy');
      const elMedium = document.getElementById('breakdown-medium');
      const elHard   = document.getElementById('breakdown-hard');

      if (elSolved) elSolved.textContent = `${overview.totalSolved} / ${overview.totalProblems}`;
      if (elStreak) elStreak.textContent = `${streak.currentStreak} Days`;
      if (elRank)   elRank.textContent   = d.user.rankTitle || 'Coding Padawan';
      if (elPoints) elPoints.textContent = `${d.user.points} pts`;

      // Update ring
      if (elRing && elPct) {
        const pct = overview.completionRate || 0;
        const circumference = 2 * Math.PI * 60;
        elRing.style.strokeDasharray = circumference;
        elRing.style.strokeDashoffset = circumference - (pct / 100) * circumference;
        elPct.textContent = `${pct}%`;
      }

      // Difficulty breakdown
      if (elEasy)   elEasy.textContent   = `${d.difficulty.easy.solved} / ${d.difficulty.easy.total}`;
      if (elMedium) elMedium.textContent = `${d.difficulty.medium.solved} / ${d.difficulty.medium.total}`;
      if (elHard)   elHard.textContent   = `${d.difficulty.hard.solved} / ${d.difficulty.hard.total}`;

      // ── Heatmap: replace with server data ──────────────────────────────────
      if (d.heatmap && typeof state !== 'undefined') {
        d.heatmap.forEach(({ _id: date, count }) => {
          state.activityLog[date] = count;
        });
        if (typeof buildHeatmap === 'function') buildHeatmap();
      }

      // ── Update local streak & points for badge checks ─────────────────────
      if (typeof state !== 'undefined') {
        state.streak = streak.currentStreak;
        state.points = d.user.points;
        state.rank   = d.user.rankTitle || state.rank;
      }

      // ── Re-render badge list with server badges ───────────────────────────
      if (badgesData.badges && badgesData.badges.length > 0) {
        const container = document.getElementById('badges-container');
        if (container) {
          // Append server badges alongside local badges
          badgesData.badges.forEach(badge => {
            if (!container.querySelector(`[data-badge-key="${badge.badgeKey}"]`)) {
              const div = document.createElement('div');
              div.className = 'badge-item unlocked';
              div.setAttribute('data-badge-key', badge.badgeKey);
              div.innerHTML = `
                <div class="badge-icon">${badge.icon || '🏆'}</div>
                <div class="badge-details">
                  <span class="badge-name">${badge.name}</span>
                  <span class="badge-desc">${badge.description}</span>
                  <span class="badge-status" style="color:var(--easy)">Unlocked ✓</span>
                </div>
              `;
              container.prepend(div);
            }
          });
        }
      }

      // ── Re-render solved feed now that statuses are synced ────────────────
      if (typeof renderSolvedFeed === 'function') renderSolvedFeed();
      if (typeof buildTopicProgress === 'function') buildTopicProgress();

      updateAuthBar();
    } catch (err) {
      console.warn('[Bridge] Dashboard sync failed:', err.message);
    }
  };

  // ─── 6. Load initial problem statuses on boot ────────────────────────────────
  async function hydrateProblemsFromServer() {
    if (!Session.isLoggedIn()) return;
    const userId = Session.userId();
    try {
      await ensureProblemCache();

      // Fetch all user-problem records
      let page = 1, pages = 1;
      while (page <= pages) {
        const res = await API.Problems.userProblems(userId, { page, limit: 100 });
        (res.problems || []).forEach(p => {
          if (typeof state !== 'undefined') {
            const local = state.problems.find(lp => lp.id === p.leetcodeId);
            if (local) local.status = toAppStatus(p.userProgress.status);
          }
        });
        pages = res.pages || 1;
        page++;
      }

      // Re-render the active view if needed
      if (typeof state !== 'undefined') {
        if (state.activeTab === 'explorer')   { if (typeof renderProblemsList  === 'function') renderProblemsList(); }
        if (state.activeTab === 'dashboard')  { if (typeof renderDashboard     === 'function') renderDashboard(); }
      }
    } catch (err) {
      console.warn('[Bridge] Could not hydrate problems:', err.message);
    }
  }

  // ─── 7. Auth bar helpers ────────────────────────────────────────────────────
  function updateAuthBar() {
    const streakEl = document.getElementById('ab-streak');
    const pointsEl = document.getElementById('ab-points');
    if (streakEl && typeof state !== 'undefined') {
      streakEl.textContent = `🔥 ${state.streak} streak`;
    }
    if (pointsEl && typeof state !== 'undefined') {
      pointsEl.textContent = `✦ ${state.points} pts`;
    }
  }

  window._algozeeLogout = async function () {
    await API.Auth.logout();
    window.location.href = 'auth.html';
  };

  // ─── 8. Socket.io real-time event listeners ──────────────────────────────────
  function initSocketListeners() {
    window.addEventListener('algozee:streak-updated', (e) => {
      const { currentStreak, longestStreak } = e.detail;
      if (typeof state !== 'undefined') state.streak = currentStreak;
      updateAuthBar();
      const el = document.getElementById('stat-streak-val');
      if (el) el.textContent = `${currentStreak} Days`;
    });

    window.addEventListener('algozee:points-updated', (e) => {
      const { totalPoints, rank } = e.detail;
      if (typeof state !== 'undefined') { state.points = totalPoints; if (rank) state.rank = rank; }
      updateAuthBar();
      const el = document.getElementById('stat-points-val');
      if (el) el.textContent = `${totalPoints} pts`;
    });

    window.addEventListener('algozee:badges-earned', (e) => {
      const { badges } = e.detail;
      badges.forEach(badge => {
        if (typeof showNotification === 'function') {
          showNotification('', {
            type: 'badge',
            icon: badge.icon || '🏆',
            title: 'Badge Unlocked!',
            message: badge.name,
            detail: badge.description,
          });
        }
      });
    });

    window.addEventListener('algozee:problem-status-updated', (e) => {
      // Another tab updated a problem; reflect it locally
      const { problemId, status } = e.detail;
      if (typeof state !== 'undefined') {
        // We only have mongoId here, so skip local sync (cache may not be ready)
        // Just re-render the active list if visible
        if (state.activeTab === 'explorer' && typeof renderProblemsList === 'function') {
          renderProblemsList();
        }
      }
    });

    window.addEventListener('algozee:socket-connected', () => {
      // Request streak update on connect
      Socket.emit('get-streak');
    });
  }

  // ─── 9. Initialise everything on DOMContentLoaded ───────────────────────────
  function init() {
    injectAuthBar();
    initSocketListeners();

    if (Session.isLoggedIn()) {
      Socket.connect();
      // Hydrate problem statuses in the background
      setTimeout(hydrateProblemsFromServer, 600);
    }

    updateAuthBar();
  }

  // DOMContentLoaded may have already fired (scripts at bottom of body)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('[Bridge] Initialised. User logged in:', Session.isLoggedIn());
})();
