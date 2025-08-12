import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  let resolvedLocale: string = locale as string;
  if (!routing.locales.includes(resolvedLocale as unknown as (typeof routing)['locales'][number])) {
    resolvedLocale = routing.defaultLocale;
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});