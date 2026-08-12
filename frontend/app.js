
const Icons = {
  folder: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>`,
  file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  func: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 4-4-4-4"/><path d="m8 8-4 4 4 4"/><path d="M14 4l-4 16"/></svg>`,
  itf: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4.5-9 4.5-9-4.5Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/></svg>`,
  generic: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1"/></svg>`,
  arrowDown: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  repo: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  chat: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  braces: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>`,
};

const LANG_BADGES = {
  py: { ab: 'PY', bg: '#3776ab' },
  python: { ab: 'PY', bg: '#3776ab' },
  ipynb: { ab: 'NB', bg: '#f37726' },
  js: { ab: 'JS', bg: '#e8b33a' },
  mjs: { ab: 'JS', bg: '#e8b33a' },
  cjs: { ab: 'JS', bg: '#e8b33a' },
  jsx: { ab: 'JSX', bg: '#61dafb' },
  ts: { ab: 'TS', bg: '#3178c6' },
  tsx: { ab: 'TSX', bg: '#3178c6' },
  html: { ab: 'H5', bg: '#e34f26' },
  htm: { ab: 'H5', bg: '#e34f26' },
  css: { ab: 'CSS', bg: '#264de4' },
  scss: { ab: 'SCSS', bg: '#cd6799' },
  sass: { ab: 'SCSS', bg: '#cd6799' },
  less: { ab: 'LESS', bg: '#4f9fd8' },
  json: { ab: '{}', bg: '#5a6478' },
  md: { ab: 'MD', bg: '#75858f' },
  markdown: { ab: 'MD', bg: '#75858f' },
  go: { ab: 'GO', bg: '#00add8' },
  rs: { ab: 'RS', bg: '#dea584' },
  java: { ab: 'JV', bg: '#ea2d2e' },
  c: { ab: 'C', bg: '#5c6bc0' },
  h: { ab: 'H', bg: '#5c6bc0' },
  cpp: { ab: 'C++', bg: '#5c6bc0' },
  hpp: { ab: 'C++', bg: '#5c6bc0' },
  cc: { ab: 'C++', bg: '#5c6bc0' },
  cs: { ab: 'C#', bg: '#68217a' },
  php: { ab: 'PHP', bg: '#777bb4' },
  rb: { ab: 'RB', bg: '#cc342e' },
  sh: { ab: 'SH', bg: '#4eaa25' },
  bash: { ab: 'SH', bg: '#4eaa25' },
  zsh: { ab: 'SH', bg: '#4eaa25' },
  ps1: { ab: 'PS', bg: '#0078d4' },
  bat: { ab: 'CMD', bg: '#4d5a65' },
  cmd: { ab: 'CMD', bg: '#4d5a65' },
  sql: { ab: 'SQL', bg: '#e38c00' },
  yml: { ab: 'YML', bg: '#1e8ab8' },
  yaml: { ab: 'YAML', bg: '#1e8ab8' },
  toml: { ab: 'TOML', bg: '#5a6478' },
  txt: { ab: 'TXT', bg: '#8a94a6' },
  log: { ab: 'LOG', bg: '#8a94a6' },
  lock: { ab: 'LOCK', bg: '#8a94a6' },
  makefile: { ab: 'MK', bg: '#e0115f' },
  dockerfile: { ab: 'DK', bg: '#2496ed' },
  gitignore: { ab: 'GIT', bg: '#f05133' },
  env: { ab: '.ENV', bg: '#7c8a99' },
  vue: { ab: 'VU', bg: '#42b883' },
  swift: { ab: 'SW', bg: '#fa7343' },
  kt: { ab: 'KT', bg: '#a97bff' },
  kotlin: { ab: 'KT', bg: '#a97bff' },
  dart: { ab: 'DA', bg: '#00b4ab' },
  lua: { ab: 'LU', bg: '#2c2d72' },
  perl: { ab: 'PL', bg: '#9b6bd' },
  r: { ab: 'R', bg: '#276dc3' },
  jl: { ab: 'JL', bg: '#a33332' },
  ex: { ab: 'EL', bg: '#6e4a7e' },
  exs: { ab: 'EL', bg: '#6e4a7e' },
  scala: { ab: 'SC', bg: '#dc322f' },
  gradle: { ab: 'GD', bg: '#45b15a' },
  xml: { ab: 'XML', bg: '#e31a1c' },
  graphql: { ab: 'GQL', bg: '#e10098' },
  proto: { ab: 'PROTO', bg: '#6b3fb' },
  pdf: { ab: 'PDF', bg: '#d93025' },
  png: { ab: 'IMG', bg: '#8a94a6' },
  jpg: { ab: 'IMG', bg: '#8a94a6' },
  jpeg: { ab: 'IMG', bg: '#8a94a6' },
  gif: { ab: 'IMG', bg: '#8a94a6' },
  svg: { ab: 'IMG', bg: '#8a94a6' },
  ico: { ab: 'IMG', bg: '#8a94a6' },
  webp: { ab: 'IMG', bg: '#8a94a6' },
};

function getFileIcon(name) {
  const lower = (name || '').toLowerCase();
  const special = lower === 'makefile' ? 'makefile' : lower === 'dockerfile' ? 'dockerfile' : lower === '.gitignore' ? 'gitignore' : (lower === '.env' || lower.endsWith('.env')) ? 'env' : null;
  const key = special || (name.includes('.') ? name.split('.').pop().toLowerCase() : '');
  const m = LANG_BADGES[key];
  if (!m) return Icons.file;
  const size = m.ab.length <= 2 ? 5.2 : m.ab.length <= 3 ? 4.6 : 3.6;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect x="1" y="1" width="14" height="14" rx="3" fill="${m.bg}"/><text x="8" y="10.6" font-family="Segoe UI, Arial, sans-serif" font-size="${size}" font-weight="700" fill="#ffffff" text-anchor="middle">${m.ab}</text></svg>`;
}

const API = '';  // Same origin
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, attrs = {}, ...children) => {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'html') node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    if (typeof c === 'string') node.appendChild(document.createTextNode(c));
    else if (c) node.appendChild(c);
  }
  return node;
};

// ─── State ──────────────────────────────────────────────────────
const state = {
  view: 'splash',
  config: null,
  repos: [],
  activeRepo: null,   // { owner, name, path }
  structure: null,
  nodes: null,
  conversations: [],
  activeConversation: null,
  chatMessages: [],
  pipelineStage: -1,
  pipelineError: null,
  searchOpen: false,
  codePanel: null,
  modalOpen: null,
  expandedNodes: new Set(),
selectedId: null,
  explorerSearch: '',
  chatSending: false,
  deepThink: false,
};

// ─── API Layer ──────────────────────────────────────────────────
async function api(path, opts = {}) {
  const { method = 'GET', body } = opts;
  const headers = {};
  if (body) headers['Content-Type'] = 'application/json';
  try {
    const res = await fetch(`${API}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || `HTTP ${res.status}`);
    return data;
  } catch (err) {
    if (err.message.includes('Failed to fetch')) {
      throw new Error('Backend disconnected. Is the server running?');
    }
    throw err;
  }
}

// ─── Toast ──────────────────────────────────────────────────────
function toast(message, type = 'info') {
  const icons = { success: Icons.check, error: Icons.x, info: Icons.info };
  const container = document.getElementById('toast-container');
  const t = el('div', { class: `toast toast-${type}` },
    el('span', { html: icons[type] || Icons.info }),
    el('span', {}, message),
  );
  container.appendChild(t);
  setTimeout(() => { t.classList.add('toast-exit'); setTimeout(() => t.remove(), 300); }, 4000);
}

// ─── Router ─────────────────────────────────────────────────────
function navigate(view, skipHash = false) {
  state.view = view;
  if (!skipHash) window.location.hash = view;
  render();
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1) || 'home';
  if (hash !== state.view) {
    state.view = hash;
    render();
  }
});

// ─── Render ─────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  switch (state.view) {
    case 'splash': app.appendChild(renderSplash()); break;
    case 'setup': app.appendChild(renderSetup()); break;
    case 'setup-cloud': app.appendChild(renderSetupCloud()); break;
    case 'setup-local': app.appendChild(renderSetupLocal()); break;
    case 'home': app.appendChild(renderLayout('home')); break;
    case 'pipeline': app.appendChild(renderLayout('pipeline')); break;
    case 'completion': app.appendChild(renderLayout('completion')); break;
    case 'explorer': app.appendChild(renderLayout('explorer')); break;
case 'graph': app.appendChild(renderLayout('graph')); break;
    case 'chat': app.appendChild(renderLayout('chat')); break;
    case 'settings': app.appendChild(renderLayout('settings')); break;
    default: app.appendChild(renderLayout('home')); break;
  }

  if (state.searchOpen) app.appendChild(renderSearch());
  if (state.modalOpen === 'addRepo') app.appendChild(renderAddRepoModal());
  if (state.codePanel) app.appendChild(renderCodePanel());
}

// ─── Splash ─────────────────────────────────────────────────────
function renderSplash() {
  const splash = el('div', { class: 'splash', id: 'splash-screen' });

  // Background nodes
  const nodesContainer = el('div', { class: 'splash-nodes' });
  for (let i = 0; i < 12; i++) {
    const x = 10 + Math.random() * 80;
    const y = 10 + Math.random() * 80;
    const node = el('div', {
      class: 'splash-node',
      style: { left: `${x}%`, top: `${y}%`, animationDelay: `${0.3 + Math.random() * 1.2}s` },
    });
    nodesContainer.appendChild(node);
  }
  for (let i = 0; i < 6; i++) {
    const y = 20 + Math.random() * 60;
    const w = 60 + Math.random() * 200;
    const line = el('div', {
      class: 'splash-line',
      style: { left: `${10 + Math.random() * 40}%`, top: `${y}%`, width: `${w}px`, animationDelay: `${0.5 + Math.random() * 1.5}s` },
    });
    nodesContainer.appendChild(line);
  }
  splash.appendChild(nodesContainer);

  splash.appendChild(el('div', { class: 'splash-title' }, 'RepoLens'));
  splash.appendChild(el('div', { class: 'splash-subtitle' }, 'Optical Repository Analyzer'));

  setTimeout(async () => {
    splash.classList.add('splash-exit');
    setTimeout(async () => {
      try {
        const health = await api('/health');
        state.config = await api('/config');
        if (!health.gemini_key_set) {
          navigate('setup');
        } else {
          await loadRepos();
          navigate('home');
        }
      } catch {
        navigate('setup');
      }
    }, 500);
  }, 1800);

  return splash;
}

// ─── Setup: Choose ──────────────────────────────────────────────
function renderSetup() {
  const container = el('div', { class: 'setup' });
  const inner = el('div', { class: 'setup-container' });

  // Step indicator
  const steps = el('div', { class: 'setup-step-indicator' },
    el('div', { class: 'setup-step-dot active' }),
    el('div', { class: 'setup-step-dot' }),
  );
  inner.appendChild(steps);

  const header = el('div', { class: 'setup-header' });
  header.appendChild(el('h1', {}, 'Welcome to RepoLens'));
  header.appendChild(el('p', {}, 'Choose how you want to power your AI analysis'));
  inner.appendChild(header);

  const options = el('div', { class: 'setup-options' });

  const cloudOption = el('div', {
    class: 'setup-option',
    onClick: () => navigate('setup-cloud'),
  },
    el('div', { class: 'setup-option-icon', html: Icons.cloud }),
    el('div', { class: 'setup-option-title' }, 'Cloud AI'),
    el('div', { class: 'setup-option-desc' }, 'Use Gemini API. Fast, reliable, no local setup required.'),
  );

  const localOption = el('div', {
    class: 'setup-option',
    onClick: () => navigate('setup-local'),
  },
    el('div', { class: 'setup-option-icon', html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>` }),
    el('div', { class: 'setup-option-title' }, 'Local AI'),
    el('div', { class: 'setup-option-desc' }, 'Embeddings and vector search run locally on your machine.'),
  );

  options.appendChild(cloudOption);
  options.appendChild(localOption);
  inner.appendChild(options);
  container.appendChild(inner);
  return container;
}

