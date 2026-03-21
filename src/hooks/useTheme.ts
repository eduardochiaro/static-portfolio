'use client';

import { useCallback, useEffect, useSyncExternalStore } from 'react';

type ThemeValue = 'light' | 'dark' | 'system';

let listeners: (() => void)[] = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(callback: () => void): () => void {
  listeners = [...listeners, callback];
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function getSnapshot(): ThemeValue {
  return (localStorage.getItem('theme') as ThemeValue) || 'light';
}

function getServerSnapshot(): ThemeValue {
  return 'light';
}

export default function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((newTheme: ThemeValue) => {
    localStorage.setItem('theme', newTheme);
    emitChange();
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      const effectiveTheme = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(effectiveTheme);
    };

    applyTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', applyTheme);
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }
  }, [theme]);

  return { theme, setTheme } as const;
}
