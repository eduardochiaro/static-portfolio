import { formatMonthYear } from '@/lib/date';

const colorBorderList = [
  'border-accent-four dark:border-dark-accent-four',
  'border-accent-three dark:border-dark-accent-three',
  'border-accent-two dark:border-dark-accent-two',
  'border-accent-one dark:border-dark-accent-one',
];

const colorTextList = [
  'text-accent-four dark:text-dark-accent-four',
  'text-accent-three dark:text-dark-accent-three',
  'text-accent-two dark:text-dark-accent-two',
  'text-dark-main dark:text-dark-accent-one',
];

export type ExperienceType = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  tags: string[];
};

export default function Experience({ experience }: { experience: ExperienceType[] }) {
  return (
    <section className="z-50 mx-auto mb-16 px-4 md:px-0">
      <h2 className="border-accent-three dark:border-dark-accent-three mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Experience</h2>
      <div className="relative space-y-16">
        {experience.map((exp, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <div className="flex flex-col text-sm md:flex-row md:gap-3">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="opacity-75">{exp.location}</span>
                  </div>
                </div>
                <div className={`${colorTextList[index % colorTextList.length]} text-sm font-medium`}>
                  {formatMonthYear(exp.startDate)} - {exp.endDate ? formatMonthYear(exp.endDate) : 'Present'}
                </div>
              </div>

              <p className={`${colorBorderList[index % colorBorderList.length]} mb-3 border-l-2 pl-3 text-sm italic`}>{exp.description}</p>

              <ul className="list-disc space-y-3 pl-5">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3">
                {exp.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-dark-main text-main dark:bg-main dark:text-dark-main px-2 py-1 text-sm">
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
