const express = require('express')
const rolesController = require('../roles/controller')

const favoriteRoomsApi = (app) => {
  const router = express.Router()
  app.use('/api/favorite-rooms', router)

  // Route for insert a favorites record
  router.post('/add', async (req, res, next) => {
    try {
      const rolId = req.body.rolId
      const roomId = req.body.roomId
      const searchFavoriteRooms = await rolesController.findFavoriteRoomById(rolId, roomId)
      if (searchFavoriteRooms !== undefined) {
        res.status(400).json({
          message: 'That room is already in favorites_rooms section of this user'
        })
      } else {
        await rolesController.addOneFavoriteRoom(rolId, roomId)
        const rol = await rolesController.readOneRol(rolId)
        res.status(200).json({
          message: 'New room added to favorites_rooms section',
          body: rol
        })
      }
    } catch (error) {
      next(error)
    }
  })

  router.post('/remove', async (req, res, next) => {
    const rolId = req.body.rolId
    const roomId = req.body.roomId
    await rolesController.deleteOneFavoriteRoom(rolId, roomId)
    const rol = await rolesController.readOneRol(rolId)
    res.status(200).json({
      message: `Favorite room ${rolId} removed`,
      body: rol
    })
  })
}

module.exports = favoriteRoomsApi
