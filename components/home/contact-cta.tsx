import { ArrowUpRight, Rocket } from 'lucide-react'

import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { Reveal } from '@/components/motion/reveal'
import { site, WHATSAPP_URL } from '@/lib/content'

export function ContactCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-2xl bg-void">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(var(--color-void-ink)_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="absolute -top-24 right-[8%] h-64 w-64 rounded-full bg-[radial-gradient(circle,var(--color-accent-blue)_0%,transparent_70%)] opacity-25 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-start px-7 py-16 sm:px-14 sm:py-20 lg:items-center lg:px-16 lg:py-24 lg:text-center">
            <span className="grid size-12 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent-cyan">
              <Rocket className="size-5" />
            </span>

            <h2 className="mt-8 max-w-xl text-balance text-[2rem] leading-[1.1] font-medium tracking-tight text-void-ink sm:text-[2.75rem]">
              ¿Tenés una idea o un problema tecnológico?
            </h2>

            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-void-ink-2 sm:text-[1.0625rem]">
              Contanos qué necesitás y te proponemos la mejor forma de resolverlo, con tecnología real y
              seguimiento cercano.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row lg:items-center">
              <CtaLink href={WHATSAPP_URL} external variant="inverse">
                Hablar por WhatsApp
                <WhatsAppIcon />
              </CtaLink>
              <CtaLink href={site.mailto} variant="outline" className="border-void-line-strong text-void-ink hover:bg-void-ink/[0.06]">
                {site.email}
                <ArrowUpRight className="size-4" />
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
