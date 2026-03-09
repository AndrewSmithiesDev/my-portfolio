import Navbar from "@/components/layout/Navbar";
import { getDictionary } from "@/lib/getDictionary";
import { DictionaryProvider } from "@/components/context/DictionaryContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrew Smithies – Web & Mobile Developer",
  description:
    "Bilingual web and mobile developer with a STEM background and teaching experience.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Andrew Smithies – Web & Mobile Developer",
    description:
      "Bilingual web and mobile developer with a STEM background and teaching experience.",
    url: "https://your-domain.com",
    siteName: "Andrew Smithies",
    type: "website",
  },
};

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
