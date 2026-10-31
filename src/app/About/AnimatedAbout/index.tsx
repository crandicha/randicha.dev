import clsx from 'clsx'
import MotionInView from '../../../components/MotionInView'
import { ABOUT_PARAGRAPHS } from '../../../../data/general'

export interface IAnimatedAboutProps extends React.HTMLProps<HTMLDivElement> {}
const AnimatedAbout = ({ className }: IAnimatedAboutProps) => {
  return (
    <div className={clsx('flex flex-col gap-6', className)}>
      {ABOUT_PARAGRAPHS.map((paragraph, index) => (
        <MotionInView
          once
          key={index}
          transition={index > 0 ? { delay: 0.05 } : undefined}
        >
          <p className="text-center text-lg leading-relaxed text-muted dark:text-muted-dark md:text-left md:text-xl">
            {paragraph}
          </p>
        </MotionInView>
      ))}
    </div>
  )
}

export default AnimatedAbout
