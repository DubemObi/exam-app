const express = require("express");
const QuestionController = require("../controllers/questions-controller");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router
  .route("/")
  .get(QuestionController.getAllQuestions)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    QuestionController.createQuestions
  );

router
  .route("/:id")
  .get(QuestionController.getOneQuestion)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    QuestionController.updateQuestions
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    QuestionController.deleteQuestions
  );

module.exports = router;
