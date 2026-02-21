'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-6xl font-semibold tracking-tight">Error</h1>
      <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-8 text-base">Something went wrong.</p>
      <button
        onClick={reset}
        className="border-mono-border dark:border-dark-mono-border text-mono-text-muted dark:text-dark-mono-text-muted bg-mono-bg dark:bg-dark-mono-bg hover:bg-mono-card dark:hover:bg-dark-mono-card hover:text-mono-text dark:hover:text-dark-mono-text rounded border px-6 py-2 text-sm transition"
      >
        Try Again
      </button>
    </div>
  );
}
