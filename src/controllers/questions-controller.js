const Questions = require("../models/questions-model");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getOneQuestion = catchAsync(async (req, res, next) => {
  if (req.params.id * 1 > 30) {
    return next(new AppError("There is no question with that number", 404));
  }
  const doc = await Questions.find({ questionNumber: req.params.id });

  res.status(200).json({
    status: "success",
    data: doc,
  });
});

exports.updateQuestions = catchAsync(async (req, res, next) => {
  if (req.params.id * 1 > 30) {
    return next(new AppError("There is no question with that number", 404));
  }
  const doc = await Questions.findOneAndUpdate(
    { questionNumber: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: doc,
  });
});

exports.createQuestions = factory.createOne(Questions);
exports.getAllQuestions = factory.getAll(Questions);

exports.deleteQuestions = factory.deleteOne(Questions);
