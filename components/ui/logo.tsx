import Image from 'next/image'
import Link from 'next/link'

import { site } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = true,
  size = 'default',
  eager = false,
  tone = 'light',
}: {
  className?: string
  showWordmark?: boolean
  size?: 'default' | 'sm'
  eager?: boolean
  tone?: 'light' | 'dark'
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — ir al inicio`}
      className={cn('group/logo inline-flex items-center gap-3', className)}
    >
      <span
        className={cn(
          'grid shrink-0 place-items-center rounded-[9px] bg-void shadow-[inset_0_0_0_1px_var(--color-void-line)] transition-transform duration-500 ease-out group-hover/logo:scale-[1.05]',
          size === 'sm' ? 'size-8 p-[7px]' : 'size-9 p-2',
        )}
      >
        <span className="relative block h-full w-full">
          <Image
            src="/r3tech-logo.webp"
            alt=""
            fill
            sizes="36px"
            priority={eager}
            loading={eager ? 'eager' : 'lazy'}
            className="object-contain"
          />
        </span>
      </span>

      {showWordmark ? (
        <span className="flex flex-col gap-[3px] leading-none">
          <span
            className={cn(
              'font-semibold tracking-[0.08em]',
              tone === 'dark' ? 'text-void-ink' : 'text-ink',
              size === 'sm' ? 'text-[14px]' : 'text-[15px]',
            )}
          >
            R3 TECH
          </span>
          <span className={cn('eyebrow text-[8px]', tone === 'dark' ? 'text-void-ink-3' : 'text-ink-3')}>
            Software · Web · IT
          </span>
        </span>
      ) : null}
    </Link>
  )
}
