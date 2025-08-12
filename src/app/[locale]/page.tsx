import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { Building2, Landmark, ClipboardList } from 'lucide-react';

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero bg-white">
        <div className="container text-center py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[color:var(--color-text)] mb-6 leading-tight">
            {t('hero.h1Start')} <span className="text-[color:var(--color-primary)]">{t('hero.titleFuture')}</span>
            <br />
            {t('hero.h1Connector')} <span className="text-[color:var(--color-secondary)]">{t('hero.titleExcellence')}</span>
          </h1>
          <p className="text-lg md:text-xl text-[color:var(--color-text)]/80 max-w-3xl mx-auto mb-8">
            {t('hero.subtitle')}
          </p>
          <Button size="lg" asChild className="btn-primary">
            <Link href="/contato">{t('hero.ctaQuote')}</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-8 animate-fade-in">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[color:var(--color-secondary)] mb-2">1200+</h3>
              <p className="text-[color:var(--color-text)]/80 font-medium">{t('stats.clients')}</p>
            </div>
            <div className="card text-center p-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[color:var(--color-secondary)] mb-2">35+</h3>
              <p className="text-[color:var(--color-text)]/80 font-medium">{t('stats.delivered')}</p>
            </div>
            <div className="card text-center p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[color:var(--color-secondary)] mb-2">2500+</h3>
              <p className="text-[color:var(--color-text)]/80 font-medium">{t('stats.approved')}</p>
            </div>
            <div className="card text-center p-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[color:var(--color-secondary)] mb-2">45+</h3>
              <p className="text-[color:var(--color-text)]/80 font-medium">{t('stats.certifications')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[color:var(--color-gray-50)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[color:var(--color-text)] mb-6 text-balance">
              {t('services.title')}
            </h2>
            <p className="text-lg text-[color:var(--color-text)]/80 max-w-3xl mx-auto text-pretty mb-3">
              {t('services.subtitle')}
            </p>
            <p className="text-[color:var(--color-text)]/80 max-w-3xl mx-auto text-pretty">
              {t('services.text')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-hover p-8 group">
              <div className="w-14 h-14 bg-[color:var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-5">
                <Building2 className="h-7 w-7 text-[color:var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--color-text)] mb-3">
                {t('services.construction.title')}
              </h3>
              <p className="text-[color:var(--color-text)]/80 mb-6 leading-relaxed">
                {t('services.construction.description')}
              </p>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center text-[color:var(--color-primary)] font-semibold hover:text-[color:var(--color-primary-light)] transition-colors"
              >
                {t('services.construction.cta')} 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="card card-hover p-8 group">
              <div className="w-14 h-14 bg-[color:var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-5">
                <Landmark className="h-7 w-7 text-[color:var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--color-text)] mb-3">
                {t('services.infrastructure.title')}
              </h3>
              <p className="text-[color:var(--color-text)]/80 mb-6 leading-relaxed">
                {t('services.infrastructure.description')}
              </p>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center text-[color:var(--color-primary)] font-semibold hover:text-[color:var(--color-primary-light)] transition-colors"
              >
                {t('services.infrastructure.cta')} 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="card card-hover p-8 group">
              <div className="w-14 h-14 bg-[color:var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-5">
                <ClipboardList className="h-7 w-7 text-[color:var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--color-text)] mb-3">
                {t('services.consulting.title')}
              </h3>
              <p className="text-[color:var(--color-text)]/80 mb-6 leading-relaxed">
                {t('services.consulting.description')}
              </p>
              <Link 
                href="/contato" 
                className="inline-flex items-center text-[color:var(--color-primary)] font-semibold hover:text-[color:var(--color-primary-light)] transition-colors"
              >
                {t('services.consulting.cta')} 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[color:var(--color-gray-50)]">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[color:var(--color-text)] mb-6 text-balance">
              {t('cta.ready')}
            </h2>
            <p className="text-lg text-[color:var(--color-text)]/80 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
              {t('cta.readyDesc')}
            </p>
            <Button size="lg" asChild className="btn-primary">
              <Link href="/contato">{t('cta.freeQuote')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}