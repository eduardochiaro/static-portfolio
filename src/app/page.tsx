'use client';

import Bio from '@/components/Bio';
import Divider from '@/components/Divider';
import FeaturedProject from '@/components/FeaturedProject';
import Hero from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import homeData from '@/data/home.json';
import resumeData from '@/data/resume.json';

export default function Home() {
  const { hero, bio, projects, featuredProject } = homeData;
  const { skills } = resumeData;

  return (
    <PageLayout section="Portfolio">
      <Hero title={hero.title} name={hero.name} slogan={hero.slogan} />
      <Divider />
      <Bio bio={bio} />
      <Skills skills={skills} />
      <FeaturedProject {...featuredProject} />
      <Projects projects={projects} />
    </PageLayout>
  );
}
