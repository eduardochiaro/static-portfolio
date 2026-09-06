import metaData from '@/data/metadata.json';
import type { Contributions as ContributionsType } from '@/lib/github';
import SectionHeading from '../SectionHeading';

/** Six weeks of days, laid out in the design's 14-column block. */
const DAYS = 42;
const LEVELS = ['bg-mono-card', 'bg-accent/25', 'bg-accent/45', 'bg-accent'];

/** 0 = none, 1-3 = thirds of the busiest day in the range. */
function level(count: number, max: number): number {
  if (count === 0) return 0;
  return Math.min(3, Math.ceil((count / max) * 3));
}

export default function Contributions({ data }: { readonly data: ContributionsType | null }) {
  if (!data) return null;

  const days = data.weeks.flat().slice(-DAYS);
  if (days.length === 0) return null;
  const max = Math.max(...days.map((day) => day.count), 1);

  return (
    <section className="mb-10">
      <SectionHeading small className="mb-4">
        {metaData.sections.contributions}
      </SectionHeading>
      <div className="grid grid-cols-14 gap-[3px]">
        {days.map((day) => (
          <span key={day.date} title={`${day.count} on ${day.date}`} className={`aspect-square rounded-xs ${LEVELS[level(day.count, max)]}`} />
        ))}
      </div>
      <p className="text-mono-text-muted mt-3 text-sm">{data.total.toLocaleString()} commits in the last year</p>
    </section>
  );
}
