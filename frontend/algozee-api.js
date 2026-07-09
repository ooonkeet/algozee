// algozee-api.js
// ─── Centralised API + Socket.io client for Algozee ───────────────────────────
// Loaded BEFORE api-bridge.js, AFTER app.js has run.
// Exposes: window.AlgozeeAPI  (REST helpers)
//          window.AlgozeeSocket (Socket.io instance)
//          window.AlgozeeSession (current user / auth tokens)
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  const BASE_URL = 'http://localhost:5000/api';
  const STORAGE_KEY_TOKEN   = 'algozee_token';
  const STORAGE_KEY_REFRESH = 'algozee_refresh';
  const STORAGE_KEY_USER    = 'algozee_user';

  // ─── Session state ──────────────────────────────────────────────────────────
  const Session = {
    token:        localStorage.getItem(STORAGE_KEY_TOKEN)   || null,
    refreshToken: localStorage.getItem(STORAGE_KEY_REFRESH) || null,
    user:         JSON.parse(localStorage.getItem(STORAGE_KEY_USER) || 'null'),

    save(data) {
      this.token        = data.token;
      this.refreshToken = data.refreshToken;
      this.user         = data.user;
      localStorage.setItem(STORAGE_KEY_TOKEN,   data.token);
      localStorage.setItem(STORAGE_KEY_REFRESH, data.refreshToken);
      localStorage.setItem(STORAGE_KEY_USER,    JSON.stringify(data.user));
    },

    clear() {
      this.token = this.refreshToken = this.user = null;
      localStorage.removeItem(STORAGE_KEY_TOKEN);
      localStorage.removeItem(STORAGE_KEY_REFRESH);
      localStorage.removeItem(STORAGE_KEY_USER);
    },

    isLoggedIn() {
      return !!this.token && !!this.user;
    },

    userId() {
      return this.user?._id || this.user?.id || null;
    },
  };

  // ─── Core fetch wrapper ─────────────────────────────────────────────────────
  async function apiFetch(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (Session.token) headers['Authorization'] = `Bearer ${Session.token}`;

    let res = await fetch(`${BASE_URL}${path}`, { ...options, headers });

    // Attempt token refresh on 401
    if (res.status === 401 && Session.refreshToken) {
      const refreshRes = await fetch(`${BASE_URL}/auth/refresh-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken: Session.refreshToken }),
      });
      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
        Session.save({ ...refreshData, refreshToken: Session.refreshToken });
        headers['Authorization'] = `Bearer ${Session.token}`;
        res = await fetch(`${BASE_URL}${path}`, { ...options, headers });
      } else {
        Session.clear();
        window.dispatchEvent(new CustomEvent('algozee:session-expired'));
      }
    }

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.message || 'API Error'), { status: res.status, data });
    return data;
  }

  // ─── Auth ───────────────────────────────────────────────────────────────────
  const Auth = {
    async register(username, email, password) {
      const data = await apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });
      Session.save(data);
      return data;
    },

    async login(email, password) {
      const data = await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      Session.save(data);
      return data;
    },

    async logout() {
      try { await apiFetch('/auth/logout', { method: 'POST' }); } catch (_) {}
      Session.clear();
      AlgozeeSocket.disconnect();
    },

    async me() {
      return apiFetch('/auth/me');
    },
  };

  // ─── Problems ───────────────────────────────────────────────────────────────
  const Problems = {
    list(params = {}) {
      const qs = new URLSearchParams(params).toString();
      return apiFetch(`/problems${qs ? '?' + qs : ''}`);
    },

    byId(id) { return apiFetch(`/problems/${id}`); },

    topics() { return apiFetch('/problems/topics'); },

    userProblems(userId, params = {}) {
      const qs = new URLSearchParams(params).toString();
      return apiFetch(`/problems/user/${userId}${qs ? '?' + qs : ''}`);
    },
  };

  // ─── User Progress (UserProblem) ────────────────────────────────────────────
  const Progress = {
    get(userId, problemId) {
      return apiFetch(`/user-problems/${userId}/${problemId}`);
    },

    upsert(payload) {
      return apiFetch('/user-problems', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    },

    patch(id, payload) {
      return apiFetch(`/user-problems/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
      });
    },

    delete(id) {
      return apiFetch(`/user-problems/${id}`, { method: 'DELETE' });
    },

    reset(userId) {
      return apiFetch(`/user-problems/user/${userId}/reset`, { method: 'DELETE' });
    },
  };

  // ─── Dashboard ──────────────────────────────────────────────────────────────
  const Dashboard = {
    user(userId) { return apiFetch(`/dashboard/${userId}`); },
    global()     { return apiFetch('/dashboard/global'); },
  };

  // ─── Submissions ────────────────────────────────────────────────────────────
  const Submissions = {
    submit(userId, problemId, code, language) {
      return apiFetch('/submissions', {
        method: 'POST',
        body: JSON.stringify({ userId, problemId, code, language }),
      });
    },

    byUser(userId, params = {}) {
      const qs = new URLSearchParams(params).toString();
      return apiFetch(`/submissions/user/${userId}${qs ? '?' + qs : ''}`);
    },

    stats(userId) { return apiFetch(`/submissions/user/${userId}/stats`); },

    byProblem(userId, problemId) {
      return apiFetch(`/submissions/user/${userId}/problem/${problemId}`);
    },
  };

  // ─── Leaderboard ────────────────────────────────────────────────────────────
  const Leaderboard = {
    global(limit = 50)     { return apiFetch(`/leaderboard?limit=${limit}`); },
    streak(limit = 50)     { return apiFetch(`/leaderboard/streak?limit=${limit}`); },
    topic(topic, limit=20) { return apiFetch(`/leaderboard/topic/${encodeURIComponent(topic)}?limit=${limit}`); },
    rank(userId)           { return apiFetch(`/leaderboard/rank/${userId}`); },
    badges(userId)         { return apiFetch(`/leaderboard/badges/${userId}`); },
  };

  // ─── Visualizations ─────────────────────────────────────────────────────────
  const Visualizations = {
    list()               { return apiFetch('/visualizations'); },
    run(userId, algoName, input) {
      return apiFetch('/visualizations/run', {
        method: 'POST',
        body: JSON.stringify({ userId, algorithmName: algoName, input }),
      });
    },
    history(userId)      { return apiFetch(`/visualizations/history/${userId}`); },
    byId(id)             { return apiFetch(`/visualizations/${id}`); },
    delete(id)           { return apiFetch(`/visualizations/${id}`, { method: 'DELETE' }); },
  };

  // ─── Socket.io ──────────────────────────────────────────────────────────────
  // We lazy-load the socket.io client CDN so we don't need a build step.
  const SocketManager = (() => {
    let _socket = null;

    function connect() {
      if (_socket && _socket.connected) return;

      const script = document.createElement('script');
      script.src = 'https://cdn.socket.io/4.7.5/socket.io.min.js';
      script.onload = () => {
        _socket = window.io('http://localhost:5000', {
          auth: { token: Session.token || '' },
          transports: ['websocket', 'polling'],
          reconnectionDelay: 2000,
        });

        _socket.on('connect', () => {
          console.log('[Algozee] Socket connected:', _socket.id);
          window.dispatchEvent(new CustomEvent('algozee:socket-connected'));
        });

        _socket.on('welcome', (data) => {
          console.log('[Algozee] Welcome:', data);
        });

        // Relay backend events as DOM custom events for the bridge to consume
        const relay = (name) => _socket.on(name, (payload) => {
          window.dispatchEvent(new CustomEvent(`algozee:${name}`, { detail: payload }));
        });

        relay('streak-updated');
        relay('badges-earned');
        relay('points-updated');
        relay('problem-status-updated');
        relay('dashboard-stats-update');
        relay('online-count');
        relay('problem-solved-global');

        _socket.on('disconnect', (reason) => {
          console.log('[Algozee] Socket disconnected:', reason);
        });
      };
      document.head.appendChild(script);
    }

    function disconnect() {
      if (_socket) { _socket.disconnect(); _socket = null; }
    }

    function emit(event, data) {
      if (_socket && _socket.connected) _socket.emit(event, data);
    }

    function get() { return _socket; }

    return { connect, disconnect, emit, get };
  })();

  // ─── Public API ─────────────────────────────────────────────────────────────
  window.AlgozeeAPI     = { Auth, Problems, Progress, Dashboard, Submissions, Leaderboard, Visualizations };
  window.AlgozeeSocket  = SocketManager;
  window.AlgozeeSession = Session;

  console.log('[Algozee] API client ready. Logged in:', Session.isLoggedIn());
})();
