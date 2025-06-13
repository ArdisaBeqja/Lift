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
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);

    // Assuming carData is sent as JSON string in a form field called 'carData'
    const carData = JSON.parse(req.body.carData);

   if (req.files && req.files.length > 0) {
      carData.gallery = req.files.map(file => ({
        id: Date.now(), // or generate a unique ID
        image: file.filename // or use file.path if you want the full path
      }));
    }
    const car = await createCar(carData);
    res.status(201).json(car);
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ message: error.message });
  }
};
const getCarsByInspectionDateAll = async (req, res) => {
  const { date } = req.params;

  try {
    // Create range from start to end of the given day
    const startOfDay = new Date(date);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const cars = await Car.find({
      inspectionDate: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    if (!cars || cars.length === 0) {
      return res.status(404).json({ message: 'No cars found for this inspection date' });
    }

    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars by inspection date:', error);
    res.status(500).json({ message: 'Error fetching cars by inspection date' });
  }
};

const getUniqueAttributeFilters = async (req, res) => {
  try {
    const cars = await Car.find();

    const filters = {};

    cars.forEach(car => {
      car.attributes?.forEach(attr => {
        const key = attr.title
          .replace(/\s+/g, '') + 'Options'; // Normalize title to use as key

        if (!filters[key]) {
          filters[key] = new Set(); // Use Set to ensure uniqueness
        }

        if (attr.specification && typeof attr.specification === 'string') {
          filters[key].add(attr.specification.trim());
        }
      });
    });

    const result = {};

    for (const [key, values] of Object.entries(filters)) {
      const readableTitle = key
        .replace(/Options$/, '')
        .replace(/([A-Z])/g, ' $1')
        .trim();

      result[key] = [`All ${readableTitle}s`, ...Array.from(values)];
    }

    res.json(result);
  } catch (error) {
    console.error('Error generating filters:', error);
    res.status(500).json({ message: 'Failed to generate filter options' });
  }
};

const updateCarAttribute = async (req, res) => {
  try {

    const { id, attrId } = req.params;
    const { title, specification, icon } = req.body;
    console.log("carId",id);
    // Find the car by id
    const car = await Car.findOne({ id: Number(id) });

    if (!car) return res.status(404).json({ message: "Car not found" });

    // Find the attribute inside the attributes array
    const attribute = car.attributes.find(attr => attr.id === Number(attrId));
    if (!attribute) return res.status(404).json({ message: "Attribute not found" });

    // Update fields
    if (title !== undefined) attribute.title = title;
    if (specification !== undefined) attribute.specification = specification;
    if (icon !== undefined) attribute.icon = icon;

    // Save the updated car document
    await car.save();

    return res.status(200).json({ message: "Attribute updated successfully", attribute });
  } catch (error) {
    console.error("Error updating attribute:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getFilterOptions = async (req, res) => {
  console.log("----------------------------------- Filters route hit");

  try {
    const filters = await Car.aggregate([
      { $unwind: "$attributes" },
      // Filter out the attribute with title "Details"
      { $match: { "attributes.title": { $nin: ["Detajet", "Detajet"] } } },

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
const getCarIdByDate = async (req, res) => {
  const { date } = req.params;

  try {
    // Parse the date from the URL and set time to 00:00:00
    const dayStart = new Date(`${date}T00:00:00.000Z`);
    const dayEnd = new Date(`${date}T00:00:00.000Z`);
    dayEnd.setUTCDate(dayEnd.getUTCDate() + 1); // Add one day

    const car = await Car.findOne({
      inspectionDate: {
        $gte: dayStart,
        $lt: dayEnd,
      },
    });

    if (car) {
      res.json({ id: car._id });
    } else {
      res.status(404).json({ message: 'No car found on this date' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getCarProp = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch only specific fields
    const car = await Car.findById(id).select("liftName liftPrice attributes");

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    console.error("Error fetching car details:", error);
    res.status(500).json({ message: "Server error" });
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
  numriserik: "numriserik",
  vendndodhjaeinstalimit: "vendndodhjaeinstalimit",
  emriindërtesës: "emrii ndërtesës",
  dataeinstalimit: "dataeinstalimit",
  dataeservisimittëfundit: "dataeservisimittëfundit",
  dataeinspektimittëradhës: "dataeinspektimittëradhës",
  gjendjaoperacionale: "gjendjaoperacionale",
  kapacitetiKg: "kapaciteti(kg)",
  numrimaksimalipasagjerëve: "numrimaksimalipasagjerëve",
  shpejtësia: "shpejtësia(m/s)",
  llojiimotorrit: "llojiimotorrit",
  llojiidyerve: "llojiidyerve",
  detajet: "detajet"
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

    // const attributeTitleMap = {
    //   numriserik: "Numri Serik",
    //   vendndodhjaeinstalimit: "Vendndodhja e Instalimit",
    //   emriindërtesës: "Emri i Ndërtesës",
    //   dataeinstalimit: "Data e Instalimit",
    //   dataeservisimittëfundit: "Data e Servisimit të Fundit",
    //   dataeinspektimittëradhës: "Data e Inspektimit të Radhës",
    //   gjendjaoperacionale: "Gjendja Operacionale",
    //   kapacitetiKg: "Kapaciteti (kg)",
    //   numrimaksimalipasagjerëve: "Numri Maksimal i Pasagjerëve",
    //   shpejtësia: "Shpejtësia (m/s)",
    //   llojiimotorrit: "Lloji i Motorrit",
    //   llojiidyerve: "Lloji i Dyerve",
    //   detajet: "Detajet"
    // };

    // Map from camelCase to actual title
    const mappedTitle = attributeTitleMap[title.toLowerCase()] || title;

    const cars = await Car.find({
      attributes: {
        $elemMatch: {
          title: mappedTitle,
          specification: { $in: [spec, Number(spec)] } // check both string and number
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

const filterCarsByAttributeTitleAndSpec = async (req, res) => {
  const { title, spec } = req.query;

  if (!title || !spec) {
    return res.status(400).json({ message: "Both 'title' and 'spec' query parameters are required." });
  }

  try {
    const cars = await getCars();

    const filteredCars = cars.filter(car =>
      car.attributes?.some(attr =>
        attr.title === title && attr.specification === spec
      )
    );

    res.status(200).json(filteredCars);
  } catch (error) {
    console.error("Error filtering cars by title and spec:", error);
    res.status(500).json({ message: error.message });
  }
};

const toggleInspectionChecked = async (req, res) => {
  const carId = Number(req.params.id);  // convert to number
  console.log("yessssssssssssss",carId);
  const { inspectionChecked } = req.body;

  if (typeof inspectionChecked !== "boolean") {
    return res.status(400).json({ message: "inspectionChecked must be boolean" });
  }

  try {
    const car = await Car.findOneAndUpdate(
      { id: carId },
      { inspectionChecked },
      { new: true }
    );

    if (!car) return res.status(404).json({ message: "Car not found" });

    res.status(200).json(car);
  } catch (error) {
    console.error("Toggle inspection error:", error);
    res.status(500).json({ message: error.message });
  }
};

 const getInspectionDatesWithStatus = async (req, res) => {
  try {
    // Fetch all cars, but only select inspectionDate and inspectionChecked fields to optimize
    const cars = await Car.find({}, "inspectionDate inspectionChecked").lean();

    // Map into desired array of objects
    const inspectionData = cars.map(car => ({
      inspectionDate: car.inspectionDate,
      inspectionChecked: car.inspectionChecked,
    }));

    return res.status(200).json(inspectionData);
  } catch (error) {
    console.error("Error fetching inspection data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export {updateCarAttribute,getCarsByInspectionDateAll,getUniqueAttributeFilters ,toggleInspectionChecked,getCarProp,getCarIdByDate,getInspectionDatesWithStatus,getCarList,filterCarsByAttributeTitleAndSpec,getCarDetails, createCar0,getFilterOptions,getFilteredCars,getCarsByAttribute }; // Export both functions
