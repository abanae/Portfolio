import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from './Button';

function Navbar() {
    // Setting state for click 
    const [click, setClick]= useState(false);
     // Setting state for Button 
    const [button, setBtn] = useState(true);
    // Handle Click to reverse state
    const handleClick= ()=> setClick(!click);
   //Creating Func to close hamburger 
   const closeMenu= ()=> setClick(false);
// Removes Button on screem higher or equal 960
   const showBtn= ()=>{
       if(window.innerWidth <= 960){
       setBtn(false);
   }else {
       setBtn(true);
   }
};
 //Display the Button on mobile devices
window.addEventListener('resize', showBtn);
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
                  <Link to='/projects' className='navbarLinks' onClick={closeMenu}>
                      Projects
                  </Link>
              </li>
              <li className='navbaritems'>
                  <Link to='/resume' className='navbarLinks' onClick={closeMenu}>
                     Resume
                  </Link>
              </li>
              <li className='navbaritems'>
                  <Link to='/contact' className='navbarLinksContact' onClick={closeMenu}>
                     Contact Me
                  </Link>
              </li>
          </ul>
          {button && <Button btnStyle='btn--outline'>
              SIGN UP
              </Button>}
      </div>
  </nav>
  </>)
}

export default Navbar;

