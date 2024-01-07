import React from 'react'
import "./index.scss"
const PrimaryBtn = ({text, bgColor}) => {
  return (
    <button className={bgColor}>{text}</button>
  )
}

export default PrimaryBtn