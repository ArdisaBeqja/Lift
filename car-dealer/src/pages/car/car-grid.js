import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import VehicleShowcase1 from '../../component/car-list';

// Page Section
import CarPriceSearchBox from '../../template/car-price-search';
import CarListingSidebar from '../../template/car-listing-sidebar';

import useCarList from '../../data/fetchData/carList1';
function CarGrid() {
  
  const CarList = useCarList();  
  console.log("xdfadfa",CarList);// Fetch data once when the component loads
  if ( CarList.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="xCar Listing"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Car Listing', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="blog section-ptb">
            <Container>
              <Row>
                <Col lg={3} md={4}>
                  <CarListingSidebar />
                </Col>
                <Col lg={9} md={8}>
                  <CarPriceSearchBox />
                  <div className="grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                    {CarList.map((val, index) => {
                      console.log("car name is this one:")
                      console.log(val.carName)
                      console.log("???car imgsrc ",val.imgSrc)
                      if (index < 90000000000) {
                        const firstImage = val.gallery && val.gallery[0] ? val.gallery[0].image : '';

                        return (
                          <VehicleShowcase1
                            className="bg-light"
                            key={index}
                            imgSrc={`http://localhost:8000/uploads/${firstImage}`} // Make sure to include the correct URL path

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

export default CarGrid;
