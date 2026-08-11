import type { Metadata } from 'next'

import { Hero } from '@/components/home/hero'
import { CapabilityIndex } from '@/components/home/capability-index'
import { ProcessTimeline } from '@/components/home/process-timeline'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { Trust } from '@/components/home/trust'
import { ContactCta } from '@/components/home/contact-cta'
import { OG_IMAGE, site } from '@/lib/content'

export const metadata: Metadata = {
  title: 'R3 Tech | Software a Medida, Desarrollo Web e IT Solutions',
  description:
    'Desarrollamos software a medida, sitios web, ecommerce, SaaS, automatización y soporte IT para empresas en Rosario y Argentina. Tecnología pensada para resolver problemas reales de negocio.',
  alternates: { canonical: '/' },
  openGraph: {
    url: site.url,
    title: 'R3 Tech | Software a Medida, Desarrollo Web e IT Solutions',
    description: 'Construimos la tecnología que tu negocio necesita.',
    ...OG_IMAGE,
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityIndex />
      <ProcessTimeline />
      <FeaturedProjects />
      <Trust />
      <ContactCta />
    </>
  )
}
