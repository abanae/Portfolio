import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  // Setting state for click
  const [click, setClick] = useState(false);
  // Setting state for Button
  const [button, setBtn] = useState(true);
  // Handle Click to reverse state
  const handleClick = () => setClick(!click);
  //Creating Func to close hamburger
  const closeMenu = () => setClick(false);
  // Removes Button on screem higher or equal 960
  const showBtn = () => {
    if (window.innerWidth <= 960) {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };
// Button to allow button to show up when refresh
  useEffect(() => {
    showBtn();
  }, []);

  //Display the Button on mobile devices
  window.addEventListener("resize", showBtn);
  return (
    <>
      <nav className="navbar">
        <div className="navContainer">
          {/* LogoRef */}
          <Link to="/" onClick={closeMenu}>
            <img src={"images/moon.png"} alt="moon icon" />
            <p style={{ color: "white", underline: "none", marginLeft: '6vw', marginTop: '-2vw'}}>Home</p>
          </Link>
          {/* Hamburger Menu */}
          <div className="menuIcon" onClick={handleClick}>
            {/* Creating State to toggle X to hamburger menu */}
            <icon className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navMenu active" : "navMenu"}>
            <li className="navItems">
              <Link to="/" className="navLinks" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li className="navItems">
              <Link to="/projects" className="navLinks" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="navItems">
              <Link to="/resume" className="navLinks" onClick={closeMenu}>
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="navLinksContact"
                onClick={closeMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button btnStyle="btn--outline">Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
