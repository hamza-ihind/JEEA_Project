import React from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Footer = () => {
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
    <div className="container">
      <div className="content">
        <div>
          <div className="contact-text">
            <h1 className="Contact_us"> CONTACT US </h1>
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
            class="contactForm"
          >
            <div>
              <div className="Name_Area input">
                <div className="name_input">
                  {" "}
                  <input
                    type="text"
                    class="form-control"
                    name="Firstname"
                    id="Firstname"
                    placeholder="Your Firstname"
                  />{" "}
                </div>
                <div className="name_input">
                  {" "}
                  <input
                    type="text"
                    class="form-control"
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
                <input type="submit" value="SUBMIT" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
