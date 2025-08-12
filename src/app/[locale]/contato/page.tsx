'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContatoPage() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementar envio do formulário
    console.log('Formulário enviado:', formData)
    alert(t('contact.form.success'))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('contact.info.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('contact.info.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('contact.info.phone')}</h3>
                    <p className="text-gray-600">(34) 3231-1080</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('contact.info.email')}</h3>
                    <p className="text-gray-600">portugalgeng.comercial@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('contact.info.address')}</h3>
                    <p className="text-gray-600">Av. Profa. Juvenília dos Santos, 1432</p>
                    <p className="text-gray-600">Santa Mônica - Uberlândia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('contact.info.hours')}</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {t('contact.form.title')}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')} {t('contact.form.required')}
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder={t('contact.form.placeholders.name')}
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder={t('contact.form.placeholders.phone')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')} {t('contact.form.required')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={t('contact.form.placeholders.email')}
                    />
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.subject')} {t('contact.form.required')}
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      required
                      value={formData.assunto}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">{t('contact.form.selectSubject')}</option>
                      <option value="orcamento">{t('contact.form.subjects.quote')}</option>
                      <option value="projeto">{t('contact.form.subjects.project')}</option>
                      <option value="consultoria">{t('contact.form.subjects.consulting')}</option>
                      <option value="parceria">{t('contact.form.subjects.partnership')}</option>
                      <option value="outro">{t('contact.form.subjects.other')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} {t('contact.form.required')}
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={t('contact.form.placeholders.message')}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('contact.location.title')}
            </h2>
            <p className="text-gray-600">
              {t('contact.location.subtitle')}
            </p>
          </div>
          
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">{t('contact.location.mapPlaceholder')}</span>
          </div>
        </div>
      </section>
    </div>
  )
}