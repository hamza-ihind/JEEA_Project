import React, { useContext } from "react";
import "./Contact.scss";
import star from "../../assets/star.svg";
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
    <div className="container" id="CONTACTUS">
      <div className={isDarkModeActive ? "content dark" : "content light"}>
        <div className="contact-text">
          <div className="title__container">
            <h1 className={isDarkModeActive ? "title dark" : "title"}>
              {t("contact.title")}
            </h1>
            <img src={star} alt="star" className="starImg" />
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

          <button
            className={isDarkModeActive ? "button-main dark" : "button-main"}
          >
            {t("contact.button")}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Footer;
