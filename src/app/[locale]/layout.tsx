// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Portugal Engenharia",
  description: "Soluções em engenharia civil e mecânico-industrial."
};

const LOCALES = ["pt", "en", "es"] as const;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as unknown as typeof LOCALES[number])) {
    // opcional: notFound();
  }

  return (
    <div className={`${mont.className} min-h-screen bg-white text-ink`}>
      {children}
    </div>
  );
}
