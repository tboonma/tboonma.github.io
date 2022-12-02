import AboutMe from '../components/AboutMe'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Experiences />
      <Projects />
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
