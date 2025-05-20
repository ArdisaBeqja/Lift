import express from "express";
import mongoose from "mongoose";
import Car from "./models/Car.js"; // ✅ Ensure ".js" extension
import carRouter from './routes/carRoutes.js'
import cors from "cors";  // Import the cors package
import authRouter from "./routes/userRoutes.js"; // <-- use import not require

const app = express();
const port = 8000;

app.use(cors({
  origin: 'http://localhost:3000'  // Allow frontend to communicate with backend
}));

app.use(express.json());

const uri = "mongodb+srv://beqjaardisa:ardisa123@cluster0.nz6yp6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)
  .then(() => console.log("✅ Successfully connected to MongoDB!"))
  .catch(error => console.error("❌ MongoDB connection error:", error));




// Use auth routes
app.use('/api', authRouter);  // <-- here is your /api/register and /api/login
app.post('/api/login', (req, res) => {
});

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

app.use("/api", carRouter); // Prefix '/api' for the car routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});
app.use('/uploads', express.static('uploads')); // to serve image files
