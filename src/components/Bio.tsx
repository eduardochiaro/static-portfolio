import metaData from '@/data/metadata.json';

export default function Bio({ bio }: { bio: readonly string[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="border-mono-border bg-mono-card overflow-hidden rounded border">
        <div className="border-mono-border text-mono-text-muted flex items-center justify-between border-b px-4 py-2.5 text-sm">
          <span>{metaData.sections.bio}</span>
          <span className="text-accent">+{bio.length}</span>
        </div>
        <div>
          {bio.map((paragraph, index) => (
            <div key={paragraph} className="bg-accent/6 grid grid-cols-[30px_1fr] py-1.5 sm:grid-cols-[52px_1fr]">
              <span className="text-mono-text-muted pr-2 text-right text-sm sm:pr-3.5">{index + 1}</span>
              <p className="text-mono-text pr-4 pl-2 font-sans text-base leading-relaxed sm:pl-3.5">
                <span className="text-accent mr-2 font-mono">+</span>
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
