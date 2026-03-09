"use client";

import { useState } from "react";
import { useDictionary } from "@/components/context/DictionaryContext";
import { projects } from "@/components/projects/project-data";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  const { dict } = useDictionary();
  const [filter, setFilter] =
    useState<"all" | "web" | "javascript" | "design">("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">{dict.projects.title}</h2>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            {dict.projects.subtitle}
          </p>
        </header>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {["all", "web", "javascript", "design"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={[
                "rounded-full border px-4 py-1 text-sm transition",
                filter === f
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border-[var(--sage-300)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              ].join(" ")}
            >
              {dict.projects.filters[f]}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
