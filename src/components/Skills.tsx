export type SkillType = {
  name: string;
  level: string;
  percentage: number;
  color?: string; // optional color property for styling
  darkColor?: string; // optional dark color property for styling
};

const colorList = ['bg-retro-red', 'bg-retro-orange', 'bg-retro-purple', 'bg-retro-magenta'];
const darkColorList = ['bg-dark-red', 'bg-dark-orange', 'bg-dark-purple', 'bg-dark-magenta'];

export default function Skills({ skills }: { skills: SkillType[] }) {
  // split skills into two columns
  if (!skills || skills.length === 0) {
    return null; // or return a placeholder if no skills are provided
  }
  // add color and darkColor properties to each skill, cycle through color lists and start again if there are more skills than colors
  skills = skills.map((skill, index) => ({
    ...skill,
    color: colorList[index % colorList.length],
    darkColor: darkColorList[index % darkColorList.length],
  }));

  const half = Math.ceil(skills.length / 2);
  const leftColumn = skills.slice(0, half);
  const rightColumn = skills.slice(half);

  return (
    <section className="mx-auto my-16 max-w-4xl px-4 md:px-0">
      <h2 className="border-retro-red dark:border-dark-red mb-6 border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {[leftColumn, rightColumn].map((column, index) => (
          <div key={index}>
            {column.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="mb-1 flex items-baseline justify-between">
                  <span>{skill.name}</span>
                  <span className="text-xs">{skill.level}</span>
                </div>
                <div className="border-retro-text dark:border-dark-text flex w-full items-center rounded-sm border-1 bg-gray-200 p-1 dark:bg-gray-700">
                  <div className={`${skill.color} dark:${skill.darkColor} h-5 rounded-xs`} style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
