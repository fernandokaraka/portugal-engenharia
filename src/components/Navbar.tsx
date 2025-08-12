// src/components/Navbar.tsx
'use client';

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const locales: Array<'pt'|'en'|'es'> = ['pt','en','es'];

  // Função para trocar idioma
  const changeLocale = (newLocale: string) => {
    // Remove o locale atual do pathname se existir
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    // Navega para a nova URL com o novo locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-extrabold text-brand">
          Portugal Engenharia
        </Link>

        <ul className="hidden gap-6 md:flex">
          <li><Link href="/">{t('home')}</Link></li>
          <li><Link href="/sobre">{t('about')}</Link></li>
          <li><Link href="/portfolio">{t('portfolio')}</Link></li>
          <li><Link href="/contato">{t('contact')}</Link></li>
        </ul>

        <div className="flex items-center gap-2">
          {locales.map(l => (
            <button
              key={l}
              onClick={() => changeLocale(l)}
              className={`rounded px-2 py-1 text-sm cursor-pointer transition-colors ${
                locale === l 
                  ? 'bg-brand text-white' 
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <Link href="/contato" className="ml-2 hidden rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white md:block">
            {t('cta')}
          </Link>
        </div>
      </nav>
    </header>
  );
}