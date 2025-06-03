import React, { useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import PageHeader from '../../layouts/page-header/PageHeader';
import './style.scss';

function AddCar() {
  const [formValues, setFormValues] = useState({
    VehicleTitle: '',
    Make: '',
    Model: '',
    RegistrationDate: '',
    Mileage: '',
    Horsepower: '',
    Condition: '',
    ExteriorColor: '',
    InteriorColor: '',
    Transmission: '',
    Engine: '',
    Drivetrain: '',
    RequestPrice: '',
    Description: '',
    Details: '',
  });

  const [image, setImage] = useState([]);
  const [errors, setErrors] = useState({});
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');
  const [showModal, setShowModal] = useState(false);

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   Promise.all(files.map(resizeImage))
  //     .then(resizedImages => {
  //       setImage(resizedImages);
  //     })
  //     .catch(err => {
  //       console.error('Image resize error:', err);
  //     });
  // };

  const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  Promise.all(files.map(resizeImage))
    .then(resizedImages => {
      setImage((prevImages) => [...prevImages, ...resizedImages]);
    })
    .catch(err => {
      console.error('Image resize error:', err);
    });
};


  const resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 800;
          canvas.height = 600;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, 800, 600);

          canvas.toBlob((blob) => {
            if (blob) {
              const resizedFile = new File([blob], file.name, { type: file.type });
              resolve(resizedFile);
            } else {
              reject(new Error('Canvas blob creation failed'));
            }
          }, file.type);
        };

        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  const handleAddItem = () => {
    if (item.trim() !== '') {
      setItems([...items, item]);
      setItem('');
    }
  };

  const handleChangeItem = (e) => setItem(e.target.value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formValues).forEach((field) => {
      if (!formValues[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });
    if (!image || image.length === 0) {
      newErrors.image = 'At least one image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateUniqueId = () => {
    return Math.floor(100000000 + Math.random() * 900000000); // 9-digit number
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const carData = {
      id: generateUniqueId(),
      carName: formValues.VehicleTitle,
      description: formValues.Description,
      carPrice: formValues.RequestPrice,
      attributes: [
        { id: 1, title: 'Make', specification: formValues.Make, icon: 'makeIcon' },
        { id: 2, title: 'Model', specification: formValues.Model, icon: 'modelIcon' },
        { id: 3, title: 'registrationDate', specification: formValues.RegistrationDate, icon: 'registrationDateIcon' },
        { id: 4, title: 'Mileage', specification: formValues.Mileage, icon: 'mileageIcon' },
        { id: 5, title: 'Horsepower', specification: formValues.Horsepower, icon: 'horsepowerIcon' },
        { id: 6, title: 'Condition', specification: formValues.Condition, icon: 'conditionIcon' },
        { id: 7, title: 'exteriorColor', specification: formValues.ExteriorColor, icon: 'exteriorColorIcon' },
        { id: 8, title: 'interiorColor', specification: formValues.InteriorColor, icon: 'interiorColorIcon' },
        { id: 9, title: 'Transmission', specification: formValues.Transmission, icon: 'transmissionIcon' },
        { id: 10, title: 'Engine', specification: formValues.Engine, icon: 'engineIcon' },
        { id: 11, title: 'Drivetrain', specification: formValues.Drivetrain, icon: 'drivetrainIcon' },
        { id: 12, title: 'Details', specification: formValues.Details, icon: 'detailsIcon' },
      ],
      extraFeatures: items.map((feature, index) => ({
        id: index + 1,
        item: feature,
      })),
    };

    const formData = new FormData();
    formData.append('carData', JSON.stringify(carData));
    image.forEach((img) => {
      formData.append('images', img);
    });

    try {
      const response = await axios.post("https://cardealeral.onrender.com/add-car", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Response:', response.data);
      setShowModal(true); // Show modall
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Response error:', error.response.data);
      }
    }
  };

  return (
    <div className="site-content">
      <PageHeader
        title="Add Car"
        breadCrumbItems={[
          { label: 'Home', path: '/' },
          { label: 'Add Car', path: '#', active: true },
        ]}
      />
      <div className="content-wrapper cdfs-add-car-page">
        <section className="section-ptb">
          <Container>
            <Row>
              <Col sm={12}>
                <div className="cdfs-add-car-form-wrapper">
                  <form className="cdfs-car-form" onSubmit={handleSubmit}>
                    <h4 className="cdfs-av-title">Vehicle Description</h4>

                    {['VehicleTitle', 'Details', 'Make', 'Model', 'RegistrationDate', 'Mileage', 'Horsepower', 'Condition', 'ExteriorColor', 'InteriorColor', 'Transmission', 'Engine', 'Drivetrain', 'RequestPrice', 'Description'].map((field, idx) => (
                      <div className="form-group" key={idx}>
                        <label>{field.replace(/([A-Z])/g, ' $1')}*</label>
                        <input
                          className="form-control"
                          type="text"
                          name={field}
                          value={formValues[field]}
                          onChange={handleInputChange}
                          placeholder={`Enter ${field}`}
                        />
                        {errors[field] && <p className="error">{errors[field]}</p>}
                      </div>
                    ))}

                    <div className="form-group">
                      <label>Extra Features</label>
                      <input
                        className="form-control"
                        type="text"
                        value={item}
                        onChange={handleChangeItem}
                        placeholder="Enter an extra feature"
                      />
                     <button type="button" onClick={handleAddItem} className="btn btn-danger mt-2">
  Add Feature
</button>

                      <ul className="mt-2">
                        {items.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="form-group">
                      <label>Upload Image*</label>
                      <input
                        className="form-control"
                        type="file"
                        name="images"
                        accept="image/*"
                        onChange={handleImageChange}
                        multiple
                      />
                      {errors.image && <p className="error">{errors.image}</p>}
                    </div>

<button type="submit" className="btn btn-danger mt-3">
  Submit
</button>                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger">Car has been added successfully!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCar;
