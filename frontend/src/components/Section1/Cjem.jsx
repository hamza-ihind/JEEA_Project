import React from 'react'

import "./Cjem.scss"

//assets 
import cjem from "../../assets/cjem.svg"
import star from "../../assets/star.svg"

const Cjem = () => {
  return (
    <section id="CJEM" className='cjem'>
        <div className='cjem__container'>
       <div className='title__container'>
        <h1 className='title'>WHO IS CJEM?</h1>
        
        <img src={star} alt="star" className='starImg'/> 
       
       </div>
       <div className='content'>
        <p className='paragraph'>
        CJEM (Confédération des Juniors Entreprises Marocaines) est la structure fédératrice du mouvement Junior-Entrepreneuriat à l'échelle marocaine dans le but de promouvoir le concept des JEs (Junior Enterprises) au niveau national, mais aussi faire en sorte que le statut du JE soit juridiquement reconnu et valorisé auprès des entreprises.
Pour plus d'informations : https://cjem.ma/
        </p>

        <img src={cjem} alt="img" className='cjemImg'/>
       </div>

       </div>
        </section>
  )
}

export default Cjem