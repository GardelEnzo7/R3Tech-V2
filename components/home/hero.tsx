'use client'

import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'

import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { HeroMark } from '@/components/home/hero-mark'
import { LinesReveal } from '@/components/motion/text-reveal'
import { getWhatsAppUrl } from '@/lib/content'

const WHATSAPP_URL = getWhatsAppUrl('Hola R3 Tech, quiero saber más sobre sus servicios.')

const headline = ['Construimos la tecnología', 'que tu negocio necesita.']

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32 lg:pt-56 lg:pb-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[2%] hidden w-[40vw] max-w-[560px] -translate-y-1/2 lg:block"
      >
        <HeroMark className="aspect-square w-full" />
      </div>

      <div className="container-page relative">
        <div className="max-w-3xl">
          <div className="eyebrow flex items-center gap-2.5 text-ink-2 sm:animate-hero-eyebrow">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-accent-cyan opacity-75 animate-pulse-ring motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            R3 Tech — Rosario, Argentina
          </div>

          <h1 className="mt-7 text-[2.75rem] leading-[1.03] font-medium tracking-tight text-ink sm:text-[3.75rem] lg:text-[4.5rem]">
            <LinesReveal lines={headline} delay={0.15} />
          </h1>

          <p className="mt-8 max-w-xl text-balance text-[1.0625rem] leading-relaxed text-ink-2 sm:text-lg sm:animate-hero-paragraph">
            Software a medida, sitios y plataformas web, ecommerce, SaaS, automatización y soporte IT.
            Tecnología pensada para resolver problemas reales de negocio, no para lucir complicada.
          </p>

          <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:animate-hero-ctas sm:items-center">
            <CtaLink href={WHATSAPP_URL} external>
              <WhatsAppIcon className="size-5" />
              Hablar por WhatsApp
            </CtaLink>
            <CtaLink href="/proyectos" variant="outline">
              Ver proyectos
            </CtaLink>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center sm:flex"
      >
        <span className="flex flex-col items-center gap-2 text-ink-3">
          <span className="eyebrow text-[10px]">Descubrí más</span>
          <ArrowDown className="size-3.5 animate-bounce motion-reduce:animate-none" />
        </span>
      </motion.div>
    </section>
  )
}
