import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="container section">
        <h1 className="text-brand">Projeto não encontrado</h1>
        <p className="mt-2 text-ink/80">Verifique o link ou volte ao portfólio para explorar outros cases.</p>
        <Link href="/portfolio" className="mt-6 inline-block btn btn-primary">Voltar ao portfólio</Link>
      </div>
    </section>
  );
}