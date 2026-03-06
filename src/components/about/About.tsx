"use client";

import { useDictionary } from "@/components/context/DictionaryContext";

export default function About() {
  const { dict } = useDictionary();

  return (
    <section
      id="about"
      className="section scroll-mt-10 relative max-w-3xl mx-auto px-6 flex flex-col gap-4"
    >
<div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
<div className="w-96 h-96 rounded-full bg-gradient-to-br from-sage-100 via-sage-500 to-sage-800 opacity-40 blur-2xl animate-orb" />
</div>
      <h2 className="heading-2 mb-2 text-center">{dict.about.title}</h2>

      <p className="text-body text-secondary text-center">{dict.about.paragraph1}</p>
      <p className="text-body text-secondary text-center">{dict.about.paragraph2}</p>
      <p className="text-body text-secondary text-center">{dict.about.paragraph3}</p>
    </section>
  );
}
