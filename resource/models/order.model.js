const mongoose = require("mongoose");
const User = require("./user.model");

const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: [true, "User is required"],
  },
  orderDate: {
    type: Date,
    required: [true, "Order date is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    trim: true,
  },
  totalAmount: {
    type: Number,
    required: [true, "Total amount is required"],
  },
  promotionCode: {
    type: String,
    required: [true, "Promotion code is required"],
    trim: true,
  },
  paymentMethod: {
    type: String,
    required: [true, "Payment method is required"],
    trim: true,
  },
  paidAt: {
    type: Date,
    required: [true, "Paid at is required"],
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);