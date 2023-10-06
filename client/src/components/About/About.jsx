import React, { useContext } from "react";
import jeea from "../../assets/jeea.png";
import cjem from "../../assets/cjem.png";
import star from "../../assets/star.svg";
import { useTranslation } from "react-i18next";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

import "./About.scss";

const Cjem = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t } = useTranslation();

  const containerClass = isDarkModeActive ? "about dark" : "about";
  const titleClass = isDarkModeActive ? "title dark" : "title";
  const imageClass = isDarkModeActive ? "dark" : "";

  return (
    <div id="About" className={containerClass}>
      <div className="about__container">
        <div className="title__container">
          <h1 className={titleClass}>{t("cjem.title")}</h1>
          <img src={star} alt="star" className="starImg" />
        </div>
        <div className="about__content">
          <img src={cjem} alt="img" className={`cjemImg ${imageClass}`} />
          <p className="about__paragraph">{t("cjem.text")}</p>
        </div>
      </div>
      <div className="about__container">
        <div className="title__container">
          <h1 className={titleClass}>{t("jeea.title")}</h1>
          <img src={star} alt="star" className="starImg" />
        </div>
        <div className="about__content">
          <img src={jeea} alt="img" className={`jeeaImg ${imageClass}`} />
          <p className="about__paragraph">{t("jeea.text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Cjem;
