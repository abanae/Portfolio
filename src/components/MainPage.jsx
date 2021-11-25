import React from 'react'
// import {Button} from './Button'
import './MainPage.css';
import '../App.css';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className="mainContainer">
        {/* Video Setting */}
            <video src='/video/camping.mp4' autoPlay loop muted/>
            <h1>Hello World!</h1>
            {/* <p>I'm a full-stack web developer,  focused on crafting clean & user‑friendly experiences.</p> */}
            <div className="mainBtn">
                <Link to='/projects'>
                <button className="btns">Check My Projects</button>
                </Link>
            </div>
        </div>
    )
}

export default MainPage;
