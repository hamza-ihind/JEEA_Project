import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

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
        <Services />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;