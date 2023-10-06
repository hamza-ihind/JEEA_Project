import React, { useContext } from "react";
import "./TeamsPage.scss";
//assets
import star from "../../assets/star.svg";
import back from "../../assets/hmzt.mp4";

import hamza from "../../assets/Members/ihind.jpg";
import aqnouch from "../../assets/Members/aqnouch.jpeg";
import zagdi from "../../assets/Members/zagdi.jpg";
import hiba from "../../assets/Members/hiba.jpg";
import manal from "../../assets/Members/manal.jpg";
import saad from "../../assets/Members/saad.jpg";

import { AiFillCheckCircle } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import { motion, useScroll, useSpring } from "framer-motion";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { info, design, rtc, dessin, mecanique } from "../../database/Members";

const TeamsPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className="teams-page">
      {/* <img
        src={back}
        alt="back"
        className={
          isDarkModeActive ? "teams-page__back1 dark" : "teams-page__back1"
        }
      />
      <img
        src={back}
        alt="back"
        className={
          isDarkModeActive ? "teams-page__back2 dark" : "teams-page__back2"
        }
      />
      <img
        src={back}
        alt="back"
        className={
          isDarkModeActive ? "teams-page__back3 dark" : "teams-page__back3"
        }
      /> */}
      <div className="teams">
        <motion.div
          className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
          style={{ scaleX }}
        />
        {/* Services title: Teams */}
        <div className="Title">
          <div className="title__container">
            <h1 className={isDarkModeActive ? "title dark" : "title"}>
              DISCOVER THE TEAMS!
            </h1>
            <img src={star} alt="star" className="starImg" />
          </div>
        </div>
        {/* Pole Informatique */}
        <div className="teams__side">
          {/* Title */}
          <div className="Title">
            <div className="title__container">
              <h1 className={isDarkModeActive ? "title dark" : "title"}>
                Pole Informatique
              </h1>
              <img src={star} alt="star" className="starImg" />
            </div>
          </div>

          {/* Container */}
          <div className="teams__side-container">
            <div
              className={
                isDarkModeActive ? "teams__side-lead dark" : "teams__side-lead"
              }
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Hamza IHIND"
                arrow
                placement="top"
              >
                <img src={hamza} alt="Leader" />
              </Tooltip>
            </div>
            <hr className={isDarkModeActive ? "hr dark" : "hr"} />
            <div className="teams__side-team">
              {info.map((element) => {
                return (
                  <div
                    className={
                      isDarkModeActive
                        ? "teams__side-lead dark"
                        : "teams__side-lead"
                    }
                  >
                    <Tooltip
                      disableFocusListener
                      disableTouchListener
                      title={element.name}
                      arrow
                      placement="top"
                    >
                      <img src={element.img} alt="member" />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*Pole Design */}
        <div className="teams__side">
          {/* Title */}
          <div className="Title">
            <div className="title__container">
              <h1 className={isDarkModeActive ? "title dark" : "title"}>
                Pole Média
              </h1>
              <img src={star} alt="star" className="starImg" />
            </div>
          </div>

          {/* Container */}
          <div className="teams__side-container">
            <div
              className={
                isDarkModeActive ? "teams__side-lead dark" : "teams__side-lead"
              }
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Ali ZAGDI"
                arrow
                placement="top"
              >
                <img src={zagdi} alt="Leader" />
              </Tooltip>
            </div>
            <div
              className={
                isDarkModeActive ? "teams__side-lead dark" : "teams__side-lead"
              }
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Manal ELMOUSSAOUI"
                arrow
                placement="top"
              >
                <img src={manal} alt="Leader" />
              </Tooltip>
            </div>
            <hr className={isDarkModeActive ? "hr dark" : "hr"} />
            <div className="teams__side-team">
              {design.map((element) => {
                return (
                  <div
                    className={
                      isDarkModeActive
                        ? "teams__side-lead dark"
                        : "teams__side-lead"
                    }
                  >
                    <Tooltip
                      disableFocusListener
                      disableTouchListener
                      title={element.name}
                      arrow
                      placement="top"
                    >
                      <img src={element.img} alt="member" />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Pole RTC */}
        <div className="teams__side">
          {/* Title */}
          <div className="Title">
            <div className="title__container">
              <h1 className={isDarkModeActive ? "title dark" : "title"}>
                Pole RTC
              </h1>
              <img src={star} alt="star" className="starImg" />
            </div>
          </div>

          {/* Container */}
          <div className="teams__side-container">
            <div
              className={
                isDarkModeActive ? "teams__side-lead dark" : "teams__side-lead"
              }
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Samia AQNOUCH"
                arrow
                placement="top"
              >
                <img src={aqnouch} alt="Leader" />
              </Tooltip>
            </div>
            <div
              className={
                isDarkModeActive ? "teams__side-lead dark" : "teams__side-lead"
              }
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Hiba AFAILI"
                arrow
                placement="top"
              >
                <img src={hiba} alt="Leader" />
              </Tooltip>
            </div>
            <hr className={isDarkModeActive ? "hr dark" : "hr"} />
            <div className="teams__side-team">
              {rtc.map((element) => {
                return (
                  <div
                    className={
                      isDarkModeActive
                        ? "teams__side-lead dark"
                        : "teams__side-lead"
                    }
                  >
                    <Tooltip
                      disableFocusListener
                      disableTouchListener
                      title={element.name}
                      arrow
                      placement="top"
                    >
                      <img src={element.img} alt="member" />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pole Artistic */}
        <div className="teams__side">
          {/* Title */}
          <div className="Title">
            <div className="title__container">
              <h1 className={isDarkModeActive ? "title dark" : "title"}>
                Pole Artistique
              </h1>
              <img src={star} alt="star" className="starImg" />
            </div>
          </div>

          {/* Container */}
          <div className="teams__side-container">
            <div
              className={
                isDarkModeActive ? "teams__side-lead dark" : "teams__side-lead"
              }
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Samia AQNOUCH"
                arrow
                placement="top"
              >
                <img src={aqnouch} alt="Leader" />
              </Tooltip>
            </div>
            <hr className={isDarkModeActive ? "hr dark" : "hr"} />
            <div className="teams__side-team">
              {dessin.map((element) => {
                return (
                  <div
                    className={
                      isDarkModeActive
                        ? "teams__side-lead dark"
                        : "teams__side-lead"
                    }
                  >
                    <Tooltip
                      disableFocusListener
                      disableTouchListener
                      title={element.name}
                      arrow
                      placement="top"
                    >
                      <img src={element.img} alt="member" />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Pole Mecanique */}
        <div className="teams__side">
          {/* Title */}
          <div className="Title">
            <div className="title__container">
              <h1 className={isDarkModeActive ? "title dark" : "title"}>
                Pole Mécanique
              </h1>
              <img src={star} alt="star" className="starImg" />
            </div>
          </div>

          {/* Container */}
          <div className="teams__side-container">
            <div
              className={
                isDarkModeActive ? "teams__side-lead dark" : "teams__side-lead"
              }
            >
              <Tooltip
                disableFocusListener
                disableTouchListener
                title="Saad LAGHLIMI"
                arrow
                placement="top"
              >
                <img src={saad} alt="Leader" />
              </Tooltip>
            </div>
            <hr className={isDarkModeActive ? "hr dark" : "hr"} />
            <div className="teams__side-team">
              {mecanique.map((element) => {
                return (
                  <div
                    className={
                      isDarkModeActive
                        ? "teams__side-lead dark"
                        : "teams__side-lead"
                    }
                  >
                    <Tooltip
                      disableFocusListener
                      disableTouchListener
                      title={element.name}
                      arrow
                      placement="top"
                    >
                      <img src={element.img} alt="member" />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
