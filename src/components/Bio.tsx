import ButtonLink from './ButtonLink';
import SectionHeading from './SectionHeading';

export default function Bio({ bio }: { bio: readonly string[] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading className="mb-6">About Me</SectionHeading>
      <div className="text-mono-text-muted dark:text-dark-mono-text-muted space-y-4 text-base leading-relaxed">
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
