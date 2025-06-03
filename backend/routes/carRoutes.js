import express from 'express';
import { getCarList, getCarDetails, createCar0,getFilteredCars,getCarsByAttribute } from '../controllers/carController.js';
import { getFilterOptions } from '../controllers/carController.js';
import path from 'path';
import multer from 'multer';

// Configure Multer to store files with their original extensions
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // specify the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save file with its original extension
  }
});

const upload = multer({ storage: storage }); // 'images' corresponds to the form input name
const router = express.Router();

// Route to get all cars
router.get('/filter', getFilterOptions);

router.get('/cars', getCarList);
router.get('/cars/by-attribute', getCarsByAttribute);


// Route to get car details by ID
router.get('/cars/:id', getCarDetails);
router.get('/car/filter', getFilteredCars);

// router.post("/addcar", upload, async (req, res) => {
//   try {
//     const { id, carName, description, carPrice, carNewPrice, attributes, review, leadForm } = req.body;
    
//     // Create the gallery array by mapping over the uploaded files
//     const gallery = req.files.map((file, index) => ({
//       id: index + 1, // Assign an ID (you can change this logic if necessary)
//       image: `/uploads/${file.filename}` // The image path that will be saved in the gallery
//     }));

//     const newCar = new Car({
//       id,
//       carName,
//       description,
//       carPrice,
//       carNewPrice,
//       attributes,
//       review,
//       leadForm,
//       gallery, // Save the gallery array in the car document
//     });

//     await newCar.save();
//     res.status(201).json({ message: "✅ Car added successfully!", car: newCar });
//   } catch (error) {
//     res.status(500).json({ message: "❌ Error saving car data", error });
//   }
// });
router.post("/addcar", upload.array('images'), (req, res) => {
  console.log("Received form data:");
  console.log("Body:", req.body);
  console.log("Files:", req.files);
  createCar0(req, res);
});


export default router;
