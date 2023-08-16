import React, { useState, useContext } from "react";
import "./ProjectsPage.scss";

//assets
import star from "../../assets/star.svg";
import back from "../../assets/GIF.gif";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { Activities } from "../../database/Activities";
import { motion, useScroll, useSpring } from "framer-motion";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const filterPole = (pole) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      const updatedPole = Activities.filter((currentPole) => {
        return currentPole.pole === pole;
      });

      setProjects(updatedPole);
    }, 420);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="activities-page">
      <img
        src={back}
        alt="back"
        className={
          isDarkModeActive
            ? "activities-page__back1 dark"
            : "activities-page__back1"
        }
      />
      <img
        src={back}
        alt="back"
        className={
          isDarkModeActive
            ? "activities-page__back2 dark"
            : "activities-page__back2"
        }
      />
      <img
        src={back}
        alt="back"
        className={
          isDarkModeActive
            ? "activities-page__back3 dark"
            : "activities-page__back3"
        }
      />
      <div className="activities">
        <motion.div
          className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
          style={{ scaleX }}
        />
        {/* Activities title: Browse Activities */}
        <div className="Title">
          <div className="title__container">
            <h1 className={isDarkModeActive ? "title dark" : "title"}>
              Browse Projects
            </h1>
            <img src={star} alt="star" className="starImg" />
          </div>
        </div>

        {/* Container Cards  */}
        <div
          className={
            isDarkModeActive
              ? "activities__cards-container dark"
              : "activities__cards-container"
          }
        >
          {Activities.map((element) => {
            return (
              <div className="activities__card">
                <div className="activities__card-right">
                  <h3 className="activities__card-right-title">
                    {element.title}
                  </h3>
                  <p className="activities__card-right-info">{element.info}</p>
                  <p className="activities__card-right-desc">{element.desc}</p>
                  <button
                    className={
                      isDarkModeActive ? "button-main dark" : "button-main"
                    }
                  >
                    Learn more ...
                  </button>
                </div>
                <div className="activities__card-left">
                  <img
                    src={element.img}
                    alt="image"
                    className="activities__card-left-img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
