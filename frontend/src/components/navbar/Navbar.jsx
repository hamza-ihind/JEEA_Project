import React from "react";
import "./Navbar.scss";
import LOGO from "../../assets/JEEA_logo.png";
// import {AiOutlineHome, AiOutlineBook, AiOutlineUser, MdMiscellaneousServices, HiOutlinePresentationChartBar, MdElectricalServices, AiOutlineContacts} from 'react-icons';
import { useState } from "react";

const Navbar = () => {
  // const [activeNav,setActiveNav] = useState('#')

  return (
    // <nav>
    //   <a className={activeNav === '#' ? 'active' : ''} href="#"><AiOutlineHome/></a>
    //   <a href="#Home" onClick={()=>setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : '' }><AiOutlineUser/></a>
    //   <a href="#Who-is-us" onClick={()=>setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active' : ''}><HiOutlinePresentationChartBar/></a>
    //   <a href="#Services" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''}><MdElectricalServices/></a>
    //   <a href="#Contact" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    // </nav>

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
