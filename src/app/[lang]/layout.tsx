import Navbar from "@/components/layout/Navbar";
import { getDictionary } from "@/lib/getDictionary";
import { DictionaryProvider } from "@/components/context/DictionaryContext";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <DictionaryProvider dict={dict} lang={lang}>
      <Navbar />
      {children}
    </DictionaryProvider>
  );
}
