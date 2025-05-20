const mongoose = require("mongoose");
const Order = require('./order.model');
const Product = require('./product.model');

const orderItemSchema = mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Order,
    required: [true, "Order is required"],
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    required: [true, "Product is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("OrderItem", orderItemSchema);