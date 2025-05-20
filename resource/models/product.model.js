const mongoose = require("mongoose");
const Category = require("./category.model");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
    required: [true, "Category is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  stock: {
    type: Number,
    required: [true, "Stock is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  images: [
    {
      type: String,
      required: [true, "Images is required"],
      trim: true,
    },
  ],
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);