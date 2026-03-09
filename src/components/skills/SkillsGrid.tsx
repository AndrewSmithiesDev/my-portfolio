import SkillIcon from "./SkillIcon";
import type { Skill } from "./skills-data";

type SkillsGridProps = {
  items: Skill[];
};

export default function SkillsGrid({ items }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 max-w-xl mx-auto place-items-center">
      {items.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-[1.03] hover:opacity-90"
        >
          <SkillIcon>{skill.icon}</SkillIcon>
          <span className="text-body text-secondary text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
