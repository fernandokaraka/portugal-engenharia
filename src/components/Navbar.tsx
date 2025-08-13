'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' }
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo textual rápido */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="h-9 w-9 rounded-full"
            style={{ background: 'radial-gradient(120% 120% at 50% 0%, #1B5E20 0%, #1B5E20 50%, #C62828 51%, #C62828 100%)' }}
          />
          <span className="text-lg font-extrabold tracking-tight text-brand">
            Portugal <span className="font-semibold text-ink">Engenharia</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                isActive(pathname, href) ? 'text-brand' : 'text-ink/70 hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Idioma (placeholder simples) */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm text-ink/80 hover:border-black/20"
              aria-haspopup="menu"
              aria-expanded={langOpen}
            >
              🌐 Português
            </button>
            {langOpen && (
              <div role="menu" className="absolute right-0 mt-2 w-40 overflow-hidden rounded-md border border-black/10 bg-white shadow-soft">
                <button className="block w-full px-3 py-2 text-left text-sm hover:bg-surface">Português</button>
                <button className="block w-full px-3 py-2 text-left text-sm hover:bg-surface">English</button>
                <button className="block w-full px-3 py-2 text-left text-sm hover:bg-surface">Español</button>
              </div>
            )}
          </div>

          <Link
            href="/contato"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm md:hidden"
          aria-label="Abrir menu"
        >
          ☰ Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="container flex flex-col gap-2 py-3">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive(pathname, href) ? 'bg-surface text-brand' : 'text-ink/80 hover:bg-surface'
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="flex items-center gap-2 px-1 py-2">
              <span className="text-sm text-ink/60">Idioma:</span>
              <button className="rounded-md px-2 py-1 text-sm hover:bg-surface">PT</button>
              <button className="rounded-md px-2 py-1 text-sm hover:bg-surface">EN</button>
              <button className="rounded-md px-2 py-1 text-sm hover:bg-surface">ES</button>
            </div>

            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="rounded-md bg-brand px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
