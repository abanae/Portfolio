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
          <div class="social-media-wrap">
          <div class="social-icons">
            <a
              className="social-icon-link github"
              href="https://github.com/abanae"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"/>
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/anaeabad/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"/>
            </a>
            <a
              class="social-icon-link resume"
              href="/resume/AnaAbad.pdf"
              target="_blank"
            >
              <i class="far fa-file" />
            </a>
          </div>
        </div>
        </div>
        <div class="column2">
        <img className="headShot" src="/images/image2.jpeg" alt="head-shot"></img>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
