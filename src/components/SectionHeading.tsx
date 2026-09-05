import type { ReactNode } from 'react';

type SectionHeadingProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly small?: boolean;
  /** Right-aligned counter, e.g. "8 entries" */
  readonly meta?: ReactNode;
};

export default function SectionHeading({ children, className = '', small = false, meta }: SectionHeadingProps) {
  const Tag = small ? 'h3' : 'h2';
  return (
    <Tag className={`text-mono-text-muted flex items-center gap-3.5 text-xs tracking-[0.24em] uppercase ${className}`}>
      {children}
      <span className="bg-mono-border h-px flex-1" aria-hidden="true" />
      {meta && <span className="tracking-normal normal-case">{meta}</span>}
    </Tag>
  );
}
