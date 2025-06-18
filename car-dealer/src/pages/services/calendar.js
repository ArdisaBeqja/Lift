import React, { useEffect, useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import dayjs from "dayjs";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "bootstrap/js/dist/modal";
import "./CalendarStyles.css";
import InspectionStats from "./InspectionStatus";

const InspectionCalendar = () => {
  const [inspectionData, setInspectionData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [carAttributes, setCarAttributes] = useState([]);
  const modalRef = useRef();
  const fullscreenModalRef = useRef();

  useEffect(() => {
    const fetchInspections = async () => {
      try {
        const res = await axios.get("https://lift-4s9g.onrender.com/api/inspections");
        setInspectionData(res.data);
      } catch (err) {
        console.error("Failed to fetch inspections:", err);
      }
    };

    fetchInspections();
  }, []);

  const formatDate = (d) => dayjs(d).format("YYYY-MM-DD");

  const tileClassName = ({ date: tileDate, view }) => {
    if (view !== "month") return null;

    const tile = formatDate(tileDate);
    const today = dayjs().format("YYYY-MM-DD");

    const inspectionsOnDate = inspectionData.filter(
      (entry) => formatDate(entry.inspectionDate) === tile
    );

    if (tile === today) return "bg-grey";
    if (inspectionsOnDate.length > 1) return "bg-lightblue";
    if (inspectionsOnDate.length === 1) {
      return inspectionsOnDate[0].inspectionChecked ? "bg-green" : "bg-red";
    }

    return null;
  };

  const handleDateClick = async (clickedDate) => {
    setDate(clickedDate);
    const formatted = formatDate(clickedDate);

    try {
      const { data } = await axios.get(`https://lift-4s9g.onrender.com/api/cars/by-date/${formatted}`);
      const filteredData = data.map((car) => ({
        id: car._id || car.id,
        liftName: car.liftName,
        description: car.description,
        liftPrice: car.liftPrice,
        attributes: (car.attributes || []).map((a) => ({
          title: a.title,
          specification: a.specification,
        })),
      }));

      setCarAttributes(filteredData);

      if (modalRef.current) {
        const modal = new Modal(modalRef.current);
        modal.show();
      }
    } catch (err) {
      console.error("Failed to fetch car details by date:", err);
      setCarAttributes([]);
    }
  };

  const getStatusClass = (inspectionsForDate) => {
    const isChecked = inspectionsForDate.some((insp) => insp.inspectionChecked);
    return isChecked ? "bg-green" : "bg-red";
  };

  const groupedByDate = inspectionData.reduce((acc, inspection) => {
    const formatted = formatDate(inspection.inspectionDate);
    if (!acc[formatted]) {
      acc[formatted] = [];
    }
    acc[formatted].push(inspection);
    return acc;
  }, {});

  const uniqueInspectionDates = Object.keys(groupedByDate).sort();
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 4;

  const paginatedDates = uniqueInspectionDates.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const handlePrev = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxPage = Math.ceil(uniqueInspectionDates.length / pageSize) - 1;
    setPageIndex((prev) => Math.min(prev + 1, maxPage));
  };

  const openFullscreen = () => {
    if (fullscreenModalRef.current) {
      const modal = new Modal(fullscreenModalRef.current);
      modal.show();
    }
  };

  return (
    <div className="container p-4 bg-white shadow-md rounded-md max-w-5xl mx-auto">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5>Kalendari</h5>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={openFullscreen}
            >
              Fullscreen
            </button>
          </div>
          <Calendar
            onChange={handleDateClick}
            value={date}
            tileClassName={tileClassName}
            tileContent={({ date: tileDate }) => {
              const formatted = formatDate(tileDate);
              const count = inspectionData.filter(
                (entry) => formatDate(entry.inspectionDate) === formatted
              ).length;
              return count > 1 ? (
                <div className="text-center small text-dark fw-bold">{count}</div>
              ) : null;
            }}
          />
        </div>

        <div className="col-md-6">
          <h5>Datat e Kontrollit</h5>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <button className="btn btn-outline-primary btn-sm" onClick={handlePrev} disabled={pageIndex === 0}>
              &lt;
            </button>
            <span>
              Page {pageIndex + 1} of {Math.ceil(uniqueInspectionDates.length / pageSize)}
            </span>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={handleNext}
              disabled={(pageIndex + 1) * pageSize >= uniqueInspectionDates.length}
            >
              &gt;
            </button>
          </div>

          <div className="list-group overflow-auto border rounded" style={{ maxHeight: "400px" }}>
            {paginatedDates.length === 0 && <p>No inspection dates found.</p>}
            {paginatedDates.map((formattedDate) => {
              const inspections = groupedByDate[formattedDate];
              const today = dayjs().format("YYYY-MM-DD");
              const isToday = formattedDate === today;
              const statusClass = getStatusClass(inspections);

              const classNames = [
                "list-group-item",
                isToday ? "bg-grey" : statusClass,
                "d-flex",
                "justify-content-between",
                "align-items-center",
              ].join(" ");

              return (
                <button
                  key={formattedDate}
                  type="button"
                  className={classNames}
                  onClick={() => handleDateClick(new Date(formattedDate))}
                >
                  {formattedDate}
                  <span
                    className={`badge rounded-pill ${statusClass === "bg-green" ? "bg-success" : "bg-danger"}`}
                  >
                    {statusClass === "bg-green" ? "Checked" : "Unchecked"}
                  </span>
                  {isToday && <small className="text-muted ms-2">(Today)</small>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal for Lift Attributes */}
      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title">Lift Attributes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {carAttributes.length > 0 ? (
                carAttributes.map((car, index) => (
                  <div key={car.id || index} className="mb-3">
                    <h6 className="mb-1">Lift {index + 1}</h6>
                    <p><strong>Lift Name:</strong> {car.liftName}</p>
                    <p><strong>Description:</strong> {car.description}</p>
                    <p><strong>Price:</strong> {car.liftPrice}</p>
                    <ul className="list-group">
                      {car.attributes.map((attr, idx) => (
                        <li key={idx} className="list-group-item">
                          <strong>{attr.title}:</strong> {attr.specification}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p>No attributes available for this date.</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <div className="modal fade" ref={fullscreenModalRef} tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Fullscreen Calendar</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center bg-light">
              <Calendar
                onChange={handleDateClick}
                value={date}
                tileClassName={tileClassName}
                tileContent={({ date: tileDate }) => {
                  const formatted = formatDate(tileDate);
                  const count = inspectionData.filter(
                    (entry) => formatDate(entry.inspectionDate) === formatted
                  ).length;
                  return count > 1 ? (
                    <div className="text-center small text-dark fw-bold">{count}</div>
                  ) : null;
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <InspectionStats inspectionData={inspectionData} />
        </div>
      </div>
    </div>
  );
};

export default InspectionCalendar;
