"use client";

import { useDictionary } from "@/components/context/DictionaryContext";
import type { Project } from "./project-data";

export default function ProjectCard({ project }: { project: Project }) {
  const { dict } = useDictionary();

  const t = dict.projects[project.dictKey];

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[var(--sage-300)] bg-[var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img src={project.image} alt={t.title} className="h-48 w-full object-cover" />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold">{t.title}</h3>
        <p className="mb-4 text-sm text-[var(--muted-foreground)]">{t.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-[var(--sage-100)] px-2 py-1 text-xs font-medium text-[var(--accent)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          className="text-sm font-medium text-[var(--accent)] underline underline-offset-4"
        >
          {dict.projects.viewProject}
        </a>
      </div>
    </article>
  );
}
