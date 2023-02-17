import React, { useContext } from "react";

import "./Cjem.scss";

//assets
import cjem from "../../assets/cjem.png";
import star from "../../assets/star.svg";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

//context
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Cjem = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  return (
    <div id="about" className={isDarkModeActive ? "cjem dark" : "cjem light"}>
      <div className="cjem__container">
        <div className="title__container">
          <h1 className="title">{t("cjem.title")}</h1>
          <img src={star} alt="star" className="starImg" />
        </div>

        <div className="content">
          <p className="paragraph">{t("cjem.text")}</p>
          <img src={cjem} alt="img" className="cjemImg" />
        </div>
      </div>
    </div>
  );
};

export default Cjem;
