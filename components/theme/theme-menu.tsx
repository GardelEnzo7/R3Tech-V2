'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Monitor, Moon, Sun, SunMoon } from 'lucide-react'

import { useTheme, type Theme } from '@/components/theme/theme-provider'
import { cn } from '@/lib/utils'

const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: 'system', label: 'Sistema', Icon: Monitor },
  { value: 'light', label: 'Claro', Icon: Sun },
  { value: 'dark', label: 'Oscuro', Icon: Moon },
]

export function ThemeMenu({
  className,
  tone = 'light',
  side = 'bottom',
}: {
  className?: string
  tone?: 'light' | 'dark'
  side?: 'top' | 'bottom'
}) {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])

  useEffect(() => {
    if (!open) return

    const activeIndex = Math.max(
      0,
      options.findIndex((o) => o.value === theme),
    )
    itemRefs.current[activeIndex]?.focus()

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        const current = itemRefs.current.findIndex((el) => el === document.activeElement)
        const delta = event.key === 'ArrowDown' ? 1 : -1
        const next = (current + delta + options.length) % options.length
        itemRefs.current[next]?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, theme])

  const select = (value: Theme) => {
    setTheme(value)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const onRootBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // iOS Safari doesn't focus tapped buttons, so a tap on a menu option
    // still blurs the previously-focused item but with relatedTarget=null
    // (focus isn't moving to a specific new element). Closing on a null
    // relatedTarget would unmount the tapped option before its click event
    // fires, silently swallowing the tap. Only auto-close here for a real
    // focus target outside the menu (e.g. Tab-ing past the last option) —
    // outside clicks/taps are already handled correctly by onPointerDown.
    if (event.relatedTarget && !rootRef.current?.contains(event.relatedTarget as Node)) {
      setOpen(false)
    }
  }

  return (
    <div ref={rootRef} onBlur={onRootBlur} className={cn('relative', className)}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Preferencia de tema"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          tone === 'dark'
            ? 'border-void-line text-void-ink-2 hover:border-void-line-strong hover:text-void-ink focus-visible:outline-accent-cyan'
            : 'border-line-strong text-ink-2 hover:border-ink/30 hover:text-ink focus-visible:outline-accent',
        )}
      >
        <SunMoon className="size-[17px]" strokeWidth={1.75} />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Elegir tema"
          className={cn(
            'absolute z-50 min-w-[160px] rounded-xl border p-1.5 shadow-[0_16px_40px_-16px_rgba(11,13,16,0.3)]',
            tone === 'dark' ? 'border-void-line-strong bg-void-raised' : 'border-line-strong bg-paper-raised',
            side === 'top' ? 'bottom-full right-0 mb-2' : 'top-full right-0 mt-2',
          )}
        >
          {options.map(({ value, label, Icon }, i) => {
            const active = theme === value
            return (
              <button
                key={value}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => select(value)}
                className={cn(
                  'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[14px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2',
                  tone === 'dark'
                    ? cn(
                        'focus-visible:outline-accent-cyan',
                        active ? 'bg-white/[0.08] font-medium text-void-ink' : 'text-void-ink-2 hover:bg-white/[0.05] hover:text-void-ink',
                      )
                    : cn(
                        'focus-visible:outline-accent',
                        active ? 'bg-ink/[0.06] font-medium text-ink' : 'text-ink-2 hover:bg-ink/[0.04] hover:text-ink',
                      ),
                )}
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.75} />
                {label}
                {active ? <Check className="ml-auto size-3.5 shrink-0 text-accent" strokeWidth={2} /> : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
