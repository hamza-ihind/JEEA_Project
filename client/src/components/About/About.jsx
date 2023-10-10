import React, { useContext } from "react";
import jeea from "../../assets/jeea.png";
import cjem from "../../assets/cjem.png";
import { useTranslation } from "react-i18next";

import assets from "../../constants/assets";

import Title from "../Title/Title";

import "./About.scss";

const Cjem = () => {
  const { t } = useTranslation();

  return (
    <div id="About" className="about">
      <Title text={t("jeea.title")} img={assets.chess1} />

      <div className="about__container">
        <div className="about__content">
          <img src={cjem} alt="img" className="cjemImg" />
          <p className="about__paragraph">{t("cjem.text")}</p>
        </div>

        <div className="about__content">
          <img src={jeea} alt="img" className="jeeaImg" />
          <p className="about__paragraph">{t("jeea.text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Cjem;
