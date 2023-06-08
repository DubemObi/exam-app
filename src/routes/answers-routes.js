const express = require("express");
const AnswersController = require("../controllers/answers-controller");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    AnswersController.getAllAnswers
  )
  .post(authController.protect, AnswersController.createAnswers)
  .patch(authController.protect, AnswersController.updateAnswers);

module.exports = router;
