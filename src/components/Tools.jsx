import React from "react";
import "./Tools.css";

function Tools() {
  return (
    <div className="toolCont">
      <div class="toolTitle">
      <h3>Skills & Experience</h3>
      </div>
      <div class="tools">
      <figure class="chart" data-percent="75">
        <figcaption>fig1</figcaption>
        <img
          class="html"
          src='images/HTML5.png'
          alt="html SVG"
        ></img>
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
      <figure class="chart" data-percent="75">
        <figcaption>fig2</figcaption>
        <img
          class="css"
          src='images/CSS.PNG'
          alt="CSS SVG"
        ></img>
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
      <figure class="chart" data-percent="50">
        <figcaption>fig3</figcaption>
        <img
          class="javascript"
          src='images/JS-Png.png'
          alt="JS SVG"
        ></img>
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
      <figure class="chart" data-percent="35">
        <figcaption>fig4</figcaption>
        <img
          class="node"
          src='images/node.png'
          alt="NODE SVG"
        ></img>
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
      <figure class="chart" data-percent="35">
        <figcaption>fig5</figcaption>
        <img
          class="react"
          src='images/reactIcon.svg'
          alt="React SVG"
        ></img>
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
      </div>
    </div>
  );
}

export default Tools;
