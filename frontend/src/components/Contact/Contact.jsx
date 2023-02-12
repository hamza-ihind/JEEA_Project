import React from "react";
import "./Contact.scss";
import star from "../../assets/star.svg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Footer = (props) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g4q2e5n",
        "template_14eom8v",
        form.current,
        "urJJ-zITTzUwicVvq"
      )
      .then(
        (result) => {
          console.log("success");
        },
        (error) => {
          console.log("failed", error);
        }
      );
  };
  const form = useRef();

  return (
    <div className={props.isDarkMode ? 'container dark' : 'container light'}>
      <div className="content">
        <div className="contact-text">
          <div className="title__container">
            <h1 className="title">CONTACT US</h1>
            <img src={star} alt="star" className="starImg" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            sed, iusto harum et officiis
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          method="POST"
          id="contactForm"
          name="contactForm"
          className="contactForm"
        >
          <div>
            <div className="Name_Area input">
              <div className="name_input">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  name="Firstname"
                  id="Firstname"
                  placeholder="Your Firstname"
                />{" "}
              </div>
              <div className="name_input">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  name="Lastname"
                  id="Lastname"
                  placeholder="Your Lastname"
                />{" "}
              </div>
            </div>

            <div className="input">
              <div>
                {" "}
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />{" "}
              </div>
            </div>

            <div className="input">
              <div>
                {" "}
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />{" "}
              </div>
            </div>

            <div className="input ">
              <div>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            <div className="submit_btn">
              <input type="submit" value="SUBMIT" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Footer;
