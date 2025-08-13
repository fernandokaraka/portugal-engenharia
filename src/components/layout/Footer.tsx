import { Logo } from '@/components/ui/Logo'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-primary)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo className="text-white hover:text-[color:var(--color-accent)]" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Há mais de 25 anos construindo o futuro com qualidade, inovação e compromisso com a excelência em cada projeto.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">contato@portugalengenharia.com</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/sobre" className="text-gray-200 hover:text-[color:var(--color-accent)] transition-colors">Sobre Nós</a></li>
              <li><a href="/portfolio" className="text-gray-200 hover:text-[color:var(--color-accent)] transition-colors">Portfólio</a></li>
              <li><a href="/contato" className="text-gray-200 hover:text-[color:var(--color-accent)] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-1 text-green-400" />
                <div className="text-gray-400 text-sm">
                  <p>+351 XXX XXX XXX</p>
                  <p>+351 XXX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-green-400" />
                <div className="text-gray-400 text-sm">
                  <p>Lisboa, Portugal</p>
                  <p>Rua das Engenharias, 123</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Portugal Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}