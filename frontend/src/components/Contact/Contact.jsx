import React from "react";
import "./Contact.scss";
import star from "../../assets/star.svg";
const Footer = () => {
  return (
    <div className="container">
      <div className="content">
          <div className="contact-text">
              <div className="title__container">
                <h1 className="title">CONTACT US</h1>
                <img src={star} alt="star" className="starImg" />
              </div>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
              sed, iusto harum et officiis{" "}
              </p>
          </div>
          <form
            method="POST"
            id="contactForm"
            name="contactForm"
            class="contactForm"
          >
            <div>
              <div className="Name_Area input">
                <div className="name_input">
                  {" "}
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="Firstname"
                    placeholder="Your Firstname"
                  />{" "}
                </div>
                <div className="name_input">
                  {" "}
                  <input
                    type="text"
                    class="form-control"
                    name="text"
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
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>

              <div className="submit_btn">
                {" "}
                <input type="submit" value="SUBMIT" />
              </div>
            </div>
          </form>
      </div>
    </div>
  );
};
export default Footer;