// ─── Setup: Cloud ───────────────────────────────────────────────
function renderSetupCloud() {
  const container = el('div', { class: 'setup' });
  const inner = el('div', { class: 'setup-container' });

  const steps = el('div', { class: 'setup-step-indicator' },
    el('div', { class: 'setup-step-dot' }),
    el('div', { class: 'setup-step-dot active' }),
  );
  inner.appendChild(steps);

  const header = el('div', { class: 'setup-header' });
  header.appendChild(el('h1', {}, 'Connect Gemini API'));
  header.appendChild(el('p', {}, 'Enter your Google AI API key to get started'));
  inner.appendChild(header);

  const form = el('div', { class: 'setup-form' });

  const inputGroup = el('div', { class: 'input-group' });
  inputGroup.appendChild(el('label', { for: 'api-key-input' }, 'API Key'));
  const input = el('input', {
    class: 'input input-lg',
    id: 'api-key-input',
    type: 'password',
    placeholder: 'AIza...',
    autocomplete: 'off',
  });
  inputGroup.appendChild(input);
  form.appendChild(inputGroup);

  const validationMsg = el('div', { class: 'validation-msg', id: 'validation-msg' });
  form.appendChild(validationMsg);

  const actions = el('div', { class: 'modal-actions', style: { justifyContent: 'space-between' } });

  const backBtn = el('button', {
    class: 'btn btn-ghost',
    onClick: () => navigate('setup'),
  }, 'Back');

  const saveBtn = el('button', {
    class: 'btn btn-primary btn-lg',
    id: 'save-key-btn',
    onClick: async () => {
      const key = input.value.trim();
      if (!key) { toast('Please enter an API key', 'error'); return; }
      saveBtn.disabled = true;
      saveBtn.textContent = 'Validating...';
      validationMsg.innerHTML = '';
      try {
        await api('/config', { method: 'POST', body: { gemini_api_key: key, provider: 'cloud' } });
        const health = await api('/health');
        if (health.gemini_key_set) {
          validationMsg.innerHTML = '<span class="validation-success">✓ Connected successfully</span>';
          state.config = await api('/config');
          toast('API key saved', 'success');
          await loadRepos();
          setTimeout(() => navigate('home'), 600);
        } else {
          throw new Error('Key was not accepted');
        }
      } catch (err) {
        validationMsg.innerHTML = `<span class="validation-error">✕ ${err.message}</span>`;
        saveBtn.disabled = false;
        saveBtn.textContent = 'Save & Continue';
      }
    },
  }, 'Save & Continue');

  actions.appendChild(backBtn);
  actions.appendChild(saveBtn);
  form.appendChild(actions);

  inner.appendChild(form);
  container.appendChild(inner);
  return container;
}

// ─── Setup: Local AI ────────────────────────────────────────────
function renderSetupLocal() {
  const container = el('div', { class: 'setup' });
  const inner = el('div', { class: 'setup-container' });

  const steps = el('div', { class: 'setup-step-indicator' },
    el('div', { class: 'setup-step-dot' }),
    el('div', { class: 'setup-step-dot active' }),
  );
  inner.appendChild(steps);

  const header = el('div', { class: 'setup-header' });
  header.appendChild(el('h1', {}, 'Local AI Components'));
  header.appendChild(el('p', {}, 'RepoLens indexes code on your machine; the generative LLM runs via the Gemini API.'));
  inner.appendChild(header);

  const reqs = el('div', { class: 'requirements-list' });
  const requirements = [
    { icon: Icons.settings, text: 'Embedding model (gte-modernbert-base) runs locally via sentence-transformers on CPU', status: 'info' },
    { icon: Icons.folder, text: 'Qdrant vector database stored locally under out/qdrant_db', status: 'info' },
    { icon: Icons.plus, text: 'Embedding model weights cached under ./models', status: 'info' },
    { icon: Icons.repo, text: 'The LLM itself is cloud-hosted via the Gemini API (requires an API key)', status: 'info' },
  ];

  for (const r of requirements) {
    reqs.appendChild(el('div', { class: 'requirement-item' },
      el('span', { class: 'requirement-icon', html: r.icon }),
      el('span', {}, r.text),
    ));
  }
  inner.appendChild(reqs);

  const notice = el('div', { class: 'warning-banner', style: { marginTop: '24px' } },
    el('span', { html: Icons.info }),
    el('span', {}, 'No separate local LLM runtime is required. Set up the Gemini API key to start analyzing repositories.'),
  );
  inner.appendChild(notice);

  const actions = el('div', { class: 'modal-actions', style: { justifyContent: 'space-between', marginTop: '24px' } });
  actions.appendChild(el('button', { class: 'btn btn-ghost', onClick: () => navigate('setup') }, 'Back'));
  actions.appendChild(el('button', { class: 'btn btn-primary btn-lg', onClick: () => navigate('setup-cloud') }, 'Set Up Gemini API'));
  inner.appendChild(actions);

  container.appendChild(inner);
  return container;
}

// ─── Layout Shell ───────────────────────────────────────────────
function renderLayout(contentView) {
  const layout = el('div', { class: 'layout' });
  layout.appendChild(renderSidebar(contentView));

  const main = el('div', { class: 'main' });
  main.appendChild(renderMainHeader(contentView));

  const content = el('div', { class: 'main-content' });
  switch (contentView) {
    case 'home': content.appendChild(renderHome()); break;
    case 'pipeline': content.appendChild(renderPipeline()); break;
    case 'completion': content.appendChild(renderCompletion()); break;
    case 'explorer': content.appendChild(renderExplorer()); break;
    case 'graph': content.appendChild(renderGraphView()); break;
    case 'chat': content.appendChild(renderChat()); break;
    case 'settings': content.appendChild(renderSettings()); break;
  }
  main.appendChild(content);
  layout.appendChild(main);
  return layout;
}

// ─── Sidebar ────────────────────────────────────────────────────
function renderSidebar(activeView) {
  const sidebar = el('div', { class: 'sidebar' + (state.sidebarCollapsed ? ' collapsed' : '') });

  // Header
  const header = el('div', { class: 'sidebar-header' });
  const title = el('span', { class: 'sidebar-header-title' }, 'RepoLens');
  
  const toggleBtn = el('button', { 
      class: 'btn-icon', 
      style: { background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px', marginLeft: 'auto', display: 'flex', alignItems: 'center' },
      html: Icons.menu
  });
  toggleBtn.onclick = () => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      sidebar.classList.toggle('collapsed', state.sidebarCollapsed);
  };

  header.appendChild(title);
  header.appendChild(toggleBtn);
  sidebar.appendChild(header);

  const nav = el('div', { class: 'sidebar-nav' });

  // Main nav
  const navItems = [
    { icon: Icons.home, label: 'Home', view: 'home' },
    { icon: Icons.plus, label: 'Add Repository', action: () => openAddRepoModal() },
  ];
  for (const item of navItems) {
    nav.appendChild(el('button', {
      class: `sidebar-item ${activeView === item.view ? 'active' : ''}`,
      onClick: item.action || (() => navigate(item.view)),
    },
      el('span', { class: 'sidebar-item-icon', html: item.icon }),
      el('span', { class: 'sidebar-item-label' }, item.label),
    ));
  }

  // Repos section
  if (state.repos.length > 0) {
    const repoSection = el('div', { class: 'sidebar-section' });
    repoSection.appendChild(el('div', { class: 'sidebar-section-title' }, 'Repositories'));
    for (const repo of state.repos) {
      const isActive = state.activeRepo && state.activeRepo.name === repo.name && state.activeRepo.owner === repo.owner;
      repoSection.appendChild(el('button', {
        class: `sidebar-item ${isActive ? 'active' : ''}`,
        onClick: () => openRepo(repo),
      },
        el('span', { class: 'sidebar-item-icon', html: Icons.repo }),
        el('span', { class: 'sidebar-item-label' }, repo.name),
      ));
    }
    nav.appendChild(repoSection);
  }

  // Active repo actions
  if (state.activeRepo) {
    const repoActions = el('div', { class: 'sidebar-section' });
    repoActions.appendChild(el('div', { class: 'sidebar-section-title' }, state.activeRepo.name));
    const items = [
      { icon: Icons.search, label: 'Summaries', view: 'explorer' },
      { icon: Icons.cloud, label: 'Graph View', view: 'graph' },
      { icon: Icons.chat, label: 'Chat', view: 'chat' },
    ];
    for (const item of items) {
      repoActions.appendChild(el('button', {
        class: `sidebar-item ${activeView === item.view ? 'active' : ''}`,
        onClick: () => navigate(item.view),
      },
        el('span', { class: 'sidebar-item-icon', html: item.icon }),
        el('span', { class: 'sidebar-item-label' }, item.label),
      ));
    }
    nav.appendChild(repoActions);
  }

  sidebar.appendChild(nav);

  // Footer
  const footer = el('div', { class: 'sidebar-footer' });
  footer.appendChild(el('button', {
    class: `sidebar-item ${activeView === 'settings' ? 'active' : ''}`,
    onClick: () => navigate('settings'),
  },
    el('span', { class: 'sidebar-item-icon', html: Icons.settings }),
    el('span', { class: 'sidebar-item-label' }, 'Settings'),
  ));
  const searchBtn = el('button', {
    class: 'sidebar-item',
    onClick: () => { state.searchOpen = true; render(); },
  },
    el('span', { class: 'sidebar-item-icon', html: Icons.search }),
    el('span', { class: 'sidebar-item-label' }, 'Search'),
    el('kbd', { class: 'sidebar-item-label', style: { marginLeft: 'auto', fontSize: '11px', padding: '1px 4px', background: 'var(--bg-input)', border: '1px solid var(--border-default)', borderRadius: '3px', color: 'var(--text-tertiary)' } }, '⌘K'),
  );
  footer.appendChild(searchBtn);
  sidebar.appendChild(footer);

  return sidebar;
}

// ─── Main Header ────────────────────────────────────────────────
function renderMainHeader(view) {
  const header = el('div', { class: 'main-header' });
  const left = el('div', { class: 'main-header-left' });

  const breadcrumb = el('div', { class: 'breadcrumb' });
  const labels = {
    home: 'Home', pipeline: 'Parsing', completion: 'Complete',
    explorer: 'Summaries', chat: 'Chat', settings: 'Settings',
  };

  if (state.activeRepo && ['explorer', 'chat', 'pipeline', 'completion'].includes(view)) {
    breadcrumb.appendChild(el('span', {}, state.activeRepo.owner));
    breadcrumb.appendChild(el('span', { class: 'breadcrumb-separator' }, '/'));
    breadcrumb.appendChild(el('span', {}, state.activeRepo.name));
    breadcrumb.appendChild(el('span', { class: 'breadcrumb-separator', html: Icons.chevronRight }));
  }
  breadcrumb.appendChild(el('span', { class: 'breadcrumb-current' }, labels[view] || view));
  left.appendChild(breadcrumb);
  header.appendChild(left);

  const right = el('div', { class: 'main-header-right' });
  if (state.config) {
    right.appendChild(el('span', { class: 'badge badge-default' }, state.config.model));
  }
  header.appendChild(right);
  return header;
}

// ─── Home ───────────────────────────────────────────────────────
function renderHome() {
  const home = el('div', { class: 'home content-centered' });

  // Greeting
  const greeting = el('div', { class: 'home-greeting' });
  greeting.appendChild(el('h1', {}, 'Dashboard'));
  greeting.appendChild(el('p', { class: 'text-secondary' }, 'Parse repositories, explore summaries, and query your codebase.'));
  home.appendChild(greeting);

  // Quick actions
  const actions = el('div', { class: 'home-actions' });
  actions.appendChild(makeAction(Icons.plus, 'Add Repository', 'GitHub or local folder', () => openAddRepoModal()));
  actions.appendChild(makeAction(Icons.settings, 'Settings', 'LLM, embedding & retrieval config', () => navigate('settings')));
  if (state.activeRepo) {
    actions.appendChild(makeAction(Icons.search, 'Summaries', state.activeRepo.name, () => navigate('explorer')));
    actions.appendChild(makeAction(Icons.chat, 'Chat', 'Query your code', () => navigate('chat')));
  }
  home.appendChild(actions);

  // Repo list
  const repoSection = el('div', { class: 'home-section' });
  const repoHeader = el('div', { class: 'home-section-header' });
  repoHeader.appendChild(el('span', { class: 'home-section-title' }, 'Repositories'));
  repoHeader.appendChild(el('button', { class: 'btn btn-ghost', onClick: loadRepos }, '↻ Refresh'));
  repoSection.appendChild(repoHeader);

  if (state.repos.length === 0) {
    repoSection.appendChild(renderEmptyState(Icons.folder, 'No repositories yet', 'Add a GitHub repository or local folder to get started.', 'Add Repository', () => openAddRepoModal()));
  } else {
    const list = el('div', { class: 'repo-list' });
    for (const repo of state.repos) {
      list.appendChild(renderRepoCard(repo));
    }
    repoSection.appendChild(list);
  }
  home.appendChild(repoSection);

  return home;
}

