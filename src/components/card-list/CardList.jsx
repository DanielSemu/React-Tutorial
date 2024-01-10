
import Card from '../card/Card'
import './card-list.css'

import React from 'react'

const CardList = (props) => {
  return (
    <div className="card-list">
      
      {
            props.monesters.map(monester =>(
             <Card key={monester.id} monester={monester}/>)) 
       }
    </div>
  )
}

export default CardList
