'use client'

import { motion } from 'motion/react'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { process } from '@/lib/content'

export function ProcessTimeline() {
  return (
    <section className="border-t border-line bg-paper-sunken py-24 sm:py-32" id="proceso">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-ink-3">Cómo trabajamos</span>
          <h2 className="mt-5 text-[2rem] leading-[1.08] font-medium tracking-tight text-ink sm:text-[2.5rem]">
            Un proceso claro, de punta a punta.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute inset-x-0 top-[4px] hidden h-px overflow-hidden bg-line lg:block">
            <motion.div
              className="h-full origin-left bg-line-strong"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <RevealGroup
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-0"
            stagger={0.1}
          >
            {process.map((step) => (
              <RevealItem key={step.index} className="relative pl-6 lg:pl-0">
                <span
                  className="absolute top-0.5 left-0 inline-block size-[9px] shrink-0 rounded-full border-2 border-accent bg-paper-sunken lg:relative lg:mb-6"
                  aria-hidden="true"
                />
                <span className="index-num block text-[13px] text-ink-3 lg:mt-0">{step.index}</span>
                <h3 className="mt-2 text-[1.05rem] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-[22ch] text-[14.5px] leading-relaxed text-ink-2">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
