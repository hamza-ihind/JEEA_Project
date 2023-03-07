import React, { useContext } from "react";

import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Cjem from "../../components/Cjem/Cjem";
import Jeea from "../../components/Jeea/Jeea";
import Services from "../../components/Services/Services";
import Navbar from "../../components/navbar/Navbar";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { motion, useScroll, useSpring } from "framer-motion";

//animation
// import Animation from "../../components/Animation";
import "./HomePage.scss";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <>
      <motion.div
        className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
        style={{ scaleX }}
      />
      <div className={isDarkModeActive ? "homepage dark" : "homepage light"}>
        <Hero />
        <Cjem />
        <Jeea />
        <Services />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
