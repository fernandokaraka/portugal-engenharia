import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SobrePage() {
  const t = useTranslations();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('about.history.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('about.history.p1')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('about.history.p2')}
              </p>
              <p className="text-gray-600">
                {t('about.history.p3')}
              </p>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Imagem da empresa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('about.values.quality.title')}</h3>
              <p className="text-gray-600">
                {t('about.values.quality.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('about.values.trust.title')}</h3>
              <p className="text-gray-600">
                {t('about.values.trust.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('about.values.innovation.title')}</h3>
              <p className="text-gray-600">
                {t('about.values.innovation.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">João Silva</h3>
              <p className="text-green-600 font-medium mb-2">Diretor Geral</p>
              <p className="text-gray-600 text-sm">25+ anos de experiência em engenharia civil</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Maria Santos</h3>
              <p className="text-red-600 font-medium mb-2">Diretora de Projetos</p>
              <p className="text-gray-600 text-sm">Especialista em infraestrutura e grandes obras</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Carlos Oliveira</h3>
              <p className="text-green-600 font-medium mb-2">Diretor Técnico</p>
              <p className="text-gray-600 text-sm">Inovação em métodos construtivos sustentáveis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('about.ctaTitle')}
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('about.ctaDesc')}
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contato">{t('about.ctaButton')}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}