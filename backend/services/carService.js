import Car from '../models/Car.js';  // Use import instead of require in ES modules

const getCars = async () => {
    try {
        const cars = await Car.find();
        console.log("Cars found:", cars);

        return cars;
    } catch (error) {
        throw new Error("Error fetching cars");
    }
};

// Function to get a car by ID
const getCarById = async (id) => {
    try {
      const car = await Car.findOne({id}); // Find the car by its ID
      return car;
    } catch (error) {
      throw new Error("--Error fetching car by ID");
    }
  };
  

  // const createCar = async (carData)=>{
   
  //   try{
  //     const car= new Car(carData);
  //     return await car.save();
  //   }catch (error){
  //     throw new Error ("error creating car",error);
  //   }

  // };
  const createCar = async (carData) => {
    try {
      console.log("Car data received:", carData); // Log the car data to verify if it's correct
      const car = new Car(carData);
      await car.save();
      return car; // Return the saved car if everything is fine
    } catch (error) {
      console.error("Error creating car:", error); // Log the error for better insight
      throw new Error("Error creating car: " + error.message); // Pass the error message
    }
  };
  
  export { getCars, getCarById, createCar }; // Use export for multiple functions
