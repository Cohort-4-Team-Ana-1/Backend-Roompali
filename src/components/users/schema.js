const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
const { Schema } = mongoose;

const Users = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Users", Users);
