import React, { useContext } from "react";
import "./BureauPage.scss";
//assets
import star from "../../assets/star.svg";
import back from "../../assets/hmzt.mp4";

import { motion, useScroll, useSpring } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

import { Bureau } from "../../database/Bureau";

const BureauPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  console.log(Bureau);

  return (
    <div className="bureau-page">
      <video
        className={
          isDarkModeActive ? "bureau-page__back1 dark" : "bureau-page__back1"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <video
        className={
          isDarkModeActive ? "bureau-page__back2 dark" : "bureau-page__back2"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <video
        className={
          isDarkModeActive ? "bureau-page__back3 dark" : "bureau-page__back3"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <div className="bureau">
        <motion.div
          className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
          style={{ scaleX }}
        />
        {/* Bureau title: Bureau */}
        <div className="Title">
          <div className="title__container">
            <h1 className={isDarkModeActive ? "title dark" : "title"}>
              DISCOVER THE BUREAU!
            </h1>
            <img src={star} alt="star" className="starImg" />
          </div>
        </div>

        {/* Présidente */}
        {Bureau.map((element) => {
          if (element.post === "president")
            return (
              <div
                className={
                  isDarkModeActive
                    ? "teams__side-lead dark"
                    : "teams__side-lead"
                }
              >
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title={element.name}
                  arrow
                  placement="top"
                >
                  <img src={element.img} alt="Leader" />
                </Tooltip>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default BureauPage;
