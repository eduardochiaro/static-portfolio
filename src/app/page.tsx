'use client';

import Bio from '@/components/Bio';
import ClickSpark from '@/components/ClickSpark';
import FeaturedProject from '@/components/FeaturedProject';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import metaData from '@/data/metadata.json';
import homeData from '@/data/home.json';
import resumeData from '@/data/resume.json';

export default function Home() {
  const { hero, bio, projects, featuredProject } = homeData;
  const { skills } = resumeData;
  const { header, footer } = metaData;

  return (
    <ClickSpark sparkColor="#e83a63" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="min-h-screen">
        <Header name={header.title} pages={header.pages} section="Portfolio" />
        <main id="main">
          <Hero title={hero.title} name={hero.name} slogan={hero.slogan} />

          {/* Divider */}
          <div className="mx-auto max-w-5xl px-6">
            <div className="border-mono-border dark:border-dark-mono-border border-t"></div>
          </div>

          <Bio bio={bio} />
          <Skills skills={skills} />
          <FeaturedProject {...featuredProject} />
          <Projects projects={projects} />
        </main>
        <Footer text={footer.text} links={footer.links} />
      </div>
    </ClickSpark>
  );
}
