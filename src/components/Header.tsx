'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header({ name, section }: { name?: string; section?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'light';
    setTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (newTheme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return (
    <header className="bg-transparent max-xl:bg-mono-bg/50 max-xl:dark:bg-dark-mono-bg/50 fixed top-0 right-0 left-0 z-50 max-xl:backdrop-blur-xs">
      <div className="mx-auto flex items-center justify-between p-8">
        <div className="text-mono-accent dark:text-dark-mono-accent flex items-center gap-4 text-sm font-normal tracking-wide">
          <Link href="/">{name}</Link>
          <div className="opacity-60">/</div>
          <div>{section}</div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-mono-text-muted dark:text-dark-mono-text-muted hover:text-mono-text dark:hover:text-dark-mono-text uppercase transition"
          >
            Portfolio
          </Link>
          <Link
            href="/resume"
            className="text-mono-text-muted dark:text-dark-mono-text-muted hover:text-mono-text dark:hover:text-dark-mono-text uppercase transition"
          >
            Resume
          </Link>

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
                  onClick={() => applyTheme('light')}
                >
                  Light
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="hover:bg-mono-card dark:hover:bg-dark-mono-card w-full px-3 py-2 text-left text-xs transition"
                  onClick={() => applyTheme('dark')}
                >
                  Dark
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="hover:bg-mono-card dark:hover:bg-dark-mono-card w-full px-3 py-2 text-left text-xs transition"
                  onClick={() => applyTheme('system')}
                >
                  System
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
}
