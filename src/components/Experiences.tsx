import { CSSProperties, useEffect, useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MdWork } from 'react-icons/md'

export interface WorkExperience {
  positionName: string
  employmentType: string
  companyName: string
  companyPic?: any
  location: string
  description?: string
  startDate: Date
  currentlyWorking?: boolean
  lastDate?: Date
  skills: string[]
}

export interface CompanyIconComponent {
  icon: JSX.Element
  iconStyle: CSSProperties
}

const Experiences = () => {
  const [experiences, setExperiences] = useState<WorkExperience[]>([])

  const GetCompanyIconComponent = (imgSrc?: string): CompanyIconComponent => {
    const component: CompanyIconComponent = {
      icon: <MdWork />,
      iconStyle: {
        background: '#fff',
        color: '#085195',
        borderColor: '#085195',
        boxShadow:
          '0 0 0 4px #085195, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)'
      }
    }
    if (imgSrc === undefined || imgSrc === '') return component
    component.icon = (
      <img src={imgSrc} style={{ borderRadius: '50%', objectFit: 'cover' }} />
    )
    component.iconStyle.display = 'flex'
    component.iconStyle.alignItems = 'center'
    return component
  }

  const GetExperiencePeriod = (exp: WorkExperience): string => {
    let txt = `${exp.startDate.toLocaleString('default', {
      month: 'long'
    })} ${exp.startDate.getFullYear()}`
    if (exp.currentlyWorking || (exp.lastDate && exp.lastDate > new Date()))
      txt += ' - Present'
    else if (exp.lastDate) {
      txt += ` - ${exp.lastDate.toLocaleString('default', {
        month: 'long'
      })} ${exp.lastDate.getFullYear()}`
    }
    return txt
  }

  const getWorkExperience = () => {
    const workExperince1: WorkExperience = {
      positionName: 'Full stack software engineer',
      employmentType: 'Internship',
      companyName: 'Agoda',
      location: 'Bangkok, Thailand',
      startDate: new Date(2022, 6),
      lastDate: new Date(2022, 7),
      skills: [
        'TypeScript',
        'Scrum',
        'React',
        '.NET Core',
        'Profiling',
        'Kubernetes'
      ],
      currentlyWorking: false,
      companyPic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-WafmzXr_JfKJ4gEUgxa49Bc7Xn72RoaZkD6_5je6QT7ssgxxWhIbnW7ylmLPZ4x89g&usqp=CAU'
    }
    const workExperince2: WorkExperience = {
      positionName: 'Full stack software engineer',
      employmentType: 'Part-time Internship',
      companyName: 'Agoda',
      location: 'Bangkok, Thailand',
      startDate: new Date(2022, 8),
      lastDate: new Date(2022, 12),
      skills: ['TypeScript', 'Scrum', 'React', '.NET Core'],
      companyPic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-WafmzXr_JfKJ4gEUgxa49Bc7Xn72RoaZkD6_5je6QT7ssgxxWhIbnW7ylmLPZ4x89g&usqp=CAU'
    }
    setExperiences([workExperince1, workExperince2])
  }

  useEffect(() => {
    getWorkExperience()
  }, [])

  return (
    <div id="experiences" className="px-10">
      <h2
        id="title"
        className="text-custom-blue text-3xl md:text-4xl text-center pt-24 pb-10 sha"
      >
        Work Experience
      </h2>
      <VerticalTimeline lineColor="#085195">
        {experiences.reverse().map((exp, index) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: '#fff',
                boxShadow: '0 0'
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)'
              }}
              date={GetExperiencePeriod(exp)}
              iconStyle={GetCompanyIconComponent(exp.companyPic).iconStyle}
              icon={GetCompanyIconComponent(exp.companyPic).icon}
            >
              <div className="vertical-timeline-element-title">
                <h3 className="text-xl">{exp.positionName}</h3>
                <h3 className="">{exp.employmentType}</h3>
                <h3>{exp.companyName}</h3>
              </div>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.location}
              </h4>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Experiences
