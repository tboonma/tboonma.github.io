import AboutMe from '@src/components/AboutMe'
import Certificates from '@src/components/Certificates'
import Contact from '@src/components/Contact'
import Education from '@src/components/Education'
import Experiences from '@src/components/Experiences'
import Projects from '@src/components/Projects'

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
