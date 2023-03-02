import clsx from 'clsx'
import React from 'react'
import GlitchText from '../../../../components/GlitchText'
import MotionInView from '../../../../components/MotionInView'
import styles from './index.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '@material-ui/core'
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
  const [isExpanded, setIsExpanded] = React.useState(false)

  React.useEffect(() => {
    const element = document.getElementById(company)
    const element2 = document.getElementById(company + '_mobile')
    const BASE_ADDITIONAL_HEIGHT = 24
    if (element) {
      const additionalHeight = children ? BASE_ADDITIONAL_HEIGHT : 0
      element.style.height = isExpanded
        ? `${element.scrollHeight + additionalHeight}px`
        : '300px'
    }
    if (element2) {
      const additionalHeight = children ? BASE_ADDITIONAL_HEIGHT : 0
      element2.style.height = isExpanded
        ? `${element2.scrollHeight + additionalHeight}px`
        : '300px'
    }
  }, [isExpanded])

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
              onMouseOver={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
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
                {isExpanded && (
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
      <MotionInView
        className={clsx(
          '!flex min-h-[300px] w-[90%] max-w-[600px] flex-col items-center gap-[80px] bg-secondary p-6 pt-[60px] md:!hidden',
          styles.workcard
        )}
        once
        id={`${company}_mobile`}
        onHidden={{
          opacity: 0,
          translateX: position === 'left' ? '-50px' : '50px',
        }}
        onVisible={{
          opacity: 1,
          translateX: '0px',
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <img src={logo} alt={company} />
          <h3 className="font-Montserrat text-2xl font-bold">{company}</h3>
          <h3 className="text-center font-Montserrat text-xl font-bold">
            {title}
          </h3>
          <div
            className="mt-8 flex h-8 w-[56px] cursor-pointer items-center justify-center rounded-full bg-tertiary p-2 text-white hover:scale-105 active:scale-90 active:shadow-inner"
            onClick={() => setIsExpanded((val) => !val)}
          >
            <Icon>{isExpanded ? 'expand_less' : 'expand_more'}</Icon>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
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
      </MotionInView>
    </>
  )
}

export default WorkITem
