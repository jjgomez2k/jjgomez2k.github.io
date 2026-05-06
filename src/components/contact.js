// Contact Component
import i18n from '../i18n/i18n.js';

export const contactComponent = () => {
  const t = i18n.t.bind(i18n);
  return `
    <section id="contact" aria-label="Contact">
      <div class="section-header">
        <span class="section-label" data-i18n="contact.title">GET IN TOUCH</span>
        <h2 class="section-title" data-i18n="contact.subtitle"></h2>
      </div>
      <div class="contact-grid">
        <a href="mailto:jjgomez2k@gmail.com" class="contact-card">
          <div class="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div class="contact-info">
            <h3>Email</h3>
            <p>jjgomez2k@gmail.com</p>
          </div>
        </a>
        <a href="https://linkedin.com/in/juan-jose-gomez-martinuzzo" target="_blank" rel="noopener noreferrer" class="contact-card">
          <div class="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </div>
          <div class="contact-info">
            <h3>LinkedIn</h3>
            <p>juan-jose-gomez-martinuzzo</p>
          </div>
        </a>
        <a href="https://github.com/jjgomez2k" target="_blank" rel="noopener noreferrer" class="contact-card">
          <div class="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </div>
          <div class="contact-info">
            <h3>GitHub</h3>
            <p>@jjgomez2k</p>
          </div>
        </a>
      </div>
    </section>
  `;
};

export default contactComponent;
