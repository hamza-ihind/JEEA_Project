import React from "react";

import Line from "../../assets/line.svg";
import Decoration from "../../assets/decoration.svg";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <div className={props.isDarkMode ? 'hero dark' : 'hero light'} id="hero">
      <img src={Decoration} alt="decoration" className="hero__decoration" />
      <div className="hero__content">
        <div className="hero__content-text">
          <span style={{ fontSize: 120 }}>JEEA</span> <br /> VOTRE COMPAGNON DE
          CONFIANCE
        </div>
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
