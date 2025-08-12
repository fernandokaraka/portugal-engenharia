// src/app/sobre/page.tsx
export default function SobrePage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container py-12">
          <h1 className="text-3xl font-bold text-brand">Sobre a Portugal Engenharia</h1>
          <p className="mt-3 max-w-3xl text-ink/80">
            A Portugal Engenharia é uma empresa do setor civil e mecânico-industrial focada em atender
            segmentos industriais e civis, oferecendo soluções integradas aliadas à gestão de projetos e conhecimento técnico.
          </p>
        </div>
      </section>

      <section>
        <div className="container grid gap-8 py-12 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">Missão</h2>
            <p className="mt-2 text-ink/80">
              Fornecer soluções para obras alicerçadas nos pilares de Gestão de Projetos, Engenharia e SSMA
              (Saúde, Segurança e Meio Ambiente), com eficiência, qualidade e foco no cliente.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">Visão</h2>
            <p className="mt-2 text-ink/80">
              Ser referência no setor civil e industrial, trabalhando por um ambiente mais sustentável e por resultados duradouros.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container py-12">
          <h2 className="text-2xl font-bold text-brand">Nossos Pilares</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              ['Tecnologia', 'Aplicação de técnicas e ferramentas modernas para produtividade e qualidade.'],
              ['Insumos', 'Seleção criteriosa de materiais e fornecedores, garantindo performance e prazo.'],
              ['Planejamento', 'Gestão de escopo, prazo, custo e risco para entregar no nível esperado.']
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-soft">
                <div className="text-lg font-semibold">{title}</div>
                <p className="mt-2 text-ink/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <h2 className="text-2xl font-bold text-brand">Áreas de Atuação</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Montagem e Manutenção Industrial',
              'Caldeiraria',
              'Tubulações',
              'Manutenção Mecânica',
              'Soldas Especiais',
              'Isolamento Térmico',
              'Gerenciamento de Obra',
              'Refrigeração (amônia, água gelada, sala de máquinas, redes)',
              'Sistemas de Prevenção e Combate a Incêndio (hidrantes, sprinklers)',
              'Pavimentação e Galerias',
              'Adequações de Segurança (NR-35, NR-13, NR-12, NR-36)',
              'Locação de Máquinas e Equipamentos'
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white p-5 shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
