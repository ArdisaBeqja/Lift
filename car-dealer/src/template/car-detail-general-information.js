import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CarDetailsGeneralInformation() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  // console.log("id:", id);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/cars/${id}`);
        if (!response.ok) {
          throw new Error('Car not found');
        }
        const data = await response.json();
        
        // Find the Details attribute inside the attributes array
        const detailsAttribute = data.attributes.find(attr => attr.title === "Detajet");
        console.log("detajettt", detailsAttribute)
        if (detailsAttribute) {
          setDetails(detailsAttribute.specification);  // Store the specification (details) in state
        } else {
          setDetails("No details availableee.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {  // Only fetch if the id exists
      fetchCarDetails();
    }
  }, [id]);  // Add 'id' as the dependency so that it only triggers when the id changes

  return (
    <div className="car-generalinfo">
      <h6>Car Details</h6>
      {details ? (
        <p>{details}</p>  // Display the generalInfo (details)
      ) : (
        <p>Loading car details...</p>
      )}
    </div>
  );
}

export default CarDetailsGeneralInformation;
