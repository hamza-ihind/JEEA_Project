import React, { useContext } from "react";
import "./Contact.scss";
import back from "../../assets/GIF.gif";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

//context
import { ThemeModeContext } from "../../contexts/ThemeModeContext";

const Footer = (props) => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Service_JEEA_Agadir",
        "Template_JEEA_Agadir",
        form.current,
        "hcOXqMAVlCzSmuxSw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const form = useRef();

  return (
    <div className="contact" id="CONTACTUS">
      <img
        src={back}
        alt="back"
        className={isDarkModeActive ? "contact__back dark" : "contact__back"}
      />
      <div className="container">
        <div className="content">
          <div className="contact-text">
            <div className="title__container">
              <h1 className={isDarkModeActive ? "title dark" : "title"}>
                {t("contact.title")}
              </h1>
            </div>
            <p>{t("contact.text")}</p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            id="contactForm"
            name="contactForm"
            className="contactForm"
          >
            <div className="Name_Area input">
              <div className="name_input">
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

            <button
              className={isDarkModeActive ? "button-main dark" : "button-main"}
            >
              {t("contact.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