function makeAction(icon, title, desc, onClick) {
  return el('div', { class: 'home-action', onClick },
    el('div', { class: 'home-action-icon', html: icon }),
    el('div', { class: 'home-action-text' },
      el('div', { class: 'home-action-title' }, title),
      el('div', { class: 'home-action-desc' }, desc),
    ),
  );
}

function renderRepoCard(repo) {
  const isActive = state.activeRepo && state.activeRepo.name === repo.name;
  return el('div', { class: 'repo-card', onClick: () => openRepo(repo) },
    el('div', { class: 'repo-card-left' },
      el('div', { class: 'repo-card-icon', html: Icons.repo }),
      el('div', { class: 'repo-card-info' },
        el('h3', {}, `${repo.owner}/${repo.name}`),
        el('div', { class: 'repo-card-meta' },
          el('span', {}, `${repo.file_count} files`),
          el('span', {}, `${repo.node_count} nodes`),
          repo.has_summaries ? el('span', { class: 'badge badge-success' }, 'Summarized') : el('span', { class: 'badge badge-default' }, 'Not summarized'),
        ),
      ),
    ),
    el('div', { class: 'repo-card-right' },
      isActive ? el('span', { class: 'badge badge-accent' }, 'Active') : null,
      el('span', { style: { color: 'var(--text-tertiary)' }, html: Icons.chevronRight }),
    ),
  );
}

// ─── Add Repo Modal ─────────────────────────────────────────────
function openAddRepoModal() {
  state.modalOpen = 'addRepo';
  render();
}

function closeModal() {
  state.modalOpen = null;
  render();
}

function renderAddRepoModal() {
  let activeTab = 'github';

  const overlay = el('div', { class: 'modal-overlay', onClick: (e) => { if (e.target === overlay) closeModal(); } });
  const modal = el('div', { class: 'modal' });

  const header = el('div', { class: 'modal-header' });
  header.appendChild(el('span', { class: 'modal-title' }, 'Add Repository'));
  header.appendChild(el('button', { class: 'modal-close', onClick: closeModal, html: Icons.x }));
  modal.appendChild(header);

  // Tabs
  const tabs = el('div', { class: 'modal-tabs' });
  const githubTab = el('button', { class: 'modal-tab active', onClick: () => switchTab('github') }, 'GitHub');
  const localTab = el('button', { class: 'modal-tab', onClick: () => switchTab('local') }, 'Local Folder');
  tabs.appendChild(githubTab);
  tabs.appendChild(localTab);
  modal.appendChild(tabs);

  // Tab content
  const content = el('div', { id: 'modal-tab-content' });
  content.appendChild(renderGitHubTab());
  modal.appendChild(content);

  function switchTab(tab) {
    activeTab = tab;
    githubTab.className = `modal-tab ${tab === 'github' ? 'active' : ''}`;
    localTab.className = `modal-tab ${tab === 'local' ? 'active' : ''}`;
    content.innerHTML = '';
    content.appendChild(tab === 'github' ? renderGitHubTab() : renderLocalTab());
  }

  overlay.appendChild(modal);
  return overlay;
}

function renderGitHubTab() {
  const frag = el('div', {});

  const inputGroup = el('div', { class: 'input-group' });
  inputGroup.appendChild(el('label', {}, 'Repository URL'));
  const input = el('input', {
    class: 'input',
    id: 'github-url-input',
    placeholder: 'https://github.com/owner/repo',
    type: 'url',
  });
  inputGroup.appendChild(input);
  frag.appendChild(inputGroup);

  const validationMsg = el('div', { id: 'repo-validation', style: { minHeight: '20px', marginTop: '8px' } });
  frag.appendChild(validationMsg);

  // Live validation
  let validateTimer;
  input.addEventListener('input', () => {
    clearTimeout(validateTimer);
    validateTimer = setTimeout(() => {
      const url = input.value.trim();
      if (!url) { validationMsg.innerHTML = ''; return; }
      const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (match) {
        validationMsg.innerHTML = `<span class="validation-msg validation-success">✓ ${match[1]}/${match[2]}</span>`;
      } else {
        validationMsg.innerHTML = '<span class="validation-msg validation-error">✕ Invalid GitHub URL</span>';
      }
    }, 300);
  });

  const actions = el('div', { class: 'modal-actions' });
  actions.appendChild(el('button', { class: 'btn btn-secondary', onClick: closeModal }, 'Cancel'));
  const cloneBtn = el('button', {
    class: 'btn btn-primary',
    onClick: () => {
      const url = input.value.trim();
      if (!url || !url.includes('github.com')) {
        toast('Please enter a valid GitHub URL', 'error');
        return;
      }
      const match = url.match(/github\.com\/([^/]+)\/([^/\s?.]+)/);
      if (match) {
        state.activeRepo = { owner: match[1], name: match[2].replace(/\.git$/, ''), path: '' };
      }
      closeModal();
      startPipeline({ cloneUrl: url });
    },
  }, 'Clone & Parse');
  actions.appendChild(cloneBtn);
  frag.appendChild(actions);

  return frag;
}

function renderLocalTab() {
  const frag = el('div', {});

  const inputGroup = el('div', { class: 'input-group' });
  inputGroup.appendChild(el('label', {}, 'Folder Path'));
  const input = el('input', {
    class: 'input',
    id: 'local-path-input',
    placeholder: 'C:\\Users\\you\\projects\\my-repo',
    type: 'text',
  });
  inputGroup.appendChild(input);
  frag.appendChild(inputGroup);

  const hint = el('p', { class: 'text-xs text-tertiary', style: { marginTop: '8px' } }, 'Enter the absolute path to a local repository folder.');
  frag.appendChild(hint);

  const actions = el('div', { class: 'modal-actions' });
  actions.appendChild(el('button', { class: 'btn btn-secondary', onClick: closeModal }, 'Cancel'));
  const openBtn = el('button', {
    class: 'btn btn-primary',
    onClick: async () => {
      const folderPath = input.value.trim();
      if (!folderPath) {
        toast('Please enter a folder path', 'error');
        return;
      }
      openBtn.disabled = true;
      openBtn.textContent = 'Opening...';
      try {
        await api('/repo/local', { method: 'POST', body: { folder_path: folderPath } });
        const parts = folderPath.replace(/\\/g, '/').split('/').filter(Boolean);
        const name = parts.pop() || 'local-repo';
        const owner = 'local';
        state.activeRepo = { owner, name, path: folderPath };
        closeModal();
        await loadRepos();
        startPipeline();
      } catch (err) {
        toast(err.message, 'error');
        openBtn.disabled = false;
        openBtn.textContent = 'Open & Parse';
      }
    },
  }, 'Open & Parse');
  actions.appendChild(openBtn);
  frag.appendChild(actions);

  return frag;
}

// ─── Pipeline ───────────────────────────────────────────────────

const PIPELINE_STAGES = [
  { id: 'clone', label: 'Cloning Repository' },
  { id: 'parse', label: 'Parsing Codebase' },
  { id: 'summary', label: 'Generating AI Summaries' },
  { id: 'embeddings', label: 'Generating Embeddings' },
  { id: 'index', label: 'Indexing Vectors' }
];

const PL_BARS = [
  { key: 'clone', label: 'Clone', fill: 'pl-progress-fill', stage: 'clone' },
  { key: 'tree', label: 'Tree Parsing', fill: 'pl-progress-fill', stage: 'parse' },
  { key: 'node', label: 'Nodes & Edges', fill: 'pl-progress-fill pl-progress-fill-accent', stage: 'parse' },
  { key: 'sum', label: 'Summaries', fill: 'pl-progress-fill pl-progress-fill-accent', stage: 'summary' },
  { key: 'embed', label: 'Embeddings', fill: 'pl-progress-fill pl-progress-fill-accent', stage: 'embeddings,index' },
];

let pipelineStartTime = null;
let pipelinePoller = null;
let pipelineData = null;
let pipelineCloneUrl = null;

async function startPipeline(opts = {}) {
  const { cloneUrl } = opts;
  pipelineCloneUrl = cloneUrl || null;
  pipelineStartTime = Date.now();
  pipelineData = {
    stage_index: 0,
    stages: cloneUrl ? ['clone', 'parse', 'summary', 'embeddings', 'index']
                     : ['parse', 'summary', 'embeddings', 'index'],
    elapsed: 0,
    error: null,
    logs: [],
    bars: { clone: 0, tree: 0, node: 0, sum: 0, embed: 0 },
    prog: null,
  };
  pipelineData.stage = pipelineData.stages[0];
  state.pipelineStage = 0;
  state.pipelineError = null;
  navigate('pipeline');

  if (pipelinePoller) clearInterval(pipelinePoller);
  pipelinePoller = setInterval(async () => {
    if (pipelineData && !pipelineData.error && pipelineData.stage !== 'done') {
      pipelineData.elapsed = Math.floor((Date.now() - pipelineStartTime) / 1000);
      let p = null;
      try { p = await api('/pipeline/progress'); } catch (e) { /* transient — ignore while work runs */ }
      if (p && p.phase && p.total > 0) {
        const pct = Math.min(100, Math.round((p.done / p.total) * 100));
        if (p.phase === 'tree') pipelineData.bars.tree = pct;
        else if (p.phase === 'summary') pipelineData.bars.sum = pct;
        else if (p.phase === 'embedding' || p.phase === 'upserting') pipelineData.bars.embed = pct;
        pipelineData.prog = p;
      }
      updatePipeline(pipelineData);
    }
  }, 1000);

  const log = (msg) => {
    pipelineData.logs = pipelineData.logs || [];
    pipelineData.logs.push(msg);
    const logContent = document.getElementById('pl-log-content');
    if (logContent) {
      logContent.appendChild(el('div', { class: 'pl-log-entry' }, msg));
      logContent.scrollTop = logContent.scrollHeight;
    }
  };

  const setStage = (i) => {
    pipelineData.stage_index = i;
    pipelineData.stage = pipelineData.stages[i];
    updatePipeline(pipelineData);
  };

  const parseOffset = cloneUrl ? 1 : 0;

  try {
    if (cloneUrl) {
      setStage(0);
      log('Cloning repository...');
      await api('/repo', { method: 'POST', body: { github_url: cloneUrl } });
      pipelineData.bars.clone = 100;
      updatePipeline(pipelineData);
    }

    setStage(parseOffset);
    log('Starting Tree Sitter parsing...');
    await api('/tree', { method: 'POST' });
    pipelineData.bars.tree = 100;
    updatePipeline(pipelineData);

    log('Extracting Nodes...');
    await api('/nodes', { method: 'POST' });
    log('Extracting Edges...');
    await api('/edges', { method: 'POST' });
    pipelineData.bars.node = 100;
    updatePipeline(pipelineData);

    setStage(parseOffset + 1);
    log('Generating AI Summaries...');
    const summaryRes = await api('/summary', { method: 'POST' });
    pipelineData.bars.sum = 100;
    pipelineData.summaries_completed = summaryRes.summaries_completed ?? 0;
    updatePipeline(pipelineData);

    setStage(parseOffset + 2);
    log('Generating Embeddings...');
    await api('/index', { method: 'POST' });
    pipelineData.bars.embed = 100;
    updatePipeline(pipelineData);

    setStage(parseOffset + 3);
    log('Indexing done. Finalizing...');

    setStage(pipelineData.stages.length - 1);
    log('Pipeline completed successfully!');

    clearInterval(pipelinePoller);
    pipelinePoller = null;

    try {
      state.structure = await api('/data/filestructure.json');
      state.nodes = await api('/data/nodes.json');
      state.edges = await api('/data/edges.json');
      await loadRepos();

      const summaryStats = countSummaries(state.structure);
      pipelineData.nodes_discovered = summaryStats.nodes;
      pipelineData.files_processed = summaryStats.files;
      if (pipelineData.summaries_completed === 0) pipelineData.summaries_completed = summaryStats.summarized;
    } catch (e) {
      console.error("Failed to load parsed data", e);
    }

    render();
    setTimeout(() => navigate('completion'), 600);
  } catch (err) {
    pipelineData.error = err.message;
    state.pipelineError = err.message;
    clearInterval(pipelinePoller);
    pipelinePoller = null;
    render();
    toast(`Pipeline failed: ${err.message}`, 'error');
  }
}

async function pollPipeline() {
  // Deprecated - using manual sequencing
}

