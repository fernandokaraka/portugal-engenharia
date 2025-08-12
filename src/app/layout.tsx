import './globals.css'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Portugal Engenharia',
  description: 'Construindo o futuro com qualidade e inovação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={routing.defaultLocale}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}