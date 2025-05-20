import { getCars, getCarById, createCar } from '../services/carService.js'; // Import the functions from the service layer

const getCarList = async (req, res) => {
    try {
        const cars = await getCars();  // No need for carService.getCars()
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cars' });
    }
};

// Controller to get car details by ID
const getCarDetails = async (req, res) => {
    const { id } = req.params; // Extract car ID from the URL
    try {
      const car = await getCarById(id); // Call the service to get the car by ID
      if (car) {
        res.json(car); // Return car details if found
      } else {
        res.status(404).json({ message: 'Car not found' }); // Return error if car is not found
      }
    } catch (error) {
      res.status(500).json({ message: error.message }); // Return error if fetching fails
    }
  };


// const createCar0 = async (req, res)=>{
//   try{
//     console.log("Request Body:", req.body);  // Log the request body to ensure it's as expected
//     console.log("Body received:", req.body);
//     console.log("Request File:", req.file);

//     const car= await createCar(req.body);
//     res.status(201).json(car);
//   }catch(error){
//     console.error("Error creating car:", error);  // Log the full error message

//     res.status(500).json ({message:error.message});
//   }
// };
// const createCar0 = async (req, res) => {
//   try {
//     console.log("Request Body:", req.body);
//     console.log("Request File:", req.file);

//     const carData = JSON.parse(req.body.carData); // Parse carData
//     console.log("Parsed carData:", carData);

//     // If a file was uploaded, add its path or filename to carData
//     if (req.file) {
//       carData.image = req.file.filename; // or req.file.path if you prefer the full path
//     }

//     const car = await createCar(carData); // Pass the updated object
//     res.status(201).json(car);
//   } catch (error) {
//     console.error("Error creating car:", error);
//     res.status(500).json({ message: error.message });
//   }
// };


const createCar0 = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Request Files:", req.files);  // Files should be available here

    const carData = JSON.parse(req.body.carData); // Parse carData
    console.log("Parsed carData:", carData);

    if (req.files && req.files.length > 0) {
      carData.gallery = req.files.map(file => ({
        id: Date.now(), // or generate a unique ID
        image: file.filename // or use file.path if you want the full path
      }));
    }

    // Save carData to your database or wherever needed
    const car = await createCar(carData); // Assuming this is your DB interaction function
    res.status(201).json(car); // Send a response
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ message: error.message });
  }
};


export { getCarList, getCarDetails, createCar0 }; // Export both functions
