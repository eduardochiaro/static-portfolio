import { ReactNode } from 'react';
import Typewriter from './Typewriter';

export type HeroProps = {
  readonly title: string;
  readonly name: string;
  readonly children?: ReactNode;
};

export default function Hero({ title, name, children }: HeroProps) {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6 pt-8 pb-10 sm:pt-16">
      <p className="text-accent mb-5 text-xs tracking-[0.2em] uppercase">{title}</p>
      <h1 className="mb-6 flex flex-col text-5xl leading-[1.06] font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
        <Typewriter text={name} useTextColor />
      </h1>
      {children && <div className="text-mono-text-muted max-w-2xl font-sans text-lg leading-relaxed">{children}</div>}
    </section>
  );
}
