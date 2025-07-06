'use client';

import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Lines from '@/components/Lines';
import Loading from '@/components/Loading';
import Projects from '@/components/Projects';
import SideScroll from '@/components/SideScroll';
//import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  // Load data asynchronously
  useEffect(() => {
    loadData().then((data) => {
      setSkills(data.skills);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header name="" />
          <Hero />
          <Lines />
          <Bio />
          <Skills skills={skills} />
          <Projects />
          <SideScroll />
          <Lines />
          <Footer />
        </>
      )}
    </>
  );
}

const loadData = async () => {
  // load data from an API or perform any asynchronous operation
  const response = await fetch('static/skills.json');
  const skills = await response.json();

  return { skills };
};
