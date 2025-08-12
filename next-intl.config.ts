import {defineRouting} from 'next-intl/routing';

export default defineRouting({
  locales: ['pt','en','es'],
  defaultLocale: 'pt',
  localePrefix: 'always'   // força /pt, /en, /es
});
