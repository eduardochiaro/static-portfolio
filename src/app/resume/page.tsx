'use client';

import Awards from '@/components/Awards';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Languages from '@/components/Languages';
import Lines from '@/components/Lines';
import Loading from '@/components/Loading';
import SkillsSidebar from '@/components/SkillsSidebar';
import { Award } from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';

type ResumeType = {
  personalInfo: {
    name: string;
    email: string;
    location: string;
    github: string;
    role: string;
  };
  skills: { name: string; level: string }[];
  summary: string;
  experience: {
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    responsibilities: string[];
    tags: string[];
  }[];
  languages: { name: string; level: string }[];
  awards: { title: string; date: string }[];
};

export default function Remote() {
  const [isLoading, setIsLoading] = useState(true);
  const [personalInfo, setPersonalInfo] = useState<{
    name: string;
    email: string;
    location: string;
    github: string;
    role: string;
  }>({
    name: 'Alex Coder',
    email: '',
    location: 'San Francisco, CA',
    github: 'github.com/alexcoder',
    role: 'Full Stack Developer',
  });
  const [skills, setSkills] = useState<{ name: string; level: string }[]>([]);
  const [summary, setSummary] = useState<string>('');
  const [experience, setExperience] = useState<
    {
      company: string;
      position: string;
      location: string;
      startDate: string;
      endDate: string;
      description: string;
      responsibilities: string[];
      tags: string[];
    }[]
  >([]);
  const [languages, setLanguages] = useState<{ name: string; level: string }[]>([]);
  const [awards, setAwards] = useState<{ title: string; date: string }[]>([]);
  // Load data asynchronously
  loadData().then((response: ResumeType) => {
    setPersonalInfo(response.personalInfo);
    setSkills(response.skills);
    setSummary(response.summary);
    setExperience(response.experience);
    setLanguages(response.languages);
    setAwards(response.awards);
    setIsLoading(false);
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header name="Resume" goBack="/" />
          <section className="mx-auto max-w-4xl px-4 py-16 md:px-0">
            <p className="text-lg font-semibold">{personalInfo.role}</p>
            <h1 className="mb-4 flex flex-col text-6xl leading-none font-semibold uppercase">
              {personalInfo.name.split(' ').map((word, idx) => (
                <span key={idx}>{word}</span>
              ))}
            </h1>
            <div className="flex flex-col gap-4 md:flex-row">
              <p>
                <span className="opacity-60">Email:</span> {personalInfo.email}
              </p>
              <p>
                <span className="opacity-60">Location:</span> {personalInfo.location}
              </p>
              <p>
                <span className="opacity-60">GitHub:</span> {personalInfo.github}
              </p>
            </div>
          </section>
          <Lines />
          <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
            <h2 className="border-retro-orange dark:border-dark-orange mb-6 -ml-6 border-l-4 pl-4 text-xl font-bold uppercase">Summary</h2>
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
          <Footer />
        </>
      )}
    </>
  );
}

const loadData = async (): Promise<ResumeType> => {
  // load data from an API or perform any asynchronous operation
  const response = await fetch('/static/resume.json');
  const data = await response.json();

  // Assume the JSON has the correct structure for ResumeType
  return data as ResumeType;
};
