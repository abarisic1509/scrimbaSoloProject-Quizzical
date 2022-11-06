import React from 'react'
import Loader from './Loader'
import SingleQuestion from './SingleQuestion'
import SubmitSection from './SubmitSection'

function GameScreen({questions, updateQuestion, isLocked, gameCount, checkAnswers, newGame, total, score, isLoading}) {

    

    return (
        <main className="game-screen">
            {isLoading ? <Loader /> : <>{questions.map((q) => <SingleQuestion key={q.id} question={q} updateQuestion={updateQuestion} isLocked={isLocked} />)}
            
            <SubmitSection isLocked={isLocked} gameCount={gameCount} checkAnswers={checkAnswers} newGame={newGame} total={total} score={score}/></>}
            {/* {questions.map((q) => <SingleQuestion key={q.id} question={q} updateQuestion={updateQuestion} isLocked={isLocked} />)}
            
            <SubmitSection isLocked={isLocked} gameCount={gameCount} checkAnswers={checkAnswers} newGame={newGame} total={total} score={score}/> */}
        </main>
    )
}

export default GameScreen