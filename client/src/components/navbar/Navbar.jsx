import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

import "./Navbar.scss";
import assets from "../../constants/assets";

import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  // const { user, logout } = useContext(AuthContext);
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__verimg">
          <a href="/#hero">
            <img
              src={assets.jeea_logo}
              alt="ENSA"
              className="navbar__verimg-img"
            />
          </a>
          <div className="navbar__verimg-ver">v1.0.0</div>
        </div>

        <ul className="navbar__links">
          <li>
            <a href="/#hero">Blogs</a>
          </li>

          <li>
            <Link to="/Teams">{t("labels.Team")}</Link>
          </li>

          <li>
            <Link to="/Bureau">Bureau</Link>
          </li>

          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>

          <li>
            <a href="/#hero">Services</a>
          </li>
        </ul>

        <ul className="navbar__features">
          <li>
            <a href="/#contact">
              <button className="navbar__button fr_eng_icon">
                {t("contact.title")}{" "}
              </button>
            </a>
          </li>
          <li>
            <button
              className="navbar__button fr_eng_icon"
              onClick={() =>
                changeLanguage(i18n.resolvedLanguage === "FR" ? "EN" : "FR")
              }
            >
              {i18n.resolvedLanguage}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* {user ? (
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
            )} */
}
