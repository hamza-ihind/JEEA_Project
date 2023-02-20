import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import "./Navbar.scss";
import LOGO from "../../assets/JEEA_logo.png";
import Light from "../../assets/light.png";
import Dark from "../../assets/dark.png";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

import { useRef } from "react";

//context
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Navbar = () => {
  const [light, setLight] = useState(true);

  const { isDarkModeActive, switchToLightMode, switchToDarkMode } =
    useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  // toggle navbar :
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("Responsive_nav");
  };

  function toggleMode() {
    if (isDarkModeActive) {
      switchToLightMode();
      return;
    }
    switchToDarkMode();
  }

  function mixed() {
    toggleMode();
    setLight(!light);
  }

  const scrollToContactUs = () => {
    window.scrollTo("./#CONTACTUS");
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <img src={LOGO} alt="ENSA" className="navbar__img" />

        <div className="navbar__element" ref={navRef}>
          <ul className="navbar__links">
            <li>
              <a href="./#hero">{t("labels.Home")}</a>
            </li>

            <li>
              <a href="./#about">{t("labels.About")}</a>
            </li>

            <li>
              <a href="/#CARDS">{t("labels.Services")}</a>
            </li>

            <li>
              <Link to="/Teams">{t("labels.Team")}</Link>
            </li>
          </ul>

          <ul className="navbar__features">
            <li>
              <button
                className="navbar__button light_dark_icon"
                onClick={mixed}
              >
                {light ? (
                  <img src={Dark} className="icon__mode" />
                ) : (
                  <img src={Light} className="icon__mode" />
                )}
              </button>
            </li>
            <li></li>
            <li>
              <button
                className="navbar__button fr_eng_icon"
                onClick={() =>
                  changeLanguage(
                    i18n.resolvedLanguage === "français"
                      ? "english"
                      : "français"
                  )
                }
              >
                {i18n.resolvedLanguage}
              </button>
            </li>
            <li>
              <button className="navbar__button contact_us_button">
                <a
                  href="./#CONTACTUS"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {t("labels.ContactUs")}
                </a>
              </button>
            </li>
          </ul>
          <div className="logo_toggle close_btn " onClick={showNavbar}>
            <i class="fa fa-bars"></i>
          </div>
        </div>

        <div className="logo_toggle " onClick={showNavbar}>
          <i class="fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
