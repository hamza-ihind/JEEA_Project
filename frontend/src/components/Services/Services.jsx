import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Services.scss";

//assets
import star from "../../assets/star2.svg";
import back from "../../assets/GIF.gif";
import recrutement from "../../assets/recrutement.svg";
import projects from "../../assets/projects.svg";
import services from "../../assets/services.svg";
import activities from "../../assets/activities.svg";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

//context
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Services = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  return (
    <section
      id="CARDS"
      className={isDarkModeActive ? "cards dark" : "cards light"}
    >
      <img
        src={back}
        alt="back"
        className={isDarkModeActive ? "cards__back1 dark" : "cards__back1"}
      />
      <img
        src={back}
        alt="back"
        className={isDarkModeActive ? "cards__back2 dark" : "cards__back2"}
      />
      <div className="cards__container">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            {t("services.title")}
          </h1>
          <img src={star} alt="star" className="starImg" />
        </div>

        <div className="content">
          <div className="card">
            <img src={recrutement} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{t("services.recrute")}</p>
              <Link to="/Recrutement">
                <button
                  className={
                    isDarkModeActive ? "button-main dark" : "button-main"
                  }
                >
                  {t("services.button")}
                </button>
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={activities} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{t("services.activities")}</p>
              <Link to="/Activities">
                <button
                  className={
                    isDarkModeActive ? "button-main dark" : "button-main"
                  }
                >
                  {t("services.button")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="card">
            <img src={projects} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{t("services.projects")}</p>
              <button
                className={
                  isDarkModeActive ? "button-main dark" : "button-main"
                }
              >
                {t("services.button")}
              </button>
            </div>
          </div>

          <div className="card">
            <img src={services} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{t("services.services")}</p>
              <Link to="/Services">
                <button
                  className={
                    isDarkModeActive ? "button-main dark" : "button-main"
                  }
                >
                  {t("services.button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
