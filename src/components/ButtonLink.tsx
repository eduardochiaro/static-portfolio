import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly target?: string;
};

const BASE_CLASSES =
  'border-mono-border dark:border-dark-mono-border text-mono-text-muted dark:text-dark-mono-text-muted bg-mono-bg dark:bg-dark-mono-bg hover:bg-mono-card dark:hover:bg-dark-mono-card hover:text-mono-text dark:hover:text-dark-mono-text rounded border px-6 py-2 text-sm transition';

export default function ButtonLink({ href, children, className, target }: ButtonLinkProps) {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

  return (
    <Link href={href} className={`${BASE_CLASSES} ${className ?? ''}`.trim()} target={target} rel={rel}>
      {children}
    </Link>
  );
}
