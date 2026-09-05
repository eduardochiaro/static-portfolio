import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly target?: string;
};

const BASE_CLASSES =
  'border-mono-border text-mono-text-muted bg-mono-bg hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-xs border px-4 py-2 text-xs transition';

export default function ButtonLink({ href, children, className, target }: ButtonLinkProps) {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

  return (
    <Link href={href} className={`${BASE_CLASSES} ${className ?? ''}`.trim()} target={target} rel={rel}>
      {children}
    </Link>
  );
}
