
import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monester.id}?set=set2&size=180x180`} alt="" />
      <h1>{props.monester.name}</h1>
      <p>{props.monester.email}</p>
    </div>
  )
}

export default Card
