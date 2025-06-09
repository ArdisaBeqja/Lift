import React, { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const InspectionStats = () => {
  const [inspectionData, setInspectionData] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const [barData, setBarData] = useState(null);
  const [dateFilteredData, setDateFilteredData] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);

  useEffect(() => {
    const fetchInspectionData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/cars");
        setInspectionData(response.data);

        // Extract unique inspection dates
        const dates = [
          ...new Set(
            response.data
              .map((car) => new Date(car.inspectionDate).toISOString().split("T")[0])
          ),
        ];
        setUniqueDates(dates.sort());
      } catch (error) {
        console.error("Error fetching inspection data:", error);
      }
    };

    fetchInspectionData();
  }, []);

  const handleDateClick = async (date) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/cars/by-date/${date}`);
      setDateFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching cars by date:", error);
      setDateFilteredData([]);
    }
  };

  const handleAttributeClick = (title) => {
    setSelectedAttribute(title);

    const specCount = {};

    inspectionData.forEach((obj) => {
      const attr = obj.attributes.find((a) => a.title === title);
      if (attr) {
        specCount[attr.specification] = (specCount[attr.specification] || 0) + 1;
      }
    });

    setBarData({
      labels: Object.keys(specCount),
      datasets: [
        {
          label: `Specification counts for "${title}"`,
          data: Object.values(specCount),
          backgroundColor: "#007bff",
        },
      ],
    });
  };

  const generateSummaryPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Inspection Summary Report", 14, 20);
    let startY = 30;

    inspectionData.forEach((obj, index) => {
      doc.setFontSize(12);
      doc.text(`Lift Name: ${obj.liftName}`, 14, startY);
      doc.text(`Description: ${obj.description || "N/A"}`, 14, startY + 7);
      doc.text(`Price: ${obj.liftPrice || "N/A"}`, 14, startY + 14);
      doc.text(
        `Inspection Date: ${new Date(obj.inspectionDate).toLocaleDateString()}`,
        14,
        startY + 21
      );

      const checkedText = `Checked: ${obj.inspectionChecked ? "Yes" : "No"}`;
      doc.setTextColor(obj.inspectionChecked ? 40 : 220, obj.inspectionChecked ? 167 : 53, obj.inspectionChecked ? 69 : 69);
      doc.text(checkedText, 14, startY + 28);
      doc.setTextColor(0, 0, 0); // reset color

      const attrRows = (obj.attributes || []).map((a) => [a.title, a.specification]);

      autoTable(doc, {
        startY: startY + 35,
        head: [["Title", "Specification"]],
        body: attrRows,
        styles: {
          fontSize: 10,
          cellPadding: 3,
        },
        theme: "striped",
      });

      startY = doc.lastAutoTable.finalY + 10;

      if (startY > 250 && index < inspectionData.length - 1) {
        doc.addPage();
        startY = 20;
      }
    });

    doc.save("Inspection_Summary_Report.pdf");
  };

  const attributeTitles =
    inspectionData.length > 0 && inspectionData[0].attributes
      ? inspectionData[0].attributes.slice(0, 11).map((attr) => attr.title)
      : [];

  const pieData = {
    labels: ["Checked", "Unchecked"],
    datasets: [
      {
        label: "# of Inspections",
        data: [
          inspectionData.filter((i) => i.inspectionChecked).length,
          inspectionData.filter((i) => !i.inspectionChecked).length,
        ],
        backgroundColor: ["#28a745", "#dc3545"],
        hoverOffset: 20,
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h4>Inspection Statistics</h4>

     

      {/* PIE + BAR CHARTS */}
      <div className="row">
        <div className="col-md-6">
          <div style={{ width: "100%", height: 300 }}>
            <Pie data={pieData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex flex-wrap gap-2 mb-3">
            {attributeTitles.map((title, idx) => (
              <button
                key={idx}
                className={`btn btn-outline-primary ${selectedAttribute === title ? "active" : ""}`}
                onClick={() => handleAttributeClick(title)}
              >
                {title}
              </button>
            ))}
          </div>

          {barData && (
            <div style={{ width: "100%", height: 300 }}>
              <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <button className="btn btn-success" onClick={generateSummaryPDF}>
          Generate Inspection Summary PDF
        </button>
      </div>
    </div>
  );
};

export default InspectionStats;
