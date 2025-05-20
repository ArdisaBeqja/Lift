// Libraries
import { Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from 'react-router-dom';

// Components
import PriceRangeSlider from '../../component/range-slider/range-slider';

// Site Data
import CarMake, {
  CarBody,
  CarModel,
  CarStatus,
  CarYear,
} from '../../data/car-info';

// Import styles
import '../../component/search/search.scss';

function CustomFiltersVerticle(props) {
  return (
    <>
      <div className={`custom-filters search-block-verticle ${props.className || ''}`}>
        <h5 className="search-block-title">Find Your Dream Car</h5>
        <form className="search-box">
          <Row>
            <Col lg={12}>
              <Select options={CarMake} placeholder="Make" />
            </Col>
            <Col lg={12}>
              <Select options={CarModel} placeholder="Model" />
            </Col>
            <Col lg={12}>
              <Select options={CarYear} placeholder="Year" />
            </Col>
            <Col lg={12}>
              <Select options={CarBody} placeholder="Body style" />
            </Col>
            <Col lg={12}>
              <Select options={CarStatus} placeholder="Vehicle Status" />
            </Col>
            <Col lg={12}>
              <div className="price-slide">
                  <PriceRangeSlider label="Price Range :" />
              </div>
            </Col>
            <Col lg={12}>
              <div className="price-btn">
                <Link className="button" to="#">Search Inventory</Link>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
}

export default CustomFiltersVerticle;
