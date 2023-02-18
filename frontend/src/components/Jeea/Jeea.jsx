import React, { useContext } from "react";

import "./Jeea.scss";

//assets
import jeea from "../../assets/jeea.png";
import star from "../../assets/star.svg";

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
      <div className="jeea__container">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            {t("jeea.title")}
          </h1>

          <img src={star} alt="star" className="starImg" />
        </div>
        <div className="content">
          <p className="paragraph">{t("jeea.text")}</p>

          <img src={jeea} alt="img" className="jeeaImg" />
        </div>
      </div>
    </section>
  );
};

export default Jeea;
