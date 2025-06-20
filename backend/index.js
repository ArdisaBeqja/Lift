import express from "express";
import mongoose from "mongoose";
import Car from "./models/Car.js";
import carRouter from './routes/carRoutes.js';
import cors from "cors";
import authRouter from "./routes/userRoutes.js";
import path from 'path';
import dotenv from "dotenv";

import { fileURLToPath } from 'url';


dotenv.config(); // ✅ Load env variables


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8000;

// const port = 8000;

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://lift-4s9g.onrender.com',
  'https://classashensors.com'
];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy: Origin not allowed'), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// ✅ MongoDB Connection
const uri = "mongodb+srv://beqjaardisa:ardisa123@cluster0.nz6yp6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)
  .then(() => console.log("✅ Successfully connected to MongoDB!"))
  .catch(error => console.error("❌ MongoDB connection error:", error));

// ✅ API Routes
app.use('/api', authRouter);
app.use('/api', carRouter);


app.use('/uploads', express.static('uploads'));

// ✅ Serve React frontend (AFTER API routes)
app.use(express.static(path.join(__dirname, '../car-dealer/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../car-dealer/build', 'index.html'));
});

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
