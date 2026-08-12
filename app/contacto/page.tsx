import type { Metadata } from 'next'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { InstagramIcon, WhatsAppIcon } from '@/components/ui/icons'
import { getWhatsAppUrl, site } from '@/lib/content'

const WHATSAPP_URL = getWhatsAppUrl('Hola R3 Tech, quiero ponerme en contacto.')

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contactá a R3 Tech por WhatsApp, email o Instagram para hablar sobre tu proyecto de software, web o soporte IT.',
  alternates: { canonical: '/contacto' },
}

const channels = [
  {
    label: 'WhatsApp',
    value: site.whatsappNumber,
    hint: 'La forma más rápida de contactarnos',
    href: WHATSAPP_URL,
    Icon: WhatsAppIcon,
  },
  {
    label: 'Email',
    value: site.email,
    hint: 'Para propuestas más detalladas',
    href: site.mailto,
    Icon: Mail,
  },
  {
    label: 'Instagram',
    value: site.instagramHandle,
    hint: 'Trabajo y novedades',
    href: site.instagram,
    Icon: InstagramIcon,
  },
]

export default function ContactoPage() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 sm:pb-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-ink-3">Contacto</span>
            <h1 className="mt-5 text-[2.5rem] leading-[1.06] font-medium tracking-tight text-ink sm:text-[3.25rem]">
              Contanos qué necesitás construir.
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
              Elegí el canal que prefieras. Respondemos con una propuesta clara, sin vueltas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-4 sm:py-8">
        <div className="container-page">
          <RevealGroup className="flex flex-col" stagger={0.07}>
            {channels.map(({ label, value, hint, href, Icon }) => (
              <RevealItem key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/row grid grid-cols-[auto_1fr_auto] items-center gap-x-5 border-b border-line py-7 transition-colors duration-300 first:border-t hover:border-ink/20 sm:gap-x-8 sm:py-9"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line-strong text-ink-2 transition-all duration-300 group-hover/row:border-accent/40 group-hover/row:bg-accent/[0.06] group-hover/row:text-accent">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="eyebrow text-ink-3">{label}</span>
                    <span className="mt-1 block truncate text-[1.375rem] font-medium tracking-tight text-ink sm:text-[1.75rem]">
                      {value}
                    </span>
                    <span className="mt-1 block text-[14px] text-ink-2">{hint}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-ink-3 transition-all duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-accent" />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-ink-2">
              <MapPin className="size-[18px]" />
            </span>
            <div>
              <h2 className="text-[16px] font-semibold text-ink">Zona de trabajo</h2>
              <p className="mt-1.5 max-w-md text-[15.5px] leading-relaxed text-ink-2">
                Con base en {site.region}. Trabajamos de forma remota con clientes en cualquier parte, y de
                forma presencial en Rosario y alrededores.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
