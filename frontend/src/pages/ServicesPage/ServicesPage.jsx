import React, { useContext } from "react";
import "./ServicesPage.scss";
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

const ServicesPage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div id="ServicesPage" className="services-page">
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
      <div className="services__cards-container">
        {temp.map((element) => {
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
      </div>
    </div>
  );
};

export default ServicesPage;
