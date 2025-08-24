'use client';

import Bio from '@/components/Bio';
import ClickSpark from '@/components/ClickSpark';
import Footer, { FooterProps } from '@/components/Footer';
import GitHub, { GitHubType } from '@/components/GitHub';
import Header from '@/components/Header';
import Hero, { HeroProps } from '@/components/Hero';
import Lines from '@/components/Lines';
import Loading from '@/components/Loading';
import Projects, { ProjectType } from '@/components/Projects';
import SideScroll from '@/components/resume/SideScroll';
import Skills, { SkillType } from '@/components/Skills';
import { useState, useEffect } from 'react';

type HomeType = {
  hero: HeroProps;
  bio: string[];
  skills: SkillType[];
  projects: ProjectType[];
  github: GitHubType[];
  footer: FooterProps;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState<HomeType['skills']>([]);
  const [projects, setProjects] = useState<HomeType['projects']>([]);
  const [hero, setHero] = useState<HomeType['hero']>({ title: '', name: '', slogan: '' });
  const [bio, setBio] = useState<HomeType['bio']>([]);
  const [github, setGithub] = useState<HomeType['github']>([]);
  const [footer, setFooter] = useState<HomeType['footer']>({ text: '', links: [] });
  // Load data asynchronously
  useEffect(() => {
    loadData().then((data) => {
      setHero(data.hero);
      setBio(data.bio);
      setSkills(data.skills);
      setProjects(data.projects);
      setGithub(data.github);
      setFooter(data.footer);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ClickSpark sparkColor="#e83a63" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
          <Header name={hero.name} />
          <Hero title={hero.title} name={hero.name} slogan={hero.slogan} />
          <Lines />
          <Bio bio={bio} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <GitHub repos={github} />
          <SideScroll />
          <Lines />
          <Footer text={footer.text} links={footer.links} />
        </ClickSpark>
      )}
    </>
  );
}

const loadData = async () => {
  const response = await fetch('static/home.json', { next: { revalidate: 3600 } });
  const data = await response.json();

  return data as HomeType;
};
