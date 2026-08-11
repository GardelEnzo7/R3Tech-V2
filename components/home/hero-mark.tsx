'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useSpring, useTransform } from 'motion/react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

/**
 * Six spokes fan out from the isotype at irregular angles (not a symmetric
 * clock face) — two carry a "live" cyan signal, the rest are quiet gray
 * connections. A couple of short cross-links join adjacent nodes directly,
 * so it reads as a small network graph rather than a starburst.
 */
const SPOKES = [
  { angle: 8, radius: 210, live: true },
  { angle: 62, radius: 180, live: false },
  { angle: 125, radius: 225, live: false },
  { angle: 172, radius: 195, live: true },
  { angle: 230, radius: 170, live: false },
  { angle: 300, radius: 215, live: false },
] as const

const CROSS_LINKS: [number, number][] = [
  [0, 1],
  [3, 4],
]

const DUST = [
  { x: 120, y: 150 },
  { x: 410, y: 380 },
  { x: 380, y: 130 },
] as const

const CENTER = 260
const R_INNER = 72

function pointAt(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) }
}

const spokePoints = SPOKES.map((s) => ({ inner: pointAt(s.angle, R_INNER), outer: pointAt(s.angle, s.radius), ...s }))

export function HeroMark({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const px = useSpring(0, { stiffness: 60, damping: 20, mass: 0.6 })
  const py = useSpring(0, { stiffness: 60, damping: 20, mass: 0.6 })
  const scaffoldX = useTransform(px, (v) => v * 10)
  const scaffoldY = useTransform(py, (v) => v * 10)

  useEffect(() => {
    if (prefersReducedMotion) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const node = containerRef.current
    if (!node) return

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect()
      const nx = (event.clientX - rect.left) / rect.width - 0.5
      const ny = (event.clientY - rect.top) / rect.height - 0.5
      const clamp = (v: number) => Math.min(0.6, Math.max(-0.6, v))
      px.set(clamp(nx))
      py.set(clamp(ny))
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [prefersReducedMotion, px, py])

  const signalSpoke = spokePoints[0]!

  return (
    <div ref={containerRef} className={className}>
      <div className="relative h-full w-full">
        <motion.svg
          viewBox="0 0 520 520"
          fill="none"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Composición geométrica animada de nodos y conexiones alrededor del isotipo de R3 Tech"
          style={{ x: scaffoldX, y: scaffoldY }}
        >
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r="238"
            stroke="var(--color-line-strong)"
            strokeWidth="1"
            strokeDasharray="1 9"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 1.2, delay: 0.2 },
              rotate: { duration: 140, ease: 'linear', repeat: Infinity },
            }}
            style={{ transformOrigin: '260px 260px' }}
          />
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r="172"
            stroke="var(--color-line-strong)"
            strokeWidth="1"
            strokeDasharray="1 14"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.6, rotate: -360 }}
            transition={{
              opacity: { duration: 1.2, delay: 0.3 },
              rotate: { duration: 200, ease: 'linear', repeat: Infinity },
            }}
            style={{ transformOrigin: '260px 260px' }}
          />

          {CROSS_LINKS.map(([a, b], i) => {
            const from = spokePoints[a]!.outer
            const to = spokePoints[b]!.outer
            return (
              <motion.line
                key={`link-${a}-${b}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--color-ink-3)"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.28 }}
                transition={{ duration: 1.1, ease: easeOutExpo, delay: 1 + i * 0.15 }}
              />
            )
          })}

          {spokePoints.map(({ angle, live, inner, outer }, i) => (
            <g key={angle}>
              <motion.line
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke={live ? 'var(--color-accent-cyan)' : 'var(--color-ink-3)'}
                strokeWidth={live ? 1.5 : 1}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: live ? 0.55 : 0.38 }}
                transition={{ duration: 1, ease: easeOutExpo, delay: 0.5 + i * 0.12 }}
              />
              <motion.circle
                cx={outer.x}
                cy={outer.y}
                r={live ? 4 : 3}
                fill={live ? 'var(--color-accent-cyan)' : 'var(--color-ink-3)'}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.12 }}
                style={{ transformOrigin: `${outer.x}px ${outer.y}px` }}
              />
            </g>
          ))}

          {DUST.map((d, i) => (
            <motion.circle
              key={`dust-${i}`}
              cx={d.x}
              cy={d.y}
              r="2"
              fill="var(--color-ink-3)"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.55, 0.15] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
            />
          ))}

          <motion.circle
            r="3"
            fill="var(--color-accent-cyan)"
            initial={{ cx: signalSpoke.inner.x, cy: signalSpoke.inner.y, opacity: 0 }}
            animate={{
              cx: [signalSpoke.inner.x, signalSpoke.outer.x, signalSpoke.inner.x],
              cy: [signalSpoke.inner.y, signalSpoke.outer.y, signalSpoke.inner.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 3.2, delay: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6 }}
          />
        </motion.svg>

        <motion.div
          className="absolute inset-0 grid place-items-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.25 }}
        >
          <div className="relative h-[26%] w-auto">
            <Image
              src="/brand/r3-mark-light.webp"
              alt=""
              width={1292}
              height={677}
              priority
              className="theme-only-light h-full w-auto drop-shadow-[0_0_28px_rgba(43,98,240,0.12)]"
            />
            <Image
              src="/brand/r3-mark-dark.webp"
              alt=""
              width={1172}
              height={639}
              priority
              className="theme-only-dark h-full w-auto drop-shadow-[0_0_32px_rgba(63,116,255,0.28)]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
