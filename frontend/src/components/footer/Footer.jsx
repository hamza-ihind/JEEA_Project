import React from "react";
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer-clean">
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Jeea</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Legacy</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>Careers</h3>
                    <ul>
                        <li><a href="#">Job openings</a></li>
                        <li><a href="#">Employee success</a></li>
                        <li><a href="#">Benefits</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 item social">
                    <a href="#"><i className="fa fa-github"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook "></i></a>
                    <a href="#"><i className="fa fa-twitter "></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <p className="copyright"><b>ENSA AGADIR : </b> JEEA © 2022</p>
                </div>
            </div>
        </div>
   
</div>);
};
export default Footer;
