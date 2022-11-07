import React from "react";

function SingleQuestion({question, updateQuestion, isLocked}) {
    function handleClick(id){
        updateQuestion(
            {
                ...question,
                answers: question.answers.map(item=>(
                    {
                        ...item,
                        isChosen: item.id===id ? true : false
                    }
                ))
            }
        )
    }

    function getAnswerStyle(answer){
        let classList = "answer-btn"
        if (isLocked) {
            if (answer.isChosen) {
                classList = answer.isCorrect ? "answer-btn correct disabled" : "answer-btn incorrect disabled"
            } else {
                classList = answer.isCorrect ? "answer-btn correct disabled" : "answer-btn disabled"
            }
        } else {
            classList = answer.isChosen ? "answer-btn selected" : "answer-btn"
        }
        return classList
    }

    return(
        <div className='question-container'>
            <h2>{question.question}</h2>
            
                <div className='btn-wrapper'>{
                    question.answers.map(answer=> (
                        <button 
                            key={answer.id} 
                            className={getAnswerStyle(answer)} 
                            id={answer.id} 
                            onClick={()=>handleClick(answer.id)}
                            >
                            {answer.value}
                        </button>
                    ))
                }</div>
            
        </div>
    )
}

export default SingleQuestion