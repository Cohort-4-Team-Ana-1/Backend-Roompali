const express = require('express')
const favoriteRoomsController = require('./controller')

const favoriteRoomsApi = (app) => {
  const router = express.Router()
  app.use('/api/favorite-rooms', router)

  /**
   * Route for add one favorite room
   */
  router.post('/add', async (req, res, next) => {
    try {
      const userId = req.body.userId
      const roomId = req.body.roomId
      const searchFavoriteRooms = await favoriteRoomsController.findFavoriteRoomById(userId, roomId)
      if (searchFavoriteRooms !== undefined) {
        res.status(400).json({
          message: 'That room is already in favorites_rooms section of this user'
        })
      } else {
        await favoriteRoomsController.addOneFavoriteRoom(userId, roomId)
        const user = await favoriteRoomsController.readOneUser(userId)
        res.status(200).json({
          message: 'New room added to favorites_rooms section',
          userId: user._id,
          user: user.username,
          favorite_rooms: user.favorite_rooms
        })
      }
    } catch (error) {
      next(error)
    }
  })

  /**
   * Route for add one favorite room
   */
  router.post('/remove', async (req, res, next) => {
    try {
      const userId = req.body.userId
      const roomId = req.body.roomId
      await favoriteRoomsController.deleteOneFavoriteRoom(userId, roomId)
      const user = await favoriteRoomsController.readOneUser(userId)
      res.status(200).json({
        message: `Favorite room ${userId} removed`,
        userId: user._id,
        user: user.username,
        favorite_rooms: user.favorite_rooms
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = favoriteRoomsApi
