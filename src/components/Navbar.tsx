import React from 'react'
import { LuMenuSquare } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu=() => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>
                Bilawal Akber
            </div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#Hero'>Home</a></li>
                <li className='menuLink'><a href='#About'>About</a></li>
                <li className='menuLink'><a href='#Projects'>Projects</a></li>
                <li className='menuLink'><a href='#Skills'>Skills</a></li>
                <li className='menuLink'><a href='#Contact'>Contact</a></li>
            </ul>
            <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose  size={30} /> :
        <LuMenuSquare size={30}/>
        }
        </div>
        </div>
      {isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li className='menuLink'><a href="#Hero" onClick={toggleMenu}>Home</a></li>
            <li className='menuLink'><a href="#About" onClick={toggleMenu}>About</a></li>
            <li className='menuLink'><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
            <li className='menuLink'><a href="#SKills" onClick={toggleMenu}>Skills</a></li>
            <li className='menuLink'><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        )
        }
    </div>
  )
}

export default Navbar
