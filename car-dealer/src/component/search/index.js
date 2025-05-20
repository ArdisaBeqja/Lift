import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Select from 'react-select';

// Scss
import './search.scss';

// Site Data
import CarMake, {
  CarBody,
  CarModel,
  CarStatus,
  CarYear,
} from '../../data/car-info';

function Search() {
  // Header Search
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className={`header-search ${isActive ? 'search-active' : ''}`}>
        <button className="search-btn" onClick={handleClick}>
          <i className="fa fa-search not-click"></i>
        </button>
        <div className="search-box">
          <div className="search-box-main">
            <div className="search-form-wrap container">
              <form className="search-box row">
                <Col xl={2} lg={4} md={6}>
                  <Select options={CarMake} placeholder="Make" />
                </Col>
                <Col xl={2} lg={4} md={6}>
                  <Select options={CarModel} placeholder="Model" />
                </Col>
                <Col xl={2} lg={4} md={6}>
                  <Select options={CarYear} placeholder="Year" />
                </Col>
                <Col xl={2} lg={4} md={6}>
                  <Select options={CarBody} placeholder="Body style" />
                </Col>
                <Col xl={2} lg={4} md={6}>
                  <Select options={CarStatus} placeholder="Vehicle Status" />
                </Col>
                <Col xl={2} lg={4} md={6}>
                  <div className="text-center">
                    <button className="button red" type="button">
                      Search
                    </button>
                  </div>
                </Col>
              </form>
            </div>
          </div>
          <div className="search-bg-overlay" onClick={handleClick}></div>
        </div>
      </div>
    </>
  );
}

export default Search;
