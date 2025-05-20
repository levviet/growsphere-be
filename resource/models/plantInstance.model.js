const mongoose = require("mongoose");
const Order = require("./order.model");
const Product = require("./product.model");
const User = require("./user.model");
const QrCode = require("./qrCode.model");

const plantInstanceSchema = mongoose.Schema({
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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: [true, "User is required"],
  },
  qrCodeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: QrCode,
    required: [true, "QR code is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    trim: true,
  },
  activateAt: {
    type: Date,
    required: [true, "Activate at is required"],
  },
  purchaseAt: {
    type: Date,
    required: [true, "Purchase at is required"],
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PlantInstance", plantInstanceSchema);