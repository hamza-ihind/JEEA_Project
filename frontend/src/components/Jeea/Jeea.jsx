import React, { useContext } from "react";

import "./Jeea.scss";

//assets
import jeea from "../../assets/jeea.png";
import star from "../../assets/star.svg";
import back from "../../assets/GIF.gif";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Jeea = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  return (
    <section
      id="JEEA"
      className={isDarkModeActive ? "jeea dark" : "jeea light"}
    >
      <img
        src={back}
        alt="back"
        className={isDarkModeActive ? "jeea__back dark" : "jeea__back"}
      />
      <div className="jeea__container">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            {t("jeea.title")}
          </h1>

          <img src={star} alt="star" className="starImg" />
        </div>
        <div className="content">
          <img
            src={jeea}
            alt="img"
            className={isDarkModeActive ? "jeeaImg dark" : "jeeaImg"}
          />
          <p className="paragraph"> {t("jeea.text")}</p>
        </div>
      </div>
    </section>
  );
};

export default Jeea;
