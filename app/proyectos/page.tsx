import type { Metadata } from 'next'

import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { Reveal } from '@/components/motion/reveal'
import { ProjectRow } from '@/components/projects/project-row'
import { getWhatsAppUrl, projects } from '@/lib/content'

const WHATSAPP_URL = getWhatsAppUrl('Hola R3 Tech, quiero contarles sobre un proyecto que tengo en mente.')

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Proyectos reales desarrollados por R3 Tech, publicados y funcionando: sistemas de gestión, sitios web y plataformas a medida, además de CourtOS, nuestro producto en desarrollo.',
  alternates: { canonical: '/proyectos' },
}

export default function ProyectosPage() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-ink-3">Proyectos</span>
            <h1 className="mt-5 text-[2.5rem] leading-[1.06] font-medium tracking-tight text-ink sm:text-[3.25rem]">
              Proyectos reales, no solo ideas.
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
              Cada proyecto acá está publicado para que lo veas funcionando —en producción para un cliente real,
              como demo, o en desarrollo activo. Sin clientes inventados, sin métricas infladas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-4 sm:py-8">
        <div className="container-page">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-line-strong bg-paper-sunken px-7 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="text-[1.375rem] font-medium tracking-tight text-ink">
                ¿Tu proyecto podría ser el próximo?
              </h2>
              <p className="mt-2 max-w-md text-[15.5px] text-ink-2">
                Contanos qué querés construir y te decimos cómo lo encaramos.
              </p>
            </div>
            <CtaLink href={WHATSAPP_URL} external>
              <WhatsAppIcon />
              Hablar por WhatsApp
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  )
}
