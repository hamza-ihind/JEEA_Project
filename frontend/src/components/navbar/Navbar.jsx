import React from "react";
import "./Navbar.scss";
import LOGO from "../../assets/JEEA_logo.png";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={LOGO} alt="ENSA" className="navbar__img" />

        <ul className="navbar__links">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>

        <ul className="navbar__features">
          <li>
            <button className="navbar__button">L/D</button>
          </li>
          <li>
            <button className="navbar__button">FR</button>
          </li>
          <li>
            <button className="navbar__button">Contact us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
