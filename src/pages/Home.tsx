import AboutMe from '../components/AboutMe'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Experiences />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </div>
  )
}

export default Home
