'use client';

import ClickSpark from '@/components/ClickSpark';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import metaData from '@/data/metadata.json';
import type { ReactNode } from 'react';

type PageLayoutProps = {
  readonly section?: string;
  readonly children: ReactNode;
};

export default function PageLayout({ section, children }: PageLayoutProps) {
  const { header, footer } = metaData;

  return (
    <ClickSpark>
      <div className="min-h-screen">
        <Header name={header.title} pages={header.pages} section={section} />
        <main id="main">{children}</main>
        <Footer text={footer.text} links={footer.links} />
      </div>
    </ClickSpark>
  );
}
