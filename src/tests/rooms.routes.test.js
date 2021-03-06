const assert = require('assert')
const proxyquire = require('proxyquire')
const {
  roomsMock,
  roomIdTest,
  RoomsControllerMock
} = require('../utils/mocks/rooms')
const RolesControllerMock = require('../utils/mocks/roles')
const testServer = require('../utils/testServer')

describe('Rooms - Routes', () => {
  const router = proxyquire('../components/rooms/routes', {
    './controller': RoomsControllerMock,
    '../roles/controller': RolesControllerMock
  })

  const request = testServer(router)

  describe('GET /api/rooms | Rooms', () => {
    it('Should respond with status 200', (done) => {
      request.get('/api/rooms/').expect(200, done)
    })

    it('Should respond with a Content-type json', (done) => {
      request.get('/api/rooms').expect('Content-type', /json/, done)
    })

    it('Should respond with the rooms list', (done) => {
      request.get('/api/rooms').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          message: 'Rooms listed',
          total: roomsMock.length,
          body: roomsMock
        })
        done()
      })
    })
  })

  describe('GET /api/rooms/roomId | One Room', () => {
    it('Should respond with status 200', (done) => {
      request.get(`/api/rooms/${roomIdTest}`).expect(200, done)
    })

    it('Should respond with a Content-type json', (done) => {
      request
        .get(`/api/rooms/${roomIdTest}`)
        .expect('Content-type', /json/, done)
    })

    it('Should respond with the room data', (done) => {
      request.get(`/api/rooms/${roomIdTest}`).end((err, res) => {
        assert.deepStrictEqual(res.body, {
          message: 'Room listed',
          body: roomsMock
        })
        done()
      })
    })
  })
  describe('PATCH /api/rooms/roomId', () => {
    it('Should respond with status 200', (done) => {
      request.patch(`/api/rooms/${roomIdTest}`).expect(200, done)
    })

    it('Should respond with a Content-type json', (done) => {
      request
        .patch(`/api/rooms/${roomIdTest}`)
        .expect('Content-type', /json/, done)
    })
  })

  describe('DELETE /api/rooms/:roomId', () => {
    it('Should respond with status 200', (done) => {
      request.delete(`/api/rooms/${roomIdTest}`).expect(200, done)
    })

    it('Should respond with a Content-type json', (done) => {
      request
        .delete(`/api/rooms/${roomIdTest}`)
        .expect('Content-type', /json/, done)
    })

    it('Should respond with the room deleted message', (done) => {
      request.delete(`/api/rooms/${roomIdTest}`).end((err, res) => {
        assert.deepStrictEqual(res.body, {
          message: `Room ${roomIdTest} deleted`
        })
        done()
      })
    })
  })

  // Search Room By City
  describe('GET /api/rooms-search?=bogota', () => {
    it('Should respond with status 200', (done) => {
      request.get('/api/rooms-search').expect(200, done)
    })

    it('Should respond with a Content-type json', (done) => {
      request
        .get('/api/rooms-search?=bogota')
        .expect('Content-type', /json/, done)
    })
  })
})
