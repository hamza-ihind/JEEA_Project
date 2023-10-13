import React from "react";
import { MotionWrap, AppWrap } from "../../wrapper";
import assets from "../../constants/assets";
import Title from "../Title/Title";

import "./Poles.scss";

const poles = [
  {
    img: assets.design,
    name: "DESIGN",
    desc: "La Confédération des Junior-Entreprises Marocaines(CJEM) a été créée pour promouvoir le concept des JEs au",
  },
  {
    img: assets.web,
    name: "WEB DEV",
    desc: "La Confédération des Junior-Entreprises Marocaines(CJEM) a été créée pour promouvoir le concept des JEs au",
  },
  {
    img: assets.rtc,
    name: "RTC",
    desc: "La Confédération des Junior-Entreprises Marocaines(CJEM) a été créée pour promouvoir le concept des JEs au",
  },
];

const Poles = () => {
  return (
    <div className="poles" id="poles">
      <Title img={assets.chess1} text="OUR SERVICES" />
      <div className="poles__container">
        {poles.map((pole, index) => {
          return (
            <div
              className="poles__container-unit"
              key={index}
              style={{ padding: index === 1 ? "4rem 5rem" : "3rem 4rem" }}
            >
              <img
                src={pole.img}
                alt={pole.img}
                style={{
                  width:
                    index === 2
                      ? "50px"
                      : "100px" && index === 1
                      ? "150px"
                      : "100px",
                }}
              />
              <h1 className="poles__container-name">{pole.name}</h1>
              <p className="poles__container-desc">{pole.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Poles, "poles"));
