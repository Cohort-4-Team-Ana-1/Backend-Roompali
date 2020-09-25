const Rooms = require('./schema')

/**
 * Brings all room records with all its attributes.
 */
const readRooms = async () => {
  const rooms = await Rooms.find({}).populate('owner')
  return rooms
}

/**
 * Brings one room record with all its attributes using its _id atribute as guide.
 */
const readOneRoom = async roomId => {
  const room =  await Rooms.findById(roomId).populate('owner')
  return room
}

/**
 * Creates a room record with all its attributes.
 */
const createRoom = async room => {
  const cityProccesed = room.city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const roomData = {
    room_name: room.room_name,
    main_image: room.main_image,
    secondary_image: room.secondary_image,
    city: cityProccesed,
    address: room.address,
    square_meters: room.square_meters,
    furniture: room.furniture,
    price: room.price,
    available: room.available,
    wifi: room.wifi,
    private_bathroom: room.private_bathroom,
    cleaning: room.cleaning,
    closet: room.closet,
    room_description: room.room_description,
    owner: room.owner
  }
  const newRoom = await Rooms.create(roomData)
  return newRoom
}

/**
 * Updates one room record using its _id attribute as guide.
 */
const updateRoom = async (roomId, room) => {
  const cityProccesed = room.city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const roomChanges = {
    room_name: room.room_name,
    main_image: room.main_image,
    secondary_image: room.secondary_image,
    city: cityProccesed,
    address: room.address,
    square_meters: room.square_meters,
    furniture: room.furniture,
    price: room.price,
    available: room.available,
    wifi: room.wifi,
    private_bathroom: room.private_bathroom,
    cleaning: room.cleaning,
    closet: room.closet,
    room_description: room.room_description,
    owner: room.owner
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
