import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Smithies – Web & Mobile Developer",
  description:
    "Bilingual web and mobile developer with a STEM background and teaching experience.",
  metadataBase: new URL("https://my-portfolio-nine-ivory-76.vercel.app"),
  openGraph: {
    title: "Andrew Smithies – Web & Mobile Developer",
    description:
      "Bilingual web and mobile developer with a STEM background and teaching experience.",
    url: "https://my-portfolio-nine-ivory-76.vercel.app",
    siteName: "Andrew Smithies",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview of Andrew Smithies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Smithies – Web & Mobile Developer",
    description:
      "Bilingual web and mobile developer with a STEM background and teaching experience.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
