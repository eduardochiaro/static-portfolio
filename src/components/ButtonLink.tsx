import metaData from '@/data/metadata.json';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly target?: string;
};

const BASE_CLASSES =
  'border-mono-border text-mono-text-muted bg-mono-bg hover:border-accent hover:text-accent active:border-accent active:text-accent pointer-coarse:min-h-11 inline-flex items-center gap-2 rounded-xs border px-4 py-2 text-xs transition';

export default function ButtonLink({ href, children, className, target }: ButtonLinkProps) {
  const newTab = target === '_blank';

  return (
    <Link href={href} className={`${BASE_CLASSES} ${className ?? ''}`.trim()} target={target} rel={newTab ? 'noopener noreferrer' : undefined}>
      {children}
      {newTab && <span className="sr-only"> {metaData.a11y.newTab}</span>}
    </Link>
  );
}
