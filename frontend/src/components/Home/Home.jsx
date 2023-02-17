import React, { useContext } from "react";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Cjem from "../Cjem/Cjem";
import Jeea from "../Jeea/Jeea";
import Services from "../Services/Services";
import Navbar from "../navbar/Navbar";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Home = () => {
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

export default Home;
