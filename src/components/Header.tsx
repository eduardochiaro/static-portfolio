'use client';

import { Menu as MenuIcon, X as XIcon } from '@react-zero-ui/icon-sprite';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import NavLink from '@/components/NavLink';
import ThemeMenu from '@/components/ThemeMenu';
import useTheme from '@/hooks/useTheme';

type HeaderProps = {
  readonly name?: string;
  readonly pages?: readonly { name: string; path: string }[];
  readonly section?: string;
};

export default function Header({ name, pages, section }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  // Close mobile menu when viewport crosses sm breakpoint
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) closeMobileMenu();
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [closeMobileMenu]);

  return (
    <header className="max-2xl:bg-mono-bg/50 max-2xl:dark:bg-dark-mono-bg/50 max-md:bg-mono-bg max-md:dark:bg-dark-mono-bg fixed top-0 right-0 left-0 z-50 bg-transparent max-xl:backdrop-blur-xs">
      <div className="mx-auto flex items-center justify-between p-8">
        <div className="text-mono-accent dark:text-dark-mono-accent flex items-center gap-4 text-sm font-normal tracking-wide">
          <Link href="/">{name}</Link>
          {section && (
            <>
              <div className="opacity-60 max-sm:hidden">/</div>
              <div className="max-sm:hidden">{section}</div>
            </>
          )}
        </div>
        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm">
          {pages?.map((page) => (
            <NavLink key={page.name} href={page.path} label={page.name} active={section?.toLowerCase() === page.name.toLowerCase()} className="max-sm:hidden" />
          ))}

          {/* Mobile menu toggle */}
          <button
            className="flex h-8 w-8 items-center justify-center transition sm:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>

          <ThemeMenu theme={theme} onThemeChange={setTheme} />
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="border-mono-border dark:border-dark-mono-border border-t sm:hidden">
          <div className="flex flex-col gap-2 p-6">
            {pages?.map((page) => (
              <NavLink
                key={page.name}
                href={page.path}
                label={page.name}
                active={section?.toLowerCase() === page.name.toLowerCase()}
                onClick={closeMobileMenu}
                className="py-2"
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
