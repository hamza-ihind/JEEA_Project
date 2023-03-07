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

  return (
    <div className={isDarkModeActive ? "recrute-page dark" : "recrute-page"}>
      RecrutePage
    </div>
  );
};

export default RecrutePage;
