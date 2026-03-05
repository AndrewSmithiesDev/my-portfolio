import "./globals.css";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Record<string, string>>;
}) {
  return (
    <html>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
