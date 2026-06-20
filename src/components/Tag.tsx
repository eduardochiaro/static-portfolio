import type { ReactNode } from 'react';

export default function Tag({ children }: { readonly children: ReactNode }) {
  return (
    <span className="border-accent/30 dark:border-dark-accent/30 text-accent dark:text-dark-accent rounded-xs border px-2 py-0.5 text-xs">{children}</span>
  );
}
