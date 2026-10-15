'use client';

import ErrorScreen from '@/components/ErrorScreen';
import metaData from '@/data/metadata.json';
import { useEffect } from 'react';

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  const { code, message, action } = metaData.errors.error;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorScreen code={code} message={message}>
      <button
        onClick={retry}
        className="border-mono-border text-mono-text-muted bg-mono-bg hover:bg-mono-card hover:text-mono-text active:text-mono-text rounded border px-6 py-2 text-sm transition pointer-coarse:min-h-11"
      >
        {action}
      </button>
    </ErrorScreen>
  );
}
