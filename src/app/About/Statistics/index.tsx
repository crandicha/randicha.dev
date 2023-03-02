import clsx from 'clsx'
import IncreasingNumber from '../../../components/IncreasingNumber'
import { WORK_EXPERIENCES, YEARS_OF_EXPERIENCE } from '../../../../data/general'

export interface IStatisticsProps extends React.HTMLProps<HTMLDivElement> {}
const Statistics = ({ className }: IStatisticsProps) => {
  const companiesWorked = WORK_EXPERIENCES?.length

  return (
    <div
      className={clsx(
        'flex flex-col justify-around gap-10 md:flex-row',
        className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-row font-Montserrat text-3xl font-bold text-tertiary">
          <IncreasingNumber number={YEARS_OF_EXPERIENCE} />+
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
