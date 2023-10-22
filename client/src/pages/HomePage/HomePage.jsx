import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// PARTS
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Activities from "../../components/Activities/Activities";
import Poles from "../../components/Poles/Poles";
import Contact from "../../components/Contact/Contact";

import "./HomePage.scss";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="homepage">
        <Hero />
        <About />
        <Activities />
        <Poles />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
