"use client";

import { createContext, useContext } from "react";

const DictionaryContext = createContext<{ dict: any; lang: string } | null>(null);

export function DictionaryProvider({
  dict,
  lang,
  children,
}: {
  dict: any;
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={{ dict, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const ctx = useContext(DictionaryContext);
  if (!ctx) throw new Error("useDictionary must be used inside DictionaryProvider");
  return ctx;
}
