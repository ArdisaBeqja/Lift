import { useState, useEffect } from "react";

const useCarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:8000/api/cars")
      fetch(`${process.env.REACT_APP_API_URL}/api/cars`)

      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  return cars;
};

export default useCarList;



