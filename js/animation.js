/* ============================================
   ANIMATION.JS — Intersection Observer Reveals
   ============================================ */

const AnimationManager = (() => {
  const SELECTOR = '[data-reveal]';

  function init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    });

    document.querySelectorAll(SELECTOR).forEach((el) => {
      observer.observe(el);
    });
  }

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        entry.target.removeAttribute('data-reveal');
      }
    });
  }

  function revealAll() {
    document.querySelectorAll(SELECTOR).forEach((el) => {
      el.classList.add('revealed');
      el.removeAttribute('data-reveal');
    });
  }

  return { init };
})();

AnimationManager.init();
