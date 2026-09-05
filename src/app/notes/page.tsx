import Hero from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import metaData from '@/data/metadata.json';
import { getNotes } from '@/lib/notes';
import { shortSha } from '@/lib/sha';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: metaData.notes.title,
  description: metaData.notes.description,
};

export default function Notes() {
  const notes = getNotes();
  const page = metaData.notes;
  const years = [...new Set(notes.map((note) => note.date.slice(0, 4)))];

  return (
    <PageLayout section={page.section} branch={page.branch}>
      <Hero title={page.heroTitle} name={page.heroName} oneLine>
        <p>{page.description}</p>
      </Hero>

      <section className="mx-auto max-w-6xl px-6 py-8">
        {years.map((year) => {
          const entries = notes.filter((note) => note.date.startsWith(year));
          return (
            <div key={year} className="mb-10">
              <SectionHeading className="mb-1" meta={`${entries.length} ${entries.length === 1 ? 'entry' : 'entries'}`}>
                {year}
              </SectionHeading>
              <ul>
                {entries.map((note) => (
                  <li key={note.slug} className="border-mono-rule border-b last:border-b-0">
                    <Link href={`/notes/${note.slug}`} className="group flex flex-col gap-x-5 py-5 sm:flex-row sm:items-baseline">
                      <span className="text-sha shrink-0 text-sm sm:w-20">{shortSha(note.slug)}</span>
                      <span className="group-hover:text-accent flex-1 text-xl font-medium tracking-tight transition">{note.title}</span>
                      <time dateTime={note.date} className="text-mono-text-muted shrink-0 text-sm">
                        {note.date.slice(5)}
                      </time>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </PageLayout>
  );
}
