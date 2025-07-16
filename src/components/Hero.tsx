import Image from 'next/image';

export type HeroProps = {
  title?: string;
  name?: string;
  slogan?: string;
};

export default function Hero({ title = '', name = '', slogan = '' }: HeroProps) {
  return (
    <section className="relative z-50 mx-auto max-w-4xl overflow-hidden px-4 pt-16 pb-24 md:px-0">
      <p className="text-lg font-semibold">{title}</p>
      <h1 className="mb-4 flex flex-col text-6xl leading-none font-semibold uppercase">
        {(() => {
          const [first, ...rest] = name.trim().split(' ');
          const last = rest.length ? rest.pop()! : '';
          const firstPart = [first, ...rest].join(' ');
          return (
            <>
              {firstPart && <span>{firstPart}</span>}
              {last && <span>{last}</span>}
            </>
          );
        })()}
      </h1>
      <p className="max-w-lg text-lg">{slogan}</p>
      <Image
        fetchPriority="high"
        src="static/sun.svg"
        alt="sun"
        width="400"
        height="400"
        className="absolute top-0 -z-50 hidden w-full animate-spin opacity-40 md:block dark:hidden"
        style={{ animationDuration: '15s' }}
      />
      <Image
        fetchPriority="high"
        src="static/moon.svg"
        alt="moon"
        width="400"
        height="400"
        className="absolute top-1/2 left-1/2 -z-50 mx-auto hidden w-1/2 -translate-x-1/2 animate-spin opacity-40 dark:md:block"
        style={{ animationDuration: '15s' }}
      />
    </section>
  );
}
