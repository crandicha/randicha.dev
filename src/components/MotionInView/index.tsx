import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import type { Target, TargetAndTransition, Transition } from 'framer-motion'
import { useGetMediaQuery } from '../../../utils/mediaquery'

const DEFAULT_HIDDEN: Target = { opacity: 0, y: 24 }
const DEFAULT_VISIBLE: TargetAndTransition = { opacity: 1, y: 0 }
const DEFAULT_TRANSITION: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
}

export interface MotionInViewProps extends React.HTMLProps<HTMLDivElement> {
  transition?: Transition
  once?: boolean
  amount?: number
  onHidden?: Target
  onVisible?: TargetAndTransition
  onHiddenSM?: Target
  onVisibleSM?: TargetAndTransition
  onHiddenMD?: Target
  onVisibleMD?: TargetAndTransition
  onHiddenLG?: Target
  onVisibleLG?: TargetAndTransition
  onHiddenXL?: Target
  onVisibleXL?: TargetAndTransition
  onHidden2XL?: Target
  onVisible2XL?: TargetAndTransition
}

const MotionInView = ({
  transition = DEFAULT_TRANSITION,
  once = false,
  amount = 0.5,
  onHidden = DEFAULT_HIDDEN,
  onVisible = DEFAULT_VISIBLE,
  onHiddenSM,
  onVisibleSM,
  onHiddenMD,
  onVisibleMD,
  onHiddenLG,
  onVisibleLG,
  onHiddenXL,
  onVisibleXL,
  onHidden2XL,
  onVisible2XL,
  className,
  children,
  id,
}: MotionInViewProps) => {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })
  const variantDefault = {
    hidden: onHidden,
    visible: onVisible,
  }
  const variantSM = {
    hidden: onHiddenSM ?? variantDefault.hidden,
    visible: onVisibleSM ?? variantDefault.visible,
  }
  const variantMD = {
    hidden: onHiddenMD ?? variantSM.hidden,
    visible: onVisibleMD ?? variantSM.visible,
  }
  const variantLG = {
    hidden: onHiddenLG ?? variantMD.hidden,
    visible: onVisibleLG ?? variantMD.visible,
  }
  const variantXL = {
    hidden: onHiddenXL ?? variantLG.hidden,
    visible: onVisibleXL ?? variantLG.visible,
  }
  const variant2XL = {
    hidden: onHidden2XL ?? variantXL.hidden,
    visible: onVisible2XL ?? variantXL.visible,
  }
  const mediaQueryVariants = {
    default: variantDefault,
    sm: variantSM,
    md: variantMD,
    lg: variantLG,
    xl: variantXL,
    '2xl': variant2XL,
  }

  const variants = mediaQueryVariants[useGetMediaQuery()]
  // Prefer reduced motion → always show final state (never stick at opacity 0)
  const visible = Boolean(reduceMotion) || inView

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? 'visible' : 'hidden'}
      animate={visible ? 'visible' : 'hidden'}
      className={className}
      variants={variants}
      transition={{ ...DEFAULT_TRANSITION, ...transition }}
      id={id}
    >
      {children}
    </motion.div>
  )
}

export default MotionInView
