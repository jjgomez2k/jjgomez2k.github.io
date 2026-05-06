import i18n from '../i18n/i18n.js';

export class PortfolioApp {
  constructor() {
    i18n.init('en');
    this.currentProjects = null;
    this.#bindEvents();
  }

  applyLanguage(locale) {
    i18n.setLocale(locale);
    i18n.applyToDocument();
    const langButtons = document.querySelectorAll('[data-lang]');
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === locale);
      btn.setAttribute('aria-pressed', locale === btn.getAttribute('data-lang'));
    });
    if (this.currentProjects) {
      this.renderProjects(this.currentProjects);
    }
  }

  switchLanguage(locale) {
    this.applyLanguage(locale);
    const button = document.querySelector(`[data-lang="${locale}"]`);
    if (button) {
      button.tabIndex = 0;
      button.focus();
    }
  }

  #bindEvents() {
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.applyLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    skillsContainer.innerHTML = this.#skillsHtml();
    setTimeout(() => {
      const skillFills = skillsContainer.querySelectorAll('.skill-fill');
      skillFills.forEach(fill => fill.style.width = getComputedStyle(fill).width);
    }, 0);
    setTimeout(() => {
      const categories = document.querySelectorAll('.skill-category');
      categories.forEach(cat => cat.classList.add('visible'));
    }, 100);
  }

  #skillsHtml() {
    const t = i18n.t.bind(i18n);
    return `
      <div class="skill-category" tabindex="0" aria-label="${t('skills.cat1_name')}">
        <h3>${t('skills.cat1_name')}</h3>
        <div class="skill-item">
          <span>${t('skills.cat1_skill1_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 95%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat1_skill2_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 90%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat1_skill3_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 85%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat1_skill4_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 80%"></div></div>
        </div>
      </div>
      <div class="skill-category" tabindex="0" aria-label="${t('skills.cat2_name')}">
        <h3>${t('skills.cat2_name')}</h3>
        <div class="skill-item">
          <span>${t('skills.cat2_skill1_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 95%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat2_skill2_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 90%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat2_skill3_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 75%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat2_skill4_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 95%"></div></div>
        </div>
      </div>
      <div class="skill-category" tabindex="0" aria-label="${t('skills.cat3_name')}">
        <h3>${t('skills.cat3_name')}</h3>
        <div class="skill-item">
          <span>${t('skills.cat3_skill1_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 90%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat3_skill2_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 85%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat3_skill3_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 80%"></div></div>
        </div>
        <div class="skill-item">
          <span>${t('skills.cat3_skill4_name')}</span>
          <div class="skill-track"><div class="skill-fill" style="--level: 85%"></div></div>
        </div>
      </div>
    `;
  }

  renderProjects(projects) {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    this.currentProjects = projects;
    container.innerHTML = projects.map(project => this.#projectCardHtml(project)).join('');
    setTimeout(() => {
      document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        card.classList.add('visible');
      });
    }, 100);
  }

  #projectCardHtml(project) {
    const t = i18n.t.bind(i18n);
    const title = t(project.titleKey);
    const desc = t(project.descKey);
    const tagsHtml = project.tags.map(tKey => {
      const tKeySplit = tKey.split('.');
      const projectName = tKeySplit[0];
      const skillName = tKeySplit[1];
      const tagValue = i18n.t(`${projectName}.${skillName}`);
      return `<span class="project-tag">${tagValue}</span>`;
    }).join('');
    return `
      <article class="project-card" tabindex="0" aria-label="${title}">
        <div class="project-header">
          <div class="project-icon">${project.icon}</div>
          <div class="project-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="${t('nav.projects')} - GitHub">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="${project.live}" target="_blank" rel="noopener noreferrer" aria-label="${t('nav.projects')} - Live">
              <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${desc}</p>
        <div class="project-tags">${tagsHtml}</div>
      </article>
    `;
  }

  renderExperience() {
    const t = i18n.t.bind(i18n);
    const jobs = [
      { date: 'j1_date', role: 'j1_role', company: 'j1_company', li: ['j1_desc_li_1', 'j1_desc_li_2', 'j1_desc_li_3', 'j1_desc_li_4'] },
      { date: 'j2_date', role: 'j2_role', company: 'j2_company', li: ['j2_desc_li_1', 'j2_desc_li_2', 'j2_desc_li_3', 'j2_desc_li_4'] },
      { date: 'j3_date', role: 'j3_role', company: 'j3_company', li: ['j3_desc_li_1', 'j3_desc_li_2', 'j3_desc_li_3', 'j3_desc_li_4'] },
      { date: 'j4_date', role: 'j4_role', company: 'j4_company', li: ['j4_desc_li_1', 'j4_desc_li_2', 'j4_desc_li_3', 'j4_desc_li_4'] }
    ];

    return `
      <div class="timeline">
        ${jobs.map(job => {
          return `
            <div class="timeline-item" aria-label="${t(job.role)}">
              <span class="timeline-date">${t(job.date)}</span>
              <h3>${t(job.role)}</h3>
              <span class="company">${t(job.company)}</span>
              <div class="timeline-desc">
                <ul>
                  ${job.li.map(li => `<li>${t(li)}</li>`).join('')}
                </ul>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  render() {
    const t = i18n.t.bind(i18n);
    const about = {
      title: t('about.title'),
      subtitle: t('about.subtitle'),
      p1: t('about.p1'),
      p2: t('about.p2'),
      p3: t('about.p3'),
      stat_yr: t('about.stat_yr'),
      stat_proj: t('about.stat_proj'),
      stat_lang: t('about.stat_lang'),
      stat_techs: t('about.stat_techs')
    };
    const nav = {
      about: t('nav.about'),
      experience: t('nav.experience'),
      skills: t('nav.skills'),
      projects: t('nav.projects'),
      contact: t('nav.contact')
    };
    const hero = {
      label: t('hero.label'),
      desc: t('hero.desc'),
      cta_projects: t('hero.cta_projects'),
      cta_contact: t('hero.cta_contact')
    };
    const exp = {
      title: t('exp.title'),
      subtitle: t('exp.subtitle')
    };
    const skills = {
      title: t('skills.title'),
      subtitle: t('skills.subtitle')
    };
    const projects = {
      title: t('projects.title'),
      subtitle: t('projects.subtitle')
    };
    const contact = {
      title: t('contact.title'),
      subtitle: t('contact.subtitle')
    };
    const footer = {
      text: t('footer.text')
    };

    const html = `
      <header>
        <nav role="navigation" aria-label="${t('brand')}">
          <div class="nav-brand"><span>Juan Jose Gomez</span></div>
          <ul class="nav-links">
            <li><a href="#about">${nav.about}</a></li>
            <li><a href="#experience">${nav.experience}</a></li>
            <li><a href="#skills">${nav.skills}</a></li>
            <li><a href="#projects">${nav.projects}</a></li>
          </ul>
          <div class="nav-actions">
            <div class="lang-switcher" role="group" aria-label="Language">
              <button class="lang-btn active" data-lang="en" aria-pressed="true">EN</button>
              <button class="lang-btn" data-lang="es" aria-pressed="false">ES</button>
              <button class="lang-btn" data-lang="pt" aria-pressed="false">PT</button>
              <button class="lang-btn" data-lang="jp" aria-pressed="false">JP</button>
            </div>
            <button class="theme-toggle" aria-label="Toggle theme">
              <svg class="sun-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              <svg class="moon-icon" viewBox="0 0 24 24" style="display:none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section id="hero" aria-label="Introduction">
          <div class="hero-content">
            <p class="hero-label">${hero.label}</p>
            <h1 class="hero-name"><span class="accent-letter">J</span>uan Jose Gomez</h1>
            <div class="accent-line"></div>
            <p class="hero-desc">${hero.desc}</p>
            <div class="hero-actions">
              <a href="#projects" class="hero-btn primary">${hero.cta_projects} <svg width="16" height="16" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg></a>
            </div>
          </div>
        </section>
        <section id="about" aria-label="About">
          <div class="about-content">
            <div class="about-text">
              <span class="section-label">${about.title}</span>
              <h2 class="section-title">${about.subtitle}</h2>
              <p>${about.p1}</p>
              <p>${about.p2}</p>
              <p>${about.p3}</p>
            </div>
            <div class="about-stats stats-grid">
              <a href="#experience" class="stat-unit" aria-label="${about.stat_yr}: 8+ years">
                <h3>8+</h3><span>${about.stat_yr}</span>
              </a>
              <a href="#projects" class="stat-unit" aria-label="${about.stat_proj}: 50+ delivered">
                <h3>50+</h3><span>${about.stat_proj}</span>
              </a>
              <div class="stat-unit" aria-label="${about.stat_lang}: English, Spanish, Portuguese, Japanese">
                <h3>4</h3><span>${about.stat_lang}</span>
              </div>
              <div class="stat-unit" aria-label="${about.stat_techs}: 20+ technologies">
                <h3>20+</h3><span>${about.stat_techs}</span>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" aria-label="Experience">
          <span class="section-label">${exp.title}</span>
          <h2 class="section-title">${exp.subtitle}</h2>
          <div id="experience-container"></div>
        </section>
        <section id="skills" aria-label="Skills">
          <span class="section-label">${skills.title}</span>
          <h2 class="section-title">${skills.subtitle}</h2>
          <div id="skills-container"></div>
        </section>
        <section id="projects" aria-label="Projects">
          <span class="section-label">${projects.title}</span>
          <h2 class="section-title">${projects.subtitle}</h2>
          <div id="projects-grid" class="projects-grid"></div>
        </section>
        <section id="contact" aria-label="Contact">
          <span class="section-label">${contact.title}</span>
          <h2 class="section-title">${contact.subtitle}</h2>
          <div class="contact-grid">
            <a href="mailto:contact@jjgomez.dev" class="contact-card" aria-label="Email">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h3>Email</h3>
              <p>contact@jjgomez.dev</p>
            </a>
            <a href="https://linkedin.com/in/juanjosegomezmartinuzzo" target="_blank" rel="noopener noreferrer" class="contact-card" aria-label="LinkedIn">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/juanjosegomezmartinuzzo</p>
            </a>
            <a href="https://github.com/juangomezmartinuzzo" target="_blank" rel="noopener noreferrer" class="contact-card" aria-label="GitHub">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <h3>GitHub</h3>
              <p>@juangomezmartinuzzo</p>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div class="accent-line"></div>
        <p>${footer.text}</p>
      </footer>
    `;
    document.querySelector('body').innerHTML = html;
  }
}
