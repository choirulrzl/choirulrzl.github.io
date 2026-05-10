/* ── NAVBAR: scroll shadow ──────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── BURGER MENU ────────────────────────────────────────────── */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a, button').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── DEFAULT DATA: ABOUT ─────────────────────────────────────── */
const DEFAULT_ABOUT = {
  "heroTag": "Android Engineer · Jakarta, Indonesia",
  "heroBio": "Building thoughtful, high-performance Android applications for millions of users at <strong>Bank Mandiri</strong>. Focused on mobile banking, and point of sales app",
  "heroBadge": "Available for opportunities",
  "headingLine1": "Crafting Android apps",
  "headingLine2": "that actually matter.",
  "para1": "I'm an Android Engineer with a passion for writing clean, maintainable Kotlin code and building experiences that people genuinely enjoy using. Currently on the project of <strong>Livin' Merchant</strong> at PT Bank Mandiri.",
  "para2": "Before this, I contributed to Livin’ by Mandiri, a mobile banking application for Bank Mandiri customers. I was part of the team responsible for developing payment features such as QRIS (Quick Response Code Indonesian Standard), QRIS-TAP (NFC contactless payments), and QRIS G-to-G cross-border transactions, serving millions of users across Indonesia.",
  "para3": "Outside of work, I enjoy exploring architecture patterns, contributing to internal tooling, and staying sharp on the latest Android ecosystem updates.",
  "skills": [
    {
      "group": "Languages",
      "tags": [
        "Kotlin",
        "Java",
        "C#"
      ]
    },
    {
      "group": "Android",
      "tags": [
        "Jetpack Compose",
        "MVVM",
        "Clean Architecture",
        ".NET MAUI",
        "Native Kotlin"
      ]
    },
    {
      "group": "Tools & Other",
      "tags": [
        "Git",
        "Jira",
        "Figma",
        "Firebase",
        "CI/CD"
      ]
    }
  ]
};

/* ── DEFAULT DATA: CONTACT ───────────────────────────────────── */
const DEFAULT_CONTACT = {
  "sub": "Open to interesting opportunities, collaborations, or just a good conversation about Android development.",
  "email": "achoirul.rizal@gmail.com",
  "ctaText": "Say Hello →",
  "linkedin": "https://www.linkedin.com/in/choirulrizal/",
  "github": "https://github.com/choirulrzl",
  "telegram": ""
};

/* ── DEFAULT DATA: EXPERIENCE ────────────────────────────────── */
const DEFAULT_EXPERIENCE = [
  {
    "id": "mandiri-merchant",
    "period": "2023 — Present",
    "role": "Android Engineer",
    "company": "PT Bank Mandiri (Persero) Tbk — Livin' Merchant",
    "badge": "Full-time",
    "badgeColor": "green",
    "bullets": [
      "Contributed to production incident resolution and feature development on the POS module of Livin' Merchant, a merchant-facing mobile banking application.",
      "Led platform revamp migrating core modules from .NET MAUI to native Kotlin, improving performance and maintainability.",
      "Implemented microfrontend module structure and refactored logic layers across multiple UI components.",
      "Collaborated on sprint planning and technical documentation including RCA reports for performance optimization initiatives."
    ],
    "tags": [
      "Kotlin",
      "MVVM",
      ".NET MAUI",
      "Microfrontend"
    ]
  },
  {
    "id": "mandiri-livin",
    "period": "2022 — 2023",
    "role": "Android Engineer",
    "company": "PT Bank Mandiri (Persero) Tbk — Livin' by Mandiri",
    "badge": "Full-time",
    "badgeColor": "blue",
    "bullets": [
      "Contributed to QRIS-TAP, an NFC-based contactless payment feature used by millions of Livin' by Mandiri users.",
      "Developed QRIS G-to-G cross-border transaction flow enabling international QR payments.",
      "Built dynamic QRIS source-of-funds selection to support multiple funding accounts per transaction."
    ],
    "tags": [
      "Kotlin",
      "NFC",
      "QRIS",
      "Fintech"
    ]
  }
];

