// src/app/(site)/page.tsx ou src/app/page.tsx
import { useTranslations } from 'next-intl';
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* HERO */}
      <section
        className="relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />
        <div className="container relative section-lg min-h-[680px] flex items-center">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1>
              Construindo Seu Futuro com{" "}
              <span className="text-support">Inovação</span> e{" "}
              <span className="text-support">Qualidade</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-white/90">
              Uma empresa renomada no setor de engenharia civil dedicada a oferecer
              soluções abrangentes para projetos de construção e infraestrutura.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4">
              <Link href="/contato" className="btn btn-primary">
                Contato (34) 3231-1080
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                Ver projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="border-y border-black/5 bg-white">
        <div className="container section">
          <div className="grid grid-cols-2 gap-12 text-center sm:grid-cols-4">
            {[
              ["1200+", "Clientes Satisfeitos"],
              ["35+", "Obras Entregues"],
              ["2500+", "Projetos Aprovados"],
              ["45+", "Certificações"],
            ].map(([n, title]) => (
              <div key={title}>
                <div className="text-5xl font-extrabold text-ink">{n}</div>
                <div className="mt-2 text-ink/70">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-surface">
        <div className="container section">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-brand">Nossos Serviços em Destaque</h2>
            <p className="mt-4">
              Da infraestrutura urbana à montagem industrial, unimos planejamento,
              tecnologia e execução para entregar obras com segurança e performance.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Residenciais", "Execução e gerenciamento de obras residenciais."],
              ["Comerciais & Industriais", "Projetos e obras para negócios e indústrias."],
              ["Infraestrutura", "Pavimentação, drenagem, loteamentos e urbanismo."],
            ].map(([title, desc]) => (
              <article key={title} className="card group">
                <div className="text-lg font-semibold text-ink">{title}</div>
                <p className="mt-2 text-ink/70">{desc}</p>
                <Link
                  href="/portfolio"
                  className="mt-4 inline-block link-underline text-brand"
                >
                  Ver projetos →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resto do conteúdo igual ao anterior... */}
      
    </>
  );
}