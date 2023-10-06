import React, { useState, useContext } from "react";
import "./Hero.scss";
import back from "../../assets/hmzt.mp4";
import { motion } from "framer-motion";
import VideoPlayer from "../VideoPlayer";
import { useTranslation } from "react-i18next";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Hero = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className={`hero ${isDarkModeActive ? "hero_dark" : ""}`} id="hero">
      {show && (
        <motion.div className="video-player">
          <button className="close-btn" onClick={toggle}>
            X
          </button>
          <VideoPlayer />
        </motion.div>
      )}
      <video
        className={`hero__back ${isDarkModeActive ? "dark" : ""}`}
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <div className="hero__content">
        <div
          className={`hero__content-slogan ${isDarkModeActive ? "dark" : ""}`}
        >
          {t("hero.slogan")}
        </div>
        <p className="hero__content-text">{t("hero.text")}</p>
        <div className="hero__content-buttons">
          <a href="#CONTACTUS">
            <button className={`button-main ${isDarkModeActive ? "dark" : ""}`}>
              {t("hero.contact")}
            </button>
          </a>
          <button
            onClick={toggle}
            className={`button-stroke ${isDarkModeActive ? "dark" : ""}`}
          >
            {t("hero.video")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
