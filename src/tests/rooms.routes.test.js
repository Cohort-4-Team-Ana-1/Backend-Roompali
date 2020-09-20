/* eslint-disable */
const assert = require('assert')
const proxyquire = require('proxyquire')

const { roomsMock, RoomsControllerMock } = require('../utils/mocks/rooms')
const testServer = require('../utils/testServer')

describe('Rooms - Routes', () => {
  const router = proxyquire('../components/rooms/routes', {
    './controller': RoomsControllerMock
  })

  const request = testServer(router)

  describe('GET /api/rooms', () => {
    it('Should respond with status 200', done => {
      request.get('/api/rooms').expect(200, done)
    })
    it('Should respond with the rooms list', done => {
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
})
