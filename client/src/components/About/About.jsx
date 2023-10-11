import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { MotionWrap, AppWrap } from "../../wrapper";
import assets from "../../constants/assets";
import Title from "../Title/Title";

import "./About.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="about">
      <Title text={t("jeea.title")} img={assets.chess1} />

      <div className="about__container">
        <div className="about__content">
          <img src={assets.cjem} alt="img" className="cjemImg" />
          <p className="about__paragraph">{t("cjem.text")}</p>
        </div>

        <div className="about__content">
          <img src={assets.jeea} alt="img" className="jeeaImg" />
          <p className="about__paragraph">{t("jeea.text")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "about"), "about");
