import './App.css'
import Navbar from './components/Navbar'
import background from './assets/img/bg.jpg'
import Home from './pages/Home'
import { mobXStore } from './stores/MobXstore'
import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'

const App = () => {
  const { isDarkMode, setDarkMode } = mobXStore!

  useEffect(() => {
    const systemDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(systemDarkScheme.matches)
    systemDarkScheme.addEventListener('change', (event) => {
      const colorScheme = event.matches
      setDarkMode(colorScheme)
    })
  }, [])
  return (
    <div
      className={
        `App min-h-screen duration-700` +
        (isDarkMode ? ' dark bg-gray-woodsmoke' : ' bg-white')
      }
    >
      <Navbar />
      <Home />
    </div>
  )
}

export default inject('mobXStore')(observer(App))
