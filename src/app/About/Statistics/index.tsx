import clsx from 'clsx'
import { WORK_EXPERIENCES, YEARS_OF_EXPERIENCE } from '../../../../data/general'

export interface IStatisticsProps extends React.HTMLProps<HTMLDivElement> {}
const Statistics = ({ className }: IStatisticsProps) => {
  const companiesWorked = WORK_EXPERIENCES?.length

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-6 sm:grid-cols-2',
        className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-white p-6 dark:bg-surface-dark sm:p-8">
        <div className="text-4xl font-semibold text-accent dark:text-accent-dark sm:text-5xl">
          {YEARS_OF_EXPERIENCE}+
        </div>
        <p className="text-center text-muted dark:text-muted-dark">
          Years of Experience
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-white p-6 dark:bg-surface-dark sm:p-8">
        <div className="text-4xl font-semibold text-accent dark:text-accent-dark sm:text-5xl">
          {companiesWorked}
        </div>
        <p className="text-center text-muted dark:text-muted-dark">
          Companies Worked
        </p>
      </div>
    </div>
  )
}

export default Statistics
