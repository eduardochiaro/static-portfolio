'use client';

import Bio from '@/components/Bio';
import ClickSpark from '@/components/ClickSpark';
import Footer from '@/components/Footer';
import GitHub from '@/components/GitHub';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import homeData from '@/data/home.json';

export default function Home() {
  const { hero, bio, skills, projects, github, footer } = homeData;

  return (
    <div className="min-h-screen">
      <ClickSpark sparkColor="#e83a63" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <Header name={hero.name} section="Portfolio" />
        <main role="main">
          <Hero title={hero.title} name={hero.name} slogan={hero.slogan} />

          {/* Divider */}
          <div className="mx-auto max-w-5xl px-6">
            <div className="border-mono-border dark:border-dark-mono-border border-t"></div>
          </div>

          <Bio bio={bio} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <GitHub repos={github} />
        </main>
        <Footer text={footer.text} links={footer.links} />
      </ClickSpark>
    </div>
  );
}
