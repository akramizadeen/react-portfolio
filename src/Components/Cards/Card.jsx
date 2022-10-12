import React from 'react'
import './Card.css'

function Card({emoji, heading, text}) {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{text}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card