import React, { Fragment, useContext } from "react";
import { ThemeModeContext } from "../contexts/ThemeModeContext";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  return (
    <Fragment>
      <h1
        style={{ padding: "1.5rem 2.5rem", width: "100%" }}
        className={isDarkModeActive ? "title dark" : "title"}
      >
        {timerDays} DAYS, {timerHours} Hours, {timerMinutes} Minutes,{" "}
        {timerSeconds} Seconds
      </h1>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
