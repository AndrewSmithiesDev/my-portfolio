"use client";

import NavbarClient from "./NavbarClient";
import { useDictionary } from "@/components/context/DictionaryContext";

export default function Navbar() {
  const { dict, lang } = useDictionary();

  return (
    <NavbarClient
      dict={dict}
      lang={lang}
      otherLang={lang === "en" ? "fr" : "en"}
    />
  );
}
