import React, { useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Navbar from "../../components/navbar/Navbar";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";
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
        <About />
        <Services />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
