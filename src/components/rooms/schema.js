const mongoose = require('mongoose')
const { Schema } = mongoose

const Rooms = new Schema({
  room_name: { type: String, required: true },
  main_image: { type: String, required: true },
  secondary_images: [{ type: String, required: true }],
  city: { type: String, required: true },
  address: { type: String, required: true },
  square_meters: { type: Number, required: true },
  available: { type: Boolean, default: true },
  room_description: { type: String, required: true },
  owner: {type: Schema.ObjectId, ref: 'Roles'},
  price: { type: Number, required: true },
  bed: {type: Boolean, default: false},
  desk: {type: Boolean, default: false},
  closet: { type: Boolean, default: false },
  couch: { type: Boolean, default: false },
  chair: { type: Boolean, default: false },
  kitchen: { type: Boolean, default: false },
  visits: { type: Boolean, default: false }, 
  wifi: { type: Boolean, default: false },
  parking: { type: Boolean, default: false }, 
  washing_machine: { type: Boolean, default: false },
  television: { type: Boolean, default: false }, 
  heating: { type: Boolean, default: false },
  private_bathroom: { type: Boolean, default: false },
  gymnasium: { type: Boolean, default: false },
  air_conditioner: { type: Boolean, default: false }
})

module.exports = mongoose.model('Rooms', Rooms)
