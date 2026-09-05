'use client';

import Typewriter from '@/components/Typewriter';
import metaData from '@/data/metadata.json';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { code, message, action } = metaData.errors.error;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-6xl font-semibold tracking-tight">
        <Typewriter text={code} className="text-accent" />
      </h1>
      <p className="text-mono-text-muted mb-8 text-base">{message}</p>
      <button
        onClick={reset}
        className="border-mono-border text-mono-text-muted bg-mono-bg hover:bg-mono-card hover:text-mono-text rounded border px-6 py-2 text-sm transition"
      >
        {action}
      </button>
    </div>
  );
}
