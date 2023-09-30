import React, { useState, useContext } from "react";
import "./ProjectsPage.scss";

//assets
import star from "../../assets/star.svg";
import back from "../../assets/hmzt.mp4";

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
    <div className="projectsvities-page">
      <video
        className={
          isDarkModeActive
            ? "projectsvities-page__back1 dark"
            : "projectsvities-page__back1"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <video
        className={
          isDarkModeActive
            ? "projectsvities-page__back2 dark"
            : "projectsvities-page__back2"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <video
        className={
          isDarkModeActive
            ? "projectsvities-page__back3 dark"
            : "projectsvities-page__back3"
        }
        autoPlay
        loop
        muted
      >
        <source src={back} type="video/mp4" />
      </video>
      <div className="projects">
        <motion.div
          className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
          style={{ scaleX }}
        />
        {/* projectsvities title: Browse projectsvities */}
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
              ? "projects_cards-container dark"
              : "projects_cards-container"
          }
        >
          {projects.map((element) => {
            return (
              <div className="projects__card">
                <div className="projects__card-right">
                  <h3 className="projects__card-right-title">
                    {element.title}
                  </h3>
                  <p className="projects__card-right-info">{element.info}</p>
                  <p className="projects__card-right-desc">{element.desc}</p>
                  <button
                    className={
                      isDarkModeActive ? "button-main dark" : "button-main"
                    }
                  >
                    Learn more ...
                  </button>
                </div>
                <div className="projects__card-left">
                  <img
                    src={element.img}
                    alt="image"
                    className="projects__card-left-img"
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
