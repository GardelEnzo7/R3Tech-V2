import Image from 'next/image'
import Link from 'next/link'

import { site } from '@/lib/content'
import { cn } from '@/lib/utils'

/**
 * The light/dark marks aren't a single asset re-colored: r3-mark-light.webp
 * bakes in a black "R" (for light backgrounds) while r3-mark-dark.webp bakes
 * in a white "R" (for dark backgrounds) — both otherwise transparent. Each
 * is a trimmed-and-evenly-padded export of an official R3 file (see
 * scripts/_gen-matched-logos.mjs) so the ink itself fills the same share of
 * its canvas in both versions — at a shared CSS height, the mark reads as
 * the same size in both themes instead of jumping on toggle. Stacking them
 * and swapping display with the .theme-only-* utilities is zero JS, zero
 * flash, driven by the same data-theme/media-query rules as every color
 * token.
 */
export function Logo({
  className,
  size = 'default',
  eager = false,
}: {
  className?: string
  size?: 'default' | 'sm'
  eager?: boolean
}) {
  const iconHeight = size === 'sm' ? 'h-8' : 'h-9'

  return (
    <Link
      href="/"
      aria-label={`${site.name} — ir al inicio`}
      className={cn('group/logo inline-flex items-center gap-2.5', className)}
    >
      <span className={cn('relative inline-flex shrink-0 items-center', iconHeight)}>
        <Image
          src="/brand/r3-mark-light.webp"
          alt=""
          width={1292}
          height={677}
          priority={eager}
          loading={eager ? 'eager' : 'lazy'}
          className={cn(
            'theme-only-light w-auto transition-transform duration-500 ease-out group-hover/logo:scale-[1.05]',
            iconHeight,
          )}
        />
        <Image
          src="/brand/r3-mark-dark.webp"
          alt=""
          width={1172}
          height={639}
          priority={eager}
          loading={eager ? 'eager' : 'lazy'}
          className={cn(
            'theme-only-dark w-auto transition-transform duration-500 ease-out group-hover/logo:scale-[1.05]',
            iconHeight,
          )}
        />
      </span>

      <span className="flex flex-col gap-[3px] leading-none">
        <span
          className={cn('font-bold text-ink', size === 'sm' ? 'text-[14px] tracking-[0.14em]' : 'text-[16px] tracking-[0.14em]')}
        >
          R3 TECH
        </span>
        <span className={cn('eyebrow text-ink-3', size === 'sm' ? 'text-[8px]' : 'text-[9px]')}>
          Desarrollo web y software a medida
        </span>
      </span>
    </Link>
  )
}
