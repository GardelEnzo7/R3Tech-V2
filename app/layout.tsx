import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { Clarity } from '@/components/analytics/clarity'
import { MotionProvider } from '@/components/motion/motion-provider'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { WhatsAppFab } from '@/components/layout/whatsapp-fab'
import { services, site } from '@/lib/content'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'R3 Tech | Software a Medida, Desarrollo Web e IT Solutions',
    template: `%s | ${site.name}`,
  },
  description:
    'R3 Tech desarrolla software a medida, sitios y plataformas web, ecommerce, SaaS, automatización y soporte IT para empresas en Rosario y Argentina.',
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    locale: 'es_AR',
    title: 'R3 Tech | Software, Web e IT Solutions',
    description: 'Construimos la tecnología que tu negocio necesita: software, web, ecommerce, SaaS y soporte IT.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R3 Tech | Software, Web e IT Solutions',
    description: 'Construimos la tecnología que tu negocio necesita.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf9f6',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      logo: `${site.url}/r3tech-logo.webp`,
      description: 'Desarrollo de software a medida, páginas web, ecommerce, SaaS, automatización y soporte IT.',
      sameAs: [site.instagram],
      areaServed: { '@type': 'Country', name: 'Argentina' },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: site.locale,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#professional-service`,
      name: site.name,
      url: site.url,
      email: site.email,
      areaServed: { '@type': 'Country', name: 'Argentina' },
      address: { '@type': 'PostalAddress', addressRegion: 'Santa Fe', addressLocality: 'Rosario', addressCountry: 'AR' },
      sameAs: [site.instagram],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          url: `${site.url}/servicios/${service.slug}`,
          itemOffered: { '@type': 'Service', name: service.title, description: service.summary },
        })),
      },
    },
  ],
}

const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c')

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <MotionProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-[13px] focus:font-semibold focus:text-paper"
          >
            Saltar al contenido principal
          </a>
          <div id="top" />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <WhatsAppFab />
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString }} />
        <Clarity />
        <Analytics />
      </body>
    </html>
  )
}
