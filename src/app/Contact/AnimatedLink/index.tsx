import MotionInView from '../../../components/MotionInView'
import Button from '../../../components/Button'

export interface IAnimatedLink {
  name: string
  url: string
  src: string | null | undefined
  index: number
}

const AnimatedLink = ({ name, url, src, index }: IAnimatedLink) => {
  return (
    <MotionInView
      once
      transition={{
        delay: 0.1 * index,
      }}
      onHidden={{
        opacity: 0,
        translateX: '-50px',
      }}
      onVisible={{
        opacity: 1,
        translateX: '0px',
      }}
    >
      <a href={url} target="_blank">
        <Button variant="ghost" color="tertiary">
          <img src={src || ''} alt={name} className="text-red-200" />
        </Button>
      </a>
    </MotionInView>
  )
}

export default AnimatedLink
