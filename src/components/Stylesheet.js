import React from 'react'
import './myStyles.css'

function Stylesheet({primary}) {
    let className = primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
