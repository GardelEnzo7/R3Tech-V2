import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { ProjectRow } from '@/components/projects/project-row'
import { getServiceBySlug, projects, serviceCategories, services, site, WHATSAPP_URL } from '@/lib/content'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.summary,
    keywords: service.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.summary,
      url: `${site.url}/servicios/${service.slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const category = serviceCategories.find((c) => c.id === service.category)
  const relatedProjects = projects.filter((project) => service.relatedProjectSlugs.includes(project.slug))

  const currentIndex = services.findIndex((s) => s.slug === service.slug)
  const next = services[(currentIndex + 1) % services.length]!
  const prev = services[(currentIndex - 1 + services.length) % services.length]!

  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
        <div className="container-page">
          <Reveal>
            <Link
              href="/servicios"
              className="group/back inline-flex items-center gap-2 text-[13px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover/back:-translate-x-0.5" />
              Servicios
            </Link>

            <div className="mt-8 flex items-baseline gap-4">
              <span className="index-num text-[14px] text-ink-3">{service.index}</span>
              <span className="eyebrow text-ink-3">{category?.label}</span>
            </div>

            <h1 className="mt-4 max-w-2xl text-[2.5rem] leading-[1.06] font-medium tracking-tight text-ink sm:text-[3.25rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">{service.summary}</p>

            <div className="mt-9">
              <CtaLink href={WHATSAPP_URL} external>
                <WhatsAppIcon />
                Consultar por este servicio
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-5">
              {service.description.map((paragraph) => (
                <p key={paragraph} className="text-[15.5px] leading-relaxed text-ink-2">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h2 className="text-[13px] font-semibold tracking-[0.02em] text-ink">Qué incluye</h2>
              <ul className="mt-5 flex flex-col gap-3.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/[0.08] text-accent">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} className="rounded-2xl border border-line-strong bg-paper-sunken p-7">
              <h2 className="eyebrow text-ink-3">Para quién es</h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink">{service.forWho}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-page">
            <Reveal>
              <span className="eyebrow text-ink-3">Aplicado en</span>
              <h2 className="mt-4 text-[1.75rem] font-medium tracking-tight text-ink">Proyectos relacionados</h2>
            </Reveal>
            <div className="mt-4">
              {relatedProjects.map((project, i) => (
                <ProjectRow key={project.slug} project={project} reverse={i % 2 === 1} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line py-10">
        <div className="container-page">
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.05}>
            <RevealItem>
              <Link
                href={`/servicios/${prev.slug}`}
                className="group/nav flex h-full flex-col justify-between rounded-xl border border-line-strong p-6 transition-colors duration-300 hover:border-ink/25"
              >
                <span className="eyebrow flex items-center gap-2 text-ink-3">
                  <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover/nav:-translate-x-0.5" />
                  Anterior
                </span>
                <span className="mt-4 text-[1.125rem] font-medium text-ink">{prev.title}</span>
              </Link>
            </RevealItem>
            <RevealItem>
              <Link
                href={`/servicios/${next.slug}`}
                className="group/nav flex h-full flex-col items-end justify-between rounded-xl border border-line-strong p-6 text-right transition-colors duration-300 hover:border-ink/25"
              >
                <span className="eyebrow flex items-center gap-2 text-ink-3">
                  Siguiente
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/nav:translate-x-0.5" />
                </span>
                <span className="mt-4 text-[1.125rem] font-medium text-ink">{next.title}</span>
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </>
  )
}
