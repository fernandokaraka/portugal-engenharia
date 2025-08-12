// src/app/portfolio/[slug]/page.tsx

const db: Record<
  string,
  { titulo: string; descricao: string; itens: string[]; imagens: string[] }
> = {
  'montagem-industrial-x': {
    titulo: 'Montagem e Manutenção Industrial',
    descricao:
      'Escopo envolvendo caldeiraria, tubulações, soldas especiais e gerenciamento de obra em ambiente industrial.',
    itens: ['Caldeiraria', 'Tubulações', 'Soldas especiais', 'Gerenciamento de obra', 'SSMA'],
    imagens: ['/portfolio/industrial.jpg']
  },
  'pavimentacao-bairro-y': {
    titulo: 'Pavimentação e Drenagem Urbana',
    descricao:
      'Execução de pavimentação asfáltica, drenagem e galerias, com controle tecnológico e segurança de tráfego.',
    itens: ['Pavimentação', 'Drenagem', 'Galerias', 'Sinalização'],
    imagens: ['/portfolio/pavimentacao.jpg']
  },
  'refrigeracao-planta-z': {
    titulo: 'Sistema de Refrigeração Industrial',
    descricao:
      'Projeto e montagem de sala de máquinas, redes, isolamento térmico e comissionamento (startup).',
    itens: ['Amônia', 'Água gelada', 'Sala de máquinas', 'Isolamento térmico'],
    imagens: ['/portfolio/refrigeracao.jpg']
  }
};

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const projeto = db[params.slug];

  if (!projeto) {
    // Placeholder em vez de 404
    return (
      <section>
        <div className="container py-12">
          <h1 className="text-3xl font-bold text-brand">Projeto em construção</h1>
          <p className="mt-2 max-w-2xl text-ink/80">
            Em breve adicionaremos detalhes deste projeto. Volte mais tarde ou veja outros cases no portfólio.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-brand">{projeto.titulo}</h1>
        <p className="mt-2 max-w-3xl text-ink/80">{projeto.descricao}</p>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {projeto.itens.map((i) => (
            <li key={i} className="rounded-xl bg-surface p-3">{i}</li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projeto.imagens.map((src, i) => (
            <div key={i} className="h-60 w-full rounded-xl bg-[url('/placeholder.svg')] bg-cover bg-center" />
          ))}
        </div>
      </div>
    </section>
  );
}
