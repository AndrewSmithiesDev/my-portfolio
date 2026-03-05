import Hero from "@/components/Hero";
import { getDictionary } from "@/lib/getDictionary";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <Hero dict={dict} />;
}
