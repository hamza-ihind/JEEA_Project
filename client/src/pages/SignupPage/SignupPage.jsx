import React, { useState, useContext } from "react";
import "./SignupPage.scss";
//assets
import star from "../../assets/star.svg";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "../../hooks/useForm";

const SignupPage = () => {
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t, i18n } = useTranslation();

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className={isDarkModeActive ? "signup-page dark" : "signup-page"}>
      <div className="Title">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            We'll be happy if you joined us
          </h1>
          <img src={star} alt="star" className="starImg" />
        </div>
      </div>

      <div className="form__container">
        <form name="contactForm" className="signup" onSubmit={onSubmit}>
          <div className="input">
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Username"
              value={values.username}
              onChange={onChange}
            />
          </div>

          <div className="input">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={onChange}
            />
          </div>

          <div className="input">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={onChange}
            />
          </div>

          <div className="input">
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={onChange}
            />
          </div>

          <button
            className={isDarkModeActive ? "button-main dark" : "button-main"}
          >
            {t("signup.button")}
          </button>
        </form>
      </div>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default SignupPage;
