export async function getDictionary(lang: string) {
  switch (lang) {
    case "en":
      return (await import("../locales/en.json")).default;
    case "fr":
    default:
      return (await import("../locales/fr.json")).default;
  }
}