/* ── DEFAULT DATA: PROJECTS ──────────────────────────────────── */
const DEFAULT_PROJECTS = [
  {
    "id": "qris-tap",
    "icon": "💳",
    "type": "Project — Livin' by Mandiri",
    "title": "QRIS-TAP",
    "shortDesc": "NFC-based contactless payment feature integrated into Livin' by Mandiri, enabling tap-to-pay transactions at QRIS-enabled merchants across Indonesia.",
    "tags": [
      "Android",
      "NFC",
      "Kotlin",
      "Fintech",
      "Coroutines",
      "MVVM"
    ],
    "impact": [
      {
        "value": "Millions",
        "label": "Active users reached"
      },
      {
        "value": "< 3s",
        "label": "Tap-to-pay transaction time"
      }
    ],
    "whatIDid": [
      "Implemented the NFC Host Card Emulation (HCE) flow for contactless tap-to-pay, managing APDU command/response cycles across the transaction lifecycle.",
      "Built the transaction state machine handling NFC session establishment, QRIS payload generation, and merchant acknowledgment.",
      "Coordinated with the backend team on the QRIS protocol specification to ensure compliance with BI (Bank Indonesia) standards.",
      "Validated NFC reliability across a wide range of Android device models and OS versions."
    ],
    "howIBuiltIt": "Used Android's NFC HCE APIs for card emulation and handled APDU command/response cycles via a custom service. Kotlin Coroutines managed async NFC session handling without blocking the main thread. State was controlled through a ViewModel using MVVM, keeping the UI reactive and predictable. All payment logic was isolated in the domain layer following Clean Architecture principles."
  },
  {
    "id": "qris-gtog",
    "icon": "🌐",
    "type": "Project — Livin' by Mandiri",
    "title": "QRIS G-to-G Cross-Border Payments",
    "shortDesc": "Cross-border QR payment flow allowing Livin' users to transact internationally via government-to-government QRIS partnerships.",
    "tags": [
      "Android",
      "QRIS",
      "Kotlin",
      "International Payments",
      "Retrofit"
    ],
    "impact": [
      {
        "value": "G-to-G",
        "label": "Government-level bilateral payment standard"
      },
      {
        "value": "Multi-currency",
        "label": "Dynamic FX & source-of-funds selection"
      }
    ],
    "whatIDid": [
      "Built the complete cross-border payment flow within the existing QRIS module — from QR scanning and international merchant data parsing to payment confirmation and receipt.",
      "Extended the QRIS payload parser to handle international merchant formats (EMV-compliant with G-to-G extensions).",
      "Implemented a dynamic source-of-funds selector allowing users to choose between multiple accounts for each transaction.",
      "Worked alongside the payments and compliance teams to align the flow with bilateral agreement requirements."
    ],
    "howIBuiltIt": "Extended the existing QRIS module by adding an international merchant parsing layer without breaking the existing domestic flow. The source-of-funds selection was built as a reusable bottom-sheet component backed by a shared ViewModel. API calls used Retrofit with a custom interceptor for FX rate handling, and the entire flow was covered with unit tests for the parsing and calculation logic."
  },
  {
    "id": "livin-merchant",
    "icon": "🏪",
    "type": "Project — Livin' Merchant",
    "title": "Livin' Merchant POS Module",
    "shortDesc": "Feature development and platform revamp of the POS module within Livin' Merchant, migrating from .NET MAUI to native Kotlin with a new microfrontend architecture.",
    "tags": [
      "Kotlin",
      "MVVM",
      "Clean Architecture",
      "Microfrontend",
      "Hilt",
      ".NET MAUI"
    ],
    "impact": [
      {
        "value": "Native",
        "label": "Full rewrite from .NET MAUI to Kotlin"
      },
      {
        "value": "Modular",
        "label": "Microfrontend structure for independent delivery"
      }
    ],
    "whatIDid": [
      "Led the platform revamp migrating the POS module from .NET MAUI to native Kotlin — rewriting UI, business logic, and data layers.",
      "Designed and implemented a microfrontend module structure so the POS feature could be developed, tested, and deployed independently from the main app shell.",
      "Developed new features including transaction reporting, receipt flows, and printer integration.",
      "Produced technical documentation including architecture diagrams, RCA reports for production incidents, and onboarding guides for new team members."
    ],
    "howIBuiltIt": "The module was structured as a standalone Gradle feature module with its own navigation graph, exposing entry points via a feature contract interface. Hilt handled dependency injection across the module boundary. The UI was built with a mix of XML-based layouts (for legacy compatibility) and new Jetpack Compose screens. Introduced snapshot testing for critical UI states and integration tests for the payment confirmation flow."
  }
];

