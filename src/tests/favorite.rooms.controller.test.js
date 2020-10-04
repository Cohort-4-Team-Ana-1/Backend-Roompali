const assert = require('assert')
const proxyquire = require('proxyquire')

const FavoriteRoomsControllerMock = require('../utils/mocks/favoriteRoomsController')

describe('Favorite Rooms - Controller', () => {
  const favoriteRoomsController = proxyquire('../components/favorite-rooms/controller', {
    '../roles/schema': FavoriteRoomsControllerMock
  })
})
