import React from 'react'

interface GlitchTextProps extends React.HTMLProps<HTMLDivElement> {
  text: string
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const DEFAULT_AS = 'div'
const GlitchText = ({ text, as = DEFAULT_AS, ...props }: GlitchTextProps) => {
  const [glitchedText, setGlitchedText] = React.useState<string>(text as string)
  const Component = as
  const hiddenProps = {
    ...props,
    className: 'hidden',
  }

  const doGlitchEffect = () => {
    let iteration = 0
    const glitchInterval = setInterval(() => {
      const randomLetter = text?.split?.('')?.map((char, index) => {
        if (index < iteration || char === ' ') return char
        const randomLetter = LETTERS[Math.floor(Math.random() * 26)]
        return char === char?.toUpperCase?.()
          ? randomLetter
          : randomLetter?.toLowerCase?.()
      })
      if (iteration > text?.length) clearInterval(glitchInterval)
      setGlitchedText(randomLetter?.join?.(''))
      iteration++
    }, 30)
  }

  React.useEffect(() => {
    doGlitchEffect()
  }, [])
  return (
    <>
      <Component {...hiddenProps}>{text}</Component>
      <Component {...props}>{glitchedText}</Component>
    </>
  )
}

export default GlitchText
