// const jwt = require("jsonwebtoken");

// exports.generateAccessToken = async (user) => {
//   return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "15m",
//   });
// };

// exports.generateRefreshToken = async (user) => {
//   const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });

//   return refreshToken;
// };

// exports.blacklistAccessToken = async (token) => {
//   try {
//     const decoded = jwt.decode(token);
//     const expiresIn = decoded.exp * 1000 - Date.now();
//   } catch (error) {
//     console.error("Lỗi khi blacklist token:", error);
//   }
// };