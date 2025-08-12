export default function SobrePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />
        <div className="container relative section-lg text-white">
          <h1>Sobre a Portugal Engenharia</h1>
          <p className="mt-4 max-w-3xl text-white/90">
            Empresa do setor civil e mecânico-industrial focada em atender segmentos
            industriais e civis, oferecendo soluções integradas aliadas à gestão de projetos
            e conhecimento técnico.
          </p>
        </div>
      </section>

      {/* MISSÃO / VISÃO */}
      <section>
        <div className="container section grid gap-8 md:grid-cols-2">
          <div className="card">
            <h2 className="text-brand">Missão</h2>
            <p className="mt-3">
              Fornecer soluções para obras alicerçadas em Gestão de Projetos, Engenharia e
              SSMA (Saúde, Segurança e Meio Ambiente), com eficiência, qualidade e foco no cliente.
            </p>
          </div>
          <div className="card">
            <h2 className="text-brand">Visão</h2>
            <p className="mt-3">
              Ser referência no setor civil e industrial, trabalhando por um ambiente mais
              sustentável e por resultados duradouros.
            </p>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-surface">
        <div className="container section">
          <h2 className="text-brand">Nossos Pilares</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Tecnologia", "Técnicas e ferramentas modernas para produtividade e qualidade."],
              ["Insumos", "Seleção criteriosa de materiais e fornecedores para performance e prazo."],
              ["Planejamento", "Gestão de escopo, prazo, custo e risco para entregar no nível esperado."],
            ].map(([title, desc]) => (
              <div key={title} className="card">
                <div className="text-lg font-semibold">{title}</div>
                <p className="mt-2 text-ink/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section>
        <div className="container section grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-brand">Como trabalhamos</h2>
            <p className="mt-4">
              Abordagem colaborativa e personalizada: diagnóstico, planejamento, gestão de
              risco/SSMA, execução com controle de qualidade e comissionamento.
            </p>
            <ul className="mt-5 grid gap-2">
              {[
                "Diagnóstico e planejamento",
                "Gestão de risco e SSMA",
                "Execução com controle de qualidade",
                "Comissionamento e entrega",
              ].map((i) => (
                <li key={i} className="rounded-md bg-surface px-3 py-2">{i}</li>
              ))}
            </ul>
          </div>
          <div className="img-tile h-[400px]">
            <div
              className="img"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="border-y border-black/5">
        <div className="container section">
          <div className="grid grid-cols-2 gap-12 text-center sm:grid-cols-4">
            {[
              ["1200+", "Clientes Satisfeitos"],
              ["35+", "Obras Entregues"],
              ["2500+", "Projetos Aprovados"],
              ["45+", "Certificações"],
            ].map(([n, t]) => (
              <div key={t}>
                <div className="text-5xl font-extrabold">{n}</div>
                <div className="mt-2 text-ink/70">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
