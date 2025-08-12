export type Projeto = {
  slug: string;
  titulo: string;
  resumo: string;
  descricao: string;
  capa: string;
  tag: "industrial" | "infra" | "refrigeracao";
  imagens: string[];
  itens: string[];
};

export const projetos: Projeto[] = [
  {
    slug: "montagem-industrial-x",
    titulo: "Montagem e Manutenção Industrial",
    resumo: "Intervenções em caldeiraria, tubulações e soldas especiais.",
    descricao:
      "Escopo envolvendo caldeiraria, tubulações, soldas especiais e gerenciamento de obra em ambiente industrial, com foco em SSMA e controle de qualidade.",
    capa:
      "https://images.unsplash.com/photo-1581093458791-9d130e7f2a87?q=80&w=1200&auto=format&fit=crop",
    tag: "industrial",
    imagens: [
      "https://images.unsplash.com/photo-1581093458791-9d130e7f2a87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
    ],
    itens: ["Caldeiraria", "Tubulações", "Soldas especiais", "Gerenciamento de obra", "SSMA"],
  },
  {
    slug: "pavimentacao-bairro-y",
    titulo: "Pavimentação e Drenagem",
    resumo: "Execução de pavimentação e galerias em vias urbanas.",
    descricao:
      "Execução de pavimentação asfáltica, drenagem e galerias com planejamento para reduzir impacto no tráfego e garantir entregas no prazo.",
    capa:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    tag: "infra",
    imagens: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    ],
    itens: ["Pavimentação", "Drenagem", "Galerias", "Sinalização"],
  },
  {
    slug: "refrigeracao-planta-z",
    titulo: "Sistema de Refrigeração",
    resumo: "Projeto e montagem de sala de máquinas, redes e isolamento térmico.",
    descricao:
      "Projeto e montagem de sala de máquinas, redes e isolamento térmico. Comissionamento e startup com segurança e performance.",
    capa:
      "https://images.unsplash.com/photo-1581093588401-16a9cfd9b8f0?q=80&w=1200&auto=format&fit=crop",
    tag: "refrigeracao",
    imagens: [
      "https://images.unsplash.com/photo-1581093588401-16a9cfd9b8f0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
    ],
    itens: ["Amônia", "Água gelada", "Sala de máquinas", "Isolamento térmico"],
  },
];

export function getProjetoBySlug(slug: string) {
  const s = decodeURIComponent(slug).toLowerCase();
  return projetos.find((p) => p.slug.toLowerCase() === s);
}
