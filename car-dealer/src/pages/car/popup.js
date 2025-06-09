import React, { useState, useEffect } from "react";

const InspectionPopup = ({ inspectionDate, inspectionCheckedInitial, onMarkChecked }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [inspectionChecked, setInspectionChecked] = useState(inspectionCheckedInitial);

  const today = new Date();
  const inspection = new Date(inspectionDate);

  // Check if inspection date is before today
  const isPastDue = inspection < today;

  const handleMarkChecked = () => {
    setInspectionChecked(true);
    onMarkChecked(); // callback to update parent or backend
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: isPastDue ? "red" : "blue",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      {isPastDue && <p><strong>Ka kaluar afati per kontroll</strong></p>}
      <p>Data e Inspektimit: {inspection.toLocaleDateString()}</p>

      {!inspectionChecked ? (
        <button
          onClick={handleMarkChecked}
          style={{
            marginTop: "15px",
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: "#28a745", // green
            color: "white",
            fontWeight: "bold",
          }}
        >
          Marko si e kontrolluar
        </button>
      ) : (
        <p style={{ marginTop: "15px", color: "#28a745", fontWeight: "bold" }}>
          Inspektimi është shënuar si i kontrolluar
        </p>
      )}
    </div>
  );
};

export default InspectionPopup;
