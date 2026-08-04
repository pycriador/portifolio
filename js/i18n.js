/* ============================================
   I18N.JS — Internationalization Engine
   ============================================ */

const I18n = (() => {
  const STORAGE_KEY = Settings.storageKeys.language;
  const cache = {};
  let currentLang = null;
  let translations = {};

  const LANG_MAP = {
    'pt-BR': 'pt',
    'pt': 'pt',
    'en': 'en',
    'es': 'es',
  };

  function detectLanguage() {
    const stored = getStored();
    if (stored && Settings.supportedLanguages.includes(stored)) return stored;

    const browserLang = navigator.language || navigator.userLanguage;
    const mapped = LANG_MAP[browserLang] || LANG_MAP[browserLang?.split('-')[0]];
    if (mapped && Settings.supportedLanguages.includes(mapped)) return mapped;

    return Settings.defaultLanguage;
  }

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function storeLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable
    }
  }

  async function loadTranslations(lang) {
    if (cache[lang]) return cache[lang];

    try {
      const response = await fetch(`i18n/${lang}.json`);
      if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
      const data = await response.json();
      cache[lang] = data;
      return data;
    } catch (err) {
      if (lang !== Settings.defaultLanguage) {
        console.warn(`Falling back to ${Settings.defaultLanguage}`, err);
        return loadTranslations(Settings.defaultLanguage);
      }
      throw err;
    }
  }

  function get(key) {
    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  }

  function getArray(key) {
    const val = get(key);
    return Array.isArray(val) ? val : [];
  }

  function applyToDOM() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = get(key);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const value = get(key);
      if (typeof value === 'string') {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const mappings = el.getAttribute('data-i18n-attr').split(';');
      mappings.forEach((mapping) => {
        const [attr, key] = mapping.split(':');
        if (attr && key) {
          const value = get(key.trim());
          if (typeof value === 'string') {
            el.setAttribute(attr.trim(), value);
          }
        }
      });
    });

    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : currentLang;
  }

  function updateLangSelector() {
    document.querySelectorAll('.lang-option').forEach((btn) => {
      const lang = btn.dataset.lang;
      btn.classList.toggle('active', lang === currentLang);
      btn.setAttribute('aria-selected', lang === currentLang ? 'true' : 'false');
      const nameSpan = btn.querySelector('span:last-child');
      if (nameSpan && Settings.languageNames[lang]) {
        nameSpan.textContent = Settings.languageNames[lang];
      }
    });

    const currentLabel = document.querySelector('.lang-current');
    if (currentLabel) {
      const cfg = Settings.languageLabels[currentLang];
      currentLabel.textContent = cfg ? `${cfg.flag} ${cfg.label}` : currentLang;
    }
  }

  function updateSEO() {
    if (!Profile) return;
    const meta = Profile.meta[currentLang] || Profile.meta.en;
    if (!meta) return;

    document.title = meta.title;

    const setMeta = (name, content, attr = 'name') => {
      const el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) el.setAttribute('content', content);
    };

    setMeta('description', meta.description);
    setMeta('keywords', meta.keywords);
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const localeMap = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
    if (ogLocale) ogLocale.setAttribute('content', localeMap[currentLang] || 'en_US');
  }

  async function setLanguage(lang) {
    if (!Settings.supportedLanguages.includes(lang)) return;
    if (lang === currentLang) return;

    document.documentElement.classList.add('i18n-fading');

    await new Promise((r) => setTimeout(r, 150));

    translations = await loadTranslations(lang);
    currentLang = lang;
    storeLanguage(lang);

    applyToDOM();
    updateLangSelector();
    updateSEO();

    if (typeof App !== 'undefined' && App.renderDynamicContent) {
      App.renderDynamicContent();
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove('i18n-fading');
      });
    });
  }

  function getCurrentLang() {
    return currentLang;
  }

  async function init() {
    currentLang = detectLanguage();
    translations = await loadTranslations(currentLang);
    applyToDOM();
    updateLangSelector();
    updateSEO();

    document.querySelectorAll('.lang-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });
  }

  return { init, setLanguage, get, getArray, getCurrentLang };
})();
