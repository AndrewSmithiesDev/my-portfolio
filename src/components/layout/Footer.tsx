"use client";

import { useDictionary } from "@/components/context/DictionaryContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { dict } = useDictionary();

  return (
    <footer className="mt-12 py-4 border-t border-[var(--sage-300)]">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        <p className="text-small text-secondary">{dict.footer.madeBy}</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/andrewsmithiesdev"
            aria-label="GitHub profile"
            target="_blank"
            className="text-secondary hover:text-[var(--accent-foreground)] transition"
          >
            <FaGithub size={24} />{" "}
          </a>

          <a
            href="https://www.linkedin.com/in/andrew-smithies/"
            aria-label="LinkedIn profile"
            target="_blank"
            className="text-secondary hover:text-[var(--accent-foreground)] transition"
          >
            <FaLinkedin size={24} />{" "}
          </a>
        </div>

        <a
          href="#top"
          className="text-xs text-secondary hover:text-[var(--accent-foreground)] transition"
        >
          ↑ {dict.footer.backToTop}
        </a>

        <p className="text-xs text-secondary mt-2">
          © {new Date().getFullYear()} {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
