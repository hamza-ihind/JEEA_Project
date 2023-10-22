import React, { useContext } from "react";
import "./Footer.scss";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Footer = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className="footer" id="footer">
      <div className="footer__elements">
        <ul>
          <li>
            <a href="#">JE Contract</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Report</a>
          </li>
        </ul>
        <p>JEEA, Votre compagnon de confiance! </p>
      </div>
      <hr />
      <p className="footer__copyright">
        Copyright © JEEA | Created by ZEUS & E11even
      </p>
    </div>
  );
};
export default Footer;
