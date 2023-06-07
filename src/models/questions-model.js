const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
    required: [true, "Input question number"],
  },
  question: {
    type: String,
    minlength: 8,
    required: [true, "Input question!"],
  },
  answerOptions: {
    a: {
      type: String,
      required: true,
    },
    b: {
      type: String,
      required: true,
    },
    c: {
      type: String,
      required: true,
    },
    d: {
      type: String,
      required: true,
    },
  },
  answer: {
    type: String,
    required: [true, "Please provide answer"],
  },
  subject: {
    type: String,
    required: [true, "Enter the subject"],
  },
  //   questions: {
  //     1: {
  //       question: String,
  //       answerOptions: {
  //         a: {
  //           type: String,
  //           required: true,
  //         },
  //         b: {
  //           type: String,
  //           required: true,
  //         },
  //         c: {
  //           type: String,
  //           required: true,
  //         },
  //         d: {
  //           type: String,
  //           required: true,
  //         },
  //       },
  //       answer: {
  //         type: String,
  //         required: [true, "Please provide answer"],
  //       },
  //     },
  //   },
});

const Questions = mongoose.model("Questions", questionsSchema);
module.exports = Questions;
