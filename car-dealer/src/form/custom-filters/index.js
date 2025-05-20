// Libraries
import { Col, Container, Row } from 'react-bootstrap';
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

function CustomFilters(props) {
  return (
    <>
      {/* <section className="search car-search-block">
        <Container>
          <div className={`search-block ${props.className || ''}`}>
            <Row>
              <Col lg={8}>
                <form className="search-box row">
                  <Col lg={4} md={6}>
                    <label>Select make</label>
                    <Select options={CarMake} placeholder="Make" />
                  </Col>
                  <Col lg={4} md={6}>
                    <label>Select model</label>
                    <Select options={CarModel} placeholder="Model" />
                  </Col>
                  <Col lg={4} md={6}>
                    <label>Select yar</label>
                    <Select options={CarYear} placeholder="Year" />
                  </Col>
                  <Col lg={4} md={6}>
                    <label>Select body style</label>
                    <Select options={CarBody} placeholder="Body style" />
                  </Col>
                  <Col lg={4} md={6}>
                    <label>Select vehicle status</label>
                    <Select options={CarStatus} placeholder="Vehicle Status" />
                  </Col>
                </form>
              </Col>
              <Col lg={4}>
                <div className="price-slide">
                  <div className="price">
                    <label>Price Range</label>
                    <div className="slider">
                      <PriceRangeSlider />
                    </div>
                    <div className="price-btn">
                      <Link className="button" to="#">
                        Search the Vehicle
                      </Link>
                      <Link className="button btn-link  link-primary" to="#">
                        ADVANCED SEARCH
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section> */}
    </>
  );
}

export default CustomFilters;
