import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
    // Setting state for click 
    const [click, setClick]= useState(false);
    // Handle Click to reverse state
    const handleClick= ()=> setClick(!click);
   
  return( 
  <>
  <nav className="navbar">
      <div className="navbarContainer">
          {/* LogoRef */}
          <Link to='/' className='navbarLogo'>
          <img
                  src={"images/moon.png"}
                 alt="moon icon"
                  />Home
          </Link>
          {/* Hamburger Menu */} 
          <div className="menuIcon" onClick={handleClick}>
              {/* Creating State to toggle X to hamburger menu */}
              <icon className={click ? 'fas fa-times': 'fas fa-bars'}/>
          </div>
      </div>
  </nav>
  </>)
}

export default Navbar;

