import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { CourtOsGraphic } from '@/components/projects/courtos-graphic'
import { cn } from '@/lib/utils'
import { getProjectBySlug, getWhatsAppUrl, OG_IMAGE, projects, site } from '@/lib/content'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${site.name}`,
      description: project.summary,
      url: `${site.url}/proyectos/${project.slug}`,
      ...(project.image ? { images: [{ url: project.image }] } : OG_IMAGE),
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const isLive = project.status === 'live'
  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]!
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length]!
  const whatsappUrl = getWhatsAppUrl(`Hola R3 Tech, vi el proyecto ${project.name} y quiero un proyecto similar.`)

  return (
    <>
      <section className="pt-40 pb-12 sm:pt-48 sm:pb-16">
        <div className="container-page">
          <Reveal>
            <Link
              href="/proyectos"
              className="group/back inline-flex items-center gap-2 text-[14px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover/back:-translate-x-0.5" />
              Proyectos
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span
                className={cn(
                  'eyebrow rounded-full border px-2.5 py-1 text-[10px]',
                  isLive
                    ? 'border-success/25 bg-success/[0.08] text-success'
                    : 'border-accent/30 bg-accent/[0.08] text-accent',
                )}
              >
                {project.statusLabel}
              </span>
              <span className="eyebrow text-ink-3">{project.kind}</span>
            </div>

            <h1 className="mt-4 max-w-2xl text-[2.5rem] leading-[1.06] font-medium tracking-tight text-ink sm:text-[3.25rem]">
              {project.name}
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">{project.summary}</p>
          </Reveal>
        </div>
      </section>

      <Reveal className="container-page">
        <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-paper-sunken">
          {project.image ? (
            <div className="relative aspect-[16/9.5] w-full">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 1200px, 92vw"
                priority
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div className="p-4 sm:p-8">
              <CourtOsGraphic className="aspect-[16/8]" />
            </div>
          )}
        </div>
      </Reveal>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-5">
              {project.description.map((paragraph) => (
                <p key={paragraph} className="text-[16.5px] leading-relaxed text-ink-2">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              {project.href ? (
                <CtaLink href={project.href} external>
                  {isLive ? 'Ver sitio en vivo' : 'Ver demo'}
                  <ArrowUpRight className="size-4" />
                </CtaLink>
              ) : null}
              <CtaLink href={whatsappUrl} external variant={project.href ? 'outline' : 'primary'}>
                <WhatsAppIcon />
                Consultar un proyecto similar
              </CtaLink>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1} className="rounded-2xl border border-line-strong bg-paper-sunken p-7">
              <h2 className="eyebrow text-ink-3">Funcionalidades</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="text-[15px] text-ink">
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="rounded-2xl border border-line-strong bg-paper-sunken p-7">
              <h2 className="eyebrow text-ink-3">Stack técnico</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full border border-line-strong px-3 py-1.5 text-[13.5px] text-ink-2">
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-10">
        <div className="container-page">
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.05}>
            <RevealItem>
              <Link
                href={`/proyectos/${prev.slug}`}
                className="group/nav flex h-full flex-col justify-between rounded-xl border border-line-strong p-6 transition-colors duration-300 hover:border-ink/25"
              >
                <span className="eyebrow flex items-center gap-2 text-ink-3">
                  <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover/nav:-translate-x-0.5" />
                  Anterior
                </span>
                <span className="mt-4 text-[1.125rem] font-medium text-ink">{prev.name}</span>
              </Link>
            </RevealItem>
            <RevealItem>
              <Link
                href={`/proyectos/${next.slug}`}
                className="group/nav flex h-full flex-col items-end justify-between rounded-xl border border-line-strong p-6 text-right transition-colors duration-300 hover:border-ink/25"
              >
                <span className="eyebrow flex items-center gap-2 text-ink-3">
                  Siguiente
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/nav:translate-x-0.5" />
                </span>
                <span className="mt-4 text-[1.125rem] font-medium text-ink">{next.name}</span>
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </>
  )
}
