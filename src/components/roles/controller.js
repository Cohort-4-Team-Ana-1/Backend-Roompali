const Roles = require('./schema')

/**
 * Brings roles records
*/
const readRoles = async () => {
  const roles = await Roles.find({}).populate('user_data').populate('favorite_rooms').populate('own_rooms')
  return roles
}

/**
 * Bring one rol by id
 */
const readOneRol = async (rolId) => {
  const rol = await Roles.findById(rolId).populate('user_data').populate('favorite_rooms').populate('own_rooms')
  return rol
}

/**
 * Create new Rol
 */
const createRol = async (rol) => {
  const rolData = {
    user_data: rol.user_data,
    first_name: rol.first_name,
    last_name: rol.last_name,
    contact_email: rol.contact_email,
    user_picture: rol.user_picture,
    favorite_rooms: rol.favorite_rooms,
    owner: rol.owner,
    whatsapp: rol.whatsapp,
    own_rooms: rol.own_rooms
  }
  const createdRol = await Roles.create(rolData)
  return createdRol
}

/**
 * Update Rol by Id
 */
const updateRol = async (rolId, rol) => {
  const rolData = {
    user_data: rol.user_data,
    first_name: rol.first_name,
    last_name: rol.last_name,
    contact_email: rol.contact_email,
    user_picture: rol.user_picture,
    favorite_rooms: rol.favorite_rooms,
    owner: rol.owner,
    whatsapp: '+57' + rol.whatsapp,
    own_rooms: rol.own_rooms
  }
  await Roles.findByIdAndUpdate(
    rolId,
    { $set: rolData },
    { omitUndefined: true, upsert: true }
  )
  const updatedRol = await Roles.findById(rolId)
  return updatedRol
}

/**
 * Delete a Rol by Id
 */
const deleteRol = async (rolId) => {
  await Roles.findByIdAndDelete(rolId)
}

/**
 * Add one favorite room record to the attribute favorites_rooms
 */
const addOneFavoriteRoom = async (rolId, roomId) => {
  const favoriteRoomAdded = await Roles.findByIdAndUpdate({ _id: rolId }, { $push: { favorite_rooms: roomId } })
  return favoriteRoomAdded
}

/**
 * Find a room in the attribute favorites_rooms by its id
 */
const findFavoriteRoomById = async (rolId, roomId) => {
  const favoriteRoom = await Roles.find({ _id: rolId, favorite_rooms: { _id: roomId } }).populate('favorite_rooms')
  return favoriteRoom[0]
}

/**
 * Delete one favorite room record in the attribute favorites_rooms
 */
const deleteOneFavoriteRoom = async (rolId, roomId) => {
  await Roles.findByIdAndUpdate({ _id: rolId }, { $pull: { favorite_rooms: roomId } })
}

module.exports = {
  readRoles,
  readOneRol,
  createRol,
  updateRol,
  deleteRol,
  addOneFavoriteRoom,
  findFavoriteRoomById,
  deleteOneFavoriteRoom
}
