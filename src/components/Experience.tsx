import { formatMonthYear } from '@/lib/date';

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

export default function Experience({ experience }: { experience: readonly ExperienceType[] }) {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-lg font-medium tracking-widest uppercase">Experience</h2>
      <div>
        {experience.map((exp) => (
          <div key={`${exp.company}-${exp.startDate}`} className="group flex gap-x-3">
            <div className="text-mono-text-muted dark:text-dark-mono-text-muted -mt-1 text-right text-sm">
              <div>{exp.endDate ? formatMonthYear(exp.endDate) : 'Now'}</div>
              <div>{formatMonthYear(exp.startDate)}</div>
            </div>
            <div className="after:border-line-2 relative after:absolute after:start-3.5 after:top-7 after:bottom-0 after:-translate-x-[0.5px] after:border-s group-last:after:hidden">
              <div className="relative z-10 flex size-7 items-center justify-center">
                <div className="bg-mono-text dark:bg-dark-mono-text/50 size-2"></div>
              </div>
            </div>
            <div className="mb-20 flex-1">
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.position}</h3>
                    <div className="text-mono-text-muted dark:text-dark-mono-text-muted text-sm">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-mono-text-muted dark:text-dark-mono-text-muted mb-3 text-sm italic">{exp.description}</p>

              <ul className="text-mono-text-muted dark:text-dark-mono-text-muted mb-4 list-disc space-y-2 pl-5 text-sm">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="border-mono-border dark:border-dark-mono-border rounded-xs border px-2 py-0.5 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
