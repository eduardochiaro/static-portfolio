'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Check as CheckIcon, Moon as MoonIcon, Sun as SunIcon } from '@react-zero-ui/icon-sprite';

type ThemeValue = 'light' | 'dark' | 'system';

type ThemeMenuProps = {
  readonly theme: ThemeValue;
  readonly onThemeChange: (theme: ThemeValue) => void;
};

const THEME_OPTIONS: readonly { value: ThemeValue; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

export default function ThemeMenu({ theme, onThemeChange }: ThemeMenuProps) {
  return (
    <Menu>
      <MenuButton className="flex h-8 w-8 items-center justify-center transition" aria-label="Theme options">
        <MoonIcon className="hidden h-4 w-4 dark:block" />
        <SunIcon className="block h-4 w-4 dark:hidden" />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="bg-mono-bg dark:bg-dark-mono-bg border-mono-border dark:border-dark-mono-border z-50 mt-2 w-28 rounded border py-1 shadow-lg"
      >
        {THEME_OPTIONS.map((option) => (
          <MenuItem key={option.value}>
            <button
              className="hover:bg-mono-card dark:hover:bg-dark-mono-card flex w-full items-center justify-between px-3 py-2 text-left text-xs transition"
              onClick={() => onThemeChange(option.value)}
            >
              {option.label}
              {theme === option.value && <CheckIcon className="h-3 w-3 opacity-60" />}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
