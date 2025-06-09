import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import VehicleShowcase1, { VehicleShowcase2, VehicleShowcase3, CarItemList } from '../component/car-list';

// Site Data
// import CarList from '../data/car-list';


import useCarList from '../data/fetchData/carList1';


function ElementsVehicleShowcase() {
  const CarList = useCarList();

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Vehicle Showcase"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Vehicle Showcase', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    tag="h3"
                    extraClass="mb-5"
                    title="Vehicle Showcase : Style 1"
                  />
                  <div className="grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                    {CarList.map((val, index) => {
                      if (index < 3) {
                        return (
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
                            attri={val.attributes}
                            id={val.id}
                            lightboxImages={val.gallery}
                          />
                          
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb bg-light">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    tag="h3"
                    extraClass="mb-5"
                    title="Vehicle Showcase : Style 2"
                  />
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {CarList.map((val, index) => {
                          // console.log('*********attributes:', val.attributes);  // Log the attributes here

                      if (index < 3) {
                        return (
                          <VehicleShowcase2
                            className="car-item-grid"
                            key={index}
                            imgSrc={val.imgSrc}
                            carName={val.carName}
                            description={val.description}
                            carPrice={val.carPrice}
                            carNewPrice={val.carNewPrice}
                            registrationDate={val.registrationDate}
                            transmission={val.transmission}
                            mileage={val.mileage}
                            horsepower={val.horsepower}
                            list={val.review}
                            attri={val.attributes}
                            id={val.id}
                            lightboxImages={val.gallery}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    tag="h3"
                    extraClass="mb-5"
                    title="Vehicle Showcase : Style 3"
                  />
                  <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1">
                    {CarList.map((val, index) => {
                      //  console.log('*********attributes:', val.attributes);  // Log the attributes here
 
                      if (index < 3) {
                        return (
                           <VehicleShowcase3
                            className="car-item-grid"
                            key={index}
                            imgSrc={val.imgSrc}
                            carName={val.carName}
                            carPrice={val.carPrice}
                            carNewPrice={val.carNewPrice}
                            registrationDate={val.registrationDate}
                            transmission={val.transmission}
                            mileage={val.mileage}
                            horsepower={val.horsepower}
                            attri={val.attributes}
                            id={val.id}
                            lightboxImages={val.gallery}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle
                    extraClass="mb-5"
                    title="Car Listing"
                  />
                  <div className="grid-wrapper grid-lg-1 grid-md-1 grid-sm-1 grid-xs-1">
                    {CarList.map((val, index) => {
                    // console.log('*********attributes:', val.attributes);  // Log the attributes here

                      if (index < 3) {
                        return (
                          <CarItemList
                            className="car-item-list"
                            key={index}
                            imgSrc={val.imgSrc}
                            carName={val.carName}
                            description={val.description}
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
                        );
                      }
                      return null;
                    })}
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

export default ElementsVehicleShowcase;
