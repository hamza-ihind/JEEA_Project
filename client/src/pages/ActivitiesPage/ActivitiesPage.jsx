import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ActivitiesPage.scss";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { Activities } from "../../database/Activities";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";

const ActivitiesPage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="activities-page">
      {/* <video
        className={
          isDarkModeActive
            ? "activities-page__back1 dark"
            : "activities-page__back1"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <video
        className={
          isDarkModeActive
            ? "activities-page__back2 dark"
            : "activities-page__back2"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <video
        className={
          isDarkModeActive
            ? "activities-page__back3 dark"
            : "activities-page__back3"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video> */}
      <div className="activities">
        <motion.div
          className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
          style={{ scaleX }}
        />
        {/* Activities title: Browse Activities */}

        {/* Container Cards  */}
        <div
          className={
            isDarkModeActive
              ? "activities__cards-container dark"
              : "activities__cards-container"
          }
        >
          {Activities.map((element) => {
            return (
              <div className="activities__card" key={element.id}>
                {/* Content side */}
                <div className="activities__card-right">
                  <h3 className="activities__card-right-title">
                    {element.title}
                    <p className="activities__card-right-info">
                      {element.info}
                    </p>
                  </h3>
                  <p className="activities__card-right-desc">
                    <TruncatedText
                      text={element.desc}
                      maxLength={300}
                    ></TruncatedText>
                  </p>
                  <Link to={`/activities/${element.id}`}>
                    <button
                      className={
                        isDarkModeActive ? "button-main dark" : "button-main"
                      }
                    >
                      {t("labels.more")}
                    </button>
                  </Link>
                </div>
                {/* Image side */}
                <div className="activities__card-left">
                  <img
                    src={element.img}
                    alt="image"
                    className="activities__card-left-img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function TruncatedText({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <>{text}</>;
  } else {
    const truncatedText = text.slice(0, maxLength) + "...";
    return <>{truncatedText}</>;
  }
}

export default ActivitiesPage;
