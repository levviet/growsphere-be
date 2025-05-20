const mongoose = require("mongoose");

const promotionSchema = mongoose.Schema({
  code: {
    type: String,
    required: [true, "Code is required"],
    trim: true,
  },
  discountPercent: {
    type: Number,
    required: [true, "Discount percent is required"],
  },
  maxUses: {
    type: Number,
    required: [true, "Max uses is required"],
  },
  expiresAt: {
    type: Date,
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Promotion", promotionSchema);
