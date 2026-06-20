'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
  readonly text: string;
  readonly className?: string;
  /** Milliseconds between characters */
  readonly speed?: number;
  /** Delay before typing starts, in milliseconds */
  readonly startDelay?: number;
  readonly useTextColor?: boolean;
};

export default function Typewriter({ text, className = '', speed = 110, startDelay = 350, useTextColor = false }: TypewriterProps) {
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
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  let cursorColorClass = 'bg-accent dark:bg-dark-accent';
  if (useTextColor) {
    cursorColorClass = ' bg-mono-text dark:bg-dark-mono-text';
  }

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span aria-hidden="true" className={`cursor-blink ml-0.5 ${done ? '' : 'cursor-steady'} ${cursorColorClass}`} />
    </span>
  );
}
