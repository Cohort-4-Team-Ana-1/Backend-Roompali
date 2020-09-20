const Rooms = require('./schema')
const roomsController = {}

/**
 * Brings all room records with all its attributes.
 */
roomsController.readRooms = async (req, res, next) => {
  try {
    const rooms = await Rooms.find()
    res.status(200).json({
      message: 'Rooms listed',
      total: rooms.length,
      body: rooms
    })
  } catch (error) {
    next(error)
  }
}

/**
 * Brings one room record with all its attributes using its _id atribute as guide.
 */
roomsController.readOneRoom = async (req, res, next) => {
  try {
    const room = await Rooms.findById(req.params.id)
    res.status(200).json({
      message: 'Room listed',
      body: room
    })
  } catch (error) {
    next(error)
  }
}

/**
 * Creates a room record with all its attributes.
 */
roomsController.createRoom = async (req, res, next) => {
  try {
    const room = new Rooms({
      room_name: req.body.room_name,
      main_image: req.body.main_image,
      secondary_image: req.body.secondary_image,
      city: req.body.city,
      address: req.body.address,
      room_whatsapp: req.body.room_whatsapp,
      room_email: req.body.room_email,
      square_meters: req.body.square_meters,
      furniture: req.body.furniture,
      price: req.body.price,
      available: req.body.available,
      wifi: req.body.wifi,
      private_bathroom: req.body.private_bathroom,
      cleaning: req.body.cleaning,
      closet: req.body.closet,
      room_description: req.body.room_description,
      deleted: req.body.deleted
    })
    await room.save()
    res.status(201).json({
      message: 'Room created',
      body: room
    })
  } catch (error) {
    next(error)
  }
}

/**
 * Updates one room record using its _id attribute as guide.
 */
roomsController.updateRoom = async (req, res, next) => {
  try {
    const { id } = req.params

    const room = {
      room_name: req.body.room_name,
      main_image: req.body.main_image,
      secondary_image: req.body.secondary_image,
      city: req.body.city,
      address: req.body.address,
      room_whatsapp: req.body.room_whatsapp,
      room_email: req.body.room_email,
      square_meters: req.body.square_meters,
      furniture: req.body.furniture,
      price: req.body.price,
      available: req.body.available,
      wifi: req.body.wifi,
      private_bathroom: req.body.private_bathroom,
      cleaning: req.body.cleaning,
      closet: req.body.closet,
      room_description: req.body.room_description,
      deleted: req.body.deleted
    }
    await Rooms.findByIdAndUpdate(
      id,
      { $set: room },
      { omitUndefined: true, upsert: true }
    )
    res.status(200).json({
      message: `Room ${id} updated`
    })
  } catch (error) {
    next(error)
  }
}

/**
 * Updates one room record using its _id attribute as guide, only changes the atribute deleted to true instead of erase the room.
 */
roomsController.deleteRoom = async (req, res, next) => {
  try {
    const { id } = req.params
    const room = {
      deleted: true
    }
    await Rooms.findByIdAndUpdate(
      id,
      { $set: room },
      { omitUndefined: true, upsert: true }
    )
    res.status(200).json({
      message: `Room ${id} deleted`
    })
  } catch (error) {
    next(error)
  }
}

/**
 * Brings all room record with the matching city attribute.
 */
roomsController.searchRoomByCity = async (req, res, next) => {
  try {
    console.log(req.query.city)
    const city = req.query.city.toLowerCase()
    console.log(city)
    const rooms = await Rooms.find({ city })
    res.status(200).json({
      message: 'Rooms finded',
      total: rooms.length,
      body: rooms
    })
  } catch (error) {
    next(error)
  }
}

module.exports = roomsController
