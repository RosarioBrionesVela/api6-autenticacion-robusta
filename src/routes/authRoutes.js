const express = require("express");

const router = express.Router();

const { login } = require("../controllers/authController");
const loginLimiter = require("../middleware/rateLimiter");
const validarAppToken = require("../middleware/validarAppToken");

router.post(
    "/login",
    validarAppToken,
    loginLimiter,
    login
);

module.exports = router;