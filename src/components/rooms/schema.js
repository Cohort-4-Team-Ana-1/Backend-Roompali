const mongoose = require('mongoose')
const { Schema } = mongoose

const Rooms = new Schema({
  room_name: { type: String, required: true },
  main_image: { type: String, required: true },
  secondary_image: [{ type: String, required: true }],
  city: { type: String, required: true },
  address: { type: String, required: true },
  square_meters: { type: Number, required: true },
  furniture: [{ type: String }],
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
  wifi: { type: Boolean, default: false },
  private_bathroom: { type: Boolean, default: false },
  cleaning: { type: Boolean, default: false },
  closet: { type: Boolean, default: false },
  room_description: { type: String, required: true },
  owner: {type: Schema.ObjectId, ref: 'Roles'}
})

module.exports = mongoose.model('Rooms', Rooms)
