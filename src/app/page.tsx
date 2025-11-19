'use client';

import Bio from '@/components/Bio';
import ClickSpark from '@/components/ClickSpark';
import Footer from '@/components/Footer';
import GitHub from '@/components/GitHub';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Lines from '@/components/Lines';
import Projects from '@/components/Projects';
import SideScroll from '@/components/resume/SideScroll';
import Skills from '@/components/Skills';
import { homeData } from '@/data/home';

export default function Home() {
  const { hero, bio, skills, projects, github, footer } = homeData;

  return (
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
  );
}
