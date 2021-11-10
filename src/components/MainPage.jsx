import React from 'react'


function MainPage() {
    return (
        <div className="mainContainer">
        {/* Video Setting */}
            <video src='/video/camping.mp4' autoPlay loop muted/>
            <h1>Me!!</h1>
            <p>What I Do</p>
            <div className="mainBtn">
            </div>
        </div>
    )
}

export default MainPage
