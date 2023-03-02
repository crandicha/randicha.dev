import clsx from 'clsx'
import GlitchText from '../../../components/GlitchText'
import IncreasingNumber from '../../../components/IncreasingNumber'

export interface IStatisticsProps extends React.HTMLProps<HTMLDivElement> {}
const Statistics = ({ className }: IStatisticsProps) => {
  const yearsExp = Math.floor(
    (new Date().getTime() - new Date('2017-09-01').getTime()) /
      (1000 * 60 * 60 * 24 * 30 * 12)
  )
  const companiesWorked = 4

  return (
    <div
      className={clsx(
        'flex flex-col justify-around gap-10 md:flex-row',
        className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-row font-Montserrat text-3xl font-bold text-tertiary">
          <IncreasingNumber number={yearsExp} />+
        </div>
        <p className="text-center text-lg md:text-left">Years of Experience</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <IncreasingNumber
          number={companiesWorked}
          className="font-Montserrat text-3xl font-bold text-tertiary"
        />
        <p className="text-center text-lg md:text-left">Companies Worked</p>
      </div>
    </div>
  )
}

export default Statistics
