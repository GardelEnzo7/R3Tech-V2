'use client'

import { motion } from 'motion/react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function chevronPath(size: number, cx: number, cy: number) {
  const half = size / 2
  return `M ${cx - half} ${cy - half} L ${cx + half} ${cy} L ${cx - half} ${cy + half}`
}

export function HeroMark({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 520 520"
        fill="none"
        className="h-full w-full"
        role="img"
        aria-label="Composición geométrica animada que representa precisión técnica"
      >
        <motion.circle
          cx="260"
          cy="260"
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

        <motion.path
          d={chevronPath(120, 230, 260)}
          stroke="var(--color-ink-3)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.45 }}
          transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.35 }}
        />
        <motion.path
          d={chevronPath(200, 255, 260)}
          stroke="var(--color-accent-blue)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.5 }}
        />
        <motion.path
          d={chevronPath(280, 280, 260)}
          stroke="var(--color-accent-cyan)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.65 }}
        />

        <motion.circle
          cx="420"
          cy="260"
          r="5"
          fill="var(--color-accent-cyan)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        />
        <motion.circle
          cx="94"
          cy="120"
          r="3"
          fill="var(--color-ink-3)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.85 }}
        />
      </svg>
    </div>
  )
}
