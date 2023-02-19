import React, { useContext } from "react";

import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Cjem from "../../components/Cjem/Cjem";
import Jeea from "../../components/Jeea/Jeea";
import Services from "../../components/Services/Services";
import Navbar from "../../components/navbar/Navbar";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

//animation
import Animation from "../../components/Animation";

const HomePage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  
  const HomePageComponent = [<Hero />,<Cjem />, <Jeea />,<Services />,<Contact />]

  return (
    <div className={isDarkModeActive ? "homepage dark" : "homepage light"}>
      {HomePageComponent.map((section)=>{
        return <Animation>
          {section}
        </Animation>
      })}
    </div>
  );
};

export default HomePage;
