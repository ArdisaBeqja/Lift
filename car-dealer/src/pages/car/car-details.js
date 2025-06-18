import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InspectionPopup from "./popup.js";
import { Modal } from 'react-bootstrap';
import AttributesTable from "./AttributesTable"; // adjust path as needed
import emailjs from "emailjs-com";

import { Col, Container, Row, Button, Table } from 'react-bootstrap';
import { Navigation, A11y, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components & styles
import '../../component/car-list/carlist.scss';
import FeatureInfo from '../../component/feature-info';
import List from '../../component/list';
import VehicleShowcase1 from '../../component/car-list';
import TabsPGS from '../../component/tabs/tabs';

// Templates
import CarDetailsGeneralInformation from '../../template/car-detail-general-information';
import CarDetailsFeaturesOptions from '../../template/car-detail-features-options';
import CarDetailsVehicleOverview from '../../template/car-detail-vehicle-overview';

// Forms
import EnquiryForm from '../../form/enquiry-form';
import FinancingCalculatorForm from '../../form/financing-calculator-form';

// Widgets
import { SocialInfo03 } from '../../widget/social-info/social-info';

// Site Data
import ExtraFeatureItems from '../../data/fetchData/extraFeatures';
import useOneC from '../../data/fetchData/singleData';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CarDetails() {
  let { id } = useParams();
  const [inspectionChecked, setInspectionChecked] = useState(false);

  const { cars, loading } = useOneC();
  const { extraFeatures, loading: featuresLoading } = ExtraFeatureItems();
  const [modalMessage, setModalMessage] = useState('');
  const [data2] = useState(CarDetailsFeaturesOptions);
  const [data3] = useState(CarDetailsVehicleOverview);
  const [showModal, setShowModal] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [textColor, setTextColor] = useState(''); // '' | 'blue' | '#e63900'
  const [inspectionColor, setInspectionColor] = useState('black'); // default color
  
  const [calendarDate, setCalendarDate] = useState(new Date());
const cardata = cars.find((e) => e.id === parseInt(id));
  useEffect(() => {
  if (cardata) {
    setInspectionChecked(cardata.inspectionChecked); // <-- 👈 sync with DB
  }
}, [cardata]);
  if (loading) return <p>Loading...</p>;

  

  if (!cardata) return <p>Car not found!</p>;

  const inspectionDate = new Date(cardata.inspectionDate);
  
  const openModal = (modalId) => setShowModal(modalId);
  const closeModal = () => setShowModal(null);
   const handleCheckClick = () => {
    const isLiftChecked = checkLiftInspection();
    if (isLiftChecked) {
      setModalMessage('E Konfrimoni qe objekti esht i kontrrroluar');
    } else {
      setModalMessage('Objekti nuk eshte i kontrrroluar ende');
    }
    setShowModal(true);
  };
emailjs.init('1SR61RrC-HNnVtxSR');

const sendEmail = (carId, attributeName, attributeValue) => {
  emailjs.send('service_3zloteg', 'template_b8mtiio', {
    car_id: carId,
    attribute_name: attributeName,
    attribute_value: attributeValue,
    time: new Date().toLocaleString(), // Optional if not needed
  })
  .then(() => console.log('Email sent!'))
  .catch((err) => console.error('Email error:', err));
};


const handleYes = async () => {
  setInspectionColor('#b3d9ff');

  setInspectionChecked(true);  // ✅ Update local state

  try {
    await fetch(`https://lift-4s9g.onrender.com/api/cars1/${id}/toggle-inspection`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inspectionChecked: true }),
    });
    const message = `Lift ${id} has been checked.`;
    sendEmail(id, 'Inspection Status', message); // or 'Not Checked'

    setModalMessage("E Konfirmon qe objekti eshte kontrolluar");
    setShowModal(false);
  } catch (error) {
    console.error("Error updating inspection:", error);
  }
};

