import "../globals.css";
import Navbar from "@/components/Navbar";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <Navbar lang={lang} />
      {children}
    </>
  );
}
