import AboutMe from '@src/components/AboutMe'
import Certificates from '@src/components/Certificates'
import Contact from '@src/components/Contact'
import Education from '@src/components/Education'
import Experiences from '@src/components/Experiences'
import Footer from '@src/components/Footer'
import Projects from '@src/components/Projects'

const Home = () => {
  return (
    <div className="duration-700 bg-white dark:bg-gray-woodsmoke">
      <AboutMe />
      <Experiences />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
