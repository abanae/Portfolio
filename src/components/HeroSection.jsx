import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
     <div 
      class="column">
        </div>
      <div class="heroSection">
        <div class="column1">
          <h2
          style={{color: "#a0bbbe", fontSize:"1.5rem", marginTop:"4rem"}}
          >Hi! I'm Ana Abad.</h2>
          <p 
          style={{color: 'white',  fontFamily: "Impact, fantasy"}}
          >FULL STACK WEB DEVELOPER IN DENVER.</p>
        </div>
        <div class="column2">
        <img className="headShot" src="/images/image2.jpeg" alt="head-shot"></img>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
