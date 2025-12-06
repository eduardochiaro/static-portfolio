import Link from 'next/link';

export default function Bio({ bio }: { bio: readonly string[] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-6 text-lg font-medium tracking-widest uppercase">About Me</h2>
      <div className="text-mono-text-muted dark:text-dark-mono-text-muted max-w-3xl space-y-4 text-base leading-relaxed">
        {bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/resume"
          className="border-mono-border dark:border-dark-mono-border text-mono-text-muted dark:text-dark-mono-text-muted bg-mono-bg dark:bg-dark-mono-bg hover:bg-mono-card dark:hover:bg-dark-mono-card hover:text-mono-text dark:hover:text-dark-mono-text rounded border px-6 py-2 text-sm transition"
        >
          View Full Resume
        </Link>
      </div>
    </section>
  );
}
