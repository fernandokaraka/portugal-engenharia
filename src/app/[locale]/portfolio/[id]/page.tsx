'use client'

import { useParams } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { getProjectById, projects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, Calendar, MapPin, Building, X } from 'lucide-react'

export default function ProjectDetailPage() {
  const params = useParams()
  const locale = useLocale()
  const t = useTranslations()
  const project = getProjectById(params.id as string)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('projectDetail.notFound')}</h1>
          <Button asChild>
            <Link href={`/${locale}/portfolio`}>{t('projectDetail.backToPortfolio')}</Link>
          </Button>
        </div>
      </div>
    )
  }

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  // Outros projetos (excluindo o atual)
  const otherProjects = projects.filter(p => p.id !== project.id).slice(0, 3)

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link href={`/portfolio`} className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('projectDetail.backToPortfolio')}
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium">
                {project.type}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-600" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-green-600" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2 text-green-600" />
                <span>{project.type}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div 
            className="relative h-96 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all z-10 flex items-center justify-center">
              <span className="text-white bg-black/50 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {t('projectDetail.clickToEnlarge')}
              </span>
            </div>
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Imagem principal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Project Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('projectDetail.aboutProject')}
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                {project.description.split('\n\n').map((paragraph, index) => (
                  <div key={index} className="mb-4">
                    {paragraph.startsWith('**') ? (
                      <div className="font-semibold text-gray-800 mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </div>
                    ) : paragraph.startsWith('-') ? (
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="text-gray-600">
                            {item.replace(/^- /, '')}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t('projectDetail.gallery')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={index + 1}
                    className="relative h-32 bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all z-10" />
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Img {index + 2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('projectDetail.otherProjects')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((otherProject) => (
              <div key={otherProject.id} className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="relative h-48 bg-gray-200 rounded-t-lg">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Imagem</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {otherProject.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {otherProject.summary}
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/portfolio/${otherProject.id}`}>
                      {t('projectDetail.viewProject')}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('projectDetail.liked')}
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('projectDetail.likedDesc')}
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href={`/contato`}>{t('projectDetail.talkToUs')}</Link>
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="bg-gray-300 h-96 md:h-[600px] w-full rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xl">
                Imagem {currentImage + 1} de {project.images.length}
              </span>
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ArrowLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ArrowLeft className="h-8 w-8 rotate-180" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}