import React, { useContext } from "react";

import "./Cjem.scss";

//assets
import cjem from "../../assets/cjem.png";
import star from "../../assets/star.svg";
import back from "../../assets/GIF.gif";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

//context
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Cjem = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  return (
    <div id="about" className={isDarkModeActive ? "cjem dark" : "cjem light"}>
      <img
        src={back}
        alt="back"
        className={isDarkModeActive ? "cjem__back dark" : "cjem__back"}
      />
      <div className="cjem__container">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            {t("cjem.title")}
          </h1>
          <img src={star} alt="star" className="starImg" />
        </div>

        <div className="cjem__content">
          <p className="cjem__paragraph">
            <img
              src={cjem}
              alt="img"
              className={isDarkModeActive ? "cjemImg dark" : "cjemImg"}
            />
            {t("cjem.text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cjem;
