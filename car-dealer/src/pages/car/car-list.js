import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import { CarItemList } from '../../component/car-list';

// Page Section
import CarPriceSearchBox from '../../template/car-price-search';
import CarListingSidebar from '../../template/car-listing-sidebar';

// *****************Site Data
// import CarList from '../../data/car-list';
import useCarList from '../../data/fetchData/carList1';

function CarListing() {
  const CarList = useCarList();  // Fetch data once when the component loads
  
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
                  <CarListingSidebar />
                </Col>
                <Col lg={9} md={8}>
                  <CarPriceSearchBox />
                  <div className="grid-wrapper grid-lg-1 grid-md-1 grid-sm-1 grid-xs-1">
                    {CarList.map((val, index) => {
                      if (index < 6) {
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

export default CarListing;
