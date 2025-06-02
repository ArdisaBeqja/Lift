import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageHeader from '../../layouts/page-header/PageHeader';
import VehicleShowcase1 from '../../component/car-list';
import CarPriceSearchBox from '../../template/car-price-search';
import CarListingSidebar from '../../template/car-listing-sidebar';
import useCarList from '../../data/fetchData/carList1';

function CarGrid() {
  const allCars = useCarList();
  const [displayedCars, setDisplayedCars] = useState([]);

  useEffect(() => {
    if (allCars.length > 0) {
      setDisplayedCars(allCars);
    }
  }, [allCars]);

  const handleFilteredCars = (filteredCars) => {
    setDisplayedCars(filteredCars.length > 0 ? filteredCars : allCars);
  };

  if (allCars.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Car Listing"
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
                  <CarListingSidebar onFilteredCars={handleFilteredCars} />
                </Col>
                <Col lg={9} md={8}>
                  <CarPriceSearchBox />
                  {displayedCars.length === 0 ? (
                    <p>No cars match your criteria.</p>
                  ) : (
                    <div className="grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                      {displayedCars.map((val, index) => {
                        const firstImage = val.gallery?.[0]?.image || '';
                        return (
                          <VehicleShowcase1
                            className="bg-light"
                            key={index}
                            imgSrc={`https://cardealeral.onrender.com/uploads/${firstImage}`}
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
                      })}
                    </div>
                  )}
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
