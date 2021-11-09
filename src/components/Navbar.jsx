import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
    // Setting state for click 
    const [click, setClick]= useState(false);
    // Handle Click to reverse state
    const handleClick= ()=> setClick(!click);
   //Creating Func to close hamburger 
   const closeMenu= ()=> setClick(false);
  return( 
  <>
  <nav className="navbar">
      <div className="navbarContainer">
          {/* LogoRef */}
          <Link to='/' className='navbarLogo'>
          <img
                  src={"images/moon.png"}
                 alt="moon icon"
                  />Navbar
          </Link>
          {/* Hamburger Menu */} 
          <div className="menuIcon" onClick={handleClick}>
              {/* Creating State to toggle X to hamburger menu */}
              <icon className={click ? 'fas fa-times': 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'navbarMenu active' : 'navMenu'}>
              <li className='navbaritems'>
                  <Link to='/' className='navbarLinks' onClick={closeMenu}>
                      About Me
                  </Link>
              </li>
              <li className='navbaritems'>
                  <Link to='/' className='navbarLinks' onClick={closeMenu}>
                      Projects
                  </Link>
              </li>
              <li className='navbaritems'>
                  <Link to='/' className='navbarLinks' onClick={closeMenu}>
                     Contact Me
                  </Link>
              </li>
              <li className='navbaritems'>
                  <Link to='/' className='navbarLinks' onClick={closeMenu}>
                     Resume
                  </Link>
              </li>
          </ul>
      </div>
  </nav>
  </>)
}

export default Navbar;

