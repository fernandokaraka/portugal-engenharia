'use client'

import { useState } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { cn } from '@/lib/utils'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('nav')

  const navigation = [
    { name: t('home'), href: `/` },
    { name: t('about'), href: `/sobre` },
    { name: t('portfolio'), href: `/portfolio` },
    { name: t('contact'), href: `/contato` },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-[color:var(--color-primary)] hover:text-[color:var(--color-secondary)] transition-colors font-medium',
                  pathname === item.href && 'underline underline-offset-4'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button size="sm" className="btn-primary">
              {t('quote')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[color:var(--color-primary)] hover:text-[color:var(--color-secondary)] hover:bg-gray-100"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t">
            <div className="py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50',
                    pathname === item.href && 'text-green-600 bg-green-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2 space-y-2">
                <LanguageSwitcher />
                <Button className="w-full" size="sm">
                  {t('quote')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}