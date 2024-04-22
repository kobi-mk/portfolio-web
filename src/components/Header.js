/*import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-secondary ">
        <a href="#" className="font-bold text-white text-2xl font-header-font">VMKovarthan</a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li> 
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li> 
            </ul>
        </nav>}
        <button className='block md:hidden'
        onClick={() => setToggleMenu(!toggleMenu)}>
            <Bars3Icon className='text-white h-5' />
        </button>
    </header>
}*/

import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="container mx-auto px-5 py-2 flex justify-between items-center bg-secondary">
      <a href="#" className="font-bold text-white text-2xl font-header-font">VMKovarthan</a>

      <nav className="hidden md:flex items-center">
        <ul className="flex space-x-4 text-white">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <Bars3Icon className="text-white h-5" />
      </button>

      <nav className={`flex flex-col space-y-2 text-white absolute top-full left-0 w-full md:hidden ${toggleMenu ? 'block' : 'hidden'}`}>
        <ul className="bg-secondary p-4">
          <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
          <li><a href="#resume" onClick={() => setToggleMenu(false)}>Resume</a></li>
          <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
