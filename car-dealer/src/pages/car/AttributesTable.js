import { useState, useEffect } from "react";
import { Table, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import emailjs from "emailjs-com";

const AttributesTable = ({ attributes, carId }) => {
  const [localAttributes, setLocalAttributes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedAttr, setEditedAttr] = useState({ title: "", specification: "" });
  const [alert, setAlert] = useState({ visible: false, message: "", color: "success" });

  // Initialize localAttributes from props on mount or when attributes prop changes
  useEffect(() => {
    if (Array.isArray(attributes)) {
      setLocalAttributes(attributes);
    }
  }, [attributes]);

  // Auto hide alert after 3 seconds when it becomes visible
  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => {
        setAlert((prev) => ({ ...prev, visible: false }));
      }, 3000); // 3000ms = 3 seconds

      return () => clearTimeout(timer); // cleanup if alert changes or component unmounts
    }
  }, [alert.visible]);

  const handleEditClick = (attr) => {
    setEditingId(attr.id);
    setEditedAttr({ title: attr.title, specification: attr.specification });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedAttr({ title: "", specification: "" });
  };

  const handleSave = async (attrId) => {
    try {
      await axios.put(`https://lift-2tmr.onrender.com/api/cars/${carId}/attributes/${attrId}`, editedAttr);

      const changedAttributeName = Object.keys(editedAttr)[0];
      const changedAttributeValue = editedAttr[changedAttributeName];
      console.log(editedAttr.specification);
      const templateParams = {
        attribute_name: editedAttr.title,
        attribute_value: editedAttr.specification,
        car_id: carId,
      };

      await emailjs.send(
        "service_3zloteg",
        "template_nborzw2",
        templateParams,
        "1SR61RrC-HNnVtxSR"
      );

      // Update localAttributes state to reflect the changes immediately in UI
      setLocalAttributes((prevAttrs) =>
        prevAttrs.map((attr) =>
          attr.id === attrId ? { ...attr, ...editedAttr } : attr
        )
      );

      setAlert({ visible: true, message: "Attribute updated and email notification sent!", color: "success" });
      setEditingId(null);
    } catch (err) {
      console.error("Update failed:", err);
      setAlert({ visible: true, message: "Update failed.", color: "danger" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAttr((prev) => ({ ...prev, [name]: value }));
  };

  if (!Array.isArray(localAttributes)) return null;

  return (
    <div className="mt-0">
      {alert.visible && (
        <Alert
          variant={alert.color}
          onClose={() => setAlert({ ...alert, visible: false })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Specification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {localAttributes.map((attr) => (
            <tr key={attr.id}>
              {editingId === attr.id ? (
                <>
                  <td>
                    <Form.Control
                      type="text"
                      name="title"
                      value={editedAttr.title}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="specification"
                      value={editedAttr.specification}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Button variant="success" size="sm" onClick={() => handleSave(attr.id)}>
                      Save
                    </Button>{" "}
                    <Button variant="secondary" size="sm" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{attr.title}</td>
                  <td>{attr.specification}</td>
                  <td>
                    <Button variant="primary" size="sm" onClick={() => handleEditClick(attr)}>
                      Edit
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AttributesTable;
