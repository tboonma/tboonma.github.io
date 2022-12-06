import { CSSProperties, useEffect, useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MdWork } from 'react-icons/md'
import './Experiences.css'

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
    <div id="experiences" className="px-10 pt-24">
      <div className="space-y-3 md:col-span-3 text-center md:text-left">
        <div className="before:bg-gray-alto heading text-gray-nevada text-sm md:text-md tracking-extrawide flex items-center justify-center md:justify-start">
          <p>CAREER PATH</p>
        </div>
        <div>
          <h1 className="font-bold text-clay dark:text-white-seashell text-3xl md:text-4xl">
            Work Experiences
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Experiences
