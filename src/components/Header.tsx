'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type HeaderProps = {
  name?: string;
  pages?: readonly { name: string; path: string }[];
  section?: string;
};

function getStoredTheme(): 'light' | 'dark' | 'system' {
  if (typeof window === 'undefined') return 'light';
  return (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'light';
}

export default function Header({ name, pages, section }: HeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(getStoredTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const applyTheme = () => {
      const effectiveTheme = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(effectiveTheme);
      localStorage.setItem('theme', theme);
    };

    applyTheme();

    // Listen for OS theme changes when in system mode
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme();
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [theme]);

  return (
    <header className="max-2xl:bg-mono-bg/50 max-2xl:dark:bg-dark-mono-bg/50 max-md:bg-dark-mono-bg fixed top-0 right-0 left-0 z-50 bg-transparent max-xl:backdrop-blur-xs">
      <div className="mx-auto flex items-center justify-between p-8">
        <div className="text-mono-accent dark:text-dark-mono-accent flex items-center gap-4 text-sm font-normal tracking-wide">
          <Link href="/">{name}</Link>
          <div className="opacity-60">/</div>
          <div>{section}</div>
        </div>
        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm">
          {pages?.map((page) => (
            <Link
              key={page.name}
              href={page.path}
              className="text-mono-text-muted dark:text-dark-mono-text-muted hover:text-mono-text dark:hover:text-dark-mono-text uppercase transition max-sm:hidden"
            >
              {page.name}
            </Link>
          ))}

          {/* Mobile menu toggle */}
          <button
            className="flex h-8 w-8 items-center justify-center transition sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>

          <Menu>
            <MenuButton className="flex h-8 w-8 items-center justify-center transition" aria-label="Theme options">
              <MoonIcon className="hidden h-4 w-4 dark:block" />
              <SunIcon className="block h-4 w-4 dark:hidden" />
            </MenuButton>

            <MenuItems
              anchor="bottom end"
              className="bg-mono-bg dark:bg-dark-mono-bg border-mono-border dark:border-dark-mono-border z-50 mt-2 w-28 rounded border py-1 shadow-lg"
            >
              <MenuItem>
                <button
                  className="hover:bg-mono-card dark:hover:bg-dark-mono-card w-full px-3 py-2 text-left text-xs transition"
                  onClick={() => setTheme('light')}
                >
                  Light
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="hover:bg-mono-card dark:hover:bg-dark-mono-card w-full px-3 py-2 text-left text-xs transition"
                  onClick={() => setTheme('dark')}
                >
                  Dark
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="hover:bg-mono-card dark:hover:bg-dark-mono-card w-full px-3 py-2 text-left text-xs transition"
                  onClick={() => setTheme('system')}
                >
                  System
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="border-mono-border dark:border-dark-mono-border border-t sm:hidden">
          <div className="flex flex-col gap-2 p-6">
            {pages?.map((page) => (
              <Link
                key={page.name}
                href={page.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-mono-text-muted dark:text-dark-mono-text-muted hover:text-mono-text dark:hover:text-dark-mono-text py-2 text-sm uppercase transition"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
