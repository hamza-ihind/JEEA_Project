import React, { useContext } from "react";

import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Cjem from "../../components/Cjem/Cjem";
import Jeea from "../../components/Jeea/Jeea";
import Services from "../../components/Services/Services";
import Navbar from "../../components/navbar/Navbar";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const HomePage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className={isDarkModeActive ? "homepage dark" : "homepage light"}>
      <Navbar />
      <Hero />
      <Cjem />
      <Jeea />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
