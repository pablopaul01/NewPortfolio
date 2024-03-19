import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='py-4 mx-auto'>
        <ul className='hidden md:flex w-full bg-gray-400/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto justify-between items-center px-5 text-gray-400'>
            <li className='p-2'>
                <NavLink to={"/hero"} activeClassName="selected">Home</NavLink>
            </li>
            <li className='p-2'>
                <NavLink to={"/about"} activeClassName="selected">About</NavLink>
            </li>
            <li className='p-2'>
                <NavLink to={"/portfolio"} activeClassName="selected">Portfolio</NavLink>
            </li>
            <li className='p-2'>
                <NavLink to={"/contact"} activeClassName="selected">Contact</NavLink>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden text-white absolute right-10 top-10 z-20'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        
        <div className={nav ? 'text-gray-300 fixed left-0 top-0 w-full bg-[#202121] ease-in-out duration-500': 'fixed left-[-100%]'}>
            <ul className='p-8 text-4xl ml-20 z-10'>
                <li className='p-2'>
                    <NavLink to={"/hero"} activeClassName="selected">Home</NavLink>
                </li>
                <li className='p-2'>
                    <NavLink to={"/about"} activeClassName="selected">About</NavLink>
                </li>
                <li className='p-2'>
                    <NavLink to={"/portfolio"} activeClassName="selected">Portfolio</NavLink>
                </li>
                <li className='p-2'>
                    <NavLink to={"/contact"} activeClassName="selected">Contact</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar