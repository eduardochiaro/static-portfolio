import ButtonLink from './ButtonLink';

export default function Bio({ bio }: { bio: readonly string[] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-6 font-mono text-lg font-medium tracking-widest uppercase">About Me</h2>
      <div className="text-mono-text-muted dark:text-dark-mono-text-muted max-w-3xl space-y-4 text-base leading-relaxed">
        {bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink href="/resume">View Full Resume</ButtonLink>
      </div>
    </section>
  );
}
