import React from "react";

import Line from "../../assets/line.svg";
import Decoration from "../../assets/decoration.svg";

import "./Hero.scss";

const Hero = (props) => {
  return (
    <div className={props.isDarkMode ? "hero dark" : "hero light"} id="hero">
      {/* <img src={Decoration} alt="decoration" className="hero__decoration" /> */}
      <div className="hero__content">
        <div className="hero__content-slogan">
          <span className="hero__content-jeea">JEEA</span> <br /> POUR CHAQUE
          PROBLEME, NOUS INGENIONS UNE SOLUTION
        </div>
        <p className="hero__content-text">
          S'associer à la Junior-Entreprise ENSA Agadir, c'est accéder à un
          large éventail de compétences apportées par de futurs ingénieurs dans
          différents domaines.
        </p>
        <div className="hero__content-buttons">
          <button className="button-main"> Contact us </button>
          <button className="button-stroke"> Watch a video </button>
        </div>
      </div>
      <img src={Line} alt="line" className="hero__line" />
    </div>
  );
};

export default Hero;
