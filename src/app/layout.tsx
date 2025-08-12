import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Portugal Engenharia',
  description: 'Engenharia civil com qualidade, inovação e compromisso.'
};

const mont = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  display: 'swap'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${mont.className} min-h-screen bg-white text-ink`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
