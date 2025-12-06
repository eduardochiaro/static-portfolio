'use client';

import Link from 'next/link';

export type GitHubType = {
  name: string;
  link: string;
  description: string;
  tags: readonly string[];
};

export default function GitHub({ repos }: { repos: readonly GitHubType[] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-lg font-medium tracking-widest uppercase">GitHub Showcase</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {repos.map((item, index) => (
          <div key={index} className="border-mono-border dark:border-dark-mono-border relative rounded border p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono-text-muted dark:text-dark-mono-text-muted hover:text-mono-text dark:hover:text-dark-mono-text absolute top-3 right-3 text-xs whitespace-nowrap transition hover:underline"
              >
                View on GitHub
              </Link>
            </div>
            <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-4 text-sm">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="border-mono-border dark:border-dark-mono-border rounded-xs border px-2 py-0.5 text-xs">
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
