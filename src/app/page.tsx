import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO com imagem + overlay + padding 64px */}
      <section
        className="relative"
        style={{
          backgroundImage: "url('/images/hero_construction.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative py-16 sm:py-20 lg:py-24 min-h-[520px] flex items-center">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1>
              Construindo Seu Futuro com <span className="text-support">Inovação</span> e{' '}
              <span className="text-support">Qualidade</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-white/90">
              Uma empresa renomada no setor de engenharia civil dedicada a oferecer
              soluções abrangentes para projetos de construção e infraestrutura.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="/contato" className="btn btn-primary">
                Contato (34) 3231-1080
              </Link>
              <Link
                href="/portfolio"
                className="btn bg-white text-ink hover:bg-surface"
              >
                Ver projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="border-y border-black/5 bg-white">
        <div className="container py-14">
          <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-4">
            {[
              ['1200+', 'Clientes Satisfeitos'],
              ['35+', 'Obras Entregues'],
              ['2500+', 'Projetos Aprovados'],
              ['45+', 'Certificações']
            ].map(([n, t]) => (
              <div key={t}>
                <div className="text-4xl font-extrabold text-ink">{n}</div>
                <div className="mt-1 text-ink/70">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS INTRO */}
      <section className="bg-surface">
        <div className="container py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-brand">Nossos Serviços em Destaque</h2>
            <p className="mt-3 text-ink/80">
              Da infraestrutura urbana à montagem industrial, unimos planejamento,
              tecnologia e execução para entregar obras com segurança e performance.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Residenciais', 'Execução e gerenciamento de obras residenciais.'],
              ['Comerciais & Industriais', 'Projetos e obras para negócios e indústrias.'],
              ['Infraestrutura', 'Pavimentação, drenagem, loteamentos e urbanismo.']
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="text-lg font-semibold text-ink">{title}</div>
                <p className="mt-2 text-ink/70">{desc}</p>
                <Link href="/portfolio" className="mt-4 inline-block font-medium text-brand hover:underline">
                  Ver projetos →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTIONS (texto + imagem) */}
      <section>
        <div className="container py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-brand">Soluções Industriais</h2>
            <p className="mt-3 text-ink/80">
              Montagem e manutenção industrial com foco em caldeiraria, tubulações,
              soldas especiais e gerenciamento de obra. Aplicamos SSMA e controle de
              qualidade em todo o processo.
            </p>
            <ul className="mt-4 grid gap-2">
              {['Caldeiraria', 'Tubulações', 'Soldas especiais', 'Gerenciamento de obra'].map(i => (
                <li key={i} className="rounded-md bg-surface px-3 py-2">{i}</li>
              ))}
            </ul>
          </div>
          <div className="h-[360px] rounded-2xl bg-cover bg-center shadow-soft"
               style={{ backgroundImage: "url('/images/industrial_split.jpg')" }} />
        </div>

        <div className="container py-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 h-[360px] rounded-2xl bg-cover bg-center shadow-soft"
               style={{ backgroundImage: "url('/images/infra_split.jpg')" }} />
          <div className="order-1 md:order-2">
            <h2 className="text-brand">Infraestrutura Urbana</h2>
            <p className="mt-3 text-ink/80">
              Pavimentação asfáltica, drenagem e galerias. Planejamento para reduzir
              impacto no trânsito e entregas dentro do prazo.
            </p>
            <ul className="mt-4 grid gap-2">
              {['Pavimentação e drenagem', 'Galerias', 'Sinalização', 'Controle tecnológico'].map(i => (
                <li key={i} className="rounded-md bg-surface px-3 py-2">{i}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-brand">Projetos Sob Medida</h2>
            <p className="mt-3 text-ink/80">
              Refrigeração (amônia/água gelada), salas de máquinas, redes e isolamento térmico.
              Engineering-to-order para necessidades específicas.
            </p>
            <ul className="mt-4 grid gap-2">
              {['Amônia', 'Água gelada', 'Sala de máquinas', 'Isolamento térmico'].map(i => (
                <li key={i} className="rounded-md bg-surface px-3 py-2">{i}</li>
              ))}
            </ul>
          </div>
          <div className="h-[360px] rounded-2xl bg-cover bg-center shadow-soft"
               style={{ backgroundImage: "url('/images/refrig_split.jpg')" }} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section>
        <div className="container py-16">
          <div className="rounded-2xl bg-brand px-6 py-12 text-center text-white shadow-soft">
            <h3 className="text-3xl font-bold">Pronto para começar seu projeto?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/90">
              Fale conosco e receba uma proposta personalizada.
            </p>
            <div className="mt-6">
              <Link href="/contato" className="btn bg-white text-brand hover:bg-surface">
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
