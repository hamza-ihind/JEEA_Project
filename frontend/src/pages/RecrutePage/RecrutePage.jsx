import React, { useState, useContext } from "react";
import "./RecrutePage.scss";
//assets
import star from "../../assets/star.svg";
import { AiFillCheckCircle } from "react-icons/ai";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { motion, useScroll, useSpring } from "framer-motion";
import { Services } from "../../database/Services";

const RecrutePage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365));

  return (
    <div className={isDarkModeActive ? "recrute-page dark" : "recrute-page"}>
      <div className="recrutement">
        <div className="Title">
          <div className="title__container">
            <h1 className={isDarkModeActive ? "title dark" : "title"}>
              Recruitement
            </h1>
            <img src={star} alt="star" className="starImg" />
          </div>
        </div>

        <div className="counter">
          <div className="title__container">
            <h1
              style={{ padding: "1.5rem 2.5rem" }}
              className={isDarkModeActive ? "title dark" : "title"}
            >
              ENDS IN :
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecrutePage;
