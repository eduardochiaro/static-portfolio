import type { ReactNode } from 'react';

type SectionHeadingProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: 'h2' | 'h3';
  readonly size?: 'lg' | 'base';
};

export default function SectionHeading({ children, className = '', as: Tag = 'h2', size = 'lg' }: SectionHeadingProps) {
  return (
    <Tag className={`flex items-center gap-2 ${size === 'lg' ? 'text-lg' : 'text-base'} font-medium tracking-widest uppercase ${className}`}>
      <span className="text-accent dark:text-dark-accent" aria-hidden="true">
        {'//'}
      </span>
      {children}
    </Tag>
  );
}
