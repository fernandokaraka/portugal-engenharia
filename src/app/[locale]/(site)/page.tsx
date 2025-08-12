import Link from "next/link";

export default function HomePage() {
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
            ].map(([n, t]) => (
              <div key={t}>
                <div className="text-5xl font-extrabold text-ink">{n}</div>
                <div className="mt-2 text-ink/70">{t}</div>
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

      {/* SPLIT 1 */}
      <section>
        <div className="container section grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-brand">Soluções Industriais</h2>
            <p className="mt-4">
              Montagem e manutenção industrial com foco em caldeiraria, tubulações,
              soldas especiais e gerenciamento de obra. Aplicamos SSMA e controle de
              qualidade em todo o processo.
            </p>
            <ul className="mt-5 grid gap-2">
              {["Caldeiraria", "Tubulações", "Soldas especiais", "Gerenciamento de obra"].map(
                (i) => (
                  <li key={i} className="rounded-md bg-surface px-3 py-2">
                    {i}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="img-tile h-[380px]">
            <div
              className="img"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581093458791-9d130e7f2a87?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>
      </section>

      {/* SPLIT 2 */}
      <section className="bg-surface">
        <div className="container section grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1 img-tile h-[380px]">
            <div
              className="img"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-brand">Infraestrutura Urbana</h2>
            <p className="mt-4">
              Pavimentação asfáltica, drenagem e galerias. Planejamento para reduzir
              impacto no trânsito e entregas dentro do prazo.
            </p>
            <ul className="mt-5 grid gap-2">
              {[
                "Pavimentação e drenagem",
                "Galerias",
                "Sinalização",
                "Controle tecnológico",
              ].map((i) => (
                <li key={i} className="rounded-md bg-white px-3 py-2 shadow-soft">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPLIT 3 */}
      <section>
        <div className="container section grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-brand">Projetos Sob Medida</h2>
            <p className="mt-4">
              Refrigeração (amônia/água gelada), salas de máquinas, redes e isolamento térmico.
              Engineering-to-order para necessidades específicas.
            </p>
            <ul className="mt-5 grid gap-2">
              {["Amônia", "Água gelada", "Sala de máquinas", "Isolamento térmico"].map((i) => (
                <li key={i} className="rounded-md bg-surface px-3 py-2">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="img-tile h-[380px]">
            <div
              className="img"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581093588401-16a9cfd9b8f0?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container section">
          <div className="rounded-2xl bg-brand px-6 py-14 text-center text-white shadow-soft">
            <h3 className="text-4xl font-extrabold">Pronto para começar seu projeto?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Fale conosco e receba uma proposta personalizada.
            </p>
            <div className="mt-7">
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
