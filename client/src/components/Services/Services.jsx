import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Services.scss";

// Assets
import star from "../../assets/star2.svg";
import recrutement from "../../assets/recrutement.svg";
import projects from "../../assets/projects.svg";
import services from "../../assets/services.svg";
import activities from "../../assets/activities.svg";

import { useTranslation } from "react-i18next";

// Context
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Services = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t } = useTranslation();

  return (
    <div
      id="Services"
      className={isDarkModeActive ? "cards dark" : "cards light"}
    >
      {/* Background videos */}
      {/* <div className={isDarkModeActive ? "cards__back1 dark" : "cards__back1"}>
        <video autoPlay loop muted>
          <source src={back} type="video/mp4" />
        </video>
      </div>
      <div className={isDarkModeActive ? "cards__back2 dark" : "cards__back2"}>
        <video autoPlay loop muted>
          <source src={back} type="video/mp4" />
        </video>
      </div> */}
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

              <Link to="/projects">
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
    </div>
  );
};

export default Services;
