const mongoose = require("mongoose");
const Product = require("./product.model");

const simConfigSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    required: [true, "Product is required"],
  },
  initialSize: {
    type: Number,
    required: [true, "Initial size is required"],
  },
  growthRate: {
    type: Number,
    required: [true, "Growth rate is required"],
  },
  timeUnit: {
    type: String,
    required: [true, "Time unit is required"],
    trim: true,
  },
  otherParams: {
    type: String,
    required: [true, "Other params is required"],
    trim: true,
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SimConfig", simConfigSchema);