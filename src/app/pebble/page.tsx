import ButtonLink from '@/components/ButtonLink';
import Hero from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import SectionHeading from '@/components/SectionHeading';
import metaData from '@/data/metadata.json';
import pebbleData from '@/data/pebble.json';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';

const PEBBLE_IMAGE_SIZES: Record<string, { w: number; h: number }> = {
  basalt: { w: 144, h: 168 },
  chalk: { w: 180, h: 180 },
  emery: { w: 200, h: 228 },
  gabbro: { w: 260, h: 260 },
};

const DEFAULT_IMAGE_SIZE = PEBBLE_IMAGE_SIZES.basalt;

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function Pebble() {
  const { hero, sections } = pebbleData;
  const page = metaData.pebble;

  return (
    <PageLayout section={page.section} branch={page.branch}>
      <Hero title={page.heroTitle} name={hero.title} oneLine>
        <p>{hero.description}</p>
      </Hero>

      <menu className="mx-auto flex max-w-6xl flex-wrap gap-3 px-6 py-2">
        {sections.map((section) => (
          <ButtonLink key={section.title} href={`#${slug(section.title)}`}>
            {section.title.toLowerCase()}
          </ButtonLink>
        ))}
      </menu>

      {sections.map((section) => (
        <section className="mx-auto max-w-6xl px-6 py-10" key={section.title} id={slug(section.title)}>
          <SectionHeading className="mb-5">{section.title.toLowerCase()}</SectionHeading>
          <p className="text-mono-text-muted max-w-3xl font-sans text-base leading-relaxed">{section.content}</p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {section.watchfaces?.map((watchface) => {
              const size = PEBBLE_IMAGE_SIZES[watchface.type] ?? DEFAULT_IMAGE_SIZE;
              return (
                <div key={watchface.title} className="border-mono-border bg-mono-card flex flex-col items-center rounded border p-6">
                  <div className="text-mono-text-muted mb-4 flex w-full items-baseline justify-between gap-3 text-xs tracking-[0.16em] uppercase">
                    <span className="truncate">{slug(watchface.title)}/</span>
                    <span className="text-accent shrink-0">{watchface.type}</span>
                  </div>
                  <div className={`pebble ${watchface.type}`}>
                    <Image src={watchface.image} alt={watchface.title} width={size.w} height={size.h} />
                  </div>
                  <p className="mt-4 text-center text-lg font-medium tracking-tight">{watchface.title}</p>
                  <p className="text-mono-text-muted mt-1.5 text-center font-sans text-base leading-relaxed">{watchface.content}</p>
                  <ButtonLink href={watchface.url} className="mt-4" target="_blank">
                    {page.storeLink} <ExternalLinkIcon className="size-3" />
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
