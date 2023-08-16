import React from "react";
import "./Modal.scss";

function ModalAdminProject({ isOpen, onClose }) {
  // Logic for fetching data and add them to database

  return (
    <div className={`custom-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        {/* Make the form here */}
        <h1>Project</h1>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalAdminProject;
