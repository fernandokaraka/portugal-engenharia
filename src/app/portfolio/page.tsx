"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Projeto = {
  slug: string;
  titulo: string;
  resumo: string;
  capa: string;
  tag: "industrial" | "infra" | "refrigeracao";
};

const projetos: Projeto[] = [
  {
    slug: "montagem-industrial-x",
    titulo: "Montagem e Manutenção Industrial",
    resumo: "Intervenções em caldeiraria, tubulações e soldas especiais.",
    capa:
      "https://images.unsplash.com/photo-1581093458791-9d130e7f2a87?q=80&w=1200&auto=format&fit=crop",
    tag: "industrial",
  },
  {
    slug: "pavimentacao-bairro-y",
    titulo: "Pavimentação e Drenagem",
    resumo: "Execução de pavimentação e galerias em vias urbanas.",
    capa:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    tag: "infra",
  },
  {
    slug: "refrigeracao-planta-z",
    titulo: "Sistema de Refrigeração",
    resumo: "Projeto e montagem de sala de máquinas, redes e isolamento térmico.",
    capa:
      "https://images.unsplash.com/photo-1581093588401-16a9cfd9b8f0?q=80&w=1200&auto=format&fit=crop",
    tag: "refrigeracao",
  },
];

export default function PortfolioListPage() {
  const [filtro, setFiltro] = useState<"todos" | Projeto["tag"]>("todos");
  const itens = useMemo(() => (filtro === "todos" ? projetos : projetos.filter(p => p.tag === filtro)), [filtro]);

  return (
    <>
      {/* HERO */}
      <section
        className="relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />
        <div className="container relative section-lg text-white">
          <h1>Portfólio</h1>
          <p className="mt-4 max-w-3xl text-white/90">
            Seleção de projetos que demonstram nossa experiência no setor civil e mecânico-industrial.
          </p>
        </div>
      </section>

      {/* FILTRO */}
      <section className="bg-surface">
        <div className="container section flex flex-wrap items-center gap-3">
          {[
            ["todos", "Todos"],
            ["industrial", "Industrial"],
            ["infra", "Infraestrutura"],
            ["refrigeracao", "Refrigeração"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setFiltro(value as any)}
              className={`rounded-md px-5 py-2.5 text-sm font-semibold ${
                filtro === value ? "bg-brand text-white" : "bg-white text-ink shadow-soft"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section>
        <div className="container section">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {itens.map((p) => (
              <article key={p.slug} className="overflow-hidden rounded-2xl bg-white shadow-soft transition-transform hover:-translate-y-1">
                <div
                  className="h-56 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.capa}')` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ink">{p.titulo}</h3>
                  <p className="mt-2 text-ink/70">{p.resumo}</p>
                  <Link href={`/portfolio/${p.slug}`} className="mt-4 inline-block link-underline text-brand">
                    Ver detalhes →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
