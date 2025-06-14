import { useState, useEffect } from "react";

const useCarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // console.log("API URL:", process.env.REACT_APP_API_URL);

      fetch("https://lift-2tmr.onrender.com/api/cars")

      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  return cars;
};

export default useCarList;



