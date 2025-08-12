// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};