/* ── DEFAULT DATA: CERTS ─────────────────────────────────────── */
const DEFAULT_CERTS = [
  {
    "id": "aad",
    "icon": "🎓",
    "type": "Certification",
    "title": "Belajar Fundamental Aplikasi Android",
    "issuer": "Google / Dicoding",
    "year": "2023",
    "credentialUrl": "https://www.dicoding.com/certificates/EYX4YGKDJZDL",
    "about": "The Associate Android Developer certification is issued by Google (through Dicoding in Indonesia) and validates practical proficiency in building production-quality Android applications.",
    "skills": [
      "Activity & Fragment lifecycle management",
      "ViewModel, LiveData & StateFlow",
      "Room database & local persistence",
      "Retrofit for REST API networking",
      "Jetpack Compose UI basics",
      "Background work with WorkManager",
      "App accessibility & testing",
      "MVVM architecture pattern"
    ],
    "howApplied": "The patterns validated in this certification — especially ViewModel/LiveData state management, Room for local caching, and MVVM architecture — form the backbone of every feature I've built at Bank Mandiri."
  }
];

/* ── DATA LOADING ────────────────────────────────────────────── */
function loadExperience() {
  try {
    const s = localStorage.getItem('acr_experience');
    return s ? JSON.parse(s) : DEFAULT_EXPERIENCE;
  } catch (e) { return DEFAULT_EXPERIENCE; }
}

function loadProjects() {
  try {
    const s = localStorage.getItem('acr_projects');
    return s ? JSON.parse(s) : DEFAULT_PROJECTS;
  } catch (e) { return DEFAULT_PROJECTS; }
}

function loadCerts() {
  try {
    const s = localStorage.getItem('acr_certs');
    return s ? JSON.parse(s) : DEFAULT_CERTS;
  } catch (e) { return DEFAULT_CERTS; }
}

/* ── ABOUT & CONTACT LOADERS ────────────────────────────────── */
function loadAbout() {
  try {
    const s = localStorage.getItem('acr_about');
    return s ? { ...DEFAULT_ABOUT, ...JSON.parse(s) } : DEFAULT_ABOUT;
  } catch (e) { return DEFAULT_ABOUT; }
}

function loadContact() {
  try {
    const s = localStorage.getItem('acr_contact');
    return s ? { ...DEFAULT_CONTACT, ...JSON.parse(s) } : DEFAULT_CONTACT;
  } catch (e) { return DEFAULT_CONTACT; }
}

function applyAbout() {
  const a = loadAbout();
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const setText = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };

  setText('heroTag',   a.heroTag);
  set('heroBio',       a.heroBio);
  setText('heroBadge', a.heroBadge);
  set('aboutPara1',    a.para1);
  set('aboutPara2',    a.para2);
  set('aboutPara3',    a.para3);

  // Heading: line1 + <br/><em>line2</em>
  const heading = document.getElementById('aboutHeading');
  if (heading) heading.innerHTML = `${a.headingLine1}<br /><em>${a.headingLine2}</em>`;

  // Skills grid
  const grid = document.getElementById('skillsGrid');
  if (grid && a.skills) {
    grid.innerHTML = a.skills.map(g => `
      <div class="skills__group">
        <div class="skills__group-label">${g.group}</div>
        <div class="skills__tags">
          ${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>`).join('');
  }
}

