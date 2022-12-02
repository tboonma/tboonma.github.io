import './AboutMe.css'
import MyPic from '../assets/img/me.jpg'

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="grid min-h-screen justify-between items-center px-10 md:grid-cols-5 gap-8 pt-28 md:pt-32 pb-16 md:pb-24"
    >
      <div className="space-y-3 md:col-span-3 text-center md:text-left">
        <h2 className="text-custom-blue text-3xl md:text-4xl">
          Welcome to my site
        </h2>
        <div>
          <h1 className="font-bold text-custom-blue2 text-4xl md:text-5xl">
            Hi! I am Tawan
          </h1>
          <h1 className="font-bold text-custom-blue2 text-4xl md:text-5xl">
            Software <span className="text-custom-green">Engineer</span>
          </h1>
        </div>
        <p className="text-custom-blue md:w-11/12">
          Full stack Software Engineer who also a Junior in Software and
          Knowledge Engineering at Kasetsart University. Right now I'm extremely
          busy with final exam and projects, developing this web soon.
        </p>
      </div>
      <div className="md:col-span-2 flex justify-center">
        <div className="Profile max-w-sm">
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
