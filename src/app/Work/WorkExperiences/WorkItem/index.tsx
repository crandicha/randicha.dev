import clsx from 'clsx'
import React from 'react'
import GlitchText from '../../../../components/GlitchText'
import MotionInView from '../../../../components/MotionInView'
import styles from './index.module.css'
import { AnimatePresence, motion } from 'framer-motion'
interface WorkITemProps extends React.HTMLProps<HTMLDivElement> {
  position: 'left' | 'right'
  from: string
  to: string
  company: string
  logo: string
  title: string
}

const WorkITem = ({
  position = 'left',
  from = 'Jan 2000',
  to = 'Des 2020',
  company = 'GovTech Edu',
  logo,
  title = 'Frontend Engineer',
  children,
}: WorkITemProps) => {
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    const element = document.getElementById(company)
    if (element) {
      // resize height based on content height
      const additionalHeight = children ? 24 : 0
      element.style.height = isHovered
        ? `${element.scrollHeight + additionalHeight}px`
        : '300px'
    }
  }, [isHovered])

  return (
    <>
      <div
        className={clsx(
          'relative hidden min-h-[300px] hover:z-[99] md:!flex',
          position === 'left' ? 'flex-row' : 'flex-row-reverse'
        )}
      >
        <div className="relative flex flex-[3_3_0] items-center">
          <MotionInView
            once
            className="h-full w-full"
            onHidden={{
              translateX: position === 'left' ? '-50px' : '50px',
              opacity: 0,
            }}
            onVisible={{
              translateX: '0px',
              opacity: 1,
            }}
          >
            <div
              className={clsx(
                'absolute flex h-full w-full flex-col items-center gap-[100px] overflow-hidden bg-secondary p-6 pt-[50px] shadow-md transition hover:shadow-xl',
                styles.workcard
              )}
              id={company}
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex flex-col items-center justify-center">
                <img src={logo} alt={company} />
                <h3 className="font-Montserrat text-2xl font-bold">
                  {company}
                </h3>
                <h3 className="text-center font-Montserrat text-xl font-bold">
                  {title}
                </h3>
              </div>
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                  >
                    {children}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </MotionInView>
        </div>
        <div className="relative flex flex-[1_1_0] items-center">
          <div className="h-[1px] w-full border-t border-black"></div>
          <div
            className={clsx(
              'absolute  h-3 w-3 rounded-full bg-tertiary',
              position === 'left' ? 'right-[-6px]' : 'left-[-6px]'
            )}
          ></div>
        </div>
        <div
          className={clsx(
            'flex flex-[4_4_0] items-center justify-center break-words',
            position === 'left'
              ? 'border-l border-l-black'
              : 'border-r border-r-black'
          )}
        >
          <GlitchText
            as="p"
            text={`${from} - ${to}`}
            className="text-xl font-bold"
          />
        </div>
      </div>
    </>
  )
}

export default WorkITem
