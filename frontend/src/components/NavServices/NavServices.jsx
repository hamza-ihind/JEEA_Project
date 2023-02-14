import React from 'react'
import LOGO from "../../assets/JEEA_logo.png";



//assets 
import star from "../../assets/star.svg"

const NavServices = () => {
  return (
        <nav className="navbar">
            <div className="navbar__Container">
                <img src={LOGO} alt="ENSA" className="navbar__Img" />
                <ul className="navbar__Links">
                    <li>
                        <a href="#">ALL</a>
                    </li>
                    <li>
                        <a href="#">Design</a>
                     </li>
                    <li>
                        <a href="#">Rtc</a>
                    </li>
                    <li>
                        <a href="#">Web Devlopment</a>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default NavServices;