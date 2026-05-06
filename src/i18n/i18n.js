import en from './locales/en.js';
import es from './locales/es.js';
import pt from './locales/pt.js';
import jp from './locales/jp.js';

const translations = { en, es, pt, jp };

const i18n = {
  locale: 'en',

  init(defaultLocale = 'en') {
    this.locale = defaultLocale;
  },

  setLocale(locale) {
    if (translations[locale]) {
      this.locale = locale;
    } else {
      this.locale = 'en';
    }
  },

  t(key) {
    const value = this._getNestedValue(translations[this.locale], key) || this._getNestedValue(translations.en, key);
    if (typeof value === 'string') return value;
    return key;
  },

  applyToDocument() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.innerHTML = value;
      }
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attr = el.getAttribute('data-i18n-attr');
      const key = el.getAttribute('data-i18n');
      const value = this.t(key);
      el.setAttribute(attr, value);
    });
  },

  _getNestedValue(obj, key) {
    if (!obj || typeof key !== 'string') return undefined;
    return key.split('.').reduce((acc, part) => {
      return acc && acc[part] !== undefined ? acc[part] : undefined;
    }, obj);
  }
};

export default i18n;
