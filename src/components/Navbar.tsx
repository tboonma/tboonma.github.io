import './Navbar.css'
import { HiBars3BottomRight } from 'react-icons/hi2'

const Navbar = () => {
  return (
    <div className="Navbar px-10 py-8 flex justify-between w-full fixed">
      <h1 className="text-xl title text-center">Tawan B.</h1>
      <div className="text-center text-xl hidden md:flex space-x-14 text-custom-blue">
        <h2 className="">About me</h2>
        <h2 className="">Skills</h2>
        <h2 className="">Portfolio</h2>
        <h2 className="">Contact</h2>
      </div>
      <HiBars3BottomRight className="w-6 h-6 block md:hidden text-custom-blue cursor-pointer" />
    </div>
  )
}

export default Navbar
