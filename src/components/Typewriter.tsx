import type { CSSProperties } from 'react';

type TypewriterProps = {
  readonly text: string;
  readonly className?: string;
};

// Every character ships in the HTML and is visible by default; `.tw-char` in globals.css only
// hides each one until its turn. No JS, no hydration wait, and reduced motion shows the text at once.
export default function Typewriter({ text, className = '' }: TypewriterProps) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {[...text].map((char, index) => (
          <span key={index} className="tw-char" style={{ '--i': index } as CSSProperties}>
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}
