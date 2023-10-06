import React, { useContext, useRef } from "react";
import "./RecrutePage.scss";
import star from "../../assets/star.svg";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import Countdown from "../../components/Countdown/Countdown";

const RecrutePage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t } = useTranslation();
  const form = useRef();

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

  return (
    <div className={`recrute-page ${isDarkModeActive ? "dark" : ""}`}>
      <div className="recrutement">
        <div className="title__container">
          <h1 className={`title ${isDarkModeActive ? "dark" : ""}`}>
            {t("recrute.title")}
          </h1>
          <img src={star} alt="star" className="starImg" />
        </div>

        <div className="counter">
          <div className={`title__container ${isDarkModeActive ? "dark" : ""}`}>
            <Countdown />
          </div>
        </div>

        <div className="link">
          <div className={`title__container ${isDarkModeActive ? "dark" : ""}`}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEaO9OvH6W3ssZJ2njtio5SpKnppgx1fU11y1al5eeG-F2sw/viewform?usp=sf_link"
              target="_blank"
            >
              <h1 className={isDarkModeActive ? "title dark" : "title"}>
                {t("recrute.link")}
              </h1>
            </a>
          </div>
        </div>

        <div className="form-container">
          <div className="content">
            <div className="contact-text">
              <div className="title__container">
                <h1 className={`title ${isDarkModeActive ? "dark" : ""}`}>
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
                  />
                </div>
                <div className="name_input">
                  <input
                    type="text"
                    className="form-control"
                    name="Lastname"
                    id="Lastname"
                    placeholder="Your Lastname"
                  />
                </div>
              </div>

              <div className="input">
                <div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="input">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="input">
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
                className={`button-main ${isDarkModeActive ? "dark" : ""}`}
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
