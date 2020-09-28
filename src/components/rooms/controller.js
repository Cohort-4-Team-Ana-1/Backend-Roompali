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
const createRoom = async (rolId, room) => {
  const roomData = {
    room_name: room.room_name,
    main_image: room.main_image,
    secondary_images: room.secondary_images,
    city: room.city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    address: room.address,
    square_meters: room.square_meters,
    available: room.available,
    room_description: room.room_description,
    owner: rolId,
    price: room.price,
    bed: room.bed,
    desk: room.desk,
    closet: room.closet,
    couch: room.couch,
    chair: room.chair,
    kitchen: room.kitchen,
    visits: room.visits,
    wifi: room.wifi,
    parking: room.parking,
    washing_machine: room.washing_machine,
    television: room.television,
    heating: room.heating,
    gymnasium: room.gymnasium,
    private_bathroom: room.private_bathroom,
    air_conditioner: room.air_conditioner,
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
    city: room.city === undefined ? room.city : room.city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    address: room.address,
    square_meters: room.square_meters,
    available: room.available,
    room_description: room.room_description,
    owner: room.owner,
    price: room.price,
    bed: room.bed,
    desk: room.desk,
    closet: room.closet,
    couch: room.couch,
    chair: room.chair,
    kitchen: room.kitchen,
    visits: room.visits,
    wifi: room.wifi,
    parking: room.parking,
    washing_machine: room.washing_machine,
    television: room.television,
    heating: room.heating,
    gymnasium: room.gymnasium,
    private_bathroom: room.private_bathroom,
    air_conditioner: room.air_conditioner,
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
  const rooms = await Rooms.find({ city: cityProccesed }).populate('owner')
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
