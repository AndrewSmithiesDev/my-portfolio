"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();

  // Split into segments: ["", "en", "projects"]
  const segments = pathname.split("/");

  // Compute EN path
  const enSegments = [...segments];
  enSegments[1] = "en";
  const enPath = enSegments.join("/") || "/en";

  // Compute FR path
  const frSegments = [...segments];
  frSegments[1] = "fr";
  const frPath = frSegments.join("/") || "/fr";

  return (
    <div className="flex gap-4">
      <Link href={enPath} className={currentLang === "en" ? "font-bold" : ""}>
        EN
      </Link>
      <Link href={frPath} className={currentLang === "fr" ? "font-bold" : ""}>
        FR
      </Link>
    </div>
  );
}
