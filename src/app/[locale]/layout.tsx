import type {Metadata} from 'next';
import {NextIntlClientProvider, getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {MontSerrat} from './mont'; // ver util abaixo ou carregue aqui
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portugal Engenharia',
  description: 'Soluções em engenharia civil e mecânico-industrial.'
};

// (opcional) validação do locale
const LOCALES = ['pt','en','es'] as const;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;
  if (!LOCALES.includes(locale as any)) notFound();

  const messages = await getMessages(); // carrega src/messages/<locale>.json

  return (
    <html lang={locale}>
      <body className={`${MontSerrat} min-h-screen bg-white text-ink`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
