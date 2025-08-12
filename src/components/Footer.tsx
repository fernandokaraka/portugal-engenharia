import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1B1B1B] text-white">
      <div className="container grid gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="text-xl font-semibold">Portugal Engenharia</div>
          <p className="mt-3 max-w-sm text-white/70">
            Há mais de 25 anos construindo o futuro com qualidade, inovação e compromisso com a
            excelência em cada projeto.
          </p>
        </div>

        <div>
          <div className="font-semibold">Links Rápidos</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><Link href="/sobre" className="hover:text-support">Sobre</Link></li>
            <li><Link href="/portfolio" className="hover:text-support">Portfólio</Link></li>
            <li><Link href="/contato" className="hover:text-support">Contato</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Contato</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="tel:+553432311080" className="hover:text-support">(34) 3231-1080</a></li>
            <li>
              <a href="mailto:portugalgeng.comercial@gmail.com" className="hover:text-support">
                portugalgeng.comercial@gmail.com
              </a>
            </li>
            <li>Av. Profa. Juvenília dos Santos, 1432 - Santa Mônica - Uberlândia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-4 text-sm text-white/60">
          © {new Date().getFullYear()} Portugal Engenharia — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
