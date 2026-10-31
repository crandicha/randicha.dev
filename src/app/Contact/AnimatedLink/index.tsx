import MotionInView from '../../../components/MotionInView'

export interface IAnimatedLink {
  name: string
  url: string
  src: string | null | undefined
  index: number
}

const AnimatedLink = ({ name, url, src, index }: IAnimatedLink) => {
  return (
    <MotionInView once transition={{ delay: 0.1 * index }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="inline-flex rounded-full bg-white p-3 shadow-sm ring-1 ring-black/5 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 dark:bg-canvas dark:ring-white/20 dark:shadow-none"
      >
        <img src={src ? `/${src}` : ''} alt="" className="h-8 w-8" />
      </a>
    </MotionInView>
  )
}

export default AnimatedLink
