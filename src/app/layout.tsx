// src/app/layout.tsx
import "@/app/globals.css";

export const metadata = {
  title: "Portugal Engenharia",
  description: "Soluções em engenharia civil e mecânico-industrial."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