const handleNo = async () => {
  setInspectionColor('#e63900');
  setInspectionChecked(false);  // ✅ Update local state

  try {
    await fetch(`https://lift-4s9g.onrender.com/api/cars1/${id}/toggle-inspection`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inspectionChecked: false }),
    });
    const message = `Lift ${id} has NOT been checked.`;
    sendEmail(id, 'Inspection Status', message); // or 'Not Checked'

    setModalMessage("Nuk eshte kontrolluar objekti");
    setShowModal(false);
  } catch (error) {
    console.error("Error updating inspection:", error);
  }
};

  const checkLiftInspection = () => {

  return true;
};
const renderCalendar = () => {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const inspectionDay = inspectionDate.getDate();
  const inspectionMonth = inspectionDate.getMonth();
  const inspectionYear = inspectionDate.getFullYear();

  const today = new Date();

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
        const isToday =
          dayCounter === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();

        const isInspectionDay =
          dayCounter === inspectionDay &&
          month === inspectionMonth &&
          year === inspectionYear;

        let cellClass = "border text-center align-middle";
        let cellStyle = {
          padding: "10px",
          minWidth: "40px",
          height: "40px",
          borderRadius: "5px",
        };

        if (isInspectionDay) {
          cellClass += " text-white fw-bold";
          cellStyle.backgroundColor = inspectionChecked ? "#8cd9b3" : "#e63900";
        } else if (isToday) {
          cellClass += " text-white fw-bold";
          cellStyle.backgroundColor = "#6699ff";
        }

        days.push(
          <td key={dayCounter} className={cellClass} style={cellStyle}>
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

      {/* Centered Month and Year text */}
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
        style={{
          fontSize: "24px",
          color: inspectionChecked ? "#8cd9b3" : "#e63900",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          className={`px-2 rounded-circle`}
          style={{
            fontSize: "14px",
            lineHeight: "1",
            backgroundColor: inspectionChecked ? "#8cd9b3" : "#e63900",
            color: "white",
            display: "inline-block",
            width: "18px",
            height: "18px",
            textAlign: "center",
          }}
        >
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
        <Modal.Body>{modalMessage}</Modal.Body>
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


 
  // const renderAttributes = () => {
  //   if (!Array.isArray(cardata.attributes)) return null;

  //   return (
  //     <div className="mt-0">
  //       {/* <h5 className="mb-3">Technical Attributes</h5> */}
  //       <Table striped bordered hover responsive>
  //         <thead>
  //           <tr>
  //             <th>Title</th>
  //             <th>Specification</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {cardata.attributes.map((attr) => (
  //             <tr key={attr.id}>
  //               <td>{attr.title}</td>
  //               <td>{attr.specification}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </Table>
  //     </div>
  //   );
  // };

  return (
    <div className="site-content">
     <PageHeader
  title={cardata.carName}
  breadCrumbItems={[
    { label: 'Faqja Kryesore', path: '/' },
    { label: 'Faqet', path: '#' },
    { label: 'Detajet e Ashensorit', path: '#', active: true },
  ]}
/>

      <div className="content-wrapper">
        <section className="car-details section-ptb py-5">
          
          <Container className="text-center"> 
            {/* Row with image slider and attributes table side by side */}
            
            <Row className="justify-content-center">
               <div className="car-detail-tab mb-5">
              
            </div>
              <Col lg={7} md={7}>
              
                <div className="car-img-slider mb-4">
                  
                  {Array.isArray(cardata.gallery) && cardata.gallery.length > 0 ? (
                    <>
                      <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        navigation={true}
                        modules={[A11y, FreeMode, Navigation, Thumbs]}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="mb-3 rounded"
                      >
                        {cardata.gallery.slice(0, 5).map((val, ind) => {
                          const imageUrl = val.image.startsWith('http')
                            ? val.image
                            : `https://lift-4s9g.onrender.com/uploads/${val.image}`;
                          return (
                            <SwiperSlide key={ind}>
                              <img
                                className="img-fluid rounded"
                                src={imageUrl}
                                alt={`Car image ${ind}`}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                      >
                        {cardata.gallery.slice(0, 5).map((val, ind) => (
                          <SwiperSlide key={ind}>
                            <img
                              className="img-fluid rounded border"
                              src={`https://lift-4s9g.onrender.com/uploads/${val.image}`}
                              alt={`Thumbnail image ${ind}`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </>
                  ) : (
                    <p>No gallery images available.</p>
                  )}
                </div>
              </Col>

              <Col lg={5} md={5}>
                {/* {renderAttributes()} */}
                {/* <AttributesTable attributes={cardata.attributes} /> */}
                <AttributesTable attributes={cardata.attributes} carId={cardata.id} />

              </Col>
            </Row>

            <Row className="mt-5 ">
              <Col md={6}>
                {renderCalendar()}
              </Col>
              <Col md={6}>
                <div className="details-form details-weight">
                  <h5 className="weight-title mb-3">Dërgo Pyetje</h5>

                  <EnquiryForm />
                </div>
              </Col>
            </Row>

          </Container>
        </section>
      </div>
    </div>
  );
}

export default CarDetails;
