import React from "react";
import "./Navbar.scss";
import LOGO from "../../assets/JEEA_logo.png";
import { useTranslation} from 'react-i18next';
import { changeLanguage } from "i18next";



const Navbar = () => {
const {t,i18n} = useTranslation()

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={LOGO} alt="ENSA" className="navbar__img" />

        <ul className="navbar__links">
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
            <button className="navbar__button">L/D</button>
          </li>
          <li>
         
          </li>
          <li>
            <button className="navbar__button" onClick={()=>changeLanguage(i18n.resolvedLanguage==="en"?"fr":"en")}>{i18n.resolvedLanguage}</button>
          </li>
          <li>
            <button className="navbar__button">{t("labels.ContactUs")}</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
