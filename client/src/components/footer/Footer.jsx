import React, { useContext } from "react";
import "./Footer.scss";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div
      className={isDarkModeActive ? "footer-clean dark" : "footer-clean light"}
    >
      <div className="content ">
        <div className="content_flex">
          <div className="left_side">
            <ul className="footer_nav top">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>

            <div className="footer_nav middle">
              <div className="logo">
                <h1>JEEA</h1>
              </div>
              <div className=" item_social">
                <a href="https://www.facebook.com/JEEA.ENSAA">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/jeea-ensaa/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/jeea.ensaa/">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>

            <ul className="footer_nav bottom">
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>

          <div className="right_side ">
            <p>JEEA, Votre compagnon de confiance! </p>
            <span>jeea.contact@gmail.com</span>
            <span>+212 621-07 5329</span>
          </div>
        </div>
      </div>
      <p className={isDarkModeActive ? "copyright dark" : "copyright"}>
        Copyright © JEEA | ENSA AGADIR{" "}
      </p>
    </div>
  );
};
export default Footer;
