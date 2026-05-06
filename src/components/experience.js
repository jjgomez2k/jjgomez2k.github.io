// Experience Component
import projectData from '../shared/projectData.js';
import i18n from '../i18n/i18n.js';

export const experienceComponent = (jobs) => {
  const t = i18n.t.bind(i18n);
  
  // Helper to translate job properties
  const getJob = (key) => {
    const prefix = `exp.${key}`;
    const job = jobs.find(j => j.key === prefix);
    return job || {};
  };

  return `
    <section id="experience" aria-label="Experience">
      <div class="section-header">
        <span class="section-label" data-i18n="exp.title">PROFESSIONAL EXPERIENCE</span>
        <h2 class="section-title" data-i18n="exp.subtitle"></h2>
      </div>
      <div class="timeline">
        ${jobs.map(job => `
          <div class="timeline-item" role="article">
            <span class="timeline-date">${t(`${job.key}.date`)}</span>
            <h3>${t(`${job.key}.role`)}</h3>
            <span class="company">${t(`${job.key}.company`)}</span>
            <div class="timeline-desc">
              <ul>
                ${job.li.map(lineKey => `<li>${t(`${job.key}.${lineKey}`)}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

export default experienceComponent;
