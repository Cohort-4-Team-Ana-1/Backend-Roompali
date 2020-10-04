const proxyquire = require('proxyquire')
const { FavoriteRoomsControllerMock } = require('../utils/mocks/favoriteRooms')
const testServer = require('../utils/testServer')

describe('Favorite Rooms - Route', () => {
  const router = proxyquire('../components/favorite-rooms/routes', {
    './controller': FavoriteRoomsControllerMock
  })

  const request = testServer(router)
})
