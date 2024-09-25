import React from 'react'
// import Button from './Lang_Button'
import './css/card.css'
const Card = (props) => {
  return (
    <div className="card" id={props.key}>
    <img src={props.image} alt="..." className="card-image" />
    <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <details>
        <summary>{props.summary}</summary>  
        <p className="card-description">{props.description}</p>
        </details>
        <button className="card-button">{props.pull_count}</button>
    </div>
</div>
  )
}

export default Card