import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div>
      <nav className="p-4">
        <LanguageSwitcher currentLang={params.lang} />
      </nav>
      {children}
    </div>
  );
}
