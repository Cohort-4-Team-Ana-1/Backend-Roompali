const express = require('express')
const roomsController = require('./controller')

const roomsApi = (app) => {
  const router = express.Router()
  app.use('/api/rooms', router)

  router.get('/', roomsController.readRooms)
  router.get('/:id', roomsController.readOneRoom)
  router.post('/', roomsController.createRoom)
  router.patch('/:id', roomsController.updateRoom)
  router.patch('/delete/:id', roomsController.deleteRoom)

  app.get('/api/rooms-search', roomsController.searchRoomByCity)
}

module.exports = roomsApi
