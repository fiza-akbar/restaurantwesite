import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='first'><img src={props.image} alt="no image" /></div>
      <div className='last'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className="info">
            <div>Price : {props.price}</div>
            <div><button>Order Now</button></div>
        </div>
        <p>*Prices may vary on selected date.</p>
      </div>
    </div>
  )
}

export default Card
