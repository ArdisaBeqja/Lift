import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageHeader from '../../layouts/page-header/PageHeader';
import VehicleShowcase1 from '../../component/car-list';
// import CarPriceSearchBox from '../../template/car-price-search'; // Removed as requested
import useCarList from '../../data/fetchData/carList1';
import CarFilterSidebar from './CarFilterSidebar'; // Adjust path if needed

function CarGrid() {
  const allCars = useCarList();
  const [displayedCars, setDisplayedCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    if (allCars.length > 0) {
      setDisplayedCars(allCars);
    }
  }, [allCars]);

  useEffect(() => {
    setCurrentPage(1); // Reset page on filter
  }, [displayedCars]);

  const handleFilteredCars = (filteredCars) => {
    setDisplayedCars(filteredCars.length > 0 ? filteredCars : allCars);
  };

  const totalPages = Math.ceil(displayedCars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCars = displayedCars.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (allCars.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="site-content">
        <PageHeader
  title="Lista e Ashensorëve"
  breadCrumbItems={[
    { label: 'Kryefaqja', path: '/' },
    { label: 'Faqet', path: '#' },
    { label: 'Lista e Ashensorëve', path: '#', active: true },
  ]}
/>

        <div className="content-wrapper">
          <section className="blog section-ptb">
            <Container>
              <Row>
                <Col lg={3} md={4}>
                  <CarFilterSidebar onFilteredCars={handleFilteredCars} />
                </Col>
                <Col lg={9} md={8}>
                  {paginatedCars.length === 0 ? (
                    <p>No cars match your criteria.</p>
                  ) : (
                    <>
                      <div className="grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                        {paginatedCars.map((val, index) => {
                          const firstImage = val.gallery?.[0]?.image || '';
                          return (
                            <VehicleShowcase1
                              className="bg-light"
                              key={index}
                              imgSrc={`https://lift-2tmr.onrender.com/uploads/${firstImage}`}
                              liftName={val.liftName}
                              liftPrice={val.liftPrice}
                              attri={val.attributes}
                              list={val.iconList || []}
                              id={val.id}
                              lightboxImages={val.lightboxImages || null}
                            />
                          );
                        })}
                      </div>
                      <div className="pagination-controls mt-4 d-flex justify-content-center align-items-center gap-3">
                        <button
                          className="btn btn-outline-primary"
                          onClick={goToPreviousPage}
                          disabled={currentPage === 1}
                        >
                          &lt; Previous
                        </button>
                        <span>
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          className="btn btn-outline-primary"
                          onClick={goToNextPage}
                          disabled={currentPage === totalPages}
                        >
                          Next &gt;
                        </button>
                      </div>
                    </>
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
