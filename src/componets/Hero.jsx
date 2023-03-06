import React from 'react'
import hero from '../assets/images/hero.png'
const Hero = () => {
  return (
    <div className='container-fluid hero'> 
        <img src={hero} alt="" className='hero-img'/>
    </div>
  )
}

export default Hero
