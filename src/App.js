import React, { useState } from 'react'
import data from './api/multipleChoice.json'
import './App.css';

function App() {
  const questions = [...data.options ]
  const [score, setScore] = useState(0)
  const [qNum, setQNum] = useState(0)


  function DisplayQuestion({questions, qNum}){
    return(<h1 className="question">{ questions[qNum].question }</h1>)
  }

  function handelClick(i){
    console.log(i)
    console.log(questions[qNum].correctAnswerID)
    if(i == questions[qNum].correctAnswerID){
      setScore(score + 1)
    }
    setQNum(qNum < questions.length-1 ? qNum + 1 : qNum)
  }


  function DisplaySubQuestion({questions, qNum}){
    return(<h2 className="subQuestion">{ questions[qNum].subQuestion }</h2>)
  }


  function DisplayButton({questions, qNum}){

    const btn = questions[qNum].answers.map((i, index) => (

      <button onClick={() => handelClick(i.id)} key={index}>{i.answer}</button>
    ))
    return btn
  }


  return (
    <div className="App">
      <br />{qNum < questions.length-1 
      ? <>
        <h1>Score: {score}</h1>
        <DisplayQuestion questions={questions} qNum={qNum} />
        <DisplaySubQuestion questions={questions} qNum={qNum} />
        <DisplayButton questions={questions} qNum={qNum} />
        </>
      : <>
        <h1 className="finalScore">Score: {score}</h1>
      </>
      }     
    </div>
  );
}

export default App;
