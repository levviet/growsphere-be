const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Role name is required"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Role", roleSchema);