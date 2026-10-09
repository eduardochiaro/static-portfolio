import metaData from '@/data/metadata.json';
import SectionHeading from './SectionHeading';

export type SkillType = {
  name: string;
  level: string;
};

const LEVEL_COLORS: Record<string, string> = { expert: 'text-sha', advanced: 'text-accent' };

function SkillRow({ skill }: { readonly skill: SkillType }) {
  const level = skill.level.toLowerCase();
  return (
    <div className="flex justify-between gap-4">
      <span>{skill.name.toLowerCase()}</span>
      <span className={LEVEL_COLORS[level] ?? 'text-mono-text-muted'}>
        {level === 'expert' ? '^' : '~'}
        {level}
      </span>
    </div>
  );
}

type SkillsProps = {
  readonly skills: readonly SkillType[];
  readonly small?: boolean;
  readonly columns?: 1 | 2;
};

export default function Skills({ skills, small = false, columns = 1 }: SkillsProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className={small ? 'mb-10' : 'mx-auto max-w-6xl px-6 py-12'}>
      <SectionHeading small={small} className="mb-4">
        {metaData.sections.skills}
      </SectionHeading>
      <div
        className={`border-mono-border bg-mono-card grid gap-x-10 gap-y-1 rounded border px-4 py-3.5 text-sm leading-loose ${
          columns === 2 ? 'sm:grid-cols-2' : ''
        }`}
      >
        {[...skills]
          .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
          .map((skill) => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
      </div>
    </section>
  );
}
