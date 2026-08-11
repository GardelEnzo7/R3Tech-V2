import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Reveal } from '@/components/motion/reveal'
import { ProjectRow } from '@/components/projects/project-row'
import { projects } from '@/lib/content'

export function FeaturedProjects() {
  return (
    <section className="border-t border-line py-24 sm:py-32" id="proyectos">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="eyebrow text-ink-3">Qué construimos</span>
            <h2 className="mt-5 max-w-lg text-[2rem] leading-[1.08] font-medium tracking-tight text-ink sm:text-[2.5rem]">
              Proyectos maquetados, publicados para que los veas.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/proyectos"
              className="group/link inline-flex items-center gap-2 text-[14px] font-semibold text-ink"
            >
              Ver todos los proyectos
              <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-6">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
