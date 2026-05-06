// Navigation Component
import i18n from '../i18n/i18n.js';

export const navComponent = () => {
  const t = i18n.t.bind(i18n);
  return `
    <header>
      <nav role="navigation" aria-label="${t('brand')}">
        <div class="nav-brand" data-i18n="brand"></div>
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span class="nav-toggle-line"></span>
          <span class="nav-toggle-line"></span>
          <span class="nav-toggle-line"></span>
        </button>
        <ul class="nav-links">
          <li><a href="#hero" data-i18n="nav.home"></a></li>
          <li><a href="#about" data-i18n="nav.about"></a></li>
          <li><a href="#experience" data-i18n="nav.experience"></a></li>
          <li><a href="#skills" data-i18n="nav.skills"></a></li>
          <li><a href="#projects" data-i18n="nav.projects"></a></li>
          <li><a href="#contact" data-i18n="nav.contact"></a></li>
        </ul>
        <div class="nav-controls">
          <button class="theme-toggle" aria-label="Toggle theme">
            <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
          <div class="lang-switcher" role="group" aria-label="Language">
            <button class="lang-btn active" data-lang="en" aria-pressed="true">EN</button>
            <button class="lang-btn" data-lang="es" aria-pressed="false">ES</button>
            <button class="lang-btn" data-lang="pt" aria-pressed="false">PT</button>
            <button class="lang-btn" data-lang="jp" aria-pressed="false">JP</button>
          </div>
        </div>
      </nav>
    </header>
  `;
};

export default navComponent;
