const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  answer: {
    1: {
      type: String,
      default: "--",
    },
    2: {
      type: String,
      default: "--",
    },
    3: {
      type: String,
      default: "--",
    },
    4: {
      type: String,
      default: "--",
    },
    5: {
      type: String,
      default: "--",
    },
    6: {
      type: String,
      default: "--",
    },
    7: {
      type: String,
      default: "--",
    },
    8: {
      type: String,
      default: "--",
    },
    9: {
      type: String,
      default: "--",
    },
    10: {
      type: String,
      default: "--",
    },
    11: {
      type: String,
      default: "--",
    },
    12: {
      type: String,
      default: "--",
    },
    13: {
      type: String,
      default: "--",
    },
    14: {
      type: String,
      default: "--",
    },
    15: {
      type: String,
      default: "--",
    },
    16: {
      type: String,
      default: "--",
    },
    17: {
      type: String,
      default: "--",
    },
    18: {
      type: String,
      default: "--",
    },
    19: {
      type: String,
      default: "--",
    },
    20: {
      type: String,
      default: "--",
    },
    21: {
      type: String,
      default: "--",
    },
    22: {
      type: String,
      default: "--",
    },
    23: {
      type: String,
      default: "--",
    },
    24: {
      type: String,
      default: "--",
    },
    25: {
      type: String,
      default: "--",
    },
    26: {
      type: String,
      default: "--",
    },
    27: {
      type: String,
      default: "--",
    },
    28: {
      type: String,
      default: "--",
    },
    29: {
      type: String,
      default: "--",
    },
    30: {
      type: String,
      default: "--",
    },
    31: {
      type: String,
      default: "--",
    },
    32: {
      type: String,
      default: "--",
    },
    33: {
      type: String,
      default: "--",
    },
    34: {
      type: String,
      default: "--",
    },
    35: {
      type: String,
      default: "--",
    },
    36: {
      type: String,
      default: "--",
    },
    37: {
      type: String,
      default: "--",
    },
    38: {
      type: String,
      default: "--",
    },
    39: {
      type: String,
      default: "--",
    },
    40: {
      type: String,
      default: "--",
    },
    41: {
      type: String,
      default: "--",
    },
    42: {
      type: String,
      default: "--",
    },
    43: {
      type: String,
      default: "--",
    },
    44: {
      type: String,
      default: "--",
    },
    45: {
      type: String,
      default: "--",
    },
    46: {
      type: String,
      default: "--",
    },
    47: {
      type: String,
      default: "--",
    },
    48: {
      type: String,
      default: "--",
    },
    49: {
      type: String,
      default: "--",
    },
    50: {
      type: String,
      default: "--",
    },
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  answerType: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  }
});

module.exports = mongoose.model("Answer", answerSchema);
