// About Component
import i18n from '../i18n/i18n.js';

export const aboutComponent = () => {
  const t = i18n.t.bind(i18n);
  return `
    <section id="about" aria-label="About">
      <div class="about-content">
        <div class="about-text">
          <span class="section-label" data-i18n="about.title">ABOUT</span>
          <h2 class="section-title" data-i18n="about.subtitle"></h2>
          <p data-i18n="about.p1"></p>
          <p data-i18n="about.p2"></p>
          <p data-i18n="about.p3"></p>
        </div>
        <div class="about-stats stats-grid">
          <div class="stat-unit" data-i18n-aria-label="about.stat_yr: 5+ years">
            <h3>5+</h3>
            <span data-i18n="about.stat_yr"></span>
          </div>
          <div class="stat-unit" data-i18n-aria-label="about.stat_proj: 30+ projects">
            <h3>30+</h3>
            <span data-i18n="about.stat_proj"></span>
          </div>
          <div class="stat-unit" data-i18n-aria-label="about.stat_lang: 4 Languages">
            <h3>4</h3>
            <span data-i18n="about.stat_lang"></span>
          </div>
          <div class="stat-unit" data-i18n-aria-label="about.stat_techs: 20+ technologies">
            <h3>20+</h3>
            <span data-i18n="about.stat_techs"></span>
          </div>
        </div>
      </div>
    </section>
  `;
};

export default aboutComponent;
