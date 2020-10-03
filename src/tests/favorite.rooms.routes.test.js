const proxyquire = require('proxyquire')
const { FavoriteRoomsControllerMock } = require('../utils/mocks/favoriteRooms')
const testServer = require('../utils/testServer')

describe('Favorite Rooms - Route', () => {
  const router = proxyquire('../components/favorite-rooms/routes', {
    './controller': FavoriteRoomsControllerMock
  })

  const request = testServer(router)

/*   describe('POST /api/favorite-rooms/add', () => {
    it('Should respond with status 200', (done) => {
      request.post('/api/favorite-rooms/add').expect(200, done)
    })

    it('Should respond with a Content-type json', (done) => {
      request.post('/api/favorite-rooms/add').expect('Content-type', /json/, done)
    })
  }) */

/*   describe('POST /api/favorite-rooms/remove', () => {
    it('Should respond with status 200', (done) => {
      request.post('/api/favorite-rooms/remove').expect(200, done)
    })
    it('Should respond with a Content-type json', (done) => {
      request.post('/api/favorite-rooms/remove').expect('Content-type', /json/, done)
    })
  }) */
})
