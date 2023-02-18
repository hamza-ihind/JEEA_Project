import React, { useContext } from "react";
import "./TeamsPage.scss";
//assets
import star from "../../assets/star.svg";
import test from "../../assets/test.jpg";

import { AiFillCheckCircle } from "react-icons/ai";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const temp = [
  {
    name: "hamza",
    photo: "../../assets/cjem.png",
  },
  {
    name: "hamza",
    photo: "../../assets/cjem.png",
  },
  {
    name: "hamza",
    photo: "../../assets/cjem.png",
  },
  {
    name: "hamza",
    photo: "../../assets/cjem.png",
  },
  {
    name: "hamza",
    photo: "../../assets/cjem.png",
  },
  {
    name: "hamza",
    photo: "../../assets/cjem.png",
  },
];

const TeamsPage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div id="TeamsPage" className="teams">
      {/* Services title: Teams */}
      <div className="Title">
        <div className="title__container">
          <h1 className="title">Teams</h1>
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
          <div className="teams__side-lead">
            <img src={test} alt="cjem" />
          </div>
          <hr className="hr" />
          <div className="teams__side-team">
            {temp.map((element) => {
              return (
                <div className="teams__side-lead">
                  <img src={test} alt="member" />
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
          <div className="teams__side-lead">
            <img src={test} alt="cjem" />
          </div>
          <hr className="hr" />
          <div className="teams__side-team">
            {temp.map((element) => {
              return (
                <div className="teams__side-lead">
                  <img src={test} alt="member" />
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
          <div className="teams__side-lead">
            <img src={test} alt="cjem" />
          </div>
          <hr className="hr" />
          <div className="teams__side-team">
            {temp.map((element) => {
              return (
                <div className="teams__side-lead">
                  <img src={test} alt="member" />
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
