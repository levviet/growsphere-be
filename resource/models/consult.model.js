const mongoose = require("mongoose");
const PlantInstance = require("./plantInstance.model");
const User = require("./user.model");

const consultSchema = mongoose.Schema({
  plantInstanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: PlantInstance,
    required: [true, "Plant instance is required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: [true, "User is required"],
  },
  symptomsDescription: {
    type: String,
    required: [true, "Symptoms description is required"],
    trim: true,
  },
  imageUrls: [
    {
      type: String,
      required: [true, "Image urls is required"],
      trim: true,
    },
  ],
  aiResponse: {
    type: String,
    required: [true, "AI response is required"],
    trim: true,
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Consult", consultSchema);