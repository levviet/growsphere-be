const mongoose = require("mongoose");
const Product = require("./product.model");
const User = require("./user.model");

const reviewSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    required: [true, "Product is required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: [true, "User is required"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
  },
  comment: {
    type: String,
    required: [true, "Comment is required"],
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);