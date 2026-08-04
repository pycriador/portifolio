/* ============================================
   NAVIGATION.JS — Header & Mobile Menu
   ============================================ */

const Navigation = (() => {
  const selectors = {
    nav: '.nav',
    hamburger: '.hamburger',
    backdrop: '.nav__backdrop',
    links: '.nav__link',
    mobileLinks: '.nav__links a',
  };

  let navEl = null;
  let hamburger = null;
  let backdrop = null;
  let isOpen = false;

  function init() {
    navEl = document.querySelector(selectors.nav);
    hamburger = document.querySelector(selectors.hamburger);
    backdrop = document.querySelector(selectors.backdrop);

    if (hamburger) {
      hamburger.addEventListener('click', toggleMenu);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeMenu);
    }

    document.querySelectorAll(selectors.mobileLinks).forEach((link) => {
      link.addEventListener('click', () => {
        if (isOpen) closeMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    });

    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    initActiveLinks();
    initLangSelector();
    initProjectDropdown();
  }

  function toggleMenu() {
    isOpen ? closeMenu() : openMenu();
  }

  function openMenu() {
    isOpen = true;
    hamburger?.classList.add('active');
    hamburger?.setAttribute('aria-expanded', 'true');
    backdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    isOpen = false;
    hamburger?.classList.remove('active');
    hamburger?.setAttribute('aria-expanded', 'false');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateScrollState() {
    if (!navEl) return;
    navEl.classList.toggle('scrolled', window.scrollY > 50);
  }

  function initActiveLinks() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.getAttribute('id'));
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
  }

  function setActiveLink(sectionId) {
    document.querySelectorAll(selectors.links).forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
    });
  }

  function initLangSelector() {
    const selector = document.querySelector('.lang-selector');
    const currentBtn = document.querySelector('.lang-current');

    if (!selector || !currentBtn) return;

    currentBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = selector.classList.contains('open');
      selector.classList.toggle('open');
      currentBtn.setAttribute('aria-expanded', !wasOpen);
    });

    document.addEventListener('click', (e) => {
      if (!selector.contains(e.target)) {
        selector.classList.remove('open');
        currentBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function getBasePath() {
    const path = window.location.pathname;
    return path.includes('/projects/') ? '../../' : '';
  }

  function populateProjectDropdown() {
    const container = document.querySelector('[data-nav-dropdown]');
    if (!container) return;

    const basePath = getBasePath();

    if (typeof PROJECTS === 'undefined' || !PROJECTS.length) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = PROJECTS.map((p) => `
      <li class="nav__dropdown-item">
        <a class="nav__dropdown-link" href="${basePath}projects/${p.slug}/">
          <span class="nav__dropdown-title">${p.title}</span>
          <span class="nav__dropdown-cat">${p.category}</span>
        </a>
      </li>`).join('');
  }

  function initProjectDropdown() {
    populateProjectDropdown();

    document.querySelectorAll('.nav__item--dropdown').forEach((item) => {
      const link = item.querySelector('.nav__link--dropdown');
      if (!link) return;

      link.addEventListener('click', (e) => {
        const isOpen = item.classList.contains('open');
        const hoverOpened = window.matchMedia('(hover: hover)').matches && item.matches(':hover');

        if (!isOpen && !hoverOpened) {
          e.preventDefault();
          item.classList.add('open');
        }
      });

      item.addEventListener('mouseleave', () => item.classList.remove('open'));

      document.addEventListener('click', (e) => {
        if (!item.contains(e.target)) item.classList.remove('open');
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') item.classList.remove('open');
      });
    });
  }

  return { init };
})();
