import React from 'react'

import "./cards.scss"

//assets
import star from "../../assets/star2.svg"
import recrutement from "../../assets/recrutement.svg"
import projects from "../../assets/projects.svg"
import services from "../../assets/services.svg"
import formation from "../../assets/formation.svg"

const cards = () => {
  return (
    <section id="CARDS" className='cards'>
      <div className='cards__container'>

        <div className='title__container'>
          <h1 className='title'>WHAT WE SERV.</h1>
          <img src={star} alt="star" className='starImg'/> 
        </div>

        <div className='content'>
          <div className="card">
            <img src={recrutement} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .</p>
              <button className='button-main'>More...</button>
            </div>
          </div>

          <div className="card">
            <img src={formation} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .</p>
              <button className='button-main'>More...</button>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className="card">
            <img src={projects} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .</p>
              <button className='button-main'>More...</button>
            </div>
          </div>
          
          <div className="card">
            <img src={services} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .</p>
              <button className='button-main'>More...</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default cards