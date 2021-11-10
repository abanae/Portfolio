import React from 'react'
import {Button} from './Button'
import './MainPage.css';

function MainPage() {
    return (
        <div className="mainContainer">
        {/* Video Setting */}
            <video src='/video/camping.mp4' autoPlay loop muted/>
            <h1>Me!!</h1>
            <p>What I Do</p>
            <div className="mainBtn">
                <Button className="btns" btnStyle='btn--outline'btnSize='btn--large'>
                    Check Me Out
                </Button>
            </div>
        </div>
    )
}

export default MainPage
