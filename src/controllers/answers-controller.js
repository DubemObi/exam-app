const Answers = require("../models//answers-model");
const User = require("../models/user-model");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllAnswers = factory.getAll(Answers);

exports.createAnswers = catchAsync(async (req, res, next) => {
  req.body.userID = req.user.id;
  const user = await User.findById(req.user.id);
  if (user.role === "admin") {
    req.body.answerType = "admin";
  }

  const doc = await Answers.create(req.body);
  res.status(200).json({
    status: "success",
    data: doc,
  });
});

// exports.updateAnswers = factory.updateOne(Answers); // Used for updating all answers

exports.updateAnswers = catchAsync(async (req, res, next) => {
  const doc = await Answers.findOneAndUpdate(
    { userID: req.user.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!doc) {
    return next(new AppError("Answers not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: doc,
  });
});

//Answers can be stored in a temporary storage in the browser before it is submitted and saved on the database
