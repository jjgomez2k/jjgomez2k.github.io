// Skills Component
import i18n from '../i18n/i18n.js';

// Default skills data
const defaultSkills = [
  {
    category: 'exp.c1_name',
    skills: [
      { name: 'exp.c1_s1_name', level: 95 },
      { name: 'exp.c1_s2_name', level: 90 },
      { name: 'exp.c1_s3_name', level: 85 },
      { name: 'exp.c1_s4_name', level: 80 }
    ]
  },
  {
    category: 'exp.c2_name',
    skills: [
      { name: 'exp.c2_s1_name', level: 90 },
      { name: 'exp.c2_s2_name', level: 85 },
      { name: 'exp.c2_s3_name', level: 80 },
      { name: 'exp.c2_s4_name', level: 95 }
    ]
  },
  {
    category: 'exp.c3_name',
    skills: [
      { name: 'exp.c3_s1_name', level: 90 },
      { name: 'exp.c3_s2_name', level: 85 },
      { name: 'exp.c3_s3_name', level: 80 },
      { name: 'exp.c3_s4_name', level: 75 }
    ]
  }
];

export const skillsComponent = (skillsData = defaultSkills) => {
  const t = i18n.t.bind(i18n);
  
  return `
    <section id="skills" aria-label="Skills">
      <div class="section-header">
        <span class="section-label" data-i18n="skills.title">TECHNICAL SKILLS</span>
        <h2 class="section-title" data-i18n="skills.subtitle"></h2>
      </div>
      <div class="skills-content">
        ${skillsData.map((cat, index) => `
          <div class="skill-category" data-category="true" style="animation-delay: ${index * 0.1}s">
            <h3>${t(cat.category)}</h3>
            ${cat.skills.map(skill => `
              <div class="skill-item">
                <span>
                  <span>${t(skill.name)}</span>
                  <span>${skill.level}%</span>
                </span>
                <div class="skill-track">
                  <div class="skill-fill" style="--level: ${skill.level}%" data-level="${skill.level}"></div>
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

export default skillsComponent;
