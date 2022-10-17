import React from 'react'
import About from './About'
import Social from './Social'
import Details from './Details'

function DigitalCard() {
  return (
    <div className='card_body'>
      <div className='inner'>
        <About/>
        <Details/>
        <Social/>
      </div>
        
    </div>
  )
}

export default DigitalCard