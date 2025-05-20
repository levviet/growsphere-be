const mongoose = require("mongoose");
const PlantInstance = require("./plantInstance.model");

const scheduleSchema = mongoose.Schema({
  plantInstanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: PlantInstance,
    required: [true, "Plant instance is required"],
  },
  nextWaterAt: {
    type: Date,
    required: [true, "Next water at is required"],
  },
  frequencyDays: {
    type: Number,
    required: [true, "Frequency days is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    trim: true,
  },
  notes: {
    type: String,
    required: [true, "Notes is required"],
    trim: true,
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Schedule", scheduleSchema);