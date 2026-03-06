"use client";

type SkillsFilterProps = {
  active: "frontend" | "backend" | "tools";
  onChange: (value: "frontend" | "backend" | "tools") => void;
  labels: {
    frontend: string;
    backend: string;
    tools: string;
  };
};

export default function SkillsFilter({ active, onChange, labels }: SkillsFilterProps) {
  const keys: Array<"frontend" | "backend" | "tools"> = ["frontend", "backend", "tools"];

  return (
    <div className="flex justify-center gap-4 mb-8">
      {keys.map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            active === key
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--border)]"
          }`}
        >
          {labels[key]}
        </button>
      ))}
    </div>
  );
}
