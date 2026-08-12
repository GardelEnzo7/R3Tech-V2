import { ArrowUp, Mail } from 'lucide-react'

import { Logo } from '@/components/ui/logo'
import { InstagramIcon, WhatsAppIcon } from '@/components/ui/icons'
import { nav, site, WHATSAPP_URL } from '@/lib/content'

const socials = [
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: 'Instagram', href: site.instagram, Icon: InstagramIcon },
  { label: 'Email', href: site.mailto, Icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-line bg-paper-sunken">
      <div className="container-page">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-ink-2">
              Desarrollo de software, plataformas web y soluciones IT para empresas que necesitan crecer con
              tecnología confiable. Trabajamos de forma remota y presencial en {site.region}.
            </p>
          </div>

          <nav aria-label="Navegación del pie" className="md:col-span-3">
            <h2 className="eyebrow text-ink-3">Navegación</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[15px] text-ink-2 transition-colors duration-300 hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="eyebrow text-ink-3">Contacto</h2>
            <a href={site.mailto} className="mt-5 block text-[15px] text-ink-2 transition-colors duration-300 hover:text-ink">
              {site.email}
            </a>
            <p className="mt-2 text-[15px] text-ink-2">{site.whatsappNumber}</p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') || href.startsWith('https') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-line-strong text-ink-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.06] hover:text-accent"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-7 sm:flex-row sm:items-center">
          <p className="text-[13px] tracking-wide text-ink-3">
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
          </p>

          <div className="flex flex-row-reverse items-center gap-5 sm:flex-row">
            <p className="eyebrow text-[10px] text-ink-3">{site.tagline}</p>
            <a
              href="#top"
              aria-label="Volver arriba"
              className="grid size-9 place-items-center rounded-full border border-line-strong text-ink-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
