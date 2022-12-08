export interface IExperienceInformation {
  id: number
  jobTitle: string
  employmentType: string
  companyName: string
  location: string
  startDate: Date
  endDate?: Date
  description?: string
  tag: string[]
}

export const experience1: IExperienceInformation = {
  id: 1,
  jobTitle: 'Full stack Software Engineer',
  employmentType: 'Internship',
  companyName: 'Agoda',
  location: 'Bangkok, Thailand',
  startDate: new Date(2022, 6),
  endDate: new Date(2022, 7),
  tag: ['C#', '.NET Core', 'React', 'Typescript', 'Profiling']
}

export const experience2: IExperienceInformation = {
  id: 2,
  jobTitle: 'Full stack Software Engineer',
  employmentType: 'Part-time internship',
  companyName: 'Agoda',
  location: 'Bangkok, Thailand',
  startDate: new Date(2022, 8),
  endDate: new Date(2022, 12),
  tag: ['C#', '.NET Core', 'React', 'Typescript']
}

export const experiences: IExperienceInformation[] = [
  experience1,
  experience2
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
