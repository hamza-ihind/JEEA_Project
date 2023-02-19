import React, { useContext } from "react";

import Line from "../../assets/line.svg";
import Decoration from "../../assets/decoration.svg";

import "./Hero.scss";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

//contexts
import { ThemeModeContext } from "../../contexts/ThemeModeContext";



const Hero = () => {
  const { t, i18n } = useTranslation();
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className={isDarkModeActive ? "hero dark" : "hero light"}   id="hero">
      {/* <img src={Decoration} alt="decoration" className="hero__decoration" /> */}
      <div
        className={
          isDarkModeActive ? "hero__content dark" : "hero__content light"
        }
      >
        <div
          className={
            isDarkModeActive
              ? "hero__content-slogan dark"
              : "hero__content-slogan"
          }
        >
          <span className="hero__content-jeea">JEEA</span> <br />
          {t("hero.slogan")}
        </div>
        <p className="hero__content-text">{t("hero.text")}</p>
        <div className="hero__content-buttons">
          <button
            className={isDarkModeActive ? "button-main dark" : "button-main"}
          >
            {t("hero.contact")}
          </button>
          <button
            className={
              isDarkModeActive ? "button-stroke dark" : "button-stroke"
            }
          >
            {t("hero.video")}
          </button>
        </div>
      </div>
      <img src={Line} alt="line" className="hero__line" />
    </div>
  );
};

export default Hero;
