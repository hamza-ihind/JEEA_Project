import React from "react";

import "./Card.scss";

const Card = ({ img, label, title, text }) => {
  const truncatedText = text.length > 140 ? text.slice(0, 140) + "..." : text;

  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={img} />
      </div>
      <div className="card__container">
        <div className="card__container-label">{label}</div>
        <h1 className="card__container-title">{title}</h1>
        <p className="card__container-text">{truncatedText}</p>
        <button className="button-main">Learn more...</button>
      </div>
    </div>
  );
};

export default Card;
