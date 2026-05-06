import '../style.css';
import { ThemeManager } from './shared/ThemeManager.js';
import i18n from './i18n/i18n.js';
import { PortfolioApp } from './app/PortfolioApp.js';

document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();

  const app = new PortfolioApp();
  app.applyLanguage('en');
  app.render();
  app.renderSkills();
  app.renderProjects();

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const theme = ThemeManager.toggle();
      app.switchLanguage('en');
    });
  }

  const expContainer = document.getElementById('experience-container');
  if (expContainer) {
    expContainer.innerHTML = app.renderExperience();
    setTimeout(() => {
      document.querySelectorAll('.timeline-item').forEach((item, index) => {
        setTimeout(() => item.classList.add('visible'), index * 200);
      });
    }, 100);
  }

  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('achievement')) {
          entry.target.style.transitionDelay = `${(entry.target.textContent.length % 5) * 0.1}s`;
        }
      }
    });
  }, { threshold: 0.15 }).observe(document.getElementById('hero'));

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  let lastScroll = 0;
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (nav) {
      if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
    }
    lastScroll = currentScroll;
  }, { passive: true });

  i18n.applyToDocument();
});
