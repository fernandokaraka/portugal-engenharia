'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // aqui você integraria com API/Email/Forms (Formspree etc.)
    setTimeout(() => {
      alert('Mensagem enviada! Entraremos em contato.');
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-white p-6 shadow-soft">
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium">Nome</label>
          <input className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/20" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input type="email" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/20" />
          </div>
          <div>
            <label className="block text-sm font-medium">Telefone</label>
            <input className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/20" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Assunto</label>
          <input className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/20" />
        </div>
        <div>
          <label className="block text-sm font-medium">Mensagem</label>
          <textarea rows={5} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/20" />
        </div>
        <button
          disabled={sending}
          className="rounded-md bg-brand px-5 py-2 text-white hover:bg-brand-600 disabled:opacity-60"
        >
          {sending ? 'Enviando...' : 'Enviar mensagem'}
        </button>
      </div>
    </form>
  );
}
