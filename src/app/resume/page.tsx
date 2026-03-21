'use client';

import Awards from '@/components/resume/Awards';
import Divider from '@/components/Divider';
import Experience from '@/components/Experience';
import GithubIcon from '@/components/icons/Github';
import Languages from '@/components/resume/Languages';
import PageLayout from '@/components/PageLayout';
import SkillsSidebar from '@/components/resume/SkillsSidebar';
import { Mail as MailIcon, MapPinHouse as MapPinHouseIcon } from '@react-zero-ui/icon-sprite';
import resumeData from '@/data/resume.json';

export default function Resume() {
  const { personalInfo, skills, summary, experience, languages, awards } = resumeData;

  return (
    <PageLayout section="Resume">
      <section className="mx-auto mt-20 max-w-5xl px-6 pt-16 pb-12">
        <div className="fade-in">
          <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-2 text-sm tracking-widest uppercase">{personalInfo.role}</p>
          <h1 className="mb-6 flex flex-col text-6xl leading-tight font-semibold tracking-tight">
            {personalInfo.name.split(' ').map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h1>
          <div className="text-mono-text-muted dark:text-dark-mono-text-muted flex flex-col gap-4 text-sm md:flex-row md:gap-8">
            <p className="flex items-center gap-2">
              <MailIcon className="inline-block h-4 w-4" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-mono-text dark:hover:text-dark-mono-text transition">
                {personalInfo.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPinHouseIcon className="inline-block h-4 w-4" />
              {personalInfo.location}
            </p>
            <p className="flex items-center gap-2">
              <GithubIcon className="inline-block h-4 w-4" />
              {personalInfo.github}
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-lg font-medium tracking-widest uppercase">Summary</h2>
        <p className="text-mono-text-muted dark:text-dark-mono-text-muted text-base leading-relaxed">{summary}</p>
      </section>

      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 md:flex-row">
        <div className="md:w-2/3">
          <Experience experience={experience} />
        </div>
        <div className="md:w-1/3">
          <SkillsSidebar skills={skills} />
          <Languages languages={languages} />
          <Awards awards={awards} />
        </div>
      </div>
    </PageLayout>
  );
}
