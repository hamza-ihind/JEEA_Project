import React, { useContext } from "react";
import "./TeamsPage.scss";
//assets
import star from "../../assets/star.svg";

import hamza from "../../assets/Members/ihind.jpg";
import aqnouch from "../../assets/Members/aqnouch.jpeg";

import { AiFillCheckCircle } from "react-icons/ai";
import Tooltip from '@mui/material/Tooltip';

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { info, design, rtc } from "../../database/Members";

const TeamsPage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div id="TeamsPage" className="teams">
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
            <h1 className="title">Pole Informatique</h1>
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
              title="Hamza Ihind"
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
            <h1 className="title">Pole Design</h1>
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
              title="Ali Zagdi"
              arrow
              placement="top"
            >
              <img src={hamza} alt="Leader" />
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
            <h1 className="title">Pole RTC</h1>
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
              title="Samia Aqnouch"
              arrow
              placement="top"
            >
              <img src={aqnouch} alt="Leader" />
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
    </div>
  );
};

export default TeamsPage;
