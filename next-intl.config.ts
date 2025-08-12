import {defineRouting} from 'next-intl/routing';

export default defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  // pt sem prefixo; en/es com prefixo
  localePrefix: 'as-needed'
});
