import Typewriter from '@/components/Typewriter';
import type { ReactNode } from 'react';

type ErrorScreenProps = {
  readonly code: string;
  readonly message: string;
  readonly children: ReactNode;
};

export default function ErrorScreen({ code, message, children }: ErrorScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-6xl font-semibold tracking-tight">
        <Typewriter text={code} className="text-accent" />
      </h1>
      <p className="text-mono-text-muted mb-8 text-base">{message}</p>
      {children}
    </div>
  );
}
