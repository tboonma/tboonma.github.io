import './App.css'
import Navbar from './components/Navbar'
import background from './assets/img/bg.jpg'
import Home from './pages/Home'

function App() {
  return (
    <div
      className="App min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <Home />
    </div>
  )
}

export default App
