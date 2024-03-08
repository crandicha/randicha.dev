import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import type { Target, TargetAndTransition, Transition } from 'framer-motion'
import { useGetMediaQuery } from '../../../utils/mediaquery'

export interface MotionInViewProps extends React.HTMLProps<HTMLDivElement> {
  transition?: Transition
  once?: boolean
  amount?: number
  onHidden: Target
  onVisible: TargetAndTransition
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
  transition,
  once = false,
  amount = 0.5,
  onHidden,
  onVisible,
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
  style,
}: MotionInViewProps) => {
  const controls = useAnimation()
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

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={className}
      variants={variants}
      transition={transition}
      id={id}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default MotionInView
