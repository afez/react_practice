import React from 'react'
import hero from '../../images/hero.png'

function Hero() {
  return (
    <section className='hero'>
        <img src={hero} className="hero-img"/>
        <h1 className='hero-h1'>Online Exprinece</h1>
        <p className='hero-p'>Join unique interactive activities led by one-of-a-kind hosts—all 
            without leaving home.
</p>
    </section>
  )
}

export default Hero