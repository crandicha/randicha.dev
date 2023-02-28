import React from 'react'

interface IncreasingNumberProps extends React.HTMLProps<HTMLDivElement> {
  number: number
}

const DEFAULT_AS = 'div'

const IncreasingNumber = ({
  number,
  as = DEFAULT_AS,
  ...props
}: IncreasingNumberProps) => {
  const [parsedNumber, setParsedNumber] = React.useState<number>(0)
  const Component = as
  const hiddenProps = {
    ...props,
    className: 'hidden',
  }

  const doIncreaseNumberEffect = () => {
    let iteration = 0
    const increaseNumber = (currentNumber: number) => {
      setParsedNumber(currentNumber)
      iteration++
      if (iteration <= number) {
        setTimeout(
          () => increaseNumber(iteration),
          (iteration + 1) * (50 / number)
        )
      }
    }
    setTimeout(() => increaseNumber(iteration), (iteration + 1) * (50 / number))
  }

  React.useEffect(() => {
    doIncreaseNumberEffect()
  }, [])

  return (
    <>
      <Component {...hiddenProps}>{number}</Component>
      <Component {...props}>{parsedNumber}</Component>
    </>
  )
}

export default IncreasingNumber
