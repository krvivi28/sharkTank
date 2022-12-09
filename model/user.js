const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  title: {
    type: String,
  },
  idea: {
    type: String,
  },
  askedammount: {
    type: String,
  },
  equity: {
    type: String,
  },
  pitchdate: {
    type: Date,
    default: Date.now,
  },
  sharks: [
    {
      investor: String,
      ammount: String,
      equity: String,
      comment: String,
    },
  ],
});

const Register = new mongoose.model("Register", userSchema);
module.exports = Register;
