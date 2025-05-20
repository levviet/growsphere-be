const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const checkUserExists = async (email) => {
  const User = await User.findOne({ email });
  return User ? User : null;
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email đã được sử dụng" });

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "Đăng ký thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const User = await User.findOne({ email });
    if (!User)
      return res.status(400).json({ message: "Email không tồn tại" });

    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch)
      return res.status(400).json({ message: "Mật khẩu không chính xác" });

    const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const User = await User.findOne({ email });

    if (!User)
      return res.status(400).json({ message: "Email không tồn tại" });

    const tempPassword = Math.random().toString(36).slice(-8);
    User.password = await bcrypt.hash(tempPassword, 10);
    await User.save();

    res.json({ message: "Mật khẩu tạm thời: " + tempPassword });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

exports.checkUser = async (req, res) => {
  try {
    const { email } = req.body;
    const User = await checkUserExists(email);

    if (!User) {
      return res.status(404).json({ message: "Email không tồn tại" });
    }

    res.json({ message: "Email hợp lệ, vui lòng tiếp tục đổi mật khẩu" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const User = await checkUserExists(email);

    if (!User) {
      return res.status(404).json({ message: "Email không tồn tại" });
    }

    const isMatch = await bcrypt.compare(oldPassword, User.password);
    if (!isMatch)
      return res.status(400).json({ message: "Mật khẩu cũ không đúng" });

    User.password = newPassword;
    await User.save();

    res.json({ message: "Đổi mật khẩu thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};