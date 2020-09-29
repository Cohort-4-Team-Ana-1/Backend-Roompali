const assert = require('assert')
const proxyquire = require('proxyquire')

const FavoriteRoomsControllerMock = require('../utils/mocks/favoriteRoomsController')

describe('Favorite Rooms - Controller', () => {
  const favoriteRoomsController = proxyquire('../components/favorite-rooms/controller', {
    '../roles/schema': FavoriteRoomsControllerMock
  })

  describe('When addOneFavoriteRoom is called', async () => {
    it('Should call findByIdAndUpdate function', async () => {
      await favoriteRoomsController.addOneFavoriteRoom()
      assert.strictEqual(FavoriteRoomsControllerMock.findByIdAndUpdateStub.called, true)
    })
  })

  describe('When deleteOneFavoriteRoom is called', async () => {
    it('Should call findByIdAndUpdate function', async () => {
      await favoriteRoomsController.deleteOneFavoriteRoom()
      assert.strictEqual(FavoriteRoomsControllerMock.findByIdAndUpdateStub.called, true)
    })
  })

  describe('When readOneRol is called', async () => {
    it('Should call findById function', async () => {
      await favoriteRoomsController.readOneRol()
      assert.strictEqual(FavoriteRoomsControllerMock.readOneRolStub.called, true)
    })
  })
})
