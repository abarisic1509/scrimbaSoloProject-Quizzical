import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'
import './App.scss'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import Header from './components/Header'

function App() {

  const [isLoading, setIsLoading] = React.useState(false)
  const [isGameStarted, setIsGameStarted] = React.useState(false)
  const [gameCount, setGameCount] = React.useState(0)
  const [isLocked, setIsLocked] = React.useState(false)
  const [questionData, setQuestionData] = React.useState([])
  const [score, setScore] = React.useState(0)
  const [formData, setFormData] = React.useState({})

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://opentdb.com/api.php?amount=${formData.questionNumber}&difficulty=${formData.questionDifficulty}`)
      .then(res => res.json())
      .then(data => {
        let qData = data.results
        let customQData = qData.map(result => (
          {
            id: nanoid(),
            question: decode(result.question),
            answers: compileAnswers(result)
          }
        ))
        setQuestionData(customQData)
          setIsLoading(false)
      })
    
  }, [gameCount])

  function compileAnswers(resultsData) {
    let allAnswers = []
    resultsData.incorrect_answers.map(item => {
      allAnswers.splice(Math.floor(Math.random() * allAnswers.length), 0, {id: nanoid(),value: decode(item), isChosen: false, isCorrect: false})
    })
    allAnswers.splice(Math.floor(Math.random() * allAnswers.length), 0, {id: nanoid(),value: decode(resultsData.correct_answer), isChosen: false, isCorrect: true})
    return allAnswers
  }

  function handleFormChange(e) {
    e.preventDefault()
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value} 
      ))
  }
  console.log(formData)

  function startGame(e) {
    e.preventDefault()
    setIsGameStarted(prev => !prev)
    setGameCount(prevCount=>prevCount+1)
  }

  function updateQuestion(question){
    setQuestionData(prevData=>(
      prevData.map(item=> question.id === item.id ? question : item )
    ))
  }

  useEffect(()=>{
    let totalScore = 0
    for (let i=0; i < questionData.length; i++){
      let answerSet = questionData[i].answers
      //is any answer both correct and selected
      let thisScore = answerSet.some((answer)=>answer.isCorrect && answer.isChosen) ? 1 : 0
      totalScore = totalScore + thisScore
    }
    setScore(totalScore)
  },[questionData])

  function checkAnswers(){
    setIsLocked(true)
  }

  function newGame(){
    setScore(0)
    setGameCount(prevCount=>prevCount+1)
    setIsLocked(false)
    setIsGameStarted(false)
  }
  
  return (
    <div className="App">
      <Header />
      {isGameStarted 
        ? 
        <GameScreen 
          questions={questionData} 
          updateQuestion={updateQuestion} 
          isLocked={isLocked}
          gameCount={gameCount}
          checkAnswers={checkAnswers} 
          newGame={newGame} 
          total={formData.questionNumber}
          score={score}
          isLoading={isLoading}
          /> 
        : 
        <StartScreen startGame={startGame} handleFormChange={handleFormChange} questionsNumber={formData.questionNumber} questionsDifficulty={formData.questionDifficulty}/>}      
    </div>
  )
}

export default App
