import React, { useState, useContext } from "react";
import "./RecrutePage.scss";
//assets
import star from "../../assets/star.svg";
import { AiFillCheckCircle } from "react-icons/ai";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { motion, useScroll, useSpring } from "framer-motion";
import { Services } from "../../database/Services";
import Countdown from "../../components/Countdown/Countdown";

const RecrutePage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { scrollYProgress } = useScroll();
  const { t, i18n } = useTranslation();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

  console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365));

  return (
    <div className={isDarkModeActive ? "recrute-page dark" : "recrute-page"}>
      <div className="recrutement">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            {t("recrute.title")}
          </h1>
          <img src={star} alt="star" className="starImg" />
        </div>

        <div className="counter">
          <div
            className={
              isDarkModeActive ? "title__container dark" : "title__container"
            }
          >
            <Countdown />
          </div>
        </div>

        <div className="form-container">
          <div className="content">
            <div className="contact-text">
              <div className="title__container">
                <h1 className={isDarkModeActive ? "title dark" : "title"}>
                  {t("recrute.form")}
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
                className={
                  isDarkModeActive ? "button-main dark" : "button-main"
                }
              >
                {t("contact.button")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecrutePage;
