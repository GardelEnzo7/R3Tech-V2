'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'

import { Logo } from '@/components/ui/logo'
import { CtaLink } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/icons'
import { ThemeMenu } from '@/components/theme/theme-menu'
import { nav, WHATSAPP_URL } from '@/lib/content'
import { cn } from '@/lib/utils'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (!focusable?.length) return
      const first = focusable[0]!
      const last = focusable[focusable.length - 1]!

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-y-auto bg-paper lg:hidden"
          initial={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
          animate={{ clipPath: 'circle(150% at calc(100% - 44px) 40px)' }}
          exit={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
        >
          <div className="container-page flex h-20 shrink-0 items-center justify-between">
            <Logo size="sm" eager />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="grid size-10 place-items-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-ink/30 hover:bg-ink/[0.03]"
            >
              <X className="size-[18px]" />
            </button>
          </div>

          <nav aria-label="Navegación móvil" className="container-page mt-6 flex shrink-0 flex-col">
            {nav.map((item, i) => {
              const active = pathname === item.href
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.5, ease: easeOutExpo }}
                  className="border-b border-line"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group/m flex items-center justify-between py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="eyebrow text-ink-3 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      <span
                        className={cn(
                          'text-[2rem] font-medium tracking-tight text-ink transition-colors sm:text-[2.5rem]',
                          active && 'text-accent',
                        )}
                      >
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + nav.length * 0.06, duration: 0.5, ease: easeOutExpo }}
            className="container-page mt-10 shrink-0"
          >
            <CtaLink href={WHATSAPP_URL} external className="w-full">
              <WhatsAppIcon />
              Solicitar presupuesto
            </CtaLink>
          </motion.div>

          <div className="container-page mt-auto flex shrink-0 items-center justify-between py-8">
            <p className="eyebrow">
              <span className="text-ink">R3 Tech</span> <span className="text-ink-3">·</span>{' '}
              <span className="text-accent">Rosario, Argentina</span>
            </p>
            <ThemeMenu side="top" />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
