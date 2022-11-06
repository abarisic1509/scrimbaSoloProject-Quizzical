import React from "react";

function Header({userScore}) {
    return(
        <header className="main-header">
            <h1>Quizzical</h1>
            <p>Check your knowledge of common topics</p>
            <h4>Your score: {userScore}</h4>
        </header>
    )
}

export default Header