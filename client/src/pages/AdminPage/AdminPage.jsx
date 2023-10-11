import React, { useState, useContext } from "react";
import "./AdminPage.scss";

import { motion, useScroll, useSpring } from "framer-motion";

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
      <div className="admin">
        <motion.div
          className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
          style={{ scaleX }}
        />
        {/* Greeting the admin*/}

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
