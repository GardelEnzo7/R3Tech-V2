'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

import { Logo } from '@/components/ui/logo'
import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { MobileNav } from '@/components/layout/mobile-nav'
import { ThemeMenu } from '@/components/theme/theme-menu'
import { nav, WHATSAPP_URL } from '@/lib/content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [condensed, setCondensed] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500',
          condensed
            ? 'border-b border-line bg-paper/80 shadow-[0_1px_0_0_rgba(11,13,16,0.02)] backdrop-blur-lg backdrop-saturate-150'
            : 'border-b border-transparent',
        )}
      >
        <div className="container-page">
          <div
            className={cn(
              'flex items-center justify-between transition-[height] duration-500',
              condensed ? 'h-[4.25rem]' : 'h-24',
            )}
          >
            <Logo size={condensed ? 'sm' : 'default'} eager />

            <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'group/nav relative rounded-full px-4 py-2.5 text-[15px] font-medium tracking-[0.01em] transition-colors duration-300',
                      active ? 'text-ink' : 'text-ink-2 hover:text-ink',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover/nav:scale-x-100',
                        active && 'scale-x-100',
                      )}
                    />
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-3">
              <CtaLink href={WHATSAPP_URL} external className="hidden px-5 py-2.5 text-[14px] sm:inline-flex">
                <WhatsAppIcon className="size-[19px]" />
                WhatsApp
              </CtaLink>

              <ThemeMenu className="hidden lg:inline-flex" />

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
                aria-expanded={open}
                className="grid size-11 place-items-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-ink/30 hover:bg-ink/[0.03] lg:hidden"
              >
                <Menu className="size-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
