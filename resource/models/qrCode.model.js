const mongoose = require("mongoose");

const qrCodeSchema = mongoose.Schema({
  code: {
    type: String,
    required: [true, "Code is required"],
    unique: true,
    trim: true,
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QrCode", qrCodeSchema);