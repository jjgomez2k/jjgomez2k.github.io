import { describe, it, expect } from 'vitest';
import i18n from '../src/i18n/i18n.js';

describe('i18n module', () => {
  beforeEach(() => {
    i18n.init('en');
    i18n.setLocale('en');
  });

  it('initializes and defaults to English', () => {
    expect(i18n.locale).toBe('en');
  });

  it('translates string keys', () => {
    expect(i18n.t('brand')).toBe('Juan José Gómez Martinuzzo');
    expect(i18n.t('about.title')).toBe('About Me');
    expect(i18n.t('projects.title')).toBe('Featured Projects');
  });

  it('translates nested key paths', () => {
    expect(i18n.t('hero.label')).toBe('Senior Full Stack Developer');
    expect(i18n.t('about.stat_yr')).toBe('Years Experience');
    expect(i18n.t('skills.cat1_skill1_name')).toBe('.NET / C#');
    expect(i18n.t('nav.experience')).toBe('Experience');
  });

  it('translates experience entries correctly', () => {
    expect(i18n.t('exp.j1_role')).toBe('Software Engineer');
    expect(i18n.t('exp.j1_company')).toBe('K2 Partnering Solutions (client ExxonMobil)');
    expect(i18n.t('exp.j2_role')).toBe('Senior Backend Engineer');
    expect(i18n.t('exp.j3_role')).toBe('Senior Full Stack Developer');
    expect(i18n.t('exp.j4_role')).toBe('Senior Full Stack Developer');
    expect(i18n.t('exp.j5_role')).toBe('Lead Software Engineer');
    expect(i18n.t('exp.j6_role')).toBe('Full Stack Developer');
  });

  it('falls back to English for missing locales', () => {
    i18n.setLocale('xx');
    expect(i18n.t('brand')).toBe('Juan José Gómez Martinuzzo');
    expect(i18n.t('hero.label')).toBe('Senior Full Stack Developer');
  });

  it('returns the key itself when value is not a string', () => {
    // Test that non-string values return the key
    expect(i18n.t('nav')).toBe('nav');
  });

  it('translates Spanish keys correctly', () => {
    i18n.setLocale('es');
    expect(i18n.t('brand')).toBe('Juan José Gómez Martinuzzo');
    expect(i18n.t('hero.label')).toBe('Desarrollador Full Stack Senior');
    expect(i18n.t('about.stat_yr')).toBe('Años de Experiencia');
    expect(i18n.t('skills.cat1_name')).toBe('Backend');
  });

  it('translates Portuguese keys correctly', () => {
    i18n.setLocale('pt');
    expect(i18n.t('hero.label')).toBe('Desenvolvedor Full Stack Senior');
    expect(i18n.t('about.stat_yr')).toBe('Anos de Experiência');
  });

  it('translates Japanese keys correctly', () => {
    i18n.setLocale('jp');
    expect(i18n.t('hero.label')).toBe('シニアフルスタック開発者');
    expect(i18n.t('about.stat_yr')).toBe('年の経験');
  });

  it('allows switching between locales', () => {
    expect(i18n.t('nav.about')).toContain('About');
    i18n.setLocale('es');
    expect(i18n.t('nav.about')).toBe('Sobre Mí');
  });
});
