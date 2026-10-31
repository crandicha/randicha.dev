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
      className="flex flex-col items-center gap-8 text-center md:gap-10"
    >
      <p className="max-w-2xl text-base text-muted dark:text-muted-dark sm:text-lg md:text-xl">
        {text}
      </p>
      <Button
        variant="filled"
        className="max-w-full break-all text-base md:text-lg"
        onClick={onEmailClicked}
      >
        {EMAIL_ADDRESS}
      </Button>
    </MotionInView>
  )
}

export default AnimatedContact
