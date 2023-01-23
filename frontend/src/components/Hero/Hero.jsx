import React from 'react'

import Photo from '../../assets/photo.jpg'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__content'>
            <div className='hero__content-text'>
                <span style={{fontSize: 120}}>JEEA</span> <br /> Votre compagnon de confiance
            </div>
            <div className='hero__content-buttons'>
                <button className='button-main'> Contact us </button>
                <button className='button-stroke'> Watch a video </button>
            </div>
        </div>
    </div>
  )
}

export default Hero