import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
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
          <div className="menuIcon">
              <icon className=""/>
          </div>
      </div>
  </nav>
  </>)
}

export default Navbar;

