"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: string;
}) {
  const pathname = usePathname();

  const otherLang = currentLang === "en" ? "fr" : "en";

  // Split into segments: ["", "en", "projects"] or ["", "fr"]
  const segments = pathname.split("/");

  // Replace the language segment
  const newSegments = [...segments];
  newSegments[1] = otherLang;

  // Rebuild the path
  const newPath = newSegments.join("/") || `/${otherLang}`;

  return (
    <Link
      href={newPath}
      scroll={false}
      className="nav-link opacity-60 text-sm hover:opacity-100 transition"
    >
      {otherLang.toUpperCase()}
    </Link>
  );
}
