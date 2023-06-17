import './Navbar.css'
import React, { useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md'
import { inject, observer } from 'mobx-react'
import { mobXStore } from '@src/stores/MobXStore'
import Resume from '@src/assets/resume.pdf'

const Navbar = () => {
  const store = mobXStore
  const [showBackground, setBackground] = useState<boolean>(false)

  const changeThemeHandler = () => {
    store.setDarkMode(!store.isDarkMode)
  }

  const changeBackgroundColor = () => {
    setBackground(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)
  })

  return (
    <header
      className={
        `Navbar px-10 py-6 w-full fixed duration-300 flex justify-between` +
        (showBackground ? ' dark:bg-gray-shark bg-white shadow-md' : '')
      }
    >
      <h1 className="title grid place-content-center text-xl text-center text-blue-light dark:text-blue-dark">
        Tawan B.
      </h1>
      <nav className="text-center hidden lg:flex lg:items-center lg:justify-between px-10 space-x-12">
        <a
          href="#about-me"
          className="text-clay dark:text-white-seashell hover:text-slate-500 font-medium"
        >
          About me
        </a>
        <a
          href="#experiences"
          className="text-clay dark:text-white hover:text-slate-500"
        >
          Experiences
        </a>
        <a
          href="#projects"
          className="text-clay dark:text-white hover:text-slate-500"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-clay dark:text-white hover:text-slate-500"
        >
          Contact
        </a>
      </nav>
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
          className="text-clay border-white-seashell rounded-lg dark:text-white border h-full py-2 px-5 bg-transparent cursor-pointer hover:bg-clay hover:dark:bg-white-seashell hover:text-white-seashell hover:dark:text-clay duration-300"
          href={Resume}
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default inject('mobXStore')(observer(Navbar))
