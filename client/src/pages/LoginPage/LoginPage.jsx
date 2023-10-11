import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { useTranslation } from "react-i18next";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { isDarkModeActive } = useContext(ThemeModeContext);
  const { t } = useTranslation();

  const { onChange, onSubmit, values } = useForm(loginCallback, {
    username: "",
    password: "",
  });

  const [loginUser] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      navigate("/");
      context.login(userData);
      console.log(userData);
    },
    variables: values,
  });

  function loginCallback() {
    loginUser();
  }

  return (
    <div className={isDarkModeActive ? "login-page dark" : "login-page"}>
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
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={onChange}
            />
          </div>
          <button
            className={isDarkModeActive ? "button-main dark" : "button-main"}
          >
            {t("labels.login")}
          </button>
        </form>
      </div>
    </div>
  );
};

const LOGIN_USER = gql`
  mutation register($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default LoginPage;
