import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function ExtraFeatureItems() {
  const { id } = useParams();
  const [extraFeatures, setExtraFeatures] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch(`https://lift-4s9g.onrender.com/api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setExtraFeatures(data.extraFeatures || []); // Ensure it's an array
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching cars:", error);
        setLoading(false);
      });
  }, [id]);

  return { extraFeatures, loading };
}

export default ExtraFeatureItems;
