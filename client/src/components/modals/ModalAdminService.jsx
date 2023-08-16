import React, { useState } from "react";
import "./Modal.scss";

function ModalAdminService({ isOpen, onClose }) {
  const [serviceData, setServiceData] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
    body: "",
  });

  const handleFieldChange = (field, value) => {
    setServiceData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const fields = [
    { label: "Title", field: "title", type: "text" },
    { label: "Location", field: "location", type: "text" },
    { label: "Date", field: "date", type: "text" },
    { label: "Description", field: "description", type: "textarea" },
    { label: "Body", field: "body", type: "textarea" },
  ];

  return (
    <div className={`custom-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h1>Ajouter un service</h1>
        <form>
          {fields.map(({ label, field, type }) => (
            <div key={field} className="form-group">
              <label htmlFor={field}>{label}:</label>
              {type === "textarea" ? (
                <textarea
                  id={field}
                  value={serviceData[field]}
                  onChange={(e) => handleFieldChange(field, e.target.value)}
                  required
                />
              ) : (
                <input
                  type={type}
                  id={field}
                  value={serviceData[field]}
                  onChange={(e) => handleFieldChange(field, e.target.value)}
                  required
                />
              )}
            </div>
          ))}
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalAdminService;
