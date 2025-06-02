import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Libraries
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Navigation, A11y, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import '../../component/car-list/carlist.scss';
import List from '../../component/list';
import VehicleShowcase1 from '../../component/car-list';
import TabsPGS from '../../component/tabs/tabs';
import Googlemap from '../../component/googlemap/googlemap';

// Template
import CarDetailsGeneralInformation from '../../template/car-detail-general-information';
import CarDetailsFeaturesOptions from '../../template/car-detail-features-options';
import CarDetailsVehicleOverview from '../../template/car-detail-vehicle-overview';

// Site Data
//****************** */ import CarList, { ExtraFeatureItems } from '../../data/car-list';
import useCarList from '../../data/fetchData/carList1';
import { ExtraFeatureItems } from '../../data/car-list';

// Form
import EnquiryForm from '../../form/enquiry-form';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CarDetailsTwo() {
  const CarList = useCarList();  // Fetch data once when the component loads
  
  // Single Post Dynaic ID
  let { id } = useParams();
  const cardata = CarList.find((e) => e.id === parseInt(id));

  // Tab Content List Items
  const [data1] = useState(CarDetailsGeneralInformation);
  const [data2] = useState(CarDetailsFeaturesOptions);
  const [data3] = useState(CarDetailsVehicleOverview);

  // Details Modal

  const [showModal, setShowModal] = useState(null);
  const openModal = (modalId) => {
    setShowModal(modalId);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  // Swiper Thumbnail
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="site-content">
        <PageHeader
          title={cardata.carName}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Car Details 02', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="car-details car-details-two section-ptb">
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
                    {/* <span className="old-price">
                      <i className="fa-solid fa-dollar-sign"></i>
                      {cardata.carPrice}
                    </span> */}
                    <span className="new-price">
                      <i className="fa-solid fa-dollar-sign"></i>
                      {cardata.carPrice}
                    </span>
                  </div>
                  <span>Plus Taxes & Licensing</span>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="details-nav">
                    <ul className="list-unstyled">
                      {cardata.leadForm &&
                        cardata.leadForm.map((modal, index) => (
                          <li key={index}>
                            <Link
                              key={modal.id}
                              onClick={() => openModal(modal.id)}
                            >
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
                    {cardata.leadForm &&
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
                <Col lg={6}>
                  <div className="car-img-slider">
                    {cardata.gallery ? (
                      <div className="thumbnail-image-slider">
                        <Swiper
                          spaceBetween={0}
                          slidesPerView={1}
                          loop={true}
                          navigation={true}
                          modules={[A11y, FreeMode, Navigation, Thumbs]}
                          thumbs={{ swiper: thumbsSwiper }}
                        >
                          {cardata.gallery.map((val, index) => {
                            if (index < 5) {
                              return (
                                <SwiperSlide key={index}>
                                  <img
                                    className="w-100"
                                    src={val.image}
                                    alt=""
                                  />
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
                          {cardata.gallery.map((val, index) => {
                            if (index < 5) {
                              return (
                                <SwiperSlide key={index}>
                                  <img
                                    className="w-100"
                                    src={val.image}
                                    alt=""
                                  />
                                </SwiperSlide>
                              );
                            }
                            return null;
                          })}
                        </Swiper>
                      </div>
                    ) : (
                      <img className=" w-100" src={cardata.imgSrc} alt="" />
                    )}
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="car-details-sidebar">
                    <div className="details-block details-weight">
                      <h5 className="weight-title">Description</h5>
                      <ul className="car-details-list">
                        {cardata.attributes.map((val, index) => {
                          return (
                            <li key={index}>
                              <i className={val.icon}></i>
                              <span>{val.title}</span>
                              <strong className="text-end">
                                {val.specification}
                              </strong>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={8} md={12}>
                  <div className="car-detail-tab">
                    <TabsPGS
                      extraClass=""
                      tabActive="0"
                      tabsTitle={[
                        { id: 1, title: 'General Information' },
                        // {
                        //   id: 2,
                        //   title: 'Features & Options',
                        // },
                        {
                          id: 3,
                          title: 'Vehicle Overview',
                        },
                      ]}
                      tabsContent={[
                        { id: 31, content: data1 },
                        { id: 32, content: data2 },
                        { id: 33, content: data3 },
                      ]}
                    />
                  </div>
                  <div className="extra-feature">
                    <h6>extra feature</h6>
                    <List icon="fas fa-check" data={ExtraFeatureItems} />
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="car-details-sidebar">
                    <div className="details-form details-weight">
                      <h5 className="weight-title">Send Enquiry</h5>
                      <EnquiryForm />
                    </div>
                    <div className="details-location details-weight">
                      <h5 className="weight-title">Location</h5>
                      <div className="location-map">
                        <Googlemap />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="feature-car">
                    <h6>Recently Vehicle</h6>
                    <Swiper
                      modules={[Navigation, A11y]}
                      navigation
                      spaceBetween={30}
                      slidesPerView={4}
                      loop={true}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400: {
                          slidesPerView: 1,
                        },
                        570: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 3,
                        },
                        992: {
                          slidesPerView: 4,
                        },
                      }}
                    >
                      {CarList.map((val, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <VehicleShowcase1
                              className="bg-light"
                              key={index}
                              imgSrc={val.imgSrc}
                              carName={val.carName}
                              carPrice={val.carPrice}
                              carNewPrice={val.carNewPrice}
                              registrationDate={val.registrationDate}
                              transmission={val.transmission}
                              mileage={val.mileage}
                              list={val.review}
                              id={val.id}
                              attri={val.attributes}
                              lightboxImages={val.gallery}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default CarDetailsTwo;
