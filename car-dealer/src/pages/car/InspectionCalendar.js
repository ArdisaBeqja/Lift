import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const InspectionCalendar = ({
  inspectionDate,
  inspectionColor = "green",
  onCheck,
}) => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Handlers for prev/next month buttons
  const handlePrevMonth = () => {
    const newDate = new Date(calendarDate);
    newDate.setMonth(calendarDate.getMonth() - 1);
    setCalendarDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(calendarDate);
    newDate.setMonth(calendarDate.getMonth() + 1);
    setCalendarDate(newDate);
  };

  // Handler when user clicks "E keni kontrolluar objektin?"
  const handleCheckClick = () => {
    setShowModal(true);
    if (onCheck) {
      onCheck();
    }
  };

  const handleYes = () => {
    setModalMessage("Faleminderit që keni kontrolluar objektin!");
    setTimeout(() => setShowModal(false), 2000);
  };

  const handleNo = () => {
    setModalMessage("Ju lutem kryeni kontrollin sa më parë.");
    setTimeout(() => setShowModal(false), 2000);
  };

  // Calendar rendering logic
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const inspectionDay = inspectionDate.getDate();
  const inspectionMonth = inspectionDate.getMonth();
  const inspectionYear = inspectionDate.getFullYear();

  const weeks = [];
  let dayCounter = 1;

  for (let week = 0; week < 6; week++) {
    let days = [];
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if ((week === 0 && dayOfWeek < firstDayOfMonth) || dayCounter > daysInMonth) {
        days.push(
          <td
            key={`empty-${week}-${dayOfWeek}`}
            className="border"
            style={{ padding: "10px", minWidth: "40px", height: "40px" }}
          />
        );
      } else {
        const isInspectionDay =
          dayCounter === inspectionDay &&
          month === inspectionMonth &&
          year === inspectionYear;

        days.push(
          <td
            key={dayCounter}
            className={`border text-center align-middle ${
              isInspectionDay ? "bg-secondary text-white fw-bold rounded" : ""
            }`}
            style={{ padding: "10px", minWidth: "40px", height: "40px" }}
          >
            {dayCounter}
          </td>
        );
        dayCounter++;
      }
    }
    weeks.push(<tr key={week}>{days}</tr>);
    if (dayCounter > daysInMonth) break;
  }

  return (
    <div className="mt-4">
      <h5 className="mb-3">Kalendari i Kontrollit</h5>

      {/* Centered navigation buttons */}
      <div className="d-flex justify-content-center gap-3 mb-2">
        <Button variant="outline-primary" size="sm" onClick={handlePrevMonth}>
          ‹
        </Button>
        <Button variant="outline-primary" size="sm" onClick={handleNextMonth}>
          ›
        </Button>
      </div>

      {/* Centered Month and Year */}
      <div className="text-center fw-bold mb-3">
        {calendarDate.toLocaleString("default", { month: "long" })} {year}
      </div>

      <table
        className="table table-bordered text-center mb-2"
        style={{ tableLayout: "fixed" }}
      >
        <thead className="table-light">
          <tr>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <th key={d} className="fw-bold py-2">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{weeks}</tbody>
      </table>

      <div
        style={{ fontSize: "24px", color: inspectionColor }}
        className="d-flex align-items-center"
      >
        <span
          className="px-2 rounded-circle me-2"
          style={{
            fontSize: "14px",
            lineHeight: "1",
            backgroundColor:
              inspectionColor === "blue"
                ? "blue"
                : inspectionColor === "red"
                ? "red"
                : "green",
            color: "white",
          }}
        >
          ●
        </span>
        Dita e Kontrollit: {inspectionDate.toDateString()}
      </div>

      <Button variant="secondary" className="mt-3" onClick={handleCheckClick}>
        E keni kontrolluar objektin?
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Inspection Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage || "A jeni i sigurt?"}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleYes}>
            Po
          </Button>
          <Button variant="danger" onClick={handleNo}>
            Jo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InspectionCalendar;
