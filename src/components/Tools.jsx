import React from 'react'

function Tools() {
    return (
        <section class="container">
  
  <h3>I'm a web developer and here's what I can do</h3>
  <figure class="chart" data-percent="75">
    <figcaption>HTML</figcaption>
     <img class="html" src="https://dl.dropboxusercontent.com/s/68gv23q4y5qyq52/html5.svg"></img>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  

  <figure class="chart" data-percent="75">
    <figcaption>CSS</figcaption>
    <img class="css" src="https://dl.dropboxusercontent.com/s/gftbpqje9h2jvlv/css3.svg"></img>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  
  

  <figure class="chart" data-percent="50">
    <figcaption>Javascript</figcaption>
    <img class="javascript" src="https://dl.dropboxusercontent.com/s/jsp3rsberc4q650/javascript.svg"></img>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
 
  <figure class="chart" data-percent="25">
    <figcaption>Node</figcaption>
    <img class="node" src="https://dl.dropboxusercontent.com/s/v28zws1p38tjph2/node.png"></img>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
</section>
    )
}

export default Tools
