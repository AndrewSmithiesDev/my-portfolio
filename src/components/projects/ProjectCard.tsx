"use client";

import Image from "next/image";
import { useDictionary } from "@/components/context/DictionaryContext";
import type { Project } from "./project-data";

export default function ProjectCard({ project }: { project: Project }) {
  const { dict } = useDictionary();
  const t = dict.projects[project.dictKey];

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[var(--sage-300)] bg-[var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={t.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          priority={false}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold">{t.title}</h3>
        <p className="mb-4 text-sm text-[var(--muted-foreground)]">
          {t.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-[var(--sage-100)] px-2 py-1 text-xs font-medium text-[var(--accent-foreground)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          className="text-sm font-medium text-[var(--accent-foreground)] underline underline-offset-4"
        >
          {dict.projects.viewProject}
        </a>
      </div>
    </article>
  );
}
