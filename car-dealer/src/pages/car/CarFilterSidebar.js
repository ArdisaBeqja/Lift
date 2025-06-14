import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'react-bootstrap';
import YourComponent from './YourComponent';

function CarFilterSidebar({ onFilteredCars }) {
  const [filterOptions, setFilterOptions] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [allCars, setAllCars] = useState([]);

  const filterTitles = {
    colorOptions: "Color",
    transmissionOptions: "Transmission",
    fuelOptions: "Fuel Type",
    // add more here based on your backend keys
  };

  useEffect(() => {
    axios.get('https://lift-2tmr.onrender.com/api/filter')
      .then(res => setFilterOptions(res.data))
      .catch(err => console.error('Error fetching filters:', err));

    axios.get('https://lift-2tmr.onrender.com/api/car/filter')
      .then(res => {
        setAllCars(res.data);
        onFilteredCars(res.data);
      })
      .catch(err => console.error('Error fetching cars:', err));
  }, []);

  const applyFilters = (filters) => {
    const filteredCars = allCars.filter(car =>
      Object.entries(filters).every(([key, val]) => {
        if (!val || val.toLowerCase().startsWith('all')) return true;
        return car.attributes.some(attr =>
          key.toLowerCase().includes(attr.title.toLowerCase().replace(/\s+/g, '')) &&
          String(attr.specification) === String(val)
        );
      })
    );
    onFilteredCars(filteredCars);
  };

  const handleSelectChange = (e, filterKey) => {
    const newValue = e.target.value;
    const updatedFilters = {
      ...selectedFilters,
      [filterKey]: newValue
    };
    setSelectedFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
    onFilteredCars(allCars);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Filters</h5>
        <Button variant="outline-secondary" size="sm" onClick={handleClearFilters}>
          Clear All
        </Button>
      </div>

      {/* {Object.entries(filterOptions).map(([key, values]) => (
        <Card className="mb-3" key={key}>
          <Card.Header className="text-capitalize">
            <YourComponent />
          </Card.Header>

          <Card.Body>
            <Form.Select
              value={selectedFilters[key] || ''}
              onChange={(e) => handleSelectChange(e, key)}
            >
              <option value="">All</option>
              {values.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </Form.Select>
          </Card.Body>
        </Card>
      ))} */}
      {Object.entries(filterOptions).map(([key, values], index) => (
  <Card className="mb-3" key={key}>
    <Card.Header className="text-capitalize">
      <YourComponent index={index} />
    </Card.Header>

    <Card.Body>
      {/* <Form.Select
        value={selectedFilters[key] || ''}
        onChange={(e) => handleSelectChange(e, key)}
      >
        <option value="">All</option>
        {values.map((option, idx) => (
          <option key={idx} value={option}>{option}</option>
        ))}
      </Form.Select> */}
<Form.Select
  value={selectedFilters[key] || ''}
  onChange={(e) => handleSelectChange(e, key)}
>
  <option value="">-click-</option> {/* Default placeholder */}
  {values
    .filter(option => !option.toLowerCase().includes('all')) // Remove "all" variants
    .map((option, idx) => (
      <option key={idx} value={option}>{option}</option>
    ))}
</Form.Select>




    </Card.Body>
  </Card>
))}

    </div>
  );
}

export default CarFilterSidebar;
