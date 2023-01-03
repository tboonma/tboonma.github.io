import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

const Education = () => {
  return (
    <div
      id="education"
      className="Education py-24 px-10 bg-white-alabaster dark:bg-transparent"
    >
      <div className="space-y-3 md:col-span-3 text-center md:text-left">
        <div className="before:bg-gray-alto heading text-gray-nevada text-sm md:text-md tracking-extrawide flex items-center justify-center md:justify-start">
          <p>LEARNING PATH</p>
        </div>
        <div>
          <h1 className="font-bold text-clay dark:text-white-seashell text-3xl md:text-4xl">
            Education & Skills
          </h1>
        </div>
        <div className="pt-8">
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0
              }
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h2 className="text-lg font-semibold text-clay dark:text-white-seashell">
                    Kasetsart University
                  </h2>
                  <p className="text-base text-gray-nevada dark:text-white">
                    Bachelor&apos;s degree - Software and Knowledge Engineering
                  </p>
                  <div className="py-5 text-base text-clay dark:text-white-seashell">
                    <p>2020 - Present</p>
                    <p>GPAX 3.22</p>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h2 className="text-lg font-semibold text-clay dark:text-white-seashell">
                    Pibulwitthayalai school
                  </h2>
                  <p className="text-base text-gray-nevada dark:text-white">
                    High school - SMTE
                  </p>
                  <p className="py-5 text-base text-clay dark:text-white-seashell">
                    2017 - 2019
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default Education
