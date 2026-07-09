// middleware/injectScripts.js
// Intercepts GET / and GET /index.html, injects the integration scripts
// just before </body>, and serves the modified HTML — never touching the source file.

const path = require('path');
const fs   = require('fs');

// algozee/frontend/  (backend is algozee/backend/, so go up one level then into frontend)
const FRONTEND_DIR = path.resolve(__dirname, '..', '..', 'frontend');
const INDEX_PATH   = path.join(FRONTEND_DIR, 'index.html');

// Scripts injected in-memory on every request (order matters)
const INJECT_SNIPPET = `
  <!-- ── Algozee backend integration (auto-injected by server) ── -->
  <script src="/algozee-api.js"></script>
  <script src="/api-bridge.js"></script>
`;

/** Build the modified HTML string. Returns null if index.html can't be read. */
function buildHtml() {
  try {
    let html = fs.readFileSync(INDEX_PATH, 'utf8');
    // Guard: never double-inject
    if (html.includes('algozee-api.js')) return html;
    return html.replace('</body>', INJECT_SNIPPET + '\n</body>');
  } catch (err) {
    console.error('[injectScripts] Cannot read index.html:', err.message);
    console.error('[injectScripts] Expected at:', INDEX_PATH);
    return null;
  }
}

/** Send the injected index.html directly to a response object. */
function injectAndSend(res) {
  const html = buildHtml();
  if (!html) {
    res.status(500).send('Could not load application. Make sure frontend/index.html exists.');
    return;
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.send(html);
}

/** Express middleware — only intercepts / and /index.html */
function injectScripts(req, res, next) {
  if (req.method !== 'GET') return next();
  if (req.path !== '/' && req.path !== '/index.html') return next();
  injectAndSend(res);
}

module.exports = injectScripts;
module.exports.injectAndSend = injectAndSend;
