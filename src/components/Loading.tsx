'use client';

import Logo from './Logo';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex grow flex-col gap-2">
        <div className="bg-retro-orange h-4"></div>
        <div className="bg-retro-red h-4"></div>
        <div className="bg-retro-magenta h-4"></div>
        <div className="bg-retro-purple h-4"></div>
      </div>
      <Logo className="h-[88px]" />
      <div className="grow"></div>
    </div>
  );
}
