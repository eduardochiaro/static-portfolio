import SideModule from './SideModule';
import { SkillType } from '../Skills';

const colorLevel = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'decoration-accent-four dark:decoration-dark-accent-four';
    case 'Proficient':
      return 'decoration-accent-three dark:decoration-dark-accent-three';
    case 'Familiar':
      return 'decoration-accent-two dark:decoration-dark-accent-two';
    default:
      return '';
  }
};

export default function SkillsSidebar({ skills }: { skills: readonly SkillType[] }) {
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
