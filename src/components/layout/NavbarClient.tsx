"use client";

import { useState, useRef, useEffect } from "react";
import ThemeToggleWrapper from "./ThemeToggleWrapper";

export default function NavbarClient({
  lang,
  dict,
  otherLang,
}: {
  lang: string;
  dict: any;
  otherLang: string;
}) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      const clickedMenu = menuRef.current?.contains(target);
      const clickedButton = buttonRef.current?.contains(target);

      if (!clickedMenu && !clickedButton) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close menu when user scrolls
  useEffect(() => {
    if (!open) return;

    const startY = window.scrollY;

    function handleScroll() {
      const distance = Math.abs(window.scrollY - startY);
      if (distance > 20) {
        setOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <nav className="navbar">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <a
          className="nav-link text-xl font-semibold opacity-90 hover:opacity-100 transition"
          href="#hero"
        >
          {dict.nav.portfolio}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a className="nav-link opacity-80" href="#about">
            {dict.nav.about}
          </a>
          <a className="nav-link opacity-80" href="#skills">
            {dict.nav.skills}
          </a>
          <a className="nav-link opacity-80" href="#projects">
            {dict.nav.projects}
          </a>
          <a className="nav-link opacity-80" href="#contact">
            {dict.nav.contact}
          </a>

          <a
            className="nav-link opacity-60 text-sm"
            href={`/${otherLang}`}
          >
            {otherLang.toUpperCase()}
          </a>

          <ThemeToggleWrapper />
        </div>

        {/* Mobile hamburger */}
        <button
          ref={buttonRef}
          className="md:hidden nav-link opacity-80 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 border-b`}
        style={{
          maxHeight: open ? "300px" : "0px",
          background: "var(--background)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className={`flex flex-col items-center gap-6 px-6 py-6 ${
            open ? "mobile-menu-content" : ""
          }`}
        >
          <a
            className="nav-link opacity-80 text-lg"
            href="#about"
            onClick={() => setOpen(false)}
          >
            {dict.nav.about}
          </a>
          <a
            className="nav-link opacity-80 text-lg"
            href="#skills"
            onClick={() => setOpen(false)}
          >
            {dict.nav.skills}
          </a>

          <a
            className="nav-link opacity-80 text-lg"
            href="#projects"
            onClick={() => setOpen(false)}
          >
            {dict.nav.projects}
          </a>

          <a
            className="nav-link opacity-80 text-lg"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            {dict.nav.contact}
          </a>

          <div className="flex items-center gap-6 pt-2">
            <a
              className="nav-link opacity-60 text-sm"
              href={`/${otherLang}`}
              onClick={() => setOpen(false)}
            >
              {otherLang.toUpperCase()}
            </a>

            <ThemeToggleWrapper />
          </div>
        </div>
      </div>
    </nav>
  );
}
