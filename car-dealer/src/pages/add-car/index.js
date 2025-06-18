import React, { useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import PageHeader from '../../layouts/page-header/PageHeader';
import './style.scss';
import ExtraFeatureItems from '../../data/fetchData/extraFeatures';

const attributeTitleMap = {
  numriserik: "Numri Serik",
  vendndodhjaeinstalimit: "Vendndodhja e Instalimit",
  emriindërtesës: "Emri i Ndërtesës",
 
  gjendjaoperacionale: "Gjendja Operacionale",
  kapacitetiKg: "Kapaciteti (kg)",
  numrimaksimalipasagjerëve: "Numri Maksimal i Pasagjerëve",
  shpejtësia: "Shpejtësia ",
  llojiimotorrit: "Lloji i Motorrit",
  llojiidyerve: "Lloji i Dyerve",
  detajet: "Detajet"
};

function AddCar() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [inspectionDate, setInspectionDate] = useState('');

  const [formValues, setFormValues] = useState({
    liftName: '',
    description: '',
    liftPrice: '',
    ...Object.fromEntries(Object.keys(attributeTitleMap).map(k => [k, '']))
  });
const handleChangeItem = (e) => {
  setItem(e.target.value);
};

const handleAddItem = () => {
  if (item.trim() !== '') {
    setItems([...items, item.trim()]);
    setItem('');
  }
};

  const [image, setImage] = useState([]);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      // Validate file type before reading
      if (!file.type.startsWith('image/')) {
        reject(new Error('File is not an image'));
        return;
      }

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

        img.onerror = () => {
          reject(new Error('Image loading error - invalid image file'));
        };
      };

      reader.onerror = () => {
        reject(new Error('FileReader error'));
      };
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Filter to only images
    const validImageFiles = files.filter(f => f.type.startsWith('image/'));
    if (validImageFiles.length !== files.length) {
      setErrors(prev => ({ ...prev, image: 'Only image files are allowed' }));
      return;
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.image;
        return newErrors;
      });
    }

    Promise.all(validImageFiles.map(resizeImage))
      .then(resizedImages => {
        setImage(resizedImages);
      })
      .catch(err => {
        console.error('Image resize error:', err);
        setErrors(prev => ({ ...prev, image: err.message }));
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    ['liftName', 'description', 'liftPrice', ...Object.keys(attributeTitleMap)].forEach(field => {
      if (!formValues[field]) {
        newErrors[field] = `${attributeTitleMap[field] || field} is required`;
      }
      if (!inspectionDate) {
  newErrors.inspectionDate = 'Dita e kontrollit është e detyrueshme';
}

    });
    if (!image || image.length === 0) {
      newErrors.image = 'At least one image is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateUniqueId = () => {
    return Math.floor(100000000 + Math.random() * 900000000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const attributes = Object.keys(attributeTitleMap).map((key, index) => ({
      id: index + 1,
      title: attributeTitleMap[key],
      specification: formValues[key],
      icon: `${key}Icon`
    }));

    const carData = {
      id: generateUniqueId(),
      liftName: formValues.liftName,
      inspectionDate, //
      description: formValues.description,
      liftPrice: formValues.liftPrice,
      attributes,
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
      const response = await axios.post("https://lift-4s9g.onrender.com/api/addcar", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Response:', response.data);
      setShowModal(true);
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
        title="Shto Ashensorë"
        breadCrumbItems={[
          { label: 'Home', path: '/' },
          { label: 'Shto Ashensorë', path: '#', active: true },
        ]}
      />
      <div className="content-wrapper cdfs-add-car-page">
        <section className="section-ptb">
          <Container>
            <Row>
              <Col sm={12}>
                <div className="cdfs-add-car-form-wrapper">
                  <form className="cdfs-car-form" onSubmit={handleSubmit}>
                    <h4 className="cdfs-av-title">Përshkrimi i Ashensorit</h4>

                    <div className="form-group">
                      <label>Emri i Ashensorit*</label>
                      <input
                        className="form-control"
                        type="text"
                        name="liftName"
                        value={formValues.liftName}
                        onChange={handleInputChange}
                        placeholder="Shkruani emrin"
                      />
                      {errors.liftName && <p className="error">{errors.liftName}</p>}
                    </div>
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
                      <label>Përshkrimi*</label>
                      <input
                        className="form-control"
                        type="text"
                        name="description"
                        value={formValues.description}
                        onChange={handleInputChange}
                        placeholder="Shkruani përshkrimin"
                      />
                      {errors.description && <p className="error">{errors.description}</p>}
                    </div>
                    <div className="form-group">
  <label>Dita e kontrollit*</label>
  <input
    className="form-control"
    type="date"
    value={inspectionDate}
    onChange={(e) => setInspectionDate(e.target.value)}
  />
  {errors.inspectionDate && <p className="error">{errors.inspectionDate}</p>}
</div>

                    <div className="form-group">
                      <label>Çmimi*</label>
                      <input
                        className="form-control"
                        type="text"
                        name="liftPrice"
                        value={formValues.liftPrice}
                        onChange={handleInputChange}
                        placeholder="Shkruani çmimin"
                      />
                      {errors.liftPrice && <p className="error">{errors.liftPrice}</p>}
                    </div>

                    {Object.keys(attributeTitleMap).map((field, idx) => (
                      <div className="form-group" key={idx}>
                        <label>{attributeTitleMap[field]}*</label>
                        <input
                          className="form-control"
                          type="text"
                          name={field}
                          value={formValues[field]}
                          onChange={handleInputChange}
                          placeholder={`Shkruani ${attributeTitleMap[field].toLowerCase()}`}
                        />
                        {errors[field] && <p className="error">{errors[field]}</p>}
                      </div>
                    ))}

                    <div className="form-group">
                      <label>Ngarko Imazhe*</label>
                      <input
                        className="form-control"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                      />
                      {errors.image && <p className="error">{errors.image}</p>}
                    </div>

                    <button type="submit" className="btn btn-danger mt-3">
                      Shto Ashensorin
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sukses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-success">Ashensori u shtua me sukses!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Mbyll
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCar;
