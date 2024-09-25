import React from 'react'
import Button from './Lang_Button'
import './css/card.css'
const Card = (props) => {
  return (
    <div className='card' >
        <img className='pic'src={props.image} alt={props.imgd} />
        <h1>{props.title}</h1>
        <details>
            <summary>{props.summary}</summary>
            <p>{props.details}</p>
        </details>
        <Button/>
        <p>{props.pull_count}</p>
        <button>Register</button>
    </div>
  )
}

export default Card