const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginShema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Login = mongoose.model("Login", LoginShema);

module.exports = Login;