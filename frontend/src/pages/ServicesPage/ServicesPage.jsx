import React, { useState, useContext } from "react";
import "./ServicesPage.scss";
//assets
import star from "../../assets/star.svg";
import { AiFillCheckCircle } from "react-icons/ai";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { motion } from "framer-motion";
import { Services } from "../../database/Services";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const filterPole = (pole) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      const updatedPole = Services.filter((currentPole) => {
        return currentPole.pole === pole;
      });
      setServices(updatedPole);
    }, 420);
  };

  return (
    <div className="services-page">
      {/* Services title: Browse Services */}
      <div className="Title">
        <div className="title__container">
          <h1 className="title">Browse Services</h1>
          <img src={star} alt="star" className="starImg" />
        </div>
      </div>

      {/* Services Navbar */}
      <div className="navbar__services">
        <div className="navbar__services-container">
          <ul className="navbar__services-links">
          <li>
              <button onClick={() => filterPole("All")}>All</button>
            </li>
            <li>
              <button onClick={() => filterPole("Design")}>Info</button>
            </li>
            <li>
              <button onClick={() => filterPole("Rtc")}>Design</button>
            </li>
            <li>
              <button onClick={() => filterPole("Web Development")}>RTC</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Container Cards  */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.4, delayChildren: 0.4 }}
        className="services__cards-container"
      >
        {services.map((element) => {
          return (
            <div className="services__card">
              <h3 className="services__card-title">{element.title}</h3>
              <p className="services__card-desc">{element.desc}</p>
              <button
                className={
                  isDarkModeActive ? "button-main dark" : "button-main"
                }
              >
                apply
              </button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesPage;
