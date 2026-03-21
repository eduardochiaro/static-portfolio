'use client';

import ButtonLink from '@/components/ButtonLink';
import Divider from '@/components/Divider';
import PageLayout from '@/components/PageLayout';
import pebbleData from '@/data/pebble.json';
import { ExternalLink as ExternalLinkIcon } from '@react-zero-ui/icon-sprite';
import Image from 'next/image';

const PEBBLE_IMAGE_SIZES: Record<string, { w: number; h: number }> = {
  basalt: { w: 144, h: 168 },
  chalk: { w: 180, h: 180 },
  emery: { w: 200, h: 228 },
};

const DEFAULT_IMAGE_SIZE = { w: 144, h: 168 };

export default function Pebble() {
  const { hero, sections } = pebbleData;

  return (
    <PageLayout section="Pebble">
      <section className="mx-auto mt-20 max-w-5xl px-6 pt-16 pb-12">
        <div className="fade-in">
          <h1 className="mb-6 flex flex-col text-6xl leading-tight font-semibold tracking-tight">{hero.title}</h1>
          <p className="text-mono-text-muted dark:text-dark-mono-text-muted text-base leading-relaxed">{hero.description}</p>
        </div>
      </section>

      <Divider />

      {sections.map((section) => (
        <section className="mx-auto max-w-5xl px-6 py-16" key={section.title}>
          <h2 className="mb-6 text-lg font-medium tracking-widest uppercase">{section.title}</h2>
          <p className="text-mono-text-muted dark:text-dark-mono-text-muted text-base leading-relaxed">{section.content}</p>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
            {section.watchfaces?.map((watchface) => {
              const size = PEBBLE_IMAGE_SIZES[watchface.type] ?? DEFAULT_IMAGE_SIZE;
              return (
                <div key={watchface.title} className="flex flex-col items-center gap-4">
                  <div className={`pebble ${watchface.type}`}>
                    <Image src={watchface.image} alt={watchface.title} width={size.w} height={size.h} />
                  </div>
                  <p className="text-mono-text dark:text-dark-mono-text text-center text-sm">{watchface.title}</p>
                  <ButtonLink href={watchface.url} className="flex items-center gap-2" target="_blank">
                    View on Pebble Store <ExternalLinkIcon className="size-3" />
                  </ButtonLink>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </PageLayout>
  );
}
