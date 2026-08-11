import { cn } from '@/lib/utils'

/**
 * CourtOS has no production UI to screenshot yet. Rather than fabricate a mockup
 * with invented data, this renders the real, still-evolving layout structure as an
 * abstract wireframe — honest about what stage the product is at.
 */
export function CourtOsGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex aspect-[16/11] w-full flex-col overflow-hidden rounded-xl border border-line-strong bg-paper-sunken',
        className,
      )}
      role="img"
      aria-label="Estructura de interfaz de CourtOS en construcción, sin datos ni métricas: producto todavía en desarrollo"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="h-2 w-20 rounded-full bg-ink/10" />
        </div>
        <span className="eyebrow rounded-full border border-accent/30 bg-accent/[0.08] px-2.5 py-1 text-[9.5px] text-accent">
          En desarrollo
        </span>
      </div>

      <div className="grid flex-1 grid-cols-[64px_1fr] gap-px overflow-hidden">
        <div className="flex flex-col gap-3 border-r border-line bg-paper px-3 py-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn('h-2 rounded-full bg-ink/10', i === 1 && 'bg-accent/35')}
              style={{ width: `${[70, 100, 55, 80, 45][i]}%` }}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="flex gap-3">
            <span className="h-16 flex-1 rounded-lg border border-dashed border-line-strong" />
            <span className="h-16 flex-1 rounded-lg border border-dashed border-line-strong" />
          </div>
          <span className="h-full min-h-24 rounded-lg border border-dashed border-line-strong bg-[linear-gradient(135deg,transparent_46%,var(--color-line)_46%,var(--color-line)_54%,transparent_54%)] bg-[length:14px_14px]" />
        </div>
      </div>
    </div>
  )
}
