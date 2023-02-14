import React from "react";
import "./Navbar.scss";
import LOGO from "../../assets/JEEA_logo.png";
import { useTranslation} from 'react-i18next';
import { changeLanguage } from "i18next";


const Navbar = (props) => {
  function toggleMode() {
    props.toggleMode();
  }
import {  useRef } from "react";




const Navbar = () => {
const {t,i18n} = useTranslation() ;

// toggle navbar :
const navRef = useRef() ;
const showNavbar = ()=> {
  navRef.current.classList.toggle("Responsive_nav")
}

// end toggle navbar : 

  return (
    <div className="navbar">
      <div className="navbar__container">
        <img src={LOGO} alt="ENSA" className="navbar__img" />


      <div className="navbar__element" ref={navRef}>
        <ul className="navbar__links ">
          <li>
            <a href="home">{t("labels.Home")}</a>
          </li>
          <li>
            <a href="about">{t("labels.About")}</a>
          </li>
          <li>
            <a href="#">{t("labels.Services")}</a>
          </li>
          <li>
            <a href="#">{t("labels.Team")}</a>
          </li>
        </ul>
        <ul className="navbar__features">
          <li>

            <button className="navbar__button" onClick={toggleMode}>L/D</button>

            <button className="navbar__button light_dark_icon">L/D</button>
          </li>
          <li>
         
          </li>
          <li>
            <button className="navbar__button fr_eng_icon" onClick={()=>changeLanguage(i18n.resolvedLanguage==="en"?"fr":"en")}>{i18n.resolvedLanguage}</button>
          </li>
          <li>
            <button className="navbar__button contact_us_button">{t("labels.ContactUs")}</button>
          </li>
        </ul>
        <div  className="logo_toggle close_btn " onClick={showNavbar}>
        <i class="fa fa-bars"></i>
          </div>
        </div>

        <div  className="logo_toggle " onClick={showNavbar}>
            <i class="fa fa-bars"></i>
        </div>
      
      </div>
          
     
    </div>
  );
};
export default Navbar;
