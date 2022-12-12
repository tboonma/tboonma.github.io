import axios from 'axios'
import { useEffect } from 'react'
import './Projects.css'
import ThaiRepose from '../assets/img/projects/thairepose.png'
import { SiGithub } from 'react-icons/si'

const Projects = () => {
  const GetAllRepo = async () => {
    const response = await axios.get(
      'https://api.github.com/users/tboonma/repos?&per_page=100&sort=pushed'
    )
    console.log(response.data)
  }

  useEffect(() => {
    GetAllRepo()
  }, [])

  return (
    <div id="projects" className="Projects py-24 px-10">
      <div className="space-y-3 md:col-span-3 text-center md:text-left">
        <div className="before:bg-gray-alto heading text-gray-nevada text-sm md:text-md tracking-extrawide flex items-center justify-center md:justify-start">
          <p>MY WORKS</p>
        </div>
        <div>
          <h1 className="font-bold text-clay dark:text-white-seashell text-3xl md:text-4xl">
            Featured Portfolios
          </h1>
        </div>
        <div className="w-full h-full grid md:grid-cols-3 gap-10 place-content-center pt-8">
          <div className="border-gray-wildsand border-[1px] rounded-lg dark:border-0 dark:bg-white">
            <img
              src={ThaiRepose}
              alt="ThaiRepose"
              className="object-cover rounded-t-lg"
            />
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-clay text-left">
                    ThaiRepose
                  </h2>
                  <p className="text-sm text-left">
                    Project about traveling planner
                  </p>
                </div>
                <a
                  style={{ color: 'inherit' }}
                  className="hover:opacity-50 duration-300 p-2 border-white-seashell text-gray-nevada border-[1px] rounded-md"
                  href="https://github.com/tboonma/thairepose"
                  target="_blank"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
              </div>
              <div className="flex flex-wrap pt-3 gap-x-2 gap-y-1">
                <div className="text-gray-nevada border-white-seashell border-[0.5px] rounded-lg text-xs py-1 px-2">
                  Python
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
