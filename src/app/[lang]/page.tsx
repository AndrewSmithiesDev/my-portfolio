import { getDictionary } from "@/lib/getDictionary";

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <main className="space-y-4">
      <h1 className="text-4xl font-bold">{dict.hero.title}</h1>
      <p className="text-lg text-gray-300">{dict.hero.subtitle}</p>
    </main>
  );
}
