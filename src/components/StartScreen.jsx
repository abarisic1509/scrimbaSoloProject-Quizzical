import React from 'react'

function StartScreen({startGame, handleFormChange, questionsNumber, questionsDifficulty}) {
    return(
        <main className="form-wrapper">
            <form id="startGameForm">
                <fieldset>
                    <label htmlFor="questionNumber">Select number of questions</label>
                    <select name="questionNumber" id="questionNumber" onChange={handleFormChange} value={questionsNumber}>
                        <option value="">Choose...</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="questionDifficulty">Select difficulty</label>
                    <select name="questionDifficulty" id="questionDifficulty" onChange={handleFormChange} value={questionsDifficulty}>
                        <option value="">Choose...</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </fieldset>
            </form>
            <button className="btn btn-big" type="button" onClick={startGame}>Start quiz</button>
        </main>
    )
}

export default StartScreen