import PageLayout from '@/components/PageLayout';
import metaData from '@/data/metadata.json';
import { formatFullDate } from '@/lib/date';
import { getNote, getNotes } from '@/lib/notes';
import { shortSha } from '@/lib/sha';
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
  const notes = getNotes();
  const index = notes.findIndex((note) => note.slug === slug);
  const note = getNote(slug);
  const html = await marked.parse(note.content);
  const newer = notes[index - 1];
  const older = notes[index + 1];
  const sha = shortSha(note.slug);
  const page = metaData.notes;

  return (
    <PageLayout section={page.section} branch={`${page.branch} / ${sha}`}>
      <article className="mx-auto mt-16 max-w-3xl px-6 pt-16 pb-16">
        <Link href="/notes" className="text-mono-text-muted hover:text-accent inline-flex items-center gap-2 text-sm transition-colors">
          {page.backLink}
        </Link>

        <div className="border-mono-border bg-mono-card mt-7 flex flex-wrap items-center justify-between gap-3 rounded border px-5 py-4 text-sm">
          <span className="flex items-center gap-3.5">
            <span className="text-sha">{sha}</span>
            <span className="text-mono-text-muted">
              {page.committedLabel} <time dateTime={note.date}>{formatFullDate(note.date)}</time>
            </span>
          </span>
        </div>

        <h1 className="mt-7 mb-8 text-4xl leading-tight font-semibold tracking-tighter">{note.title}</h1>
        <div className="note-body" dangerouslySetInnerHTML={{ __html: html }} />

        <nav className="mt-14 grid gap-4 sm:grid-cols-2" aria-label="Note navigation">
          <div className="border-mono-border bg-mono-card rounded border px-5 py-4">
            <p className="text-mono-text-muted mb-2 text-xs tracking-[0.2em] uppercase">{page.olderLabel}</p>
            {older ? (
              <Link href={`/notes/${older.slug}`} className="hover:text-accent font-medium tracking-tight transition">
                {older.title}
              </Link>
            ) : (
              <p className="text-mono-text-muted">{page.olderEmpty}</p>
            )}
          </div>
          <div className="border-mono-border bg-mono-card rounded border px-5 py-4 sm:text-right">
            <p className="text-mono-text-muted mb-2 text-xs tracking-[0.2em] uppercase">{page.newerLabel}</p>
            {newer ? (
              <Link href={`/notes/${newer.slug}`} className="hover:text-accent font-medium tracking-tight transition">
                {newer.title}
              </Link>
            ) : (
              <p className="text-mono-text-muted">{page.newerEmpty}</p>
            )}
          </div>
        </nav>
      </article>
    </PageLayout>
  );
}
