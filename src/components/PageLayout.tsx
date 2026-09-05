'use client';

import ClickSpark from '@/components/ClickSpark';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import metaData from '@/data/metadata.json';
import type { ReactNode } from 'react';

type PageLayoutProps = {
  readonly section?: string;
  readonly repo?: string;
  readonly branch?: string;
  readonly children: ReactNode;
};

export default function PageLayout({ section, repo, branch, children }: PageLayoutProps) {
  const { header, footer } = metaData;

  return (
    <ClickSpark>
      <div className="flex min-h-screen flex-col">
        <Header name={header.title} logo={header.logo} pages={header.pages} section={section} repo={repo} branch={branch} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer text={footer.text} links={footer.links} />
      </div>
    </ClickSpark>
  );
}