function applyContact() {
  const c = loadContact();

  const sub = document.getElementById('contactSub');
  if (sub) sub.textContent = c.sub;

  const email = document.getElementById('contactEmail');
  if (email) {
    email.href        = `mailto:${c.email}`;
    email.textContent = c.ctaText;
  }

  const linkedin = document.getElementById('contactLinkedin');
  if (linkedin) {
    linkedin.href  = c.linkedin;
    linkedin.style.display = c.linkedin ? '' : 'none';
  }

  const github = document.getElementById('contactGithub');
  if (github) {
    github.href  = c.github;
    github.style.display = c.github ? '' : 'none';
  }

  const telegram = document.getElementById('contactTelegram');
  if (telegram) {
    telegram.href         = c.telegram || '#';
    telegram.style.display = c.telegram ? '' : 'none';
  }
}

/* ── CV MODAL ────────────────────────────────────────────────── */
let _cvUrl = 'assets/resume.pdf'; // default fallback

function loadCV() {
  try {
    const data = localStorage.getItem('acr_cv');
    if (!data) return;
    const base64 = data.split(',')[1];
    const binary = atob(base64);
    const bytes  = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    const blob = new Blob([bytes], { type: 'application/pdf' });
    _cvUrl = URL.createObjectURL(blob);
  } catch (e) { /* silently fall back to static file */ }
}

function openCvModal() {
  const backdrop       = document.getElementById('cvBackdrop');
  const frame          = document.getElementById('cvFrame');
  const downloadBtn    = document.getElementById('cvDownloadBtn');
  const fallbackDl     = document.getElementById('cvFallbackDownload');
  const fallback       = document.getElementById('cvFallback');
  if (!backdrop) return;

  // Set sources
  frame.src         = _cvUrl;
  downloadBtn.href  = _cvUrl;
  fallbackDl.href   = _cvUrl;

  // Show fallback if iframe fails (e.g. browser blocks blob in iframe)
  frame.style.display    = 'block';
  fallback.classList.remove('show');
  frame.onerror = () => {
    frame.style.display = 'none';
    fallback.classList.add('show');
  };

  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCvModal() {
  const backdrop = document.getElementById('cvBackdrop');
  const frame    = document.getElementById('cvFrame');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // Delay clearing src so the close animation plays cleanly
  setTimeout(() => { frame.src = ''; }, 300);
}

// Wire up close triggers
document.getElementById('cvModalClose').addEventListener('click', closeCvModal);
document.getElementById('cvBackdrop').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeCvModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('cvBackdrop').classList.contains('open')) {
    closeCvModal();
  }
});

/* ── EXPERIENCE RENDERING ───────────────────────────────────── */
function renderExperience() {
  const timeline   = document.getElementById('experienceTimeline');
  const experience = loadExperience();

  timeline.innerHTML = experience.map(exp => `
    <div class="timeline__item reveal">
      <div class="timeline__meta">
        <span class="timeline__date">${exp.period}</span>
      </div>
      <div class="timeline__body">
        <div class="timeline__header">
          <div>
            <h3 class="timeline__role">${exp.role}</h3>
            <div class="timeline__company">${exp.company}</div>
          </div>
          <span class="badge badge--${exp.badgeColor}">${exp.badge}</span>
        </div>
        <ul class="timeline__list">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div class="timeline__tags">
          ${exp.tags.map(t => `<span class="tag tag--sm">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  observeReveal(timeline.querySelectorAll('.reveal'));
}

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
function observeReveal(elements) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.children)
          .filter(c => c.classList.contains('reveal'));
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => obs.observe(el));
}

// Timeline is now rendered dynamically — no static observe needed here

/* ── DETAIL DRAWER ──────────────────────────────────────────── */
const drawer         = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerClose    = document.getElementById('drawerClose');
const drawerContent  = document.getElementById('drawerContent');

function renderProjectDrawer(p) {
  const tagsHTML   = p.tags.map(t => `<span class="tag tag--sm">${t}</span>`).join('');
  const impactHTML = (p.impact || []).map(i =>
    `<div class="drawer__impact-card">
      <div class="drawer__impact-value">${i.value}</div>
      <div class="drawer__impact-label">${i.label}</div>
    </div>`
  ).join('');
  const didHTML = (p.whatIDid || []).map(i => `<li>${i}</li>`).join('');

  return `
    <div class="drawer__header">
      <div class="drawer__icon">${p.icon}</div>
      <div class="drawer__meta">
        <div class="drawer__type">${p.type}</div>
        <h2 class="drawer__title">${p.title}</h2>
        <div class="drawer__tags">${tagsHTML}</div>
      </div>
    </div>
    <div class="drawer__section">
      <div class="drawer__section-label">Impact</div>
      <div class="drawer__impact-grid">${impactHTML}</div>
    </div>
    <div class="drawer__section">
      <div class="drawer__section-label">What I Did</div>
      <ul>${didHTML}</ul>
    </div>
    <div class="drawer__section">
      <div class="drawer__section-label">How I Built It</div>
      <p>${p.howIBuiltIt}</p>
    </div>`;
}

