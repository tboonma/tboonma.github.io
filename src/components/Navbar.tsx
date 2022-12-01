import './Navbar.css'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [showBackground, setBackground] = useState<boolean>(false)

  const changeBackgroundColor = () => {
    setBackground(window.scrollY >= 110)
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)
  })
  return (
    <div
      className={
        `Navbar px-10 py-8 flex justify-between w-full fixed duration-300 ` +
        (showBackground ? 'bg-white shadow-md ' : '')
      }
    >
      <h1 className="text-xl title text-center">Tawan B.</h1>
      <div className="text-center text-xl hidden md:flex space-x-14 text-custom-blue">
        <h2 className="">
          <a href="#about-me" className="text-black">
            About me
          </a>
        </h2>
        <h2 className="">
          <a href="#experiences" className="text-black">
            Experiences
          </a>
        </h2>
        <h2 className="">
          <a href="#projects" className="text-black">
            Projects
          </a>
        </h2>
        <h2 className="">
          <a href="#contact" className="text-black">
            Contact
          </a>
        </h2>
      </div>
      <HiBars3BottomRight className="w-6 h-6 block md:hidden text-custom-blue cursor-pointer" />
    </div>
  )
}

export default Navbar
