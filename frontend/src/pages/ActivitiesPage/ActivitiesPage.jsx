import React, { useState, useContext } from "react";
import "./ActivitiesPage.scss";

//assets
import star from "../../assets/star.svg";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { Activities } from "../../database/Activities";
import { motion, useScroll, useSpring } from "framer-motion";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const filterPole = (pole) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      const updatedPole = Activities.filter((currentPole) => {
        return currentPole.pole === pole;
      });

      setActivities(updatedPole);
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
      <motion.div
        className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
        style={{ scaleX }}
      />
      {/* Activities title: Browse Activities */}
      <div className="Title">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            Browse Activities
          </h1>
          <img src={star} alt="star" className="starImg" />
        </div>
      </div>

      {/* <div className="navbar__services">
        <div className="navbar__services-container">
          <ul className="navbar__services-links">
          
            <li>
              <button
                onClick={() => filterPole("info")}
                className={
                  isDarkModeActive ? "button-pole dark" : "button-pole"
                }
              >
                Info
              </button>
            </li>
            <li>
              <button
                onClick={() => filterPole("design")}
                className={
                  isDarkModeActive ? "button-pole dark" : "button-pole"
                }
              >
                Design
              </button>
            </li>
            <li>
              <button
                onClick={() => filterPole("rtc")}
                className={
                  isDarkModeActive ? "button-pole dark" : "button-pole"
                }
              >
                RTC
              </button>
            </li>
          </ul>
        </div>
      </div> */}

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
  );
};

export default ActivitiesPage;
