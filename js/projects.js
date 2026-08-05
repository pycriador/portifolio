/* ============================================
   PROJECTS.JS — Home Page Project Showcase
   ============================================ */

const Projects = (() => {
  let searchQuery = '';
  let activeCategory = 'all';
  let activeStatus = 'all';
  let activeYear = 'all';

  const categoryIcons = {
    Frontend: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    Backend: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    Cloud: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>',
    Database: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    DevOps: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    Architecture: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    AI: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>',
  };

  function t(key, fallback) {
    if (typeof I18n === 'undefined') return fallback;
    const value = I18n.get(key);
    return typeof value === 'string' && value !== key ? value : fallback;
  }

  function init() {
    bindSearch();
    bindFilters();
    renderAll();
  }

  function getCategories() {
    return [...new Set(PROJECTS.map(p => p.category))].sort();
  }

  function getStatuses() {
    return [...new Set(PROJECTS.map(p => p.status))].sort();
  }

  function getYears() {
    return [...new Set(PROJECTS.map(p => p.year))].sort((a, b) => b - a);
  }

  function getFilteredProjects() {
    return PROJECTS.filter(p => {
      const matchesSearch = !searchQuery ||
        p.title.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery) ||
        p.shortDescription.toLowerCase().includes(searchQuery) ||
        p.technologies.some(t => t.toLowerCase().includes(searchQuery)) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery));
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesStatus = activeStatus === 'all' || p.status === activeStatus;
      const matchesYear = activeYear === 'all' || String(p.year) === activeYear;
      return matchesSearch && matchesCategory && matchesStatus && matchesYear;
    });
  }

  function bindSearch() {
    const input = document.getElementById('project-search');
    if (!input) return;
    let debounce;
    input.addEventListener('input', (e) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderAll();
      }, 200);
    });
  }

  function bindFilters() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      const filterType = btn.dataset.filter;
      const filterValue = btn.dataset.value;

      if (filterType === 'category') {
        activeCategory = filterValue;
      } else if (filterType === 'status') {
        activeStatus = filterValue;
      } else if (filterType === 'year') {
        activeYear = filterValue;
      } else if (filterType === 'clear') {
        activeCategory = 'all';
        activeStatus = 'all';
        activeYear = 'all';
        searchQuery = '';
        const input = document.getElementById('project-search');
        if (input) input.value = '';
      }

      renderAll();
    });
  }

  function renderAll() {
    renderFilters();
    renderProjects();
  }

  function renderFilters() {
    const catContainer = document.getElementById('filter-categories');
    const statusContainer = document.getElementById('filter-status');
    const yearContainer = document.getElementById('filter-years');

    if (catContainer) {
      const cats = ['all', ...getCategories()];
      catContainer.innerHTML = cats.map(c =>
        `<button class="filter-btn${c === activeCategory ? ' active' : ''}" data-filter="category" data-value="${c}">${c === 'all' ? t('projects.all', 'All') : c}</button>`
      ).join('');
    }

    if (statusContainer) {
      const statuses = ['all', ...getStatuses()];
      statusContainer.innerHTML = statuses.map(s =>
        `<button class="filter-btn${s === activeStatus ? ' active' : ''}" data-filter="status" data-value="${s}">${s === 'all' ? t('projects.all', 'All') : t('projects.status.' + s, s)}</button>`
      ).join('');
    }

    if (yearContainer) {
      const years = ['all', ...getYears()];
      yearContainer.innerHTML = years.map(y =>
        `<button class="filter-btn${y === activeYear ? ' active' : ''}" data-filter="year" data-value="${y}">${y === 'all' ? t('projects.all', 'All') : y}</button>`
      ).join('');
    }
  }

  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = getFilteredProjects();

    const countEl = document.getElementById('projects-count');
    if (countEl) {
      countEl.textContent = t('projects.showingCount', `Showing ${filtered.length} of ${PROJECTS.length} projects`)
        .replace('{count}', filtered.length)
        .replace('{total}', PROJECTS.length);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="no-results__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h3 class="no-results__title">${t('projects.noResultsTitle', 'No projects found')}</h3>
          <p class="no-results__description">${t('projects.noResultsDescription', 'Try adjusting your search or filters.')}</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map((project, i) => renderCard(project, i)).join('');

    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
  }

  function renderCard(project, index) {
    const statusDotClass = project.statusType === 'warning' ? ' status__dot--warning' :
      project.statusType === 'danger' ? ' status__dot--danger' : '';
    const basePath = getBasePath();
    const href = `${basePath}projects/${project.slug}/`;
    const icon = categoryIcons[project.category] || categoryIcons.Frontend;
    const statusLabel = t('projects.status.' + project.status, project.status);

    return `
      <article class="project-card card--glass" data-reveal data-delay="${Math.min(index + 1, 6)}" onclick="window.location.href='${href}'">
        <div class="project-card__image">
          <div class="project-card__image-placeholder">${icon}</div>
          <span class="project-card__category">${project.category}</span>
        </div>
        <div class="project-card__body">
          <div class="status">
            <span class="status__dot${statusDotClass}"></span>
            ${statusLabel}
          </div>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">${project.shortDescription}</p>
          <div class="project-card__techs">
            ${project.technologies.slice(0, 5).map(t => `<span class="project-card__tech-badge">${t}</span>`).join('')}
            ${project.technologies.length > 5 ? `<span class="project-card__tech-badge">+${project.technologies.length - 5}</span>` : ''}
          </div>
          <div class="project-card__footer">
            <div class="card__tags">
              ${project.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <a href="${href}" class="project-card__link" onclick="event.stopPropagation()">
              ${t('projects.details', 'Details')}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </article>`;
  }

  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/projects/')) return '../../';
    return '';
  }

  return { init, renderAll };
})();
