export type HeroProps = {
  title?: string;
  name?: string;
  slogan?: string;
};

export default function Hero({ title = '', name = '', slogan = '' }: HeroProps) {
  return (
    <section className="mx-auto mt-20 max-w-5xl px-6 pt-16 pb-12">
      <div className="fade-in">
        <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-2 text-sm tracking-widest uppercase">{title}</p>
        <h1 className="mb-6 flex flex-col text-6xl leading-tight font-semibold tracking-tight">
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
        <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-6 max-w-2xl text-base leading-relaxed">{slogan}</p>
      </div>
    </section>
  );
}