function fmtElapsed(sec) {
  if (!sec || sec < 0) return '0s';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function renderPipeline() {
  const d = pipelineData || {};
  const root = el('div', { class: 'pipeline' });

  const top = el('div', { class: 'pipeline-top' });
  top.appendChild(el('span', { class: 'pipeline-top-title' }, 'Processing Repository'));
  const elapsed = el('span', { class: 'pipeline-top-elapsed', id: 'pl-elapsed' }, fmtElapsed(d.elapsed));
  top.appendChild(elapsed);
  root.appendChild(top);

  const errBanner = el('div', { class: 'pl-error', id: 'pl-error', style: { display: d.error ? 'flex' : 'none' } });
  errBanner.appendChild(el('span', { html: Icons.x }));
  errBanner.appendChild(el('span', { id: 'pl-error-text' }, d.error || ''));
  errBanner.appendChild(el('button', { class: 'btn btn-secondary', style: { marginLeft: 'auto' }, onClick: () => startPipeline(pipelineCloneUrl ? { cloneUrl: pipelineCloneUrl } : {}) }, 'Retry'));
  root.appendChild(errBanner);

  const body = el('div', { class: 'pipeline-body' });
  const timeline = el('div', { class: 'pl-timeline' });

  const stages = d.stages || ['parse', 'summary', 'embeddings', 'index'];
  const stageIndex = d.stage_index ?? state.pipelineStage ?? 0;
  for (let i = 0; i < stages.length; i++) {
    const spec = PIPELINE_STAGES.find((s) => s.id === stages[i]) || { id: stages[i], label: stages[i] };
    let cls = 'pending';
    if (i < stageIndex) cls = 'completed';
    else if (i === stageIndex && !d.error) cls = 'active';

    const stage = el('div', { class: `pl-stage ${cls}`, id: `pl-stage-${i}` });
    const track = el('div', { class: 'pl-stage-track' });
    const dot = el('div', { class: 'pl-stage-dot', id: `pl-dot-${i}` });
    if (cls === 'completed') dot.innerHTML = Icons.check;
    track.appendChild(dot);
    track.appendChild(el('div', { class: 'pl-stage-wire' }));
    stage.appendChild(track);

    const cnt = el('div', { class: 'pl-stage-content' });
    cnt.appendChild(el('div', { class: 'pl-stage-label' }, spec.label));

    const sub = el('div', { class: 'pl-stage-sub', id: `pl-sub-${i}` });
    if (cls === 'active') sub.textContent = 'processing...';
    cnt.appendChild(sub);
    stage.appendChild(cnt);
    timeline.appendChild(stage);
  }
  body.appendChild(timeline);

  const right = el('div', { class: 'pl-right' });
  const progressBars = el('div', { class: 'pl-progress-section' });

  const hasCloneStage = stages.indexOf('clone') !== -1;
  for (const cfg of PL_BARS) {
    if (cfg.key === 'clone' && !hasCloneStage) continue;
    const group = el('div', { class: 'pl-progress-group' });
    const header = el('div', { class: 'pl-progress-header' });
    header.appendChild(el('span', {}, cfg.label));
    header.appendChild(el('span', { id: `pb-${cfg.key}-pct` }, '0%'));
    group.appendChild(header);
    const bar = el('div', { class: 'pl-progress-track' });
    bar.appendChild(el('div', { class: cfg.fill, id: `pb-${cfg.key}-fill`, style: { width: '0%', transition: 'width 0.3s ease' } }));
    group.appendChild(bar);
    progressBars.appendChild(group);
  }

  right.appendChild(progressBars);

  const logTerminal = el('div', { class: 'pl-logs' });
  logTerminal.appendChild(el('div', { class: 'pl-logs-title' }, 'ACTIVITY'));
  const logContent = el('div', { class: 'pl-logs-content', id: 'pl-log-content' });
  if (d.logs) {
    for (const msg of d.logs) {
      logContent.appendChild(el('div', { class: 'pl-log-entry' }, msg));
    }
  }
  logTerminal.appendChild(logContent);
  right.appendChild(logTerminal);

  body.appendChild(right);
  root.appendChild(body);

  setTimeout(() => updatePipeline(d), 10);
  return root;
}

function updatePipeline(d) {
  if (!d) return;
  const stages = d.stages || ['parse', 'summary', 'embeddings', 'index'];
  const stageIndex = d.stage_index ?? state.pipelineStage ?? 0;
  const currentStage = d.stage || stages[stageIndex];

  const elElapsed = document.getElementById('pl-elapsed');
  if (elElapsed) elElapsed.textContent = fmtElapsed(d.elapsed);

  for (let i = 0; i < stages.length; i++) {
    const stageEl = document.getElementById(`pl-stage-${i}`);
    const dot = document.getElementById(`pl-dot-${i}`);
    const sub = document.getElementById(`pl-sub-${i}`);
    if (!stageEl || !dot || !sub) continue;

    let cls = 'pending';
    if (i < stageIndex) cls = 'completed';
    else if (i === stageIndex && !d.error) cls = 'active';

    stageEl.className = `pl-stage ${cls}`;
    dot.innerHTML = cls === 'completed' ? Icons.check : '';
    if (cls === 'active') sub.textContent = 'processing...';
    else if (cls === 'completed') sub.textContent = 'done';
    else sub.textContent = '';
  }

  const bars = d.bars || {}; // values 0..100 mapped from real backend progress
  for (const cfg of PL_BARS) {
    const pctEl = document.getElementById(`pb-${cfg.key}-pct`);
    const fillEl = document.getElementById(`pb-${cfg.key}-fill`);
    if (!pctEl || !fillEl) continue;

    const val = Math.max(0, Math.min(100, Math.round(bars[cfg.key] ?? 0)));
    pctEl.textContent = `${val}%`;
    fillEl.style.width = `${val}%`;

    const activeStages = (cfg.stage || '').split(',') || [];
    const isActive = activeStages.indexOf(currentStage) !== -1;
    fillEl.classList.toggle('pl-progress-fill-active', isActive && val === 0);
  }

  // Reflect real backend phase progress inside the matching active stage label
  const phaseToStage = { tree: 'parse', summary: 'summary', embedding: 'embeddings', upserting: 'index' };
  if (d.prog && d.prog.phase && d.prog.total > 0) {
    const progPct = Math.min(100, Math.round((d.prog.done / d.prog.total) * 100));
    const stageId = phaseToStage[d.prog.phase];
    const idx = stages.indexOf(stageId);
    if (stageId && idx !== -1 && idx === stageIndex) {
      const sub = document.getElementById(`pl-sub-${stageIndex}`);
      if (sub) sub.textContent = `${progPct}%`;
    }
  }
}

// ─── Completion ─────────────────────────────────────────────────
function renderCompletion() {
  const d = pipelineData || {};
  const comp = el('div', { class: 'completion content-centered' });

  comp.appendChild(el('div', { class: 'completion-icon' }, '\u2713'));
  comp.appendChild(el('h2', {}, 'Repository Ready'));
  comp.appendChild(el('p', {}, `${state.activeRepo?.owner}/${state.activeRepo?.name} has been fully parsed and summarized.`));

  const stats = el('div', { class: 'completion-stats' });
  const nodeCount = d.nodes_discovered || state.nodes?.nodes?.length || 0;
  const fileCount = d.files_processed || countFiles(state.structure);
  const summaryCount = d.summaries_completed || 0;
  const elapsed = d.elapsed ? fmtElapsed(d.elapsed) : (pipelineStartTime ? `${Math.round((Date.now() - pipelineStartTime) / 1000)}s` : '\u2014');

  stats.appendChild(makeStat(nodeCount, 'Code Nodes'));
  stats.appendChild(makeStat(fileCount, 'Files'));
  stats.appendChild(makeStat(summaryCount, 'Summaries'));
  stats.appendChild(makeStat(elapsed, 'Processing Time'));
  comp.appendChild(stats);

  const actions = el('div', { class: 'flex-center gap-3' });
  actions.appendChild(el('button', { class: 'btn btn-primary btn-lg', onClick: () => navigate('explorer') }, 'Explore Summaries'));
  actions.appendChild(el('button', { class: 'btn btn-secondary btn-lg', onClick: () => navigate('chat') }, 'Start Chatting'));
  comp.appendChild(actions);

  return comp;
}

function makeStat(value, label) {
  return el('div', { class: 'completion-stat' },
    el('div', { class: 'completion-stat-value' }, String(value)),
    el('div', { class: 'completion-stat-label' }, label),
  );
}

function countFiles(node) {
  if (!node) return 0;
  if (node.type === 'file') return 1;
  let count = 0;
  for (const c of (node.children || [])) count += countFiles(c);
  return count;
}

function countSummaries(node) {
  const out = { files: 0, nodes: 0, summarized: 0 };
  const stack = [node];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur) continue;
    if (cur.type === 'file') out.files += 1;
    out.nodes += (cur.node_ids || []).length;
    if (cur.summary) out.summarized += 1;
    for (const c of (cur.children || [])) stack.push(c);
  }
  return out;
}

// ─── Explorer ───────────────────────────────────────────────────
function renderExplorer() {
  const explorer = el('div', { class: 'explorer content-centered' });

  if (!state.structure) {
    explorer.appendChild(renderEmptyState(Icons.folder, 'No summaries available', 'Parse a repository first to view its summaries.', 'Add Repository', () => openAddRepoModal()));
    return explorer;
  }

  // Actions
  const actionsBar = el('div', { class: 'flex-between mb-4' });
  actionsBar.appendChild(el('span', { class: 'text-sm text-secondary' }, `${countFiles(state.structure)} files · ${countSummaries(state.structure).nodes} nodes`));
  const btns = el('div', { class: 'flex-center gap-2' });
  btns.appendChild(el('button', { class: 'btn btn-ghost', onClick: () => { state.expandedNodes.clear(); renderTreeInto(treeContainer, state.structure); } }, 'Collapse All'));
  btns.appendChild(el('button', { class: 'btn btn-ghost', onClick: () => expandAll(state.structure) }, 'Expand All'));
  actionsBar.appendChild(btns);
  explorer.appendChild(actionsBar);

  // Tree
  const treeContainer = el('div', { id: 'tree-container' });
  renderTreeInto(treeContainer, state.structure);
  explorer.appendChild(treeContainer);

  return explorer;
}

function expandAll(node) {
  if (!node) return;
  if (node.children?.length || node.node_ids?.length) state.expandedNodes.add(node.id);
  for (const c of (node.children || [])) expandAll(c);
  render();
}

function renderTreeInto(container, structure, search) {
  container.innerHTML = '';
  if (!structure) return;
  container.appendChild(renderTreeNode(structure, 0, search?.toLowerCase()));
}

function handleTreeSelection(node, event) {
  if (!node) return;

  if (event) event.stopPropagation();

  if (node.type === 'file' || node.type === 'repository') {
    state.selectedId = node.id;
    updateInspector();
    const tc = document.getElementById('tree-container');
    if (tc) renderTreeInto(tc, state.structure);
    return;
  }

  toggleNode(node.id);
}

