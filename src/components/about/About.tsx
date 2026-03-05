"use client";

import { useDictionary } from "@/components/context/DictionaryContext";

export default function About() {
  const { dict } = useDictionary();

  return (
    <section
      id="about"
      className="section max-w-3xl mx-auto px-6 flex flex-col gap-4"
    >
      <h2 className="heading-2 mb-2 text-center">{dict.about.title}</h2>

      <p className="text-body text-secondary text-center">{dict.about.paragraph1}</p>
      <p className="text-body text-secondary text-center">{dict.about.paragraph2}</p>
      <p className="text-body text-secondary text-center">{dict.about.paragraph3}</p>
    </section>
  );
}
