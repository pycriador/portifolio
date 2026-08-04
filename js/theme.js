/* ============================================
   THEME.JS — Dark / Light Mode
   ============================================ */

const ThemeManager = (() => {
  const STORAGE_KEY = Settings.storageKeys.theme;
  const THEME_ATTR = 'data-theme';
  const TRANSITION_CLASS = 'theme-transitioning';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute(THEME_ATTR, theme);
    persistTheme(theme);
  }

  function persistTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage unavailable
    }
  }

  function toggle() {
    const current = document.documentElement.getAttribute(THEME_ATTR);
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.classList.add(TRANSITION_CLASS);
    setTheme(next);

    setTimeout(() => {
      document.documentElement.classList.remove(TRANSITION_CLASS);
    }, 350);
  }

  function init() {
    const stored = getStoredTheme();
    const theme = stored || getSystemPreference();
    setTheme(theme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!getStoredTheme()) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggle);
    }
  }

  return { init, toggle };
})();

ThemeManager.init();
