'use client';

import Logo from './Logo';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex grow flex-col gap-2">
        <div className="bg-accent-one h-4"></div>
        <div className="bg-accent-two h-4"></div>
        <div className="bg-accent-three h-4"></div>
        <div className="bg-accent-four h-4"></div>
      </div>
      <Logo className="h-[88px]" />
      <div className="grow"></div>
    </div>
  );
}
