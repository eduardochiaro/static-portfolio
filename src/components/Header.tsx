'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronLeftIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Logo from './Logo';
import Link from 'next/link';

export default function Header({ name, goBack }: { name?: string; goBack?: string }) {
  const { setTheme } = useTheme() as { systemTheme: string; theme: string; setTheme: (theme: string) => void };

  const setColorTheme = (themeName: string) => {
    setTheme(themeName);
  };

  return (
    <header className="border-retro-text dark:border-dark-text z-50 mx-auto flex max-w-4xl items-center justify-between border-b-2 px-4 pt-8 pb-4 md:px-0">
      <div className="flex items-center gap-2 text-2xl font-bold tracking-wider uppercase">
        <Logo className="h-6" />
        <span className="text-retro-red dark:text-dark-red align-super text-sm">{name}</span>
      </div>
      <div className="flex items-center gap-8">
        {goBack && (
          <Link
            href={goBack}
            prefetch={false}
            className="text-retro-text dark:text-dark-text hover:text-retro-red dark:hover:text-dark-red flex items-center gap-1 text-lg font-bold"
          >
            <ChevronLeftIcon className="size-6" />
            Back
          </Link>
        )}
        <Menu>
          <MenuButton className="flex items-center justify-center rounded-full focus:outline-none">
            <SunIcon className="block h-5 w-5 dark:hidden" />
            <MoonIcon className="hidden h-5 w-5 dark:block" />
          </MenuButton>

          <MenuItems
            anchor="bottom end"
            className="bg-retro-bg dark:bg-dark-bg border-retro-text dark:border-dark-text z-60 mt-2 w-36 rounded border-2 py-1 shadow-lg"
          >
            <MenuItem>
              <button
                className="theme-option hover:bg-retro-red hover:text-retro-bg dark:hover:bg-dark-red dark:hover:text-dark-bg w-full px-4 py-2 text-left"
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
                className="theme-option hover:bg-retro-red hover:text-retro-bg dark:hover:bg-dark-red dark:hover:text-dark-bg w-full px-4 py-2 text-left"
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
                className="theme-option hover:bg-retro-red hover:text-retro-bg dark:hover:bg-dark-red dark:hover:text-dark-bg w-full px-4 py-2 text-left"
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
