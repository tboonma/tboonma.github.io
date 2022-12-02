import AboutMe from '../components/AboutMe'
import Experiences from '../components/Experiences'

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Experiences />
      <div id="projects" className="p-10 text-center">
        <h1>Development In Progress</h1>
      </div>
      <div id="certificates" className="p-10 text-center">
        <h1>Development In Progress</h1>
      </div>
      <div id="contact" className="p-10 text-center">
        <h1>Development In Progress</h1>
      </div>
    </div>
  )
}

export default Home
