import Image from 'next/image';
import Lines from './Lines';
import Link from 'next/link';
import { FileUserIcon } from 'lucide-react';

export default function Bio() {
  return (
    <>
      <section className="relative z-50 mx-auto max-w-4xl overflow-hidden px-4 pt-16 pb-24 md:px-0">
        <p className="text-lg font-semibold">Full Stack Developer</p>
        <h1 className="mb-4 flex flex-col text-6xl leading-none font-semibold uppercase">
          <span>Eduardo</span> <span>Chiaro</span>
        </h1>
        <p className="max-w-lg text-lg">Building scalable web applications with modern tools and technologies.</p>
        <Image
          src="static/sun.svg"
          alt="sun"
          width="400"
          height="400"
          className="absolute top-0 -z-50 w-full animate-spin opacity-40"
          style={{ animationDuration: '15s' }}
        />
      </section>
      <Lines />
      <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
        <h2 className="border-retro-orange dark:border-dark-orange mb-6 -ml-6 border-l-4 pl-4 text-xl font-bold uppercase">About Me</h2>
        <p className="mb-4">
          Hi, I&lsquo;m Full Stack Developer who loves building things that work well and make life easier. I&lsquo;ve spent years turning ideas into reliable,
          thoughtful software, always with a focus on clean code, clear goals, and real-world impact. I enjoy working on projects where I can simplify
          complexity and bring a calm, practical mindset to solving tough problems.
        </p>
        <p className="mb-6">
          I&lsquo;m most at home working across the stack with tools like Node.js, TypeScript, React, and PHP, often in cloud environments like AWS. Beyond the
          code, I care about good communication, collaboration, and keeping things human—even in tech. Whether I&lsquo;m refining a backend system or improving
          a user experience, I aim to build software that&lsquo;s not just functional, but genuinely useful.
        </p>
        <Link
          href="/resume"
          className="bg-retro-text dark:bg-dark-text text-retro-bg dark:text-dark-bg hover:bg-retro-magenta dark:hover:bg-dark-magenta mt-2 inline-flex items-center gap-2 px-4 py-2 transition-colors"
        >
          <FileUserIcon className="h-4" />
          View Full Resume
        </Link>
      </section>
    </>
  );
}
