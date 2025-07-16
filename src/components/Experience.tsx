import moment from 'moment';

const colorBorderList = [
  'border-retro-purple dark:border-dark-purple',
  'border-retro-magenta dark:border-dark-magenta',
  'border-retro-red dark:border-dark-red',
  'border-retro-orange dark:border-dark-orange',
];

const colorTextList = [
  'text-retro-purple dark:text-dark-purple',
  'text-retro-magenta dark:text-dark-magenta',
  'text-retro-red dark:text-dark-red',
  'text-retro-text dark:text-dark-orange',
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
      <h2 className="border-retro-magenta dark:border-dark-magenta mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Experience</h2>
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
                  {moment(exp.startDate).format('MMM YYYY')} - {exp.endDate ? moment(exp.endDate).format('MMM YYYY') : 'Present'}
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
                  <span key={tagIndex} className="bg-retro-text text-retro-bg dark:bg-dark-text dark:text-dark-bg px-2 py-1 text-sm">
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
