import './Home.css'

const Home = () => {
  return (
    <div className="flex h-screen justify-between items-center px-10">
      <div className="space-y-3">
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
        <p className="text-custom-blue md:w-1/2">
          Full stack Software Engineer who also a Junior in Software and
          Knowledge Engineering at Kasetsart University. Right now I'm extremely
          busy with final exam and projects, developing this web soon.
        </p>
      </div>
      <div></div>
    </div>
  )
}

export default Home
