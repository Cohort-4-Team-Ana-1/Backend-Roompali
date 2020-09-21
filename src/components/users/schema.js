const mongoose = require("mongoose");
const { Schema } = mongoose;

const Users = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  deleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Users", Users);
