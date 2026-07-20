import fs from 'fs';
import path from 'path';

export type NoteType = {
  slug: string;
  date: string;
  title: string;
  content: string;
};

const NOTES_DIR = path.join(process.cwd(), 'src', 'data', 'notes');
const DATE_PREFIX = /^(\d{4}-\d{2}-\d{2})-/;

function parseFile(file: string): NoteType {
  const raw = fs.readFileSync(path.join(NOTES_DIR, file), 'utf8');
  const base = file.replace(/\.md$/, '');
  const date = base.match(DATE_PREFIX)?.[1] ?? '';
  const slug = base.replace(DATE_PREFIX, '');
  const title = raw.match(/^#\s+(.+)$/m)?.[1].trim() ?? slug;
  const content = raw.replace(/^#\s+.+$/m, '').trim();
  return { slug, date, title, content };
}

export function getNotes(): NoteType[] {
  return fs
    .readdirSync(NOTES_DIR)
    .filter((file) => file.endsWith('.md'))
    .map(parseFile)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string): NoteType {
  const note = getNotes().find((n) => n.slug === slug);
  if (!note) throw new Error(`Note not found: ${slug}`);
  return note;
}