function renderTreeNode(node, depth, search) {
  const frag = el('div', { class: depth > 0 ? 'tree-node' : '' });

  if (search && !nodeMatchesSearch(node, search)) return frag;

  const isExpanded = state.expandedNodes.has(node.id);
  const hasChildren = (node.children && node.children.length > 0);
  const isFile = node.type === 'file';
  const icon = node.type === 'repository' ? Icons.repo : node.type === 'folder' ? Icons.folder : getFileIcon(node.name);

  const isSelected = state.selectedId === node.id;
const item = el('div', { class: `tree-item ${isSelected ? 'selected' : ''}`, onClick: (event) => handleTreeSelection(node, event) });

  if (hasChildren || isFile) {
    const toggle = el('span', { class: `tree-toggle ${isExpanded ? 'expanded' : ''}`, html: Icons.chevronRight });
    item.appendChild(toggle);
  } else {
    item.appendChild(el('span', { class: 'tree-toggle' }, ' '));
  }

  item.appendChild(el('span', { class: 'tree-item-icon', html: icon }));

  const content = el('div', { class: 'tree-item-content' });
  content.appendChild(el('div', { class: 'tree-item-name' }, node.name));

  if (node.summary && !isExpanded) {
    const preview = node.summary.split('\n')[0].substring(0, 120);
    content.appendChild(el('div', { class: 'tree-item-summary' }, preview));
  }

  const meta = el('div', { class: 'tree-item-meta' });
  if (node.type === 'file' && node.node_ids && node.node_ids.length > 0) {
    meta.appendChild(el('span', { class: 'badge badge-default' }, `${node.node_ids.length} nodes`));
  }
  if (node.children?.length) {
    meta.appendChild(el('span', { class: 'badge badge-default' }, `${node.children.length} folders`));
  }
  content.appendChild(meta);
  item.appendChild(content);
  frag.appendChild(item);

  // Expanded content
  if (isExpanded) {
    // Show full summary as a collapsible tree node
    if (node.summary) {
      const summaryItem = el('div', { class: 'tree-node' });
      const isSummaryExpanded = state.expandedNodes.has(node.id + '_summary');
      
      const si = el('div', { class: 'tree-item', onClick: (e) => { e.stopPropagation(); toggleNode(node.id + '_summary'); } });
      const toggle = el('span', { class: `tree-toggle ${isSummaryExpanded ? 'expanded' : ''}`, html: Icons.chevronRight });
      si.appendChild(toggle);
      si.appendChild(el('span', { class: 'tree-item-icon', style: { color: 'var(--accent)' }, html: Icons.info }));
      
      const sc = el('div', { class: 'tree-item-content' });
      sc.appendChild(el('div', { class: 'tree-item-name' }, 'Full Summary'));
      si.appendChild(sc);
      summaryItem.appendChild(si);
      
      if (isSummaryExpanded) {
        const detail = el('div', { class: 'summary-detail' });
        const textContainer = el('div', { class: 'summary-detail-text' });
        textContainer.textContent = node.summary;
        detail.appendChild(textContainer);
        summaryItem.appendChild(detail);
      }
      frag.appendChild(summaryItem);
    }

    // Show children
    if (hasChildren) {
      for (const child of node.children) {
        frag.appendChild(renderTreeNode(child, depth + 1, search));
      }
    }

    // Removed syntax nodes rendering inside files
  }

  return frag;
}

function toggleNode(id) {
  if (state.expandedNodes.has(id)) state.expandedNodes.delete(id);
  else state.expandedNodes.add(id);
  render();
}

function nodeMatchesSearch(node, search) {
  if (!search) return true;
  if (node.name?.toLowerCase().includes(search)) return true;
  if (node.summary?.toLowerCase().includes(search)) return true;
  if (node.children) return node.children.some(c => nodeMatchesSearch(c, search));
  if (node.nodes) return node.nodes.some(n => (n.title || '').toLowerCase().includes(search) || (n.summary || '').toLowerCase().includes(search));
  return false;
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard', 'success'));
}

// ─── Chat ───────────────────────────────────────────────────────
function renderChat() {
  const chat = el('div', { class: 'chat' });

  if (!state.activeRepo) {
    chat.appendChild(renderEmptyState(Icons.chat, 'No repository selected', 'Add and parse a repository first to start chatting.', 'Add Repository', () => openAddRepoModal()));
    return chat;
  }

  // Messages
  const messagesDiv = el('div', { class: 'chat-messages', id: 'chat-messages' });

  if (state.chatMessages.length === 0) {
    const empty = el('div', { class: 'chat-empty' });
    empty.appendChild(el('h3', {}, 'Ask about your code'));
    empty.appendChild(el('p', {}, `Query ${state.activeRepo.name} using natural language. Ask about functions, architecture, or how things work.`));

    const suggestions = el('div', { class: 'flex-center gap-2', style: { flexWrap: 'wrap', marginTop: '16px' } });
    const prompts = [
      'Explain the main entry point',
      'What does this project do?',
      'Find the database logic',
    ];
    for (const p of prompts) {
      suggestions.appendChild(el('button', { class: 'btn btn-secondary', onClick: () => sendChat(p) }, p));
    }
    empty.appendChild(suggestions);
    messagesDiv.appendChild(empty);
  } else {
    for (const msg of state.chatMessages) {
      messagesDiv.appendChild(renderChatMessage(msg));
    }
  }
  chat.appendChild(messagesDiv);

  // Input
  const inputArea = el('div', { class: 'chat-input-area' });

  const toolbar = el('div', { class: 'chat-toolbar' });
  toolbar.appendChild(el('button', {
    class: 'deep-think-toggle' + (state.deepThink ? ' active' : ''),
    type: 'button',
    'aria-pressed': state.deepThink ? 'true' : 'false',
    title: 'Include raw source code of the top retrieved nodes for a more grounded answer',
    onClick: () => { state.deepThink = !state.deepThink; render(); },
  },
    el('span', { class: 'deep-think-dot' }),
    el('span', {}, 'Deep Think'),
  ));
  inputArea.appendChild(toolbar);

  const inputContainer = el('div', { class: 'chat-input-container' });

  const textarea = el('textarea', {
    id: 'chat-input',
    placeholder: 'Ask about your repository...',
    rows: '1',
  });

  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChat(textarea.value.trim());
    }
  });

  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  });

  const sendBtn = el('button', {
    class: 'chat-send-btn',
    id: 'chat-send-btn',
    type: 'button',
    title: 'Send',
    'aria-label': 'Send',
    html: Icons.send,
    onClick: () => sendChat(textarea.value.trim()),
  });
  const updateSend = () => {
    const loading = !!state.chatSending;
    sendBtn.disabled = !textarea.value.trim() || loading;
    sendBtn.classList.toggle('loading', loading);
    sendBtn.innerHTML = loading ? '<span class="spinner"></span>' : Icons.send;
  };
  updateSend();
  textarea.addEventListener('input', updateSend);

  inputContainer.appendChild(textarea);
  inputContainer.appendChild(sendBtn);
  inputArea.appendChild(inputContainer);
  chat.appendChild(inputArea);

  // Scroll to bottom
  requestAnimationFrame(() => {
    const msgs = document.getElementById('chat-messages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  });

  return chat;
}

function renderChatMessage(msg) {
  const wrapper = el('div', { class: `chat-message chat-message-${msg.role}` });
  const bubble = el('div', { class: 'chat-bubble' });

  const refs = msg.references || [];
  const refsById = {};
  for (const ref of refs) {
    if (ref && ref.id) refsById[ref.id] = ref;
  }

  // Render the LLM markdown output with clickable node citations
  bubble.innerHTML = renderMarkdown(msg.content, refsById);
  for (const cit of $$('.chat-citation', bubble)) {
    cit.addEventListener('click', (e) => {
      e.stopPropagation();
      openNodeRef(refsById[cit.dataset.nodeId] || { id: cit.dataset.nodeId });
    });
  }

  if (refs.length > 0) {
    const refsEl = el('div', { class: 'chat-references' });
    for (const ref of refs) {
      const pathParts = (ref.path || '').replace(/\\/g, '/').split('/');
      const filename = pathParts.pop() || ref.title;
      refsEl.appendChild(el('span', {
        class: 'chat-reference',
        title: ref.path,
        onClick: () => openNodeRef(ref),
      }, `${ref.title || filename}:${ref.start_line || ''}`));
    }
    bubble.appendChild(refsEl);
  }

  wrapper.appendChild(bubble);
  return wrapper;
}

// ─── Markdown rendering for chat answers ────────────────────────
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Node references for the message currently being rendered, so the citation
// tokenizer can resolve node ids against the backend-provided references.
let activeChatRefs = null;

const citationExtension = {
  name: 'citation',
  level: 'inline',
  start(src) { return src.indexOf('['); },
  tokenizer(src) {
    const match = /^\[([A-Za-z0-9_-]+)\](?!\()/.exec(src);
    if (!match) return undefined;
    const id = match[1];
    if (!activeChatRefs || !activeChatRefs[id]) return undefined;
    return { type: 'citation', raw: match[0], id };
  },
  renderer(token) {
    return `<span class="chat-citation" data-node-id="${token.id}" title="Open node ${token.id}">${token.id}</span>`;
  },
};

function safeHref(href) {
  if (!href) return '';
  if (/^(https?:|mailto:)/i.test(href)) return href;
  if (href.startsWith('#') || href.startsWith('/')) return href;
  return '';
}

function renderCodeBlock(codeText, langRaw) {
  let code = codeText || '';
  if (code.length > 1 && code.endsWith('\n')) code = code.slice(0, -1);
  const lang = (langRaw || '').trim().toLowerCase().split(/\s+/)[0];
  let body;
  try {
    if (window.hljs) {
      if (lang && hljs.getLanguage(lang)) {
        body = hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
      } else {
        body = hljs.highlightAuto(code).value;
      }
    }
  } catch (err) { /* degrade to plain escaped code below */ }
  if (!body) body = escapeHtml(code);
  const langLabel = lang ? `<span class="code-lang-badge">${escapeHtml(lang)}</span>` : '';
  const codeClass = lang ? ` class="hljs language-${escapeHtml(lang)}"` : '';
  return `<div class="code-block">` +
    (lang ? `<div class="code-block-bar">${langLabel}</div>` : '') +
    `<pre class="code-block-pre"><code${codeClass}>${body}</code></pre>` +
    `</div>`;
}

let markdownReady = false;
function initMarkdown() {
  if (markdownReady || !window.marked) return;
  try {
    window.marked.use({
      gfm: true,
      breaks: true,
      extensions: [citationExtension],
      renderer: {
        // Never let an LLM answer inject raw HTML into the application UI.
        html() { return ''; },
        link(href, title, text) {
          const safe = safeHref(href || '');
          if (!safe) return text || '';
          const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
          return `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener noreferrer"${titleAttr}>${text || ''}</a>`;
        },
        image() { return ''; },
        code(code, lang) { return renderCodeBlock(code, lang); },
      },
    });
    markdownReady = true;
  } catch (err) {
    console.error('Failed to initialize Markdown renderer', err);
  }
}

function renderMarkdown(text, refsById) {
  if (!text) return '';
  initMarkdown();
  activeChatRefs = refsById || {};
  if (markdownReady) {
    try { return window.marked.parse(text); }
    catch (err) { console.error('Markdown render failed', err); }
  }
  // Fallback without the library: safely escape and preserve line breaks.
  return `<p>${String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</p>`;
}

function openNodeRef(ref) {
  if (!ref || !ref.id) return;
  console.log("test")
  openCodePanel({
    id: ref.id,
    title: ref.title || ref.id,
    node_type: ref.node_type || ref.kind || 'node',
    path: ref.path || '',
    language: ref.language || '',
    start_line: ref.start_line || 1,
    end_line: ref.end_line != null ? ref.end_line : (ref.start_line || 1),
  });
}

async function sendChat(query) {
  if (!query || !state.activeRepo) return;
  state.chatSending = true;

  const textarea = document.getElementById('chat-input');
  if (textarea) { textarea.value = ''; textarea.style.height = 'auto'; }

  state.chatMessages.push({ role: 'user', content: query });
  render();

  // Add typing indicator
  const msgs = document.getElementById('chat-messages');
  if (msgs) {
    const typing = el('div', { class: 'chat-message chat-message-assistant', id: 'typing-indicator' });
    const bubble = el('div', { class: 'chat-bubble' });
    const dots = el('div', { class: 'chat-typing' },
      el('div', { class: 'chat-typing-dot' }),
      el('div', { class: 'chat-typing-dot' }),
      el('div', { class: 'chat-typing-dot' }),
    );
    bubble.appendChild(dots);
    typing.appendChild(bubble);
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;
  }

  try {
    const res = await api('/ask', {
      method: 'POST',
      body: {
        query,
        repo_owner: state.activeRepo.owner,
        repo_name: state.activeRepo.name,
        deep: !!state.deepThink,
      },
    });

    state.chatMessages.push({
      role: 'assistant',
      content: res.answer,
      references: res.citations,
    });
  } catch (err) {
    state.chatMessages.push({ role: 'assistant', content: `Error: ${err.message}` });
    toast(err.message, 'error');
  }

  state.chatSending = false;
  render();
}

// ─── Settings ───────────────────────────────────────────────────
function renderSettings() {
  const settings = el('div', { class: 'settings content-centered' });

  // LLM & Retrieval
  const aiSection = el('div', { class: 'settings-section' });
  aiSection.appendChild(el('div', { class: 'settings-section-title' }, 'AI Configuration'));

  aiSection.appendChild(makeSettingsRow('LLM Provider', 'Google Gemini via Google AI API',
    el('span', { class: 'badge badge-accent' }, state.config?.provider || 'Gemini'),
  ));

  aiSection.appendChild(makeSettingsRow('LLM Model', state.config?.model || 'gemini-3.1-flash-lite',
    el('span', { class: 'text-sm font-mono' }, state.config?.model || 'gemini-3.1-flash-lite'),
  ));

  aiSection.appendChild(makeSettingsRow('Embedding Model', 'Local sentence-transformers (CPU)',
    el('span', { class: 'text-sm font-mono' }, state.config?.embedding_model || 'Alibaba-NLP/gte-modernbert-base'),
  ));

  aiSection.appendChild(makeSettingsRow('Vector Database', 'Qdrant (embedded local)',
    el('span', { class: 'text-sm font-mono' }, state.config?.vector_db || 'Qdrant (embedded local)'),
  ));
  
  aiSection.appendChild(makeSettingsRow('API Key', state.config?.api_key_set ? 'Configured' : 'Not set',
    el('div', { class: 'flex-center gap-2' },
      el('span', { class: state.config?.api_key_set ? 'badge badge-success' : 'badge badge-error' }, state.config?.api_key_set ? `${state.config.api_key_preview}` : 'Missing'),
      el('button', { class: 'btn btn-ghost', onClick: () => navigate('setup-cloud') }, 'Change'),
    ),
  ));
  settings.appendChild(aiSection);

  // Data
  const dataSection = el('div', { class: 'settings-section' });
  dataSection.appendChild(el('div', { class: 'settings-section-title' }, 'Data'));
  dataSection.appendChild(makeSettingsRow('Parsed Repositories', `${state.repos.length} repos`,
    el('button', { class: 'btn btn-ghost', onClick: loadRepos }, '↻ Refresh'),
  ));
  dataSection.appendChild(makeSettingsRow('Storage Location', 'out/', el('span', { class: 'font-mono text-sm' }, 'out/')));
  settings.appendChild(dataSection);

  // About
  const aboutSection = el('div', { class: 'settings-section' });
  aboutSection.appendChild(el('div', { class: 'settings-section-title' }, 'About'));
  aboutSection.appendChild(makeSettingsRow('RepoLens', 'v0.2.0', el('span', { class: 'text-sm text-secondary' }, 'v0.2.0')));
  aboutSection.appendChild(makeSettingsRow('Backend', 'FastAPI + Uvicorn', el('span', { class: 'text-sm text-secondary' }, 'FastAPI')));
  settings.appendChild(aboutSection);

  return settings;
}

function makeSettingsRow(label, desc, rightEl) {
  return el('div', { class: 'settings-row' },
    el('div', { class: 'settings-row-left' },
      el('div', { class: 'settings-row-label' }, label),
      el('div', { class: 'settings-row-desc' }, desc),
    ),
    el('div', { class: 'settings-row-right' }, rightEl),
  );
}

// ─── Global Search ──────────────────────────────────────────────
// ─── Spotlight Search & Code Navigation ─────────────────────────
function displayPath(p) {
  if (!p) return '';
  const norm = (s) => String(s || '').replace(/\\/g, '/').replace(/\/+$/, '');
  const p2 = norm(p);
  for (const base of [state.activeRepo && state.activeRepo.path, state.structure && state.structure.path]) {
    if (base) {
      const b = norm(base);
      if (b && p2.startsWith(b + '/')) return p2.slice(b.length + 1);
    }
  }
  const m = p2.match(/\/out\/repo\/[^/]+\/[^/]+\/(.+)$/);
  if (m) return m[1];
  return p2;
}
function detect_file_or_folder(node_id){
  
  
}
function displayNodeTypeLabel(nodeType) {
  const t = (nodeType || '');
  return t.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function getNodeTypeMeta(nodeType) {
  const t = (nodeType || '').toLowerCase();
  if (/(function_definition|function_declaration|method_definition|method_declaration|arrow_function|generator_function|^function$|^method$)/.test(t)) {
    return { icon: Icons.func, label: 'Function' };
  }
  if (/(class_definition|class_declaration|class_specifier|^class$)/.test(t)) {
    return { icon: Icons.braces, label: 'Class' };
  }
  if (/(interface_declaration|^interface$|protocol_declaration|trait|type_alias|typedef|row type)/.test(t)) {
    return { icon: Icons.itf, label: 'Interface' };
  }
  if (/(^file$|^module$|^repository$)/.test(t)) {
    return { icon: Icons.file, label: 'File' };
  }
  if (/(import_statement|import_from|import_declaration|using_directive|preproc_include|use_declaration)/.test(t)) {
    return { icon: Icons.arrowDown, label: 'Import' };
  }
  return { icon: Icons.generic, label: displayNodeTypeLabel(nodeType) };
}

function renderSearch() {
  const overlay = el('div', {
    class: 'search-overlay',
    onClick: (e) => { if (e.target === overlay) closeSearch(); },
  });

  const modal = el('div', { class: 'search-modal' });

  const wrapper = el('div', { class: 'search-input-wrapper' });
  wrapper.appendChild(el('span', { class: 'search-icon', html: Icons.search }));
  const input = el('input', {
    placeholder: 'Search functions, classes, files…  (f: / c: filters)',
    id: 'global-search-input',
    autocomplete: 'off',
    spellcheck: 'false',
  });
  wrapper.appendChild(input);
  wrapper.appendChild(el('kbd', {}, 'ESC'));
  modal.appendChild(wrapper);

  const results = el('div', { class: 'search-results', id: 'search-results' });

  const commands = buildSearchCommands();
  let items = [];          // { kind: 'command'|'node', ... }
  let selectedIndex = -1;
  const MAX_VISIBLE = 10;

  function renderRows() {
    results.innerHTML = '';
    if (items.length === 0) {
      selectedIndex = -1;
      results.appendChild(el('div', { class: 'search-empty' }, 'No results found'));
      return;
    }
    items.slice(0, MAX_VISIBLE).forEach((item, i) => {
      if (item.kind === 'command') {
        results.appendChild(el('div', {
          class: 'search-result' + (i === selectedIndex ? ' selected' : ''),
          onClick: () => executeCommand(item),
          onMouseEnter: () => { selectedIndex = i; highlightSelection(); },
        },
          el('span', { class: 'search-result-icon', html: item.icon }),
          el('span', { class: 'search-result-text' }, item.text),
          el('span', { class: 'search-result-hint' }, item.hint),
        ));
      } else {
        const meta = getNodeTypeMeta(item.node.node_type);
        const lines = (item.node.start_line != null && item.node.end_line != null)
          ? `Lines ${item.node.start_line}–${item.node.end_line}` : '';
        results.appendChild(el('div', {
          class: 'search-result search-result-node' + (i === selectedIndex ? ' selected' : ''),
          onClick: () => openNode(item.node),
          onMouseEnter: () => { selectedIndex = i; highlightSelection(); },
        },
          el('span', { class: 'search-result-icon', html: meta.icon }),
          el('span', { class: 'search-result-main' },
            el('span', { class: 'search-result-name', title: item.node.title }, item.node.title || item.node.id),
            el('span', { class: 'search-result-path' },
              displayPath(item.node.path),
              lines ? el('span', { class: 'search-result-lines' }, ` · ${lines}`) : null,
            ),
          ),
          el('span', { class: 'search-result-badge' }, meta.label),
        ));
      }
    });
    if (items.length > MAX_VISIBLE) {
      results.appendChild(el('div', { class: 'search-result-more' }, `+${items.length - MAX_VISIBLE} more`));
    }
  }

  function highlightSelection() {
    const rows = $$('.search-result', results);
    rows.forEach((r, i) => r.classList.toggle('selected', i === selectedIndex));
  }

  function selectRelative(delta) {
    if (items.length === 0) return;
    selectedIndex = (selectedIndex + delta + items.length) % items.length;
    highlightSelection();
    const sel = results.querySelector('.search-result.selected');
    if (sel) sel.scrollIntoView({ block: 'nearest' });
  }

  function openNode(node) {
    state.searchOpen = false;
    openCodePanel(node);
  }

  function executeCommand(cmd) {
    state.searchOpen = false;
    cmd.action();
    render();
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); selectRelative(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); selectRelative(-1); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      const idx = selectedIndex >= 0 ? selectedIndex : 0;
      const item = items[idx];
      if (!item) return;
      if (item.kind === 'command') executeCommand(item); else openNode(item.node);
    }
  });

  let searchTimeout = null;
  let requestSeq = 0;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    clearTimeout(searchTimeout);
    if (!q) {
      requestSeq++;
      items = commands;
      selectedIndex = -1;
      renderRows();
      return;
    }

    const seq = ++requestSeq;
    const local = commands.filter(c =>
      (c.text + ' ' + (c.hint || '')).toLowerCase().includes(q.toLowerCase())
    );
    items = local;
    selectedIndex = -1;
    results.innerHTML = '';
    results.appendChild(el('div', { class: 'search-loading' },
      el('span', { class: 'spinner' }),
      el('span', {}, 'Searching…'),
    ));

    searchTimeout = setTimeout(async () => {
      try {
        const res = await api('/search?query=' + encodeURIComponent(q));
        if (seq !== requestSeq) return; // stale response
        items = [
          ...local,
          ...(res.results || []).map(n => ({ kind: 'node', node: n })),
        ];
        selectedIndex = -1;
        renderRows();
      } catch (err) {
        if (seq !== requestSeq) return;
        items = [...local];
        results.innerHTML = '';
        results.appendChild(el('div', { class: 'search-empty' }, 'Search failed: ' + err.message));
      }
    }, 120);
  });

  const footer = el('div', { class: 'search-footer' });
  footer.appendChild(el('span', {}, el('kbd', {}, '↑↓'), ' navigate'));
  footer.appendChild(el('span', {}, el('kbd', {}, '↵'), ' open'));
  footer.appendChild(el('span', {}, el('kbd', {}, 'esc'), ' close'));
  modal.appendChild(results);
  modal.appendChild(footer);
  overlay.appendChild(modal);

  // Auto-focus
  requestAnimationFrame(() => {
    const el = document.getElementById('global-search-input');
    if (el) el.focus();
  });

  return overlay;
}