function renderCertDrawer(c) {
  const skillsHTML = (c.skills || []).map(s =>
    `<span class="drawer__cert-skill">${s}</span>`
  ).join('');
  return `
    <div class="drawer__header">
      <div class="drawer__icon">${c.icon}</div>
      <div class="drawer__meta">
        <div class="drawer__type">${c.type} · ${c.issuer} · ${c.year}</div>
        <h2 class="drawer__title">${c.title}</h2>
      </div>
    </div>
    <div class="drawer__section">
      <div class="drawer__section-label">About This Certificate</div>
      <p>${c.about}</p>
    </div>
    <div class="drawer__section">
      <div class="drawer__section-label">Skills Validated</div>
      <div class="drawer__cert-skills">${skillsHTML}</div>
    </div>
    <div class="drawer__section">
      <div class="drawer__section-label">How I Applied It</div>
      <p>${c.howApplied}</p>
    </div>`;
}

function openDrawer(html) {
  drawerContent.innerHTML = html;
  drawer.classList.add('open');
  drawerBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  drawerClose.focus();
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawerBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

drawerClose.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

/* ── CARD RENDERING ─────────────────────────────────────────── */
function renderProjectCards() {
  const grid     = document.getElementById('projectsGrid');
  const projects = loadProjects();

  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal" data-id="${p.id}">
      <div class="project-card__header">
        <div class="project-card__icon">${p.icon}</div>
      </div>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.shortDesc}</p>
      <div class="project-card__tags">
        ${p.tags.slice(0, 4).map(t => `<span class="tag tag--sm">${t}</span>`).join('')}
      </div>
      <button class="detail-btn">View Details →</button>
    </div>
  `).join('') + `
    <div class="project-card project-card--add reveal">
      <div class="project-card__add-inner">
        <span class="project-card__add-icon">+</span>
        <p>More projects coming soon</p>
      </div>
    </div>`;

  grid.querySelectorAll('.project-card[data-id]').forEach(card => {
    card.addEventListener('click', () => {
      const p = projects.find(x => x.id === card.dataset.id);
      if (p) openDrawer(renderProjectDrawer(p));
    });
  });

  observeReveal(grid.querySelectorAll('.reveal'));
}

function renderCertCards() {
  const grid  = document.getElementById('certsGrid');
  const certs = loadCerts();

  grid.innerHTML = certs.map(c => `
    <div class="cert-card reveal" data-id="${c.id}">
      <div class="cert-card__logo">${c.icon}</div>
      <div class="cert-card__body">
        <div class="cert-card__issuer">${c.issuer}</div>
        <div class="cert-card__name">${c.title}</div>
        <div class="cert-card__date">${c.year}</div>
      </div>
      <div class="cert-card__actions">
        <button class="detail-btn detail-btn--sm">View Details →</button>
        ${c.credentialUrl && c.credentialUrl !== '#'
          ? `<a href="${c.credentialUrl}" class="cert-card__link" target="_blank" rel="noopener">View ↗</a>`
          : ''}
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.cert-card[data-id]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      const c = certs.find(x => x.id === card.dataset.id);
      if (c) openDrawer(renderCertDrawer(c));
    });
  });

  observeReveal(grid.querySelectorAll('.reveal'));
}

/* ── ACTIVE NAV LINK ────────────────────────────────────────── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.navbar__links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100)
      current = section.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--c-text)' : '';
  });
}, { passive: true });

/* ── INIT ────────────────────────────────────────────────────── */
applyAbout();
applyContact();
loadCV();
renderExperience();
renderProjectCards();
renderCertCards();
