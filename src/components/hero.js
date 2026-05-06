// Hero Component
import i18n from '../i18n/i18n.js';

export const heroComponent = () => {
  const t = i18n.t.bind(i18n);
  return `
    <section id="hero" aria-label="Introduction">
      <div class="hero-content">
        <p class="hero-label" data-i18n="hero.label"></p>
        <h1 class="hero-name">
          <span class="accent-letter">J</span>uan Jose Gomez
        </h1>
        <div class="accent-line"></div>
        <p class="hero-desc" data-i18n="hero.desc"></p>
        <div class="hero-actions">
          <a href="#projects" class="hero-btn primary">
            <span data-i18n="hero.cta_projects"></span>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M5 12h14"></path><polyline points="15 9 12 12 9 15"></polyline></svg>
          </a>
          <a href="#contact" class="hero-btn secondary">
            <span data-i18n="hero.cta_contact"></span>
          </a>
        </div>
      </div>
    </section>
  `;
};

export default heroComponent;
