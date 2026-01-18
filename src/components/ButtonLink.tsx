import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Reusable resume link component
 * Props:
 *  - href: destination URL (defaults to /resume)
 *  - children: link content (defaults to "View Full Resume")
 *  - className: optional additional classes
 */
export default function ButtonLink({ href, children, className, target }: { href: string; children: ReactNode; className?: string; target?: string }) {
  const base =
    'border-mono-border dark:border-dark-mono-border text-mono-text-muted dark:text-dark-mono-text-muted bg-mono-bg dark:bg-dark-mono-bg hover:bg-mono-card dark:hover:bg-dark-mono-card hover:text-mono-text dark:hover:text-dark-mono-text rounded border px-6 py-2 text-sm transition';
  const cls = `${base} ${className}`.trim();

  return (
    <Link href={href} className={cls} target={target}>
      {children}
    </Link>
  );
}
