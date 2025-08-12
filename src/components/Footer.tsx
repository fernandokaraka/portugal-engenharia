import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-ink text-white">
      <div className="container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold">Portugal Engenharia</h4>
          <p className="mt-2 text-white/80">
            Há mais de 25 anos construindo o futuro com qualidade, inovação e compromisso com a excelência em cada projeto.
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Links Rápidos</h5>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/portfolio">Portfólio</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contato</h5>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>(34) 3231-1080</li>
            <li>portugaleng.comercial@gmail.com</li>
            <li>Av. Profa. Juvenília dos Santos, 1432 – Santa Mônica – Uberlândia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">
        © 2025 Portugal Engenharia — Todos os direitos reservados.
      </div>
    </footer>
  );
}
