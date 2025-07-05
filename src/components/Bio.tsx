import Link from 'next/link';
import { FileUserIcon } from 'lucide-react';

export default function Bio() {
  return (
    <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
      <h2 className="border-retro-orange dark:border-dark-orange mb-6 -ml-6 border-l-4 pl-4 text-xl font-bold uppercase">About Me</h2>
      <p className="mb-4">
        Hi, I&lsquo;m Full Stack Developer who loves building things that work well and make life easier. I&lsquo;ve spent years turning ideas into reliable,
        thoughtful software, always with a focus on clean code, clear goals, and real-world impact. I enjoy working on projects where I can simplify complexity
        and bring a calm, practical mindset to solving tough problems.
      </p>
      <p className="mb-6">
        I&lsquo;m most at home working across the stack with tools like Node.js, TypeScript, React, and PHP, often in cloud environments like AWS. Beyond the
        code, I care about good communication, collaboration, and keeping things human—even in tech. Whether I&lsquo;m refining a backend system or improving a
        user experience, I aim to build software that&lsquo;s not just functional, but genuinely useful.
      </p>
      <Link href="/resume" className="button inline-flex items-center gap-2">
        <FileUserIcon className="h-4" />
        View Full Resume
      </Link>
    </section>
  );
}
