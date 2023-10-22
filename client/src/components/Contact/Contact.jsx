import React from "react";
import "./Contact.scss";

import Title from "../Title/Title";
import assets from "../../constants/assets";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact" id="contact">
      <Title text={t("contact.title")} img={assets.chess1} />
      <div className="contact__container">
        {/* INFO PART */}
        <div className="contact__container-info">
          <h2 className="contact__container-info-title">
            {t("contact.title")}
          </h2>
          <h6 className="contact__container-info-label">{t("contact.text")}</h6>
          <div className="contact__container-info-list">
            <h4 className="contact__container-info-item">
              <img src={assets.phone} alt="icon" />
              +212 621-075329
            </h4>
            <h4 className="contact__container-info-item">
              <img src={assets.mail} alt="icon" />
              <a href="#">jeea.contact@gmail.com</a>
            </h4>
            <h4 className="contact__container-info-item">
              <img src={assets.location} alt="icon" />
              ENSA Agadir, Avenue Tamsoult, Agadir 80000
            </h4>
          </div>
          <div className="hero__content-socials">
            <a href="https://www.facebook.com/JEEA.ENSAA">
              <img src={assets.facebook} alt="FACEBOOK" />
            </a>
            <a href="https://www.instagram.com/jeea.ensaa/">
              <img src={assets.instagram} alt="INSTAGRAM" />
            </a>
            <a href="https://www.linkedin.com/company/jeea-ensaa/">
              <img src={assets.linkedin} alt="LINKEDIN" />
            </a>
          </div>
        </div>
        {/* FORM PART */}
        <div className="contact__container-form">
          <div className="contact__container-form-names">
            <div className="form__group">
              <input
                type="input"
                className="form__field"
                placeholder="First Name"
                name="firstname"
                id="firstname"
                required
              />
              <label for="firstname" class="form__label">
                First name
              </label>
            </div>
            <div className="form__group">
              <input
                type="input"
                className="form__field"
                placeholder="Last Name"
                name="lastname"
                id="lastname"
                required
              />
              <label for="lastanme" class="form__label">
                Last name
              </label>
            </div>
          </div>
          <div className="form__group-email">
            <input
              type="input"
              className="form__field"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <label for="email" class="form__label">
              Email
            </label>
          </div>
          <div className="form__group-text">
            <textarea
              type="input"
              className="form__text"
              placeholder="Your message"
              name="message"
              id="message"
              required
            />
            <label for="message" class="form__label">
              Message
            </label>
          </div>
          <button className="button-main">{t("contact.button")}</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
