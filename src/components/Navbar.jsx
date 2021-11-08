import React, { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return( 
  <>
  <nav className="navbar">
      <div className="navbarContainer">
          <Link to='/' className='navbarLogo'>
              Logo Here
          </Link>
      </div>
  </nav>
  </>)
}

export default Navbar;
