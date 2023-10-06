import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import "./Navbar.scss";
import LOGO from "../../assets/JEEA_logo.png";
import Light from "../../assets/light.png";
import Dark from "../../assets/dark.png";
import Close from "../../assets/close.png";
import Menu from "../../assets/menu.png";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDarkModeActive, switchToLightMode, switchToDarkMode } =
    useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  const [light, setLight] = useState(true);
  const navRef = useRef();

  const toggleMode = () => {
    isDarkModeActive ? switchToLightMode() : switchToDarkMode();
    setLight(!light);
  };

  const toggleNavbar = () => {
    navRef.current.classList.toggle("Responsive_nav");
  };

  const getModeButtonClassName = () =>
    isDarkModeActive
      ? "navbar__button light_dark_icon navbar__button_dark"
      : "navbar__button light_dark_icon";

  const getLanguageButtonClassName = () =>
    isDarkModeActive
      ? "navbar__button fr_eng_icon navbar__button_dark"
      : "navbar__button fr_eng_icon";

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__verimg">
          <a href="/#hero">
            <img src={LOGO} alt="ENSA" className="navbar__img" />
          </a>
          <div
            className={
              isDarkModeActive ? "navbar__ver navbar__ver_dark" : "navbar__ver"
            }
          >
            Testing version
          </div>
        </div>

        <div className="navbar__element" ref={navRef}>
          <ul
            className={
              isDarkModeActive
                ? "navbar__links navbar__links_dark"
                : "navbar__links"
            }
          >
            <li>
              <a href="/#hero">{t("labels.Home")}</a>
            </li>

            <li>
              <Link to="/Teams">{t("labels.Team")}</Link>
            </li>

            <li>
              <Link to="/Bureau">Bureau</Link>
            </li>

            <li>
              <a href="/#Contact">Contact</a>
            </li>
          </ul>

          <ul className="navbar__features">
            <li>
              <button className={getModeButtonClassName()} onClick={toggleMode}>
                {light ? (
                  <img src={Dark} alt="dark" className="icon__mode" />
                ) : (
                  <img src={Light} alt="light" className="icon__mode" />
                )}
              </button>
            </li>
            <li>
              <button
                className={getLanguageButtonClassName()}
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
          </ul>

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

          <div className="logo_toggle close_btn" onClick={toggleNavbar}>
            <img src={Close} alt="close" className="button_nav" />
          </div>
        </div>

        <div className="logo_toggle" onClick={toggleNavbar}>
          <img src={Menu} alt="menu" className="button_nav" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
