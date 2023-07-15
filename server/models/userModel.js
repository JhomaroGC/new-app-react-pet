const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("usae", UserSchema, "Users");
