import React from "react";

const AppWrap = (Component, classNames, idName) =>
  function HOC() {
    return (
      <div id={idName} className={idName}>
        <div>
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
