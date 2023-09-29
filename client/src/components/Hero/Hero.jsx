import React, { useState, useContext } from "react";

import Line from "../../assets/line.svg";
import Decoration from "../../assets/decoration.svg";
import back from "../../assets/hmzt.mp4";

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

import "./Hero.scss";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { motion } from "framer-motion";
import VideoPlayer from "../VideoPlayer";

//contexts
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Hero = () => {
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className={isDarkModeActive ? "hero hero_dark" : "hero"} id="hero">
      {show && (
        <motion.div className="video-player">
          <button className="close-btn" onClick={toggle}>
            X
          </button>
          <VideoPlayer />
        </motion.div>
      )}
      <video
        className={isDarkModeActive ? "hero__back dark" : "hero__back"}
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <div className="hero__content">
        <div
          className={
            isDarkModeActive
              ? "hero__content-slogan dark"
              : "hero__content-slogan"
          }
        >
          {/* <span className="hero__content-jeea">JEEA</span> <br /> */}
          {t("hero.slogan")}
        </div>
        <p className="hero__content-text">{t("hero.text")}</p>
        <div className="hero__content-buttons">
          <a href="./#CONTACTUS">
            <button
              className={isDarkModeActive ? "button-main dark" : "button-main"}
            >
              {t("hero.contact")}
            </button>
          </a>
          <button
            onClick={toggle}
            className={
              isDarkModeActive ? "button-stroke dark" : "button-stroke"
            }
          >
            {t("hero.video")}
          </button>
        </div>
      </div>
      {/* <img src={Line} alt="line" className="hero__line" /> */}
    </div>
  );
};

export default Hero;
