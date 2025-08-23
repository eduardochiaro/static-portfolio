'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronLeftIcon, MoonIcon, SunIcon } from 'lucide-react';
import Logo from './Logo';
import Link from 'next/link';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect, useMemo } from 'react';
import { useUI } from '@react-zero-ui/core';

const themeUuid = process.env.NEXT_PUBLIC_THEME_UUID || 'default-theme-uuid'; // Fallback to a default UUID if not set

export default function Header({ name, goBack }: { name?: string; goBack?: string }) {
  const [currentTheme, setCurrentTheme] = useLocalStorage<'light' | 'dark' | 'system'>(themeUuid, 'dark'); // Ensure the theme is stored in local storage
  const [, setValue] = useUI<'light' | 'dark' | 'system'>('theme', 'dark');
  const isDarkMode = useMemo(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, []);

  useEffect(() => {
    const setTheme = (theme: 'light' | 'dark' | 'system') => {
      if (theme === 'system') {
        setValue(isDarkMode ? 'dark' : 'light');
      } else {
        setValue(theme);
      }
    };
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [currentTheme, isDarkMode, setValue]);

  const setColorTheme = (themeName: 'light' | 'dark' | 'system') => {
    setCurrentTheme(themeName);
    if (themeName === 'system') {
      setValue(isDarkMode ? 'dark' : 'light');
    } else {
      setValue(themeName);
    }
  };

  return (
    <header className="border-dark-main dark:border-main z-50 mx-auto flex max-w-4xl items-center justify-between border-b-2 px-4 pt-8 pb-4 md:px-0">
      <div className="flex items-center gap-2 text-2xl font-bold tracking-wider uppercase">
        <Logo className="h-6" />
        <span className="text-accent-two dark:text-dark-accent-two align-super text-sm">{name}</span>
      </div>
      <div className="flex items-center gap-8">
        {goBack && (
          <Link
            href={goBack}
            prefetch={false}
            className="text-dark-main dark:text-main hover:text-accent-two dark:hover:text-dark-accent-two flex items-center gap-1 text-sm font-bold"
          >
            <ChevronLeftIcon className="size-4 stroke-3" />
            Back
          </Link>
        )}
        <Menu>
          <MenuButton className="flex cursor-pointer items-center justify-center rounded-full focus:outline-none" aria-label="Toggle theme">
            <SunIcon className="hover:fill-dark-main dark:hover:fill-main block size-7 dark:hidden" />
            <MoonIcon className="hover:fill-dark-main dark:hover:fill-main hidden size-7 dark:block" />
          </MenuButton>

          <MenuItems anchor="bottom end" className="bg-main dark:bg-dark-main border-dark-main dark:border-main z-60 mt-2 w-36 rounded border-2 py-1 shadow-lg">
            <MenuItem>
              <button
                className="theme-option hover:bg-accent-two hover:text-main dark:hover:bg-dark-accent-two dark:hover:text-dark-main w-full cursor-pointer px-4 py-2 text-left"
                data-theme="light"
                onClick={() => {
                  setColorTheme('light');
                }}
              >
                Light
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="theme-option hover:bg-accent-two hover:text-main dark:hover:bg-dark-accent-two dark:hover:text-dark-main w-full cursor-pointer px-4 py-2 text-left"
                data-theme="dark"
                onClick={() => {
                  setColorTheme('dark');
                }}
              >
                Dark
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="theme-option hover:bg-accent-two hover:text-main dark:hover:bg-dark-accent-two dark:hover:text-dark-main w-full cursor-pointer px-4 py-2 text-left"
                data-theme="system"
                onClick={() => {
                  setColorTheme('system');
                }}
              >
                System
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
}
