/* ============================================
   PROJECT-PAGE.JS — Dynamic Project Page Renderer
   ============================================ */

const ProjectPage = (() => {
  const SVG = {
    github: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    monitor: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    target: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    alertTriangle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
    trendingUp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    server: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    cloud: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    plug: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6V8z"/></svg>',
    zap: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    circle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>',
    image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  };

  const ARCH_ICON_MAP = {
    Frontend: SVG.monitor,
    Backend: SVG.server,
    Database: SVG.database,
    Cloud: SVG.cloud,
    Security: SVG.shield,
    Integrations: SVG.plug,
    Scalability: SVG.zap,
  };

  const OVERVIEW_META = [
    { key: 'objective', icon: SVG.target, title: 'Objective' },
    { key: 'problem', icon: SVG.alertTriangle, title: 'Problem' },
    { key: 'solution', icon: SVG.lightbulb, title: 'Solution' },
    { key: 'results', icon: SVG.trendingUp, title: 'Results' },
  ];

  const STATUS_ICONS = {
    completed: SVG.checkCircle,
    'in-progress': SVG.clock,
    planned: SVG.circle,
  };

  function getBasePath() {
    return '../../';
  }

  function getSlug() {
    const path = window.location.pathname.replace(/\/+$/, '');
    const segments = path.split('/');
    let slug = segments[segments.length - 1];

    if (slug === '' || slug === 'index.html') {
      slug = segments[segments.length - 2];
    }

    const projectIdx = segments.indexOf('projects');
    if (projectIdx !== -1 && segments.length > projectIdx + 1) {
      slug = segments[projectIdx + 1];
    }

    return slug;
  }

  function updateSEO(project) {
    const title = `${project.title} | Project`;
    const description = project.description || project.subtitle || '';

    document.title = title;

    const setMeta = (selector, attr, content) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, content);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }

  function renderNotFound() {
    const root = document.getElementById('project-root');
    if (!root) return;

    root.innerHTML = `
      <div class="project-page">
        <div class="container">
          <div class="no-results" style="min-height: 60vh;">
            <div class="no-results__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            </div>
            <h1 class="no-results__title">Project Not Found</h1>
            <p class="no-results__description">The project you're looking for doesn't exist or has been moved.</p>
            <a href="${getBasePath()}index.html" class="btn btn--primary" style="margin-top: var(--space-6);">
              ${SVG.arrowLeft}
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function renderPage(project) {
    const root = document.getElementById('project-root');
    if (!root) return;

    const base = getBasePath();
    const html = `
      <div class="project-page">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="${base}index.html" class="breadcrumb__link">Home</a>
            <span class="breadcrumb__separator" aria-hidden="true">/</span>
            <a href="${base}index.html#projects" class="breadcrumb__link">Projects</a>
            <span class="breadcrumb__separator" aria-hidden="true">/</span>
            <span class="breadcrumb__current" aria-current="page">${project.title}</span>
          </nav>
        </div>

        <section class="project-hero">
          <div class="container">
            <div class="project-hero__inner">
              <div class="project-hero__image-wrapper">
                <div class="project-hero__image-placeholder">
                  ${SVG.monitor}
                </div>
              </div>
              <div class="project-hero__content">
                <a href="${base}index.html" class="project-hero__back">
                  ${SVG.arrowLeft} Back to Projects
                </a>
                <div class="project-hero__meta">
                  <span class="tag">${project.category || ''}</span>
                  <span class="status"><span class="status__dot${project.statusType === 'warning' ? ' status__dot--warning' : ''}"></span> ${project.status || ''}</span>
                  <span class="tag tag--secondary">${project.year || ''}</span>
                </div>
                <h1 class="project-hero__title">${project.title}</h1>
                <p class="project-hero__subtitle">${project.subtitle || ''}</p>
                <p class="project-hero__description">${project.description || ''}</p>
                <div class="project-hero__techs">
                  ${(project.technologies || []).map(t => `<span class="project-hero__tech-badge">${t}</span>`).join('')}
                </div>
                <div class="project-hero__actions">
                  <a href="${project.github || '#'}" class="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
                    ${SVG.github} GitHub
                  </a>
                  <a href="${base}index.html" class="btn btn--secondary btn--lg">
                    ${SVG.arrowRight} All Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        ${renderOverview(project)}

        ${renderTechnologies(project)}

        ${renderArchitecture(project)}

        ${renderGallery(project)}

        ${renderTimeline(project)}

        ${renderRoadmap(project)}

        ${renderChallenges(project)}

        ${renderTags(project)}

        ${renderNav(project)}

        ${renderFooter(base)}
      </div>
    `;

    root.innerHTML = html;
  }

  function renderOverview(project) {
    if (!project.overview) return '';

    const cards = OVERVIEW_META.map((meta, i) => {
      const text = project.overview[meta.key] || '';
      if (!text) return '';
      return `
        <div class="overview-card" data-reveal data-delay="${i + 1}">
          <div class="overview-card__icon">${meta.icon}</div>
          <h3 class="overview-card__title">${meta.title}</h3>
          <p class="overview-card__text">${text}</p>
        </div>
      `;
    }).filter(Boolean).join('');

    if (!cards) return '';

    return `
      <section class="project-section" data-reveal>
        <div class="container">
          <header class="project-section__header">
            <p class="project-section__label">Overview</p>
            <h2 class="project-section__title">Project Overview</h2>
          </header>
          <div class="overview-grid">
            ${cards}
          </div>
        </div>
      </section>
    `;
  }

  function renderTechnologies(project) {
    if (!project.technologies || !project.technologies.length) return '';

    const badges = project.technologies.map((tech, i) => `
      <div class="tech-badge" data-reveal data-delay="${i + 1}">
        ${SVG.monitor}
        <span>${tech}</span>
      </div>
    `).join('');

    return `
      <section class="project-section" data-reveal>
        <div class="container">
          <header class="project-section__header">
            <p class="project-section__label">Tech Stack</p>
            <h2 class="project-section__title">Technologies Used</h2>
          </header>
          <div class="tech-grid">
            ${badges}
          </div>
        </div>
      </section>
    `;
  }

  function renderArchitecture(project) {
    if (!project.architecture || !Object.keys(project.architecture).length) return '';

    const cards = Object.entries(project.architecture).map(([key, desc], i) => `
      <div class="arch-detail-card" data-reveal data-delay="${i + 1}">
        <div class="arch-detail-card__header">
          <div class="arch-detail-card__icon">
            ${ARCH_ICON_MAP[key] || SVG.monitor}
          </div>
          <h3 class="arch-detail-card__title">${key}</h3>
        </div>
        <p class="arch-detail-card__description">${desc}</p>
      </div>
    `).join('');

    return `
      <section class="project-section" data-reveal>
        <div class="container">
          <header class="project-section__header">
            <p class="project-section__label">Architecture</p>
            <h2 class="project-section__title">System Architecture</h2>
          </header>
          <div class="arch-detail-grid">
            ${cards}
          </div>
        </div>
      </section>
    `;
  }

  function renderGallery(project) {
    if (!project.gallery || !project.gallery.length) return '';

    const items = project.gallery.map((item, i) => `
      <div class="gallery-item" data-reveal data-delay="${i + 1}">
        <div class="gallery-item__placeholder">
          ${SVG.image}
          <span>${typeof item === 'string' ? item : item.alt || 'Screenshot'}</span>
        </div>
        ${typeof item === 'object' && item.type ? `<span class="gallery-item__type">${item.type}</span>` : ''}
      </div>
    `).join('');

    return `
      <section class="project-section" data-reveal>
        <div class="container">
          <header class="project-section__header">
            <p class="project-section__label">Gallery</p>
            <h2 class="project-section__title">Screenshots</h2>
          </header>
          <div class="gallery-grid">
            ${items}
          </div>
        </div>
      </section>
    `;
  }

  function renderTimeline(project) {
    if (!project.timeline || !project.timeline.length) return '';

    const items = project.timeline.map((item, i) => `
      <div class="timeline__item" data-reveal data-delay="${i + 1}">
        <div class="timeline__dot"></div>
        <div class="timeline__content">
          <span class="timeline__date">${item.date || ''}</span>
          <h3 class="timeline__title">${item.title || ''}</h3>
          <p class="timeline__description">${item.description || ''}</p>
        </div>
      </div>
    `).join('');

    return `
      <section class="project-section" data-reveal>
        <div class="container">
          <header class="project-section__header">
            <p class="project-section__label">Timeline</p>
            <h2 class="project-section__title">Development Timeline</h2>
          </header>
          <div class="timeline">
            ${items}
          </div>
        </div>
      </section>
    `;
  }

  function renderRoadmap(project) {
    if (!project.roadmap || !project.roadmap.length) return '';

    const items = project.roadmap.map((item, i) => {
      const status = item.status || 'planned';
      const statusLabel = status.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
      return `
        <div class="roadmap-item roadmap-item--${status}" data-reveal data-delay="${i + 1}">
          <div class="roadmap-item__indicator"></div>
          <span class="roadmap-item__title">${item.title || ''}</span>
          <span class="roadmap-item__status">${statusLabel}</span>
        </div>
      `;
    }).join('');

    return `
      <section class="project-section" data-reveal>
        <div class="container">
          <header class="project-section__header">
            <p class="project-section__label">Roadmap</p>
            <h2 class="project-section__title">Development Roadmap</h2>
          </header>
          <div class="roadmap-list">
            ${items}
          </div>
        </div>
      </section>
    `;
  }

  function renderChallenges(project) {
    if (!project.challenges || !project.challenges.length) return '';

    const challengeCards = project.challenges.map((item, i) => {
      const title = typeof item === 'object' ? (item.title || item.challenge || '') : `Challenge ${i + 1}`;
      const text = typeof item === 'object' ? (item.description || item.challenge || '') : item;
      return `
        <div class="challenge-card" data-reveal data-delay="${i + 1}">
          <div class="challenge-card__icon challenge-card__icon--challenge">
            ${SVG.warning}
          </div>
          <h3 class="challenge-card__title">${title}</h3>
          <p class="challenge-card__text">${text}</p>
        </div>
      `;
    }).join('');

    const solutionCards = (project.solutions || []).map((item, i) => {
      const title = typeof item === 'object' ? (item.title || item.solution || '') : `Solution ${i + 1}`;
      const text = typeof item === 'object' ? (item.description || item.solution || '') : item;
      return `
        <div class="challenge-card" data-reveal data-delay="${i + 1}">
          <div class="challenge-card__icon challenge-card__icon--solution">
            ${SVG.check}
          </div>
          <h3 class="challenge-card__title">${title}</h3>
          <p class="challenge-card__text">${text}</p>
        </div>
      `;
    }).join('');

    return `
      <section class="project-section" data-reveal>
        <div class="container">
          <header class="project-section__header">
            <p class="project-section__label">Challenges & Solutions</p>
            <h2 class="project-section__title">Overcoming Challenges</h2>
          </header>
          <div class="challenges-grid">
            ${challengeCards}
            ${solutionCards}
          </div>
        </div>
      </section>
    `;
  }

  function renderTags(project) {
    if (!project.tags || !project.tags.length) return '';

    const pills = project.tags.map(tag => `
      <span class="project-tag">${tag}</span>
    `).join('');

    return `
      <section class="project-tags-section" data-reveal>
        <div class="container">
          <div class="project-tags-list">
            ${pills}
          </div>
        </div>
      </section>
    `;
  }

  function renderNav(project) {
    if (typeof PROJECTS === 'undefined' || !PROJECTS.length) return '';

    const currentIndex = PROJECTS.findIndex(p => p.slug === project.slug);
    if (currentIndex === -1) return '';

    const total = PROJECTS.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    const prev = PROJECTS[prevIndex];
    const next = PROJECTS[nextIndex];

    const base = getBasePath();

    return `
      <nav class="project-nav" aria-label="Project navigation">
        <a href="${base}projects/${prev.slug}/index.html" class="project-nav__link">
          <span class="project-nav__label">${SVG.arrowLeft} Previous Project</span>
          <span class="project-nav__title">${prev.title}</span>
          <span class="project-nav__arrow" aria-hidden="true">&larr;</span>
        </a>
        <a href="${base}projects/${next.slug}/index.html" class="project-nav__link project-nav__link--next">
          <span class="project-nav__label">Next Project ${SVG.arrowRight}</span>
          <span class="project-nav__title">${next.title}</span>
          <span class="project-nav__arrow" aria-hidden="true">&rarr;</span>
        </a>
      </nav>
    `;
  }

  function renderFooter(base) {
    return `
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="footer__bottom">
            <p class="footer__copyright">&copy; <span>${new Date().getFullYear()}</span> Willian Rosa. All rights reserved.</p>
            <div class="footer__socials">
              <a href="https://github.com/pycriador" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                ${SVG.github}
              </a>
              <a href="mailto:py.criador@gmail.com" class="footer__social-link" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function init() {
    const slug = getSlug();

    if (typeof PROJECTS === 'undefined' || !PROJECTS.length) {
      renderNotFound();
      return;
    }

    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
      renderNotFound();
      return;
    }

    updateSEO(project);
    renderPage(project);

    if (typeof AnimationManager !== 'undefined') {
      AnimationManager.init();
    }

    if (typeof Navigation !== 'undefined') {
      Navigation.init();
    }
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', ProjectPage.init);