function buildSearchCommands() {
  const list = [
    { kind: 'command', icon: Icons.home, text: 'Home', hint: 'Dashboard', action: () => navigate('home') },
    { kind: 'command', icon: Icons.plus, text: 'Add Repository', hint: 'GitHub or local', action: () => { openAddRepoModal(); navigate('home'); } },
    { kind: 'command', icon: Icons.settings, text: 'Settings', hint: 'Configuration', action: () => navigate('settings') },
  ];
  if (state.activeRepo) {
    list.push(
      { kind: 'command', icon: Icons.search, text: 'Summaries', hint: state.activeRepo.name, action: () => navigate('explorer') },
      { kind: 'command', icon: Icons.cloud, text: 'Graph View', hint: state.activeRepo.name, action: () => navigate('graph') },
      { kind: 'command', icon: Icons.chat, text: 'Chat', hint: state.activeRepo.name, action: () => navigate('chat') },
    );
  }
  for (const r of state.repos) {
    list.push({ kind: 'command', icon: Icons.repo, text: `${r.owner}/${r.name}`, hint: 'Repository', action: () => openRepo(r) });
  }
  return list;
}

function closeSearch() {
  state.searchOpen = false;
  render();
}

// ─── Code / Details Panel ───────────────────────────────────────
function openCodePanel(node) {
  state.codePanel = { node };
  render();
}

function closeCodePanel() {
  state.codePanel = null;
  render();
}

function renderCodePanel() {
  const src = state.codePanel.node;
  const meta = getNodeTypeMeta(src.node_type);

  const overlay = el('div', {
    class: 'code-panel-overlay',
    onClick: (e) => { if (e.target === overlay) closeCodePanel(); },
  });

  const panel = el('div', { class: 'code-panel' });

  const header = el('div', { class: 'code-panel-header' },
    el('span', { class: 'code-panel-icon', html: meta.icon }),
    el('div', { class: 'code-panel-heading' },
      el('div', { class: 'code-panel-title', title: src.title }, src.title || src.id),
      el('div', { class: 'code-panel-meta' },
        el('span', { class: 'code-panel-type' }, meta.label),
        el('span', { class: 'code-panel-dot' }, '·'),
        el('span', { class: 'code-panel-path', title: src.path }, displayPath(src.path) || src.path),
        ...((src.start_line != null && src.end_line != null) ? [
          el('span', { class: 'code-panel-dot' }, '·'),
          el('span', { class: 'code-panel-lines' }, `Lines ${src.start_line}–${src.end_line}`),
        ] : []),
      ),
    ),
    el('button', { class: 'modal-close code-panel-close', onClick: closeCodePanel, html: Icons.x }),
  );

  const body = el('div', { class: 'code-panel-body', id: 'code-panel-body' });
  body.appendChild(el('div', { class: 'code-panel-loading' },
    el('span', { class: 'spinner' }),
    el('span', {}, 'Loading code…'),
  ));

  panel.appendChild(header);
  panel.appendChild(body);
  overlay.appendChild(panel);
  api('/get_code?node_id=' + encodeURIComponent(src.id))
    .then((data) => {
      const bodyEl = document.getElementById('code-panel-body');
      if (bodyEl) renderCodePanelDetails(bodyEl, data);
    })
    .catch((err) => {
      const bodyEl = document.getElementById('code-panel-body');
      if (!bodyEl) return;
      bodyEl.innerHTML = '';
      bodyEl.appendChild(el('div', { class: 'code-panel-error' },
        el('span', { html: Icons.x }),
        el('span', {}, 'Failed to load code: ',err.message),
      ));
    });

  return overlay;
}

