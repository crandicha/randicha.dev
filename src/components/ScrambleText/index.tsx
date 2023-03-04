import React from 'react'
import ScramblingText from './Scrambler.js'

interface ScrambleTextProps extends React.HTMLProps<HTMLParagraphElement> {
  textArray?: string[]
  stringifiedTextArray?: string
}

const ScrambleText = ({
  textArray,
  stringifiedTextArray,
  className,
}: ScrambleTextProps) => {
  const selectedText: string[] =
    textArray || stringifiedTextArray?.split(',') || []
  const [text, setText] = React.useState(selectedText?.[0])
  const [count, setCount] = React.useState(1)
  const scrambler = React.useRef(new ScramblingText())

  const scramblerText = React.useCallback(() => {
    const scramblerInstance = scrambler.current

    const targetText = selectedText?.[count % selectedText?.length]
    scramblerInstance.scramble(targetText, setText)
    setCount((val) => val + 1)
  }, [count])

  React.useEffect(() => {
    setTimeout(scramblerText, 3000)
  }, [count])
  return <p className={className}>{text}</p>
}

export default ScrambleText
