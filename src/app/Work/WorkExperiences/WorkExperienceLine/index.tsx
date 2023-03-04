import React from 'react'

import { useScroll, motion } from 'framer-motion'

const WorkExperienceLine = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', '40% 40%'],
  })
  const scaleY = React.useMemo(() => {
    return scrollYProgress
  }, [scrollYProgress])

  return (
    <motion.div
      ref={ref}
      className="absolute top-[14%] left-[50%] z-[100] h-[72%] w-[1px] border-l border-r border-tertiary"
      style={{
        transformOrigin: 'top',
        scaleY,
      }}
    ></motion.div>
  )
}

export default WorkExperienceLine
