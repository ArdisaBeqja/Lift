import { useState, useEffect } from "react";

const useGeneral = () => {
  const [cars, setCars] = useState([]); // Initial state as empty array
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // fetch("http://localhost:8000/api/cars")
    fetch(`${process.env.REACT_APP_API_URL}/api/cars`)
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
        setLoading(false);
      });
  }, []);

  return { cars, loading }; // Return cars and loading state
};

export default useGeneral;