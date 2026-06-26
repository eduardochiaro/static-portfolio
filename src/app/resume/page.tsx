'use client';

import Awards from '@/components/resume/Awards';
import Divider from '@/components/Divider';
import Experience from '@/components/Experience';
import GithubIcon from '@/components/icons/Github';
import Languages from '@/components/resume/Languages';
import PageLayout from '@/components/PageLayout';
import SkillsSidebar from '@/components/resume/SkillsSidebar';
import SectionHeading from '@/components/SectionHeading';
import { Mail as MailIcon, MapPinHouse as MapPinHouseIcon } from '@react-zero-ui/icon-sprite';
import resumeData from '@/data/resume.json';
import Hero from '@/components/Hero';

export default function Resume() {
  const { personalInfo, skills, summary, experience, languages, awards } = resumeData;

  return (
    <PageLayout section="Resume">
      <Hero name={personalInfo.name} title={personalInfo.role}>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <p className="flex items-center gap-2">
            <MailIcon className="inline-block h-4 w-4" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-accent dark:hover:text-dark-accent transition">
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
      </Hero>

      <Divider />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading className="mb-6">Summary</SectionHeading>
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
