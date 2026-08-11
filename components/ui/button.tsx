import Link from 'next/link'

import { cn } from '@/lib/utils'

type Variant = 'primary' | 'inverse' | 'outline' | 'ghost'

const base =
  'group/cta relative inline-flex items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full px-6 py-3.5 text-[14px] font-semibold tracking-[0.04em] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out active:translate-y-px'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-solid text-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_14px_28px_-14px_rgba(43,98,240,0.65)] hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_20px_36px_-14px_rgba(43,98,240,0.8)]',
  inverse:
    'bg-void-ink text-void shadow-[0_14px_28px_-16px_rgba(0,0,0,0.7)] hover:-translate-y-0.5 hover:bg-white',
  outline:
    'border border-line-strong bg-transparent text-ink hover:-translate-y-0.5 hover:border-ink/40 hover:bg-ink/[0.03]',
  ghost: 'text-ink hover:text-accent px-3 py-2',
}

type CommonProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

export function CtaLink({
  href,
  variant = 'primary',
  className,
  children,
  external,
  ...rest
}: CommonProps & {
  href: string
  external?: boolean
} & Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>) {
  const isExternal = external ?? /^https?:\/\//.test(href)
  const sheen = variant === 'primary' || variant === 'inverse'

  const content = (
    <>
      {sheen ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)] transition-transform duration-[900ms] ease-out group-hover/cta:translate-x-full motion-reduce:hidden"
        />
      ) : null}
      <span className="relative flex items-center gap-2.5">{children}</span>
    </>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {content}
    </Link>
  )
}
