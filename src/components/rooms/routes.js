const express = require('express')
const roomsController = require('./controller')
const rolesController = require('../roles/controller')

const roomsApi = (app) => {
  const router = express.Router()
  app.use('/api/rooms', router)

  /**
   * Route for readRoom Function
   */
  router.get('/', async (req, res, next) => {
    try {
      const rooms = await roomsController.readRooms()
      res.status(200).json({
        message: 'Rooms listed',
        total: rooms.length,
        body: rooms
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Route for readOneRoom Function
   */
  router.get('/:roomId', async (req, res, next) => {
    try {
      const room = await roomsController.readOneRoom(req.params.roomId)
      res.status(200).json({
        message: 'Room listed',
        body: room
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Route for createRoom Function
   */
  router.post('/', async (req, res, next) => {
    try {
      const rolId = await rolesController.searchRolByUserId(req.body.userId)
      const roomCreated = await roomsController.createRoom(rolId._id, req.body)
      res.status(201).json({
        message: 'Room created',
        body: roomCreated
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Route for updateRoom Function
   */
  router.patch('/:roomId', async (req, res, next) => {
    try {
      const roomId = req.params.roomId
      const room = req.body
      const roomUpdated = await roomsController.updateRoom(roomId, room)
      res.status(200).json({
        message: `Room ${roomId} updated`,
        body: roomUpdated
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Route for deleteRoom Function
   */
  router.delete('/:roomId', async (req, res, next) => {
    try {
      const roomId = req.params.roomId
      await roomsController.deleteRoom(roomId)
      res.status(200).json({
        message: `Room ${roomId} deleted`
      })
    } catch (error) {
      next(error)
    }
  })

  /**
   * Route for searchRoomByCity Function
   */
  app.get('/api/rooms-search', async (req, res, next) => {
    try {
      const city = req.query.city
      const rooms = await roomsController.searchRoomByCity(city)
      res.status(200).json({
        message: 'Rooms finded',
        total: rooms.length,
        body: rooms
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/number/:number', async (req, res, next) => {
    try {
      const numberRooms = parseInt(req.params.number)
      const rooms = await roomsController.readNumberRooms(numberRooms)
      res.status(200).json({
        message: `${numberRooms} Rooms listed`,
        body: rooms
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = roomsApi
