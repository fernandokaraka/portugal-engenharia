import './globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import Navbar from '@/components/Navbar'; // se estiver usando a opção A
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portugal Engenharia',
  description: 'Engenharia civil com qualidade, inovação e compromisso.'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'pt';

  let messages: any;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    messages = (await import('../messages/pt.json')).default;
  }

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-ink">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
