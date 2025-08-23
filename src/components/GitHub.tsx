'use client';

import Link from 'next/link';

export type GitHubType = {
  name: string;
  link: string;
  description: string;
  tags: string[];
};

export default function GitHub({ repos }: { repos: GitHubType[] }) {
  return (
    <section className="z-50 mx-auto my-16 max-w-4xl px-4 md:px-0">
      <h2 className="border-accent-four dark:border-dark-accent-four mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">GitHub Showcase</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {repos.map((item, index) => (
          <div key={index}>
            <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <Link href={item.link} className="text-accent-four dark:text-dark-accent-four hover:underline md:text-xs">
                View on GitHub
              </Link>
            </div>
            <div className="mb-4 text-sm">{item.description}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-dark-main text-main dark:bg-main dark:text-dark-main px-2 py-1 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
