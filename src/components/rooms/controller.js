const Rooms = require('./schema')

/**
 * Brings all room records with all its attributes.
 */
const readRooms = async () => {
  const rooms = await Rooms.find({})
  return rooms
}

/**
 * Brings one room record with all its attributes using its _id atribute as guide.
 */
const readOneRoom = async roomId => {
  const room = await Rooms.findById(roomId)
  return room
}

/**
 * Creates a room record with all its attributes.
 */
const createRoom = async room => {
  const roomData = {
    room_name: room.room_name,
    main_image: room.main_image,
    secondary_image: room.secondary_image,
    city: room.city,
    address: room.address,
    room_whatsapp: room.room_whatsapp,
    room_email: room.room_email,
    square_meters: room.square_meters,
    furniture: room.furniture,
    price: room.price,
    available: room.available,
    wifi: room.wifi,
    private_bathroom: room.private_bathroom,
    cleaning: room.cleaning,
    closet: room.closet,
    room_description: room.room_description
  }
  const newRoom = await Rooms.create(roomData)
  return newRoom
}

/**
 * Updates one room record using its _id attribute as guide.
 */
const updateRoom = async (roomId, room) => {
  const roomChanges = {
    room_name: room.room_name,
    main_image: room.main_image,
    secondary_image: room.secondary_image,
    city: room.city,
    address: room.address,
    room_whatsapp: room.room_whatsapp,
    room_email: room.room_email,
    square_meters: room.square_meters,
    furniture: room.furniture,
    price: room.price,
    available: room.available,
    wifi: room.wifi,
    private_bathroom: room.private_bathroom,
    cleaning: room.cleaning,
    closet: room.closet,
    room_description: room.room_description
  }

  await Rooms.findByIdAndUpdate(
    roomId,
    { $set: roomChanges },
    { omitUndefined: true, upsert: true }
  )

  const roomChanged = await Rooms.findById(roomId)
  return roomChanged
}

/**
 * Deletes a room record by its roomId
 */
const deleteRoom = async roomId => {
  await Rooms.findByIdAndDelete(roomId)
}

/**
 * Brings all room record with the matching city attribute.
 */

const searchRoomByCity = async city => {
  const cityProccesed = city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  console.log(cityProccesed)
  const rooms = await Rooms.find({ city: cityProccesed })
  return rooms
}

module.exports = {
  readRooms,
  readOneRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  searchRoomByCity
}
