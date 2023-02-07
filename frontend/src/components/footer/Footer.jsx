import React from "react";
import "./Footer.scss" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer-clean">
        <div className="content ">

        <div className="content_flex">
            <div className="left_side" >

                <div className="footer_nav top">
                    <ul>
                       <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </div>

                <div className="middle">
                   <div className="logo">
                    <h1>JEEA</h1>
                   </div>
                   <div class=" item_social">
                       <a href="#"><i class="fa fa-facebook"></i></a>
                       <a href="#"><i className="fa fa-twitter "></i></a>
                       <a href=""><i className="fa fa-linkedin"></i></a>
                       <a href="#"><i className="fa fa-instagram"></i></a>
                   </div>
                </div>
                
                <div className="footer_nav buttom">
                    <ul>
                       <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Report</a></li>
                    </ul>
                </div>
              
            </div>

            <div className="right_side " >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting . </p>
            <span>contact@JEEA.com</span>
            <span>(+212) 645-987-756</span>   
            </div>

        </div>

        </div>
   <p className="copyright">Copyright © JEEA | ENSA AGADIR </p>
</div>);
};
export default Footer;
