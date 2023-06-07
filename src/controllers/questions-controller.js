const Questions = require("../models/questions-model");
const factory = require("./handlerFactory");

exports.createQuestions = factory.createOne(Questions);
exports.getQuestions = factory.getOne(Questions);
exports.getAllQuestions = factory.getAll(Questions);

exports.updateQuestions = factory.updateOne(Questions);
exports.deleteQuestions = factory.deleteOne(Questions);
