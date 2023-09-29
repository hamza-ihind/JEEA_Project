import React, { useState, useContext } from "react";
import "./AdminPage.scss";
//assets
import star from "../../assets/star.svg";
import back from "../../assets/hmzt.mp4";

import { motion, useScroll, useSpring } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import ModalAdminProject from "../../components/modals/ModalAdminProject";
import ModalAdminService from "../../components/modals/ModalAdminService";
import ModalAdminActivity from "../../components/modals/ModalAdminActivity";

const AdminPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  // Modals STATES
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openServiceModal = () => {
    setIsServiceModalOpen(true);
  };
  const openProjectModal = () => {
    setIsProjectModalOpen(true);
  };
  const openActivityModal = () => {
    setIsActivityModalOpen(true);
  };

  const closeModal = () => {
    setIsActivityModalOpen(false);
    setIsProjectModalOpen(false);
    setIsServiceModalOpen(false);
  };

  return (
    <div className="admin-page">
      <img
        src={back}
        alt="back"
        className={
          isDarkModeActive ? "admin-page__back1 dark" : "admin-page__back1"
        }
      />
      <img
        src={back}
        alt="back"
        className={
          isDarkModeActive ? "admin-page__back2 dark" : "admin-page__back2"
        }
      />
      <img
        src={back}
        alt="back"
        className={
          isDarkModeActive ? "admin-page__back3 dark" : "admin-page__back3"
        }
      />
      <div className="admin">
        <motion.div
          className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
          style={{ scaleX }}
        />
        {/* Greeting the admin*/}
        <div className="Title">
          <div className="title__container">
            <h1 className={isDarkModeActive ? "title dark" : "title"}>
              Welcome Hamza Ihind
            </h1>
            <img src={star} alt="star" className="starImg" />
          </div>
        </div>

        {/* Cards for adding Data */}
        <div className="admin__cards">
          <div className="admin__card">
            <h5>Ajouter un projet</h5>
            <button
              onClick={openProjectModal}
              className={isDarkModeActive ? "button-main dark" : "button-main"}
            >
              AJOUTER
            </button>
          </div>
          <div className="admin__card">
            <h5>Ajouter une Activité</h5>
            <button
              onClick={openActivityModal}
              className={isDarkModeActive ? "button-main dark" : "button-main"}
            >
              AJOUTER
            </button>
          </div>
          <div className="admin__card">
            <h5>Ajouter une service</h5>
            <button
              onClick={openServiceModal}
              className={isDarkModeActive ? "button-main dark" : "button-main"}
            >
              AJOUTER
            </button>
          </div>
        </div>
      </div>
      <ModalAdminProject isOpen={isProjectModalOpen} onClose={closeModal} />
      <ModalAdminActivity isOpen={isActivityModalOpen} onClose={closeModal} />
      <ModalAdminService isOpen={isServiceModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AdminPage;
