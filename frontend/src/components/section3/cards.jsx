import React from 'react'

import "./cards.scss"

//assets 
import card from "../../assets/jeea.svg"
import star from "../../assets/star.svg"

const cards = () => {
  return (
    <section id="CARDS" className='cards'>
      <div className='cards__container'>
        <div className='title__container'>
          <h1 className='title'>WHAT DO WE DO?</h1>
          
          <img src={star} alt="star" className='starImg'/> 
          
        </div>
        <div className='content'>
          <a href="#">
            <img src={card} alt="Recrutement" className='jeeaImg'/>
          </a>

          <a href="#">
            <img src={card} alt="Formations" className='jeeaImg'/>
          </a>
          
          <a href="#">
            <img src={card} alt="Projects" className='jeeaImg'/>
          </a>
          
          <a href="#">
            <img src={card} alt="Others" className='jeeaImg'/>
          </a>
        </div>

      </div>
    </section>
  )
}

export default cards