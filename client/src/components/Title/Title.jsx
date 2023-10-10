import React from "react";

import "./Title.scss";

const Title = ({ text, img }) => {
  return (
    <div className="title__container">
      <h1 className="title">{text}</h1>
      <img src={img} alt="CHESS" />
    </div>
  );
};

export default Title;
