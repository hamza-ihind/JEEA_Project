import React, { useContext } from "react";
import LOGO from "../../assets/JEEA_logo.png";
import "./ActivitiesPage.scss";
//assets
import star from "../../assets/star.svg";
import { AiFillCheckCircle } from "react-icons/ai";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const temp = [
  {
    title: "Poster Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic libero suscipit minima pariatur magnam omnis eligendi nam reprehenderit.",
    img: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic libero suscipit minima pariatur magnam omnis eligendi nam reprehenderit.",
  },
  {
    title: "E-commerce Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic libero suscipit minima pariatur magnam omnis eligendi nam reprehenderit.",
    img: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic libero suscipit minima pariatur magnam omnis eligendi nam reprehenderit.",
  },
  {
    title: "Rapport PFA",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic libero suscipit minima pariatur magnam omnis eligendi nam reprehenderit.",
    img: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic libero suscipit minima pariatur magnam omnis eligendi nam reprehenderit.",
  },
];

const ActivitiesPage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div id="ActivitiesPage" className="activities-page">
      {/* Services title: Browse Services */}
      <div className="Title">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            Browse Activities
          </h1>
          <img src={star} alt="star" className="starImg" />
        </div>
      </div>

      {/* Services Navbar */}
      <div className="navbar__activities">
        <div className="navbar__activities-container">
          <ul className="navbar__activities-links">
            <li>
              <a href="#">ALL</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Rtc</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Container Cards  */}
      <div className="activities__cards-container">
        {temp.map((element) => {
          return (
            <div className="activities__card">
              <h3 className="activities__card-title">{element.title}</h3>
              <p className="activities__card-desc">{element.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitiesPage;