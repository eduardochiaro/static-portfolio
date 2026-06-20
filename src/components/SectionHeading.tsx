import type { ReactNode } from 'react';

type SectionHeadingProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`flex items-center gap-2 text-lg font-medium tracking-widest uppercase ${className}`}>
      <span className="text-accent dark:text-dark-accent" aria-hidden="true">
        {'//'}
      </span>
      {children}
    </h2>
  );
}
