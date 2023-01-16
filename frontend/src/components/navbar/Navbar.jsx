import React from "react";
import "./Navbar.scss";
import ENSA from '../../assets/ENSA.png'
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
      <img src={ENSA} alt="ENSA" className="navbar__img"/>
      <ul className="navbar__links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
