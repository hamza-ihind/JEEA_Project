import React,{useContext} from "react";

import Line from "../../assets/line.svg";
import Decoration from "../../assets/decoration.svg";

import "./Hero.scss";

//contexts
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Hero = () => {
  
  const {isDarkModeActive} = useContext(ThemeModeContext);


  return (
    <div className={isDarkModeActive ? "hero dark" : "hero light"} id="hero">
      {/* <img src={Decoration} alt="decoration" className="hero__decoration" /> */}
      <div className="hero__content">
        <div className="hero__content-text">
          <span className="hero__content-jeea">JEEA</span> <br /> POUR CHAQUE
          PROBLEME, NOUS INGENIONS UNE SOLUTION
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
