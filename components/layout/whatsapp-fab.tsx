'use client'

import { useEffect, useState } from 'react'

import { WhatsAppIcon } from '@/components/ui/icons'
import { WHATSAPP_URL } from '@/lib/content'
import { cn } from '@/lib/utils'

export function WhatsAppFab() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      className={cn(
        'whatsapp-fab group/fab fixed right-5 bottom-5 z-30 grid size-14 place-items-center rounded-full bg-accent-solid text-white shadow-[0_18px_36px_-14px_rgba(43,98,240,0.85)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-14px_rgba(43,98,240,1)] md:right-8 md:bottom-8',
        shown ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0',
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-accent-solid motion-reduce:hidden animate-pulse-ring"
      />
      <WhatsAppIcon className="relative size-[26px] transition-transform duration-500 group-hover/fab:scale-110" />
    </a>
  )
}
