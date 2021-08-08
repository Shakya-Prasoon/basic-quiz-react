import React, { useState } from 'react'
import './App.css';
import data from './api/multipleChoice.json'
import Question from './components/Question';
import SubQuestion from './components/SubQuestion';



function App() {
  const questions = [...data.options ]
  const answer = questions.map((i) => {
    return i.correctAnswerID
  })
  const [score, setScore] = useState([])
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
    let finalScore = 0
    console.log(answer)
    console.log(score)

    for(let i= 0; i < answer.length;i++){
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
