const express = require("express");
const ResultController = require("../controllers/results-controller");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router.get("/", authController.protect, ResultController.getResults);

module.exports = router;
