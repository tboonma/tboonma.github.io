import './AboutMe.css'
import MyPic from '../assets/img/profile-pic.jpg'
import SocialAccounts from '../SocialAccounts'

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
          University. Right now I&apos;m extremely busy with final exam and
          projects, developing this web soon.
        </p>
        <SocialAccounts
          cls="flex items-baseline space-x-7 pt-5 justify-center md:justify-start"
          iconSize={6}
        />
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