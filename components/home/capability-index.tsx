import Link from 'next/link'

import { ArrowGlyph } from '@/components/ui/icons'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { services } from '@/lib/content'

export function CapabilityIndex() {
  return (
    <section className="border-t border-line py-24 sm:py-32" id="capacidades">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-ink-3">Qué hacemos</span>
              <h2 className="mt-5 max-w-sm text-[2rem] leading-[1.08] font-medium tracking-tight text-ink sm:text-[2.5rem]">
                Todo lo que tu negocio necesita de tecnología, en un mismo lugar.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-2">
                Seis capacidades centrales que cubren desde el primer sistema interno hasta la plataforma que
                se convierte en tu producto.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <RevealGroup className="flex flex-col" stagger={0.06}>
              {services.map((service) => (
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
                      <span className="mt-1 block truncate text-[13.5px] text-ink-2 sm:text-[14px]">
                        {service.short}
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
        </div>
      </div>
    </section>
  )
}
