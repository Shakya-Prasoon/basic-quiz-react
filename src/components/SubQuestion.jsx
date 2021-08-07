import React from 'react'

function SubQuestion({questions, qNum}) {
  return (
    <h2 className="subQuestion">{ questions[qNum].subQuestion }</h2>
  )
}

export default SubQuestion
