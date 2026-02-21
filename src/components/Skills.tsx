export type SkillType = {
  name: string;
  level: string;
  percentage?: number;
};

function SkillBar({ skill }: { skill: SkillType }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{skill.name}</span>
        <span className="text-mono-text-muted dark:text-dark-mono-text-muted">{skill.level}</span>
      </div>
      <div
        className="border-mono-card dark:border-dark-mono-border bg-mono-card dark:bg-dark-mono-card h-1.5 w-full overflow-hidden rounded-full border"
        role="progressbar"
        aria-valuenow={skill.percentage ?? 0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name}: ${skill.level}`}
      >
        <div className="bg-mono-text dark:bg-dark-mono-text h-full rounded-full" style={{ width: `${skill.percentage}%` }}></div>
      </div>
    </div>
  );
}

export default function Skills({ skills }: { skills: readonly SkillType[] }) {
  if (!skills || skills.length === 0) {
    return null;
  }

  const half = Math.ceil(skills.length / 2);
  const leftColumn = skills.slice(0, half);
  const rightColumn = skills.slice(half);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-lg font-medium tracking-widest uppercase">Technical Expertise</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          {leftColumn.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
        <div className="space-y-6">
          {rightColumn.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
