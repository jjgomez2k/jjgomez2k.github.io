import { describe, it, expect } from 'vitest';
import i18n from '../src/i18n/i18n.js';

describe('PortfolioApp Language Switching', () => {
  beforeEach(() => {
    i18n.init('en');
    i18n.setLocale('en');
  });

  it('translates hero label correctly for each locale', () => {
    const locales = {
      'en': 'Senior Full Stack Developer',
      'es': 'Desarrollador Full Stack Senior',
      'pt': 'Desenvolvedor Full Stack Senior',
      'jp': 'シニアフルスタック開発者'
    };

    Object.entries(locales).forEach(([locale, expected]) => {
      i18n.setLocale(locale);
      expect(i18n.t('hero.label')).toBe(expected);
    });
  });

  it('translates project titles for all locales', () => {
    const locales = {
      'en': ['E-Commerce Platform', 'Data Analytics Engine', 'Healthcare Management System', 'DevOps Automation Suite'],
      'es': ['Plataforma de E-Commerce', 'Motor de Análisis de Datos', 'Sistema de Gestión de Salud', 'Suite de Automatización DevOps'],
      'pt': ['Plataforma de E-Commerce', 'Motor de Análise de Dados', 'Sistema de Gestão de Saúde', 'Suite de Automação DevOps'],
      'jp': ['Eコマースプラットフォーム', 'データ分析エンジン', '健康管理システム', 'DevOps自動化スイート']
    };

    Object.entries(locales).forEach(([locale, expectedTitles]) => {
      i18n.setLocale(locale);
      for (let i = 1; i <= 4; i++) {
        expect(i18n.t(`proj${i}.title`)).toBe(expectedTitles[i - 1]);
      }
    });
  });

  it('translates nav items for each locale', () => {
    i18n.setLocale('en');
    expect(i18n.t('nav.about')).toBe('About');
    expect(i18n.t('nav.experience')).toBe('Experience');
    expect(i18n.t('nav.projects')).toBe('Projects');
    expect(i18n.t('nav.contact')).toBe('Contact');

    i18n.setLocale('es');
    expect(i18n.t('nav.about')).toBe('Sobre Mí');
    expect(i18n.t('nav.projects')).toBe('Proyectos');
  });

  it('maintains consistent key structure', () => {
    ['en', 'es', 'pt', 'jp'].forEach(locale => {
      i18n.setLocale(locale);
      expect(i18n.t('about.title')).toBeDefined();
      expect(i18n.t('about.subtitle')).toBeDefined();
      expect(i18n.t('hero.label')).toBeDefined();
      expect(i18n.t('skills.title')).toBeDefined();
      expect(i18n.t('projects.title')).toBeDefined();
      expect(i18n.t('contact.title')).toBeDefined();
    });
  });
});
