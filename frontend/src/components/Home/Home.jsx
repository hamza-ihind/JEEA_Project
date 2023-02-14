import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Cjem from "../Cjem/Cjem";
import Jeea from "../Jeea/Jeea";
import Services from "../Services/Services";
import Navbar from "../navbar/Navbar";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="Home_page">
      <Navbar toggleMode={toggleMode} />
      <Hero isDarkMode={isDarkMode} />
      <Cjem isDarkMode={isDarkMode} />
      <Jeea isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
