import clsx from 'clsx'
import GlitchText from '../../../../components/GlitchText'
import MotionInView from '../../../../components/MotionInView'

interface WorkITemProps extends React.HTMLProps<HTMLDivElement> {
  position: 'left' | 'right'
  from: string
  to: string
  company: string
  logo: string
  title: string
}

const WorkITem = ({
  position = 'left',
  from = 'Jan 2000',
  to = 'Des 2020',
  company = 'GovTech Edu',
  logo,
  title = 'Frontend Engineer',
}: WorkITemProps) => {
  return (
    <>
      <div
        className={clsx(
          'hidden min-h-[300px] md:!flex',
          position === 'left' ? 'flex-row' : 'flex-row-reverse'
        )}
      >
        <div className="flex flex-[3_3_0] items-center">
          <MotionInView
            once
            className="h-full w-full"
            onHidden={{
              translateX: position === 'left' ? '-50px' : '50px',
              opacity: 0,
            }}
            onVisible={{
              translateX: '0px',
              opacity: 1,
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center bg-secondary p-4 shadow-md transition hover:shadow-xl">
              <img src={logo} alt={company} />
              <h3 className="font-MavenPro text-2xl font-bold">{company}</h3>
              <h3 className="text-center font-MavenPro text-xl font-bold">
                {title}
              </h3>
            </div>
          </MotionInView>
        </div>
        <div className="relative flex flex-[1_1_0] items-center">
          <div className="h-[1px] w-full border-t border-black"></div>
          <div
            className={clsx(
              'absolute  h-3 w-3 rounded-full bg-tertiary',
              position === 'left' ? 'right-[-6px]' : 'left-[-6px]'
            )}
          ></div>
        </div>
        <div
          className={clsx(
            'flex flex-[4_4_0] items-center justify-center break-words',
            position === 'left'
              ? 'border-l border-l-black'
              : 'border-r border-r-black'
          )}
        >
          <GlitchText
            as="p"
            text={`${from} - ${to}`}
            className="text-xl font-bold"
          />
        </div>
      </div>
    </>
  )
}

export default WorkITem
