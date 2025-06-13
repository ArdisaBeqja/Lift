import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  imgSrc: { type: String, required: false },
  liftName: { type: String, required: true },
  description: { type: String, required: true },
  liftPrice: { type: String, required: true },
  inspectionDate: { type: Date, required: true },


  attributes: [
    {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      specification: { type: String, required: true },
      icon: { type: String, required: true },
    },
  ],
  review: [
    {
      id: { type: Number, required: true },
      icon: { type: String, required: true },
    },
  ],
  leadForm: [
    {
      id: { type: Number, required: true },
      title: { type: String, required: true },
      icon: { type: String, required: true },
      form: { type: String, required: true },
      size: { type: String },
    },
  ],
  gallery: [
    {
      id: { type: Number, required: true },
      image: { type: String, required: true }
    }
  ],
  inspectionChecked: { type: Boolean, default: false },  // NEW FIELD

});

export default mongoose.model("Car", carSchema);
