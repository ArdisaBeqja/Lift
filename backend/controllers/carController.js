import { getCars, getCarById, createCar } from '../services/carService.js'; // Import the functions from the service layer
import Car from '../models/Car.js';  // Adjust path as needed

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


const createCar0 = async (req, res) => {
  try {
    

    const carData = JSON.parse(req.body.carData); // Parse carData

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
// const getFilterOptions = async (req, res) => {
//   try {
//     const filters = await Car.aggregate([
//       { $unwind: "$attributes" },
//       { $match: { "attributes.title": { $nin: ["Details", "details"] } } },
//       {
//         $group: {
//           _id: "$attributes.title",
//           options: { $addToSet: "$attributes.specification" },
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           title: "$_id",
//           options: 1,
//         },
//       },
//     ]);

//     // Aggregate price min and max (convert price string to number)
//     const priceStats = await Car.aggregate([
//       {
//         $addFields: {
//           priceNum: {
//             $toDouble: {
//               $replaceAll: {
//                 input: { $replaceAll: { input: "$carPrice", find: "$", replacement: "" } },
//                 find: ",",
//                 replacement: ""
//               }
//             }
//           }
//         }
//       },
//       {
//         $group: {
//           _id: null,
//           minPrice: { $min: "$priceNum" },
//           maxPrice: { $max: "$priceNum" }
//         }
//       }
//     ]);

//     const formattedFilters = {};
//     filters.forEach(filter => {
//       const key = `${camelCase(filter.title)}Options`;
//       const cleanedOptions = [...new Set(
//         filter.options
//           .filter(opt => typeof opt === "string")
//           .map(opt => opt.trim())
//       )];
//       formattedFilters[key] = ["All " + filter.title.toLowerCase() + "s", ...cleanedOptions];
//     });

//     if (priceStats.length > 0) {
//       formattedFilters.priceRange = {
//         min: priceStats[0].minPrice,
//         max: priceStats[0].maxPrice
//       };
//     }

//     res.status(200).json(formattedFilters);
//   } catch (error) {
//     console.error("❌ Error in filter route:", error);
//     res.status(500).json({ message: "Error fetching filters", error });
//   }
// };

const getFilterOptions = async (req, res) => {
  console.log("----------------------------------- Filters route hit");

  try {
    const filters = await Car.aggregate([
      { $unwind: "$attributes" },
      // Filter out the attribute with title "Details"
      { $match: { "attributes.title": { $nin: ["Details", "details"] } } },

      {
        $group: {
          _id: "$attributes.title",
          options: { $addToSet: "$attributes.specification" },
        },
      },
      {
        $project: {
          _id: 0,
          title: "$_id",
          options: 1,
        },
      },
    ]);

    const formattedFilters = {};
    filters.forEach(filter => {
      const key = `${camelCase(filter.title)}Options`; // e.g., conditionOptions
      const cleanedOptions = [...new Set(
        filter.options
          .filter(opt => typeof opt === "string")
          .map(opt => opt.trim())
      )];
      formattedFilters[key] = ["All " + filter.title.toLowerCase() + "s", ...cleanedOptions];
    });

    res.status(200).json(formattedFilters);
  } catch (error) {
    console.error("❌ Error in filter route:", error);
    res.status(500).json({ message: "Error fetching filters", error });
  }
};

// Helper function
function camelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special chars
    .replace(/\s(.)/g, function (match, group1) {
      return group1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function (match, group1) {
      return group1.toLowerCase();
    });
}


const attributeTitleMap = {
  make: "Make",
  model: "Model",
  registrationDate: "registrationDate",
  mileage: "Mileage",
  horsepower: "Horsepower",
  condition: "Condition",
  ExteriorColor: "ExteriorColor",
  interiorColor: "interiorColor",
  transmission: "Transmission",
  engine: "Engine",
  drivetrain: "Drivetrain",
};

const getFilteredCars = async (req, res) => {
  try {
    const queryFilters = [];

    for (const [queryKey, queryValue] of Object.entries(req.query)) {
      const title = attributeTitleMap[queryKey];
      if (!title) continue;

      const specifications = queryValue.split(",").map(v => v.trim());

      queryFilters.push({
        attributes: {
          $elemMatch: {
            title,
            specification: { $in: specifications }
          }
        }
      });
    }

    const filterQuery = queryFilters.length > 0 ? { $and: queryFilters } : {};

    console.log("MongoDB filter query:", JSON.stringify(filterQuery));

    const cars = await Car.find(filterQuery).exec();

    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const getCarsByAttribute = async (req, res) => {
  try {
    const { title, spec } = req.query;

    if (!title || !spec) {
      return res.status(400).json({ message: "Attribute and value are required" });
    }

    const mappedTitle = attributeTitleMap[title.toLowerCase()] || title;

    const cars = await Car.find({
      attributes: {
        $elemMatch: {
          title: mappedTitle,
          specification: { $in: [spec, Number(spec)] }  // check both string and number
        }
      }
    });

    if (!cars || cars.length === 0) {
      return res.status(404).json({ message: "No cars found with specified attribute" });
    }

    res.status(200).json(cars);
  } catch (error) {
    console.error("Error in getCarsByAttribute:", error);
    res.status(500).json({ message: "Server error" });
  }
};






export { getCarList, getCarDetails, createCar0,getFilterOptions,getFilteredCars,getCarsByAttribute }; // Export both functions
