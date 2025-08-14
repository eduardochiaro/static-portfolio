'use client';

import Awards, { AwardsType } from '@/components/Awards';
import ClickSpark from '@/components/ClickSpark';
import Experience, { ExperienceType } from '@/components/Experience';
import Footer, { FooterProps } from '@/components/Footer';
import Header from '@/components/Header';
import Languages, { LanguageType } from '@/components/Languages';
import Lines from '@/components/Lines';
import Loading from '@/components/Loading';
import SideScroll from '@/components/SideScroll';
import { SkillType } from '@/components/Skills';
import SkillsSidebar from '@/components/SkillsSidebar';
import { GithubIcon, MailIcon, MapPinHouse } from 'lucide-react';
import { useEffect, useState } from 'react';

type ResumeType = {
  personalInfo: {
    name: string;
    email: string;
    location: string;
    github: string;
    role: string;
  };
  skills: SkillType[];
  summary: string;
  experience: ExperienceType[];
  languages: LanguageType[];
  awards: AwardsType[];
  footer: FooterProps;
};

export default function Remote() {
  const [isLoading, setIsLoading] = useState(true);
  const [personalInfo, setPersonalInfo] = useState<ResumeType['personalInfo']>({
    name: '',
    email: '',
    location: '',
    github: '',
    role: '',
  });
  const [skills, setSkills] = useState<ResumeType['skills']>([]);
  const [summary, setSummary] = useState<string>('');
  const [experience, setExperience] = useState<ResumeType['experience']>([]);
  const [languages, setLanguages] = useState<ResumeType['languages']>([]);
  const [awards, setAwards] = useState<ResumeType['awards']>([]);
  const [footer, setFooter] = useState<ResumeType['footer']>({ text: '', links: [] });
  // Load data asynchronously
  useEffect(() => {
    let mounted = true;
    loadData().then((response: ResumeType) => {
      if (!mounted) return;
      setPersonalInfo(response.personalInfo);
      setSkills(response.skills);
      setSummary(response.summary);
      setExperience(response.experience);
      setLanguages(response.languages);
      setAwards(response.awards);
      setFooter(response.footer);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
                <MailIcon className="text-retro-magenta dark:text-dark-magenta inline-block size-6" />
                {personalInfo.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPinHouse className="text-retro-purple dark:text-dark-purple inline-block size-6" />
                {personalInfo.location}
              </p>
              <p className="flex items-center gap-2">
                <GithubIcon className="text-retro-red dark:text-dark-red inline-block size-6" />
                {personalInfo.github}
              </p>
            </div>
          </section>
          <Lines />
          <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
            <h2 className="border-retro-orange dark:border-dark-orange mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Summary</h2>
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
      )}
    </>
  );
}

const loadData = async (): Promise<ResumeType> => {
  const response = await fetch('../static/resume.json', { next: { revalidate: 3600 } });
  const data = await response.json();

  return data as ResumeType;
};
