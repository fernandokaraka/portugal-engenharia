type Projeto = {
  titulo: string;
  descricao: string;
  itens: string[];
  imagens: string[];
};

const db: Record<string, Projeto> = {
  "montagem-industrial-x": {
    titulo: "Montagem e Manutenção Industrial",
    descricao:
      "Escopo envolvendo caldeiraria, tubulações, soldas especiais e gerenciamento de obra em ambiente industrial, com foco em SSMA e controle de qualidade.",
    itens: ["Caldeiraria", "Tubulações", "Soldas especiais", "Gerenciamento de obra", "SSMA"],
    imagens: [
      "https://images.unsplash.com/photo-1581093458791-9d130e7f2a87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "pavimentacao-bairro-y": {
    titulo: "Pavimentação e Drenagem Urbana",
    descricao:
      "Execução de pavimentação asfáltica, drenagem e galerias com planejamento para reduzir impacto no tráfego e garantir entregas no prazo.",
    itens: ["Pavimentação", "Drenagem", "Galerias", "Sinalização"],
    imagens: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  "refrigeracao-planta-z": {
    titulo: "Sistema de Refrigeração Industrial",
    descricao:
      "Projeto e montagem de sala de máquinas, redes e isolamento térmico. Comissionamento e startup com segurança e performance.",
    itens: ["Amônia", "Água gelada", "Sala de máquinas", "Isolamento térmico"],
    imagens: [
      "https://images.unsplash.com/photo-1581093588401-16a9cfd9b8f0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const projeto = db[params.slug];

  if (!projeto) {
    return (
      <section>
        <div className="container section">
          <h1 className="text-brand">Projeto em construção</h1>
          <p className="mt-3 max-w-2xl">
            Em breve adicionaremos detalhes deste projeto. Volte mais tarde ou veja outros cases no portfólio.
          </p>
        </div>
      </section>
    );
  }

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
              <li key={i} className="rounded-md bg-surface px-3 py-2">{i}</li>
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
