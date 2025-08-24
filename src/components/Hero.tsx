// Removed unused Image import

export type HeroProps = {
  title?: string;
  name?: string;
  slogan?: string;
};

export default function Hero({ title = '', name = '', slogan = '' }: HeroProps) {
  return (
    <section className="relative z-50 mx-auto max-w-4xl overflow-hidden px-4 pt-16 pb-24 md:px-0">
      <h2 className="text-lg font-semibold">{title}</h2>
      <h1 className="mb-4 flex flex-col text-8xl leading-none font-semibold uppercase">
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
    </section>
  );
}
