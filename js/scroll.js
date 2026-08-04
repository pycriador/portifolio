/* ============================================
   SCROLL.JS — Smooth Scroll & Scroll Utils
   ============================================ */

const ScrollManager = (() => {
  function init() {
    initSmoothScroll();
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      });
    });
  }

  return { init };
})();

ScrollManager.init();
