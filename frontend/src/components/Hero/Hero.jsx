import React from 'react'

import Photo from '../../assets/photo.jpg'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__content'>
            <div className='hero__content-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
            <div className='hero__content-buttons'>
                <button className='button-main'> Let's Begin </button>
                <button className='button-stroke'> Learn more </button>
            </div>
        </div>
        <img src={Photo} alt="photo" className='hero__img'/>
    </div>
  )
}

export default Hero