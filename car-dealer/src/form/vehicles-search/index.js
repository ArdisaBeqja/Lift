// Libraries
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';

import Button from '../../component/button/button';

// Site Data
import CarMake, {
  CarModel,
  CarYear,
} from '../../data/car-info';

// Import styles
import '../../component/search/search.scss';

function VehiclesSearchBlock() {
  
  return (
    <>
      <form className="row search-box">
          <div className="vehicles-total-info">
						<h5 className="vehicles-total"><i className="fas fa-caret-right"></i>(44)<span className="vehicles-label">Vehicles</span></h5>
					</div>
          <Col lg={10} md={9} sm={12}>
            <Row>
              <Col lg={2} md={6} sm={6}>
                <Select options={CarYear} placeholder="Year" />
              </Col>
              <Col lg={2} md={6} sm={6}>
                <Select options={CarMake} placeholder="Make" />
              </Col>
              <Col lg={2} md={6} sm={6}>
                <Select options={CarModel} placeholder="Model" />
              </Col>
              <Col lg={6} md={6} sm={6}>
                <input className="form-control" name="location" placeholder="Location" />
              </Col>
            </Row>
          </Col>
          <Col lg={2} md={3} sm={12}>
            <Button btnClass="search-btn" btnURL="#" btnText="Search Inventory" />
          </Col>
      </form>
    </>
  );
}

export default VehiclesSearchBlock;