function renderCodePanelDetails(body, data) {
  body.innerHTML = '';

  // Summary
  const summarySection = el('div', { class: 'code-section' });
  summarySection.appendChild(el('div', { class: 'code-section-title' }, 'Summary'));
  if (data.summary) {
    const s = el('div', { class: 'code-summary' });
    s.textContent = data.summary;
    summarySection.appendChild(s);
  } else {
    summarySection.appendChild(el('div', { class: 'code-summary-empty' }, 'No summary available for this node.'));
  }
  body.appendChild(summarySection);

  const imports = data.imports || [];
  const internalImports = imports.filter((imp) => imp.is_internal);
  const externalImports = imports.filter((imp) => !imp.is_internal);

  const buildImportRow = (imp, label, clickable) => {
    const row = el('div', {
      class: 'code-import' + (clickable ? ' code-import-clickable' : '') + (imp.is_internal ? ' code-import-repo' : ''),
    },
      el('span', { class: 'code-import-icon', html: Icons.arrowDown }),
      el('span', { class: 'code-import-main' },
        el('span', { class: 'code-import-title', title: imp.raw || imp.title },
          imp.is_internal ? (displayPath(imp.path) || imp.title || imp.module || imp.raw || imp.id)
                          : (imp.module || imp.title || imp.raw || imp.id)),
        (imp.imported_symbols && imp.imported_symbols.length > 0)
          ? el('span', { class: 'code-import-path' }, imp.imported_symbols.join(', '))
          : null,
      ),
      el('span', { class: 'code-import-type' }, label),
    );
    if (clickable) {
      row.title = 'Open imported file';
      row.onclick = () => openNodeRef({
        id: imp.target_file_id,
        title: imp.title || imp.module,
        node_type: 'file',
        path: imp.path || '',
        language: data.language || '',
        start_line: 1,
        end_line: null,
      });
    }
    return row;
  };

  // Repository / internal imports — shown first and prominently
  const repoSection = el('div', { class: 'code-section' });
  repoSection.appendChild(el('div', { class: 'code-section-title' }, 'Repository Imports'));
  if (internalImports.length === 0) {
    repoSection.appendChild(el('div', { class: 'code-summary-empty' }, 'No repository imports detected.'));
  } else {
    const list = el('div', { class: 'code-imports' });
    for (const imp of internalImports) {
      list.appendChild(buildImportRow(imp, imp.node_type === 'file' ? 'Repo' : 'Module', !!imp.target_file_id));
    }
    repoSection.appendChild(list);
  }
  body.appendChild(repoSection);

  // Source code
  const codeSection = el('div', { class: 'code-section' });
  const codeTitle = el('div', { class: 'code-section-title flex-between' },
    el('span', {}, 'Code'),
    data.language ? el('span', { class: 'code-lang-badge' }, data.language) : null,
  );
  codeSection.appendChild(codeTitle);
  if (data.code) {
    codeSection.appendChild(buildCodeTable(data.code, data.start_line));
  } else {
    codeSection.appendChild(el('div', { class: 'code-summary-empty' }, 'No source code available for this node.'));
  }
  body.appendChild(codeSection);

  // External / standard-library imports
  const extSection = el('div', { class: 'code-section' });
  extSection.appendChild(el('div', { class: 'code-section-title' }, 'External / Standard Library Imports'));
  if (externalImports.length === 0) {
    if (imports.length === 0) {
      extSection.appendChild(el('div', { class: 'code-summary-empty' }, 'No import / dependency edges found for this file.'));
    } else {
      extSection.appendChild(el('div', { class: 'code-summary-empty' }, 'No external imports detected.'));
    }
  } else {
    const list = el('div', { class: 'code-imports' });
    for (const imp of externalImports) {
      list.appendChild(buildImportRow(imp, 'External', false));
    }
    extSection.appendChild(list);
  }
  body.appendChild(extSection);
}

function buildCodeTable(code, startLine) {
  const scroll = el('div', { class: 'code-scroll' });
  const table = el('div', { class: 'code-table' });
  let lines = String(code || '').split('\n');
  if (lines.length > 1 && lines[lines.length - 1] === '') lines.pop();
  if (lines.length === 0) lines = [''];
  const start = (typeof startLine === 'number' && startLine >= 1) ? startLine : 1;
  lines.forEach((ln, i) => {
    const row = el('div', { class: 'code-line-row' });
    row.appendChild(el('span', { class: 'code-line-no' }, String(start + i)));
    const content = el('span', { class: 'code-line-content' });
    content.textContent = ln;
    row.appendChild(content);
    table.appendChild(row);
  });
  scroll.appendChild(table);
  return scroll;
}

// ─── Empty State ────────────────────────────────────────────────
function renderEmptyState(icon, title, desc, actionLabel, actionFn) {
  const empty = el('div', { class: 'empty-state' });
  empty.appendChild(el('div', { class: 'empty-state-icon', html: icon }));
  empty.appendChild(el('h3', {}, title));
  empty.appendChild(el('p', {}, desc));
  if (actionLabel) {
    empty.appendChild(el('button', { class: 'btn btn-primary', onClick: actionFn }, actionLabel));
  }
  return empty;
}

// ─── Data Loaders ───────────────────────────────────────────────
async function loadRepos() {
  try {
    const data = await api('/repos');
    state.repos = data.repos || [];
  } catch {
    state.repos = [];
  }
}

async function openRepo(repo) {
  state.activeRepo = { owner: repo.owner, name: repo.name, path: repo.path };

  try {
    state.structure = await api('/structure');
  } catch { state.structure = null; }
  try {
    state.nodes = await api('/nodes');
  } catch { state.nodes = null; }

  state.chatMessages = [];

  // Load conversation history
  try {
    const convs = await api(`/chats/${repo.owner}/${repo.name}`);
    if (convs.conversations?.length > 0) {
      const latest = convs.conversations[0];
      const conv = await api(`/chat/${repo.owner}/${repo.name}/${latest.id}`);
      state.chatMessages = conv.messages || [];
    }
  } catch { }

  if (state.structure) {
    navigate('explorer');
  } else {
    navigate('home');
  }
}

// ─── Keyboard Shortcuts ────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  // Ctrl+K or Cmd+K → search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    state.searchOpen = !state.searchOpen;
    render();
  }
  // Escape → close code panel / search / modal
  if (e.key === 'Escape') {
    if (state.codePanel) {
      closeCodePanel();
    } else if (state.searchOpen) {
      state.searchOpen = false;
      render();
    } else if (state.modalOpen) {
      closeModal();
    }
  }
});

// ─── Boot ───────────────────────────────────────────────────────
render();


