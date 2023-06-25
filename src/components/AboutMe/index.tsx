import './AboutMe.css'
import MyPicWebP from '@src/assets/img/profile-pic.webp'
import MyPicJpg from '@src/assets/img/profile-pic.jpg'
import SocialAccounts from '@src/components/SocialAccounts'
import ImgWithFallback from '@src/utils/ImgWithFallback'

const AboutMe = () => {
  return (
    <article
      id="about-me"
      className="grid min-h-screen justify-between items-center px-10 md:grid-cols-5 gap-8 pt-28 md:pt-32 pb-16 md:pb-24"
    >
      <article className="space-y-3 md:col-span-3 text-center md:text-left">
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
          <strong className="font-bold text-lg">
            Full stack Software Engineer
          </strong>{' '}
          who also a Junior in Software and Knowledge Engineering at Kasetsart
          University.
        </p>
        <SocialAccounts
          cls="flex items-baseline space-x-7 pt-5 justify-center md:justify-start"
          iconSize={6}
        />
      </article>
      <figure className="md:col-span-2 flex justify-center mt-10">
        <div className="Profile max-w-xs">
          <div id="rectangle"></div>
          <div id="profile-pic">
            <ImgWithFallback src={MyPicWebP} fallback={MyPicJpg} alt='Profile Picture' />
          </div>
        </div>
      </figure>
    </article>
  )
}

export default AboutMe
