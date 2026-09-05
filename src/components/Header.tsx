'use client';

import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import NavLink from '@/components/NavLink';
import LogoIcon from './icons/Logo';

type HeaderProps = {
  readonly name?: string;
  readonly logo?: string;
  readonly pages?: readonly { name: string; path: string }[];
  readonly section?: string;
  readonly repo?: string;
  readonly branch?: string;
};

export default function Header({ name, logo, pages, section, branch = 'main' }: HeaderProps) {
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

  return (
    <header className="border-mono-border bg-mono-card/85 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3.5 text-sm">
          <Link href="/" className="flex items-center gap-3.5" aria-label={name}>
            <LogoIcon className="fill-mono-text size-5" />
            <span className="text-mono-text-muted max-sm:hidden">{logo}</span>
          </Link>
          {branch && (
            <span className="border-mono-border text-accent inline-flex items-center gap-2 rounded-full border px-3 py-0.5 text-xs max-sm:hidden">
              <span className="bg-accent pulse-dot size-1.5 rounded-full" />
              {branch}
            </span>
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
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="border-mono-border border-t sm:hidden">
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
