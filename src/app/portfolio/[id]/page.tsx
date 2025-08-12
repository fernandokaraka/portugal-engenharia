import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projetos, getProjetoBySlug } from "../_data";

type Props = { params: { slug: string } };

// Gera as rotas estáticas no build (evita cair em template padrão)
export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

// SEO dinâmico
export function generateMetadata({ params }: Props): Metadata {
  const projeto = getProjetoBySlug(params.slug);
  return {
    title: projeto ? `${projeto.titulo} · Portfólio | Portugal Engenharia` : "Projeto | Portfólio",
    description: projeto?.resumo ?? "Projeto do portfólio da Portugal Engenharia.",
  };
}

export default function ProjetoPage({ params }: Props) {
  const projeto = getProjetoBySlug(params.slug);
  if (!projeto) return notFound();

  return (
    <>
      <section className="bg-surface">
        <div className="container section">
          <h1 className="text-brand">{projeto.titulo}</h1>
          <p className="mt-4 max-w-3xl">{projeto.descricao}</p>
        </div>
      </section>

      <section>
        <div className="container section grid gap-12 md:grid-cols-2">
          <ul className="grid gap-2">
            {projeto.itens.map((i) => (
              <li key={i} className="rounded-md bg-surface px-3 py-2">
                {i}
              </li>
            ))}
          </ul>

          <div className="grid gap-5 sm:grid-cols-2">
            {projeto.imagens.map((src, i) => (
              <div key={i} className="img-tile h-64">
                <div className="img" style={{ backgroundImage: `url('${src}')` }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
