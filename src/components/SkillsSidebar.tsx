import { SkillType } from './Skills';

const colorLevel = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'text-retro-purple dark:text-dark-purple';
    case 'Proficient':
      return 'text-retro-magenta dark:text-dark-magenta';
    case 'Familiar':
      return 'text-retro-red dark:text-dark-red';
    default:
      return '';
  }
};

export default function SkillsSidebar({ skills }: { skills: SkillType[] }) {
  return (
    <section className="mb-16 px-4 md:px-0">
      <h2 className="border-retro-purple dark:border-dark-purple mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Skills</h2>
      <div className="mb-8 text-sm">
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex justify-between gap-4">
              <span>{skill.name}</span>
              <span className={colorLevel(skill.level)}>{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
