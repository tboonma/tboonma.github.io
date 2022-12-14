import './Navbar.css'
import { useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md'
import { inject, observer } from 'mobx-react'
import { mobXStore } from '../stores/MobXStore'
import Resume from '../assets/resume.pdf'
import React from 'react'

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
        `Navbar px-10 py-6 w-full fixed duration-300 flex justify-between` +
        (showBackground ? ' dark:bg-gray-shark bg-white shadow-md' : '')
      }
    >
      <div className="title grid place-content-center">
        <div className="text-xl text-center text-blue-light dark:text-blue-dark">
          Tawan B.
        </div>
      </div>
      <div className="text-center hidden lg:flex lg:items-center lg:justify-between px-10 space-x-12">
        <h2>
          <a
            href="#about-me"
            className="text-clay dark:text-white-seashell hover:text-slate-500 font-medium"
          >
            About me
          </a>
        </h2>
        <h2>
          <a
            href="#experiences"
            className="text-clay dark:text-white hover:text-slate-500"
          >
            Experiences
          </a>
        </h2>
        <h2>
          <a
            href="#projects"
            className="text-clay dark:text-white hover:text-slate-500"
          >
            Projects
          </a>
        </h2>
        <h2>
          <a
            href="#contact"
            className="text-clay dark:text-white hover:text-slate-500"
          >
            Contact
          </a>
        </h2>
        <h2 className="hidden">
          <a href="" className="text-clay dark:text-white hover:text-slate-500">
            ···
          </a>
        </h2>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <div
          className="text-clay hover:bg-gray-400 rounded-full cursor-pointer duration-300 p-2"
          onClick={changeThemeHandler}
        >
          {store.isDarkMode ? (
            <MdOutlineDarkMode className="text-white text-2xl" />
          ) : (
            <MdOutlineWbSunny className="text-clay text-2xl" />
          )}
        </div>
        <a
          className="text-clay border-white-seashell rounded-lg dark:text-white border h-full py-2 px-5 bg-transparent cursor-pointer"
          href={Resume}
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default inject('mobXStore')(observer(Navbar))
