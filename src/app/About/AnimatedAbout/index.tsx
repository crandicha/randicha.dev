import clsx from 'clsx'
import MotionInView from '../../../components/MotionInView'
import { YEARS_OF_EXPERIENCE } from '../../../../data/general'

export interface IAnimatedAboutProps extends React.HTMLProps<HTMLDivElement> {}
const AnimatedAbout = ({ className }: IAnimatedAboutProps) => {
  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      <MotionInView
        once
        onHidden={{
          translateX: '-50px',
          opacity: 0,
        }}
        onVisible={{
          translateX: '0px',
          opacity: 1,
        }}
      >
        <p className="text-center text-lg md:text-left">
          Self-teach tech enthusiast with {YEARS_OF_EXPERIENCE}+ years of
          experience as frontend software engineer and passion in building tech
          solutions for better humanity, backed by knowledge and experience
          building several web applications for multiple startups unicorn &
          public sector in Indonesia.
        </p>
      </MotionInView>
      <MotionInView
        once
        onHidden={{
          translateX: '-50px',
          opacity: 0,
        }}
        onVisible={{
          translateX: '0px',
          opacity: 1,
        }}
        transition={{
          delay: 0.05,
        }}
      >
        <p className="text-center text-lg md:text-left">
          Experienced with wide array of frontend technologies from vanilla
          Javascript, CoffeeScript, Typescript to modern UI libraries like
          AngularJS, VueJs, Nuxt, React, Next, Svelte, Astro and many others.
          Also experience in Progressive Web Apps technology and collaborated on
          an in-house Component Library development.
        </p>
      </MotionInView>
    </div>
  )
}

export default AnimatedAbout
