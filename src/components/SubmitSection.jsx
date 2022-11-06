import React from "react";

function SubmitSection({isLocked, checkAnswers, newGame, total, score}) {
    const submitEls = getSubmitHtml()
    function getSubmitHtml() {
        if(isLocked) {
            return (
                <div className="submit-section">
                    <p className="score">You scored {score}/{total} correct answers</p>
                    <button className="btn btn-small" onClick={newGame}>New Game</button>
                </div>
            )
        } else {
                return(
                    <button className="btn btn-small" onClick={checkAnswers}>Check Answers</button>
                )
            }
    }
    return(
        <div className="submit-section">
            {submitEls}
        </div>
    )
}

export default SubmitSection