import './Navbar.css'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { ChangeEvent, useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md'
import { inject, observer } from 'mobx-react'
import { mobXStore } from '../stores/MobXstore'

const Navbar = () => {
  const store = mobXStore
  const [showBackground, setBackground] = useState<boolean>(false)

  const changeThemeHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    store.setDarkMode(!store.isDarkMode)
  }

  const changeBackgroundColor = () => {
    setBackground(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)
  })

  return (
    <div
      className={
        `Navbar px-10 py-6 flex justify-between w-full fixed duration-300` +
        (showBackground ? ' dark:bg-black bg-white shadow-md ' : '')
      }
    >
      <div className="title grid place-content-center w-1/6">
        <div className="text-xl text-center">Tawan B.</div>
      </div>
      <div className="text-center hidden lg:flex lg:items-center lg:justify-center space-x-8 text-custom-blue w-3/6">
        <h2>
          <a
            href="#about-me"
            className="text-custom-blue dark:text-white hover:text-slate-500 font-medium"
          >
            About me
          </a>
        </h2>
        <h2>
          <a
            href="#experiences"
            className="text-custom-blue dark:text-white hover:text-slate-500"
          >
            Experiences
          </a>
        </h2>
        <h2>
          <a
            href="#projects"
            className="text-custom-blue dark:text-white hover:text-slate-500"
          >
            Projects
          </a>
        </h2>
        <h2>
          <a
            href="#contact"
            className="text-custom-blue dark:text-white hover:text-slate-500"
          >
            Contact
          </a>
        </h2>
        <h2 className="">
          <a
            href=""
            className="text-custom-blue dark:text-white hover:text-slate-500"
          >
            ···
          </a>
        </h2>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center w-1/6">
        <div
          className="hover:bg-slate-200 rounded-full cursor-pointer duration-300 p-2 mr-2"
          onClick={changeThemeHandler}
        >
          {store.isDarkMode ? (
            <MdOutlineDarkMode className="text-white text-2xl" />
          ) : (
            <MdOutlineWbSunny className="text-custom-blue text-2xl" />
          )}
        </div>
        <div className=" border-gray-500 rounded-md text-custom-blue dark:text-white border-2 h-full py-2 px-5">
          Resume
        </div>
      </div>
      <div className="grid place-content-center lg:hidden">
        <HiBars3BottomRight className="w-6 h-6 text-custom-blue cursor-pointer text-custom-blue dark:text-white" />
      </div>
    </div>
  )
}

export default inject('mobXStore')(observer(Navbar))
