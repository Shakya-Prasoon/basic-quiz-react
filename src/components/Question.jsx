import React from 'react'

function Question({questions, qNum}) {
  return (<h1 className="question">{ questions[qNum].question }</h1>
  )
}

export default Question
