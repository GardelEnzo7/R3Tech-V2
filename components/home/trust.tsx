import { Check } from 'lucide-react'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { benefits } from '@/lib/content'

export function Trust() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-ink-3">Por qué R3 Tech</span>
              <h2 className="mt-5 max-w-sm text-[2rem] leading-[1.08] font-medium tracking-tight text-ink sm:text-[2.5rem]">
                Cercanía de estudio chico, criterio de equipo senior.
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
  )
}
