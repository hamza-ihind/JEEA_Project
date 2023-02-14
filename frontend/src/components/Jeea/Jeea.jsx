import React from "react";

import "./Jeea.scss";

//assets
import jeea from "../../assets/jeea.svg";
import star from "../../assets/star.svg";

const Jeea = (props) => {
  return (
    <section id="JEEA" className={props.isDarkMode ? 'jeea dark' : 'jeea light'}>
      <div className="jeea__container">
        <div className="title__container">
          <h1 className="title">WHO ARE WE?</h1>

          <img src={star} alt="star" className="starImg" />
        </div>
        <div className="content">
          <p className="paragraph">
            CJEM (Confédération des Juniors Entreprises Marocaines) est la
            structure fédératrice du mouvement Junior-Entrepreneuriat à
            l'échelle marocaine dans le but de promouvoir le concept des JEs
            (Junior Enterprises) au niveau national, mais aussi faire en sorte
            que le statut du JE soit juridiquement reconnu et valorisé auprès
            des entreprises. Pour plus d'informations : https://cjem.ma/
          </p>

          <img src={jeea} alt="img" className="jeeaImg" />
        </div>
      </div>
    </section>
  );
};

export default Jeea;
