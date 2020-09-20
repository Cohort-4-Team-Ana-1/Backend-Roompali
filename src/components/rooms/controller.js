const Rooms = require('./schema')

/**
 * Brings all room records with all its attributes.
 */
const readRooms = () => {
  const rooms = Rooms.find({})
  return rooms
}

/**
 * Brings one room record with all its attributes using its _id atribute as guide.
 */
const readOneRoom = roomId => {
  const room = Rooms.findById(roomId)
  return room
}

/**
 * Creates a room record with all its attributes.
 */
const createRoom = room => {
  const newRoom = new Rooms({
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
    room_description: room.room_description,
    deleted: room.deleted
  })
  newRoom.save()
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
    room_description: room.room_description,
    deleted: room.deleted
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
 * Updates one room record using its _id attribute as guide, only changes the atribute deleted to true instead of erase the room.
 */
const deleteRoom = async roomId => {
  const room = {
    deleted: true
  }
  await Rooms.findByIdAndUpdate(
    roomId,
    { $set: room },
    { omitUndefined: true, upsert: true }
  )
}

/**
 * Brings all room record with the matching city attribute.
 */
const searchRoomByCity = city => {
  const cityProccesed = city.toLowerCase()
  const rooms = Rooms.find({ city: cityProccesed })
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
