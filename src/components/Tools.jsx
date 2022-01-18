import React from "react";
import "./Tools.css";

function Tools() {
  return (
    <div className="toolCont">
      <div class="toolInfo">
        <h1>S</h1>
        <h1>k</h1>
        <h1>i</h1>
        <h1>l</h1>
        <h1>l</h1>
        <h1>s</h1>
        <br />
        <h1>E</h1>
        <h1>x</h1>
        <h1>p</h1>
        <h1>e</h1>
        <h1>r</h1>
        <h1>i</h1>
        <h1>e</h1>
        <h1>n</h1>
        <h1>c</h1>
        <h1>e</h1>
        <br />
        <span>
          Full-stack web developer with a background in Sales dedicated to
          building and optimizing the customer experience.Leverage technical,
          analytical, and problem-solving skills to create dynamic, high-speed
          websites, applications, and software platforms fueling competitive
          advantage and revenue growth.
        </span>
        <span>
          TECHNICAL PROGRAMING SKILLS: JavaScript ES6+, HTML5, CSS3, RESTful
          Design, React, Node.js, Express.js, jQuery, Handlebars, Bootstrap,
          Bulma, Material UI, MongoDB/Mongoose, MySQL/Sequelize, Heroku, Git.
        </span>
      </div>
      <div class="tools">
        <h1 style= {{color:"gray", fontSize: "xxx-large", paddingBottom:"2vw"}}>Tools</h1>
        <figure class="chart" data-percent="75">
          <figcaption>fig1</figcaption>
          <img class="html" src="images/HTML5.png" alt="html SVG"></img>
          <svg width="190" height="200">
            <circle
              class="outer"
              cx="95"
              cy="95"
              r="85"
              transform="rotate(-90, 95, 95)"
            />
          </svg>
        </figure>
        <div class="hide">HTML</div>
        <figure class="chart" data-percent="75">
          <figcaption>fig2</figcaption>
          <img class="css" src="images/CSS.PNG" alt="CSS SVG"></img>
          <svg width="190" height="200">
            <circle
              class="outer"
              cx="95"
              cy="95"
              r="85"
              transform="rotate(-90, 95, 95)"
            />
          </svg>
        </figure>
        <div class="hide">CSS</div>
        <figure class="chart" data-percent="50">
          <figcaption>fig3</figcaption>
          <img class="javascript" src="images/JS-Png.png" alt="JS SVG"></img>
          <svg width="190" height="200">
            <circle
              class="outer"
              cx="95"
              cy="95"
              r="85"
              transform="rotate(-90, 95, 95)"
            />
          </svg>
        </figure>
        <div class="hide">JavaScript</div>
        <figure class="chart" data-percent="35">
          <figcaption>fig4</figcaption>
          <img class="node" src="images/node.png" alt="NODE SVG"></img>
          <svg width="190" height="200">
            <circle
              class="outer"
              cx="95"
              cy="95"
              r="85"
              transform="rotate(-90, 95, 95)"
            />
          </svg>
        </figure>
        <div class="hide">Node</div>
        <figure class="chart" data-percent="35">
          <figcaption>fig5</figcaption>
          <img class="react" src="images/reactIcon.svg" alt="React SVG"></img>
          <svg width="190" height="200">
            <circle
              class="outer"
              cx="95"
              cy="95"
              r="85"
              transform="rotate(-90, 95, 95)"
            />
          </svg>
        </figure>
        <div class="hide">React</div>
      </div>
    </div>
  );
}

export default Tools;
