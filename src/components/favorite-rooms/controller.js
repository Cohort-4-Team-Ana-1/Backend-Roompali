const Roles = require('../roles/schema')

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

/**
 * Bring one rol by id
 */
const readOneRol = async (rolId) => {
    const rol = await Roles.findById(rolId)
    return rol
  }

module.exports = {
    addOneFavoriteRoom,
    findFavoriteRoomById,
    deleteOneFavoriteRoom,
    readOneRol
}