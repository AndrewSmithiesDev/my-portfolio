import { getDictionary } from "@/lib/getDictionary";
import NavbarClient from "./NavbarClient";

type NavbarProps = {
  lang: string;
};

export default async function Navbar({ lang }: NavbarProps) {
  const dict = await getDictionary(lang);
  const otherLang = lang === "fr" ? "en" : "fr";

  return <NavbarClient lang={lang} dict={dict} otherLang={otherLang} />;
}
