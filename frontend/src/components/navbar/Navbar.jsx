import React from "react";
import "./Navbar.css";
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineBook} from 'react-icons/ai';
import {MdMiscellaneousServices} from 'react-icons/md';
import {AiOutlineContacts} from 'react-icons/ai';
import {HiOutlinePresentationChartBar} from 'react-icons/hi';
import {MdElectricalServices} from 'react-icons/md';
import { useState } from "react";

const Navbar = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
  <nav>
    <a className={activeNav=== '#' ? 'active' : ''} href="#"><AiOutlineHome/></a>
    <a href="#Home" onClick={()=>setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#Who-is-us" onClick={()=>setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active' : ''}><HiOutlinePresentationChartBar/></a>
    <a href="#Services" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''}><MdElectricalServices/></a>
    <a href="#Contact" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    
  </nav>);
};
export default Navbar;
