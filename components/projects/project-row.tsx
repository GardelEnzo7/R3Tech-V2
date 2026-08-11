import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Reveal } from '@/components/motion/reveal'
import { CourtOsGraphic } from '@/components/projects/courtos-graphic'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/content'

export function ProjectRow({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  const isLive = project.status === 'live'

  return (
    <Reveal
      as="div"
      className={cn(
        'grid items-center gap-10 border-t border-line py-14 first:border-t-0 lg:grid-cols-2 lg:gap-16 lg:py-20',
      )}
    >
      <div className={cn(reverse && 'lg:order-2')}>
        <Link
          href={`/proyectos/${project.slug}`}
          className="group/media relative block overflow-hidden rounded-xl border border-line-strong bg-paper-sunken"
        >
          {project.image ? (
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/media:scale-[1.035]"
              />
            </div>
          ) : (
            <CourtOsGraphic />
          )}
        </Link>
      </div>

      <div className={cn(reverse && 'lg:order-1')}>
        <div className="flex items-center gap-3">
          <span
            className={cn(
              'eyebrow rounded-full border px-2.5 py-1 text-[9px]',
              isLive
                ? 'border-emerald-600/25 bg-emerald-600/[0.08] text-emerald-700'
                : 'border-accent/30 bg-accent/[0.08] text-accent',
            )}
          >
            {project.statusLabel}
          </span>
          <span className="eyebrow text-ink-3">{project.kind}</span>
        </div>

        <h3 className="mt-4 text-[1.75rem] font-medium tracking-tight text-ink sm:text-[2.125rem]">
          {project.name}
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-2">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-line-strong px-3 py-1.5 text-[12.5px] text-ink-2"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href={`/proyectos/${project.slug}`}
            className="group/link inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.02em] text-ink"
          >
            Ver caso completo
            <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          {isLive && project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-ink-2 transition-colors duration-300 hover:text-ink"
            >
              Sitio en vivo
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  )
}
