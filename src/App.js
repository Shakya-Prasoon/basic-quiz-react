import React, { useState } from 'react'
import './App.css';
import data from './api/multipleChoice.json'
import Question from './components/Question';
import SubQuestion from './components/SubQuestion';

function App() {
  const questions = [...data.options ]
  const [score, setScore] = useState(0)
  const [qNum, setQNum] = useState(0)


  function handelClick(i){
    console.log(i)
    console.log(questions[qNum].correctAnswerID)
    if(Number(i) === Number(questions[qNum].correctAnswerID)){
      setScore(score + 1)
    }
    setQNum(qNum < questions.length ? qNum + 1 : qNum)
  }

  function Button({questions, qNum}){

    const btn = questions[qNum].answers.map((i, index) => (

      <button onClick={() => handelClick(i.id)} key={index}>{i.answer}</button>
    ))
    return btn
  }


  return (
    <div className="App">
      <br />{qNum < questions.length 
      ? <>
        <h1>Current Score: {score}</h1>
        <Question questions={questions} qNum={qNum} />
        <SubQuestion questions={questions} qNum={qNum} />
        <Button questions={questions} qNum={qNum} />
        </>
      : <>
        <h1 className="finalScore">Final Score: {score}</h1>
      </>
      }     
    </div>
  );
}

export default App;
