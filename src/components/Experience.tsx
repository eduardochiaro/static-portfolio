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
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={index}>
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
                <div className="text-mono-text-muted dark:text-dark-mono-text-muted mt-1 text-sm md:mt-0">
                  {formatMonthYear(exp.startDate)} - {exp.endDate ? formatMonthYear(exp.endDate) : 'Present'}
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
              {exp.tags.map((tag, tagIndex) => (
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
