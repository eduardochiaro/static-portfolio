import metaData from '@/data/metadata.json';
import SectionHeading from '../SectionHeading';

export type AwardsType = {
  title: string;
  date: string;
};

export default function Awards({ awards }: { awards: readonly AwardsType[] }) {
  return (
    <section className="mb-10">
      <SectionHeading small className="mb-4">
        {metaData.sections.awards}
      </SectionHeading>
      <ul className="space-y-3 text-sm">
        {awards.map((award) => (
          <li key={award.title} className="flex justify-between gap-22">
            <span className="text-sha">{award.date.slice(0, 7).replace('-', '.')}</span>
            <span className="text-mono-text-muted text-right">{award.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
