const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Role = require('./role.model');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  passwordHash: {
    type: String,
    minLength: [8, "Password must have at least 8 characters"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Role,
    required: [true, "User role is required"],
  },
  phone: {
    type: String,
    match: [
      /^(?:\+84|0)(3[2-9]|5[2689]|7[0-9]|8[1-9]|9[0-9])[0-9]{7}$/,
      "Invalid phone number",
    ],
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

// hashed password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });

module.exports = mongoose.model("User", userSchema);