const Answers = require("../models//answers-model");
const factory = require("./handlerFactory");

exports.createAnswers = factory.createOne(Answers);
exports.getAllAnswers = factory.getAll(Answers);

// exports.updateAnswers = factory.updateOne(Answers); // Used for updating all answers

//Answers can be stored in a temporary storage in the browser before it is submitted and saved on the database
