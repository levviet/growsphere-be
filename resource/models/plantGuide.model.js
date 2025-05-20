const mongoose = require("mongoose");
const Product = require("./product.model");

const plantGuideSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    required: [true, "Product is required"],
  },
  contentMarkdown: {
    type: String,
    required: [true, "Content markdown is required"],
    trim: true,
  },
  tags: [
    {
      type: String,
      required: [true, "Tags is required"],
      trim: true,
    },
  ],
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PlantGuide", plantGuideSchema);