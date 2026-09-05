import type { ReactNode } from 'react';

export default function Tag({ children }: { readonly children: ReactNode }) {
  return <span className="border-mono-border text-mono-text-muted rounded-xs border px-2.5 py-0.5 text-xs">{children}</span>;
}
