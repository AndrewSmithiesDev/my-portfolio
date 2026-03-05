import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export function getDictionary(lang: string) {
  return lang === "fr" ? fr : en;
}
