import React, { useContext } from "react";
import "./BureauPage.scss";
import star from "../../assets/star.svg";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { Bureau } from "../../database/Bureau";

const BureauPage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const renderBureauMembers = (positions) => {
    return positions.map((position, index) => (
      <div className="bureau__card-container" key={index}>
        <div className={`bureau__card-img ${isDarkModeActive ? "dark" : ""}`}>
          <img src={position.img} alt="Leader" />
        </div>
        <h1 className={`bureau__card-name ${isDarkModeActive ? "dark" : ""}`}>
          {position.name}
        </h1>
        <p className="bureau__card-post">{position.post}</p>
      </div>
    ));
  };

  const bureauPositions = [
    ["Président", "Vice-présidente"],
    ["Secretaire générale", "Trésorière", "Respo. Formations"],
    ["Respo. Prospeection", "Respo. RH", "Respo. Communication"],
    ["Respo. Evénementiel", "Respo. Logistiques", "Respo. Qualité"],
    ["Respo. Média (Design)", "Respo. Média (Montage)"],
  ];

  return (
    <div className={`bureau-page ${isDarkModeActive ? "dark" : ""}`}>
      <div className="bureau">
        <div className="Title">
          <div className="title__container">
            <h1 className={`title ${isDarkModeActive ? "dark" : ""}`}>
              MEET THE TEAM!
            </h1>
            <img src={star} alt="star" className="starImg" />
          </div>
        </div>

        {bureauPositions.map((positions, index) => (
          <div className={`bureau__line${index === 0 ? "2" : "3"}`} key={index}>
            {renderBureauMembers(
              Bureau.filter((element) => positions.includes(element.post))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BureauPage;
