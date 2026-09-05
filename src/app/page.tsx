import Bio from '@/components/Bio';
import ButtonLink from '@/components/ButtonLink';
import Experience from '@/components/Experience';
import FeaturedProject from '@/components/FeaturedProject';
import Hero from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import Projects from '@/components/Projects';
import SectionHeading from '@/components/SectionHeading';
import Skills from '@/components/Skills';
import homeData from '@/data/home.json';
import metaData from '@/data/metadata.json';
import resumeData from '@/data/resume.json';
import { getNotes } from '@/lib/notes';
import { shortSha } from '@/lib/sha';
import Link from 'next/link';

const LATEST_NOTES = 3;

export default function Home() {
  const { hero, bio, projects, featuredProject } = homeData;
  const { skills, experience } = resumeData;
  const page = metaData.home;
  const notes = getNotes();
  const head = shortSha(`${hero.name}${experience[0]?.startDate ?? ''}`);

  return (
    <PageLayout branch={page.branch}>
      <Hero title={`${page.heroTitle} · ${head}`} name={hero.name} oneLine>
        <p>{hero.slogan}</p>
      </Hero>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <Experience experience={experience} compact heading={page.experienceHeading} limit={1} />
        <div className="mt-6">
          <ButtonLink href="/resume">{page.experienceLink}</ButtonLink>
        </div>
      </section>

      <Bio bio={bio} />
      <Skills skills={skills} columns={2} />
      <FeaturedProject {...featuredProject} />
      <Projects projects={projects} />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading className="mb-5" meta={`${notes.length} entries`}>
          {page.notesHeading}
        </SectionHeading>
        <ul className="text-sm leading-loose">
          {notes.slice(0, LATEST_NOTES).map((note) => (
            <li key={note.slug}>
              <Link href={`/notes/${note.slug}`} className="group flex flex-wrap items-baseline gap-x-4 py-1">
                <span className="text-sha">{shortSha(note.slug)}</span>
                <time dateTime={note.date} className="text-mono-text-muted">
                  {note.date}
                </time>
                <span className="group-hover:text-accent transition">{note.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
