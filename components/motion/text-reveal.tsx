'use client'

import { motion } from 'motion/react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export function LinesReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
  as: Tag = 'span',
}: {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
  stagger?: number
  as?: 'span' | 'div'
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className={lineClassName ?? 'block'}
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.9,
              ease: easeOutExpo,
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
