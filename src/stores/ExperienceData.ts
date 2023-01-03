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
  startDate: new Date(2022, 5),
  endDate: new Date(2022, 6),
  tag: ['C#', '.NET Core', 'React', 'Typescript', 'Profiling'],
  description: `Worked on internal tools related to .NET Profiling
  - Created an internal diagnostic package for other services.
  - Created a new app from scratch to trigger other services to capture processes, so other engineers can visualize the captured processes and identify the cause of problems.
`
}

export const experience2: IExperienceInformation = {
  id: 2,
  jobTitle: 'Full stack Software Engineer',
  employmentType: 'Part-time internship',
  companyName: 'Agoda',
  location: 'Bangkok, Thailand',
  startDate: new Date(2022, 7),
  endDate: new Date(2022, 11),
  tag: ['C#', '.NET Core', 'React', 'Typescript'],
  description: `Worked on product "Agoda Homes"
  --------------
  ✦ Weekly/Monthly Promotions
  - Extends the weekly/monthly promotion input to be in the property creation page.
  - Implemented the service that saving promotion into the database.
  - Bind CMS data to display on client side.
  ✦ Booking On Request (BOR) Host Approval notification
  - Increase the amount of BOR awaiting approval notification to host within 24 hours.
  - Created some unit tests to check for logic and integration test to check for the overall flow.
  - BOR booking miss rate decreased around 30%.
  ✦ Skip Profile section in property creation page.
  - Skip Profile section in property creation page if host already has all required information.
  - Implemented some of logic to not show Profile section and skip to next section.
`
}

export const experiences: IExperienceInformation[] = [
  experience1,
  experience2
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
