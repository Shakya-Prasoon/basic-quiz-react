import React, { useState } from 'react'
import './App.css';
import data from './api/multipleChoice.json'
import Question from './components/Question';
import SubQuestion from './components/SubQuestion';



function App() {
  // makes a deep copy of options object from data Array
  const questions = [...data.options]
  // holds the answer of all the question in an array
  const answer = questions.map((i) => {
    return i.correctAnswerID
  })
  // initialized an empty array to hold the answerId that the user chooses
  const [score, setScore] = useState([])
  // initialized qNum with 0 which holds the question number to be used for some particular purpose
  const [qNum, setQNum] = useState(0)

  // Updates the score array with the id of the answer selected by the user
  function handelAnswerClick(id){
    let copyScore = [...score]
    copyScore[qNum] = Number(id)
    setScore([...copyScore])
  }

  // Returns a basic button with an onClick function which would update the score Array with chosen answer
  function Button({questions, qNum}){
    const btn = questions[qNum].answers.map((i, index) => (
      <button onClick={() => handelAnswerClick(i.id)} key={index}>{i.answer}</button>
    ))
    return btn
  }

  // Computes the final score and returns the value
  function Score(){
    // Initializes the finalScore with 0
    let finalScore = 0
    for(let i= 0; i < answer.length;i++){
      // Increment the value of finalScore by 1 if the answerId matches
      if(answer[i] === score[i]){
        finalScore++
      }
    }
    return finalScore
  }


  return (
    <div className="App">
      <br />{qNum < questions.length 
      ? <>
        <Question questions={questions} qNum={qNum} />
        <SubQuestion questions={questions} qNum={qNum} />
        <Button questions={questions} qNum={qNum} />
        <br />
        <button className="next-prev" onClick={() => setQNum(qNum + 1) }>Next</button> 
        <button className="next-prev" disabled={qNum === 0? true : false} onClick={() => setQNum(qNum - 1)}>Go Back</button>   
        </>
      : 
        <h1 className="finalScore">Score: <Score /></h1>
      }   
    </div>
  );
}

export default App;
