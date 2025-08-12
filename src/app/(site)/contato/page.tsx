import ContactForm from './ContactForm';

export default function ContatoPage() {
  return (
    <section className="bg-surface">
      <div className="container grid gap-10 py-12 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand">Fale com a gente</h1>
          <p className="mt-2 max-w-xl text-ink/80">
            Entre em contato para orçamentos, dúvidas ou parcerias. Retornamos rapidamente.
          </p>

          <div className="mt-6 space-y-3 rounded-xl bg-white p-6 shadow-soft">
            <div><span className="font-semibold">Telefone:</span> (34) 3231-1080</div>
            <div><span className="font-semibold">E-mail:</span> portugalgeng.comercial@gmail.com</div>
            <div>
              <span className="font-semibold">Endereço:</span>{' '}
              Av. Profa. Juvenília dos Santos, 1432 — Santa Mônica — Uberlândia
            </div>
            <a
              className="inline-block rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-600"
              href="https://wa.me/553432311080"
              target="_blank"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
