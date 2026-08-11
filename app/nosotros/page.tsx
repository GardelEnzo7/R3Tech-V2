import type { Metadata } from 'next'

import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { ProcessTimeline } from '@/components/home/process-timeline'
import { benefits, WHATSAPP_URL } from '@/lib/content'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'R3 Tech es un estudio de desarrollo de tecnología con base en Rosario, Argentina. Conocé cómo trabajamos y qué nos diferencia.',
  alternates: { canonical: '/nosotros' },
}

const principles = [
  {
    title: 'Entender antes de construir',
    description:
      'Ningún proyecto empieza en el editor de código. Empieza entendiendo el proceso real que la tecnología tiene que resolver.',
  },
  {
    title: 'Tecnología con criterio',
    description:
      'Elegimos la herramienta correcta para el problema, no la más de moda. Simple cuando alcanza con simple, robusto cuando el negocio lo exige.',
  },
  {
    title: 'Nada se entrega y se abandona',
    description:
      'El trabajo no termina en el lanzamiento. Acompañamos, damos soporte y ajustamos a medida que el negocio cambia.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-ink-3">Nosotros</span>
            <h1 className="mt-5 text-[2.5rem] leading-[1.06] font-medium tracking-tight text-ink sm:text-[3.25rem]">
              Tecnología con criterio de negocio, no solo de código.
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
              R3 Tech es un estudio de desarrollo de tecnología con base en Rosario, Argentina. Construimos
              software, sitios web, plataformas y soluciones IT para empresas que necesitan que su tecnología
              funcione de verdad, no solo que exista.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page">
          <RevealGroup className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8" stagger={0.08}>
            {principles.map((principle) => (
              <RevealItem key={principle.title}>
                <h2 className="text-[1.0625rem] font-semibold text-ink">{principle.title}</h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">{principle.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ProcessTimeline />

      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow text-ink-3">Cómo trabajamos día a día</span>
                <h2 className="mt-5 max-w-sm text-[2rem] leading-[1.08] font-medium tracking-tight text-ink sm:text-[2.5rem]">
                  Lo que se mantiene igual en cada proyecto.
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <RevealGroup className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2" stagger={0.06}>
                {benefits.map((benefit) => (
                  <RevealItem key={benefit} className="flex items-start gap-3 border-b border-line pb-5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent/[0.08] text-accent">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-[15px] text-ink">{benefit}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-line-strong bg-paper-sunken px-7 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="text-[1.375rem] font-medium tracking-tight text-ink">Hablemos de tu proyecto</h2>
              <p className="mt-2 max-w-md text-[14.5px] text-ink-2">
                Contanos qué necesitás y te respondemos por WhatsApp o email.
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
