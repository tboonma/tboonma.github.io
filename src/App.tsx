import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { mobXStore } from './stores/MobXStore'
import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'
import Footer from './components/Footer'

const App = () => {
  const { isDarkMode } = mobXStore

  return (
    <div
      className={
        `App min-h-screen duration-700` +
        (isDarkMode ? ' dark bg-gray-woodsmoke' : ' bg-white')
      }
    >
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default inject('mobXStore')(observer(App))
