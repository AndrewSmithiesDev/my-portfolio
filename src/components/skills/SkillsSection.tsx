"use client";

import { useState } from "react";
import { useDictionary } from "@/components/context/DictionaryContext";
import SkillsFilter from "./SkillsFilter";
import SkillsGrid from "./SkillsGrid";
import { skills } from "./skills-data";

export default function SkillsSection() {
  const { dict } = useDictionary();
  const [active, setActive] = useState<"frontend" | "backend" | "tools">("frontend");

  const filtered = skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section max-w-4xl mx-auto px-6">
      <h2 className="heading-2 mb-6 text-center">{dict.skills.title}</h2>

      <SkillsFilter
        active={active}
        onChange={setActive}
        labels={dict.skills.filters}
      />

      <SkillsGrid items={filtered} />

      <div className="mt-12">
        <h3 className="heading-3 mb-4 text-center">{dict.skills.trainingTitle}</h3>
        <ul className="flex flex-col gap-2 text-body text-secondary text-center">
          <li>{dict.skills.training.tp}</li>
          <li>{dict.skills.training.cda}</li>
          <li>{dict.skills.training.stage}</li>
          <li>{dict.skills.training.bootcamp}</li>
          <li>{dict.skills.training.stem}</li>
          <li>{dict.skills.training.teachingCert}</li>
          <li>{dict.skills.training.teaching}</li>
        </ul>
      </div>
    </section>
  );
}
