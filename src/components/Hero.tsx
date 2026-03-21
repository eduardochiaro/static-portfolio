export type HeroProps = {
  title?: string;
  name?: string;
  slogan?: string;
};

export default function Hero({ title = '', name = '', slogan = '' }: HeroProps) {
  const words = name.trim().split(' ');
  const lastName = words.length > 1 ? words.pop()! : '';
  const firstName = words.join(' ');

  return (
    <section className="mx-auto mt-20 max-w-5xl px-6 pt-16 pb-12">
      <div className="fade-in">
        <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-2 text-sm tracking-widest uppercase">{title}</p>
        <h1 className="mb-6 flex flex-col text-6xl leading-tight font-semibold tracking-tight">
          {firstName && <span>{firstName}</span>}
          {lastName && <span>{lastName}</span>}
        </h1>
        <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-6 max-w-2xl text-base leading-relaxed">{slogan}</p>
      </div>
    </section>
  );
}
