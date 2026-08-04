/* ============================================
   SETTINGS.JS — Global Configuration
   ============================================ */

const Settings = Object.freeze({
  defaultTheme: 'dark',
  defaultLanguage: 'pt',
  supportedLanguages: ['pt', 'en', 'es'],
  languageLabels: {
    pt: { flag: '\u{1F1E7}\u{1F1F7}', label: 'PT' },
    en: { flag: '\u{1F1FA}\u{1F1F8}', label: 'EN' },
    es: { flag: '\u{1F1EA}\u{1F1F8}', label: 'ES' },
  },
  languageNames: {
    pt: 'Portugu\u00eas',
    en: 'English',
    es: 'Espa\u00f1ol',
  },
  storageKeys: {
    theme: 'portfolio-theme',
    language: 'portfolio-lang',
  },
  siteUrl: 'https://pycriador.github.io',
});

if (typeof module !== 'undefined') module.exports = Settings;
