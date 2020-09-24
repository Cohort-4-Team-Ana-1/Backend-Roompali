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
      const rolId = req.body.rolId
      const roomId = req.body.roomId
      const searchFavoriteRooms = await favoriteRoomsController.findFavoriteRoomById(rolId, roomId)
      if (searchFavoriteRooms !== undefined) {
        res.status(400).json({
          message: 'That room is already in favorites_rooms section of this user'
        })
      } else {
        await favoriteRoomsController.addOneFavoriteRoom(rolId, roomId)
        const rol = await favoriteRoomsController.readOneRol(rolId)
        res.status(200).json({
          message: 'New room added to favorites_rooms section',
          body: rol
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
      const rolId = req.body.rolId
      const roomId = req.body.roomId
      await favoriteRoomsController.deleteOneFavoriteRoom(rolId, roomId)
      const rol = await favoriteRoomsController.readOneRol(rolId)
      res.status(200).json({
        message: `Favorite room ${rolId} removed`,
        body: rol
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = favoriteRoomsApi
