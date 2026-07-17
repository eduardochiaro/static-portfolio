import SectionHeading from '../SectionHeading';
import { SkillType } from '../Skills';

export default function SkillsSidebar({ skills }: { skills: readonly SkillType[] }) {
  return (
    <section className="mb-12">
      <SectionHeading small className="mb-4">
        Skills
      </SectionHeading>
      <ul className="space-y-2 text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-between">
            <span>{skill.name}</span>
            <span className="text-mono-text-muted dark:text-dark-mono-text-muted">{skill.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
