import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  imgSrc: { type: String, required: false },
  carName: { type: String, required: true },
  description: { type: String, required: true },
  carPrice: { type: String, required: true },
  carNewPrice: { type: String, required: false },
  attributes: [
    {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      specification: { type: String, required: true },
      icon: { type: String, required: true }
    }
  ],
  review: [
    {
      id: { type: Number, required: true },
      icon: { type: String, required: true }
    }
  ],
  leadForm: [
    {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      icon: { type: String, required: true },
      form: { type: String, required: true },
      size: { type: String }
    }
  ],
  gallery: [
    {
      id: { type: Number, required: true },
      image: { type: String, required: true }
    }
  ],
  extraFeatures: [
    {
      id: { type: Number, required: true },
      item: { type: String, required: true }
    }
  ]
});




const Car = mongoose.model("Car", carSchema);

export default Car; // ✅ Export as ES module
