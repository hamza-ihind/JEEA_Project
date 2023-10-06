import React, { useContext } from "react";

import "./Jeea.scss";

//assets
import jeea from "../../assets/jeea.png";
import star from "../../assets/star.svg";
import back from "../../assets/hmzt.mp4";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Jeea = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  return (
    <section
      id="JEEA"
      className={isDarkModeActive ? "jeea dark" : "jeea light"}
    >
      hamza
    </section>
  );
};

export default Jeea;
