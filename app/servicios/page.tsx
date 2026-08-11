import type { Metadata } from 'next'
import Link from 'next/link'

import { ArrowGlyph, WhatsAppIcon } from '@/components/ui/icons'
import { CtaLink } from '@/components/ui/button'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { serviceCategories, services, WHATSAPP_URL } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Software a medida, desarrollo web, ecommerce, SaaS, automatización y soporte IT. Conocé todo lo que R3 Tech puede construir para tu negocio.',
  alternates: { canonical: '/servicios' },
}

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-ink-3">Servicios</span>
            <h1 className="mt-5 text-[2.5rem] leading-[1.06] font-medium tracking-tight text-ink sm:text-[3.25rem]">
              Tecnología de punta a punta, sin depender de tres proveedores distintos.
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
              Desarrollamos el producto y sostenemos la infraestructura que lo corre. Elegí un servicio para
              ver el alcance completo.
            </p>
          </Reveal>
        </div>
      </section>

      {serviceCategories.map((category) => {
        const categoryServices = services.filter((service) => service.category === category.id)
        return (
          <section key={category.id} className="border-t border-line py-16 sm:py-20">
            <div className="container-page">
              <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-[1.5rem] font-medium tracking-tight text-ink">{category.label}</h2>
                <p className="text-[14px] text-ink-2">{category.description}</p>
              </Reveal>

              <RevealGroup className="mt-8 flex flex-col" stagger={0.06}>
                {categoryServices.map((service) => (
                  <RevealItem key={service.slug}>
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="group/row grid grid-cols-[auto_1fr_auto] items-center gap-x-5 border-b border-line py-6 transition-colors duration-300 first:border-t hover:border-ink/20 sm:gap-x-8 sm:py-7"
                    >
                      <span className="index-num text-[13px] text-ink-3">{service.index}</span>
                      <span className="min-w-0">
                        <span className="block text-[1.25rem] font-medium tracking-tight text-ink transition-colors duration-300 group-hover/row:text-accent sm:text-[1.5rem]">
                          {service.title}
                        </span>
                        <span className="mt-1 block text-[13.5px] text-ink-2 sm:text-[14px]">
                          {service.summary}
                        </span>
                      </span>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line-strong text-ink-2 transition-all duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:border-accent/40 group-hover/row:bg-accent/[0.06] group-hover/row:text-accent">
                        <ArrowGlyph className="size-4" />
                      </span>
                    </Link>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </section>
        )
      })}

      <section className="border-t border-line py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-line-strong bg-paper-sunken px-7 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="text-[1.375rem] font-medium tracking-tight text-ink">
                ¿No estás seguro qué necesitás?
              </h2>
              <p className="mt-2 max-w-md text-[14.5px] text-ink-2">
                Contanos tu caso y te ayudamos a definir el alcance correcto, sin compromiso.
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
