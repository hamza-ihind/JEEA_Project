import React from 'react'


//scss style
import "./index.scss"

const content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eius nulla, cumque non nobis autem optio, dicta earum doloribus facilis rem recusandae hic, voluptas totam porro. Ducimus neque nesciunt unde?'

const JeeaPresentation = () => {


  
  return (
    <div className="container">
      <div className='titleContainer'>
      <h1>JEEA</h1>
      </div>
      <div className='subContainer'>
        <div className='paragraphContainer' >
          <p data-aos="fade-right">
            {content.repeat(2)}
          </p>
        </div>
        <div>
          <img data-aos="fade-left" src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="team"/>
        </div>
      </div>
    </div>
  )
}

export default JeeaPresentation;