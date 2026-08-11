'use client'

import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'

import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { HeroMark } from '@/components/home/hero-mark'
import { LinesReveal } from '@/components/motion/text-reveal'
import { WHATSAPP_URL } from '@/lib/content'

const headline = ['Construimos la tecnología', 'que tu negocio necesita.']

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32 lg:pt-56 lg:pb-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-8%] hidden w-[46vw] max-w-[620px] -translate-y-1/2 opacity-90 lg:block"
      >
        <HeroMark className="aspect-square w-full" />
      </div>

      <div className="container-page relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow flex items-center gap-2.5 text-ink-2"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-accent-cyan opacity-75 animate-pulse-ring motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            R3 Tech — Rosario, Argentina
          </motion.div>

          <h1 className="mt-7 text-[2.75rem] leading-[1.03] font-medium tracking-tight text-ink sm:text-[3.75rem] lg:text-[4.5rem]">
            <LinesReveal lines={headline} delay={0.15} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-balance text-[1.0625rem] leading-relaxed text-ink-2 sm:text-lg"
          >
            Software a medida, sitios y plataformas web, ecommerce, SaaS, automatización y soporte IT.
            Tecnología pensada para resolver problemas reales de negocio, no para lucir complicada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <CtaLink href={WHATSAPP_URL} external>
              <WhatsAppIcon />
              Hablar por WhatsApp
            </CtaLink>
            <CtaLink href="/proyectos" variant="outline">
              Ver proyectos
            </CtaLink>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center sm:flex"
      >
        <span className="flex flex-col items-center gap-2 text-ink-3">
          <span className="eyebrow text-[9px]">Descubrí más</span>
          <ArrowDown className="size-3.5 animate-bounce motion-reduce:animate-none" />
        </span>
      </motion.div>
    </section>
  )
}
