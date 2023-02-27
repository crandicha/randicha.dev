import React from 'react'
import MotionInView from '../../../components/MotionInView'
const AnimatedAbout = () => {
  return (
    <div>
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
        <h1>Animated About</h1>
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
        <h1>Animated About</h1>
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
          delay: 0.1,
        }}
      >
        <h1>Animated About</h1>
      </MotionInView>
    </div>
  )
}

export default AnimatedAbout
