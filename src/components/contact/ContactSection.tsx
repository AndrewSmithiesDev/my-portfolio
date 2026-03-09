"use client";

import { useDictionary } from "@/components/context/DictionaryContext";
import { Mail } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  const { dict } = useDictionary();

  return (
    <section id="contact" className="section max-w-3xl mx-auto px-6 text-center">
      <h2 className="heading-2 mb-4">{dict.contact.title}</h2>
      <p className="text-body text-secondary mb-8">
        {dict.contact.subtitle}
      </p>

      <a
        href="mailto:andrewsmithiesdev@gmail.com"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-soft)] transition"
      >
        <Mail size={18} />
        {dict.contact.emailButton}
      </a>

      <div className="mt-10">
        <h3 className="heading-3 mb-4">{dict.contact.socialTitle}</h3>
        <SocialLinks />
      </div>
    </section>
  );
}
