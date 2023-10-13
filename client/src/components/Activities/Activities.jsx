import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MotionWrap, AppWrap } from "../../wrapper";
import "./Activities.scss";
import assets from "../../constants/assets";
import Title from "../Title/Title";
import Card from "../Card/Card";

import { useTranslation } from "react-i18next";

import { News } from "../../database/News";

const Activities = () => {
  const { t } = useTranslation();

  return (
    <div id="activities" className="activities">
      <Title img={assets.chess1} text="NEWS AND ACTIVITIES" />

      <div className="activities__container">
        {News.map((element) => {
          return (
            <Card
              img={element.img}
              title={element.title}
              text={element.text}
              label={element.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Activities, "activities"));
