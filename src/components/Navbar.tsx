import './Navbar.css'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { ChangeEvent, useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineWbSunny, MdClose } from 'react-icons/md'
import { inject, observer } from 'mobx-react'
import { mobXStore } from '../stores/MobXstore'
import React from 'react'

const Navbar = () => {
  const store = mobXStore
  const [showBackground, setBackground] = useState<boolean>(false)
  const [showNavbarInMobile, setNavbarInMobile] = useState<boolean>(false)
  const box = React.createRef<any>()

  const changeThemeHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    store.setDarkMode(!store.isDarkMode)
  }

  const changeBackgroundColor = () => {
    setBackground(window.scrollY >= 80)
  }

  const openNavbar = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setNavbarInMobile(true)
  }

  const closeNavbar = (event?: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault()
    console.log(1)
    setNavbarInMobile(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor)
  })

  return (
    <div
      className={
        `Navbar px-10 py-6 w-full fixed duration-300` +
        (showBackground || showNavbarInMobile
          ? ' dark:bg-gray-shark bg-white shadow-md'
          : '') +
        (showNavbarInMobile ? ' h-full' : ' flex justify-between')
      }
    >
      <div
        className={
          'title lg:w-1/6' +
          (showNavbarInMobile
            ? ' w-full flex justify-between items-center'
            : ' w-2/6 grid place-content-start lg:place-content-center')
        }
      >
        <div className="text-xl text-center text-blue-light dark:text-blue-dark">
          Tawan B.
        </div>
        <div
          className={'cursor-pointer' + (showNavbarInMobile ? '' : ' hidden')}
          onClick={closeNavbar}
        >
          <MdClose className="w-6 h-6 text-white-seashell" />
        </div>
      </div>
      <div
        className={
          'text-center lg:flex lg:items-center lg:justify-between px-10' +
          (showNavbarInMobile
            ? ' w-full mt-8 space-y-8 text-2xl'
            : ' hidden w-3/6')
        }
      >
        <h2>
          <a
            href="#about-me"
            className="text-clay dark:text-white-seashell hover:text-slate-500 font-medium"
            ref={box}
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
        <h2 className="">
          <a href="" className="text-clay dark:text-white hover:text-slate-500">
            ···
          </a>
        </h2>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center w-1/6">
        <div
          className="text-clay hover:bg-gray-400 rounded-full cursor-pointer duration-300 p-2 mr-2"
          onClick={changeThemeHandler}
        >
          {store.isDarkMode ? (
            <MdOutlineDarkMode className="text-white text-2xl" />
          ) : (
            <MdOutlineWbSunny className="text-clay text-2xl" />
          )}
        </div>
        <button className="text-clay border-white-seashell rounded-lg dark:text-white border h-full py-2 px-5 bg-transparent">
          Resume
        </button>
      </div>
      <div
        className={
          'place-content-center lg:hidden' +
          (showNavbarInMobile ? ' hidden' : ' grid')
        }
        onClick={openNavbar}
      >
        <HiBars3BottomRight className="w-6 h-6 cursor-pointer text-clay dark:text-white-seashell" />
      </div>
    </div>
  )
}

export default inject('mobXStore')(observer(Navbar))
