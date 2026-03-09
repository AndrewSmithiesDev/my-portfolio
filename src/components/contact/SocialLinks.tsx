import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      <a
        href="https://github.com/andrewsmithiesdev"
        target="_blank"
        className="text-secondary hover:text-[var(--accent-foreground)] transition"
      >
        <FaGithub size={24} />{" "}
      </a>

      <a
        href="https://www.linkedin.com/in/andrew-smithies-78789935b/"
        target="_blank"
        className="text-secondary hover:text-[var(--accent-foreground)] transition"
      >
        <FaLinkedin size={24} />{" "}
      </a>
    </div>
  );
}
