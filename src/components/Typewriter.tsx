'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
  readonly text: string;
  readonly className?: string;
  readonly useTextColor?: boolean;
};

// ponytail: fixed timing, no caller ever overrode it. Re-add props if a caller needs different values.
const SPEED = 110;
const START_DELAY = 350;

export default function Typewriter({ text, className = '', useTextColor = false }: TypewriterProps) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    let i = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(intervalId);
      }, SPEED);
    }, START_DELAY);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [text]);

  let cursorColorClass = 'bg-accent';
  if (useTextColor) {
    cursorColorClass = ' bg-mono-text';
  }

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span aria-hidden="true" className={`cursor-blink ml-0.5 ${done ? '' : 'cursor-steady'} ${cursorColorClass}`} />
    </span>
  );
}
