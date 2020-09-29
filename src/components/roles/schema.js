const mongoose = require('mongoose')
const { Schema } = mongoose

const Roles = new Schema({
  user_data: { type: Schema.ObjectId, ref: 'Users', required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  contact_email: { type: String, required: true},
  whatsapp: { type: String, required: true },
  user_picture: { type: String, required: true },
  owner: { type: Boolean, default: false }
})

module.exports = mongoose.model('Roles', Roles)
