import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">Ana Abad © 2021</small>
          <div class="social-icons">
            <a
              class="social-icon-link email"
              href="mailto:aabad0464@gmail.com"
            >
              <i class="fas fa-envelope" />
            </a>
            <a
              className="social-icon-link github"
              href="https://github.com/abanae"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/anaeabad/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
