import express from "express";
import mongoose from "mongoose";
import Car from "./models/Car.js"; // ✅ Ensure ".js" extension
import carRouter from './routes/carRoutes.js'
import cors from "cors";  // Import the cors package
import authRouter from "./routes/userRoutes.js"; // <-- use import not require
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = process.env.PORT || 8000;


// app.use(cors({
//   origin: 'http://localhost:3000'  // Allow frontend to communicate with backend
// }));
const allowedOrigins = [
  // 'http://localhost:3000',             // local dev frontend
  'https://cardealeral.onrender.com'  // deployed frontend URL
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true // if you need cookies or authentication headers
}));


// app.use(express.json());
app.use(express.static(path.join(__dirname, '../car-dealer/build')));


const uri = "mongodb+srv://beqjaardisa:ardisa123@cluster0.nz6yp6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)
  .then(() => console.log("✅ Successfully connected to MongoDB!"))
  .catch(error => console.error("❌ MongoDB connection error:", error));

// --- Serve React frontend ---



// Use auth routes
app.use('/api', authRouter);  // <-- here is your /api/register and /api/login
app.post('/api/login', (req, res) => {
});
app.use("/api", carRouter); // Prefix '/api' for the car routes
app.post("/add", async (req, res) => {
  try {
    const { id, imgSrc, carName, description, carPrice, carNewPrice, attributes, review, leadForm, gallery } = req.body;

    const newCar = new Car({
      id,
      imgSrc,
      carName,
      description,
      carPrice,
      carNewPrice,
      attributes,
      review,
      leadForm,
      gallery,
    });

    await newCar.save();
    res.status(201).json({ message: "✅ Car added successfully!", car: newCar });
  } catch (error) {
    res.status(500).json({ message: "❌ Error saving car data", error });
  }
});

app.use('/uploads', express.static('uploads')); // to serve image files

app.use(express.static(path.join(__dirname, '../car-dealer/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../car-dealer/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});
