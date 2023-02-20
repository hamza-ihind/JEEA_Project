import React, { useContext } from "react";

import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Cjem from "../../components/Cjem/Cjem";
import Jeea from "../../components/Jeea/Jeea";
import Services from "../../components/Services/Services";
import Navbar from "../../components/navbar/Navbar";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { motion, useScroll, useSpring } from "framer-motion";
import blob from "../../assets/blobs/blob1.svg";
import blob2 from "../../assets/blobs/blob2.svg";

//animation
import Animation from "../../components/Animation";
import "./HomePage.scss";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const HomePageComponent = [
    <Hero />,
    <Cjem />,
    <Jeea />,
    <Services />,
    <Contact />,
  ];

  return (
    <>
      <motion.div
        className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
        style={{ scaleX }}
      />
      <div className={isDarkModeActive ? "homepage dark" : "homepage light"}>
        <img src={blob} alt="blob" className="blob-1" />
        <img src={blob} alt="blob" className="blob-2" />
        <img src={blob2} alt="blob" className="blob-3" />
        <img src={blob2} alt="blob" className="blob-4" />
        {HomePageComponent.map((section) => {
          return <Animation>{section}</Animation>;
        })}
      </div>
    </>
  );
};

export default HomePage;
