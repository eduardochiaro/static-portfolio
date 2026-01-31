'use client';

import ButtonLink from '@/components/ButtonLink';
import ClickSpark from '@/components/ClickSpark';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import metaData from '@/data/metadata.json';
import pebbleData from '@/data/pebble.json';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';

const imageSizesBasedOnType = (type: string, returnValue: 'w' | 'h') => {
  switch (type) {
    case 'basalt':
      return returnValue === 'w' ? 144 : 168;
    case 'chalk':
      return returnValue === 'w' ? 180 : 180;
    case 'emery':
      return returnValue === 'w' ? 200 : 228;
  }
};

export default function Pebble() {
  const { hero, sections } = pebbleData;
  const { header, footer } = metaData;

  return (
    <ClickSpark sparkColor="#e83a63" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="min-h-screen">
        <Header name={header.title} pages={header.pages} section="Pebble" />
        <main role="main">
          <section className="mx-auto mt-20 max-w-5xl px-6 pt-16 pb-12">
            <div className="fade-in">
              <h1 className="mb-6 flex flex-col text-6xl leading-tight font-semibold tracking-tight">{hero.title}</h1>
              <p className="text-mono-text-muted dark:text-dark-mono-text-muted max-w-3xl text-base leading-relaxed">{hero.description}</p>
            </div>
          </section>

          {/* Divider */}
          <div className="mx-auto max-w-5xl px-6">
            <div className="border-mono-border dark:border-dark-mono-border border-t"></div>
          </div>

          {sections.map((section, idx) => (
            <section className="mx-auto max-w-5xl px-6 py-16" key={idx}>
              <h2 className="mb-6 text-lg font-medium tracking-widest uppercase">{section.title}</h2>
              <p className="text-mono-text-muted dark:text-dark-mono-text-muted max-w-3xl text-base leading-relaxed">{section.content}</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                {section.watchfaces?.map((watchface, wIdx) => (
                  <div key={wIdx} className="flex flex-col items-center gap-4">
                    <div className={`pebble ${watchface.type}`}>
                      <Image
                        src={watchface.image}
                        alt={watchface.title}
                        width={imageSizesBasedOnType(watchface.type, 'w')}
                        height={imageSizesBasedOnType(watchface.type, 'h')}
                      />
                    </div>
                    <p className="text-mono-text dark:text-dark-mono-text text-center text-sm">{watchface.title}</p>
                    <ButtonLink href={watchface.url} className="flex items-center gap-2" target="_blank">
                      View on Pebble Store <ExternalLinkIcon className="size-3" />
                    </ButtonLink>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
        <Footer text={footer.text} links={footer.links} />
      </div>
    </ClickSpark>
  );
}
