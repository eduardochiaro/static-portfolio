'use client';

import Awards from '@/components/resume/Awards';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GithubIcon from '@/components/icons/Github';
import Languages from '@/components/resume/Languages';
import SkillsSidebar from '@/components/resume/SkillsSidebar';
import { MailIcon, MapPinHouse } from 'lucide-react';
import resumeData from '@/data/resume.json';
import ClickSpark from '@/components/ClickSpark';

export default function Resume() {
  const { personalInfo, skills, summary, experience, languages, awards, footer } = resumeData;

  return (
    <div className="min-h-screen">
      <ClickSpark sparkColor="#e83a63" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <Header name={personalInfo.name} section="Resume" />

        <main role="main">
          <section className="mx-auto mt-20 max-w-5xl px-6 pt-16 pb-12">
            <div className="fade-in">
              <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-2 text-sm tracking-widest uppercase">{personalInfo.role}</p>
              <h1 className="mb-6 flex flex-col text-6xl leading-tight font-semibold tracking-tight">
                {personalInfo.name.split(' ').map((word, idx) => (
                  <span key={idx}>{word}</span>
                ))}
              </h1>
              <div className="text-mono-text-muted dark:text-dark-mono-text-muted flex flex-col gap-4 text-sm md:flex-row md:gap-8">
                <p className="flex items-center gap-2">
                  <MailIcon className="inline-block h-4 w-4" />
                  {personalInfo.email}
                </p>
                <p className="flex items-center gap-2">
                  <MapPinHouse className="inline-block h-4 w-4" />
                  {personalInfo.location}
                </p>
                <p className="flex items-center gap-2">
                  <GithubIcon className="inline-block h-4 w-4" />
                  {personalInfo.github}
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mx-auto max-w-5xl px-6">
            <div className="border-mono-border dark:border-dark-mono-border border-t"></div>
          </div>

          <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="mb-6 text-lg font-medium tracking-widest uppercase">Summary</h2>
            <p className="text-mono-text-muted dark:text-dark-mono-text-muted max-w-3xl text-base leading-relaxed">{summary}</p>
          </section>

          <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 md:flex-row">
            <div className="md:w-2/3">
              <Experience experience={experience} />
            </div>
            <div className="md:w-1/3">
              <SkillsSidebar skills={skills} />
              <Awards awards={awards} />
              <Languages languages={languages} />
            </div>
          </div>
        </main>
        <Footer text={footer.text} links={footer.links} />
      </ClickSpark>
    </div>
  );
}
