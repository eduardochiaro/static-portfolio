'use client';

import Awards from '@/components/resume/Awards';
import ClickSpark from '@/components/ClickSpark';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GithubIcon from '@/components/icons/Github';
import Languages from '@/components/resume/Languages';
import Lines from '@/components/Lines';
import SideScroll from '@/components/resume/SideScroll';
import SkillsSidebar from '@/components/resume/SkillsSidebar';
import { MailIcon, MapPinHouse } from 'lucide-react';
import { resumeData } from '@/data/resume';

export default function Resume() {
  const { personalInfo, skills, summary, experience, languages, awards, footer } = resumeData;

  return (
    <ClickSpark sparkColor="#e83a63" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <Header name={`${personalInfo.name}'s Resume`} goBack="/" />
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-0">
        <p className="text-lg font-semibold">{personalInfo.role}</p>
        <h1 className="mb-4 flex flex-col text-8xl leading-none font-semibold uppercase">
          {personalInfo.name.split(' ').map((word, idx) => (
            <span key={idx}>{word}</span>
          ))}
        </h1>
        <div className="flex flex-col gap-14 md:flex-row">
          <p className="flex items-center gap-2">
            <MailIcon className="text-accent-three dark:text-dark-accent-three inline-block size-6" />
            {personalInfo.email}
          </p>
          <p className="flex items-center gap-2">
            <MapPinHouse className="text-accent-four dark:text-dark-accent-four inline-block size-6" />
            {personalInfo.location}
          </p>
          <p className="flex items-center gap-2">
            <GithubIcon className="text-accent-two dark:text-dark-accent-two inline-block size-6" />
            {personalInfo.github}
          </p>
        </div>
      </section>
      <Lines />
      <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
        <h2 className="border-accent-one dark:border-dark-accent-one mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6 md:text-base">Summary</h2>
        <p className="mb-4">{summary}</p>
      </section>

      <div className="mx-auto flex max-w-4xl flex-col gap-2 text-sm md:flex-row md:gap-20">
        <div className="md:w-2/3">
          <Experience experience={experience} />
        </div>
        <div className="mt-16 md:mt-0 md:w-1/3">
          <SkillsSidebar skills={skills} />
          <Awards awards={awards} />
          <Languages languages={languages} />
        </div>
      </div>
      <SideScroll />
      <Lines />
      <Footer text={footer.text} links={footer.links} />
    </ClickSpark>
  );
}
