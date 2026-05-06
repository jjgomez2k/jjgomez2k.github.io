import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ThemeManager, icons } from '../src/shared/ThemeManager.js';

describe('ThemeManager', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute('data-theme', '');
    ThemeManager._current = 'dark';
    ThemeManager._initialized = false;
    icons.sun = null;
    icons.moon = null;
  });

  it('should init with default dark theme', () => {
    ThemeManager.init();
    expect(ThemeManager.current).toBe('dark');
  });

  it('should toggle from dark to light and back', () => {
    ThemeManager.init();
    expect(ThemeManager.current).toBe('dark');
    const light = ThemeManager.toggle();
    expect(light).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    const dark = ThemeManager.toggle();
    expect(dark).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should setTheme to a specific value', () => {
    ThemeManager.setTheme('light');
    expect(ThemeManager.current).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    ThemeManager.setTheme('dark');
    expect(ThemeManager.current).toBe('dark');
  });

  it('should ignore invalid theme values', () => {
    ThemeManager.setTheme('light');
    const result = ThemeManager.setTheme('invalid');
    expect(result).toBe('light');
    expect(ThemeManager.current).toBe('light');
  });

  it('should persist theme to localStorage', () => {
    ThemeManager.init();
    ThemeManager.toggle();
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
  });

  it('should read persisted theme from localStorage', () => {
    localStorage.setItem('portfolio-theme', 'light');
    ThemeManager.init();
    expect(ThemeManager.current).toBe('light');
  });
});
