import SideModule from './SideModule';
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
    <SideModule
      title="Skills"
      list={skills.map((skill) => ({
        title: skill.name,
        value: skill.level,
        color: colorLevel(skill.level), // Use the colorLevel function to determine the text color
      }))}
      titleColor="border-retro-purple dark:border-dark-purple"
    />
  );
}
