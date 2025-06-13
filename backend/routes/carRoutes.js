import express from 'express';
import { getCarList,getCarsByInspectionDateAll,getUniqueAttributeFilters,getCarProp ,updateCarAttribute ,getCarIdByDate,getInspectionDatesWithStatus,getCarDetails, toggleInspectionChecked,createCar0,getFilteredCars } from '../controllers/carController.js';
import { getFilterOptions } from '../controllers/carController.js';
import path from 'path';
import multer from 'multer';
import Car from '../models/Car.js';  // Adjust path as needed

// Configure Multer to store files with their original extensions
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // specify the uploads folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname); // Save file with its original extension
//   }
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // specify the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save file with its original extension
  }
});
const upload = multer({ storage: storage }); // 'images' corresponds to the form input name

// Route example

// const upload = multer({ storage: storage }); // 'images' corresponds to the form input name
const router = express.Router();
// 👎 This catches all routes — even API ones — and serves the frontend


// Route to get all cars
// router.get('/filter', getFilterOptions);

router.get('/cars', getCarList);
router.get("/inspections", getInspectionDatesWithStatus);

router.get('/cars/:id', getCarDetails);

router.get('/car/filter', getFilteredCars);
router.patch("/cars1/:id/toggle-inspection", toggleInspectionChecked);
router.get('/cars1/date/:date', getCarIdByDate); // e.g., /cars/date/2025-06-07
router.get("/carsProp/:id", getCarProp);
router.put("/cars/:id/attributes/:attrId", updateCarAttribute);
router.get('/filter', getUniqueAttributeFilters);
router.get('/cars/by-date/:date', getCarsByInspectionDateAll);


router.post("/addcar", upload.array('images'), (req, res) => {
  console.log("Received form data:");
  console.log("Body:", req.body);
  console.log("Files:", req.files);
  createCar0(req, res);
});


export default router;
