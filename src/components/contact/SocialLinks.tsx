import { Github, Linkedin } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      <a
        href="https://github.com/andrewsmithiesdev"
        target="_blank"
        className="text-secondary hover:text-[var(--accent)] transition"
      >
        <Github size={28} />
      </a>

      <a
        href="https://www.linkedin.com/in/andrew-smithies-78789935b/"
        target="_blank"
        className="text-secondary hover:text-[var(--accent)] transition"
      >
        <Linkedin size={28} />
      </a>
    </div>
  );
}
