'use client'

import { motion, type Variants } from 'motion/react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  once = true,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
  once?: boolean
}) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3, margin: '0px 0px -10% 0px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}

export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25, margin: '0px 0px -10% 0px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'li'
}) {
  const Component = motion[as]

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  )
}
