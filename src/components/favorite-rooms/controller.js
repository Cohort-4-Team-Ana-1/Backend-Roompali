const Users = require('../users/schema')

/**
 * Add one favorite room record to the attribute favorites_rooms
 */
const addOneFavoriteRoom = async (userId, roomId) => {
  const favoriteRoomAdded = await Users.findByIdAndUpdate({ _id: userId }, { $push: { favorite_rooms: roomId } })
  return favoriteRoomAdded
}

/**
   * Find a room in the attribute favorites_rooms by its id
   */
const findFavoriteRoomById = async (userId, roomId) => {
  const favoriteRoom = await Users.find({ _id: userId, favorite_rooms: { _id: roomId } }).populate('favorite_rooms')
  return favoriteRoom[0]
}

/**
   * Delete one favorite room record in the attribute favorites_rooms
   */
const deleteOneFavoriteRoom = async (userId, roomId) => {
  await Users.findByIdAndUpdate({ _id: userId }, { $pull: { favorite_rooms: roomId } })
}

/**
 * Bring one rol by id
 */
const readOneUser = async (userId) => {
  const rol = await Users.findById(userId)
  return rol
}

module.exports = {
  addOneFavoriteRoom,
  findFavoriteRoomById,
  deleteOneFavoriteRoom,
  readOneUser
}
