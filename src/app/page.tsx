import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        {/* Versão clara (sem imagem) */}
        <div className="container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Construindo Seu Futuro
              <br className="hidden sm:block" /> com{' '}
              <span className="text-brand">Inovação</span> e{' '}
              <span className="text-brand">Qualidade</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-ink/80">
              Uma empresa renomada no setor de engenharia civil dedicada a oferecer
              soluções abrangentes para projetos de construção e infraestrutura.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                href="/contato"
                className="btn btn-primary rounded-md bg-brand px-6 py-3 text-white hover:bg-brand-600"
              >
                Contato (34) 3231-1080
              </Link>
              <Link
                href="/portfolio"
                className="btn rounded-md border border-black/10 px-6 py-3 text-ink hover:border-black/20 hover:bg-surface"
              >
                Ver projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="border-y border-black/5 bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {[
              ['1200+', 'Clientes Satisfeitos'],
              ['35+', 'Obras Entregues'],
              ['2500+', 'Projetos Aprovados'],
              ['45+', 'Certificações']
            ].map(([n, t]) => (
              <div key={t} className="">
                <div className="text-3xl font-extrabold text-ink sm:text-4xl">{n}</div>
                <div className="mt-1 text-sm text-ink/70">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS (intro) */}
      <section className="bg-surface">
        <div className="container py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-brand sm:text-4xl">
              Nossos Serviços em Destaque
            </h2>
            <p className="mt-2 text-ink/80">Construindo Soluções, Superando Expectativas</p>
            <p className="mt-4 text-ink/80">
              Na Portugal Engenharia, oferecemos uma gama abrangente de serviços que
              abraçam cada aspecto do setor de engenharia. Desde a infraestrutura de
              loteamentos até a execução de obras de grande porte, nossa expertise é a
              garantia de projetos bem-sucedidos.
            </p>
          </div>

          {/* Cards simples de áreas (placeholders) */}
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Residenciais', 'Execução e gerenciamento de obras residenciais.'],
              ['Comerciais & Industriais', 'Projetos e obras para negócios e indústrias.'],
              ['Infraestrutura', 'Pavimentação, drenagem, loteamentos e urbanismo.']
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-soft">
                <div className="text-lg font-semibold text-ink">{title}</div>
                <p className="mt-2 text-sm text-ink/70">{desc}</p>
                <Link
                  href="/portfolio"
                  className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
                >
                  Ver projetos →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="relative">
        <div className="container py-14">
          <div className="rounded-2xl bg-brand px-6 py-10 text-center text-white shadow-soft sm:px-10">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Pronto para começar seu projeto?
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/90">
              Entre em contato conosco e descubra como podemos transformar suas ideias em realidade.
            </p>
            <div className="mt-6">
              <Link
                href="/contato"
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand hover:bg-surface"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
