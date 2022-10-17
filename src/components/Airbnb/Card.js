/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import star from '../../images/star.png'

const Card = (props) =>{
    
  return (
    <div className="card">
{/* <div className='status'>SOLD OUT</div> */}
        <img src={require(`../../images/${props.image}`)} className='img1'/>
        <div className='card-stats'>
          <img src={star}/>
        <span className='gray'>{props.rating}</span>
        <span className='gray'>({props.reviewCount})  .</span>
        <span className='gray'>{props.country}</span>  
        </div>
        
        <p>{props.title}</p>
        <p> <span className='bold'>From Tsh {props.price} </span>/person</p>
        
    </div>
  )
}

export default Card