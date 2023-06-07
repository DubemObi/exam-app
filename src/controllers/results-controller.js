const Answer = require("../models/answers-model");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getResults = catchAsync(async (req, res, next) => {
  const doc = await Answer.find({ userID: req.user.id });

  if (!doc) {
    return next(new AppError("This user hasn't taken the exam", 404));
  }

  const mainAnswer = await Answer.find({ role: "admin" });

  let count = 0;
  let result = [];
  for (let i = 0; i < Object.values(mainAnswer).length; i++) {
    if (Object.values(doc)[i] === Object.values(mainAnswer)[i]) {
      count += 1;
    } else {
      const str = `Number ${i + 1} Failed!`;
      result.push(str);
    }
  }

  res.status(200).json({
    status: "success",
    result: count,
    data: result,
  });
});
