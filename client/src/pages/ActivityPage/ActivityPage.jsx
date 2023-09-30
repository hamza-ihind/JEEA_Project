import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Activities } from "../../database/Activities";

// Styles
import "./ActivityPage.scss";
import star from "../../assets/star.svg";

import { useTranslation } from "react-i18next";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";

function ActivityPage() {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { id } = useParams();
  const activityId = parseInt(id);
  const activity = Activities.find((p) => p.id === activityId);

  if (!activity) {
    return <div>activity not found</div>;
  }

  return (
    <div className={isDarkModeActive ? "activity-page dark" : "activity-page"}>
      <div className="activity-page__container">
        <div className="activity-page__img">
          <img src={activity.img} alt="img" />
        </div>
        <h2 className="activity-page__title">
          {activity.title}
          <p className="activity-page__info">{activity.info}</p>
        </h2>
        <p className="activity-page__desc">{activity.desc}</p>
      </div>
    </div>
  );
}

export default ActivityPage;
