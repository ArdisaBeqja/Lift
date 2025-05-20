// Libraries
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

// Components
import PriceRangeSlider from '../component/range-slider/range-slider';
import SearchWidget from '../widget/search';

// Site Data
import { CarShow, CarSortBy } from '../data/car-info';

function CarPriceSearchBox(props) {
  return (
    <>
      <div className="car-sorting-options-box">
        <Row>
          <Col lg={4}>
            <div className="price-slide">
              <label>Price Range</label>
              <div className="slider">
                <PriceRangeSlider />
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="price-slide">
              <label>Price Range</label>
              <div className="slider">
                <PriceRangeSlider />
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="price-search">
              <label>Price search</label>
              <div className="slider">
                <SearchWidget />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="sorting-options">
          <Col lg={5}>
            <div className="change-view-button">
              <Link to="/car-grid">
                <i className="fa-solid fa-grip"></i>
              </Link>
              <Link to="/car-list">
                <i className="fa-solid fa-list"></i>
              </Link>
            </div>
          </Col>
          <Col lg={3}>
            <Select options={CarShow} placeholder="Show" />
          </Col>
          <Col lg={4}>
            {' '}
            <Select options={CarSortBy} placeholder="Sort by" />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default CarPriceSearchBox;
