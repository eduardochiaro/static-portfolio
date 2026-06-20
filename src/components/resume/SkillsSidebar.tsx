import { SkillType } from '../Skills';

export default function SkillsSidebar({ skills }: { skills: readonly SkillType[] }) {
  return (
    <section className="mb-12">
      <h3 className="mb-4 flex items-center gap-2 text-base font-medium tracking-widest uppercase">
        <span className="text-accent dark:text-dark-accent" aria-hidden="true">
          {'//'}
        </span>
        Skills
      </h3>
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
