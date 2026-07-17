import type { ReactNode } from 'react';

type SectionHeadingProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly small?: boolean;
};

export default function SectionHeading({ children, className = '', small = false }: SectionHeadingProps) {
  const Tag = small ? 'h3' : 'h2';
  return (
    <Tag className={`flex items-center gap-2 ${small ? 'text-base' : 'text-lg'} font-medium tracking-widest uppercase ${className}`}>
      <span className="text-accent dark:text-dark-accent" aria-hidden="true">
        {'//'}
      </span>
      {children}
    </Tag>
  );
}
