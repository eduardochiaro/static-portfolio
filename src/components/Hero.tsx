import { ReactNode } from 'react';
import Typewriter from './Typewriter';

export type HeroProps = {
  readonly title: string;
  readonly name: string;
  readonly children?: ReactNode;
  /** Keep the heading on one line — for page titles that are not a person's name */
  readonly oneLine?: boolean;
};

export default function Hero({ title, name, children, oneLine = false }: HeroProps) {
  const words = name.trim().split(' ');
  const lastName = !oneLine && words.length > 1 ? words.pop()! : '';
  const firstName = words.join(' ');

  return (
    <section className="mx-auto mt-16 max-w-6xl px-6 pt-16 pb-10">
      <p className="text-accent mb-5 text-xs tracking-[0.2em] uppercase">{title}</p>
      <h1 className="mb-6 flex flex-col text-5xl leading-[1.06] font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
        {oneLine ? <Typewriter text={name} useTextColor /> : firstName && <span>{firstName}</span>}
        {lastName && <Typewriter text={lastName} useTextColor />}
      </h1>
      {children && <div className="text-mono-text-muted max-w-2xl font-sans text-lg leading-relaxed">{children}</div>}
    </section>
  );
}
