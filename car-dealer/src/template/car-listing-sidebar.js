// Libraries
import { FormCheck } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Site Data
import bannerImg from '../../src/assets/images/banner.webp';

function CarListingSidebar(props) {
  const AdvancedSearchList = [
    { id: 1, item: 'Results Found', icon: 'fa-solid fa-star', number: '(39)' },
    { id: 2, item: 'Compare Vehicles', icon: 'fa-solid fa-cart-shopping', number: '(10)'},
  ];

  const SearchListGroup = [
    {
      id: 1,
      item: 'Year',
      checklist: [
        { id: 1, name: 'All Years', label: 'All Years', typr: 'checkbox' },
        { id: 2, name: '2017', label: '2017', typr: 'checkbox' },
        { id: 3, name: '2018', label: '2018', typr: 'checkbox' },
        { id: 4, name: '2019', label: '2019', typr: 'checkbox' },
        { id: 5, name: '2020', label: '2020', typr: 'checkbox' },
        { id: 6, name: '2021', label: '2021', typr: 'checkbox' },
        { id: 7, name: '2022', label: '2022', typr: 'checkbox' },
        { id: 8, name: '2023', label: '2023', typr: 'checkbox' },
        { id: 9, name: '2024', label: '2024', typr: 'checkbox' },
      ],
    },
    {
      id: 2,
      item: 'Condition',
      checklist: [
        {
          id: 10,
          name: 'All Conditions',
          label: 'All Conditions',
          typr: 'checkbox',
        },
        { id: 11, name: 'Brand New', label: 'Brand New', typr: 'checkbox' },
        {
          id: 12,
          name: 'Slightly Used',
          label: 'Slightly Used',
          typr: 'checkbox',
        },
        { id: 13, name: 'Used', label: 'Used', typr: 'checkbox' },
      ],
    },
    {
      id: 3,
      item: 'Body',
      checklist: [
        {
          id: 14,
          name: 'All Body Styles',
          label: 'All Body Styles',
          typr: 'checkbox',
        },
        { id: 15, name: '2dr Car', label: '2dr Car', typr: 'checkbox' },
        { id: 16, name: '4dr Car', label: '4dr Car', typr: 'checkbox' },
        { id: 17, name: 'Convertible', label: 'Convertible', typr: 'checkbox' },
        { id: 18, name: 'Sedan', label: 'Sedan', typr: 'checkbox' },
        {
          id: 19,
          name: 'Sports Utility Vehicle',
          label: 'Sports Utility Vehicle',
          typr: 'checkbox',
        },
      ],
    },
    {
      id: 4,
      item: 'Model',
      checklist: [
        { id: 20, name: 'All Models', label: 'All Models', typr: 'checkbox' },
        { id: 21, name: '3-Series', label: '3-Series', typr: 'checkbox' },
        { id: 22, name: 'Boxster', label: 'Boxster', typr: 'checkbox' },
        { id: 23, name: 'Carrera', label: 'Carrera', typr: 'checkbox' },
        { id: 24, name: 'Cayenne', label: 'Cayenne', typr: 'checkbox' },
        { id: 25, name: 'F-type', label: 'F-type', typr: 'checkbox' },
        { id: 26, name: 'GT-R', label: 'GT-R', typr: 'checkbox' },
        { id: 27, name: 'GTS', label: 'GTS', typr: 'checkbox' },
        { id: 28, name: 'M6', label: 'M6', typr: 'checkbox' },
        { id: 29, name: 'Macan', label: 'Macan', typr: 'checkbox' },
        { id: 30, name: 'Mazda6', label: 'Mazda6', typr: 'checkbox' },
        { id: 31, name: 'RLX', label: 'RLX', typr: 'checkbox' },
      ],
    },
    {
      id: 5,
      item: 'Transmission',
      checklist: [
        { id: 32, name: 'All Transmissions', label: 'All Transmissions', typr: 'checkbox'},
        { id: 33, name: '5-Speed Manual', label: '5-Speed Manual', typr: 'checkbox'},
        { id: 34, name: '6-Speed Automatic',  label: '6-Speed Automatic',  typr: 'checkbox'},
        { id: 35, name: '6-Speed Manual', label: '6-Speed Manual', typr: 'checkbox'},
        { id: 36, name: '6-Speed Semi-Auto', label: '6-Speed Semi-Auto', typr: 'checkbox'},
        { id: 37, name: '7-Speed PDK', label: '7-Speed PDK', typr: 'checkbox' },
        { id: 38, name: '8-Speed Automatic', label: '8-Speed Automatic', typr: 'checkbox'},
        { id: 39, name: '8-Speed Tiptronic', label: '8-Speed Tiptronic', typr: 'checkbox'},
      ],
    },
    {
      id: 6,
      item: 'Exterior Color',
      checklist: [
        { id: 40, name: 'Ruby Red Metallic',  label: 'Ruby Red Metallic', typr: 'checkbox'},
        { id: 41, name: 'Racing Yellow',  label: 'Racing Yellow', typr: 'checkbox'},
        { id: 42, name: 'Guards Red', label: 'Guards Red', typr: 'checkbox' },
        { id: 43, name: 'Aqua Blue Metallic', label: 'Aqua Blue Metallic', typr: 'checkbox'},
        { id: 44, name: 'White', label: 'White', typr: 'checkbox' },
        { id: 45, name: 'Dark Blue Metallic', label: 'Dark Blue Metallic', typr: 'checkbox'},
      ],
    },
    {
      id: 7,
      item: 'Interior Color',
      checklist: [
        { id: 46, name: 'Platinum Grey',  label: 'Platinum Grey', typr: 'checkbox',},
        { id: 47, name: 'Agate Grey', label: 'Agate Grey', typr: 'checkbox',},
        { id: 48, name: 'Marsala Red', label: 'Marsala Red', typr: 'checkbox' },
        { id: 49, name: 'Alcantara Black', label: 'Alcantara Black',  typr: 'checkbox',},
        { id: 50, name: 'Black', label: 'Black', typr: 'checkbox' },
        { id: 51, name: 'Luxor Beige', label: 'Luxor Beige', typr: 'checkbox',},
      ],
    },
  ];

  const [active, setActive] = useState();

  return (
    <>
      <div className="listing-sidebar">
        <div className="widget">
          <div className="widget-search">
            <h5 className="title">Advanced Search</h5>
            <ul className="advanced-search-list">
              {AdvancedSearchList.map((val, index) => (
                <li key={index}>
                  <i className={val.icon}></i>
                  {val.item}
                  <span className="number">{val.number}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="search-list-group">
            <ul className="list-group">
              {SearchListGroup.map((val, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => setActive(val.id)}
                >
                  <Link to="#" className={active === val.id ? 'active' : ''}>
                    {val.item}
                  </Link>
                  <ul>
                    {val.checklist.map((val, index) => (
                      <li key={index}>
                        <FormCheck
                          label={val.label}
                          name={val.name}
                          type={val.type}
                          id={val.id}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="widget-banner">
          <img className="img-fluid" src={bannerImg} alt="" />
        </div>
      </div>
    </>
  );
}
export default CarListingSidebar;
