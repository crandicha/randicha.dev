import React from 'react'

interface GlitchTextProps extends React.HTMLProps<HTMLDivElement> {
  text: string
  delay?: number
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const DEFAULT_AS = 'div'
const GlitchText = ({
  text,
  as = DEFAULT_AS,
  delay,
  ...props
}: GlitchTextProps) => {
  const [glitchedText, setGlitchedText] = React.useState<string>(text as string)
  const Component = as
  const hiddenProps = {
    ...props,
    className: 'hidden',
  }

  let iteration = 0

  const drawGlitchEffect = () => {
    setTimeout(() => {
      const randomLetter = text?.split?.('')?.map((char, index) => {
        if (index < iteration || char === ' ') return char
        const randomLetter = LETTERS[Math.floor(Math.random() * 26)]
        return char === char?.toUpperCase?.()
          ? randomLetter
          : randomLetter?.toLowerCase?.()
      })
      setGlitchedText(randomLetter?.join?.(''))
      iteration++
      if (iteration <= text?.length) requestAnimationFrame(drawGlitchEffect)
    }, 1000 / 60)
  }

  React.useEffect(() => {
    setTimeout(() => {
      window.requestAnimationFrame(drawGlitchEffect)
    }, delay || 0)
  }, [])
  return (
    <>
      <Component {...hiddenProps}>{text}</Component>
      <Component {...props}>{glitchedText}</Component>
    </>
  )
}

export default GlitchText
