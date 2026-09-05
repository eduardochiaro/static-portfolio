import SectionHeading from '@/components/SectionHeading';
import metaData from '@/data/metadata.json';
import Tag from '@/components/Tag';
import { formatDuration, formatMonthYear } from '@/lib/date';
import { shortSha } from '@/lib/sha';

export type ExperienceType = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  responsibilities: readonly string[];
  tags: readonly string[];
};

type ExperienceProps = {
  readonly experience: readonly ExperienceType[];
  /** Home page variant: sha column, one line of prose, no bullets */
  readonly compact?: boolean;
  readonly heading?: string;
  readonly limit?: number;
};

function CommitDot({
  current,
  first,
  last,
  className = '',
}: {
  readonly current: boolean;
  readonly first: boolean;
  readonly last: boolean;
  readonly className?: string;
}) {
  return (
    <div className={`relative flex h-full justify-center self-stretch ${className}`}>
      <div className={`bg-mono-border absolute w-px ${first ? 'top-2.5' : '-top-5'} ${last ? 'h-6' : '-bottom-5'}`} aria-hidden="true" />
      <div className={`relative mt-2 size-2.5 rounded-full ${current ? 'bg-accent' : 'border-mono-text-muted bg-mono-bg border'}`} />
    </div>
  );
}

export default function Experience({ experience, compact = false, heading = metaData.sections.experience, limit }: ExperienceProps) {
  const items = limit ? experience.slice(0, limit) : experience;

  return (
    <section>
      <SectionHeading className="mb-2">{heading}</SectionHeading>
      <div>
        {items.map((exp, index) => {
          const sha = shortSha(`${exp.company}${exp.position}${exp.startDate}`);
          const current = !exp.endDate;
          const dates = `${formatMonthYear(exp.startDate)} — ${exp.endDate ? formatMonthYear(exp.endDate) : 'now'}`;
          const meta = [exp.company, exp.location, dates, formatDuration(exp.startDate, exp.endDate)].filter(Boolean).join(' · ');

          return (
            <div
              key={`${exp.company}-${exp.startDate}`}
              className={`border-mono-rule grid items-start border-b py-5 last:border-b-0 ${compact ? 'grid-cols-[34px_1fr] sm:grid-cols-[34px_92px_1fr]' : 'grid-cols-[34px_1fr]'}`}
            >
              <CommitDot current={current} first={index === 0} last={index === items.length - 1} className={compact ? 'row-span-2 sm:row-span-1' : ''} />
              {compact && <span className="text-mono-text-muted col-start-2 mb-1 text-sm sm:mb-0 sm:pt-0.5">{sha}</span>}
              <div className={compact ? 'col-start-2 sm:col-start-3' : ''}>
                <div className="mb-1.5 flex flex-wrap items-center gap-3">
                  {!compact && <span className="text-mono-text-muted text-sm">{sha}</span>}
                  <h3 className="text-xl font-medium tracking-tight">{exp.position}</h3>
                  {current && <span className="border-accent/40 bg-accent/8 text-accent rounded-full border px-2.5 py-0.5 text-[0.65rem]">current</span>}
                </div>
                <p className="text-mono-text-muted text-sm tracking-wide">{meta}</p>
                {exp.description && <p className="text-mono-text-muted mt-3 font-sans text-base leading-relaxed">{exp.description}</p>}
                {!compact && exp.responsibilities.length > 0 && (
                  <ul className="text-mono-text-muted mt-3 space-y-1 text-sm">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp}>
                        <span className="text-accent mr-2">+</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}
                {exp.tags.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
