const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/check-user", authController.checkUser);
router.post("/change-password", authController.changePassword);

module.exports = router;