// ─── Graph View ─────────────────────────────────────────────────
function createResizer(targetId, isLeft) {
    const MIN_PX = 200;
    const MAX_PX = 560;
    const handle = el('div', { class: 'graph-pane-resizer', title: 'Drag to resize' });
    handle.onmousedown = (e) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (!target) return;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        const startX = e.clientX;
        const startWidth = target.getBoundingClientRect().width;
        const onMouseMove = (moveEvent) => {
            const delta = isLeft
                ? (moveEvent.clientX - startX)
                : (startX - moveEvent.clientX);
            const width = Math.min(MAX_PX, Math.max(MIN_PX, startWidth + delta));
            target.style.width = width + 'px';
        };
        const onMouseUp = () => {
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    return handle;
}

function renderGraphView() {
const container = el('div', { class: 'graph-3pane-layout', style: { display: 'flex', width: '100%', height: '100%', position: 'relative' } });

if (!state.nodes || !state.nodes.nodes || state.nodes.nodes.length === 0) {
container.appendChild(renderEmptyState(Icons.cloud, 'No graph data', 'Parse a repository first to view its graph.', 'Add Repository', () => openAddRepoModal()));
return container;
}

// LEFT PANE (Tree) — floating drawer
const leftPane = el('div', { id: 'graph-left-pane', class: 'graph-left-pane' });
const lHeader = el('div', { class: 'pane-header' });
lHeader.appendChild(el('span', { class: 'pane-title' }, 'Files'));
const lClose = el('button', { class: 'btn btn-icon pane-close', html: Icons.x });
lClose.onclick = () => leftPane.classList.add('closed');
lHeader.appendChild(lClose);
leftPane.appendChild(lHeader);
const treeContainer = el('div', { id: 'tree-container', class: 'graph-tree-scroll' });
renderTreeInto(treeContainer, state.structure);
leftPane.appendChild(treeContainer);
leftPane.appendChild(createResizer('graph-left-pane', true));

// CENTER PANE (Graph)
const centerPane = el('div', { class: 'graph-center-pane', style: { flex: 1, position: 'relative', background: 'var(--bg-root)' } });

// Add Graph Filters UI
if (!state.graphFilters) {
    state.graphFilters = { Folders: true, Files: true, Classes: true, Functions: true, Methods: true, Interfaces: true, Misc: true };
}
const filterContainer = el('div', { class: 'graph-filter-container' });

Object.keys(NODE_CATEGORIES).forEach(cat => {
    const isChecked = state.graphFilters[cat];
    const catColor = NODE_CATEGORIES[cat].color;
    const pill = el('button', {
        type: 'button',
        class: 'graph-filter-pill' + (isChecked ? ' active' : ''),
        title: (isChecked ? 'Hide' : 'Show') + ' ' + cat,
        role: 'checkbox',
        'aria-checked': isChecked ? 'true' : 'false',
        onClick: () => {
            state.graphFilters[cat] = !state.graphFilters[cat];
            render(); // re-render the whole graph view
        }
    });
    pill.appendChild(el('span', { class: 'graph-filter-swatch', style: { background: catColor } }));
    pill.appendChild(el('span', { class: 'graph-filter-label' }, cat));
    filterContainer.appendChild(pill);
});
centerPane.appendChild(filterContainer);

// Legend (category colors + import edge style)
const legendBar = el('div', { class: 'graph-legend' });
for (const cat of Object.keys(NODE_CATEGORIES)) {
    const item = el('span', { class: 'graph-legend-item' });
    item.appendChild(el('span', { class: 'graph-legend-swatch', style: { background: NODE_CATEGORIES[cat].color } }));
    item.appendChild(document.createTextNode(cat));
    legendBar.appendChild(item);
}
legendBar.appendChild(el('span', { class: 'graph-legend-item graph-legend-import' },
    el('span', { class: 'graph-legend-dash' }),
    el('span', {}, 'Import'),
));
centerPane.appendChild(legendBar);

const toggleLeftBtn = el('button', { 
    class: 'btn btn-icon', 
    style: { position: 'absolute', top: '10px', left: '10px', zIndex: 20, background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '6px' },
    html: Icons.menu
});
toggleLeftBtn.onclick = () => {
    const pane = document.getElementById('graph-left-pane');
    if (pane) pane.classList.toggle('closed');
};
centerPane.appendChild(toggleLeftBtn);

const toggleRightBtn = el('button', { 
    class: 'btn btn-icon', 
    style: { position: 'absolute', top: '10px', right: '10px', zIndex: 20, background: 'var(--bg-panel)', border: '1px solid var(--border-color)', borderRadius: '6px' },
    html: Icons.info
});
toggleRightBtn.onclick = () => {
    const pane = document.getElementById('inspector-container');
    if (pane) pane.classList.toggle('closed');
};
centerPane.appendChild(toggleRightBtn);

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.id = 'd3-svg-canvas';
svg.style.width = '100%';
svg.style.height = '100%';
centerPane.appendChild(svg);

// RIGHT PANE (Inspector) — floating drawer
const rightPane = el('div', { id: 'inspector-container', class: 'graph-right-pane' });
const rHeader = el('div', { class: 'pane-header' });
rHeader.appendChild(el('span', { class: 'pane-title' }, 'Inspector'));
const rClose = el('button', { class: 'btn btn-icon pane-close', html: Icons.x });
rClose.onclick = () => rightPane.classList.add('closed');
rHeader.appendChild(rClose);
rightPane.appendChild(rHeader);
const rBody = el('div', { id: 'inspector-body', class: 'pane-body' });
rightPane.appendChild(rBody);

container.appendChild(leftPane);
container.appendChild(centerPane);
container.appendChild(rightPane);

// Initialize D3 graph on next tick
setTimeout(() => {
    initD3Graph(svg);
    updateInspector();
}, 0);

return container;
}

function selectEntity(id) {
    state.selectedId = id;
    if (state.view === 'graph') {
        updateInspector();
        highlightNodeInGraph(id);
    }
}

function updateInspector() {
    const container = document.getElementById('inspector-body');
    if (!container) return;
    container.innerHTML = '';
    
    if (!state.selectedId) {
        container.appendChild(el('div', { class: 'text-secondary text-center', style: { marginTop: '50px' } }, 'Select a node to view details'));
        return;
    }
    
    let treeTarget = null;
    let nodeTarget = null;
    
    const findInTree = (n) => {
        if (n.id === state.selectedId) return n;
        for (const c of (n.children || [])) {
            const found = findInTree(c);
            if (found) return found;
        }
        return null;
    };
    if (state.structure) {
        treeTarget = findInTree(state.structure);
    }
    if (state.nodes && state.nodes.nodes) {
        nodeTarget = state.nodes.nodes.find(n => n.id === state.selectedId);
    }
    
    if (!treeTarget && !nodeTarget) {
        container.appendChild(el('div', { class: 'text-secondary text-center', style: { marginTop: '50px' } }, 'Node not found'));
        return;
    }
    
    const target = { ...(treeTarget || {}), ...(nodeTarget || {}) };
    var nodeType = target.node_type || target.type || 'file';
    const meta = getNodeTypeMeta(nodeType);
    const title = target.title || target.name || 'Unknown';
    const pathStr = displayPath(target.path) || target.path || '';
    const hasLines = target.start_line != null;
    const linesStr = hasLines
        ? (target.end_line != null && target.end_line >= target.start_line
            ? `${target.start_line}–${target.end_line}`
            : String(target.start_line))
        : '—';

    container.appendChild(el('h3', { class: 'inspector-title', title }, title));
    
    console.log(nodeType)
    meta.label = nodeType
    const metaRow = el('div', { class: 'inspector-meta' });
    metaRow.appendChild(el('span', { class: 'badge badge-accent inspector-type' }, meta.label || displayNodeTypeLabel(nodeType)));
    if (target.language) {
        metaRow.appendChild(el('span', { class: 'badge badge-default' }, target.language));
    }
    container.appendChild(metaRow);

    const rows = el('div', { class: 'inspector-rows' });
    rows.appendChild(makeInspectorRow('Type', meta.label || displayNodeTypeLabel(nodeType)));
    if(nodeType == "repository"){
      rows.appendChild(makeInspectorRow('Location', pathStr || '—'));
    }
    else{
    rows.appendChild(makeInspectorRow('File', pathStr || '—'));
    }
    rows.appendChild(makeInspectorRow('Lines', linesStr));
    container.appendChild(rows);

    container.appendChild(el('h4', { class: 'inspector-section-title' }, 'Summary'));
    if (target.summary) {
        const s = el('div', { class: 'inspector-summary' });
        s.textContent = target.summary;
        container.appendChild(s);
    } else {
        container.appendChild(el('div', { class: 'text-sm text-tertiary' }, 'No summary available for this node.'));
    }
    api('/get_code?node_id=' + encodeURIComponent(target.id))
    .then((data) => {
      container.appendChild(el('button', {
        class: 'btn btn-secondary inspector-detail-btn',
        onClick: () => {
          console.log(target.path)
          openCodePanel({
            id: target.id,
            title,
            node_type: nodeType,
            path: target.path || '',
            language: target.language,
            start_line: hasLines ? target.start_line : 1,
            end_line: hasLines && target.end_line != null ? target.end_line : target.start_line,
        })
      }
    },
        el('span', { html: Icons.braces }),
        el('span', {}, 'View details'),
    ));
    })
    .catch((err) => {
      nodeType = "Folder"
    });
    
}

function makeInspectorRow(label, value) {
    return el('div', { class: 'inspector-row' },
        el('span', { class: 'inspector-row-label' }, label),
        el('span', { class: 'inspector-row-value', title: value }, value),
    );
}

function highlightNodeInGraph(id) {
    if (typeof d3 === 'undefined') return;
    const svg = d3.select('#d3-svg-canvas');
    if (svg.empty()) return;
    svg.selectAll('circle').attr('stroke', '#000').attr('stroke-width', 1.5);
    svg.selectAll('circle').filter(d => d.id === id).attr('stroke', 'var(--c-primary)').attr('stroke-width', 4);
    
    // Auto-pan to the selected node
    const nodeData = svg.selectAll('g.node').data().find(d => d.id === id);
    const zoomBehavior = svg.node().__zoomBehavior;
    if (nodeData && zoomBehavior && typeof nodeData.x === 'number') {
        const svgEl = svg.node();
        const cw = svgEl.clientWidth || 800;
        const ch = svgEl.clientHeight || 600;
        const currentTransform = d3.zoomTransform(svgEl);
        
        const targetX = (cw / 2) - (nodeData.x * currentTransform.k);
        const targetY = (ch / 2) - (nodeData.y * currentTransform.k);
        
        svg.transition().duration(750).call(
            zoomBehavior.transform,
            d3.zoomIdentity.translate(targetX, targetY).scale(currentTransform.k)
        );
    }
}

const NODE_CATEGORIES = {
    Folders: { color: '#E59866', keys: ['folder', 'directory'] },
    Files: { color: '#85C1E9', keys: ['file', 'module', 'repository'] },
    Classes: { color: '#48C9B0', keys: ['class_definition', 'class_declaration', 'class'] },
    Functions: { color: '#58D68D', keys: ['function_definition', 'function_declaration', 'arrow_function', 'function'] },
    Methods: { color: '#52BE80', keys: ['method_definition', 'method_declaration', 'method'] },
    Interfaces: { color: '#EB984E', keys: ['interface_declaration', 'interface', 'struct_declaration', 'type_alias_declaration'] },
    Misc: { color: '#AF7AC5', keys: [] }
};

function getNodeCategory(group) {
    for (const [catName, catData] of Object.entries(NODE_CATEGORIES)) {
        if (catName === 'Misc') continue;
        if (catData.keys.includes(group)) return catName;
    }
    return 'Misc';
}

function initD3Graph(svgEl) {
if (typeof d3 === 'undefined') return;
const width = svgEl.clientWidth || 800;
const height = svgEl.clientHeight || 600;

const svg = d3.select(svgEl);
svg.selectAll('*').remove();

const g = svg.append('g');
const zoom = d3.zoom()
  .scaleExtent([0.1, 4])
  .on('zoom', (event) => {
      g.attr('transform', event.transform);
      const scale = event.transform.k;
      const opacity = scale < 0.9 ? 0 : Math.min(1, (scale - 0.9) * 2.5);
      g.selectAll('text').style('opacity', opacity);
  });
svg.call(zoom);
svg.node().__zoomBehavior = zoom; // Store for external panning

// Initial scale
svg.call(zoom.transform, d3.zoomIdentity.scale(0.8));

const nodesMap = new Map();
const nodes = [];

const hasSummary = (n) => !!(n && n.summary && n.summary.trim().length > 0);

// Pipeline:
//   all nodes -> keep summarized nodes -> apply category filters -> visible node set
const summarizedCodeNodes = (state.nodes.nodes || []).filter(hasSummary);
summarizedCodeNodes.forEach(n => {
    const rawGroup = n.node_type || 'node';
    const cat = getNodeCategory(rawGroup);
    if (!state.graphFilters || !state.graphFilters[cat]) return;

    const nodeData = { id: n.id, title: n.title || n.node_type || 'Unknown', group: cat, radius: 8 };
    nodesMap.set(n.id, nodeData);
    nodes.push(nodeData);
});

// File/folder entries from the structure tree (only when summarized + category visible)
const addTreeNodes = (n) => {
    if (!n) return;
    const rawGroup = n.type || 'folder';
    const cat = getNodeCategory(rawGroup);
    if (state.graphFilters && state.graphFilters[cat] && hasSummary(n)) {
        const isFile = n.type === 'file';
        const nodeData = { id: n.id, title: n.name || n.id, group: cat, radius: isFile ? 10 : 14 };
        if (!nodesMap.has(n.id)) {
            nodesMap.set(n.id, nodeData);
            nodes.push(nodeData);
        }
    }
    (n.children || []).forEach(c => addTreeNodes(c));
};
if (state.structure) {
    addTreeNodes(state.structure);
}

const links = [];

// Tree hierarchy edges — only when both endpoints are visible
const linkTree = (n) => {
    if (!n) return;
    (n.children || []).forEach(c => {
        linkTree(c);
        if (nodesMap.has(n.id) && nodesMap.has(c.id)) {
            links.push({ source: n.id, target: c.id, value: 2, edgeType: 'normal' });
        }
    });
};
if (state.structure) {
    linkTree(state.structure);
}

// edges.json relationships — classify by actual metadata, only render when both endpoints visible
if (state.edges && state.edges.edges) {
    state.edges.edges.forEach(e => {
        if (nodesMap.has(e.source_file_id) && nodesMap.has(e.target_file_id)) {
            const isImport = String(e.type || '').toLowerCase() === 'import';
            links.push({
                source: e.source_file_id,
                target: e.target_file_id,
                value: 1,
                edgeType: isImport ? 'import' : 'normal',
            });
        }
    });
}

// Code node parent/child edges — only when both endpoints are visible
state.nodes.nodes.forEach(n => {
    if (n.parent_id && nodesMap.has(n.parent_id) && nodesMap.has(n.id)) {
        links.push({
            source: n.parent_id,
            target: n.id,
            value: 2,
            edgeType: 'normal',
        });
    }
});

const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

const simulation = d3.forceSimulation(nodes)
.force('link', d3.forceLink(links).id(d => d.id).distance(80).strength(0.5))
.force('charge', d3.forceManyBody().strength(-300))
.force('center', d3.forceCenter(width / 2, height / 2))
.force('collide', d3.forceCollide().radius(20).iterations(3));

const link = g.append('g')
.attr('stroke', 'rgba(255, 255, 255, 0.35)')
.attr('stroke-opacity', 0.8)
.selectAll('line')
.data(links)
.join('line')
.attr('class', d => d.edgeType === 'import' ? 'graph-link graph-link-import' : 'graph-link')
.attr('stroke-width', d => Math.max(1.5, Math.sqrt(d.value) * 1.5));

const node = g.append('g')
.selectAll('g.node')
.data(nodes)
.join('g')
.attr('class', 'node')
.call(drag(simulation))
.on('click', (event, d) => {
    selectEntity(d.id);
    const tc = document.getElementById('tree-container');
    if (tc) renderTreeInto(tc, state.structure);
});

node.append('circle')
.attr('r', d => d.radius)
.attr('fill', d => NODE_CATEGORIES[d.group]?.color || NODE_CATEGORIES.Misc.color)
.attr('stroke', '#000')
.attr('stroke-width', 1.5);

node.append('text')
.text(d => {
    const s = d.title || d.name || '';
    return s.length > 25 ? s.substring(0, 24) + '...' : s;
})
.attr('dx', d => d.radius + 5)
.attr('dy', 4)
.style('font-size', '11px')
.style('fill', 'var(--text-secondary)')
.style('pointer-events', 'none')
.style('text-shadow', '0 1px 3px rgba(0,0,0,0.8)');

node.append('title').text(d => d.title);

simulation.on('tick', () => {
link.attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);
node.attr('transform', d => `translate(${d.x},${d.y})`);
});

function drag(simulation) {
function dragstarted(event) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  event.subject.fx = event.subject.x;
  event.subject.fy = event.subject.y;
}
function dragged(event) {
  event.subject.fx = event.x;
  event.subject.fy = event.y;
}
function dragended(event) {
  if (!event.active) simulation.alphaTarget(0);
  event.subject.fx = null;
  event.subject.fy = null;
}
return d3.drag()
  .on('start', dragstarted)
  .on('drag', dragged)
  .on('end', dragended);
}

if (state.selectedId) {
    highlightNodeInGraph(state.selectedId);
}
}
