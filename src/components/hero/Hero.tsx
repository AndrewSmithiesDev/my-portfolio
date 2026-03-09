"use client";
import { useDictionary } from "@/components/context/DictionaryContext";
import Image from "next/image";

export default function Hero() {
  const { dict } = useDictionary();
  return (
    <section
      id="hero"
      className="hero section flex flex-col items-center text-center"
    >
      <div className="w-36 h-36 rounded-full overflow-hidden border border-sage-500 mb-6">
        <Image
          src="/profile-photo.webp"
          alt="Andrew Smithies"
          width={284}
          height={284}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="heading-hero block">{dict.hero.name}</h1>

      <p className="text-secondary mt-2">{dict.hero.role}</p>

      <p className="text-body text-secondary max-w-xl mt-4">
        {dict.hero.description}
      </p>

      <div className="flex gap-4 mt-8">
        <a href="#projects" className="btn btn-primary">
          {dict.hero.ctaProjects}
        </a>
        <a href="#contact" className="btn btn-soft">
          {dict.hero.ctaContact}
        </a>
      </div>

      <a
        href="#about"
        className="mt-16 block animate-bounce text-sage-500 text-3xl opacity-60"
        aria-label={dict.hero.scrollToAbout}
      >
        ↓
      </a>
    </section>
  );
}
