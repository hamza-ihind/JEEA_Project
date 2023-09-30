import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import LOGO from "../../assets/JEEA_logo.png";
import Light from "../../assets/light.png";
import Dark from "../../assets/dark.png";
import Close from "../../assets/close.png";
import Menu from "../../assets/menu.png";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { useRef } from "react";

// context
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
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
    } else {
      switchToDarkMode();
    }
    setLight(!light);
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <img src={LOGO} alt="ENSA" className="navbar__img" />
        <div className="navbar__element" ref={navRef}>
          <ul className="navbar__links">
            <li>
              <a href="/#hero">{t("labels.Home")}</a>
            </li>

            <li>
              <Link to="/Teams">{t("labels.Team")}</Link>
            </li>

            <li>
              <a href="/#CONTACTUS">contact</a>
            </li>
          </ul>

          <ul className="navbar__features">
            <li>
              <button
                className="navbar__button light_dark_icon"
                onClick={toggleMode}
              >
                {light ? (
                  <img src={Dark} alt="dark" className="icon__mode" />
                ) : (
                  <img src={Light} alt="light" className="icon__mode" />
                )}
              </button>
            </li>
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
            {/* {user ? (
              <>
                <li>
                  <button
                    onClick={logout}
                    className="navbar__button contact_us_button"
                  >
                    {t("labels.logout")}
                  </button>
                </li>
                <li className="navbar__username">{user.username}</li>
              </>
            ) : (
              <>
                <li>
                  <button className="navbar__button contact_us_button">
                    <Link
                      to="/signup"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {t("labels.signup")}
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="navbar__button contact_us_button">
                    <Link
                      to="/login"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {t("labels.login")}
                    </Link>
                  </button>
                </li>
              </>
            )} */}
          </ul>
          <div className="logo_toggle close_btn " onClick={showNavbar}>
            <img src={Close} alt="close" className="button_nav" />
          </div>
        </div>

        <div className="logo_toggle " onClick={showNavbar}>
          <img src={Menu} alt="menu" className="button_nav" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
