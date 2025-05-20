const mongoose = require("mongoose");
const Product = require("./product.model");

const plantCareSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    required: [true, "Product is required"],
  },
  watering: {
    type: String,
    required: [true, "Watering is required"],
    trim: true,
  },
  sunlight: {
    type: String,
    required: [true, "Sun light is required"],
    trim: true,
  },
  fertilizer: {
    type: String,
    required: [true, "Fertilizer is required"],
    trim: true,
  },
  temperature: {
    type: String,
    required: [true, "Temperature is required"],
    trim: true,
  },
  Notes: {
    type: String,
    required: [true, "Notes is required"],
    trim: true,
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PlantCare", plantCareSchema);