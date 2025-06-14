import { useEffect, useState } from 'react';
import { FormCheck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bannerImg from '../../src/assets/images/banner.webp';

function CarListingSidebar({ onFilteredCars }) {
  const [searchListGroup, setSearchListGroup] = useState([]);
  const [active, setActive] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const res = await axios.get("https://lift-2tmr.onrender.com/api/filter");
        const data = res.data;

        const newSearchListGroup = Object.keys(data).map((key, index) => {
          const title = key.replace(/Options$/, '');
          const label = title.charAt(0).toUpperCase() + title.slice(1);

          return {
            id: index + 1,
            key: title,
            item: label,
            checklist: data[key].map((option, optIndex) => ({
              id: index * 100 + optIndex,
              name: option,
              label: option,
              type: 'checkbox'
            }))
          };
        });

        setSearchListGroup(newSearchListGroup);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    if (Object.keys(selectedFilters).length > 0) {
      fetchCarsByFilters(selectedFilters);
    } else {
      // Optionally clear filtered cars
      setFilteredCars([]);
      onFilteredCars([]);
    }
  }, [selectedFilters]);

  const fetchCarsByFilters = async (filters) => {
    try {
      const filterEntries = Object.entries(filters);
      const requests = [];

      for (const [title, specs] of filterEntries) {
        for (const spec of specs) {
          requests.push(
            
            axios.get("https://lift-2tmr.onrender.com/api/cars/by-attribute", {
              params: {
                title,
                spec,
              },
            })
          );
        }
      }

      const responses = await Promise.all(requests);
      const allCars = responses.flatMap(res => res.data);

      const uniqueCars = Array.from(new Map(allCars.map(car => [car._id, car])).values());

      setFilteredCars(uniqueCars);
      onFilteredCars(uniqueCars); // 🔥 Send filtered cars to parent
    } catch (error) {
      console.error('Error fetching filtered cars:', error);
    }
  };

  const handleCheckboxChange = (groupKey, option) => {
    setSelectedFilters((prev) => {
      const currentGroup = prev[groupKey] || [];
      const isChecked = currentGroup.includes(option);

      const updatedGroup = isChecked
        ? currentGroup.filter((item) => item !== option)
        : [...currentGroup, option];

      const updatedFilters = {
        ...prev,
        [groupKey]: updatedGroup
      };

      if (updatedFilters[groupKey].length === 0) {
        delete updatedFilters[groupKey];
      }

      return updatedFilters;
    });
  };

  return (
    <div className="listing-sidebar">
      <div className="widget">
        <div className="widget-search">
          <h5 className="title">Advanced Search</h5>
        </div>
        <div className="search-list-group">
          <ul className="list-group">
            {searchListGroup.map((group) => (
              <li key={group.id} className="list-group-item">
  <Link
    to="#"
    className={active === group.id ? 'active' : ''}
    onClick={(e) => {
      e.preventDefault(); // prevent page jump on #
      setActive(active === group.id ? null : group.id);
    }}
  >
    {group.item}
  </Link>
  <ul style={{ display: active === group.id ? 'block' : 'none' }}>
    {group.checklist.map((check) => (
      <li key={check.id}>
        <FormCheck
          label={check.label}
          name={check.name}
          type={check.type}
          id={`${group.id}-${check.id}`}
          onChange={() =>
            handleCheckboxChange(group.key, check.name)
          }
        />
      </li>
    ))}
  </ul>
</li>

            ))}
          </ul>
        </div>
      </div>

     
    </div>
  );
}

export default CarListingSidebar;
