import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';

export default function PortfolioPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[color:var(--color-gray-50)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-[color:var(--color-text)]/80 mb-3">
              {t('portfolio.subtitle')}
            </p>
            <p className="text-[color:var(--color-text)]/80">
              {t('portfolio.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow group">
                {/* Project Image */}
                <div className="relative h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do projeto</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {t('portfolio.featured')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>

                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/portfolio/${project.id}`}>
                      {t('portfolio.viewDetails')}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('portfolio.ctaTitle')}
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('portfolio.ctaDesc')}
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href={`/contato`}>{t('portfolio.ctaButton')}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}