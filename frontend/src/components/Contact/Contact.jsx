import React from "react";
import "./Contact.css"
const Footer = () => {
  return (
    
    <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fa fa-map-marker"></i>
          <div className="topic">Address</div>
          <div className="text-one">Surkhet, NP12</div>
          <div className="text-two">Birendranagar 06</div>
        </div>
        <div className="phone details">
          <i className="fa fa-phone"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fa fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">codinglab@gmail.com</div>
          <div className="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sed, iusto harum et officiis pariatur nesciunt </p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-box message-box">
        <input type="textarea" placeholder="Enter your message" />
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  
  );
};
export default Footer;

