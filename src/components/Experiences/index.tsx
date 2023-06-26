import { useEffect, useState } from 'react'
import { MdNavigateNext, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { experiences, IExperienceInformation } from '@src/stores/ExperienceData'
import './Experiences.css'

const Experiences = () => {
  const [experience, setExperience] = useState<IExperienceInformation>()
  const [experienceDuration, setExperienceDuration] = useState<string>('')

  const getExperienceDuration = (exp: IExperienceInformation): void => {
    let result: string = exp.startDate.toLocaleString('default', {
      month: 'short',
      year: 'numeric'
    })
    result += ' - '
    if (exp.endDate !== undefined)
      result += exp.endDate?.toLocaleString('default', {
        month: 'short',
        year: 'numeric'
      })
    else result += 'Present'
    setExperienceDuration(result)
  }

  useEffect(() => {
    if (experience === undefined) return
    getExperienceDuration(experience)
  }, [experience])

  useEffect(() => {
    setExperience(experiences[0])
  }, [])

  return (
    <div
      id="experiences"
      className="px-10 py-24 bg-white-alabaster dark:bg-transparent"
    >
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
      {/* Desktop */}
      <div className="hidden lg:flex min-h-[100px]">
        <div className="w-2/5 pt-12 px-2 space-y-3">
          {experiences.map((val) => (
            <div className="workplace" key={val.id}>
              <label>
                <input
                  type="radio"
                  value={val.id}
                  checked={experience?.id === val.id}
                  onChange={() => setExperience(val)}
                  className="peer"
                />
                <div className="w-5/6 py-3 px-4 rounded-lg text-clay cursor-pointer hover:bg-gray-500 hover:bg-opacity-25 dark:text-white-seashell peer-checked:text-blue-light peer-checked:dark:text-blue-dark peer-checked:bg-white peer-checked:px-6 flex justify-between items-center duration-300 peer-checked:cursor-default">
                  {experience?.companyName}
                  <MdNavigateNext
                    className={
                      'w-5 h-5 ' + (experience?.id === val.id ? '' : 'hidden')
                    }
                  />
                </div>
              </label>
            </div>
          ))}
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-4/5 space-y-3">
            <div className="text-xl text-clay dark:text-white-seashell font-semibold">
              {experience?.jobTitle} - {experience?.companyName}
            </div>
            <div className="text-base text-gray-nevada dark:text-white-seashell">
              {experience?.location}
            </div>
            <div className="text-gray-nevada dark:text-white-seashell font-semibold">
              {experienceDuration} · {experience?.employmentType}
            </div>
            <div className="flex space-x-3 mb-10">
              {experience?.tag.map((val, index) => (
                <div
                  key={index}
                  className="border-[1.5px] border-white-seashell rounded text-gray-nevada dark:text-white-alabaster py-1 px-2 text-sm"
                >
                  {val}
                </div>
              ))}
            </div>
            <div className="h-[1.5px] bg-white-seashell dark:h-[0.5px] dark:bg-gray-nevada"></div>
            <article className="text-gray-nevada dark:text-white-seashell whitespace-pre-line">
              {experience?.description}
            </article>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="w-full pt-12 px-2 space-y-3">
          {experiences.map((val) => (
            <div className="workplace" key={val.id}>
              <label>
                <input
                  type="radio"
                  value={val.id}
                  checked={experience?.id === val.id}
                  onChange={() => setExperience(val)}
                  className="peer"
                />
                <div className="w-full py-3 px-4 rounded-lg text-black cursor-pointer peer-checked:text-blue-light peer-checked:dark:text-blue-dark bg-white dark:bg-opacity-90 peer-checked:px-6 flex justify-between items-center duration-300 peer-checked:cursor-default shadow-md">
                  {experience?.companyName}
                  <MdNavigateNext
                    className={
                      'w-5 h-5' + (experience?.id === val.id ? ' hidden' : '')
                    }
                  />
                  <MdOutlineKeyboardArrowDown
                    className={
                      'w-5 h-5' + (experience?.id === val.id ? '' : ' hidden')
                    }
                  />
                </div>
                <div className="w-full h-full hidden peer-checked:flex justify-center pt-4">
                  <div className="w-4/5 space-y-3">
                    <div className="text-xl text-clay dark:text-white-seashell font-semibold">
                      {experience?.jobTitle} - {experience?.companyName}
                    </div>
                    <div className="text-base text-gray-nevada dark:text-white-seashell">
                      {experience?.location}
                    </div>
                    <div className="text-gray-nevada dark:text-white-seashell font-semibold">
                      {experienceDuration} · {experience?.employmentType}
                    </div>
                    <div className="flex flex-wrap mb-10">
                      {experience?.tag.map((val, index) => (
                        <div
                          key={index}
                          className="mt-1 mr-3 border-[1.5px] border-white-seashell rounded text-gray-nevada dark:text-white-alabaster py-1 px-2 text-sm"
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                    <div className="h-[1.5px] bg-white-seashell dark:h-[0.5px] dark:bg-gray-nevada"></div>
                    <article className="text-gray-nevada dark:text-white-seashell whitespace-pre-line">
                      {experience?.description}
                    </article>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences
