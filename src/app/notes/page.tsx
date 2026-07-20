import PageLayout from '@/components/PageLayout';
import Typewriter from '@/components/Typewriter';
import metaData from '@/data/metadata.json';
import { formatFullDate } from '@/lib/date';
import { getNotes } from '@/lib/notes';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: metaData.notes.title,
  description: metaData.notes.description,
};

export default function Notes() {
  const notes = getNotes();

  return (
    <PageLayout section="Field Notes">
      <section className="mx-auto mt-20 max-w-5xl px-6 pt-16 pb-12">
        <div className="fade-in">
          <h1 className="mb-6 flex flex-col text-6xl leading-tight font-semibold tracking-tight">
            <Typewriter text="Field Notes" useTextColor />
          </h1>
          <p className="text-mono-text-muted dark:text-dark-mono-text-muted text-base leading-relaxed">{metaData.notes.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <ul className="divide-mono-border dark:divide-dark-mono-border divide-y">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link href={`/notes/${note.slug}`} className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                <time dateTime={note.date} className="text-mono-text-muted dark:text-dark-mono-text-muted shrink-0 text-sm sm:w-32">
                  {formatFullDate(note.date)}
                </time>
                <span className="group-hover:text-accent dark:group-hover:text-dark-accent text-lg font-medium transition-colors">{note.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
