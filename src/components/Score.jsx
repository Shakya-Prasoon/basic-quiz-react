import React from 'react'

function Score({ answer, score }){
  // Initializes the finalScore with 0
  let finalScore = 0
  for(let i= 0; i < answer.length;i++){
    // Increment the value of finalScore by 1 if the answerId matches
    if(answer[i] === score[i]){
      finalScore++
    }
  }
  return <h1 className="finalScore">Score: {finalScore}</h1>
}
export default Score