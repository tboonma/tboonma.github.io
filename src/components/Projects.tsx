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
    <div id="projects" className="Projects pt-28 px-10">
      <h2
        id="title"
        className="text-custom-blue text-3xl md:text-4xl text-center pt-24 pb-10"
      >
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-translucent shadow-md p-3 rounded-xl">
          <p className="text-xl font-bold text-custom-blue2">Project name</p>
        </div>
        <div className="bg-translucent shadow-md p-3 rounded-xl">Hello</div>
        <div className="bg-translucent shadow-md p-3 rounded-xl">Hello</div>
        <div className="bg-translucent shadow-md p-3 rounded-xl">Hello</div>
      </div>
    </div>
  )
}

export default Projects
