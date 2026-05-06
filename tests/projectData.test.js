import { describe, it, expect } from 'vitest';
import projectData from '../src/shared/projectData.js';

describe('projectData module', () => {
  it('exports an array of 4 projects', () => {
    expect(Array.isArray(projectData)).toBe(true);
    expect(projectData).toHaveLength(4);
  });

  it('contains required fields for each project', () => {
    projectData.forEach(project => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('titleKey');
      expect(project).toHaveProperty('descKey');
      expect(project).toHaveProperty('tags');
      expect(Array.isArray(project.tags)).toBe(true);
      expect(project.tags.length).toBe(3);
      expect(project).toHaveProperty('github');
      expect(typeof project.github).toBe('string');
      expect(project).toHaveProperty('live');
      expect(typeof project.live).toBe('string');
      expect(project).toHaveProperty('icon');
      expect(typeof project.icon).toBe('string');
    });
  });

  it('has unique IDs for all projects', () => {
    const ids = projectData.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(projectData.length);
  });

  it('tags reference valid i18n keys', () => {
    expect(projectData[0].tags).toEqual(['proj1.tag1', 'proj1.tag2', 'proj1.tag3']);
    expect(projectData[1].tags).toEqual(['proj2.tag1', 'proj2.tag2', 'proj2.tag3']);
    expect(projectData[2].tags).toEqual(['proj3.tag1', 'proj3.tag2', 'proj3.tag3']);
    expect(projectData[3].tags).toEqual(['proj4.tag1', 'proj4.tag2', 'proj4.tag3']);
  });

  it('projects follow correct order (1-4)', () => {
    expect(projectData[0].id).toBe(1);
    expect(projectData[1].id).toBe(2);
    expect(projectData[2].id).toBe(3);
    expect(projectData[3].id).toBe(4);
  });

  it('icon fields have SVG structure', () => {
    projectData.forEach(project => {
      expect(project.icon).toContain('<svg');
      expect(project.icon).toContain('</svg>');
    });
  });
});
