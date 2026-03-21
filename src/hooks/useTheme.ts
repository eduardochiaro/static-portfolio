'use client';

import { useCallback, useEffect, useState } from 'react';

type ThemeValue = 'light' | 'dark' | 'system';

export default function useTheme() {
  const [theme, setThemeState] = useState<ThemeValue>('light');
  const [mounted, setMounted] = useState(false);

  // Read localStorage only after mount to avoid hydration mismatch
  useEffect(() => {
    const stored = (localStorage.getItem('theme') as ThemeValue) || 'light';
    setThemeState(stored);
    setMounted(true);
  }, []);

  const setTheme = useCallback((newTheme: ThemeValue) => {
    setThemeState(newTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const applyTheme = () => {
      const effectiveTheme = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(effectiveTheme);
      localStorage.setItem('theme', theme);
    };

    applyTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme();
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [theme, mounted]);

  return { theme, setTheme, mounted } as const;
}