import axios from 'axios'
import { useEffect } from 'react'
import './Projects.css'
import { SiPython } from 'react-icons/si'

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
    <div id="projects" className="Projects pt-24 px-10">
      <div className="space-y-3 md:col-span-3 text-center md:text-left">
        <div className="before:bg-gray-alto heading text-gray-nevada text-sm md:text-md tracking-extrawide flex items-center justify-center md:justify-start">
          <p>MY WORKS</p>
        </div>
        <div>
          <h1 className="font-bold text-clay dark:text-white-seashell text-3xl md:text-4xl">
            Featured Portfolios
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Projects
