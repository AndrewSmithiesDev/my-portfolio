import { getDictionary } from "@/lib/getDictionary";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function LangPage({ params }: { params: { lang: string } }) {
  const { lang } = await params; // ← unwrap the Promise

  const dict = getDictionary(lang);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">{dict.hero.title}</h1>
      <p className="text-lg mt-2">{dict.hero.subtitle}</p>
    </main>
  );
}
