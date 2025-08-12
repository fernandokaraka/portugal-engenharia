'use client'

import { useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import { usePathname as useNextPathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = useNextPathname();
  const locale = useLocale();

  const currentLanguage = languages.find(lang => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    // Let next-intl handle the locale switch preserving the path
    const current = typeof window !== 'undefined' ? window.location.pathname : pathname;
    const segments = current.split('/').filter(Boolean);
    if (segments.length && ['pt', 'en', 'es'].includes(segments[0])) segments.shift();
    const withoutLocale = `/${segments.join('/')}` || '/';
    router.replace(withoutLocale, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
          'text-gray-600 hover:text-green-600 hover:bg-gray-100'
        )}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={cn(
                  'flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors',
                  locale === language.code && 'bg-green-50 text-green-600'
                )}
              >
                <span className="mr-3">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}