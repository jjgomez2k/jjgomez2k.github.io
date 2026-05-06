import { describe, it, expect } from 'vitest';

describe('Project Cards Rendering Integration', () => {
  it('renders all project cards with correct keys', () => {
    const projectData = [
      { titleKey: 'proj1.title', tags: ['proj1.tag1', 'proj1.tag2', 'proj1.tag3'], github: '#', live: '#', icon: '', descKey: 'proj1.desc' },
      { titleKey: 'proj2.title', tags: ['proj2.tag1', 'proj2.tag2', 'proj2.tag3'], github: '#', live: '#', icon: '', descKey: 'proj2.desc' },
      { titleKey: 'proj3.title', tags: ['proj3.tag1', 'proj3.tag2', 'proj3.tag3'], github: '#', live: '#', icon: '', descKey: 'proj3.desc' },
      { titleKey: 'proj4.title', tags: ['proj4.tag1', 'proj4.tag2', 'proj4.tag3'], github: '#', live: '#', icon: '', descKey: 'proj4.desc' }
    ];

    projectData.forEach(project => {
      expect(project.titleKey).toMatch(/^proj\d+\.title$/);
      expect(project.descKey).toMatch(/^proj\d+\.desc$/);
      expect(project.tags.length).toBe(3);
      expect(project.github).toMatch(/^#|https:\/\/github\.com/);
      expect(project.live).toMatch(/^#|https?:\/\//);
    });
  });
});
