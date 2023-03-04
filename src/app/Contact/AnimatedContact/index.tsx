import React from 'react'
import MotionInView from '../../../components/MotionInView'
import { EMAIL_ADDRESS } from '../../../../data/general'
import Button from '../../../components/Button'
import { toast } from 'react-toastify'

const OPEN_TEXT =
  "Looking for new opportunities! If you think I'd be a great fit for your team or have a job opening you'd like to discuss, please don't hesitate to get in touch. You can reach me at:"

const CLOSE_TEXT =
  "Happy where I am, but open to new opportunities! While I'm not actively job hunting, I'm always interested in exploring new possibilities and seeing what's out there. If you have an opportunity you'd like to discuss, please don't hesitate to get in touch at:"

export interface IAnimatedContact {
  open?: boolean
}
const AnimatedContact = ({ open }: IAnimatedContact) => {
  const text = open ? OPEN_TEXT : CLOSE_TEXT

  const onEmailClicked = () => {
    navigator?.clipboard?.writeText(EMAIL_ADDRESS)
    toast('Email copied to clipboard!', {
      closeButton: false,
    })
  }
  return (
    <MotionInView
      once
      onHidden={{ opacity: 0, translateY: '50px' }}
      onVisible={{ opacity: 1, translateY: '0px' }}
      className="flex flex-col gap-10 text-center md:gap-12"
    >
      <p className="text-xl md:text-2xl">{text}</p>
      <Button
        variant="ghost"
        color="tertiary"
        className="font-Montserrat text-2xl font-bold md:text-3xl"
        onClick={onEmailClicked}
      >
        {EMAIL_ADDRESS}
      </Button>
    </MotionInView>
  )
}

export default AnimatedContact
