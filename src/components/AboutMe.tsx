import './AboutMe.css'
import MyPic from '../assets/img/profile-pic.jpg'
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialTwitter
} from 'react-icons/sl'
import { FiGithub } from 'react-icons/fi'
import { GrInstagram } from 'react-icons/gr'

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="grid min-h-screen justify-between items-center px-10 md:grid-cols-5 gap-8 pt-28 md:pt-32 pb-16 md:pb-24"
    >
      <div className="space-y-3 md:col-span-3 text-center md:text-left">
        <div className="before:bg-gray-alto heading text-gray-nevada text-sm md:text-md tracking-extrawide flex items-center justify-center md:justify-start">
          <p>MY NAME IS</p>
        </div>
        <div>
          <h1 className="font-bold text-clay dark:text-white-seashell text-4xl md:text-5xl">
            Tawan{' '}
            <span className="text-blue-light dark:text-blue-dark">Boonma</span>
          </h1>
        </div>
        <p className="text-clay dark:text-white-seashell md:w-11/12">
          <span className=" font-bold text-lg">
            Full stack Software Engineer
          </span>{' '}
          who also a Junior in Software and Knowledge Engineering at Kasetsart
          University. Right now I'm extremely busy with final exam and projects,
          developing this web soon.
        </p>
        <div className="flex items-baseline space-x-7 pt-5 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/tboonma" target="_blank">
            <SlSocialLinkedin className="w-6 h-6 text-clay dark:text-white-seashell hover:opacity-50 stroke-[20] duration-300" />
          </a>
          <a href="https://github.com/tboonma" target="_blank">
            <FiGithub className="w-6 h-5 text-clay dark:text-white-seashell hover:opacity-50 stroke-[2.6] duration-300" />
          </a>
          <a href="https://www.instagram.com/tboonma_" target="_blank">
            <GrInstagram className="w-6 h-6 text-clay dark:text-white-seashell hover:opacity-50 stroke-[0.03] duration-300" />
          </a>
          <a href="https://www.facebook.com/tboonmaeiei" target="_blank">
            <SlSocialFacebook className="w-6 h-6 text-clay dark:text-white-seashell hover:opacity-50 stroke-[18] duration-300" />
          </a>
          <a href="https://twitter.com/Tboonmaeiei" target="_blank">
            <SlSocialTwitter className="w-6 h-6 text-clay dark:text-white-seashell hover:opacity-50 stroke-[18] duration-300" />
          </a>
        </div>
      </div>
      <div className="md:col-span-2 flex justify-center mt-10">
        <div className="Profile max-w-xs">
          <div id="rectangle"></div>
          <div id="profile-pic">
            <img src={MyPic} alt="MainPicture" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
