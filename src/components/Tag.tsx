import type { ReactNode } from 'react';

export default function Tag({ children }: { readonly children: ReactNode }) {
  return <span className="border-mono-border dark:border-dark-mono-border rounded-xs border px-2 py-0.5 text-xs">{children}</span>;
}
