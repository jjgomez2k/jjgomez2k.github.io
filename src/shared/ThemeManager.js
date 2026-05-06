const THEME_KEY = 'portfolio-theme';
export const icons = { sun: null, moon: null };

export class ThemeManager {
  static _current = 'dark';
  static _initialized = false;

  static get current() {
    return this._current;
  }

  static init() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored && (stored === 'dark' || stored === 'light')) {
      this._current = stored;
    } else {
      this._current = 'dark';
    }
    document.documentElement.setAttribute('data-theme', this._current);
    icons.sun = document.querySelector('.sun-icon');
    icons.moon = document.querySelector('.moon-icon');
    this._initialized = true;
  }

  static toggle() {
    this._current = this._current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this._current);
    localStorage.setItem(THEME_KEY, this._current);
    this._updateIcons();
    return this._current;
  }

  static setTheme(theme) {
    if (theme === 'dark' || theme === 'light') {
      this._current = theme;
      document.documentElement.setAttribute('data-theme', this._current);
      localStorage.setItem(THEME_KEY, theme);
      this._updateIcons();
      return theme;
    }
    return this._current;
  }

  static _updateIcons() {
    const sun = icons.sun;
    const moon = icons.moon;
    if (!sun || !moon) return;
    if (this._current === 'dark') {
      sun.style.display = '';
      moon.style.display = 'none';
    } else {
      sun.style.display = 'none';
      moon.style.display = '';
    }
  }

  static reset() {
    this._current = 'dark';
    this._initialized = false;
    icons.sun = null;
    icons.moon = null;
  }
}
