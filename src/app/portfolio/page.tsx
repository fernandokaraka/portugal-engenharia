import Link from 'next/link';

const projetos = [
  {
    slug: 'montagem-industrial-x',
    titulo: 'Montagem e Manutenção Industrial',
    resumo: 'Intervenções em caldeiraria, tubulações e soldas especiais.',
    capa: '/portfolio/industrial.jpg'
  },
  {
    slug: 'pavimentacao-bairro-y',
    titulo: 'Pavimentação e Drenagem',
    resumo: 'Execução de pavimentação e galerias em vias urbanas.',
    capa: '/portfolio/pavimentacao.jpg'
  },
  {
    slug: 'refrigeracao-planta-z',
    titulo: 'Sistema de Refrigeração',
    resumo: 'Projeto e montagem de sala de máquinas, redes e isolamento térmico.',
    capa: '/portfolio/refrigeracao.jpg'
  }
];

export default function PortfolioListPage() {
  return (
    <section className="bg-surface">
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-brand">Portfólio</h1>
        <p className="mt-2 max-w-2xl text-ink/80">
          Seleção de projetos que demonstram nossa experiência no setor civil e mecânico-industrial.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p) => (
            <article key={p.slug} className="overflow-hidden rounded-xl bg-white shadow-soft">
              <div className="h-40 w-full bg-[url('/placeholder.svg')] bg-cover bg-center" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">{p.titulo}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.resumo}</p>
                <Link href={`/portfolio/${p.slug}`} className="mt-4 inline-block text-sm font-medium text-brand hover:underline">
                  Ver detalhes →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
