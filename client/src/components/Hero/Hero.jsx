import React, { useState, useContext } from "react";
import "./Hero.scss";
import assets from "../../constants/assets";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import VideoPlayer from "../VideoPlayer";

const Hero = () => {
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();

  const toggle = () => {
    setShow(!show);
  };
  const sloganHTML = { __html: t("hero.slogan") };
  return (
    <div className="hero" id="hero">
      <div className="hero__content">
        <div
          className="hero__content-slogan"
          dangerouslySetInnerHTML={sloganHTML}
          style={
            i18n.resolvedLanguage === "FR"
              ? { fontSize: "4.5rem", lineHeight: "6rem" }
              : { fontSize: "5.5rem" }
          }
        ></div>
        <p className="hero__content-text">{t("hero.text")}</p>
        <div className="hero__content-buttons">
          <a href="#CONTACTUS">
            <button className="button-main">{t("hero.contact")}</button>
          </a>
          <button onClick={toggle} className="button-stroke">
            {t("hero.video")}
          </button>
        </div>
        <div className="hero__content-socials">
          <a href="https://www.facebook.com/JEEA.ENSAA">
            <img src={assets.facebook} alt="FACEBOOK" />
          </a>
          <a href="https://www.instagram.com/jeea.ensaa/">
            <img src={assets.instagram} alt="INSTAGRAM" />
          </a>
          <a href="https://www.linkedin.com/company/jeea-ensaa/">
            <img src={assets.linkedin} alt="LINKEDIN" />
          </a>
        </div>
      </div>
      <div className="hero__chess">
        <img src={assets.chess1} alt="CHESS" />
      </div>
    </div>
  );
};

export default Hero;
