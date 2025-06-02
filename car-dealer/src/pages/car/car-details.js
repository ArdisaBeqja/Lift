import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Libraries
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Navigation, A11y, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import '../../component/car-list/carlist.scss';
import FeatureInfo from '../../component/feature-info';
import List from '../../component/list';
import VehicleShowcase1 from '../../component/car-list';
import TabsPGS from '../../component/tabs/tabs';

// Template
import CarDetailsGeneralInformation from '../../template/car-detail-general-information';
import CarDetailsFeaturesOptions from '../../template/car-detail-features-options';
import CarDetailsVehicleOverview from '../../template/car-detail-vehicle-overview';

// Form
import EnquiryForm from '../../form/enquiry-form';
import FinancingCalculatorForm from '../../form/financing-calculator-form';

// Widget
import { SocialInfo03 } from '../../widget/social-info/social-info';

// Site Data
import  ExtraFeatureItems from '../../data/fetchData/extraFeatures';
import useOneC from '../../data/fetchData/singleData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CarDetails() {
  let { id } = useParams();
  const { cars, loading } = useOneC(); // Use the hook to get data
  const { extraFeatures, loading: featuresLoading } = ExtraFeatureItems();  // Get extra features

  // Place all hooks at the top
  // const [data1] = <CarDetailsGeneralInformation/>;
  const [data2] = useState(CarDetailsFeaturesOptions);
  const [data3] = useState(CarDetailsVehicleOverview);
  const [showModal, setShowModal] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  const cardata = cars.find((e) => e.id === parseInt(id)); // Search inside cars array

  if (!cardata) {
    return <p>Car not found!</p>;
  }

  const openModal = (modalId) => {
    setShowModal(modalId);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <>
      <div className="site-content">
        <PageHeader
          title={cardata.carName}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Car Details', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="car-details section-ptb">
            <Container>
              <Row>
                <Col lg={8} md={7}>
                  <div className="car-title">
                    <h3>{cardata.carName}</h3>
                    <p className="car-description">{cardata.description}</p>
                  </div>
                </Col>
                <Col lg={4} md={5} className="text-lg-end">
                  <div className="car-price">
                   
                    <span className="new-price">
                      {cardata.carPrice}
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="details-nav">
                    <ul className="list-unstyled">
                      {Array.isArray(cardata.leadForm) &&
                        cardata.leadForm.map((modal, index) => (
                          <li key={index}>
                            <Link onClick={() => openModal(modal.id)}>
                              <i className={modal.icon}></i>
                              {modal.title}
                            </Link>
                          </li>
                        ))}
                      <li>
                        <Link to="#" onClick={() => window.print()}>
                          <i className="fa-solid fa-print"></i>Print this page
                        </Link>
                      </li>
                    </ul>
                    {Array.isArray(cardata.leadForm) &&
                      cardata.leadForm.map((modal, index) => (
                        <Modal
                          size={modal.size}
                          className="car-details-model"
                          show={showModal === modal.id}
                          onHide={closeModal}
                          key={index}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>{modal.title}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>{modal.form}</Modal.Body>
                        </Modal>
                      ))}
                  </div>
                
                </Col>
              </Row>
              <Row>



            

<Col lg={8} md={7}>
  <div className="car-img-slider" >
    {Array.isArray(cardata.gallery) && cardata.gallery.length > 0 ? (
      <div className="thumbnail-image-slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[A11y, FreeMode, Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {/* {cardata.gallery.map((val, ind) => {
            console.log("vallllllllll", val.image);
            console.log(`http://localhost:8000${val.image}`);

            if (ind < 5) {
              return (
                <SwiperSlide key={ind}>
                  <img className="w-100" src={`http://localhost:8000${val.image}`} alt={`Car image ${ind}`} />
                </SwiperSlide>
              );
            }
            return null;
          })} */}
          {cardata.gallery.map((val, ind) => {
           if (ind < 5) {
          // Ensure there's a slash between the base URL and the image file path
          const imageUrl = val.image.startsWith('http') ? val.image : `https://cardealeral.onrender.com/uploads/${val.image}`;
          console.log(`https://cardealeral.onrender.com/uploads/${val.image}`);

          return (
      <SwiperSlide key={ind}>
        <img className="w-100" src={imageUrl} alt={`Car image ${ind}`} />
      </SwiperSlide>
    );
  }
  return null;
})}

        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {cardata.gallery.map((val, ind) => {
            if (ind < 5) {
              return (
                <SwiperSlide key={ind}>
                  <img className="w-100" src={`https://cardealeral.onrender.com/uploads/${val.image}`} alt={`Thumbnail image ${ind}`} />
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Swiper>
      </div>
    ) : (
      <p>No gallery images available.</p>
    )}
  </div>
  <div className="car-detail-tab">
    <TabsPGS
      extraClass=""
      tabActive="0"
      tabsTitle={[
        { id: 1, title: 'General Information' },
        // { id: 2, title: 'Features & Options' },
        // { id: 3, title: 'Vehicle Overview' },
      ]}
      tabsContent={[
        { id: 31, content: <CarDetailsGeneralInformation /> },
        { id: 32, content: data2 },
        { id: 33, content: data3 },
      ]}
    />
  </div>
  <div className="extra-feature">
    <h6>Extra feature</h6>
    <List icon="fas fa-check" data={extraFeatures} />
  </div>
</Col>


                {/* --------------------------- */}





                <Col lg={4} md={5}>
                  <div className="car-details-sidebar">
                    <div className="details-block details-weight">
                      <h5 className="weight-title">Description</h5>
                      {/* <ul className="car-details-list">
                        {Array.isArray(cardata.attributes) && cardata.attributes.length > 0
                          ? cardata.attributes.map((val, index) => (
                              <li key={index}>
                                <span>{val.title}</span>
                                <strong className="text-end">{val.specification}</strong>
                              </li>
                            ))
                          : 'Description not found'}
                      </ul> */}
                      <ul className="car-details-list">
  {Array.isArray(cardata.attributes) && cardata.attributes.length > 0
    ? cardata.attributes
        .filter(val => val.title !== "Details")  // Filter out the 'Details' attribute
        .map((val, index) => (
          <li key={index}>
            <span>{val.title}</span>
            <strong className="text-end">{val.specification}</strong>
          </li>
        ))
    : 'Description not found'}
</ul>

                    </div>
                    <div className="details-social details-weight">
                      {/* <h5 className="weight-title">Share now</h5> */}
                      <SocialInfo03 />
                    </div>
                    <div className="details-form details-weight">
                      <h5 className="weight-title">Send Enquiry</h5>
                      <EnquiryForm />
                    </div>
                    <div className="details-phone details-weight">
                      <FeatureInfo
                        className="feature-box-style-03 grey-border"
                        icon="fa fa-headphones"
                        title="+355 68 8012 853"
                        content="Call our seller to get the best price "
                      />
                    </div>
                   
                  </div>
                </Col>
              </Row>
              {/* ************* */}
             
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default CarDetails;

