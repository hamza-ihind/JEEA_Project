import React from "react";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Cjem from "../Cjem/Cjem";
import Jeea from "../Jeea/Jeea";
import Services from "../Services/Services";


const  Home =() =>{
 
  return (
    <div className="Home_page">
      <Hero/>
      <Cjem/>
      <Jeea/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default Home;