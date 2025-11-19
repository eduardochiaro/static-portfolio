import Link from 'next/link';
import { FileUserIcon } from 'lucide-react';

export default function Bio({ bio }: { bio: readonly string[] }) {
  return (
    <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
      <h2 className="border-accent-one dark:border-dark-accent-one mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">About Me</h2>
      {bio.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
      <Link href="/resume" className="button inline-flex items-center gap-2 py-1.5 pr-6 pl-2">
        <FileUserIcon className="h-6" />
        View Full Resume
      </Link>
    </section>
  );
}
