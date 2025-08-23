import SideModule from './SideModule';
import { SkillType } from './Skills';

const colorLevel = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'text-accent-four dark:text-dark-accent-four';
    case 'Proficient':
      return 'text-accent-three dark:text-dark-accent-three';
    case 'Familiar':
      return 'text-accent-two dark:text-dark-accent-two';
    default:
      return '';
  }
};

export default function SkillsSidebar({ skills }: { skills: SkillType[] }) {
  return (
    <SideModule
      title="Skills"
      list={skills.map((skill) => ({
        title: skill.name,
        value: skill.level,
        color: colorLevel(skill.level), // Use the colorLevel function to determine the text color
      }))}
      titleColor="border-accent-four dark:border-dark-accent-four"
    />
  );
}
