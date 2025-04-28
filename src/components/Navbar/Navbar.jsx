import React, { useState } from 'react'
import navLogo from '../../assets/navLogo.png'
import { menuItems } from './menuItems';
import { Link, NavLink } from 'react-router';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
  const [menuOpen, setMenuOpen]= useState(false);
  return (
    <div>
      <nav className='bg-main  w-full'>
        <div className='NavContainer h-[120px] wrapper px-4 sm:px-6 flex justify-between items-center'>
            {/* nav logo  */}
            <Link to={'/'}>
            <div className='flex items-center gap-x-2'>
              <img src={navLogo} alt='navlogo'  />
              <h1 className='hidden md:block text-5xl font-extrabold text-white'>ArchiAxis</h1>
            </div>
            </Link>
            {/* menu items  */}
            <div className='hidden md:flex'>
             <div className='flex items-center gap-x-2'>
             {
                menuItems.map((link)=>(
                  <ul key={link.id}>
                    <li className='uppercase py-5 px-7 text-lg rounded-[100px] text-white hover:bg-white hover:text-main transition-all duration-500'> <NavLink to={link.path} >{link.name}</NavLink> </li>
                  </ul>
                ))
              }
             </div>
             <Link to={'/contact'}><button className='ml-4 uppercase py-5 px-7 bg-white rounded-[100px] cursor-pointer text-[#3F6836] font-Inter text-lg hover:text-main transition-all duration-300'>Contact Us</button></Link>
            </div>

            {/* mobile humbergar  */}
            <div className='md:hidden text-lg text-white cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}>
                {
                  menuOpen ? <IoMdClose size={28}/> : <FiMenu size={28}/>
                }
            </div>
        </div>
        {/* mobile menu dropdown */}
        {menuOpen && (
          <div className='md:hidden absolute top-[120px] left-0 min-h-screen w-full bg-main flex flex-col items-center gap-4 py-6 z-50 transition-all duration-300'>
            {
              menuItems.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className='uppercase text-lg text-white rounded-[100px] hover:bg-white hover:text-main py-5 px-7 transition-all duration-300'
                >
                  {link.name}
                </NavLink>
              ))
            }
            <Link to={'/contact'} onClick={() => setMenuOpen(false)}>
              <button className='uppercase mt-4 py-5 px-7 bg-white rounded-[100px] cursor-pointer text-[#3F6836] font-Inter text-lg hover:text-main transition-all duration-300'>
                Contact Us
              </button>
            </Link>
          </div>
        )}

      </nav>
    </div>
  )
}

export default Navbar
