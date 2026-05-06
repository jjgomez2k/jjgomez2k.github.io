import { describe, it, expect, vi } from 'vitest';
import { PortfolioApp } from '../src/app/PortfolioApp.js';
import i18n from '../src/i18n/i18n.js';
import projectData from '../src/shared/projectData.js';

describe('PortfolioApp class', () => {
  let app;
  let originalInnerHtml;

  beforeEach(() => {
    vi.useFakeTimers();
    originalInnerHtml = Document.prototype.innerHTML;
    Document.prototype.innerHTML = vi.fn();
    app = new PortfolioApp();
  });

  afterEach(() => {
    Document.prototype.innerHTML = originalInnerHtml;
    vi.restoreAllMocks();
  });

  it('initializes properly', () => {
    expect(app).toBeDefined();
  });

  it('switches language', () => {
    app.switchLanguage('es');
    expect(i18n.locale).toBe('es');
  });

  it('renders skills correctly', () => {
    app.renderSkills();
  });

  it('renders projects', () => {
    const projectsContainer = document.createElement('div');
    projectsContainer.id = 'projects-grid';
    document.getElementById = vi.fn().mockReturnValue(projectsContainer);

    app.renderProjects(projectData);
    expect(projectsContainer.innerHTML).toContain('ExxonMobil Data Solutions');
    expect(projectsContainer.innerHTML).toContain('Crefisa Loan Generation System');
  });

  it('applies language to document', () => {
    app.applyLanguage('es');
    expect(i18n.locale).toBe('es');
  });
});
