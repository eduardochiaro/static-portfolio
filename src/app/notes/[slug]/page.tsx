import PageLayout from '@/components/PageLayout';
import { formatFullDate } from '@/lib/date';
import { getNote, getNotes } from '@/lib/notes';
import { ArrowLeft as ArrowLeftIcon } from 'lucide-react';
import { marked } from 'marked';
import type { Metadata } from 'next';
import Link from 'next/link';

type NotePageProps = {
  readonly params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getNotes().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  return { title: note.title };
}

export default async function Note({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNote(slug);
  const html = await marked.parse(note.content);

  return (
    <PageLayout section="Field Notes">
      <article className="mx-auto mt-20 max-w-3xl px-6 pt-16 pb-24">
        <Link
          href="/notes"
          className="text-mono-text-muted dark:text-dark-mono-text-muted hover:text-accent dark:hover:text-dark-accent inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeftIcon className="size-4" /> Field Notes
        </Link>
        <header className="fade-in mt-8 mb-10">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight">{note.title}</h1>
          <time dateTime={note.date} className="text-mono-text-muted dark:text-dark-mono-text-muted mt-3 block text-sm">
            {formatFullDate(note.date)}
          </time>
        </header>
        <div className="note-body" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </PageLayout>
  );
}
